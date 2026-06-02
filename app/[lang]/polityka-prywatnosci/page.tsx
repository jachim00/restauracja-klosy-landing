import type { Metadata } from "next";
import Link from "next/link";
import { restaurant } from "@/content/restaurant-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getDictionary } from "@/content/i18n";
import { isLocale, DEFAULT_LOCALE, localizedPath, type LocaleCode } from "@/content/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const m = getDictionary(lang).meta.polityka;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localizedPath(lang, "/polityka-prywatnosci") },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: localizedPath(lang, "/polityka-prywatnosci"),
    },
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: LocaleCode = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDictionary(lang);
  const t = dict.polityka;

  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumb.home, url: localizedPath(lang, "/") },
          { name: t.breadcrumb.current, url: localizedPath(lang, "/polityka-prywatnosci") },
        ])}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <h1 className="font-serif text-4xl text-forest sm:text-5xl">{t.heading}</h1>
          <p className="mt-4 text-ink/70">{t.intro}</p>

          <div className="mt-10 space-y-8 text-ink/85">
            <section>
              <h2 className="text-2xl text-forest">{t.administrator.heading}</h2>
              <p className="mt-3">
                {t.administrator.leadBefore}
                {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                {restaurant.address.city}.{" "}
                <span className="text-ink/60">{t.administrator.todo}</span>
              </p>
              <p className="mt-2">
                {t.administrator.foundationBefore}
                {restaurant.foundation.name} ({t.administrator.foundationKrs}{" "}
                {restaurant.foundation.krs}).
              </p>
            </section>

            {t.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl text-forest">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-2xl text-forest">{t.purpose.heading}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {t.purpose.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-forest">{t.recipients.heading}</h2>
              <p className="mt-3">
                {t.recipients.before}
                <strong>{t.formEmail}</strong>
                {t.recipients.after}
              </p>
            </section>

            {t.policies.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl text-forest">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-2xl text-forest">{t.contact.heading}</h2>
              <p className="mt-3">
                {t.contact.before}
                <a
                  href={`mailto:${t.formEmail}`}
                  className="font-medium text-brown underline decoration-wheat underline-offset-4"
                >
                  {t.formEmail}
                </a>
                {t.contact.between}
                <a
                  href={`mailto:${restaurant.contact.email}`}
                  className="font-medium text-brown underline decoration-wheat underline-offset-4"
                >
                  {restaurant.contact.email}
                </a>
                {t.contact.after}
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-linen pt-6">
            <Link
              href={localizedPath(lang, "/")}
              className="text-sm text-olive underline underline-offset-4 hover:text-forest"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
