/**
 * Punkt wejścia i18n: getDictionary(lang) zwraca słownik dla danego języka.
 * Kanoniczny jest PL; pozostałe języki dołączane są w miarę gotowości tłumaczeń
 * (na razie fallback do PL, dzięki czemu build jest zawsze zielony).
 */
import type { LocaleCode } from "./locales";
import { pl } from "./messages/pl";

// Tłumaczenia (odkomentowywane po dodaniu plików messages/<lang>.ts):
// import { en } from "./messages/en";
// import { uk } from "./messages/uk";
// import { de } from "./messages/de";
// import { cs } from "./messages/cs";
// import { sk } from "./messages/sk";
// import { fr } from "./messages/fr";
// import { hu } from "./messages/hu";
// import { ar } from "./messages/ar";

export type Dictionary = typeof pl;

const dictionaries: Record<LocaleCode, Dictionary> = {
  pl,
  en: pl,
  uk: pl,
  de: pl,
  cs: pl,
  sk: pl,
  fr: pl,
  hu: pl,
  ar: pl,
};

export function getDictionary(lang: LocaleCode): Dictionary {
  return dictionaries[lang] ?? pl;
}
