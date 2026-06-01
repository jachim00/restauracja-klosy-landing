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

const HREF = "/komunie-chrzciny";

export const metadata: Metadata = {
  title: "Komunie i chrzciny Warszawa | Kameralne przyjęcia rodzinne",
  description:
    "Przyjęcia komunijne i chrzcinowe w Warszawie (Al. Jerozolimskie 123a, Ochota). Kameralna sala, menu dla dzieci i dorosłych, obsługa na miejscu. Restauracja KŁOSY — Fundacja „Człowiek w Potrzebie”.",
  alternates: { canonical: HREF },
};

// Podzbiór FAQ pasujący tematycznie do komunii / chrzcin / przyjęć rodzinnych.
const faqSubset = faqItems.filter((f) =>
  ["komuni", "chrzcin", "menu można dostosować", "dostępny termin", "Gdzie znajduje"].some((kw) =>
    (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

const checklist = [
  "Przybliżona data oraz godzina, o której skończy się msza / uroczystość w kościele.",
  "Liczba dorosłych i liczba dzieci (osobno) — to wpływa na układ menu i sali.",
  "Informacje o alergiach, nietolerancjach oraz potrzebie dań wegetariańskich.",
  "Czy zapewniacie własny tort, czy ma się nim zająć restauracja.",
  "Ewentualne dekoracje lub elementy okolicznościowe, które chcecie przynieść.",
  "Czy wśród gości będą małe dzieci wymagające wygodnego, spokojnego miejsca.",
];

const phoneHref = `tel:+48${restaurant.contact.phone}`;
const mailHref = `mailto:${restaurant.contact.email}`;

export default function KomunieChrzcinyPage() {
  return (
    <main className="bg-cream text-ink">
      <PageHero
        image="/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp"
        alt="Nakryty stół przygotowany na kameralne przyjęcie komunijne w Restauracji KŁOSY"
        eyebrow="Przyjęcia rodzinne w Warszawie"
        title="Komunie i chrzciny w Restauracji KŁOSY"
        subtitle="Kameralna sala na Ochocie, kilka minut od centrum Warszawy. Przyjęcia po Pierwszej Komunii i po chrzcie — z menu dla dzieci i dorosłych oraz obsługą na miejscu."
        cta={{ label: "Zapytaj o termin", href: "/kontakt#formularz" }}
      />

      <FactsBand
        items={[
          { value: "Kameralne", label: "Kameralne przyjęcia" },
          { value: "Dla wszystkich", label: "Menu dla dzieci i dorosłych" },
          { value: "Na miejscu", label: "Obsługa na miejscu" },
          { value: "Ochota", label: "Warszawa, Ochota" },
        ]}
      />

      <EditorialSplit
        image="/assets/restauracja-klosy/communions/stol-komunijny-balony.webp"
        alt="Stół komunijny z dekoracją balonową w Restauracji KŁOSY"
        eyebrow="Charakter miejsca"
        title="Kameralne miejsce na rodzinną uroczystość"
      >
        <p>
          Komunia i chrzciny to uroczystości rodzinne, a nie wielkie eventy — i tak właśnie
          do nich podchodzimy. KŁOSY to spokojna, kameralna restauracja, w której łatwo
          porozmawiać przy stole, a dzieci mają miejsce, żeby pobyć obok dorosłych.
          Stawiamy na domową, polską kuchnię i prostą, ciepłą oprawę zamiast hałaśliwej sali
          bankietowej.
        </p>
        <p>
          Mieścimy się przy Al. Jerozolimskich 123a w warszawskiej dzielnicy Ochota, w budynku
          Atlas Tower. To dobrze skomunikowana lokalizacja blisko centrum — wygodna dla gości
          przyjeżdżających z różnych części Warszawy oraz spoza miasta. Dokładny dojazd i piętro
          potwierdzamy w kontakcie ({restaurant.address.building.includes(TODO) ? TODO : "do potwierdzenia"}).
        </p>
        <p>
          Ponieważ przyjmujemy ograniczoną liczbę przyjęć, każdej rodzinie poświęcamy uwagę:
          menu układamy pod konkretną uroczystość, a w dniu przyjęcia dbamy o obsługę, żeby
          gospodarze mogli być gośćmi u siebie. Restaurację prowadzi Fundacja Pomocy Rodzinie
          „Człowiek w Potrzebie”, więc każde przyjęcie wspiera też jej cele statutowe.
        </p>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/events/obsluga-kelnerska.webp"
        alt="Obsługa kelnerska przy stole podczas przyjęcia w Restauracji KŁOSY"
        eyebrow="Komunie i chrzciny"
        title="Dwie różne uroczystości, jedno miejsce"
        reverse
      >
        <p>
          Pierwsza Komunia Święta to dzień dziecka i całej rodziny. Przygotujemy obiad
          komunijny z menu, które smakuje zarówno dzieciom, jak i dorosłym, znajdziemy
          miejsce na tort, a po mszy wystarczy przyjść prosto do nas. Sezon komunijny
          (zwykle maj) bywa intensywny, dlatego o terminy najlepiej pytać z wyprzedzeniem.
        </p>
        <p>
          Chrzciny organizujemy przez cały rok i zwykle w gronie najbliższych — chrzestni,
          dziadkowie, rodzina. To często spokojniejsze, jeszcze bardziej kameralne spotkanie.
          Zadbamy o ciche, wygodne miejsce, w którym maluch i rodzice czują się dobrze,
          oraz o menu na spokojny, rodzinny obiad.
        </p>
        <ul className="space-y-2 text-ink/75">
          <li className="flex gap-2">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
            Menu obiadowe dla dzieci i dorosłych, miejsce na tort
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
            Kameralny układ stołu dla najbliższych
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
            Obsługa, by rodzice mogli być z dzieckiem
          </li>
        </ul>
      </EditorialSplit>

      <WheatDivider />

      <EditorialSplit
        image="/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp"
        alt="Kameralna sala restauracyjna z kwiatami w Restauracji KŁOSY"
        eyebrow="Menu"
        title="Menu dla dzieci i dla dorosłych"
      >
        <p>
          Na przyjęciu komunijnym czy chrzcinowym przy jednym stole siedzą dziadkowie
          i kilkulatki — dlatego menu układamy dwutorowo. Dla dorosłych proponujemy domową,
          polską kuchnię w wersji obiadowej; dla dzieci dobieramy dania prostsze i pewne, takie,
          które faktycznie zjedzą. Uwzględniamy dania wegetariańskie oraz alergie
          i nietolerancje zgłoszone wcześniej w zapytaniu.
        </p>
        <p>
          Konkretne pozycje menu i wycenę przygotowujemy indywidualnie po poznaniu liczby gości
          i charakteru uroczystości — nie publikujemy tu sztywnego cennika ani gotowych zestawów,
          bo każde przyjęcie układamy osobno. Aktualną kartę dań możesz też pobrać poniżej.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/menu-dnia"
            className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
          >
            Zobacz menu dnia
          </Link>
          {restaurant.menuPdf.includes(TODO) ? (
            <span className="rounded-card border border-dashed border-olive/40 px-6 py-3 text-sm text-ink/50">
              [DO UZUPEŁNIENIA: link do aktualnego menu PDF]
            </span>
          ) : (
            <a
              href={restaurant.menuPdf}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              Pobierz menu (PDF)
            </a>
          )}
        </div>
        <p className="text-sm text-ink/50">
          Ceny i dostępność: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] —
          ustalane indywidualnie po zapytaniu.
        </p>
      </EditorialSplit>

      <WheatDivider />

      <PhotoStrip
        heading="Zobacz nasze realizacje"
        images={[
          {
            src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
            alt: "Stół komunijny z girlandą kwiatową w Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
            alt: "Stół komunijny z dekoracją balonową w Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
            alt: "Obsługa kelnerska podczas przyjęcia w Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
            alt: "Słodki stół z ciastami na przyjęcie rodzinne",
          },
          {
            src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
            alt: "Pieczona kaczka — danie z domowej, polskiej kuchni",
          },
        ]}
      />

      {/* CO PRZYGOTOWAĆ */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Co warto przygotować przed zapytaniem
          </h2>
          <p className="mt-3 text-ink/70">
            Im więcej szczegółów podasz na starcie, tym szybciej przygotujemy trafną propozycję
            menu i terminu. Nie musisz mieć wszystkiego dopięte — wystarczą przybliżone informacje.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
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
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">Dojazd i kontakt</h2>
          <p className="mt-4 text-ink/80">
            Restauracja KŁOSY mieści się w centrum Warszawy, na Ochocie — dobrze skomunikowanym
            punkcie dla gości z całego miasta i okolic.
          </p>
          <ul className="mt-6 space-y-3 text-ink/80">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
              <span>
                {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                {restaurant.address.city} ({restaurant.address.building} — do potwierdzenia)
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
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Komunie i chrzciny — najczęstsze pytania
          </h2>
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
          <h2 className="font-serif text-3xl sm:text-4xl">
            Zaplanujmy razem komunię lub chrzciny
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Napisz, kiedy planujecie uroczystość i ilu spodziewacie się gości — odezwiemy się
            z propozycją terminu i menu. Bez zobowiązań.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt#formularz"
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              Wyślij zapytanie
            </Link>
            <a
              href={phoneHref}
              className="rounded-card border border-cream/40 px-6 py-3 font-medium text-cream transition hover:bg-cream/10"
            >
              Zadzwoń: {restaurant.contact.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>Zobacz też:</span>
            <Link href="/wesela-rocznice" className="underline hover:text-cream">
              Wesela i rocznice
            </Link>
            <Link href="/imprezy-okolicznosciowe" className="underline hover:text-cream">
              Imprezy okolicznościowe
            </Link>
            <Link href="/catering" className="underline hover:text-cream">
              Catering
            </Link>
            <Link href="/menu-dnia" className="underline hover:text-cream">
              Menu dnia
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Strona główna", url: "/" },
            { name: "Komunie i chrzciny", url: HREF },
          ]),
          serviceSchema(
            "Przyjęcia komunijne i chrzcinowe",
            "Organizacja kameralnych przyjęć komunijnych i chrzcinowych w Restauracji KŁOSY w Warszawie — menu dla dzieci i dorosłych, sala i obsługa na miejscu.",
          ),
          faqSchema(faqSubset),
        ]}
      />
    </main>
  );
}
