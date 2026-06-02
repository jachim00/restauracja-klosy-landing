/**
 * Słownik PL — warstwa globalna (chrome): nawigacja, CTA, stopka, mobilny pasek,
 * baner cookies, przełącznik języka. KANONICZNE źródło — tłumaczenia muszą mieć
 * identyczny kształt (typ Dictionary jest z tego wyprowadzany).
 *
 * `href` w nav/footer to ścieżki BEZ prefiksu języka — komponenty doklejają go
 * przez localizedPath(lang, href). Nazwy własne (KŁOSY, nazwa Fundacji, adres,
 * telefon) NIE są tłumaczone.
 */
export const common = {
  brand: "KŁOSY",
  brandFull: "Restauracja KŁOSY",
  ogImageAlt: "Ciepłe wnętrze Restauracji KŁOSY w Warszawie z bursztynowym światłem lamp",
  skipToContent: "Przejdź do treści",

  nav: {
    ariaLabel: "Główna nawigacja",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    // label = pełna etykieta (menu mobilne / stopka), short = pasek górny
    links: [
      { key: "home", href: "/", label: "Strona główna", short: "Start" },
      { key: "menu", href: "/menu-dnia", label: "Menu dnia", short: "Menu" },
      { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Imprezy okolicznościowe", short: "Imprezy" },
      { key: "komunie", href: "/komunie-chrzciny", label: "Komunie i chrzciny", short: "Komunie" },
      { key: "wesela", href: "/wesela-rocznice", label: "Wesela i rocznice", short: "Wesela" },
      { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
      { key: "galeria", href: "/galeria", label: "Galeria", short: "Galeria" },
      { key: "kontakt", href: "/kontakt", label: "Kontakt", short: "Kontakt" },
    ],
  },

  langSwitcher: {
    label: "Zmień język",
    current: "Język",
  },

  cta: {
    reserve: "Zapytaj o termin",
    sendInquiry: "Wyślij zapytanie",
    call: "Zadzwoń",
    write: "Napisz",
    ask: "Zapytaj o termin",
    seeOffer: "Zobacz ofertę",
    seeMenu: "Zobacz menu dnia",
    backHome: "Wróć na stronę główną",
  },

  mobileCta: {
    call: "Zadzwoń",
    write: "Napisz",
    ask: "Zapytaj",
  },

  footer: {
    tagline: "Domowa kuchnia, catering i kameralne przyjęcia rodzinne w centrum Warszawy.",
    navHeading: "Nawigacja",
    contactHeading: "Kontakt",
    foundationNote:
      "Restauracja prowadzona przez Fundację Pomocy Rodzinie „Człowiek w Potrzebie” — zysk wspiera cele statutowe Fundacji.",
    copyright: "Wszelkie prawa zastrzeżone.",
    madeBy: "Realizacja:",
    privacy: "Polityka prywatności",
  },

  cookie: {
    text:
      "Używamy plików cookies do celów statystycznych i marketingowych. Możesz zaakceptować wszystkie lub korzystać tylko z niezbędnych.",
    accept: "Akceptuję",
    reject: "Tylko niezbędne",
    privacyLink: "Polityka prywatności",
    ariaLabel: "Informacja o plikach cookies",
  },
};
