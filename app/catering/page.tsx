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

const HREF = "/catering";

export const metadata: Metadata = {
  title: "Catering Warszawa | Firmowy i prywatny — Restauracja KŁOSY",
  description:
    "Catering w Warszawie — firmowy i prywatny, w lokalu lub z dostawą. Lunche biznesowe, przerwy kawowe, catering na szkolenia oraz obiady dla grup szkolnych. Faktura VAT. Restauracja KŁOSY na Ochocie (Al. Jerozolimskie 123a).",
  alternates: { canonical: HREF },
};

// Podzbiór FAQ pasujący tematycznie do cateringu / dostawy / obiadów dla grup.
const faqSubset = faqItems.filter((f) =>
  ["catering", "dostaw", "grup szkoln", "menu można dostosować", "dostępny termin", "Gdzie znajduje"].some(
    (kw) => (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

const cateringTypes = [
  {
    icon: Building2,
    title: "Catering firmowy",
    body: "Obsługujemy spotkania w biurach i wydarzenia firmowe na Ochocie i w okolicy — od śniadań roboczych, przez lunche dla zespołu, po poczęstunek na spotkanie z klientem. Rozliczenie na fakturę VAT, z jednym kontaktem po naszej stronie.",
    points: [
      "Lunche dla zespołu i spotkań z klientem",
      "Catering na konferencje i wydarzenia firmowe",
      "Stała współpraca lub jednorazowe zamówienie",
    ],
  },
  {
    icon: Users,
    title: "Catering prywatny",
    body: "Spotkania rodzinne, urodziny, rocznice i kameralne uroczystości — przygotujemy domową, polską kuchnię na Wasze przyjęcie. Catering odbierzecie u nas lub dowieziemy go pod wskazany adres w Warszawie.",
    points: [
      "Spotkania rodzinne i urodziny",
      "Poczęstunek na kameralne uroczystości",
      "Odbiór w lokalu lub dostawa na adres",
    ],
  },
  {
    icon: Truck,
    title: "Catering z dostawą",
    body: "Nie musicie przyjeżdżać po jedzenie — dowozimy catering na terenie Warszawy. Obszar dostawy, godzinę i sposób wydania ustalamy przy zamówieniu, żeby dania dotarły świeże i o czasie.",
    points: [
      "Dostawa na terenie Warszawy",
      "Ustalona godzina wydania",
      "Dania pakowane do transportu",
    ],
  },
  {
    icon: Coffee,
    title: "Przerwy kawowe",
    body: "Przerwa kawowa na szkolenie, warsztat lub spotkanie zarządu — kawa, herbata, woda oraz drobny poczęstunek na słono i słodko. Zakres dopasowujemy do długości spotkania i liczby uczestników.",
    points: [
      "Kawa, herbata, woda",
      "Drobny poczęstunek słony i słodki",
      "Coffee break ciągły lub w wyznaczonych porach",
    ],
  },
  {
    icon: Utensils,
    title: "Lunche biznesowe",
    body: "Lunch dla zespołu bez wychodzenia z biura — zestawy obiadowe oparte na naszym menu dnia, w wygodnej do podania formie. Sprawdza się przy regularnym dożywianiu pracowników i przy spotkaniach całodniowych.",
    points: [
      "Zestawy obiadowe z menu dnia",
      "Opcje wegetariańskie",
      "Forma wygodna do podania w biurze",
    ],
  },
  {
    icon: GraduationCap,
    title: "Catering na szkolenia i grupy",
    body: "Obsługujemy szkolenia, warsztaty i spotkania grupowe — łączymy przerwy kawowe z lunchem dla uczestników. Przygotowujemy też obiady dla grup, w tym grup szkolnych, w ustalonej liczbie porcji.",
    points: [
      "Pełna obsługa szkoleń (przerwa + lunch)",
      "Obiady dla grup, w tym szkolnych",
      "Stała liczba porcji ustalana z góry",
    ],
  },
];

const b2bPoints = [
  {
    icon: FileText,
    title: "Faktura VAT",
    body: "Każde zamówienie firmowe rozliczamy fakturą VAT — wygodnie dla księgowości i przy cyklicznej współpracy.",
  },
  {
    icon: Building2,
    title: "Jeden kontakt",
    body: "Po naszej stronie prowadzi Was jedna osoba: od ustalenia menu, przez termin, po wydanie i rozliczenie zamówienia.",
  },
  {
    icon: CalendarDays,
    title: "Zamówienia cykliczne",
    body: "Obsługujemy zarówno jednorazowe wydarzenia, jak i stałe, powtarzalne dostawy — np. regularne lunche dla zespołu.",
  },
  {
    icon: Users,
    title: "Wsparcie Fundacji",
    body: "Zamawiając u nas, wspieracie też cele statutowe Fundacji „Człowiek w Potrzebie” — to argument ważny dla wielu firm.",
  },
];

const steps = [
  {
    icon: Mail,
    title: "1. Zapytanie",
    body: "Wysyłasz zapytanie przez formularz lub dzwonisz. Podajesz typ cateringu (firmowy / prywatny), datę, liczbę osób oraz to, czy odbiór ma być u nas, czy z dostawą.",
  },
  {
    icon: Utensils,
    title: "2. Propozycja menu i wycena",
    body: "Układamy propozycję menu pod Wasze potrzeby i przygotowujemy wycenę. Uwzględniamy dania wegetariańskie oraz alergie i nietolerancje zgłoszone w zapytaniu.",
  },
  {
    icon: CheckCircle2,
    title: "3. Potwierdzenie",
    body: "Potwierdzamy szczegóły: godzinę wydania lub dostawy, liczbę porcji i formę rozliczenia. Dla firm domyślnie wystawiamy fakturę VAT.",
  },
  {
    icon: Truck,
    title: "4. Realizacja",
    body: "W ustalonym terminie przygotowujemy zamówienie do odbioru w lokalu lub dowozimy je na wskazany adres w Warszawie.",
  },
];

const checklist = [
  "Typ cateringu: firmowy czy prywatny — i czy potrzebna jest faktura VAT.",
  "Data i godzina wydania lub dostawy, ewentualnie pory przerw kawowych.",
  "Liczba osób oraz forma: odbiór w lokalu czy dostawa pod adres.",
  "Charakter spotkania: lunch, przerwa kawowa, szkolenie, obiad dla grupy.",
  "Informacje o alergiach, nietolerancjach i potrzebie dań wegetariańskich.",
  "Czy zamówienie jest jednorazowe, czy ma być powtarzalne (np. stałe lunche).",
];

const phoneHref = `tel:+48${restaurant.contact.phone}`;
const mailHref = `mailto:${restaurant.contact.email}`;

export default function CateringPage() {
  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Strona główna", url: "/" },
            { name: "Catering", url: HREF },
          ]),
          serviceSchema(
            "Catering firmowy i prywatny w Warszawie",
            "Catering w Restauracji KŁOSY w Warszawie — firmowy i prywatny, w lokalu lub z dostawą: lunche biznesowe, przerwy kawowe, catering na szkolenia oraz obiady dla grup szkolnych. Rozliczenie fakturą VAT.",
          ),
          faqSchema(faqSubset),
        ]}
      />

      {/* HERO */}
      <PageHero
        image="/assets/restauracja-klosy/catering/catering-bufet-caprese.jpg"
        alt="Bufet cateringowy Restauracji KŁOSY — przekąski caprese przygotowane do podania na spotkaniu firmowym"
        eyebrow="Catering w Warszawie"
        title="Catering firmowy i prywatny — Restauracja KŁOSY"
        subtitle="Domowa, polska kuchnia z restauracji na Ochocie — w Waszym biurze, na szkoleniu albo na rodzinnym spotkaniu. W lokalu lub z dostawą na terenie Warszawy. Zamówienia firmowe rozliczamy fakturą VAT."
        cta={{ label: "Zapytaj o termin", href: "/kontakt#formularz" }}
      />

      {/* FAKTY */}
      <FactsBand
        items={[
          { value: "Catering z dostawą", label: "Na terenie Warszawy" },
          { value: "Firmowy i prywatny", label: "Biuro, szkolenie, spotkanie rodzinne" },
          { value: "Przerwy kawowe", label: "Kawa, herbata i poczęstunek" },
          { value: "Faktura VAT", label: "Wygodne rozliczenie dla firm" },
        ]}
      />

      {/* WSTĘP / KIM JESTEŚMY */}
      <EditorialSplit
        image="/assets/restauracja-klosy/catering/catering-desery-przekaski.jpg"
        alt="Desery i przekąski cateringowe Restauracji KŁOSY ułożone na tacy"
        eyebrow="Catering z restauracji"
        title="Catering z restauracji, a nie z fabryki cateringowej"
      >
        <p>
          KŁOSY to działająca restauracja przy Al. Jerozolimskich 123a w Warszawie, w dzielnicy
          Ochota, w budynku Atlas Tower. Catering to przedłużenie naszej codziennej kuchni:
          dania, które serwujemy gościom w lokalu, przygotowujemy też na wynos i z dostawą.
          Dzięki temu na spotkanie firmowe czy rodzinne trafia ta sama domowa, polska kuchnia,
          a nie anonimowe porcje z linii produkcyjnej.
        </p>
        <p>
          Obsługujemy dwa główne kierunki. Pierwszy to catering firmowy (B2B): lunche dla
          zespołów, przerwy kawowe, obsługa szkoleń i konferencji oraz cykliczne dostawy do
          biur — wszystko z rozliczeniem na fakturę VAT. Drugi to catering prywatny: spotkania
          rodzinne, urodziny, rocznice i kameralne uroczystości, na które dowozimy jedzenie lub
          przygotowujemy je do odbioru.
        </p>
        <p>
          Niezależnie od skali zamówienia menu układamy indywidualnie — pod liczbę osób, porę
          dnia i charakter spotkania. Uwzględniamy dania wegetariańskie oraz alergie
          i nietolerancje zgłoszone w zapytaniu. Nie publikujemy tu sztywnego cennika, bo
          każde zamówienie wyceniamy osobno po poznaniu szczegółów.
        </p>
      </EditorialSplit>

      {/* RODZAJE CATERINGU */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Co przygotujemy w ramach cateringu
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Od pojedynczej przerwy kawowej po stałe lunche dla zespołu — poniżej najczęstsze
            formy cateringu, które realizujemy w Warszawie.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cateringTypes.map((c) => {
              const Icon = c.icon;
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
        image="/assets/restauracja-klosy/catering/catering-croissanty.jpg"
        alt="Croissanty i drobne wypieki na przerwę kawową przygotowane przez Restaurację KŁOSY"
        eyebrow="Dla firm"
        title="Catering firmowy z fakturą VAT"
        reverse
      >
        <p className="text-lg">
          Dla firm catering ma być przede wszystkim wygodny i przewidywalny. Dlatego zamówienia
          biznesowe prowadzimy z jednym kontaktem po naszej stronie, rozliczamy fakturą VAT
          i obsługujemy zarówno jednorazowe wydarzenia, jak i powtarzalne dostawy do biura.
        </p>
        <ul className="space-y-4">
          {b2bPoints.map((b) => {
            const Icon = b.icon;
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
        <p className="text-sm text-ink/55">
          Dane do faktury (NIP, nazwa firmy, adres) zbieramy przy potwierdzeniu zamówienia.
          Minimalne wartości zamówienia i obszar dostawy: [DO UZUPEŁNIENIA: minimalne zamówienie
          cateringu firmowego / strefa dostawy] — ustalane przy zapytaniu.
        </p>
      </EditorialSplit>

      <WheatDivider />

      {/* OBIADY DLA GRUP SZKOLNYCH */}
      <EditorialSplit
        image="/assets/restauracja-klosy/catering/slodki-stol-ciasta.jpg"
        alt="Słodki stół z ciastami przygotowany przez Restaurację KŁOSY"
        eyebrow="Grupy zorganizowane"
        title="Obiady dla grup, w tym grup szkolnych"
      >
        <p>
          Przygotowujemy obiady dla grup zorganizowanych — wycieczek, grup szkolnych,
          uczestników szkoleń i warsztatów. Liczbę porcji ustalamy z góry, dzięki czemu
          każdy z uczestników dostaje ciepły, sycący posiłek bez kolejek i czekania.
        </p>
        <p>
          Dla grup szkolnych dobieramy dania prostsze i pewne, a w razie potrzeby
          przygotowujemy wersje wegetariańskie oraz uwzględniamy zgłoszone alergie. Catering
          dla grup możemy zrealizować na miejscu w restauracji albo dowieźć w ustalone miejsce
          na terenie Warszawy.
        </p>
        <p className="text-sm text-ink/55">
          Ceny zestawów dla grup: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] —
          ustalane indywidualnie po podaniu liczby osób.
        </p>
      </EditorialSplit>

      {/* MENU */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Menu cateringowe i wycena
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink/80">
            <p>
              Menu cateringowe opieramy na naszej codziennej karcie i na menu dnia — w wersji
              dopasowanej do podania poza restauracją. Konkretne zestawy i wycenę przygotowujemy
              indywidualnie, po poznaniu liczby osób, charakteru spotkania i formy wydania (odbiór
              czy dostawa). Aktualną kartę dań możesz zobaczyć i pobrać poniżej:
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
            Ceny i pakiety cateringowe: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — ustalane
            indywidualnie po zapytaniu.
          </p>
        </div>
      </section>

      {/* PROCES */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Jak zamówić catering — krok po kroku
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Proces jest prosty: cztery kroki od pierwszego zapytania do wydania zamówienia.
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
            Co warto podać w zapytaniu o catering
          </h2>
          <p className="mt-3 text-ink/70">
            Im więcej szczegółów podasz na starcie, tym szybciej przygotujemy trafną propozycję
            menu i wycenę. Wystarczą przybliżone informacje.
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

      {/* GALERIA REALIZACJI */}
      <PhotoStrip
        heading="Zobacz nasze realizacje"
        images={[
          {
            src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.jpg",
            alt: "Bufet cateringowy z przekąskami caprese przygotowany przez Restaurację KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/catering/catering-croissanty.jpg",
            alt: "Croissanty i drobne wypieki na przerwę kawową",
          },
          {
            src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.jpg",
            alt: "Desery i przekąski cateringowe ułożone na tacy",
          },
          {
            src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.jpg",
            alt: "Słodki stół z ciastami od Restauracji KŁOSY",
          },
          {
            src: "/assets/restauracja-klosy/food/desery-owsiane-taca.jpg",
            alt: "Desery owsiane podane na tacy",
          },
        ]}
      />

      {/* LOKALIZACJA / NAP */}
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">Skąd dowozimy i kontakt</h2>
          <p className="mt-4 text-ink/80">
            Catering przygotowujemy w naszej restauracji na Ochocie i dowozimy na terenie
            Warszawy. To dobrze skomunikowany punkt, blisko centrum — wygodny przy dostawach
            do biur i na spotkania w różnych częściach miasta.
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
          <p className="mt-4 text-sm text-ink/55">
            Obszar i koszt dostawy: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] —
            potwierdzamy przy zamówieniu.
          </p>
          <p className="mt-6 text-sm text-ink/55">{restaurant.legalNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Catering — najczęstsze pytania
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
          <h2 className="font-serif text-3xl sm:text-4xl">Zamówmy razem catering</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Napisz, na kiedy i dla ilu osób potrzebujecie cateringu oraz czy ma być z dostawą —
            odezwiemy się z propozycją menu i wyceną. Dla firm domyślnie wystawiamy fakturę VAT.
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
            <Link href="/menu-dnia" className="underline hover:text-cream">
              Menu dnia
            </Link>
            <Link href="/imprezy-okolicznosciowe" className="underline hover:text-cream">
              Imprezy okolicznościowe
            </Link>
            <Link href="/komunie-chrzciny" className="underline hover:text-cream">
              Komunie i chrzciny
            </Link>
            <Link href="/wesela-rocznice" className="underline hover:text-cream">
              Wesela i rocznice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
