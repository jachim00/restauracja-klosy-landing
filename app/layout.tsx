import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { GtmScript, GtmNoScript } from "@/components/analytics/GtmScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

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
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl-PL" className={`${fraunces.variable} ${inter.variable}`}>
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
      </body>
    </html>
  );
}
