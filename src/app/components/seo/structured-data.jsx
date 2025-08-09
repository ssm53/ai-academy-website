import React from "react";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Zez Academy",
    alternateName: "Zez Academy Coding Bootcamp",
    url: "https://zezacademy.com",
    logo: "https://zezacademy.com/assets/logo.png",
    description:
      "Premier full-stack coding bootcamp in Malaysia offering comprehensive web development training with React, Node.js, and modern technologies.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
      addressRegion: "Kuala Lumpur",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+60-123-456-789",
      contactType: "customer service",
      email: "info@zezacademy.com",
    },
    sameAs: [
      "https://www.facebook.com/zezacademy",
      "https://www.instagram.com/zezacademy",
      "https://www.linkedin.com/company/zezacademy",
      "https://twitter.com/zezacademy",
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Full-Stack Web Development Bootcamp",
    description:
      "Comprehensive 600-hour full-stack web development bootcamp covering React, Node.js, PostgreSQL, and modern web technologies with hands-on projects and mentorship.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Zez Academy",
      url: "https://zezacademy.com",
    },
    courseMode: ["onsite", "hybrid"],
    educationalLevel: "Beginner to Intermediate",
    timeRequired: "PT600H",
    occupationalCategory: "Software Developer",
    educationalCredentialAwarded: "Certificate of Completion",
    coursePrerequisites:
      "Basic computer literacy, no prior coding experience required",
    syllabusSections: [
      {
        "@type": "Syllabus",
        name: "Frontend Development",
        description: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
      },
      {
        "@type": "Syllabus",
        name: "Backend Development",
        description: "Node.js, Express.js, RESTful APIs, Authentication",
      },
      {
        "@type": "Syllabus",
        name: "Database Management",
        description: "PostgreSQL, Prisma ORM, Database design",
      },
      {
        "@type": "Syllabus",
        name: "DevOps & Deployment",
        description: "Git, GitHub, Vercel, Docker basics",
      },
    ],
    offers: {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      url: "https://zezacademy.com/#pricing",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What programming languages will I learn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll learn JavaScript (ES6+), HTML5, CSS3, React.js for frontend, Node.js and Express.js for backend, SQL for databases, and Git for version control.",
        },
      },
      {
        "@type": "Question",
        name: "How long is the bootcamp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The full-stack coding bootcamp is 600 hours of intensive training, typically completed in 12-16 weeks depending on the schedule format you choose.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need prior coding experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No prior coding experience is required. Our bootcamp is designed for complete beginners and will take you from zero to job-ready full-stack developer.",
        },
      },
      {
        "@type": "Question",
        name: "What support do you provide for job placement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide career coaching, resume building, interview preparation, portfolio development guidance, and connections to our network of hiring partners in Malaysia's tech industry.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://zezacademy.com/#localbusiness",
    name: "Zez Academy",
    image: "https://zezacademy.com/assets/logo.png",
    telephone: "+60-123-456-789",
    email: "info@zezacademy.com",
    url: "https://zezacademy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tech Hub, Kuala Lumpur",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.1390",
      longitude: "101.6869",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "RM1000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
