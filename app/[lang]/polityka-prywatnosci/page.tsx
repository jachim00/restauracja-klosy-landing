import type { Metadata } from "next";
import Link from "next/link";
import { restaurant, TODO } from "@/content/restaurant-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const HREF = "/polityka-prywatnosci";
const FORM_EMAIL = "marketing@restauracjadifferent.pl";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności Restauracji KŁOSY — zasady przetwarzania danych osobowych przesłanych przez formularz kontaktowy oraz informacje o plikach cookies.",
  alternates: { canonical: HREF },
};

export default function Page() {
  return (
    <main className="bg-cream text-ink">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", url: "/" },
          { name: "Polityka prywatności", url: HREF },
        ])}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <h1 className="font-serif text-4xl text-forest sm:text-5xl">Polityka prywatności</h1>
          <p className="mt-4 text-ink/70">
            Dbamy o Twoją prywatność. Poniżej wyjaśniamy, jakie dane zbieramy przez stronę
            Restauracji KŁOSY, w jakim celu i na jakiej podstawie, oraz jakie masz prawa.
          </p>

          <div className="mt-10 space-y-8 text-ink/85">
            <section>
              <h2 className="text-2xl text-forest">1. Administrator danych</h2>
              <p className="mt-3">
                Administratorem danych osobowych jest podmiot prowadzący Restaurację KŁOSY,
                z siedzibą przy {restaurant.address.street}, {restaurant.address.postalCode}{" "}
                {restaurant.address.city}.{" "}
                <span className="text-ink/60">
                  [DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres
                  korespondencyjny — do potwierdzenia przez właściciela.]
                </span>
              </p>
              <p className="mt-2">
                Restauracja działa przy {restaurant.foundation.name} (KRS {restaurant.foundation.krs}).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">2. Jakie dane zbieramy</h2>
              <p className="mt-3">
                Dane zbieramy wyłącznie wtedy, gdy dobrowolnie prześlesz je przez formularz
                zapytania (lub mini-konfigurator przyjęcia). Są to: imię i nazwisko, numer
                telefonu, adres e-mail oraz informacje o planowanym wydarzeniu, które sam(a)
                podasz (typ wydarzenia, data, liczba gości, miejsce, preferencje menu, alergie,
                treść wiadomości).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">3. Cel i podstawa prawna</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Obsługa Twojego zapytania, kontakt zwrotny i przygotowanie propozycji
                  (terminu, menu, wyceny) — podstawa: art. 6 ust. 1 lit. b oraz lit. f RODO
                  (działania na żądanie osoby oraz prawnie uzasadniony interes administratora).
                </li>
                <li>
                  Udzielona zgoda na kontakt — art. 6 ust. 1 lit. a RODO (możesz ją wycofać
                  w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-forest">4. Odbiorcy danych</h2>
              <p className="mt-3">
                Zapytania z formularza trafiają na adres <strong>{FORM_EMAIL}</strong>. Dane
                mogą być przetwarzane przez zaufanych dostawców usług IT wspierających obsługę
                formularza i poczty (np. dostawca usługi wysyłki formularza, hosting poczty),
                wyłącznie w zakresie niezbędnym do realizacji powyższych celów.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">5. Okres przechowywania</h2>
              <p className="mt-3">
                Dane przechowujemy przez czas niezbędny do obsługi zapytania i ewentualnej
                realizacji usługi, a następnie przez okres wynikający z przepisów prawa lub
                do czasu wycofania zgody / wniesienia skutecznego sprzeciwu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">6. Twoje prawa</h2>
              <p className="mt-3">
                Masz prawo do: dostępu do danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wycofania zgody.
                Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                Osobowych (UODO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">7. Pliki cookies</h2>
              <p className="mt-3">
                Strona używa niezbędnych plików cookies oraz — po wyrażeniu zgody w bannerze —
                cookies analitycznych/marketingowych. Zgodę możesz zmienić lub wycofać,
                czyszcząc dane strony w przeglądarce. Statystyki zbieramy w sposób zgodny
                z Twoim wyborem (Consent Mode).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-forest">8. Kontakt w sprawie danych</h2>
              <p className="mt-3">
                W sprawach dotyczących danych osobowych napisz na{" "}
                <a href={`mailto:${FORM_EMAIL}`} className="font-medium text-brown underline decoration-wheat underline-offset-4">
                  {FORM_EMAIL}
                </a>{" "}
                lub na ogólny adres{" "}
                <a href={`mailto:${restaurant.contact.email}`} className="font-medium text-brown underline decoration-wheat underline-offset-4">
                  {restaurant.contact.email}
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-linen pt-6">
            <Link href="/" className="text-sm text-olive underline underline-offset-4 hover:text-forest">
              ← Powrót na stronę główną
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
