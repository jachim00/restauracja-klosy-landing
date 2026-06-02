import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Gallery, type GalleryDisplayItem, type GalleryCategory } from "@/components/sections/Gallery";
import { galleryItems } from "@/content/gallery";
import { getDictionary } from "@/content/i18n";
import { isLocale, DEFAULT_LOCALE, localizedPath, type LocaleCode } from "@/content/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.galeria;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localizedPath(lang, "/galeria") },
    openGraph: { title: m.title, description: m.ogDescription, url: localizedPath(lang, "/galeria") },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.galeria;

  // Zlokalizowane pozycje: zip galleryItems z t.alts po id (fallback: alt z gallery.ts).
  const items: GalleryDisplayItem[] = galleryItems.map((item) => ({
    id: item.id,
    src: item.src,
    category: item.category,
    alt: (t.alts as Record<string, string>)[item.id] ?? item.alt,
  }));

  // Lista filtrów: unikalne klucze kategorii z gallery.ts, etykiety z t.categories.
  const categoryKeys = Array.from(new Set(galleryItems.map((item) => item.category)));
  const categories: GalleryCategory[] = categoryKeys.map((key) => ({
    key,
    label: (t.categories as Record<string, string>)[key] ?? key,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t.breadcrumbs.home, url: localizedPath(lang, "/") },
            { name: t.breadcrumbs.current, url: localizedPath(lang, "/galeria") },
          ]),
        ]}
      />

      <section className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-olive">
            {t.page.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{t.page.title}</h1>
          <p className="mt-4 text-lg text-ink/75">{t.page.intro}</p>
          <p className="mt-4">
            <Link
              href={localizedPath(lang, "/kontakt#formularz")}
              className="inline-flex items-center rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest"
            >
              {t.page.ctaLabel}
            </Link>
          </p>
        </div>
      </section>

      <Gallery dict={t} items={items} categories={categories} />
    </>
  );
}
