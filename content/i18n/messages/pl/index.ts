/**
 * Złożony słownik PL (kanoniczny). Każda przestrzeń nazw w osobnym pliku
 * (parametr równoległej ekstrakcji). Tłumaczenia: messages/<lang>.ts (jeden plik
 * na język, typowany jako Dictionary — TypeScript pilnuje kompletności).
 */
import { common } from "./common";
import { meta } from "./meta";
import { home } from "./home";
import { offers } from "./offers";
import { faq } from "./faq";
import { configurator } from "./configurator";
import { forms } from "./forms";
import { kontakt } from "./kontakt";
import { menuDnia } from "./menuDnia";
import { imprezy } from "./imprezy";
import { komunie } from "./komunie";
import { wesela } from "./wesela";
import { catering } from "./catering";
import { galeria } from "./galeria";
import { polityka } from "./polityka";

export const pl = {
  common,
  meta,
  home,
  offers,
  faq,
  configurator,
  forms,
  kontakt,
  menuDnia,
  imprezy,
  komunie,
  wesela,
  catering,
  galeria,
  polityka,
};
