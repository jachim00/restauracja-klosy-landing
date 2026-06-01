import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GtmScript, GtmNoScript } from "@/components/analytics/GtmScript";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
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
        url: "/assets/restauracja-klosy/interior/wnetrze-sala-lampy.jpg",
        alt: "Ciepłe wnętrze Restauracji KŁOSY w Warszawie z bursztynowym światłem lamp",
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
      <body>
        <GtmNoScript />
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
