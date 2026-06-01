import type { Metadata } from "next";
import Link from "next/link";
import { Phone, FileDown, Soup, Salad, UtensilsCrossed, Cake, Truck, Users } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { restaurant } from "@/content/restaurant-data";
import { menuCategories, menuPlaceholder } from "@/content/menu";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "Menu dnia Warszawa | Restauracja KŁOSY",
  description:
    "Menu dnia i obiady domowe w centrum Warszawy (Al. Jerozolimskie 123a, Ochota). Polska kuchnia, obiady dla grup, catering i dostawa. Restauracja KŁOSY przy Fundacji „Człowiek w Potrzebie”.",
  alternates: { canonical: "/menu-dnia" },
};

// FAQ tematyczny — podzbiór pasujący do menu dnia / obiadów / dostawy / grup.
const faqForMenu = faqItems.filter((f) =>
  /obiad|grup|dostaw|catering|menu/i.test(`${f.q} ${f.a}`)
);

const categoryIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "menu-dnia": UtensilsCrossed,
  zupy: Soup,
  "dania-glowne": UtensilsCrossed,
  wegetarianskie: Salad,
  desery: Cake,
  catering: Truck,
};

const isPlaceholder = (s: string) => s.includes("[DO");

export default function MenuDniaPage() {
  const href = "/menu-dnia";
  const pyszneReady = !isPlaceholder(restaurant.delivery.pyszne);
  const glovoReady = !isPlaceholder(restaurant.delivery.glovo);
  const pdfReady = !isPlaceholder(restaurant.menuPdf);

  return (
    <>
      {/* HERO */}
      <section className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <nav aria-label="Okruszki" className="text-sm text-ink/60">
            <Link href="/" className="hover:text-olive">
              Strona główna
            </Link>{" "}
            <span aria-hidden>/</span> <span className="text-ink/80">Menu dnia</span>
          </nav>

          <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">
            Menu dnia i kuchnia polska w centrum Warszawy
          </h1>
          <p className="mt-5 text-lg text-ink/75">
            W Restauracji KŁOSY gotujemy codzienne obiady domowe — zupy, dania główne i
            propozycje wegetariańskie — przy Al. Jerozolimskich 123a w Warszawie (dzielnica
            Ochota, budynek Atlas Tower). To miejsce na zwykły obiad w pracy, lunch ze
            znajomymi i większe zamówienia dla grup. Restauracja działa przy{" "}
            {restaurant.foundation.name}, a zysk wspiera jej cele statutowe.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/kontakt#formularz"
              className="rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Zapytaj o obiady dla grupy
            </Link>
            <a
              href={`tel:+48${restaurant.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-olive px-6 py-3 font-medium text-forest transition-colors hover:bg-olive/10"
            >
              <Phone size={18} className="text-olive" /> {restaurant.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* O MENU DNIA */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div>
            <h2 className="text-3xl text-forest sm:text-4xl">Czym jest u nas menu dnia?</h2>
            <p className="mt-4 text-ink/75">
              Menu dnia to zestaw obiadowy przygotowywany świeżo na bieżąco — domowa kuchnia
              bez udziwnień: rozgrzewająca zupa, sycące danie główne i opcja wegetariańska.
              Stawiamy na proste, dobre jedzenie, jakie zna się z domu, podane spokojnie i
              bez pośpiechu. Dokładny skład zestawu zmienia się każdego dnia.
            </p>
            <p className="mt-4 text-ink/75">
              Aktualną kartę i bieżące menu dnia potwierdzamy telefonicznie lub w lokalu —
              ceny oraz konkretne pozycje podajemy w kontakcie, żeby informacja była zawsze
              zgodna z tym, co realnie gotujemy danego dnia.
            </p>

            <div className="mt-6 rounded-card border border-linen bg-cream p-5">
              <p className="font-serif text-lg text-forest">Dla kogo?</p>
              <ul className="mt-3 grid gap-2 text-sm text-ink/75 sm:grid-cols-2">
                <li>Obiad w przerwie w pracy (okolice Atlas Tower)</li>
                <li>Lunch ze znajomymi lub rodziną</li>
                <li>Codzienny ciepły posiłek na miejscu</li>
                <li>Większe zamówienia obiadowe dla grup</li>
              </ul>
            </div>
          </div>

          {/* Placeholder zdjęcia */}
          <div
            role="img"
            aria-label="Zdjęcie talerza z obiadem domowym z menu dnia Restauracji KŁOSY"
            className="flex min-h-[280px] items-center justify-center rounded-card border border-dashed border-linen bg-linen/40 text-center text-sm text-ink/45"
          >
            [DO UZUPEŁNIENIA: zdjęcie obiadu / menu dnia]
          </div>
        </div>
      </section>

      {/* KATEGORIE MENU */}
      <section id="menu" className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl text-forest sm:text-4xl">Co znajdziesz w karcie</h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Poniżej kategorie naszej karty. Konkretne pozycje i ceny uzupełniamy na podstawie
            aktualnego menu restauracji — do tego czasu podajemy je telefonicznie lub w lokalu.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuCategories.map((cat) => {
              const Icon = categoryIcon[cat.id] ?? UtensilsCrossed;
              return (
                <article
                  key={cat.id}
                  className="rounded-card bg-white p-6 shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wheat/20">
                    <Icon size={20} className="text-olive" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-forest">{cat.name}</h3>
                  <p className="mt-2 text-sm text-ink/55">{cat.note}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-ink/55">{menuPlaceholder}</p>

          {/* Pobierz menu PDF */}
          <div className="mt-8">
            {pdfReady ? (
              <a
                href={restaurant.menuPdf}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-medium text-cream transition-transform hover:scale-[1.03]"
              >
                <FileDown size={18} /> Pobierz menu (PDF)
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-olive/50 px-6 py-3 text-sm text-ink/50">
                <FileDown size={18} className="text-olive/60" /> [DO UZUPEŁNIENIA: link do menu
                PDF]
              </span>
            )}
          </div>
        </div>
      </section>

      {/* OBIADY DLA GRUP */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div
            role="img"
            aria-label="Stół z obiadami przygotowanymi dla grupy w Restauracji KŁOSY"
            className="order-2 flex min-h-[260px] items-center justify-center rounded-card border border-dashed border-linen bg-linen/40 text-center text-sm text-ink/45 md:order-1"
          >
            [DO UZUPEŁNIENIA: zdjęcie obiadu dla grupy]
          </div>

          <div className="order-1 md:order-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wheat/20">
              <Users size={20} className="text-olive" />
            </span>
            <h2 className="mt-4 text-3xl text-forest sm:text-4xl">Obiady dla grup</h2>
            <p className="mt-4 text-ink/75">
              Przygotowujemy obiady dla grup — również grup szkolnych, zespołów firmowych i
              spotkań rodzinnych. Menu dobieramy pod liczbę osób i preferencje, uwzględniamy
              dania wegetariańskie oraz informacje o alergiach podane wcześniej w zapytaniu.
            </p>
            <p className="mt-4 text-ink/75">
              Liczbę porcji, formę wydania (na miejscu lub z dostawą) i termin ustalamy
              indywidualnie. Wystarczy napisać, ilu jest gości i na kiedy potrzebny jest obiad —
              odeślemy propozycję menu i potwierdzimy dostępność.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-ink/75">
              <li>• Menu dopasowane do grupy (w tym opcje wegetariańskie)</li>
              <li>• Obiady dla grup szkolnych i zespołów firmowych</li>
              <li>• Wydanie na miejscu lub z dostawą na terenie Warszawy</li>
            </ul>
            <Link
              href="/kontakt#formularz"
              className="mt-6 inline-flex rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Zapytaj o obiady dla grupy
            </Link>
          </div>
        </div>
      </section>

      {/* DOSTAWA */}
      <section className="section-y bg-cream">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl text-forest sm:text-4xl">Obiad z dostawą w Warszawie</h2>
          <p className="mt-4 text-ink/75">
            Obiad z menu dnia możesz zamówić z dostawą — przez popularne platformy dowozowe.
            Dostępność dań, godziny i obszar dowozu potwierdzamy bezpośrednio; poniżej linki do
            zamówienia online.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* Pyszne.pl */}
            {pyszneReady ? (
              <a
                href={restaurant.delivery.pyszne}
                className="flex items-center justify-between rounded-card border border-linen bg-white px-5 py-4 font-medium text-forest transition-colors hover:border-olive"
              >
                Zamów na Pyszne.pl
                <Truck size={18} className="text-olive" />
              </a>
            ) : (
              <div className="flex items-center justify-between rounded-card border border-dashed border-linen bg-white px-5 py-4 text-sm text-ink/50">
                Pyszne.pl — [DO UZUPEŁNIENIA: link]
                <Truck size={18} className="text-olive/50" />
              </div>
            )}

            {/* Glovo */}
            {glovoReady ? (
              <a
                href={restaurant.delivery.glovo}
                className="flex items-center justify-between rounded-card border border-linen bg-white px-5 py-4 font-medium text-forest transition-colors hover:border-olive"
              >
                Zamów na Glovo
                <Truck size={18} className="text-olive" />
              </a>
            ) : (
              <div className="flex items-center justify-between rounded-card border border-dashed border-linen bg-white px-5 py-4 text-sm text-ink/50">
                Glovo — [DO UZUPEŁNIENIA: link]
                <Truck size={18} className="text-olive/50" />
              </div>
            )}
          </div>

          <p className="mt-5 text-sm text-ink/60">
            Wolisz większe, indywidualne zamówienie? Sprawdź{" "}
            <Link href="/catering" className="text-olive underline-offset-2 hover:underline">
              ofertę cateringową
            </Link>{" "}
            — catering firmowy i prywatny przygotowujemy na podstawie zapytania.
          </p>
        </div>
      </section>

      {/* FAQ */}
      {faqForMenu.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl text-forest sm:text-4xl">Najczęstsze pytania o obiady</h2>
            <dl className="mt-8 divide-y divide-linen rounded-card border border-linen">
              {faqForMenu.map((item) => (
                <div key={item.q} className="px-5 py-4">
                  <dt className="font-medium text-forest">{item.q}</dt>
                  <dd className="mt-2 text-ink/75">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* PRZEJDŹ DALEJ */}
      <section className="section-y bg-linen/40">
        <div className="container-x">
          <h2 className="text-3xl text-forest sm:text-4xl">Zobacz też</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: "/catering", label: "Catering", desc: "Firmowy i prywatny, w lokalu lub z dostawą." },
              { href: "/imprezy-okolicznosciowe", label: "Imprezy okolicznościowe", desc: "Kameralne przyjęcia i spotkania." },
              { href: "/kontakt", label: "Kontakt", desc: "Zapytaj o termin, menu i obiady dla grup." },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-card bg-white p-5 shadow-soft transition-transform hover:scale-[1.02]"
              >
                <p className="font-serif text-xl text-forest">{c.label}</p>
                <p className="mt-1 text-sm text-ink/70">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="bg-forest text-cream">
        <div className="container-x flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl text-cream">Zamów obiady lub zapytaj o menu dnia</h2>
            <p className="mt-2 text-cream/80">
              Napisz, ilu jest gości i na kiedy — przygotujemy propozycję i potwierdzimy termin.
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
            { name: "Menu dnia", url: href },
          ]),
          serviceSchema(
            "Menu dnia i obiady domowe — Warszawa",
            "Codzienne obiady domowe (menu dnia), kuchnia polska, obiady dla grup oraz dostawa w Warszawie. Restauracja KŁOSY, Al. Jerozolimskie 123a."
          ),
          faqSchema(faqForMenu),
        ]}
      />
    </>
  );
}
