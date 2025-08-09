import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

// Initialize Stripe on the client side
let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

// Initialize Stripe on the server side
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null;

// Stripe configuration for Malaysia
export const STRIPE_CONFIG = {
  currency: "myr",
  country: "MY",
  // Malaysia supported payment methods
  paymentMethods: [
    "card", // Credit/Debit cards
    "fpx", // Malaysian online banking (FPX)
    "grabpay", // GrabPay wallet
    "alipay", // Alipay
  ],
  // Malaysian banks for FPX
  fpxBanks: [
    "affin_bank",
    "alliance_bank",
    "ambank",
    "bank_islam",
    "bank_muamalat",
    "bank_rakyat",
    "bsn",
    "cimb",
    "deutsche_bank",
    "hong_leong_bank",
    "hsbc",
    "kfh",
    "maybank2e",
    "maybank2u",
    "ocbc",
    "pb_enterprise",
    "public_bank",
    "rhb",
    "standard_chartered",
    "uob",
  ],
};

// Convert amount to cents for Stripe (Malaysia uses RM)
export const formatAmountForStripe = (amount, currency = "myr") => {
  return Math.round(amount * 100); // Convert RM to cents
};

// Convert amount from cents for display
export const formatAmountFromStripe = (amount, currency = "myr") => {
  return (amount / 100).toFixed(2);
};

// Format price for display
export const formatPrice = (amount, currency = "MYR") => {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};
