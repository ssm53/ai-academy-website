import { stripe, malaysianPaymentMethods } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { amount, courseName, applicantId } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      ...malaysianPaymentMethods,
      line_items: [
        {
          price_data: {
            currency: 'myr',
            product_data: {
              name: courseName || 'Zez Academy Course',
              description: 'AI Academy Course Enrollment',
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/enrollment?canceled=true`,
      metadata: {
        applicantId: applicantId || '',
        courseName: courseName || '',
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['MY'], // Only Malaysia
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
} 