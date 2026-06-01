"use client";

import { Phone, Mail, CalendarCheck } from "lucide-react";
import { restaurant } from "@/content/restaurant-data";
import { track } from "@/lib/analytics";

/** Mocny pasek CTA na mobile: Zadzwoń / Napisz / Zapytaj o termin. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-linen bg-cream/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 text-center text-xs font-medium">
        <a
          href={`tel:+48${restaurant.contact.phone}`}
          onClick={() => track.phoneClick("mobile_bar", restaurant.contact.phone)}
          className="flex flex-col items-center gap-1 py-2.5 text-forest"
        >
          <Phone size={18} /> Zadzwoń
        </a>
        <a
          href={`mailto:${restaurant.contact.email}`}
          onClick={() => track.emailClick("mobile_bar")}
          className="flex flex-col items-center gap-1 border-x border-linen py-2.5 text-forest"
        >
          <Mail size={18} /> Napisz
        </a>
        <a
          href="/kontakt#formularz"
          onClick={() => track.ctaHero("mobile_bar_inquiry")}
          className="flex flex-col items-center gap-1 bg-wheat py-2.5 text-forest"
        >
          <CalendarCheck size={18} /> Zapytaj o termin
        </a>
      </div>
    </div>
  );
}
