"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck, ArrowDown } from "lucide-react";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";
import { assetPath } from "@/lib/utils";

// Animacje wejścia na czystym CSS (animate-fade-up) — bez Framer Motion,
// żeby nie obciążać wątku głównego na starcie (lepsze TBT/LCP).
// prefers-reduced-motion jest respektowane globalnie w globals.css.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={assetPath("/assets/restauracja-klosy/hero/hero-caprese.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Zielony tint wtapiający apetyczne zdjęcie w paletę (multiply) */}
        <div className="absolute inset-0 bg-forest/35 mix-blend-multiply" />
        {/* Gradient pod czytelność tekstu (lekko u góry, mocniej u dołu) */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/30 to-forest/80" />
        <WheatPattern className="absolute -right-10 bottom-0 h-[120%] w-auto text-wheat/15" />
      </div>

      <div className="container-x relative z-10 flex min-h-[78vh] flex-col justify-center py-20">
        <p className="mb-4 inline-flex w-fit animate-fade-up items-center rounded-full border border-cream/20 px-4 py-1 text-sm text-cream/80">
          Warszawa · Al. Jerozolimskie 123a
        </p>

        <h1
          className="max-w-3xl animate-fade-up font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          Domowa kuchnia i przyjęcia rodzinne w sercu Warszawy
        </h1>

        <p
          className="mt-5 max-w-xl animate-fade-up text-lg text-cream/85"
          style={{ animationDelay: "120ms" }}
        >
          Obiady, catering i kameralne przyjęcia — komunie, chrzciny, wesela, rocznice
          i spotkania firmowe. Powiedz, co planujesz, a przygotujemy propozycję menu.
        </p>

        <div
          className="mt-8 flex animate-fade-up flex-wrap gap-3"
          style={{ animationDelay: "180ms" }}
        >
          <Link
            href="/kontakt#formularz"
            onClick={() => track.ctaHero("zapytaj_o_termin")}
            className="inline-flex items-center gap-2 rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            <CalendarCheck size={18} /> Zapytaj o termin
          </Link>
          <Link
            href="#oferta"
            onClick={() => track.ctaHero("zobacz_oferte")}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-medium text-cream hover:bg-cream/10"
          >
            Zobacz ofertę
          </Link>
          <a
            href={`tel:+48${restaurant.contact.phone}`}
            onClick={() => track.phoneClick("hero", restaurant.contact.phone)}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-medium text-cream hover:bg-cream/10"
          >
            <Phone size={18} /> {restaurant.contact.phoneDisplay}
          </a>
        </div>

        <a href="#oferta" aria-label="Przewiń do oferty" className="mt-14 inline-flex w-fit text-cream/60">
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function WheatPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" className={className} fill="none" aria-hidden>
      <g className="origin-bottom animate-sway">
        <path d="M100 400 V120" stroke="currentColor" strokeWidth="3" />
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            <ellipse cx={92} cy={140 + i * 28} rx="9" ry="18" fill="currentColor" transform={`rotate(-30 92 ${140 + i * 28})`} />
            <ellipse cx={108} cy={140 + i * 28} rx="9" ry="18" fill="currentColor" transform={`rotate(30 108 ${140 + i * 28})`} />
          </g>
        ))}
      </g>
    </svg>
  );
}
