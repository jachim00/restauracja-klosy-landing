import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Utensils, CalendarCheck, Cake, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FactsBand } from "@/components/sections/FactsBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { WheatDivider } from "@/components/ui/WheatDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { faqItems } from "@/content/faq";
import { restaurant, TODO } from "@/content/restaurant-data";
import { getDictionary } from "@/content/i18n";
import { isLocale, DEFAULT_LOCALE, localizedPath, type LocaleCode } from "@/content/i18n/locales";

const HREF = "/wesela-rocznice";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.wesela;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localizedPath(lang, HREF) },
    openGraph: { title: m.title, description: m.ogDescription, url: localizedPath(lang, HREF) },
  };
}

// Podzbiór FAQ pasujący tematycznie do wesel i rocznic.
const pageFaq = faqItems.filter((f) =>
  ["wesele", "rocznic", "menu można dostosować", "dostępny termin", "znajduje"].some((k) =>
    f.q.toLowerCase().includes(k)
  )
);

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.wesela;

  return (
    <>
      <PageHero
        image="/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp"
        alt={t.hero.alt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        cta={{ label: t.hero.ctaLabel, href: localizedPath(lang, "/kontakt#formularz") }}
      />

      <FactsBand
        items={[
          { value: t.facts.weselaValue, label: t.facts.weselaLabel },
          { value: t.facts.roczniceValue, label: t.facts.roczniceLabel },
          { value: t.facts.menuValue, label: t.facts.menuLabel },
          { value: TODO + t.facts.pakietyValueAfter, label: t.facts.pakietyLabel },
        ]}
      />

      {/* Wprowadzenie kontekstowe (treść z oryginalnego nagłówka) */}
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-lg text-ink/75">
            {t.intro.before}
            {restaurant.foundation.name}
            {t.intro.after}
          </p>
        </div>
      </section>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/events/stol-bankietowy.webp"
        alt={t.wesele.alt}
        eyebrow={t.wesele.eyebrow}
        title={t.wesele.title}
      >
        <p>{t.wesele.p1}</p>
        <p>{t.wesele.p2}</p>
        <p>
          {t.wesele.p3Before}
          {restaurant.capacity}
          {t.wesele.p3After}
        </p>
        <ul className="grid gap-3">
          {[
            { icon: Heart, t: t.wesele.points[0].t, d: t.wesele.points[0].d },
            { icon: Utensils, t: t.wesele.points[1].t, d: t.wesele.points[1].d },
            { icon: Users, t: t.wesele.points[2].t, d: t.wesele.points[2].d },
            { icon: CalendarCheck, t: t.wesele.points[3].t, d: t.wesele.points[3].d },
          ].map(({ icon: Icon, t: pt, d }) => (
            <li key={pt} className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wheat/30 text-olive">
                <Icon size={18} />
              </span>
              <span>
                <span className="font-serif text-forest">{pt}.</span>{" "}
                <span className="text-ink/70">{d}</span>
              </span>
            </li>
          ))}
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp"
        alt={t.rocznice.alt}
        eyebrow={t.rocznice.eyebrow}
        title={t.rocznice.title}
        reverse
      >
        <p>{t.rocznice.p1}</p>
        <h3 className="font-serif text-xl text-forest">{t.rocznice.listHeading}</h3>
        <ul className="grid gap-2">
          {t.rocznice.items.map((x) => (
            <li key={x} className="flex items-start gap-2">
              <Cake size={18} className="mt-1 shrink-0 text-olive" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <p>
          {t.rocznice.p2Before}
          {TODO}
          {t.rocznice.p2After}
        </p>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp"
        alt={t.menu.alt}
        eyebrow={t.menu.eyebrow}
        title={t.menu.title}
      >
        <p>{t.menu.p1}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: t.menu.cards[0].t, d: t.menu.cards[0].d },
            { t: t.menu.cards[1].t, d: t.menu.cards[1].d },
            { t: t.menu.cards[2].t, d: t.menu.cards[2].dBefore + TODO + t.menu.cards[2].dAfter },
            { t: t.menu.cards[3].t, d: t.menu.cards[3].dBefore + TODO + t.menu.cards[3].dAfter },
          ].map((x) => (
            <div key={x.t} className="rounded-card border border-linen bg-cream p-5">
              <p className="font-serif text-lg text-forest">{x.t}</p>
              <p className="mt-1 text-sm text-ink/70">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink/60">
          {t.menu.noteBefore}
          {restaurant.menuPdf}
          {t.menu.noteAfter}
        </p>
      </EditorialSplit>

      <WheatDivider />

      <PhotoStrip heading={t.realizacje.heading} images={t.realizacje.images} />

      {/* Jak organizujemy */}
      <section className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">{t.kroki.heading}</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.kroki.steps.map(([n, st, d]) => (
              <li key={n} className="rounded-card bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wheat font-serif text-forest">
                  {n}
                </span>
                <p className="mt-3 font-medium text-forest">{st}</p>
                <p className="mt-1 text-sm text-ink/70">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">{t.kroki.note}</p>
        </div>
      </section>

      {/* Lokalizacja / NAP */}
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">{t.lokalizacja.heading}</h2>
          <p className="mt-4 text-ink/75">
            {t.lokalizacja.p1Before}
            {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city}{" "}
            {t.lokalizacja.districtBefore}
            {restaurant.address.district}
            {t.lokalizacja.districtAfter}
            {restaurant.address.building}
            {t.lokalizacja.p1AfterBuilding}
            <span className="text-ink/50">{t.lokalizacja.p1Confirm}</span>
            {t.lokalizacja.p1End}
          </p>
          <ul className="mt-5 space-y-2 text-ink/80">
            <li>
              <a
                href={`tel:+48${restaurant.contact.phone}`}
                className="inline-flex items-center gap-2 hover:text-olive"
              >
                <Phone size={18} className="text-olive" /> {restaurant.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-olive"
              >
                <Mail size={18} className="text-olive" /> {restaurant.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ — podzbiór tematyczny */}
      <section id="faq" className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">{t.faq.heading}</h2>
          <div className="mt-8 divide-y divide-linen rounded-card border border-linen bg-white">
            {pageFaq.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-forest">
                  {item.q}
                  <span className="shrink-0 text-olive transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Linki wewnętrzne */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">{t.next.heading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.next.cards.map((x) => (
              <Link
                key={x.href}
                href={localizedPath(lang, x.href)}
                className="rounded-card border border-linen bg-cream p-5 transition-colors hover:border-wheat"
              >
                <p className="font-serif text-lg text-forest">{x.t}</p>
                <p className="mt-1 text-sm text-ink/70">{x.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="bg-forest text-cream">
        <div className="container-x flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">{t.cta.title}</h2>
            <p className="mt-2 text-cream/80">{t.cta.text}</p>
          </div>
          <Link
            href={localizedPath(lang, "/kontakt#formularz")}
            className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.schema.breadcrumbHome, url: "/" },
            { name: t.schema.breadcrumbCurrent, url: HREF },
          ]),
          serviceSchema(t.schema.serviceName, t.schema.serviceDescription),
          faqSchema(pageFaq),
        ]}
      />
    </>
  );
}
