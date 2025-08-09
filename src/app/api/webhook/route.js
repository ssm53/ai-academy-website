import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        
        console.log('Processing completed checkout session:', session.id);
        
        try {
          // Create payment record in database
          const payment = await prisma.payment.create({
            data: {
              stripeSessionId: session.id,
              amount: session.amount_total / 100, // Convert from cents to MYR
              currency: session.currency.toUpperCase(),
              status: 'completed',
              applicantId: session.metadata.applicantId ? parseInt(session.metadata.applicantId) : null,
              courseName: session.metadata.courseName || 'Unknown Course',
            },
          });
          
          console.log('Payment record created:', payment.id);
          
          // If we have an applicant ID, update their status
          if (session.metadata.applicantId) {
            await prisma.applicant.update({
              where: { id: parseInt(session.metadata.applicantId) },
              data: { 
                status: 'enrolled',
                updatedAt: new Date()
              },
            });
            console.log('Applicant status updated to enrolled');
          }
          
        } catch (dbError) {
          console.error('Database error creating payment record:', dbError);
          // Don't fail the webhook, just log the error
        }
        break;

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('Payment intent succeeded:', paymentIntent.id);
        
        // Update payment status if we have a matching session
        try {
          await prisma.payment.updateMany({
            where: { 
              stripeSessionId: paymentIntent.metadata.checkout_session_id || paymentIntent.id 
            },
            data: { 
              status: 'completed',
              updatedAt: new Date()
            },
          });
        } catch (dbError) {
          console.error('Database error updating payment status:', dbError);
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', failedPayment.id);
        
        // Update payment status to failed
        try {
          await prisma.payment.updateMany({
            where: { 
              stripeSessionId: failedPayment.metadata.checkout_session_id || failedPayment.id 
            },
            data: { 
              status: 'failed',
              updatedAt: new Date()
            },
          });
        } catch (dbError) {
          console.error('Database error updating payment status:', dbError);
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
} 