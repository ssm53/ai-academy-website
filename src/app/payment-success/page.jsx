'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaCheckCircle, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      // You can fetch payment details here if needed
      console.log('Payment session ID:', sessionId);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Thank you for enrolling in Zez Academy!
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">What&apos;s Next?</h3>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li>• You&apos;ll receive a confirmation email shortly</li>
            <li>• Our team will contact you within 24 hours</li>
            <li>• Course materials will be shared via email</li>
            <li>• Join our WhatsApp group for updates</li>
          </ul>
        </div>

        <div className="space-y-3">
          <a
            href="mailto:shaun@zezacademy.com"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaEnvelope />
            Contact via Email
          </a>
          
          <a
            href="https://wa.me/60123397028"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp />
            WhatsApp Support
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

const PaymentSuccess = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccess; 