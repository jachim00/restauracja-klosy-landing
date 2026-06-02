/**
 * Słownik PL — interaktywne zakładki ofertowe (sekcja na stronie głównej).
 * KANONICZNE źródło — tłumaczenia muszą mieć identyczny kształt.
 *
 * `href` to ścieżki BEZ prefiksu języka — komponent dokleja go przez
 * localizedPath(lang, href). `image`/`imageAlt` przepisane 1:1 z content/offer-tabs.ts.
 * Nazwy własne (KŁOSY) NIE są tłumaczone.
 */
export const offers = {
  heading: "Co możemy dla Ciebie zorganizować?",
  intro:
    "Wybierz rodzaj wydarzenia — pokażemy zakres, korzyści i kolejny krok. Szczegóły i menu ustalamy indywidualnie po Twoim zapytaniu.",
  tablistAria: "Oferta",
  tabs: [
    {
      id: "obiady",
      label: "Obiady i menu dnia",
      heading: "Domowe obiady i menu dnia w centrum Warszawy",
      description:
        "Codzienne obiady przygotowywane na miejscu — kuchnia polska, sezonowe składniki, menu dnia dla gości indywidualnych i grup. Dobre miejsce na lunch w okolicy Al. Jerozolimskich i Ochoty.",
      benefits: ["Świeże menu dnia", "Opcje wegetariańskie", "Obiady dla grup", "Catering z dostawą"],
      ctaLabel: "Zobacz menu dnia",
      href: "/menu-dnia",
      image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
      imageAlt: "Domowy obiad w Restauracji KŁOSY w Warszawie: pieczona golonka, zupa i deser",
    },
    {
      id: "komunie-chrzciny",
      label: "Komunie i chrzciny",
      heading: "Przyjęcia komunijne i chrzcinowe",
      description:
        "Kameralne przyjęcia rodzinne z menu dopasowanym do dzieci i dorosłych oraz obsługą na miejscu. Termin i szczegóły ustalamy indywidualnie.",
      benefits: ["Menu dla dzieci i dorosłych", "Sala na wyłączność (do potwierdzenia)", "Obsługa kelnerska", "Pomoc w organizacji"],
      ctaLabel: "Zapytaj o komunię / chrzciny",
      href: "/komunie-chrzciny",
      image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
      imageAlt: "Aranżacja stołu na komunię z przekąskami w Restauracji KŁOSY w Warszawie",
    },
    {
      id: "wesela",
      label: "Wesela kameralne",
      heading: "Kameralne wesela i rocznice",
      description:
        "Wesele w gronie najbliższych, jubileusze i rocznice — w ciepłej, naturalnej oprawie. Menu i liczbę gości ustalamy pod konkretne wydarzenie.",
      benefits: ["Kameralna atmosfera", "Indywidualne menu", "Dekoracje naturalne", "Wsparcie organizacyjne"],
      ctaLabel: "Zapytaj o wesele / rocznicę",
      href: "/wesela-rocznice",
      image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
      imageAlt: "Stół bankietowy nakryty na kameralne przyjęcie w Restauracji KŁOSY w Warszawie",
    },
    {
      id: "rodzinne",
      label: "Rocznice i spotkania rodzinne",
      heading: "Rocznice, urodziny i spotkania rodzinne",
      description:
        "Wspólny obiad lub kolacja dla rodziny, urodziny, jubileusze — bez stresu organizacyjnego, z menu na życzenie.",
      benefits: ["Menu na życzenie", "Miejsce dla rodziny", "Obsługa na miejscu", "Elastyczne godziny"],
      ctaLabel: "Zaplanuj spotkanie",
      href: "/imprezy-okolicznosciowe",
      image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
      imageAlt: "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do rodzinnego spotkania",
    },
    {
      id: "catering",
      label: "Catering firmowy i prywatny",
      heading: "Catering firmowy i prywatny w Warszawie",
      description:
        "Catering na spotkania firmowe, szkolenia i wydarzenia prywatne — w lokalu lub z dostawą. Zakres i formę ustalamy na podstawie zapytania.",
      benefits: ["Catering z dostawą", "Przerwy kawowe", "Lunche biznesowe", "Faktura VAT"],
      ctaLabel: "Zapytaj o catering",
      href: "/catering",
      image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
      imageAlt: "Bufet cateringowy KŁOSY w Warszawie z przekąskami caprese, tartinkami i deserami",
    },
    {
      id: "grupy",
      label: "Obiady dla grup szkolnych",
      heading: "Obiady dla grup, w tym szkolnych",
      description:
        "Przygotowujemy obiady dla grup — wycieczek, grup szkolnych i zorganizowanych. Prosimy o kontakt w celu ustalenia liczby osób i menu.",
      benefits: ["Menu dla grup", "Sprawna obsługa", "Elastyczne terminy", "Dostosowanie do diet"],
      ctaLabel: "Zapytaj o obiad dla grupy",
      href: "/catering",
      image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
      imageAlt: "Obiady domowe dla grup w Restauracji KŁOSY w Warszawie — kurczak i makaron w sosie",
    },
  ],
};
