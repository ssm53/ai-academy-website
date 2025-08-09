import { NextResponse } from "next/server";
import { stripe, formatAmountForStripe, STRIPE_CONFIG } from "@/lib/stripe";
import { PrismaClient } from "@prisma/client";

const prisma = globalThis._prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis._prisma = prisma;

export async function POST(req) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { fullName, email, whatsapp, amount = 1000 } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

    // Create enrollment record first
    const enrollment = await prisma.enrollment.create({
      data: {
        fullName,
        email,
        whatsapp: whatsapp || null,
        amount: formatAmountForStripe(amount),
        currency: STRIPE_CONFIG.currency,
        paymentStatus: "PENDING",
      },
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: STRIPE_CONFIG.paymentMethods,
      line_items: [
        {
          price_data: {
            currency: STRIPE_CONFIG.currency,
            product_data: {
              name: "Zez Academy - Full-Stack Coding Bootcamp",
              description: "Complete full-stack development bootcamp program",
              images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/logo.png`],
            },
            unit_amount: formatAmountForStripe(amount),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/enrollment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/enrollment/cancelled`,
      customer_email: email,
      metadata: {
        enrollmentId: enrollment.id,
        fullName,
        email,
        whatsapp: whatsapp || "",
      },
      // Configure for Malaysia
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["MY"],
      },
      // Enable specific payment methods for Malaysia
      payment_method_options: {
        card: {
          request_three_d_secure: "automatic",
        },
        fpx: {
          bank: "maybank2u", // Default to Maybank, user can change
        },
      },
    });

    // Update enrollment with session ID
    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      enrollmentId: enrollment.id,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
