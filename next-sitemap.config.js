/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://jachim00.github.io/restauracja-klosy-landing",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./out", // statyczny eksport
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
