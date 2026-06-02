import type { Metadata } from "next";
import Link from "next/link";
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

const HREF = "/imprezy-okolicznosciowe";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.imprezy;
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

/** Podzbiór FAQ pasujący tematycznie do imprez okolicznościowych. */
const pageFaq = faqItems.filter((f) =>
  [
    "Czy menu można dostosować do gości?",
    "Jak zapytać o dostępny termin?",
    "Gdzie znajduje się Restauracja KŁOSY?",
    "Czy można zorganizować kameralne wesele?",
  ].includes(f.q),
);

export default async function ImprezyOkolicznosciowePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.imprezy;

  return (
    <>
      <PageHero
        image="/assets/restauracja-klosy/events/stol-bankietowy.webp"
        alt="Stół bankietowy nakryty na przyjęcie okolicznościowe w Restauracji KŁOSY"
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        cta={{ label: t.hero.ctaLabel, href: localizedPath(lang, "/kontakt#formularz") }}
      />

      <FactsBand items={t.facts} />

      <EditorialSplit
        image="/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp"
        alt="Rustykalna sala Restauracji KŁOSY przygotowana na przyjęcie okolicznościowe"
        eyebrow={t.occasionsSection.eyebrow}
        title={t.occasionsSection.title}
      >
        <p>{t.occasionsSection.intro}</p>
        <ul className="space-y-3">
          {t.occasionsSection.occasions.map((o) => (
            <li key={o.title}>
              <span className="font-medium text-forest">{o.title}.</span> {o.desc}
            </li>
          ))}
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp"
        alt="Kameralna sala Restauracji KŁOSY z kwiatami na stołach"
        eyebrow={t.ambianceSection.eyebrow}
        title={t.ambianceSection.title}
        reverse
      >
        {t.ambianceSection.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <ul className="space-y-2">
          <li>
            <span className="font-medium text-forest">{t.ambianceSection.capacityLabel}</span>{" "}
            {restaurant.capacity}
          </li>
          <li>
            <span className="font-medium text-forest">{t.ambianceSection.maxGuestsLabel}</span>{" "}
            {TODO}
          </li>
          <li>
            <span className="font-medium text-forest">{t.ambianceSection.largerGroupsLabel}</span>{" "}
            {t.ambianceSection.largerGroupsTextBefore}{" "}
            <Link
              href={localizedPath(lang, "/catering")}
              className="text-clay underline-offset-2 hover:underline"
            >
              {t.ambianceSection.largerGroupsLink}
            </Link>
            .
          </li>
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/catering/catering-bufet-caprese.webp"
        alt="Bufet cateringowy Restauracji KŁOSY z sałatką caprese"
        eyebrow={t.processSection.eyebrow}
        title={t.processSection.title}
      >
        <p>{t.processSection.intro}</p>
        <ol className="space-y-3">
          {t.processSection.steps.map(([n, title, desc]) => (
            <li key={n} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wheat font-serif text-sm text-forest">
                {n}
              </span>
              <span>
                <span className="font-medium text-forest">{title}.</span> {desc}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-ink/60">{t.processSection.note}</p>
        <p>
          {t.processSection.foundationTextBefore} {restaurant.foundation.name}
          {t.processSection.foundationTextAfter}
        </p>
      </EditorialSplit>

      <PhotoStrip
        heading={t.photoStripHeading}
        images={[
          {
            src: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
            alt: "Stół bankietowy nakryty na przyjęcie w Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp",
            alt: "Rustykalna sala przygotowana na przyjęcie okolicznościowe",
          },
          {
            src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp",
            alt: "Sala Restauracji KŁOSY nakryta przed przyjęciem",
          },
          {
            src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
            alt: "Obsługa kelnerska podczas przyjęcia w KŁOSACH",
          },
          {
            src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
            alt: "Słodki stół z ciastami przygotowany przez Restaurację KŁOSY",
          },
        ]}
      />

      {/* Linki do pokrewnych podstron */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">{t.related.heading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.related.links.map((l) => (
              <Link
                key={l.href}
                href={localizedPath(lang, l.href)}
                className="group rounded-card border border-linen bg-cream p-6 transition-shadow hover:shadow-soft"
              >
                <h3 className="font-serif text-xl text-forest group-hover:text-clay">{l.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — podzbiór tematyczny */}
      <section className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">{t.faqHeading}</h2>
          <dl className="mt-8 space-y-6">
            {pageFaq.map((f) => (
              <div key={f.q} className="rounded-card border border-linen bg-white p-6">
                <dt className="font-serif text-lg text-forest">{f.q}</dt>
                <dd className="mt-2 text-ink/75">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="bg-forest text-cream">
        <div className="container-x flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">{t.finalCta.title}</h2>
            <p className="mt-2 text-cream/80">{t.finalCta.text}</p>
          </div>
          <Link
            href={localizedPath(lang, "/kontakt#formularz")}
            className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            {t.finalCta.button}
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.jsonLd.breadcrumbHome, url: "/" },
            { name: t.jsonLd.breadcrumbCurrent, url: HREF },
          ]),
          serviceSchema(t.jsonLd.serviceName, t.jsonLd.serviceDescription),
          faqSchema(pageFaq),
        ]}
      />
    </>
  );
}
