/**
 * Single source of truth — dane restauracji.
 * Fakty potwierdzone oznaczone bez adnotacji; niepotwierdzone jako TODO_CONFIRM.
 * Zasada: NIE zmyślamy. Brakujące dane => placeholder do uzupełnienia.
 */

export const TODO = "[DO UZUPEŁNIENIA]";

export const restaurant = {
  name: "Restauracja KŁOSY",
  legalNote:
    "Restauracja prowadzona przez Fundację Pomocy Rodzinie „Człowiek w Potrzebie” — zysk wspiera cele statutowe Fundacji.",
  foundation: {
    name: 'Fundacja Pomocy Rodzinie „Człowiek w Potrzebie"',
    krs: "0000239060",
    nip: "5213361463",
    regon: "140217610",
  },
  address: {
    street: "Al. Jerozolimskie 123a",
    building: "Atlas Tower, 5. piętro", // TODO_CONFIRM
    postalCode: "02-017",
    city: "Warszawa",
    district: "Ochota",
    full: "Al. Jerozolimskie 123a, 02-017 Warszawa (Atlas Tower, 5. piętro)",
  },
  geo: {
    // TODO_CONFIRM dokładne współrzędne / link do Google Maps
    lat: 52.22479,
    lng: 21.00219,
    mapsUrl: "[DO UZUPEŁNIENIA: link Google Maps]",
  },
  contact: {
    phone: "509068888", // TODO_CONFIRM
    phoneDisplay: "509 068 888",
    email: "biuro@czlowiekwpotrzebie.org", // potwierdzone przez właściciela 2026-06-01
  },
  hours: {
    // TODO_CONFIRM godziny otwarcia / kontaktu
    note: "[DO UZUPEŁNIENIA: godziny otwarcia]",
    spec: [] as { days: string; open: string; close: string }[],
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100063889302284",
    instagram: "[DO UZUPEŁNIENIA: Instagram]",
  },
  delivery: {
    pyszne: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
    glovo: "[DO UZUPEŁNIENIA: link Glovo]",
  },
  capacity: "[DO UZUPEŁNIENIA: liczba miejsc / max gości]",
  menuPdf: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
  privacyPolicyUrl: "/polityka-prywatnosci", // placeholder
} as const;

export type Restaurant = typeof restaurant;
