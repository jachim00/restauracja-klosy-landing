/**
 * Słownik PL — mini-konfigurator przyjęcia (sekcja na stronie głównej).
 * KANONICZNE źródło — tłumaczenia muszą mieć identyczny kształt.
 *
 * `icon` w eventTypes = nazwa ikony lucide-react (NIE tłumaczyć, mapowana w komponencie).
 * `id` w eventTypes/typach wydarzeń to klucze techniczne — przekazywane do formularza
 * przez query (?typ=...), więc NIE zmieniać między językami.
 */
export const configurator = {
  heading: "Zaplanuj przyjęcie",
  intro:
    "W kilku krokach zbierz najważniejsze informacje o swoim wydarzeniu. Na końcu przekażemy je do formularza kontaktowego — odezwiemy się z propozycją.",

  progress: {
    // {step} i {total} podstawiane przy renderze.
    stepLabel: "Krok {step} z {total}",
    barAria: "Postęp konfiguratora przyjęcia",
  },

  // Tytuły kroków (1–5), w kolejności.
  stepTitles: [
    "Jaki rodzaj przyjęcia planujesz?",
    "Ile osób spodziewasz się gościć?",
    "Gdzie ma się odbyć?",
    "Jaki termin bierzesz pod uwagę?",
    "Podsumowanie",
  ],

  // Krok 4 — termin
  dateHint: "Termin jest orientacyjny — wspólnie potwierdzimy dostępność.",

  // Krok 5 — podsumowanie
  summary: {
    eventType: "Rodzaj przyjęcia",
    guests: "Liczba gości",
    place: "Miejsce",
    preferredDate: "Preferowany termin",
    dateTbd: "Do ustalenia",
    empty: "—",
    submit: "Wyślij zapytanie o przyjęcie",
  },

  nav: {
    back: "Wstecz",
    next: "Dalej",
  },

  footnote:
    "Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje propozycję menu.",

  eventTypes: [
    { id: "komunia", label: "Komunia", icon: "Sparkles", blurb: "Kameralne przyjęcie komunijne z menu dla dzieci i dorosłych." },
    { id: "chrzest", label: "Chrzest", icon: "Baby", blurb: "Spokojne, rodzinne przyjęcie chrzcinowe w eleganckiej sali." },
    { id: "wesele-kameralne", label: "Wesele kameralne", icon: "Heart", blurb: "Wesele w gronie najbliższych — bez przepychu, z klasą." },
    { id: "rocznica", label: "Rocznica", icon: "Gift", blurb: "Jubileusz, rocznica ślubu lub firmowa — w ciepłej oprawie." },
    { id: "urodziny", label: "Urodziny", icon: "Cake", blurb: "Urodziny dla rodziny i przyjaciół, z menu na życzenie." },
    { id: "spotkanie-rodzinne", label: "Spotkanie rodzinne", icon: "Users", blurb: "Wspólny obiad lub kolacja dla całej rodziny." },
    { id: "spotkanie-firmowe", label: "Spotkanie firmowe", icon: "Briefcase", blurb: "Spotkania zespołów, przerwy kawowe, lunche biznesowe." },
    { id: "catering", label: "Catering", icon: "Truck", blurb: "Catering firmowy i prywatny — w lokalu lub z dostawą." },
    { id: "obiad-grupa", label: "Obiad dla grupy", icon: "UtensilsCrossed", blurb: "Obiady dla grup, w tym grup szkolnych." },
  ],

  guestRanges: ["10–20", "21–35", "36–50", "50+", "catering — większa liczba osób"],

  places: ["W lokalu", "Catering z dostawą", "Do ustalenia"],
};
