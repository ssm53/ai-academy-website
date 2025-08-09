// src/app/layout.js (Server Component)
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles
import LenisScroll from "../lenis-scroll"; // Import the Lenis scroll client component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://zezacademy.com"),
  title: {
    default: "Zez Academy - Premier Full-Stack Coding Bootcamp in Malaysia",
    template: "%s | Zez Academy",
  },
  description:
    "Transform your career with Malaysia's premier full-stack coding bootcamp. Learn React, Node.js, PostgreSQL, and modern web development. Hands-on projects, expert mentorship, and job placement assistance. Enroll now!",
  keywords: [
    "coding bootcamp Malaysia",
    "full-stack development course",
    "React bootcamp",
    "Node.js training",
    "web development Malaysia",
    "programming course KL",
    "software development bootcamp",
    "tech career change Malaysia",
    "coding academy Malaysia",
    "learn programming Malaysia",
  ],
  authors: [{ name: "Zez Academy" }],
  creator: "Zez Academy",
  publisher: "Zez Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://zezacademy.com",
    siteName: "Zez Academy",
    title: "Zez Academy - Premier Full-Stack Coding Bootcamp in Malaysia",
    description:
      "Transform your career with Malaysia's premier full-stack coding bootcamp. Learn React, Node.js, PostgreSQL with hands-on projects and expert mentorship.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Zez Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zez Academy - Premier Full-Stack Coding Bootcamp in Malaysia",
    description:
      "Transform your career with Malaysia's premier full-stack coding bootcamp. Learn React, Node.js, PostgreSQL with hands-on projects.",
    images: ["/assets/logo.png"],
    creator: "@zezacademy",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LenisScroll /> {/* Include the Lenis smooth scroll */}
        {children}
      </body>
    </html>
  );
}
