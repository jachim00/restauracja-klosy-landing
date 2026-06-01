import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle2, Baby, Church, Utensils, CalendarDays } from "lucide-react";
import { restaurant, TODO } from "@/content/restaurant-data";
import { faqItems } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

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

const steps = [
  {
    icon: Mail,
    title: "1. Zapytanie i termin",
    body: "Wysyłasz zapytanie przez formularz lub dzwonisz. Podajesz przybliżoną datę (komunie zwykle przypadają w maju, chrzciny — przez cały rok) i orientacyjną liczbę gości. Potwierdzamy dostępność terminu.",
  },
  {
    icon: Utensils,
    title: "2. Propozycja menu",
    body: "Układamy menu osobno dla dorosłych i dla dzieci. Uwzględniamy dania wegetariańskie oraz alergie i nietolerancje zgłoszone w zapytaniu.",
  },
  {
    icon: CalendarDays,
    title: "3. Ustalenie szczegółów",
    body: "Doprecyzowujemy godziny, układ sali, miejsce na tort komunijny lub chrzcinowy oraz ewentualne dekoracje, które przynosicie ze sobą.",
  },
  {
    icon: CheckCircle2,
    title: "4. Przyjęcie",
    body: "W dniu uroczystości zajmujemy się obsługą i serwisem, a Wy spędzacie czas z rodziną. Po Pierwszej Komunii lub chrzcie świętym wystarczy przyjść prosto z kościoła.",
  },
];

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

      {/* HERO */}
      <section className="section-y border-b border-linen">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-wide text-olive">
              Przyjęcia rodzinne w Warszawie
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Komunie i chrzciny w Restauracji KŁOSY
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/75">
              Kameralna sala na Ochocie, kilka minut od centrum Warszawy. Przygotowujemy
              przyjęcia po Pierwszej Komunii Świętej i po chrzcie — z menu osobno dla dzieci
              i dorosłych oraz obsługą, dzięki której rodzina może w spokoju spędzić czas razem.
              Restaurację prowadzi Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”, więc każde
              przyjęcie wspiera też jej cele statutowe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt#formularz"
                className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
              >
                Zapytaj o termin
              </Link>
              <a
                href={phoneHref}
                className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
              >
                Zadzwoń: {restaurant.contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div
            role="img"
            aria-label="Nakryty stół przygotowany na kameralne przyjęcie komunijne w Restauracji KŁOSY"
            className="flex aspect-[4/3] items-center justify-center rounded-card border border-linen bg-linen/60 shadow-soft"
          >
            <span className="px-6 text-center text-sm text-ink/40">
              [DO UZUPEŁNIENIA: zdjęcie sali / nakrytego stołu na przyjęcie komunijne]
            </span>
          </div>
        </div>
      </section>

      {/* DLACZEGO / CHARAKTER MIEJSCA */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Kameralne miejsce na rodzinną uroczystość
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink/80">
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
              gospodarze mogli być gośćmi u siebie.
            </p>
          </div>
        </div>
      </section>

      {/* KOMUNIE vs CHRZCINY */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Komunie i chrzciny — dwie różne uroczystości, jedno miejsce
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-card border border-linen bg-cream p-7 shadow-soft">
              <Church className="text-olive" size={28} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl text-forest">Przyjęcia komunijne</h3>
              <p className="mt-3 text-ink/80">
                Pierwsza Komunia Święta to dzień dziecka i całej rodziny. Przygotujemy obiad
                komunijny z menu, które smakuje zarówno dzieciom, jak i dorosłym, znajdziemy
                miejsce na tort, a po mszy wystarczy przyjść prosto do nas. Sezon komunijny
                (zwykle maj) bywa intensywny, dlatego o terminy najlepiej pytać z wyprzedzeniem.
              </p>
              <ul className="mt-5 space-y-2 text-ink/75">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Menu obiadowe dla dzieci i dorosłych
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Miejsce na tort i słodki poczęstunek
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Obsługa, by rodzice mogli być z dzieckiem
                </li>
              </ul>
            </article>

            <article className="rounded-card border border-linen bg-cream p-7 shadow-soft">
              <Baby className="text-olive" size={28} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl text-forest">Przyjęcia chrzcinowe</h3>
              <p className="mt-3 text-ink/80">
                Chrzciny organizujemy przez cały rok i zwykle w gronie najbliższych — chrzestni,
                dziadkowie, rodzina. To często spokojniejsze, jeszcze bardziej kameralne spotkanie.
                Zadbamy o ciche, wygodne miejsce, w którym maluch i rodzice czują się dobrze,
                oraz o menu na spokojny, rodzinny obiad.
              </p>
              <ul className="mt-5 space-y-2 text-ink/75">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Kameralny układ stołu dla najbliższych
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Spokojne miejsce dla rodziców z dzieckiem
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
                  Menu dopasowane do pory dnia uroczystości
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* MENU DLA DZIECI I DOROSŁYCH */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Menu dla dzieci i dla dorosłych
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink/80">
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
              bo każde przyjęcie układamy osobno. Aktualną kartę dań możesz też pobrać poniżej:
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
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
          <p className="mt-4 text-sm text-ink/50">
            Ceny i dostępność: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] —
            ustalane indywidualnie po zapytaniu.
          </p>
        </div>
      </section>

      {/* PROCES */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Jak zorganizujemy Wasze przyjęcie — krok po kroku
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Proces jest prosty i bez presji. Poniżej cztery kroki od pierwszego zapytania
            do dnia uroczystości.
          </p>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const Icon = s.icon;
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
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
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

          <div
            role="img"
            aria-label="Lokalizacja Restauracji KŁOSY przy Al. Jerozolimskich 123a w Warszawie"
            className="flex min-h-56 items-center justify-center rounded-card border border-linen bg-linen/60 shadow-soft"
          >
            <span className="px-6 text-center text-sm text-ink/40">
              [DO UZUPEŁNIENIA: mapa dojazdu / zdjęcie wejścia do budynku Atlas Tower]
            </span>
          </div>
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
    </main>
  );
}
