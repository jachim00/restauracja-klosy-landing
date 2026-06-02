/**
 * Słownik PL — strona główna (sekcje inline z app/[lang]/page.tsx + Hero).
 * KANONICZNE źródło — tłumaczenia muszą mieć identyczny kształt.
 *
 * Nazwy własne (KŁOSY, nazwa Fundacji, adres, telefon) NIE są tłumaczone i nie
 * trafiają tutaj — pochodzą z restaurant-data.ts. Hrefy lokalizujemy przy renderze.
 */
export const home = {
  hero: {
    badge: "Warszawa · Al. Jerozolimskie 123a",
    // Tytuł rozbity na fragmenty, by wyróżnić słowo „kuchnia" (text-wheat).
    titleBefore: "Domowa ",
    titleHighlight: "kuchnia",
    titleAfter: " i przyjęcia rodzinne w sercu Warszawy",
    subtitle:
      "Obiady, catering i kameralne przyjęcia — komunie, chrzciny, wesela, rocznice i spotkania firmowe. Powiedz, co planujesz, a przygotujemy propozycję menu.",
    ctaAsk: "Zapytaj o termin",
    ctaSeeOffer: "Zobacz ofertę",
    scrollAria: "Przewiń do oferty",
  },

  about: {
    heading: "Restauracja KŁOSY w kilku słowach",
    // {foundation} podstawiane przy renderze (restaurant.foundation.name).
    paragraph1Before:
      "Jesteśmy restauracją z domową kuchnią przy Al. Jerozolimskich 123a w Warszawie (Atlas Tower). Gotujemy obiady na miejscu, prowadzimy catering i organizujemy kameralne przyjęcia rodzinne. Restauracja działa przy ",
    paragraph1After:
      ", a zysk wspiera cele statutowe Fundacji.",
    paragraph2:
      "Nie organizujemy hucznych imprez na setki osób — stawiamy na kameralność, dobre jedzenie i spokojną obsługę dla rodzin, znajomych i zespołów.",
    tiles: [
      { title: "Obiady", desc: "menu dnia i dla grup" },
      { title: "Catering", desc: "firmowy i prywatny" },
      { title: "Komunie", desc: "i chrzciny" },
      { title: "Wesela", desc: "kameralne i rocznice" },
    ],
  },

  process: {
    heading: "Jak wygląda organizacja przyjęcia?",
    steps: [
      { n: "1", title: "Kontakt", desc: "Wysyłasz zapytanie przez formularz lub dzwonisz." },
      { n: "2", title: "Termin", desc: "Potwierdzamy dostępność wybranej daty." },
      { n: "3", title: "Menu", desc: "Dobieramy menu pod typ wydarzenia i gości." },
      { n: "4", title: "Przygotowanie", desc: "Przygotowujemy salę lub catering." },
      { n: "5", title: "Wydarzenie", desc: "Obsługujemy przyjęcie w dniu wydarzenia." },
    ],
    note: "Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje propozycję menu.",
  },

  finalCta: {
    heading: "Zaplanuj przyjęcie w KŁOSACH",
    text: "Napisz, co planujesz — odpowiemy z propozycją terminu i menu.",
    button: "Wyślij zapytanie",
  },
};
