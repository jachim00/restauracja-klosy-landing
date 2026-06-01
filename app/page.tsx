import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { OfferTabs } from "@/components/sections/OfferTabs";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { restaurant } from "@/content/restaurant-data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Propozycja wartości — konkretnie, bez ogólników */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">Restauracja KŁOSY w kilku słowach</h2>
            <p className="mt-4 text-ink/75">
              Jesteśmy restauracją z domową kuchnią przy Al. Jerozolimskich 123a w Warszawie
              (Atlas Tower). Gotujemy obiady na miejscu, prowadzimy catering i organizujemy
              kameralne przyjęcia rodzinne. Restauracja działa przy {restaurant.foundation.name},
              a zysk wspiera cele statutowe Fundacji.
            </p>
            <p className="mt-4 text-ink/75">
              Nie organizujemy hucznych imprez na setki osób — stawiamy na kameralność,
              dobre jedzenie i spokojną obsługę dla rodzin, znajomych i zespołów.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {[
              ["Obiady", "menu dnia i dla grup"],
              ["Catering", "firmowy i prywatny"],
              ["Komunie", "i chrzciny"],
              ["Wesela", "kameralne i rocznice"],
            ].map(([t, d]) => (
              <li key={t} className="rounded-card border border-linen bg-cream p-5">
                <p className="font-serif text-xl text-forest">{t}</p>
                <p className="text-sm text-ink/70">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OfferTabs />

      {/* „Jak wygląda organizacja przyjęcia" */}
      <section className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">Jak wygląda organizacja przyjęcia?</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["1", "Kontakt", "Wysyłasz zapytanie przez formularz lub dzwonisz."],
              ["2", "Termin", "Potwierdzamy dostępność wybranej daty."],
              ["3", "Menu", "Dobieramy menu pod typ wydarzenia i gości."],
              ["4", "Przygotowanie", "Przygotowujemy salę lub catering."],
              ["5", "Wydarzenie", "Obsługujemy przyjęcie w dniu wydarzenia."],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-card bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wheat font-serif text-forest">{n}</span>
                <p className="mt-3 font-medium text-forest">{t}</p>
                <p className="mt-1 text-sm text-ink/70">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">
            Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje propozycję menu.
          </p>
        </div>
      </section>

      <Faq />

      {/* CTA końcowe */}
      <section className="bg-forest text-cream">
        <div className="container-x flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">Zaplanuj przyjęcie w KŁOSACH</h2>
            <p className="mt-2 text-cream/80">Napisz, co planujesz — odpowiemy z propozycją terminu i menu.</p>
          </div>
          <Link href="/kontakt#formularz" className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]">
            Wyślij zapytanie
          </Link>
        </div>
      </section>

      <JsonLd data={faqSchema()} />
    </>
  );
}
