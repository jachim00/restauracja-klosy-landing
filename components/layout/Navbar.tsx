"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { WheatMark } from "@/components/ui/WheatMark";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-linen/60 bg-cream/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Główna nawigacja">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-xl font-semibold text-forest">
          <WheatMark className="h-5 w-5 text-wheat" />
          KŁOSY
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm text-ink/80 transition-colors hover:text-wheat after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-wheat after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
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
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <ul className="container-x flex flex-col gap-1 pb-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
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
