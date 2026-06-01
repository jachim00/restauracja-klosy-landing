/** Nawigacja i stałe globalne. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://restauracja-klosy-landing.vercel.app";

// `label` = pełna etykieta (stopka, menu mobilne); `short` = krótka do paska górnego.
export const navLinks = [
  { label: "Strona główna", short: "Start", href: "/" },
  { label: "Menu dnia", short: "Menu", href: "/menu-dnia" },
  { label: "Imprezy okolicznościowe", short: "Imprezy", href: "/imprezy-okolicznosciowe" },
  { label: "Komunie i chrzciny", short: "Komunie", href: "/komunie-chrzciny" },
  { label: "Wesela i rocznice", short: "Wesela", href: "/wesela-rocznice" },
  { label: "Catering", short: "Catering", href: "/catering" },
  { label: "Galeria", short: "Galeria", href: "/galeria" },
  { label: "Kontakt", short: "Kontakt", href: "/kontakt" },
] as const;
