import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GtmScript, GtmNoScript } from "@/components/analytics/GtmScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const display = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Restauracja KŁOSY Warszawa | Obiady, catering i przyjęcia rodzinne",
    template: "%s | Restauracja KŁOSY",
  },
  description:
    "Restauracja KŁOSY przy Al. Jerozolimskich 123a w Warszawie — domowe obiady, catering oraz kameralne przyjęcia: komunie, chrzciny, wesela, rocznice i spotkania firmowe.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Restauracja KŁOSY",
    url: SITE_URL,
    title: "Restauracja KŁOSY Warszawa | Obiady, catering i przyjęcia rodzinne",
    description:
      "Domowa kuchnia i przyjęcia rodzinne w centrum Warszawy. Zapytaj o termin komunii, chrzcin, wesela lub cateringu.",
    images: [
      {
        url: "/assets/restauracja-klosy/catering/catering-bufet-caprese.jpg",
        alt: "Bufet w Restauracji KŁOSY w Warszawie — przekąski i dania na przyjęcia",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl-PL" className={`${display.variable} ${sans.variable}`}>
      <head>
        <GtmScript />
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
      </head>
      <body className="pb-14 lg:pb-0">
        <GtmNoScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
        <CookieBanner />
      </body>
    </html>
  );
}
