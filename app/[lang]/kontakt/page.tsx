import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Navigation,
  Utensils,
} from "lucide-react";
import { restaurant, TODO } from "@/content/restaurant-data";
import { faqItems } from "@/content/faq";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getDictionary } from "@/content/i18n";
import {
  isLocale,
  DEFAULT_LOCALE,
  localizedPath,
  type LocaleCode,
} from "@/content/i18n/locales";

const HREF = "/kontakt";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.kontakt;
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

// Podzbiór FAQ pasujący do tematu kontaktu / zapytań / dojazdu.
const faqSubset = faqItems.filter((f) =>
  ["dostępny termin", "Gdzie znajduje", "menu można dostosować", "catering z dostawą"].some(
    (kw) => (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.kontakt;

  const phoneHref = `tel:+48${restaurant.contact.phone}`;
  const mailHref = `mailto:${restaurant.contact.email}`;

  const buildingNote = restaurant.address.building.includes(TODO)
    ? null
    : `${restaurant.address.building} ${t.nap.buildingSuffix}`;

  const mapsReady = !restaurant.geo.mapsUrl.includes(TODO);

  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.breadcrumb.home, url: localizedPath(lang, "/") },
            { name: t.breadcrumb.current, url: localizedPath(lang, HREF) },
          ]),
          faqSchema(faqSubset),
        ]}
      />

      {/* HERO */}
      <section className="section-y border-b border-linen">
        <div className="container-x max-w-3xl animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-wide text-olive">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            {t.hero.heading}
          </h1>
          <p className="mt-5 text-lg text-ink/75">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={phoneHref}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              {t.hero.callPrefix} {restaurant.contact.phoneDisplay}
            </a>
            <Link
              href="#formularz"
              className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
            >
              {t.hero.toForm}
            </Link>
          </div>
        </div>
      </section>

      {/* DANE KONTAKTOWE + MAPA */}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* NAP */}
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.nap.heading}</h2>
            <p className="mt-4 text-ink/80">{t.nap.intro}</p>

            <ul className="mt-6 space-y-4 text-ink/80">
              <li className="flex gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">{t.nap.addressLabel}</span>
                  {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                  {restaurant.address.city}
                  {buildingNote ? (
                    <span className="block text-sm text-ink/60">{buildingNote}</span>
                  ) : null}
                  <span className="block text-sm text-ink/60">
                    {t.nap.districtLabel} {restaurant.address.district}
                  </span>
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">{t.nap.phoneLabel}</span>
                  <a
                    href={phoneHref}
                    className="text-brown underline decoration-wheat underline-offset-4 hover:text-forest"
                  >
                    {restaurant.contact.phoneDisplay}
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">{t.nap.emailLabel}</span>
                  <a
                    href={mailHref}
                    className="break-all text-brown underline decoration-wheat underline-offset-4 hover:text-forest"
                  >
                    {restaurant.contact.email}
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">{t.nap.hoursLabel}</span>
                  <span className="text-ink/60">{t.nap.hoursPlaceholder}</span>
                </span>
              </li>
            </ul>

            {/* SOCIAL + DOSTAWA */}
            <div className="mt-8">
              <h3 className="font-serif text-xl text-forest">{t.nap.socialHeading}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {!restaurant.social.facebook.includes(TODO) ? (
                  <a
                    href={restaurant.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Facebook size={18} className="text-olive" aria-hidden="true" />
                    {t.nap.facebook}
                  </a>
                ) : null}

                {!restaurant.social.instagram.includes(TODO) ? (
                  <a
                    href={restaurant.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Instagram size={18} className="text-olive" aria-hidden="true" />
                    {t.nap.instagram}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Instagram size={18} aria-hidden="true" />
                    {t.nap.instagramPlaceholder}
                  </span>
                )}

                {!restaurant.delivery.pyszne.includes(TODO) ? (
                  <a
                    href={restaurant.delivery.pyszne}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Utensils size={18} className="text-olive" aria-hidden="true" />
                    {t.nap.pyszne}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Utensils size={18} aria-hidden="true" />
                    {t.nap.pysznePlaceholder}
                  </span>
                )}

                {!restaurant.delivery.glovo.includes(TODO) ? (
                  <a
                    href={restaurant.delivery.glovo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Utensils size={18} className="text-olive" aria-hidden="true" />
                    {t.nap.glovo}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Utensils size={18} aria-hidden="true" />
                    {t.nap.glovoPlaceholder}
                  </span>
                )}
              </div>
            </div>

            <p className="mt-8 text-sm text-ink/55">{restaurant.legalNote}</p>
          </div>

          {/* MAPA */}
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.map.heading}</h2>
            <p className="mt-4 text-ink/80">{t.map.intro}</p>
            <div
              role="img"
              aria-label={t.map.imgAlt}
              className="mt-6 flex min-h-64 items-center justify-center rounded-card border border-linen bg-linen/60 shadow-soft"
            >
              <span className="px-6 text-center text-sm text-ink/40">{t.map.placeholder}</span>
            </div>
            <div className="mt-4">
              {mapsReady ? (
                <a
                  href={restaurant.geo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                >
                  <Navigation size={18} className="text-olive" aria-hidden="true" />
                  {t.map.directions}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-5 py-2.5 text-sm text-ink/50">
                  <Navigation size={18} aria-hidden="true" />
                  {t.map.directionsPlaceholder}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARZ */}
      <section id="formularz" className="section-y scroll-mt-24 bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.form.heading}</h2>
          <p className="mt-4 text-ink/80">{t.form.intro}</p>
          <div className="mt-8 rounded-card border border-linen bg-cream p-6 shadow-soft sm:p-8">
            <LeadForm lang={lang} dict={dict.forms} formName="event_inquiry" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">{t.faq.heading}</h2>
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
          <h2 className="font-serif text-3xl sm:text-4xl">{t.cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">{t.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={phoneHref}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              {t.cta.callPrefix} {restaurant.contact.phoneDisplay}
            </a>
            <a
              href={mailHref}
              className="rounded-card border border-cream/40 px-6 py-3 font-medium text-cream transition hover:bg-cream/10"
            >
              {t.cta.write}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>{t.cta.seeAlso}</span>
            <Link href={localizedPath(lang, "/menu-dnia")} className="underline hover:text-cream">
              {t.cta.links.menuDnia}
            </Link>
            <Link
              href={localizedPath(lang, "/komunie-chrzciny")}
              className="underline hover:text-cream"
            >
              {t.cta.links.komunie}
            </Link>
            <Link
              href={localizedPath(lang, "/wesela-rocznice")}
              className="underline hover:text-cream"
            >
              {t.cta.links.wesela}
            </Link>
            <Link
              href={localizedPath(lang, "/imprezy-okolicznosciowe")}
              className="underline hover:text-cream"
            >
              {t.cta.links.imprezy}
            </Link>
            <Link href={localizedPath(lang, "/catering")} className="underline hover:text-cream">
              {t.cta.links.catering}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
