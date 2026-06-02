/**
 * Rejestr języków strony Restauracji KŁOSY.
 * Polski = domyślny i kanoniczny. Arabski = RTL.
 * Każdy język ma osobny statyczny route /[lang]/... (pełne SEO + hreflang).
 */

export type LocaleCode = "pl" | "en" | "uk" | "de" | "cs" | "sk" | "fr" | "hu" | "ar";

export type Locale = {
  /** Kod używany w URL (/[code]/...) i atrybucie lang. */
  code: LocaleCode;
  /** Nazwa w danym języku (do przełącznika). */
  native: string;
  /** Nazwa po polsku (pomocniczo). */
  pl: string;
  /** Kierunek pisma. */
  dir: "ltr" | "rtl";
  /** Wartość atrybutu <html lang>. */
  htmlLang: string;
  /** Locale do Open Graph (og:locale). */
  ogLocale: string;
  /** Emoji flagi (wizualna pomoc w przełączniku). */
  flag: string;
};

export const LOCALES: Locale[] = [
  { code: "pl", native: "Polski",       pl: "polski",      dir: "ltr", htmlLang: "pl-PL", ogLocale: "pl_PL", flag: "🇵🇱" },
  { code: "en", native: "English",      pl: "angielski",   dir: "ltr", htmlLang: "en",    ogLocale: "en_US", flag: "🇬🇧" },
  { code: "uk", native: "Українська",   pl: "ukraiński",   dir: "ltr", htmlLang: "uk",    ogLocale: "uk_UA", flag: "🇺🇦" },
  { code: "de", native: "Deutsch",      pl: "niemiecki",   dir: "ltr", htmlLang: "de",    ogLocale: "de_DE", flag: "🇩🇪" },
  { code: "cs", native: "Čeština",      pl: "czeski",      dir: "ltr", htmlLang: "cs",    ogLocale: "cs_CZ", flag: "🇨🇿" },
  { code: "sk", native: "Slovenčina",   pl: "słowacki",    dir: "ltr", htmlLang: "sk",    ogLocale: "sk_SK", flag: "🇸🇰" },
  { code: "fr", native: "Français",     pl: "francuski",   dir: "ltr", htmlLang: "fr",    ogLocale: "fr_FR", flag: "🇫🇷" },
  { code: "hu", native: "Magyar",       pl: "węgierski",   dir: "ltr", htmlLang: "hu",    ogLocale: "hu_HU", flag: "🇭🇺" },
  { code: "ar", native: "العربية",      pl: "arabski",     dir: "rtl", htmlLang: "ar",    ogLocale: "ar_AR", flag: "🇸🇦" },
];

export const LOCALE_CODES: LocaleCode[] = LOCALES.map((l) => l.code);

export const DEFAULT_LOCALE: LocaleCode = "pl";

export function isLocale(value: string): value is LocaleCode {
  return (LOCALE_CODES as string[]).includes(value);
}

export function getLocale(code: LocaleCode): Locale {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

export function isRtl(code: LocaleCode): boolean {
  return getLocale(code).dir === "rtl";
}

/**
 * Buduje ścieżkę z prefiksem języka, np. localizedPath("en", "/menu-dnia") => "/en/menu-dnia".
 * Strona główna => "/en". Bez basePath (Next/Link dokleja basePath sam).
 */
export function localizedPath(code: LocaleCode, path: string): string {
  const clean = path === "/" ? "" : path.replace(/^\/+/, "/");
  return `/${code}${clean}`;
}

/**
 * Zdejmuje prefiks języka z pathname (z uwzględnieniem basePath przekazanego osobno).
 * "/en/menu-dnia" => "/menu-dnia", "/en" => "/".
 */
export function stripLocale(pathname: string): { code: LocaleCode | null; rest: string } {
  const segments = pathname.replace(/^\/+/, "").split("/");
  const first = segments[0] ?? "";
  if (isLocale(first)) {
    const rest = "/" + segments.slice(1).join("/");
    return { code: first, rest: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/" };
  }
  return { code: null, rest: pathname };
}
