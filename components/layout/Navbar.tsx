"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { WheatMark } from "@/components/ui/WheatMark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { localizedPath, type LocaleCode } from "@/content/i18n/locales";
import type { Dictionary } from "@/content/i18n";

type Props = {
  lang: LocaleCode;
  dict: Dictionary["common"];
};

export function Navbar({ lang, dict }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-linen/60 bg-cream/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label={dict.nav.ariaLabel}>
        <Link
          href={localizedPath(lang, "/")}
          className="inline-flex items-center gap-2 font-serif text-xl font-semibold text-forest"
        >
          <WheatMark className="h-5 w-5 text-wheat" />
          {dict.brand}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {dict.nav.links.map((l) => (
            <li key={l.key}>
              <Link
                href={localizedPath(lang, l.href)}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-ink/80 transition-colors hover:bg-linen/60 hover:text-forest"
              >
                {l.short}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher lang={lang} label={dict.langSwitcher.label} />
          <span aria-hidden className="hidden h-6 w-px bg-linen lg:block" />
          <a
            href={`tel:+48${restaurant.contact.phone}`}
            onClick={() => track.phoneClick("header", restaurant.contact.phone)}
            className="hidden items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-forest sm:inline-flex"
          >
            <Phone size={16} /> {restaurant.contact.phoneDisplay}
          </a>
          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <ul className="container-x flex flex-col gap-1 pb-4">
          {dict.nav.links.map((l) => (
            <li key={l.key}>
              <Link
                href={localizedPath(lang, l.href)}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-ink/90 hover:bg-linen/50"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
