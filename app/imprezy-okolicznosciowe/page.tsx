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

export const metadata: Metadata = {
  title: "Imprezy okolicznościowe Warszawa | Restauracja KŁOSY",
  description:
    "Imprezy okolicznościowe w Warszawie (Ochota, Al. Jerozolimskie 123a): urodziny, rocznice, spotkania rodzinne i firmowe. Kameralne przyjęcia z domową kuchnią w Restauracji KŁOSY. Wyślij zapytanie o termin i menu.",
};

const HREF = "/imprezy-okolicznosciowe";

/** Podzbiór FAQ pasujący tematycznie do imprez okolicznościowych. */
const pageFaq = faqItems.filter((f) =>
  [
    "Czy menu można dostosować do gości?",
    "Jak zapytać o dostępny termin?",
    "Gdzie znajduje się Restauracja KŁOSY?",
    "Czy można zorganizować kameralne wesele?",
  ].includes(f.q),
);

const occasions = [
  {
    title: "Urodziny",
    desc:
      "Urodziny dla dzieci i dorosłych w gronie rodziny oraz przyjaciół. Menu układamy pod wiek gości i okazję — od obiadu z tortem po kolację dla bliskich. Liczbę osób i przebieg ustalamy w zapytaniu.",
  },
  {
    title: "Rocznice",
    desc:
      "Rocznice ślubu, jubileusze i rocznice firmowe w spokojnej, ciepłej oprawie. Stawiamy na kameralność i dobre jedzenie zamiast hucznej imprezy — z menu i obsługą dopasowaną do charakteru spotkania.",
  },
  {
    title: "Spotkania rodzinne",
    desc:
      "Wspólny obiad lub kolacja dla całej rodziny — bez okazji albo z okazji. Przygotujemy stół dla kilkunastu osób, uwzględnimy dania wegetariańskie i informacje o alergiach podane wcześniej.",
  },
  {
    title: "Spotkania firmowe",
    desc:
      "Spotkania zespołów, lunche biznesowe i przerwy kawowe. Organizujemy je w lokalu lub jako catering z dostawą na terenie Warszawy. Formę i godzinę ustalamy pod plan dnia firmy.",
  },
];

const steps = [
  ["1", "Kontakt", "Wysyłasz zapytanie przez formularz lub dzwonisz."],
  ["2", "Termin", "Potwierdzamy dostępność wybranej daty."],
  ["3", "Menu", "Dobieramy menu pod typ wydarzenia i gości."],
  ["4", "Przygotowanie", "Przygotowujemy salę lub catering."],
  ["5", "Wydarzenie", "Obsługujemy przyjęcie w dniu wydarzenia."],
];

const relatedLinks = [
  {
    href: "/komunie-chrzciny",
    title: "Komunie i chrzciny",
    desc: "Rodzinne przyjęcia komunijne i chrzcinowe z menu dla dzieci i dorosłych.",
  },
  {
    href: "/wesela-rocznice",
    title: "Wesela i rocznice",
    desc: "Kameralne wesela oraz jubileusze w gronie najbliższych.",
  },
  {
    href: "/catering",
    title: "Catering",
    desc: "Catering firmowy i prywatny — w lokalu lub z dostawą na terenie Warszawy.",
  },
];

export default function ImprezyOkolicznosciowePage() {
  return (
    <>
      <PageHero
        image="/assets/restauracja-klosy/events/stol-bankietowy.jpg"
        alt="Stół bankietowy nakryty na przyjęcie okolicznościowe w Restauracji KŁOSY"
        eyebrow="Restauracja KŁOSY · Warszawa, Ochota"
        title="Imprezy okolicznościowe w Warszawie"
        subtitle="Kameralne urodziny, rocznice oraz spotkania rodzinne i firmowe przy Al. Jerozolimskich 123a — z domową kuchnią i spokojną obsługą, bez hucznych imprez na setki osób."
        cta={{ label: "Zapytaj o termin", href: "/kontakt#formularz" }}
      />

      <FactsBand
        items={[
          { value: "Przyjęcia rodzinne", label: "Urodziny, rocznice, spotkania" },
          { value: "Spotkania firmowe", label: "Lunche i przerwy kawowe" },
          { value: "Menu na życzenie", label: "Dopasowane do gości" },
          { value: "Centrum Warszawy", label: "Ochota, Al. Jerozolimskie 123a" },
        ]}
      />

      <EditorialSplit
        image="/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.jpg"
        alt="Rustykalna sala Restauracji KŁOSY przygotowana na przyjęcie okolicznościowe"
        eyebrow="Jakie imprezy organizujemy"
        title="Okazje, które przygotowujemy w KŁOSACH"
      >
        <p>
          Każde przyjęcie ustalamy indywidualnie — od liczby gości i terminu po menu. Najczęściej
          organizujemy:
        </p>
        <ul className="space-y-3">
          {occasions.map((o) => (
            <li key={o.title}>
              <span className="font-medium text-forest">{o.title}.</span> {o.desc}
            </li>
          ))}
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.jpg"
        alt="Kameralna sala Restauracji KŁOSY z kwiatami na stołach"
        eyebrow="Kameralnie i rodzinnie"
        title="Spokojny, rodzinny klimat zamiast wielkiej sali bankietowej"
        reverse
      >
        <p>
          Nasza sala mieści się w budynku Atlas Tower przy Al. Jerozolimskich 123a. Dokładne piętro
          i wskazówki dojazdu potwierdzamy w kontakcie. Postawiliśmy na spokojny, rodzinny klimat —
          zamiast wielkiej sali bankietowej proponujemy przestrzeń, w której goście dobrze się
          słyszą i czują się jak u siebie.
        </p>
        <p>
          Menu układamy pod typ wydarzenia i preferencje gości — uwzględniamy dania wegetariańskie
          oraz informacje o alergiach podane w zapytaniu.
        </p>
        <p>
          Specjalizujemy się w przyjęciach kameralnych. Dokładną pojemność sali i maksymalną liczbę
          gości potwierdzamy w kontakcie, bo zależą one od układu stołów i charakteru wydarzenia.
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-medium text-forest">Liczba miejsc na sali:</span>{" "}
            {restaurant.capacity}
          </li>
          <li>
            <span className="font-medium text-forest">Maksymalna liczba gości na przyjęciu:</span>{" "}
            {TODO}
          </li>
          <li>
            <span className="font-medium text-forest">Większe grupy:</span> dla większej liczby
            osób proponujemy catering z dostawą —{" "}
            <Link href="/catering" className="text-clay underline-offset-2 hover:underline">
              zobacz ofertę cateringu
            </Link>
            .
          </li>
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/catering/catering-bufet-caprese.jpg"
        alt="Bufet cateringowy Restauracji KŁOSY z sałatką caprese"
        eyebrow="Jak wygląda organizacja"
        title="Od zapytania do dnia wydarzenia"
      >
        <p>
          Organizacja przyjęcia w KŁOSACH przebiega w kilku prostych krokach — prowadzimy Cię przez
          nie od pierwszego kontaktu aż po dzień wydarzenia:
        </p>
        <ol className="space-y-3">
          {steps.map(([n, t, d]) => (
            <li key={n} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wheat font-serif text-sm text-forest">
                {n}
              </span>
              <span>
                <span className="font-medium text-forest">{t}.</span> {d}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-ink/60">
          Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje propozycję
          menu.
        </p>
        <p>
          Restauracja działa przy {restaurant.foundation.name}, a zysk wspiera cele statutowe
          Fundacji. Wybierając KŁOSY na swoje przyjęcie, jednocześnie wspierasz tę działalność.
        </p>
      </EditorialSplit>

      <PhotoStrip
        heading="Zobacz nasze realizacje"
        images={[
          {
            src: "/assets/restauracja-klosy/events/stol-bankietowy.jpg",
            alt: "Stół bankietowy nakryty na przyjęcie w Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.jpg",
            alt: "Rustykalna sala przygotowana na przyjęcie okolicznościowe",
          },
          {
            src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.jpg",
            alt: "Sala Restauracji KŁOSY nakryta przed przyjęciem",
          },
          {
            src: "/assets/restauracja-klosy/events/obsluga-kelnerska.jpg",
            alt: "Obsługa kelnerska podczas przyjęcia w KŁOSACH",
          },
          {
            src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.jpg",
            alt: "Słodki stół z ciastami przygotowany przez Restaurację KŁOSY",
          },
        ]}
      />

      {/* Linki do pokrewnych podstron */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">Sprawdź też</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
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
          <h2 className="text-3xl sm:text-4xl">Najczęstsze pytania</h2>
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
            <h2 className="text-3xl text-cream">Zaplanuj swoją imprezę w KŁOSACH</h2>
            <p className="mt-2 text-cream/80">
              Napisz, co planujesz — odpowiemy z propozycją terminu i menu.
            </p>
          </div>
          <Link
            href="/kontakt#formularz"
            className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            Wyślij zapytanie
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Strona główna", url: "/" },
            { name: "Imprezy okolicznościowe", url: HREF },
          ]),
          serviceSchema(
            "Organizacja imprez okolicznościowych — Warszawa",
            "Kameralne imprezy okolicznościowe w Restauracji KŁOSY przy Al. Jerozolimskich 123a w Warszawie: urodziny, rocznice, spotkania rodzinne i firmowe, z menu dopasowanym do gości oraz obsługą na miejscu lub cateringiem z dostawą.",
          ),
          faqSchema(pageFaq),
        ]}
      />
    </>
  );
}
