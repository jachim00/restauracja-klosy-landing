import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GtmScript, GtmNoScript } from "@/components/analytics/GtmScript";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { LOCALE_CODES, DEFAULT_LOCALE, getLocale, isLocale, localizedPath, type LocaleCode } from "@/content/i18n/locales";
import { getDictionary } from "@/content/i18n";

const display = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });

/** Generuje statycznie po jednej wersji strony na każdy język (SSG + eksport). */
export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const loc = getLocale(lang);
  const dict = getDictionary(lang);
  const m = dict.meta.home;

  // hreflang: każdy język + x-default na polski.
  const languages: Record<string, string> = {};
  for (const code of LOCALE_CODES) languages[getLocale(code).htmlLang] = localizedPath(code, "/");
  languages["x-default"] = localizedPath(DEFAULT_LOCALE, "/");

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.title, template: `%s | ${dict.common.brand}` },
    description: m.description,
    alternates: { canonical: localizedPath(lang, "/"), languages },
    openGraph: {
      type: "website",
      locale: loc.ogLocale,
      alternateLocale: LOCALE_CODES.filter((c) => c !== lang).map((c) => getLocale(c).ogLocale),
      siteName: dict.common.brand,
      url: localizedPath(lang, "/"),
      title: m.title,
      description: m.ogDescription,
      images: [
        {
          url: "/assets/restauracja-klosy/interior/wnetrze-sala-lampy.webp",
          alt: dict.common.ogImageAlt,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const loc = getLocale(lang);
  const dict = getDictionary(lang);

  return (
    <html lang={loc.htmlLang} dir={loc.dir} className={`${display.variable} ${sans.variable}`}>
      <head>
        <GtmScript />
        <JsonLd data={[organizationSchema(), websiteSchema(loc.htmlLang), localBusinessSchema()]} />
      </head>
      <body>
        <GtmNoScript />
        <GrainOverlay />
        <Navbar lang={lang} dict={dict.common} />
        <main>{children}</main>
        <Footer lang={lang} dict={dict.common} />
        <CookieBanner lang={lang} dict={dict.common.cookie} />
      </body>
    </html>
  );
}
