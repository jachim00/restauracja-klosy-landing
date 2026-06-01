"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { offerTabs } from "@/content/offer-tabs";
import { track } from "@/lib/analytics";
import { cn, assetPath } from "@/lib/utils";

export function OfferTabs() {
  const [active, setActive] = useState(offerTabs[0].id);
  const tab = offerTabs.find((t) => t.id === active)!;

  return (
    <section id="oferta" className="section-y bg-cream">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl">Co możemy dla Ciebie zorganizować?</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          Wybierz rodzaj wydarzenia — pokażemy zakres, korzyści i kolejny krok. Szczegóły
          i menu ustalamy indywidualnie po Twoim zapytaniu.
        </p>

        {/* Zakładki: poziomy scroll na mobile */}
        <div
          role="tablist"
          aria-label="Oferta"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {offerTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => {
                setActive(t.id);
                track.offerTab(t.id);
              }}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
                active === t.id
                  ? "border-olive bg-olive text-cream"
                  : "border-linen bg-white text-ink/80 hover:border-olive/50"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* key={tab.id} -> remount = płynny fade (CSS) przy zmianie zakładki */}
        <div
          key={tab.id}
          className="mt-8 grid animate-fade-up items-center gap-8 rounded-card bg-white p-6 shadow-soft md:grid-cols-2 md:p-8"
        >
          <div>
            <h3 className="text-2xl">{tab.heading}</h3>
            <p className="mt-3 text-ink/75">{tab.description}</p>
            <ul className="mt-5 space-y-2">
              {tab.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-ink/85">
                  <Check size={18} className="mt-0.5 shrink-0 text-olive" /> {b}
                </li>
              ))}
            </ul>
            <Link
              href={tab.cta.href}
              onClick={() => track.offerTab(`cta_${tab.id}`)}
              className="mt-6 inline-flex rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              {tab.cta.label}
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
            <Image
              src={assetPath(tab.image)}
              alt={tab.imageAlt}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
