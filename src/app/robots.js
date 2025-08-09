export default function robots() {
  const baseUrl = "https://zezacademy.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/db/",
        "/db.test/",
        "/_next/",
        "/admin/",
        "/private/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
