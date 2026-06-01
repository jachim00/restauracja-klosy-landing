"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/content/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y bg-linen/40">
      <div className="container-x max-w-3xl">
        <h2 className="text-3xl sm:text-4xl">Najczęstsze pytania</h2>
        <div className="mt-8 divide-y divide-linen rounded-card border border-linen bg-white">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium text-forest">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn("shrink-0 text-olive transition-transform duration-300", isOpen && "rotate-180")}
                  />
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink/75">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
