/**
 * Słownik PL — podstrona „Menu dnia" (/menu-dnia).
 * Kanoniczne źródło tekstów. Tłumaczenia muszą zachować ten sam kształt kluczy.
 * Nazwy własne (KŁOSY, nazwa Fundacji, adres, telefon) oraz znaczniki
 * [DO UZUPEŁNIENIA] NIE są tłumaczone. Kategorie menu i znaczniki placeholderów
 * pochodzą z content/menu.ts (struktura współdzielona) — tu zostają teksty
 * specyficzne dla tej strony.
 */
export const menuDnia = {
  hero: {
    alt: "Domowy obiad w Restauracji KŁOSY: golonka, zupa i deser",
    eyebrow: "Menu dnia • Warszawa, Ochota",
    title: "Menu dnia i kuchnia polska w centrum Warszawy",
    subtitle:
      "Codzienne obiady domowe — zupy, dania główne i propozycje wegetariańskie — przy Al. Jerozolimskich 123a w Warszawie (Atlas Tower, Ochota). Na zwykły obiad w pracy, lunch ze znajomymi i większe zamówienia dla grup.",
    ctaLabel: "Zapytaj o termin",
  },

  breadcrumbs: {
    ariaLabel: "Okruszki",
    home: "Strona główna",
    current: "Menu dnia",
  },

  facts: [
    { value: "Menu dnia", label: "codziennie świeżo" },
    { value: "Kuchnia polska", label: "domowe obiady" },
    { value: "Obiady dla grup", label: "na miejscu lub z dostawą" },
    { value: "Dostawa", label: "na terenie Warszawy" },
  ],

  about: {
    alt: "Pieczona kaczka — danie główne z domowej kuchni Restauracji KŁOSY",
    eyebrow: "Czym jest u nas menu dnia",
    title: "Domowe obiady bez udziwnień",
    p1: "Menu dnia to zestaw obiadowy przygotowywany świeżo na bieżąco — domowa kuchnia bez udziwnień: rozgrzewająca zupa, sycące danie główne i opcja wegetariańska. Stawiamy na proste, dobre jedzenie, jakie zna się z domu, podane spokojnie i bez pośpiechu. Dokładny skład zestawu zmienia się każdego dnia.",
    // {foundation} zostaje podstawione w komponencie nazwą Fundacji (nazwa własna).
    p2Before:
      "Aktualną kartę i bieżące menu dnia potwierdzamy telefonicznie lub w lokalu — ceny oraz konkretne pozycje podajemy w kontakcie, żeby informacja była zawsze zgodna z tym, co realnie gotujemy danego dnia. Restauracja działa przy ",
    p2After: ", a zysk wspiera jej cele statutowe.",
    points: [
      "Obiad w przerwie w pracy (okolice Atlas Tower)",
      "Lunch ze znajomymi lub rodziną",
      "Codzienny ciepły posiłek na miejscu",
      "Większe zamówienia obiadowe dla grup",
    ],
  },

  groups: {
    alt: "Obiad: kurczak z makaronem — propozycja dla grup w Restauracji KŁOSY",
    eyebrow: "Obiady dla grup",
    title: "Obiad dla zespołu, klasy i rodziny",
    p1: "Przygotowujemy obiady dla grup — również grup szkolnych, zespołów firmowych i spotkań rodzinnych. Menu dobieramy pod liczbę osób i preferencje, uwzględniamy dania wegetariańskie oraz informacje o alergiach podane wcześniej w zapytaniu.",
    p2: "Liczbę porcji, formę wydania (na miejscu lub z dostawą) i termin ustalamy indywidualnie. Wystarczy napisać, ilu jest gości i na kiedy potrzebny jest obiad — odeślemy propozycję menu i potwierdzimy dostępność.",
    points: [
      "• Menu dopasowane do grupy (w tym opcje wegetariańskie)",
      "• Obiady dla grup szkolnych i zespołów firmowych",
      "• Wydanie na miejscu lub z dostawą na terenie Warszawy",
    ],
    ctaLabel: "Zapytaj o obiady dla grupy",
  },

  delivery: {
    alt: "Tagliatelle z krewetkami — danie z karty Restauracji KŁOSY",
    eyebrow: "Obiad z dostawą",
    title: "Obiad z menu dnia z dowozem w Warszawie",
    lead: "Obiad z menu dnia możesz zamówić z dostawą — przez popularne platformy dowozowe. Dostępność dań, godziny i obszar dowozu potwierdzamy bezpośrednio; poniżej linki do zamówienia online.",
    pyszneLabel: "Zamów na Pyszne.pl",
    pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
    glovoLabel: "Zamów na Glovo",
    glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
    cateringBefore: "Wolisz większe, indywidualne zamówienie? Sprawdź ",
    cateringLink: "ofertę cateringową",
    cateringAfter: " — catering firmowy i prywatny przygotowujemy na podstawie zapytania.",
  },

  menu: {
    title: "Co znajdziesz w karcie",
    intro:
      "Poniżej kategorie naszej karty. Konkretne pozycje i ceny uzupełniamy na podstawie aktualnego menu restauracji — do tego czasu podajemy je telefonicznie lub w lokalu.",
    pdfLabel: "Pobierz menu (PDF)",
    pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
  },

  realizacje: {
    heading: "Zobacz nasze realizacje",
    images: [
      { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Pierogi z jagodami z domowej kuchni Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Obiad: pieczeń z surówkami w Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "Taca deserów owsianych w Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Owsianka z truskawkami w Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Deser czekoladowy z wiśniami w Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Dwa kubki owsianki w Restauracji KŁOSY" },
    ],
  },

  faq: {
    heading: "Najczęstsze pytania o obiady",
  },

  next: {
    heading: "Zobacz też",
    cards: [
      { href: "/catering", label: "Catering", desc: "Firmowy i prywatny, w lokalu lub z dostawą." },
      { href: "/imprezy-okolicznosciowe", label: "Imprezy okolicznościowe", desc: "Kameralne przyjęcia i spotkania." },
      { href: "/kontakt", label: "Kontakt", desc: "Zapytaj o termin, menu i obiady dla grup." },
    ],
  },

  cta: {
    title: "Zamów obiady lub zapytaj o menu dnia",
    text: "Napisz, ilu jest gości i na kiedy — przygotujemy propozycję i potwierdzimy termin.",
    button: "Wyślij zapytanie",
  },

  schema: {
    serviceName: "Menu dnia i obiady domowe — Warszawa",
    serviceDescription:
      "Codzienne obiady domowe (menu dnia), kuchnia polska, obiady dla grup oraz dostawa w Warszawie. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
  },
};
