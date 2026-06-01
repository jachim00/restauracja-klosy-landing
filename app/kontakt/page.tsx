import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Navigation,
  Utensils,
} from "lucide-react";
import { restaurant, TODO } from "@/content/restaurant-data";
import { faqItems } from "@/content/faq";
import { eventTypes, guestRanges, eventPlaces } from "@/content/event-types";
import type { LeadFormValues } from "@/components/forms/lead-schema";
import LeadForm from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const HREF = "/kontakt";

export const metadata: Metadata = {
  title: "Kontakt | Restauracja KŁOSY, Al. Jerozolimskie 123A",
  description:
    "Skontaktuj się z Restauracją KŁOSY w Warszawie (Al. Jerozolimskie 123a, Ochota). Telefon, e-mail, dojazd oraz formularz zapytania o przyjęcie, catering lub obiad dla grupy. Restaurację prowadzi Fundacja „Człowiek w Potrzebie”.",
  alternates: { canonical: HREF },
};

const phoneHref = `tel:+48${restaurant.contact.phone}`;
const mailHref = `mailto:${restaurant.contact.email}`;

// Podzbiór FAQ pasujący do tematu kontaktu / zapytań / dojazdu.
const faqSubset = faqItems.filter((f) =>
  ["dostępny termin", "Gdzie znajduje", "menu można dostosować", "catering z dostawą"].some(
    (kw) => (f.q + f.a).toLowerCase().includes(kw.toLowerCase()),
  ),
);

// Dozwolone wartości enumów z content/event-types.ts — używane do walidacji
// parametrów URL (np. z mini-konfiguratora) zanim trafią do formularza.
const eventTypeIds = new Set<string>([...eventTypes.map((e) => e.id), "inne"]);
const guestRangeSet = new Set<string>([...guestRanges]);
const eventPlaceSet = new Set<string>([...eventPlaces]);

/**
 * Buduje defaultValues dla LeadForm tylko z prawidłowych, istniejących wartości
 * w query string. Nieznane / brakujące parametry są pomijane (typowo czyste).
 */
function buildDefaults(sp: Record<string, string | undefined>): Partial<LeadFormValues> {
  const dv: Partial<LeadFormValues> = {};

  if (sp.typ && eventTypeIds.has(sp.typ)) {
    dv.typWydarzenia = sp.typ as LeadFormValues["typWydarzenia"];
  }
  if (sp.goscie && guestRangeSet.has(sp.goscie)) {
    dv.liczbaGosci = sp.goscie as LeadFormValues["liczbaGosci"];
  }
  if (sp.miejsce && eventPlaceSet.has(sp.miejsce)) {
    dv.miejsce = sp.miejsce as LeadFormValues["miejsce"];
  }
  if (sp.data && /^\d{4}-\d{2}-\d{2}$/.test(sp.data)) {
    dv.data = sp.data;
  }

  return dv;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const defaultValues = buildDefaults(sp);

  const buildingNote = restaurant.address.building.includes(TODO)
    ? null
    : `${restaurant.address.building} — do potwierdzenia`;

  const mapsReady = !restaurant.geo.mapsUrl.includes(TODO);

  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Strona główna", url: "/" },
            { name: "Kontakt", url: HREF },
          ]),
          faqSchema(faqSubset),
        ]}
      />

      {/* HERO */}
      <section className="section-y border-b border-linen">
        <div className="container-x max-w-3xl animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-wide text-olive">
            Restauracja KŁOSY w Warszawie
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-5 text-lg text-ink/75">
            Chcesz zapytać o termin przyjęcia, zamówić catering albo zorganizować obiad dla
            grupy? Zadzwoń, napisz e-mail lub wypełnij formularz — odpowiadamy konkretnie
            i bez zobowiązań. Mieścimy się przy Al. Jerozolimskich 123a na warszawskiej Ochocie,
            kilka minut od centrum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={phoneHref}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              Zadzwoń: {restaurant.contact.phoneDisplay}
            </a>
            <Link
              href="#formularz"
              className="rounded-card border border-olive/40 px-6 py-3 font-medium text-forest transition hover:bg-linen"
            >
              Przejdź do formularza
            </Link>
          </div>
        </div>
      </section>

      {/* DANE KONTAKTOWE + MAPA */}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* NAP */}
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">Dane kontaktowe</h2>
            <p className="mt-4 text-ink/80">
              Najszybciej skontaktujesz się z nami telefonicznie lub mailowo. Jeśli wolisz,
              opisz swoje wydarzenie w formularzu poniżej — oddzwonimy lub odpiszemy.
            </p>

            <ul className="mt-6 space-y-4 text-ink/80">
              <li className="flex gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">Adres</span>
                  {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                  {restaurant.address.city}
                  {buildingNote ? (
                    <span className="block text-sm text-ink/60">{buildingNote}</span>
                  ) : null}
                  <span className="block text-sm text-ink/60">
                    Dzielnica: {restaurant.address.district}
                  </span>
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">Telefon</span>
                  <a
                    href={phoneHref}
                    className="text-brown underline decoration-wheat underline-offset-4 hover:text-forest"
                  >
                    {restaurant.contact.phoneDisplay}
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">E-mail</span>
                  <a
                    href={mailHref}
                    className="break-all text-brown underline decoration-wheat underline-offset-4 hover:text-forest"
                  >
                    {restaurant.contact.email}
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-forest">Godziny</span>
                  <span className="text-ink/60">
                    [DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]
                  </span>
                </span>
              </li>
            </ul>

            {/* SOCIAL + DOSTAWA */}
            <div className="mt-8">
              <h3 className="font-serif text-xl text-forest">Znajdziesz nas też tutaj</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {!restaurant.social.facebook.includes(TODO) ? (
                  <a
                    href={restaurant.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Facebook size={18} className="text-olive" aria-hidden="true" />
                    Facebook
                  </a>
                ) : null}

                {!restaurant.social.instagram.includes(TODO) ? (
                  <a
                    href={restaurant.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Instagram size={18} className="text-olive" aria-hidden="true" />
                    Instagram
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Instagram size={18} aria-hidden="true" />
                    [DO UZUPEŁNIENIA: Instagram]
                  </span>
                )}

                {!restaurant.delivery.pyszne.includes(TODO) ? (
                  <a
                    href={restaurant.delivery.pyszne}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Utensils size={18} className="text-olive" aria-hidden="true" />
                    Pyszne.pl
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Utensils size={18} aria-hidden="true" />
                    [DO UZUPEŁNIENIA: link Pyszne.pl]
                  </span>
                )}

                {!restaurant.delivery.glovo.includes(TODO) ? (
                  <a
                    href={restaurant.delivery.glovo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                  >
                    <Utensils size={18} className="text-olive" aria-hidden="true" />
                    Glovo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-4 py-2.5 text-sm text-ink/50">
                    <Utensils size={18} aria-hidden="true" />
                    [DO UZUPEŁNIENIA: link Glovo]
                  </span>
                )}
              </div>
            </div>

            <p className="mt-8 text-sm text-ink/55">{restaurant.legalNote}</p>
          </div>

          {/* MAPA */}
          <div>
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">Dojazd</h2>
            <p className="mt-4 text-ink/80">
              Jesteśmy w dobrze skomunikowanym punkcie Warszawy, przy Al. Jerozolimskich.
              Dokładne wejście i piętro w budynku Atlas Tower potwierdzamy w kontakcie.
            </p>
            <div
              role="img"
              aria-label="Lokalizacja Restauracji KŁOSY przy Al. Jerozolimskich 123a w Warszawie"
              className="mt-6 flex min-h-64 items-center justify-center rounded-card border border-linen bg-linen/60 shadow-soft"
            >
              <span className="px-6 text-center text-sm text-ink/40">
                [DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]
              </span>
            </div>
            <div className="mt-4">
              {mapsReady ? (
                <a
                  href={restaurant.geo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-card border border-olive/40 px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-linen"
                >
                  <Navigation size={18} className="text-olive" aria-hidden="true" />
                  Wyznacz trasę w Google Maps
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-card border border-dashed border-olive/40 px-5 py-2.5 text-sm text-ink/50">
                  <Navigation size={18} aria-hidden="true" />
                  [DO UZUPEŁNIENIA: link Google Maps]
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARZ */}
      <section id="formularz" className="section-y scroll-mt-24 bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Zapytaj o termin, catering lub przyjęcie
          </h2>
          <p className="mt-4 text-ink/80">
            Opisz, co planujesz — typ wydarzenia, przybliżoną datę i liczbę gości. Im więcej
            szczegółów podasz, tym trafniejszą propozycję menu i terminu przygotujemy.
            Pola opcjonalne (budżet, preferencje menu, alergie) pomagają nam, ale nie są wymagane.
          </p>
          <div className="mt-8 rounded-card border border-linen bg-cream p-6 shadow-soft sm:p-8">
            <LeadForm formName="event_inquiry" defaultValues={defaultValues} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-3xl text-forest sm:text-4xl">
            Kontakt i zapytania — najczęstsze pytania
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
          <h2 className="font-serif text-3xl sm:text-4xl">Nie wiesz, od czego zacząć?</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Zadzwoń — opowiedz w kilku zdaniach, co planujesz, a my podpowiemy, co się sprawdzi
            i jakie informacje będą nam potrzebne, by przygotować propozycję.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={phoneHref}
              className="rounded-card bg-wheat px-6 py-3 font-medium text-forest shadow-soft transition hover:brightness-95"
            >
              Zadzwoń: {restaurant.contact.phoneDisplay}
            </a>
            <a
              href={mailHref}
              className="rounded-card border border-cream/40 px-6 py-3 font-medium text-cream transition hover:bg-cream/10"
            >
              Napisz e-mail
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>Zobacz też:</span>
            <Link href="/menu-dnia" className="underline hover:text-cream">
              Menu dnia
            </Link>
            <Link href="/komunie-chrzciny" className="underline hover:text-cream">
              Komunie i chrzciny
            </Link>
            <Link href="/wesela-rocznice" className="underline hover:text-cream">
              Wesela i rocznice
            </Link>
            <Link href="/imprezy-okolicznosciowe" className="underline hover:text-cream">
              Imprezy okolicznościowe
            </Link>
            <Link href="/catering" className="underline hover:text-cream">
              Catering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
