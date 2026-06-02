"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LOCALES, localizedPath, stripLocale, getLocale, type LocaleCode } from "@/content/i18n/locales";
import { cn } from "@/lib/utils";

type Props = {
  lang: LocaleCode;
  label: string; // "Zmień język" (z tłumaczeń)
  className?: string;
};

/**
 * Stały przełącznik języka w pasku nawigacji.
 * - 9 języków z natywnymi nazwami + flagą.
 * - Zmiana = link do tej samej podstrony w innym języku (zachowuje SEO).
 * - Pełna obsługa klawiatury (Esc, Tab), klik poza zamyka, aria-*.
 * - Zapamiętuje wybór w localStorage (używane przez przekierowanie z "/").
 */
export function LanguageSwitcher({ lang, label, className }: Props) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = getLocale(lang);

  // Ścieżka bez prefiksu języka (np. "/menu-dnia") — do zbudowania linków.
  const { rest } = stripLocale(pathname);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const remember = (code: LocaleCode) => {
    try {
      localStorage.setItem("klosy:lang", code);
    } catch {
      /* brak dostępu do storage — ignorujemy */
    }
    setOpen(false);
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex items-center gap-1.5 rounded-full border border-linen px-3 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-wheat hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wheat"
      >
        <Globe size={16} aria-hidden />
        <span aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <ChevronDown size={14} aria-hidden className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 z-50 mt-2 max-h-[70vh] w-52 overflow-auto rounded-card border border-linen bg-cream p-1 shadow-soft"
        >
          {LOCALES.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <Link
                  href={localizedPath(l.code, rest)}
                  hrefLang={l.htmlLang}
                  lang={l.htmlLang}
                  dir={l.dir}
                  onClick={() => remember(l.code)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-linen/60",
                    active ? "font-semibold text-forest" : "text-ink/80"
                  )}
                >
                  <span aria-hidden className="text-base leading-none">{l.flag}</span>
                  <span className="flex-1">{l.native}</span>
                  {active && <Check size={15} aria-hidden className="text-wheat" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
