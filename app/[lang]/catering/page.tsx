import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Building2,
  Truck,
  Coffee,
  Users,
  GraduationCap,
  Utensils,
  FileText,
  CalendarDays,
} from "lucide-react";
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

const HREF = "/catering";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.catering;
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

// Podzbiór FAQ pasujący tematycznie do cateringu / dostawy / obiadów dla grup.
const faqSubset = faqItems.filter((f) =>
  ["catering", "dostaw", "grup szkoln", "menu można dostosować", "dostępny termin", "Gdzie znajduje"].some(
    (kw) => (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

// Ikony przypisane po kolejności do tekstów ze słownika.
const typeIcons = [Building2, Users, Truck, Coffee, Utensils, GraduationCap];
const b2bIcons = [FileText, Building2, CalendarDays, Users];
const stepIcons = [Mail, Utensils, CheckCircle2, Truck];

const phoneHref = `tel:+48${restaurant.contact.phone}`;
const mailHref = `mailto:${restaurant.contact.email}`;

export default async function CateringPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.catering;

  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.jsonLd.breadcrumbHome, url: localizedPath(lang, "/") },
            { name: t.jsonLd.breadcrumbCurrent, url: localizedPath(lang, HREF) },
          ]),
          serviceSchema(t.jsonLd.serviceName, t.jsonLd.serviceDescription),
          faqSchema(faqSubset),
        ]}
      />

      {/* HERO */}
      <PageHero
        image="/assets/restauracja-klosy/catering/catering-bufet-caprese.webp"
        alt={t.hero.alt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        cta={{ label: t.hero.ctaLabel, href: localizedPath(lang, "/kontakt#formularz") }}
      />

      {/* FAKTY */}
      <FactsBand items={t.facts} />

      {/* WSTĘP / KIM JESTEŚMY */}
      <EditorialSplit
        image="/assets/restauracja-klosy/catering/catering-desery-przekaski.webp"
        alt={t.intro.alt}
        eyebrow={t.intro.eyebrow}
        title={t.intro.title}
      >
        {t.intro.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </EditorialSplit>

      {/* RODZAJE CATERINGU */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.typesSection.title}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{t.typesSection.intro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.typesSection.types.map((c, i) => {
              const Icon = typeIcons[i] ?? Building2;
              return (
                <article
                  key={c.title}
                  className="rounded-card border border-linen bg-cream p-7 shadow-soft"
                >
                  <Icon className="text-olive" size={28} aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl text-forest">{c.title}</h3>
                  <p className="mt-3 text-ink/80">{c.body}</p>
                  <ul className="mt-5 space-y-2 text-ink/75">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-olive"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <WheatDivider />

      {/* AKCENT B2B / FAKTURA VAT */}
      <EditorialSplit
        image="/assets/restauracja-klosy/catering/catering-croissanty.webp"
        alt={t.b2bSection.alt}
        eyebrow={t.b2bSection.eyebrow}
        title={t.b2bSection.title}
        reverse
      >
        <p className="text-lg">{t.b2bSection.lead}</p>
        <ul className="space-y-4">
          {t.b2bSection.points.map((b, i) => {
            const Icon = b2bIcons[i] ?? FileText;
            return (
              <li key={b.title} className="flex gap-3">
                <Icon className="mt-1 shrink-0 text-olive" size={22} aria-hidden="true" />
                <span>
                  <span className="font-medium text-forest">{b.title}.</span> {b.body}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="text-sm text-ink/55">{t.b2bSection.note}</p>
      </EditorialSplit>

      <WheatDivider />

      {/* OBIADY DLA GRUP SZKOLNYCH */}
      <EditorialSplit
        image="/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp"
        alt={t.groupsSection.alt}
        eyebrow={t.groupsSection.eyebrow}
        title={t.groupsSection.title}
      >
        {t.groupsSection.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-sm text-ink/55">{t.groupsSection.note}</p>
      </EditorialSplit>

      {/* MENU */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.menuSection.title}</h2>
          <div className="mt-6 space-y-4 text-lg text-ink/80">
            <p>{t.menuSection.intro}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={localizedPath(lang, "/menu-dnia")}
              className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
            >
              {t.menuSection.menuDniaLink}
            </Link>
            {restaurant.menuPdf.includes(TODO) ? (
              <span className="rounded-card border border-dashed border-olive/40 px-6 py-3 text-sm text-ink/50">
                {t.menuSection.pdfPlaceholder}
              </span>
            ) : (
              <a
                href={restaurant.menuPdf}
                className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
              >
                {t.menuSection.pdfDownload}
              </a>
            )}
          </div>
          <p className="mt-4 text-sm text-ink/50">{t.menuSection.note}</p>
        </div>
      </section>

      {/* PROCES */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.processSection.title}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{t.processSection.intro}</p>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.processSection.steps.map((s, i) => {
              const Icon = stepIcons[i] ?? Mail;
              return (
                <li
                  key={s.title}
                  className="rounded-card border border-linen bg-cream p-6 shadow-soft"
                >
                  <Icon className="text-olive" size={26} aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl text-forest">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CO PRZYGOTOWAĆ */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            {t.checklistSection.title}
          </h2>
          <p className="mt-3 text-ink/70">{t.checklistSection.intro}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.checklistSection.items.map((item) => (
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

      {/* GALERIA REALIZACJI */}
      <PhotoStrip heading={t.photoStrip.heading} images={t.photoStrip.images} />

      {/* LOKALIZACJA / NAP */}
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.locationSection.title}</h2>
          <p className="mt-4 text-ink/80">{t.locationSection.intro}</p>
          <ul className="mt-6 space-y-3 text-ink/80">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
              <span>
                {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                {restaurant.address.city} ({restaurant.address.building} —{" "}
                {t.locationSection.buildingSuffix})
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
          <p className="mt-4 text-sm text-ink/55">{t.locationSection.note}</p>
          <p className="mt-6 text-sm text-ink/55">{restaurant.legalNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.faqHeading}</h2>
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
          <h2 className="font-serif text-3xl sm:text-4xl">{t.finalCta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">{t.finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={localizedPath(lang, "/kontakt#formularz")}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              {t.finalCta.sendButton}
            </Link>
            <a
              href={phoneHref}
              className="rounded-card border border-cream/40 px-6 py-3 font-medium text-cream transition hover:bg-cream/10"
            >
              {t.finalCta.callPrefix} {restaurant.contact.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>{t.finalCta.relatedLabel}</span>
            {t.finalCta.related.map((l) => (
              <Link
                key={l.href}
                href={localizedPath(lang, l.href)}
                className="underline hover:text-cream"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
