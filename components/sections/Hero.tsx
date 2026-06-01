"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck, ArrowDown } from "lucide-react";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";
import { assetPath } from "@/lib/utils";
import { WheatPattern } from "@/components/ui/WheatPattern";

// Animacje wejścia na czystym CSS (animate-fade-up) — bez Framer Motion.
// prefers-reduced-motion respektowane globalnie w globals.css.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={assetPath("/assets/restauracja-klosy/hero/hero-wnetrze.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        {/* Wtopienie w zieleń + głębia */}
        <div className="absolute inset-0 bg-forest/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/25 via-forest/35 to-forest/85" />
        {/* Sygnatura: bursztynowe światło „spod lampy" (z góry, jak lampy na suficie) */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_8%,rgba(201,154,58,0.32),transparent_70%)]" />
        <WheatPattern className="absolute -right-6 bottom-0 h-[125%] w-auto text-wheat/20" />
      </div>

      <div className="container-x relative z-10 flex min-h-[78vh] flex-col justify-center py-20">
        <p className="mb-4 inline-flex w-fit animate-fade-up items-center rounded-full border border-cream/20 bg-forest/20 px-4 py-1 text-sm text-cream/85 backdrop-blur-sm">
          Warszawa · Al. Jerozolimskie 123a
        </p>

        <h1
          className="max-w-3xl animate-fade-up font-serif text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          Domowa <span className="text-wheat">kuchnia</span> i przyjęcia rodzinne w sercu Warszawy
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
            className="inline-flex items-center gap-2 rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-all hover:scale-[1.03] hover:shadow-[0_8px_30px_-6px_rgba(201,154,58,0.6)]"
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
