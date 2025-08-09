"use client";
import React, { useState } from "react";
import { getStripe } from "@/lib/stripe";
import { formatPrice } from "@/lib/stripe";

const CheckoutButton = ({
  fullName,
  email,
  whatsapp,
  amount = 1000,
  disabled = false,
  className = "",
  children = "Pay Now",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    if (!fullName || !email) {
      setError("Please provide your full name and email");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          whatsapp,
          amount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleCheckout}
        disabled={disabled || isLoading || !fullName || !email}
        className={`
          w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
          disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
          text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200
          shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none
          ${className}
        `}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>{children}</span>
            <span className="text-lg font-bold">{formatPrice(amount)}</span>
          </div>
        )}
      </button>

      {error && (
        <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-md p-2">
          {error}
        </div>
      )}

      <div className="text-xs text-gray-500 text-center">
        <p>💳 Secure payment powered by Stripe</p>
        <p>🏦 Supports Malaysian banks (FPX), Credit/Debit cards, GrabPay</p>
      </div>
    </div>
  );
};

export default CheckoutButton;
