import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { restaurant, TODO } from "@/content/restaurant-data";
import { faqItems } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { FactsBand } from "@/components/sections/FactsBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { WheatDivider } from "@/components/ui/WheatDivider";
import { getDictionary } from "@/content/i18n";
import { isLocale, DEFAULT_LOCALE, localizedPath, type LocaleCode } from "@/content/i18n/locales";

const HREF = "/komunie-chrzciny";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.komunie;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localizedPath(lang, HREF) },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: localizedPath(lang, HREF),
    },
  };
}

// Podzbiór FAQ pasujący tematycznie do komunii / chrzcin / przyjęć rodzinnych.
const faqSubset = faqItems.filter((f) =>
  ["komuni", "chrzcin", "menu można dostosować", "dostępny termin", "Gdzie znajduje"].some((kw) =>
    (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

const phoneHref = `tel:+48${restaurant.contact.phone}`;
const mailHref = `mailto:${restaurant.contact.email}`;

export default async function KomunieChrzcinyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.komunie;

  return (
    <main className="bg-cream text-ink">
      <PageHero
        image="/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp"
        alt={t.hero.alt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        cta={{ label: t.hero.ctaLabel, href: localizedPath(lang, "/kontakt") + "#formularz" }}
      />

      <FactsBand items={t.facts} />

      <EditorialSplit
        image="/assets/restauracja-klosy/communions/stol-komunijny-balony.webp"
        alt={t.charakter.alt}
        eyebrow={t.charakter.eyebrow}
        title={t.charakter.title}
      >
        <p>{t.charakter.p1}</p>
        <p>
          {t.charakter.p2Before}
          {restaurant.address.building.includes(TODO) ? TODO : t.charakter.p2Fallback}
          {t.charakter.p2After}
        </p>
        <p>{t.charakter.p3}</p>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/events/obsluga-kelnerska.webp"
        alt={t.uroczystosci.alt}
        eyebrow={t.uroczystosci.eyebrow}
        title={t.uroczystosci.title}
        reverse
      >
        <p>{t.uroczystosci.p1}</p>
        <p>{t.uroczystosci.p2}</p>
        <ul className="space-y-2 text-ink/75">
          {t.uroczystosci.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp"
        alt={t.menu.alt}
        eyebrow={t.menu.eyebrow}
        title={t.menu.title}
      >
        <p>{t.menu.p1}</p>
        <p>{t.menu.p2}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={localizedPath(lang, "/menu-dnia")}
            className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
          >
            {t.menu.seeMenu}
          </Link>
          {restaurant.menuPdf.includes(TODO) ? (
            <span className="rounded-card border border-dashed border-olive/40 px-6 py-3 text-sm text-ink/50">
              {t.menu.pdfTodo}
            </span>
          ) : (
            <a
              href={restaurant.menuPdf}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              {t.menu.pdfDownload}
            </a>
          )}
        </div>
        <p className="text-sm text-ink/50">{t.menu.pricingNote}</p>
      </EditorialSplit>

      <WheatDivider />

      <PhotoStrip heading={t.realizacje.heading} images={t.realizacje.images} />

      {/* CO PRZYGOTOWAĆ */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.checklist.title}</h2>
          <p className="mt-3 text-ink/70">{t.checklist.intro}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.checklist.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-card border border-linen bg-white p-4 shadow-soft"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span className="text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOKALIZACJA / NAP */}
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.lokalizacja.title}</h2>
          <p className="mt-4 text-ink/80">{t.lokalizacja.intro}</p>
          <ul className="mt-6 space-y-3 text-ink/80">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
              <span>
                {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                {restaurant.address.city} ({restaurant.address.building} — {t.lokalizacja.addressSuffix})
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
              <a href={phoneHref} className="hover:text-forest">
                {restaurant.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
              <a href={mailHref} className="hover:text-forest">
                {restaurant.contact.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink/55">{restaurant.legalNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.faq.title}</h2>
          <div className="mt-8 divide-y divide-linen rounded-card border border-linen bg-white">
            {faqSubset.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-medium text-forest marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-ink/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + LINKI WEWNĘTRZNE */}
      <section className="section-y bg-forest text-cream">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">{t.cta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={localizedPath(lang, "/kontakt") + "#formularz"}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              {t.cta.sendLabel}
            </Link>
            <a
              href={phoneHref}
              className="rounded-card border border-cream/40 px-6 py-3 font-medium text-cream transition hover:bg-cream/10"
            >
              {t.cta.callLabel} {restaurant.contact.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>{t.cta.seeAlso}</span>
            <Link href={localizedPath(lang, "/wesela-rocznice")} className="underline hover:text-cream">
              {t.cta.links.wesela}
            </Link>
            <Link href={localizedPath(lang, "/imprezy-okolicznosciowe")} className="underline hover:text-cream">
              {t.cta.links.imprezy}
            </Link>
            <Link href={localizedPath(lang, "/catering")} className="underline hover:text-cream">
              {t.cta.links.catering}
            </Link>
            <Link href={localizedPath(lang, "/menu-dnia")} className="underline hover:text-cream">
              {t.cta.links.menuDnia}
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.schema.breadcrumbHome, url: localizedPath(lang, "/") },
            { name: t.schema.breadcrumbCurrent, url: localizedPath(lang, HREF) },
          ]),
          serviceSchema(t.schema.serviceName, t.schema.serviceDescription),
          faqSchema(faqSubset),
        ]}
      />
    </main>
  );
}
