import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Galeria | Restauracja KŁOSY",
  description:
    "Galeria Restauracji KŁOSY w centrum Warszawy (Al. Jerozolimskie 123a). Zobacz salę, stoły i przykładowe dania, zanim zarezerwujesz obiad, catering lub przyjęcie rodzinne.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  const href = "/galeria";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Strona główna", url: "/" },
            { name: "Galeria", url: href },
          ]),
        ]}
      />

      <section className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-olive">
            Restauracja KŁOSY · Warszawa
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Galeria</h1>
          <p className="mt-4 text-lg text-ink/75">
            Zanim zarezerwujesz stolik, obiad dla grupy albo przyjęcie rodzinne,
            zobacz, jak wygląda nasze miejsce przy Al. Jerozolimskie 123a w
            centrum Warszawy. Poniżej znajdziesz zdjęcia sali, nakrytych stołów i
            przykładowych dań z polskiej kuchni. Materiały uzupełniamy na bieżąco
            — jeśli czegoś szukasz, napisz lub zadzwoń, a podeślemy więcej.
          </p>
          <p className="mt-4">
            <Link
              href="/kontakt#formularz"
              className="inline-flex items-center rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest"
            >
              Zapytaj o termin lub wycenę
            </Link>
          </p>
        </div>
      </section>

      <Gallery />
    </>
  );
}
