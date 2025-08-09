// src/app/layout.js (Server Component)
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Zez Academy - Premier AI & Technology Education in Malaysia",
    template: "%s | Zez Academy"
  },
  description: "Transform your future with Zez Academy's cutting-edge AI, machine learning, and technology courses. Expert-led training in Malaysia with hands-on projects and industry connections.",
  keywords: [
    "AI Academy Malaysia",
    "Machine Learning Course",
    "Technology Education",
    "Data Science Training",
    "Programming Bootcamp",
    "Artificial Intelligence Course",
    "Tech Skills Malaysia",
    "Digital Transformation",
    "Coding Bootcamp",
    "AI Certification"
  ],
  authors: [{ name: "Zez Academy" }],
  creator: "Zez Academy",
  publisher: "Zez Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://zezacademy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: 'https://zezacademy.com',
    siteName: 'Zez Academy',
    title: 'Zez Academy - Premier AI & Technology Education in Malaysia',
    description: 'Transform your future with Zez Academy\'s cutting-edge AI, machine learning, and technology courses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zez Academy - AI & Technology Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zez Academy - Premier AI & Technology Education in Malaysia',
    description: 'Transform your future with Zez Academy\'s cutting-edge AI, machine learning, and technology courses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Zez Academy",
              "description": "Premier AI & Technology Education in Malaysia",
              "url": "https://zezacademy.com",
              "logo": "https://zezacademy.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MY",
                "addressRegion": "Malaysia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+6-012-339-7028",
                "contactType": "customer service",
                "availableLanguage": ["English", "Malay"]
              },
              "sameAs": [
                "https://www.instagram.com/zezacademy/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        
          <Navbar />
          <main>{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}
