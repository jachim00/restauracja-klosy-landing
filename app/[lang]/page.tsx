import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { OfferTabs } from "@/components/sections/OfferTabs";
import { EventConfigurator } from "@/components/sections/EventConfigurator";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { WheatPattern } from "@/components/ui/WheatPattern";
import { SectionWave } from "@/components/ui/SectionWave";
import { faqSchema } from "@/lib/schema";
import { restaurant } from "@/content/restaurant-data";
import { SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/content/i18n";
import { DEFAULT_LOCALE, getLocale, isLocale, localizedPath, type LocaleCode } from "@/content/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const loc = getLocale(lang);
  const m = getDictionary(lang).meta.home;
  const url = localizedPath(lang, "/");

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: m.title,
      description: m.ogDescription,
      locale: loc.ogLocale,
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const { home, offers, configurator, faq } = dict;

  return (
    <>
      <Hero lang={lang} dict={home.hero} />

      {/* Propozycja wartości — konkretnie, bez ogólników */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="glow-amber text-3xl sm:text-4xl">{home.about.heading}</h2>
            <p className="mt-4 text-ink/75">
              {home.about.paragraph1Before}
              {restaurant.foundation.name}
              {home.about.paragraph1After}
            </p>
            <p className="mt-4 text-ink/75">{home.about.paragraph2}</p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {home.about.tiles.map((tile) => (
              <li key={tile.title} className="rounded-card border border-linen bg-cream p-5">
                <p className="font-serif text-xl text-forest">{tile.title}</p>
                <p className="text-sm text-ink/70">{tile.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OfferTabs lang={lang} dict={offers} />

      <EventConfigurator lang={lang} dict={configurator} />

      {/* „Jak wygląda organizacja przyjęcia" */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">{home.process.heading}</h2>
          <ol className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {/* łodyga łącząca kroki (desktop) */}
            <span aria-hidden className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-wheat/40 lg:block" />
            {home.process.steps.map((s) => (
              <li key={s.n} className="reveal relative z-10 rounded-card bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wheat font-serif text-forest">{s.n}</span>
                <p className="mt-3 font-medium text-forest">{s.title}</p>
                <p className="mt-1 text-sm text-ink/70">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">{home.process.note}</p>
        </div>
      </section>

      <Faq dict={faq} />

      {/* CTA końcowe — „wieczór": forest + światło lampy + kłos */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <SectionWave color="text-linen" className="absolute inset-x-0 top-0 z-[1]" />
        <WheatPattern className="pointer-events-none absolute -right-8 -bottom-10 h-[150%] w-auto text-wheat/10" />
        <div className="container-x relative z-10 flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">{home.finalCta.heading}</h2>
            <p className="mt-2 text-cream/80">{home.finalCta.text}</p>
          </div>
          <Link href={localizedPath(lang, "/kontakt") + "#formularz"} className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-all hover:scale-[1.03] hover:shadow-[0_8px_30px_-6px_rgba(201,154,58,0.6)]">
            {home.finalCta.button}
          </Link>
        </div>
      </section>

      <JsonLd data={faqSchema()} />
    </>
  );
}
