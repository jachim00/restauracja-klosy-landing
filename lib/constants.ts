/** Nawigacja i stałe globalne. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://restauracja-klosy-landing.vercel.app";

export const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Menu dnia", href: "/menu-dnia" },
  { label: "Imprezy okolicznościowe", href: "/imprezy-okolicznosciowe" },
  { label: "Komunie i chrzciny", href: "/komunie-chrzciny" },
  { label: "Wesela i rocznice", href: "/wesela-rocznice" },
  { label: "Catering", href: "/catering" },
  { label: "Galeria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
