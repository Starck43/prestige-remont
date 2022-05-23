module.exports = {
  siteUrl: "https://престиж-ремонт.рф",
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ["/disallowed"],
  alternateRefs: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/*",
      },
      {
        userAgent: "*",
        disallow: "/api",
      },
      {
        userAgent: "*",
        disallow: "*/?",
      },
      {
        userAgent: "*",
        disallow: "/search/?q=",
      },
      {
        userAgent: "*",
        disallow: "/api/*",
      },
    ],
  },
}
