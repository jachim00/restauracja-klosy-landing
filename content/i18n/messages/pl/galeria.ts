/**
 * Słownik PL — podstrona „Galeria" (/galeria) oraz komponent Gallery.
 * Kanoniczne źródło tekstów. Tłumaczenia muszą zachować ten sam kształt kluczy.
 *
 * `categories` — etykiety filtrów mapowane po KLUCZU = oryginalna kategoria
 *   z content/gallery.ts (klucz === wartość po polsku; w innych językach tylko
 *   wartość się zmienia, klucz pozostaje stały, bo po nim działa filtrowanie).
 *   Klucz "Wszystko" jest dodawany w komponencie/stronie jako pierwszy filtr.
 * `alts` — teksty alternatywne zdjęć mapowane po `id` z content/gallery.ts
 *   (SEO + dostępność).
 *
 * Nazwy własne (KŁOSY, adres) oraz znaczniki [DO UZUPEŁNIENIA] NIE są tłumaczone.
 */
export const galeria = {
  // Sekcja nagłówkowa podstrony /galeria
  page: {
    eyebrow: "Restauracja KŁOSY · Warszawa",
    title: "Galeria",
    intro:
      "Zanim zarezerwujesz stolik, obiad dla grupy albo przyjęcie rodzinne, zobacz, jak wygląda nasze miejsce przy Al. Jerozolimskie 123a w centrum Warszawy. Poniżej znajdziesz zdjęcia sali, nakrytych stołów i przykładowych dań z polskiej kuchni. Materiały uzupełniamy na bieżąco — jeśli czegoś szukasz, napisz lub zadzwoń, a podeślemy więcej.",
    ctaLabel: "Zapytaj o termin lub wycenę",
  },

  // Okruszki (breadcrumbs)
  breadcrumbs: {
    home: "Strona główna",
    current: "Galeria",
  },

  // Sekcja komponentu Gallery (id="galeria")
  section: {
    title: "Galeria",
    intro:
      "Zajrzyj do nas, zanim przyjdziesz — sala, stoły i przykładowe dania. Zdjęcia uzupełniamy na bieżąco.",
    filtersAriaLabel: "Filtry galerii",
    all: "Wszystko",
    empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
    zoomLabel: "Powiększ zdjęcie:",
    closeLabel: "Zamknij galerię",
    prevLabel: "Poprzednie zdjęcie",
    nextLabel: "Następne zdjęcie",
  },

  // Etykiety kategorii — klucz = kategoria z content/gallery.ts (po nim filtrujemy),
  // wartość = etykieta wyświetlana.
  categories: {
    Jedzenie: "Jedzenie",
    Sala: "Sala",
    Komunie: "Komunie",
    Catering: "Catering",
    Dekoracje: "Dekoracje",
    "Na wynos": "Na wynos",
  },

  // Teksty alternatywne zdjęć — klucz = id z content/gallery.ts
  alts: {
    "jedzenie-pierogi":
      "Pierogi z jagodami ze śmietaną w Restauracji KŁOSY w Warszawie, kuchnia polska",
    "jedzenie-kaczka":
      "Pieczona kaczka z czerwoną kapustą — kuchnia polska w Restauracji KŁOSY w Warszawie",
    "jedzenie-golonka":
      "Obiad domowy w KŁOSY Warszawa: pieczona golonka, zupa i deser",
    "jedzenie-pieczen":
      "Domowy obiad — pieczeń z jajkiem, ziemniaki i surówki w Restauracji KŁOSY w Warszawie",
    "jedzenie-kurczak":
      "Obiady domowe w Restauracji KŁOSY w Warszawie — kurczak i makaron w sosie",
    "jedzenie-tagliatelle":
      "Tagliatelle z krewetkami w Restauracji KŁOSY w Warszawie, danie sezonowe",
    "sala-bufet":
      "Sala jadalna Restauracji KŁOSY w Warszawie z bufetem obiadowym i białymi stolikami",
    "sala-nakryta":
      "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do przyjęcia rodzinnego",
    "sala-kameralna":
      "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do rodzinnego obiadu",
    "sala-lampy":
      "Wnętrze Restauracji KŁOSY w Warszawie — sala z bufetem i klimatycznym oświetleniem",
    "komunie-balony":
      "Stół nakryty na przyjęcie komunijne w Restauracji KŁOSY w Warszawie",
    "komunie-girlanda":
      "Aranżacja stołu na komunię z przekąskami w Restauracji KŁOSY w Warszawie",
    "komunie-obsluga":
      "Obsługa kelnerska przy stole komunijnym w Restauracji KŁOSY w Warszawie",
    "catering-caprese":
      "Bufet cateringowy KŁOSY Warszawa z przekąskami caprese, tartinkami i deserami",
    "catering-croissanty":
      "Stół cateringowy KŁOSY w Warszawie z mini croissantami i przekąskami",
    "catering-desery":
      "Słodki i przekąskowy stół cateringowy Restauracji KŁOSY w Warszawie",
    "catering-ciasta":
      "Słodki stół cateringowy — ciasta z truskawkami w Restauracji KŁOSY w Warszawie",
    "dekoracje-bankiet":
      "Stół bankietowy nakryty na przyjęcie rodzinne w Restauracji KŁOSY w Warszawie",
    "dekoracje-rustykalna":
      "Rustykalna sala na komunie i przyjęcia w Restauracji KŁOSY w Warszawie",
    "wynos-desery-taca":
      "Desery owsiane z owocami na wynos w Restauracji KŁOSY w Warszawie",
    "wynos-owsianka":
      "Owsianka z truskawkami w kubku na wynos, Restauracja KŁOSY Warszawa",
    "wynos-czekolada":
      "Deser warstwowy z czekoladą i wiśniami na wynos, KŁOSY Warszawa",
    "wynos-dwa-kubki":
      "Owsianki deserowe na wynos w przytulnym wnętrzu Restauracji KŁOSY w Warszawie",
  },
};
