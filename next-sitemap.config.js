/** @type {import('next-sitemap').IConfig} */
const LOCALES = ["pl", "en", "uk", "de", "cs", "sk", "fr", "hu", "ar"];
const HREFLANG = {
  pl: "pl-PL", en: "en", uk: "uk", de: "de", cs: "cs", sk: "sk", fr: "fr", hu: "hu", ar: "ar",
};

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://pflgroup.github.io/restauracja-klosy-landing",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./out", // statyczny eksport
  changefreq: "weekly",
  priority: 0.7,
  // "/" to statyczne przekierowanie (noindex); polityka prywatności jest noindex.
  exclude: ["/", "/*/polityka-prywatnosci"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  // Per-strona: hreflang dla wszystkich 9 języków + x-default (PL).
  transform: async (config, path) => {
    const segs = path.replace(/^\/+/, "").split("/");
    const code = segs[0];
    if (!LOCALES.includes(code)) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
      };
    }
    const rest = segs.slice(1).join("/");
    const tail = rest ? `/${rest}` : "";
    const alternateRefs = LOCALES.map((l) => ({
      href: `${config.siteUrl}/${l}${tail}`,
      hreflang: HREFLANG[l],
    }));
    alternateRefs.push({ href: `${config.siteUrl}/pl${tail}`, hreflang: "x-default" });
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: code === "pl" ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs,
    };
  },
};
