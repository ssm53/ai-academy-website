"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function EnrollmentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Verify the payment and get enrollment details
      fetch(`/api/enrollment/verify?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setEnrollment(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error verifying enrollment:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful! 🎉
        </h1>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Welcome to Zez Academy!
          </h2>
          <p className="text-green-700 text-sm">
            Your enrollment has been confirmed. You&apos;ll receive a
            confirmation email with further details shortly.
          </p>
        </div>

        {enrollment && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              Enrollment Details:
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <strong>Name:</strong> {enrollment.fullName}
              </p>
              <p>
                <strong>Email:</strong> {enrollment.email}
              </p>
              <p>
                <strong>Amount Paid:</strong> RM{" "}
                {(enrollment.amount / 100).toFixed(2)}
              </p>
              <p>
                <strong>Status:</strong>
                <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Confirmed
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p className="mb-2">📧 Check your email for:</p>
            <ul className="text-left space-y-1 ml-4">
              <li>• Payment receipt</li>
              <li>• Bootcamp schedule</li>
              <li>• Pre-course materials</li>
              <li>• Discord/WhatsApp group invite</li>
            </ul>
          </div>

          <div className="pt-4 border-t space-y-2">
            <Link
              href="/"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Back to Home
            </Link>
            <p className="text-xs text-gray-500">
              Need help? Contact us at support@zezacademy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <EnrollmentSuccessContent />
    </Suspense>
  );
}
