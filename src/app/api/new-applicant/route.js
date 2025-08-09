import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

// --- Prisma (reuse client in dev to avoid too many connections) ---
const prisma = globalThis._prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis._prisma = prisma;

// --- Nodemailer transporter (built once, reused) ---
let transporterPromise;
function getTransporter() {
  if (!transporterPromise) {
    transporterPromise = (async () => {
      const host = process.env.SMTP_HOST;
      const port = Number(process.env.SMTP_PORT || 465);
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;

      if (!host || !user || !pass) {
        console.warn("[new-applicant] SMTP not configured; emails disabled.");
        return null;
      }

      return nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // 465=true, 587=false
        auth: { user, pass },
      });
    })();
  }
  return transporterPromise;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, email, whatsapp, reason, study, institution } = body || {};

    // Minimal validation
    if (!fullname || !email || !institution || !reason) {
      return NextResponse.json(
        { error: "Missing required fields (fullname, email, institution, reason)" },
        { status: 400 }
      );
    }

    // 1) Write to DB
    const created = await prisma.applicant.create({
      data: {
        fullName: fullname,
        email,
        whatsapp: whatsapp ?? null,
        study: study ?? null,
        institution: institution ?? null,
        reason: reason ?? null,
      },
      select: { id: true, fullName: true, email: true, study: true, institution: true, reason: true },
    });

    // 2) Send notification email (best-effort)
    try {
      const transporter = await getTransporter();
      if (transporter) {
        const to = process.env.NOTIFY_TO || process.env.SMTP_USER;
        const from = process.env.SMTP_FROM || process.env.SMTP_USER;
        const subject = `New Applicant: ${created.fullName} (#${created.id})`;

        const text = [
          `A new application was submitted:`,
          ``,
          `Name: ${created.fullName}`,
          `Email: ${created.email}`,
          `WhatsApp: ${whatsapp || "-"}`,
          `Study: ${created.study || "-"}`,
          `Institution: ${created.institution || "-"}`,
          `Reason: ${created.reason || "-"}`,
          `Applicant ID: ${created.id}`,
        ].join("\n");

        const html = `
          <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
            <h2>New Applicant</h2>
            <table cellpadding="6" style="border-collapse:collapse">
              <tr><td><strong>Name</strong></td><td>${escapeHtml(created.fullName || "")}</td></tr>
              <tr><td><strong>Email</strong></td><td>${escapeHtml(created.email || "")}</td></tr>
              <tr><td><strong>WhatsApp</strong></td><td>${escapeHtml(whatsapp || "-")}</td></tr>
              <tr><td><strong>Study</strong></td><td>${escapeHtml(created.study || "-")}</td></tr>
              <tr><td><strong>Institution</strong></td><td>${escapeHtml(created.institution || "-")}</td></tr>
              <tr><td><strong>Reason</strong></td><td>${escapeHtml(created.reason || "-")}</td></tr>
              <tr><td><strong>Applicant ID</strong></td><td>${created.id}</td></tr>
            </table>
          </div>
        `;

        await transporter.sendMail({ from, to, subject, text, html });
      }
    } catch (mailErr) {
      console.error("[new-applicant] Email send error:", mailErr);
      // Don’t fail the request if email fails
    }

    return NextResponse.json({ ok: true, id: created.id }, { status: 201 });
  } catch (err) {
    console.error("new-applicant POST error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const latest = await prisma.applicant.findMany({
      orderBy: { id: "desc" },
      take: 10,
      select: { id: true, fullName: true, email: true, study: true, institution: true },
    });
    return NextResponse.json({ data: latest });
  } catch (err) {
    console.error("new-applicant GET error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
