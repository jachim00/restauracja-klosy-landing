/**
 * Punkt wejścia i18n: getDictionary(lang) zwraca słownik dla danego języka.
 * Kanoniczny jest PL (typ Dictionary = typeof pl). Pozostałe języki to pełne
 * tłumaczenia w messages/<lang>.ts (typowane jako Dictionary — TS pilnuje kompletności).
 */
import type { LocaleCode } from "./locales";
import { pl } from "./messages/pl";
import { en } from "./messages/en";
import { uk } from "./messages/uk";
import { de } from "./messages/de";
import { cs } from "./messages/cs";
import { sk } from "./messages/sk";
import { fr } from "./messages/fr";
import { hu } from "./messages/hu";
import { ar } from "./messages/ar";

export type Dictionary = typeof pl;

const dictionaries: Record<LocaleCode, Dictionary> = {
  pl,
  en,
  uk,
  de,
  cs,
  sk,
  fr,
  hu,
  ar,
};

export function getDictionary(lang: LocaleCode): Dictionary {
  return dictionaries[lang] ?? pl;
}
