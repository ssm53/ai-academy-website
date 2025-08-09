import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { PrismaClient } from "@prisma/client";

const prisma = globalThis._prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis._prisma = prisma;

export async function GET(req) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    // Find the enrollment record
    const enrollment = await prisma.enrollment.findFirst({
      where: { stripeSessionId: sessionId },
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: "Enrollment not found" },
        { status: 404 }
      );
    }

    // Return enrollment details
    return NextResponse.json({
      id: enrollment.id,
      fullName: enrollment.fullName,
      email: enrollment.email,
      amount: enrollment.amount,
      currency: enrollment.currency,
      paymentStatus: enrollment.paymentStatus,
      sessionStatus: session.payment_status,
      createdAt: enrollment.createdAt,
    });
  } catch (error) {
    console.error("Enrollment verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify enrollment" },
      { status: 500 }
    );
  }
}
