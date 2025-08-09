import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = globalThis._prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis._prisma = prisma;

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    const body = await req.text();
    const headersList = headers();
    const sig = headersList.get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(event.data.object);
        break;
      case "payment_intent.succeeded":
        await handlePaymentIntentSucceeded(event.data.object);
        break;
      case "payment_intent.payment_failed":
        await handlePaymentIntentFailed(event.data.object);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session) {
  try {
    const enrollmentId = session.metadata.enrollmentId;

    if (!enrollmentId) {
      console.error("No enrollment ID in session metadata");
      return;
    }

    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        paymentStatus: "PROCESSING",
        stripePaymentId: session.payment_intent,
      },
    });

    console.log(`Checkout session completed for enrollment ${enrollmentId}`);
  } catch (error) {
    console.error("Error handling checkout session completed:", error);
  }
}

async function handlePaymentIntentSucceeded(paymentIntent) {
  try {
    const enrollment = await prisma.enrollment.findFirst({
      where: { stripePaymentId: paymentIntent.id },
    });

    if (!enrollment) {
      console.error(
        "No enrollment found for payment intent:",
        paymentIntent.id
      );
      return;
    }

    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        paymentStatus: "COMPLETED",
      },
    });

    // TODO: Send enrollment confirmation email
    console.log(`Payment succeeded for enrollment ${enrollment.id}`);
  } catch (error) {
    console.error("Error handling payment intent succeeded:", error);
  }
}

async function handlePaymentIntentFailed(paymentIntent) {
  try {
    const enrollment = await prisma.enrollment.findFirst({
      where: { stripePaymentId: paymentIntent.id },
    });

    if (!enrollment) {
      console.error(
        "No enrollment found for failed payment intent:",
        paymentIntent.id
      );
      return;
    }

    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        paymentStatus: "FAILED",
      },
    });

    console.log(`Payment failed for enrollment ${enrollment.id}`);
  } catch (error) {
    console.error("Error handling payment intent failed:", error);
  }
}
