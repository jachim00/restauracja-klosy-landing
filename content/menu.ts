/**
 * Menu — UWAGA: brak publicznego, aktualnego menu PDF w źródłach.
 * Poniższe kategorie to STRUKTURA do wypełnienia po otrzymaniu menu od restauracji.
 * NIE wpisujemy zmyślonych dań ani cen.
 */
export type MenuCategory = { id: string; name: string; note: string };

export const menuPlaceholder = "[DO UZUPEŁNIENIA: aktualne menu / link do PDF]";

export const menuCategories: MenuCategory[] = [
  { id: "menu-dnia", name: "Menu dnia", note: "[DO UZUPEŁNIENIA: pozycje menu dnia]" },
  { id: "zupy", name: "Zupy", note: "[DO UZUPEŁNIENIA]" },
  { id: "dania-glowne", name: "Dania główne", note: "[DO UZUPEŁNIENIA]" },
  { id: "wegetarianskie", name: "Dania wegetariańskie", note: "[DO UZUPEŁNIENIA]" },
  { id: "desery", name: "Desery", note: "[DO UZUPEŁNIENIA]" },
  { id: "catering", name: "Propozycje cateringowe", note: "[DO UZUPEŁNIENIA: pakiety cateringowe]" },
];
