import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Utensils, CalendarCheck, Cake, Phone, Mail } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { faqItems } from "@/content/faq";
import { restaurant, TODO } from "@/content/restaurant-data";

export const metadata: Metadata = {
  title: "Wesela kameralne i rocznice Warszawa | Restauracja KŁOSY",
  description:
    "Kameralne wesela i przyjęcia rocznicowe w Warszawie (Al. Jerozolimskie 123a, Ochota). Indywidualne menu, spokojna obsługa, sala dla bliskiego grona. Zapytaj o termin w Restauracji KŁOSY.",
};

const HREF = "/wesela-rocznice";

// Podzbiór FAQ pasujący tematycznie do wesel i rocznic.
const pageFaq = faqItems.filter((f) =>
  ["wesele", "rocznic", "menu można dostosować", "dostępny termin", "znajduje"].some((k) =>
    f.q.toLowerCase().includes(k)
  )
);

export default function WeselaRocznicePage() {
  return (
    <>
      {/* Nagłówek strony */}
      <section className="bg-forest text-cream">
        <div className="container-x py-16 sm:py-20">
          <nav aria-label="Ścieżka okruszków" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-cream">
              Strona główna
            </Link>{" "}
            / <span className="text-cream/90">Wesela i rocznice</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl">
            Kameralne wesela i rocznice w Warszawie
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/85">
            Restauracja KŁOSY przy Al. Jerozolimskich 123a (Ochota, budynek Atlas Tower)
            organizuje kameralne wesela oraz przyjęcia rocznicowe i jubileuszowe. Stawiamy
            na bliskie grono, domową kuchnię i spokojną obsługę — bez gwaru sal na setki
            osób. Restauracja działa przy {restaurant.foundation.name}, a zysk wspiera cele
            statutowe Fundacji.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakt#formularz"
              className="rounded-full bg-wheat px-7 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Zapytaj o termin
            </Link>
            <a
              href={`tel:+48${restaurant.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3 font-medium text-cream transition-colors hover:bg-cream/10"
            >
              <Phone size={18} /> {restaurant.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Dlaczego kameralnie */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl">Wesele kameralne — dla bliskiego grona</h2>
            <p className="mt-4 text-ink/75">
              Nie każde wesele musi być wielkim przyjęciem. Coraz więcej par wybiera
              kameralną formę: najbliższa rodzina i przyjaciele, jedna sala, spokojny przebieg
              dnia i menu, które naprawdę smakuje. Taki format pasuje do KŁOSÓW — gotujemy na
              miejscu, znamy każdy stół z imienia i nie rozpraszamy się na kilka imprez naraz.
            </p>
            <p className="mt-4 text-ink/75">
              Kameralne wesele sprawdza się przy ślubie cywilnym w okolicy, przyjęciu po
              ceremonii w wąskim gronie albo „drugim dniu" w rodzinnej atmosferze. Zamiast
              sztywnego scenariusza ustalamy z Wami przebieg: powitanie, obiad, toast,
              deser i tyle przestrzeni, ile potrzebujecie na rozmowy.
            </p>
            <p className="mt-4 text-ink/75">
              Liczbę gości, układ sali i godziny przyjęcia ustalamy indywidualnie po Waszym
              zapytaniu. Maksymalną liczbę miejsc potwierdzamy w kontakcie —{" "}
              {restaurant.capacity}.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              {
                icon: Heart,
                t: "Kameralność",
                d: "Jedno przyjęcie w danym terminie, pełna uwaga obsługi dla Waszych gości.",
              },
              {
                icon: Utensils,
                t: "Domowa kuchnia",
                d: "Dania gotowane na miejscu, dopasowane do menu weselnego i preferencji gości.",
              },
              {
                icon: Users,
                t: "Bliskie grono",
                d: "Format dla rodziny i przyjaciół, bez hucznej sali na setki osób.",
              },
              {
                icon: CalendarCheck,
                t: "Spokojny przebieg",
                d: "Ustalamy harmonogram dnia razem z Wami — bez pośpiechu i chaosu.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4 rounded-card border border-linen bg-cream p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wheat/30 text-olive">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-serif text-lg text-forest">{t}</p>
                  <p className="mt-1 text-sm text-ink/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rocznice i jubileusze */}
      <section className="section-y bg-linen/40">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div
            role="img"
            aria-label="Zdjęcie nakrytego stołu na przyjęcie rocznicowe w Restauracji KŁOSY — placeholder do uzupełnienia"
            className="flex min-h-[260px] items-center justify-center rounded-card border border-linen bg-gradient-to-br from-cream to-linen text-sm text-ink/40"
          >
            [DO UZUPEŁNIENIA: zdjęcie sali / stołu rocznicowego]
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Rocznice i jubileusze</h2>
            <p className="mt-4 text-ink/75">
              Okrągła rocznica ślubu, jubileusz pary, urodziny seniora rodziny czy spotkanie
              po latach — rocznice rządzą się tym, że najważniejsi są ludzie przy stole.
              Dlatego organizujemy je tak, by nikt nie musiał biegać między stoiskami:
              siadacie, a my zajmujemy się resztą.
            </p>
            <h3 className="mt-6 font-serif text-xl text-forest">Jakie rocznice organizujemy</h3>
            <ul className="mt-3 grid gap-2 text-ink/75">
              {[
                "rocznice ślubu i jubileusze par",
                "okrągłe urodziny i imieniny",
                "spotkania rodzinne po latach",
                "jubileusze i spotkania firmowe w kameralnym gronie",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <Cake size={18} className="mt-1 shrink-0 text-olive" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-ink/75">
              Każde przyjęcie wyceniamy i układamy indywidualnie po zapytaniu. Gotowe pakiety
              weselne oraz przykładowe menu rocznicowe: {TODO} — przygotujemy je w odpowiedzi na
              Wasze zapytanie, wraz z propozycją menu i terminu.
            </p>
          </div>
        </div>
      </section>

      {/* Menu i personalizacja */}
      <section className="section-y bg-white">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl">Indywidualne menu na wesele i rocznicę</h2>
          <p className="mt-4 text-ink/75">
            Nie podajemy jednego, sztywnego zestawu. Menu układamy pod charakter przyjęcia,
            porę dnia i preferencje gości. Wystarczy, że w zapytaniu napiszecie, ile osób
            planujecie i czego oczekujecie — resztę dopracujemy wspólnie.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                t: "Dopasowanie do gości",
                d: "Uwzględniamy dania wegetariańskie oraz informacje o alergiach podane w zapytaniu.",
              },
              {
                t: "Forma przyjęcia",
                d: "Obiad zasiadany, dania serwowane lub forma bufetowa — ustalamy razem z Wami.",
              },
              {
                t: "Toast i deser",
                d: "Tort, deser i oprawa słodkiego stołu po stronie restauracji lub w wybranej formie. Szczegóły: " + TODO + ".",
              },
              {
                t: "Napoje",
                d: "Zakres napojów i ewentualny serwis ustalamy indywidualnie. Szczegóły i ceny: " + TODO + ".",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-card border border-linen bg-cream p-5">
                <p className="font-serif text-lg text-forest">{x.t}</p>
                <p className="mt-1 text-sm text-ink/70">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Aktualne menu i przykładowe propozycje: {restaurant.menuPdf}. Ceny pakietów i menu
            potwierdzamy w odpowiedzi na zapytanie.
          </p>
        </div>
      </section>

      {/* Jak organizujemy */}
      <section className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">Jak organizujemy przyjęcie krok po kroku</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["1", "Zapytanie", "Wysyłasz formularz lub dzwonisz — podajesz datę i liczbę gości."],
              ["2", "Termin", "Potwierdzamy dostępność wybranej daty."],
              ["3", "Menu", "Dobieramy menu pod wesele lub rocznicę i preferencje gości."],
              ["4", "Ustalenia", "Doprecyzowujemy salę, harmonogram dnia i szczegóły obsługi."],
              ["5", "Wydarzenie", "Obsługujemy przyjęcie w dniu uroczystości."],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-card bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wheat font-serif text-forest">
                  {n}
                </span>
                <p className="mt-3 font-medium text-forest">{t}</p>
                <p className="mt-1 text-sm text-ink/70">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">
            Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje
            propozycję menu oraz wyceny.
          </p>
        </div>
      </section>

      {/* Lokalizacja / NAP */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">Gdzie się odbywa</h2>
            <p className="mt-4 text-ink/75">
              Restauracja KŁOSY mieści się przy {restaurant.address.street},{" "}
              {restaurant.address.postalCode} {restaurant.address.city} (dzielnica{" "}
              {restaurant.address.district}), w budynku {restaurant.address.building}{" "}
              <span className="text-ink/50">(do potwierdzenia)</span>. Dokładny dojazd,
              parking i dostępność piętra potwierdzamy w kontakcie.
            </p>
            <ul className="mt-5 space-y-2 text-ink/80">
              <li>
                <a
                  href={`tel:+48${restaurant.contact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-olive"
                >
                  <Phone size={18} className="text-olive" /> {restaurant.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-olive"
                >
                  <Mail size={18} className="text-olive" /> {restaurant.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div
            role="img"
            aria-label="Mapa z lokalizacją Restauracji KŁOSY przy Al. Jerozolimskich 123a w Warszawie — placeholder do uzupełnienia"
            className="flex min-h-[220px] items-center justify-center rounded-card border border-linen bg-gradient-to-br from-cream to-linen text-sm text-ink/40"
          >
            [DO UZUPEŁNIENIA: mapa / zdjęcie wejścia]
          </div>
        </div>
      </section>

      {/* FAQ — podzbiór tematyczny */}
      <section id="faq" className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">Najczęstsze pytania o wesela i rocznice</h2>
          <div className="mt-8 divide-y divide-linen rounded-card border border-linen bg-white">
            {pageFaq.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-forest">
                  {item.q}
                  <span className="shrink-0 text-olive transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Linki wewnętrzne */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">Zobacz też</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: "/komunie-chrzciny", t: "Komunie i chrzciny", d: "Kameralne przyjęcia rodzinne." },
              { href: "/imprezy-okolicznosciowe", t: "Imprezy okolicznościowe", d: "Urodziny, spotkania, jubileusze." },
              { href: "/catering", t: "Catering", d: "Firmowy i prywatny, także z dostawą." },
            ].map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className="rounded-card border border-linen bg-cream p-5 transition-colors hover:border-wheat"
              >
                <p className="font-serif text-lg text-forest">{x.t}</p>
                <p className="mt-1 text-sm text-ink/70">{x.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="bg-forest text-cream">
        <div className="container-x flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">Planujecie kameralne wesele lub rocznicę?</h2>
            <p className="mt-2 text-cream/80">
              Napiszcie, ile osób i jaki termin Was interesuje — odpowiemy z propozycją menu i wyceny.
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
            { name: "Wesela i rocznice", url: HREF },
          ]),
          serviceSchema(
            "Kameralne wesela i przyjęcia rocznicowe",
            "Organizacja kameralnych wesel oraz przyjęć rocznicowych i jubileuszowych w Restauracji KŁOSY w Warszawie (Al. Jerozolimskie 123a, Ochota). Indywidualne menu i obsługa dla bliskiego grona."
          ),
          faqSchema(pageFaq),
        ]}
      />
    </>
  );
}
