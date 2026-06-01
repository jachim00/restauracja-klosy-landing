/**
 * Dane galerii zdjęć — REALNE zdjęcia Restauracji KŁOSY (źródło: materiały restauracji / FB,
 * patrz docs/PHOTO_REQUIREMENTS.md). Teksty `alt` napisane pod SEO i dostępność.
 */

export type GalleryItem = {
  id: string;
  category: string;
  alt: string;
  src: string;
};

const BASE = "/assets/restauracja-klosy";

export const galleryItems: GalleryItem[] = [
  // Jedzenie
  { id: "jedzenie-pierogi", category: "Jedzenie", alt: "Pierogi z jagodami ze śmietaną w Restauracji KŁOSY w Warszawie, kuchnia polska", src: `${BASE}/food/pierogi-z-jagodami.jpg` },
  { id: "jedzenie-kaczka", category: "Jedzenie", alt: "Pieczona kaczka z czerwoną kapustą — kuchnia polska w Restauracji KŁOSY w Warszawie", src: `${BASE}/food/pieczona-kaczka.jpg` },
  { id: "jedzenie-golonka", category: "Jedzenie", alt: "Obiad domowy w KŁOSY Warszawa: pieczona golonka, zupa i deser", src: `${BASE}/food/obiad-golonka.jpg` },
  { id: "jedzenie-pieczen", category: "Jedzenie", alt: "Domowy obiad — pieczeń z jajkiem, ziemniaki i surówki w Restauracji KŁOSY w Warszawie", src: `${BASE}/food/obiad-pieczen-surowki.jpg` },
  { id: "jedzenie-kurczak", category: "Jedzenie", alt: "Obiady domowe w Restauracji KŁOSY w Warszawie — kurczak i makaron w sosie", src: `${BASE}/food/obiad-kurczak-makaron.jpg` },
  { id: "jedzenie-tagliatelle", category: "Jedzenie", alt: "Tagliatelle z krewetkami w Restauracji KŁOSY w Warszawie, danie sezonowe", src: `${BASE}/food/tagliatelle-krewetki.jpg` },

  // Sala
  { id: "sala-bufet", category: "Sala", alt: "Sala jadalna Restauracji KŁOSY w Warszawie z bufetem obiadowym i białymi stolikami", src: `${BASE}/interior/sala-jadalna-bufet.jpg` },
  { id: "sala-nakryta", category: "Sala", alt: "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do przyjęcia rodzinnego", src: `${BASE}/interior/sala-nakryta-przyjecie.jpg` },
  { id: "sala-kameralna", category: "Sala", alt: "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do rodzinnego obiadu", src: `${BASE}/interior/sala-kameralna-kwiaty.jpg` },
  { id: "sala-lampy", category: "Sala", alt: "Wnętrze Restauracji KŁOSY w Warszawie — sala z bufetem i klimatycznym oświetleniem", src: `${BASE}/interior/wnetrze-sala-lampy.jpg` },

  // Komunie
  { id: "komunie-balony", category: "Komunie", alt: "Stół nakryty na przyjęcie komunijne w Restauracji KŁOSY w Warszawie", src: `${BASE}/communions/stol-komunijny-balony.jpg` },
  { id: "komunie-girlanda", category: "Komunie", alt: "Aranżacja stołu na komunię z przekąskami w Restauracji KŁOSY w Warszawie", src: `${BASE}/communions/stol-komunijny-girlanda.jpg` },
  { id: "komunie-obsluga", category: "Komunie", alt: "Obsługa kelnerska przy stole komunijnym w Restauracji KŁOSY w Warszawie", src: `${BASE}/events/obsluga-kelnerska.jpg` },

  // Catering
  { id: "catering-caprese", category: "Catering", alt: "Bufet cateringowy KŁOSY Warszawa z przekąskami caprese, tartinkami i deserami", src: `${BASE}/catering/catering-bufet-caprese.jpg` },
  { id: "catering-croissanty", category: "Catering", alt: "Stół cateringowy KŁOSY w Warszawie z mini croissantami i przekąskami", src: `${BASE}/catering/catering-croissanty.jpg` },
  { id: "catering-desery", category: "Catering", alt: "Słodki i przekąskowy stół cateringowy Restauracji KŁOSY w Warszawie", src: `${BASE}/catering/catering-desery-przekaski.jpg` },
  { id: "catering-ciasta", category: "Catering", alt: "Słodki stół cateringowy — ciasta z truskawkami w Restauracji KŁOSY w Warszawie", src: `${BASE}/catering/slodki-stol-ciasta.jpg` },

  // Dekoracje
  { id: "dekoracje-bankiet", category: "Dekoracje", alt: "Stół bankietowy nakryty na przyjęcie rodzinne w Restauracji KŁOSY w Warszawie", src: `${BASE}/events/stol-bankietowy.jpg` },
  { id: "dekoracje-rustykalna", category: "Dekoracje", alt: "Rustykalna sala na komunie i przyjęcia w Restauracji KŁOSY w Warszawie", src: `${BASE}/events/sala-rustykalna-przyjecie.jpg` },

  // Na wynos / desery
  { id: "wynos-desery-taca", category: "Na wynos", alt: "Desery owsiane z owocami na wynos w Restauracji KŁOSY w Warszawie", src: `${BASE}/food/desery-owsiane-taca.jpg` },
  { id: "wynos-owsianka", category: "Na wynos", alt: "Owsianka z truskawkami w kubku na wynos, Restauracja KŁOSY Warszawa", src: `${BASE}/food/owsianka-truskawki.jpg` },
  { id: "wynos-czekolada", category: "Na wynos", alt: "Deser warstwowy z czekoladą i wiśniami na wynos, KŁOSY Warszawa", src: `${BASE}/food/deser-czekolada-wisnie.jpg` },
  { id: "wynos-dwa-kubki", category: "Na wynos", alt: "Owsianki deserowe na wynos w przytulnym wnętrzu Restauracji KŁOSY w Warszawie", src: `${BASE}/food/owsianki-dwa-kubki.jpg` },
];

/** Unikalne kategorie z pozycji galerii + opcja "Wszystko" na początku. */
export const galleryCategories: string[] = [
  "Wszystko",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];
