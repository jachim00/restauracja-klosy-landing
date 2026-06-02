/**
 * Dane strukturalne JSON-LD (SEO + AI SEO/AEO).
 * Tylko potwierdzone fakty. Pola niepewne pomijamy lub zostawiamy puste —
 * NIE wstawiamy zmyślonych ocen/cen/godzin.
 */
import { restaurant } from "@/content/restaurant-data";
import { faqItems } from "@/content/faq";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://restauracja-klosy-landing.vercel.app";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: restaurant.name,
    url: SITE,
    email: restaurant.contact.email,
    telephone: `+48${restaurant.contact.phone}`,
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE}/#restaurant`,
    name: restaurant.name,
    servesCuisine: "Polish",
    url: SITE,
    telephone: `+48${restaurant.contact.phone}`,
    email: restaurant.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      postalCode: restaurant.address.postalCode,
      addressLocality: restaurant.address.city,
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    sameAs: [restaurant.social.facebook].filter((u) => u && !u.includes("[DO")),
    // openingHoursSpecification: [DO UZUPEŁNIENIA] — dodać po potwierdzeniu godzin
  };
}

export function localBusinessSchema() {
  return { ...restaurantSchema(), "@type": ["Restaurant", "LocalBusiness"] };
}

export function websiteSchema(lang: string = "pl-PL") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: restaurant.name,
    url: SITE,
    inLanguage: lang,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.url}`,
    })),
  };
}

export function faqSchema(items = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Restaurant", name: restaurant.name, url: SITE },
    areaServed: { "@type": "City", name: "Warszawa" },
  };
}

/** Helper do renderu w komponencie <JsonLd data={...} />. */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data);
}
