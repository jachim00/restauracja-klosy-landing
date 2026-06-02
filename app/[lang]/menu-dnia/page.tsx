import type { Metadata } from "next";
import Link from "next/link";
import { Phone, FileDown, Soup, Salad, UtensilsCrossed, Cake, Truck } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { restaurant } from "@/content/restaurant-data";
import { menuCategories, menuPlaceholder } from "@/content/menu";
import { faqItems } from "@/content/faq";
import { PageHero } from "@/components/sections/PageHero";
import { FactsBand } from "@/components/sections/FactsBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { WheatDivider } from "@/components/ui/WheatDivider";
import { getDictionary } from "@/content/i18n";
import { isLocale, DEFAULT_LOCALE, localizedPath, type LocaleCode } from "@/content/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.menuDnia;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localizedPath(lang, "/menu-dnia") },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: localizedPath(lang, "/menu-dnia"),
    },
  };
}

// FAQ tematyczny — podzbiór pasujący do menu dnia / obiadów / dostawy / grup.
const faqForMenu = faqItems.filter((f) =>
  /obiad|grup|dostaw|catering|menu/i.test(`${f.q} ${f.a}`)
);

const categoryIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "menu-dnia": UtensilsCrossed,
  zupy: Soup,
  "dania-glowne": UtensilsCrossed,
  wegetarianskie: Salad,
  desery: Cake,
  catering: Truck,
};

const isPlaceholder = (s: string) => s.includes("[DO");

export default async function MenuDniaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.menuDnia;

  const inquiryHref = `${localizedPath(lang, "/kontakt")}#formularz`;
  const pyszneReady = !isPlaceholder(restaurant.delivery.pyszne);
  const glovoReady = !isPlaceholder(restaurant.delivery.glovo);
  const pdfReady = !isPlaceholder(restaurant.menuPdf);

  return (
    <>
      {/* HERO */}
      <PageHero
        image="/assets/restauracja-klosy/food/obiad-golonka.webp"
        alt={t.hero.alt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        cta={{ label: t.hero.ctaLabel, href: inquiryHref }}
      />

      {/* Okruszki + kontakt */}
      <section className="border-b border-linen bg-cream">
        <div className="container-x flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label={t.breadcrumbs.ariaLabel} className="text-sm text-ink/60">
            <Link href={localizedPath(lang, "/")} className="hover:text-olive">
              {t.breadcrumbs.home}
            </Link>{" "}
            <span aria-hidden>/</span> <span className="text-ink/80">{t.breadcrumbs.current}</span>
          </nav>
          <a
            href={`tel:+48${restaurant.contact.phone}`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-olive px-5 py-2 text-sm font-medium text-forest transition-colors hover:bg-olive/10"
          >
            <Phone size={16} className="text-olive" /> {restaurant.contact.phoneDisplay}
          </a>
        </div>
      </section>

      {/* FAKTY */}
      <FactsBand items={t.facts} />

      {/* O MENU DNIA */}
      <EditorialSplit
        image="/assets/restauracja-klosy/food/pieczona-kaczka.webp"
        alt={t.about.alt}
        eyebrow={t.about.eyebrow}
        title={t.about.title}
      >
        <p>{t.about.p1}</p>
        <p>
          {t.about.p2Before}
          {restaurant.foundation.name}
          {t.about.p2After}
        </p>
        <ul className="mt-2 grid gap-2 text-sm text-ink/75 sm:grid-cols-2">
          {t.about.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </EditorialSplit>

      <div className="container-x">
        <WheatDivider />
      </div>

      {/* OBIADY DLA GRUP */}
      <EditorialSplit
        image="/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp"
        alt={t.groups.alt}
        eyebrow={t.groups.eyebrow}
        title={t.groups.title}
        reverse
      >
        <p>{t.groups.p1}</p>
        <p>{t.groups.p2}</p>
        <ul className="mt-2 grid gap-2 text-sm text-ink/75">
          {t.groups.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Link
          href={inquiryHref}
          className="mt-4 inline-flex rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
        >
          {t.groups.ctaLabel}
        </Link>
      </EditorialSplit>

      <div className="container-x">
        <WheatDivider />
      </div>

      {/* DOSTAWA */}
      <EditorialSplit
        image="/assets/restauracja-klosy/food/tagliatelle-krewetki.webp"
        alt={t.delivery.alt}
        eyebrow={t.delivery.eyebrow}
        title={t.delivery.title}
      >
        <p>{t.delivery.lead}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Pyszne.pl */}
          {pyszneReady ? (
            <a
              href={restaurant.delivery.pyszne}
              className="flex items-center justify-between rounded-card border border-linen bg-white px-5 py-4 font-medium text-forest transition-colors hover:border-olive"
            >
              {t.delivery.pyszneLabel}
              <Truck size={18} className="text-olive" />
            </a>
          ) : (
            <div className="flex items-center justify-between rounded-card border border-dashed border-linen bg-white px-5 py-4 text-sm text-ink/50">
              {t.delivery.pysznePlaceholder}
              <Truck size={18} className="text-olive/50" />
            </div>
          )}

          {/* Glovo */}
          {glovoReady ? (
            <a
              href={restaurant.delivery.glovo}
              className="flex items-center justify-between rounded-card border border-linen bg-white px-5 py-4 font-medium text-forest transition-colors hover:border-olive"
            >
              {t.delivery.glovoLabel}
              <Truck size={18} className="text-olive" />
            </a>
          ) : (
            <div className="flex items-center justify-between rounded-card border border-dashed border-linen bg-white px-5 py-4 text-sm text-ink/50">
              {t.delivery.glovoPlaceholder}
              <Truck size={18} className="text-olive/50" />
            </div>
          )}
        </div>
        <p className="text-sm text-ink/60">
          {t.delivery.cateringBefore}
          <Link href={localizedPath(lang, "/catering")} className="text-olive underline-offset-2 hover:underline">
            {t.delivery.cateringLink}
          </Link>
          {t.delivery.cateringAfter}
        </p>
      </EditorialSplit>

      {/* KATEGORIE MENU */}
      <section id="menu" className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl text-forest sm:text-4xl">{t.menu.title}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{t.menu.intro}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuCategories.map((cat) => {
              const Icon = categoryIcon[cat.id] ?? UtensilsCrossed;
              return (
                <article key={cat.id} className="rounded-card bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wheat/20">
                    <Icon size={20} className="text-olive" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-forest">{cat.name}</h3>
                  <p className="mt-2 text-sm text-ink/55">{cat.note}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-ink/55">{menuPlaceholder}</p>

          {/* Pobierz menu PDF */}
          <div className="mt-8">
            {pdfReady ? (
              <a
                href={restaurant.menuPdf}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-medium text-cream transition-transform hover:scale-[1.03]"
              >
                <FileDown size={18} /> {t.menu.pdfLabel}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-olive/50 px-6 py-3 text-sm text-ink/50">
                <FileDown size={18} className="text-olive/60" /> {t.menu.pdfPlaceholder}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* TAŚMA ZDJĘĆ */}
      <PhotoStrip heading={t.realizacje.heading} images={t.realizacje.images} />

      {/* FAQ */}
      {faqForMenu.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl text-forest sm:text-4xl">{t.faq.heading}</h2>
            <dl className="mt-8 divide-y divide-linen rounded-card border border-linen">
              {faqForMenu.map((item) => (
                <div key={item.q} className="px-5 py-4">
                  <dt className="font-medium text-forest">{item.q}</dt>
                  <dd className="mt-2 text-ink/75">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* PRZEJDŹ DALEJ */}
      <section className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl text-forest sm:text-4xl">{t.next.heading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.next.cards.map((c) => (
              <Link
                key={c.href}
                href={localizedPath(lang, c.href)}
                className="rounded-card bg-white p-5 shadow-soft transition-transform hover:scale-[1.02]"
              >
                <p className="font-serif text-xl text-forest">{c.label}</p>
                <p className="mt-1 text-sm text-ink/70">{c.desc}</p>
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
            href={inquiryHref}
            className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.breadcrumbs.home, url: localizedPath(lang, "/") },
            { name: t.breadcrumbs.current, url: localizedPath(lang, "/menu-dnia") },
          ]),
          serviceSchema(t.schema.serviceName, t.schema.serviceDescription),
          faqSchema(faqForMenu),
        ]}
      />
    </>
  );
}
