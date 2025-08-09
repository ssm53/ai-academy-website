"use client";
import Link from "next/link";

export default function EnrollmentCancelled() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            Your payment was cancelled. No charges have been made to your
            account.
          </p>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          <p className="mb-4">Don&apos;t worry! You can still:</p>
          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-2">
              <span>💳</span>
              <span>Try a different payment method</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>Contact us for payment assistance</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>❓</span>
              <span>Ask questions about the program</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/#pricing"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Try Again
          </Link>
          <Link
            href="/#contact"
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Contact Support
          </Link>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 text-sm inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mt-6 pt-4 border-t">
          <p className="text-xs text-gray-500">
            Questions? Email us at support@zezacademy.com
          </p>
        </div>
      </div>
    </div>
  );
}
