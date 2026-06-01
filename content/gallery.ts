/**
 * Dane galerii zdjęć. Wszystkie pozycje to PLACEHOLDERY — podmień `src`
 * na realne pliki (patrz docs/PHOTO_REQUIREMENTS.md). Teksty `alt` napisane
 * pod SEO i dostępność (konkretne, opisowe, po polsku).
 */

export type GalleryItem = {
  id: string;
  category: string;
  alt: string;
  src: string;
};

export const galleryItems: GalleryItem[] = [
  // Jedzenie
  {
    id: "food-1",
    category: "Jedzenie",
    alt: "Talerz dania dnia w Restauracji KŁOSY — domowy obiad z drugim daniem i surówką",
    src: "/assets/restauracja-klosy/food/danie-dnia.webp",
  },
  {
    id: "food-2",
    category: "Jedzenie",
    alt: "Zupa dnia podana w głębokim talerzu na drewnianym stole",
    src: "/assets/restauracja-klosy/food/zupa-dnia.webp",
  },
  {
    id: "food-3",
    category: "Jedzenie",
    alt: "Domowy deser z owocami serwowany w Restauracji KŁOSY",
    src: "/assets/restauracja-klosy/food/deser.webp",
  },

  // Sala
  {
    id: "sala-1",
    category: "Sala",
    alt: "Sala restauracyjna KŁOSY z nakrytymi stołami gotowymi na gości",
    src: "/assets/restauracja-klosy/sala/sala-glowna.webp",
  },
  {
    id: "sala-2",
    category: "Sala",
    alt: "Stół przy oknie w sali Restauracji KŁOSY z widokiem na miasto",
    src: "/assets/restauracja-klosy/sala/stol-przy-oknie.webp",
  },
  {
    id: "sala-3",
    category: "Sala",
    alt: "Ustawienie sali pod większe przyjęcie — stoły w układzie bankietowym",
    src: "/assets/restauracja-klosy/sala/uklad-bankietowy.webp",
  },

  // Komunie
  {
    id: "komunie-1",
    category: "Komunie",
    alt: "Stół przygotowany na przyjęcie komunijne w Restauracji KŁOSY",
    src: "/assets/restauracja-klosy/komunie/stol-komunijny.webp",
  },
  {
    id: "komunie-2",
    category: "Komunie",
    alt: "Dekoracja stołu komunijnego z białymi kwiatami i porcelaną",
    src: "/assets/restauracja-klosy/komunie/dekoracja-komunia.webp",
  },

  // Catering
  {
    id: "catering-1",
    category: "Catering",
    alt: "Bufet cateringowy z ciepłymi i zimnymi przekąskami na spotkanie firmowe",
    src: "/assets/restauracja-klosy/catering/bufet-firmowy.webp",
  },
  {
    id: "catering-2",
    category: "Catering",
    alt: "Tace z kanapkami i przekąskami przygotowane do dostawy cateringu",
    src: "/assets/restauracja-klosy/catering/tace-dostawa.webp",
  },
  {
    id: "catering-3",
    category: "Catering",
    alt: "Przerwa kawowa z ciastem, owocami i napojami na spotkanie",
    src: "/assets/restauracja-klosy/catering/przerwa-kawowa.webp",
  },

  // Dekoracje
  {
    id: "dekoracje-1",
    category: "Dekoracje",
    alt: "Kompozycja kwiatowa na stole w Restauracji KŁOSY",
    src: "/assets/restauracja-klosy/dekoracje/kompozycja-kwiatowa.webp",
  },
  {
    id: "dekoracje-2",
    category: "Dekoracje",
    alt: "Świece i bieżnik na stole przygotowanym pod uroczystość rodzinną",
    src: "/assets/restauracja-klosy/dekoracje/swiece-bieznik.webp",
  },

  // Menu
  {
    id: "menu-1",
    category: "Menu",
    alt: "Karta menu Restauracji KŁOSY rozłożona na stole",
    src: "/assets/restauracja-klosy/menu/karta-menu.webp",
  },
  {
    id: "menu-2",
    category: "Menu",
    alt: "Tablica z propozycją menu dnia w Restauracji KŁOSY",
    src: "/assets/restauracja-klosy/menu/tablica-menu-dnia.webp",
  },
];

/** Unikalne kategorie z pozycji galerii + opcja "Wszystko" na początku. */
export const galleryCategories: string[] = [
  "Wszystko",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];
