"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarCheck, ArrowDown } from "lucide-react";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";
import { assetPath } from "@/lib/utils";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      {/* Tło: ciepły gradient + subtelny motyw kłosów (dekoracyjne, bez obciążenia CWV) */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={assetPath("/assets/restauracja-klosy/interior/wnetrze-sala-lampy.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,40,23,0.84)_0%,rgba(38,53,31,0.78)_55%,rgba(28,40,23,0.92)_100%)]" />
        <WheatPattern className="absolute -right-10 bottom-0 h-[120%] w-auto text-wheat/15" animate={!reduce} />
      </div>

      <div className="container-x relative z-10 flex min-h-[78vh] flex-col justify-center py-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex w-fit items-center rounded-full border border-cream/20 px-4 py-1 text-sm text-cream/80"
        >
          Warszawa · Al. Jerozolimskie 123a
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          Domowa kuchnia i przyjęcia rodzinne w sercu Warszawy
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 max-w-xl text-lg text-cream/85"
        >
          Obiady, catering i kameralne przyjęcia — komunie, chrzciny, wesela, rocznice
          i spotkania firmowe. Powiedz, co planujesz, a przygotujemy propozycję menu.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap gap-3"
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
        </motion.div>

        <a href="#oferta" aria-label="Przewiń do oferty" className="mt-14 inline-flex w-fit text-cream/60">
          <ArrowDown className={reduce ? "" : "animate-bounce"} />
        </a>
      </div>
    </section>
  );
}

function WheatPattern({ className, animate }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 400" className={className} fill="none" aria-hidden>
      <g className={animate ? "origin-bottom animate-sway" : ""}>
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
