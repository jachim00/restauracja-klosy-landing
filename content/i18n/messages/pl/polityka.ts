/**
 * Słownik PL — podstrona Polityka prywatności.
 * Intro, sekcje (nagłówek + akapity), blok kontaktowy oraz link powrotny.
 *
 * KANONICZNE źródło — tłumaczenia muszą mieć identyczny kształt.
 * Nazwy własne (KŁOSY, adres, nazwa Fundacji/KRS, adresy e-mail) oraz
 * placeholdery [DO UZUPEŁNIENIA] NIE są tłumaczone — pochodzą z
 * content/restaurant-data.ts albo czekają na uzupełnienie przez właściciela.
 *
 * Uwaga: ta polityka zawiera sporo placeholderów i fragmentów z danymi
 * dynamicznymi (adres, KRS, adresy e-mail) wstrzykiwanymi w stronie —
 * dlatego część sekcji rozbita jest na pola tekstowe (np. lead/suffix),
 * a nie na pojedyncze akapity.
 */
export const polityka = {
  breadcrumb: {
    home: "Strona główna",
    current: "Polityka prywatności",
  },

  formEmail: "marketing@restauracjadifferent.pl",

  heading: "Polityka prywatności",
  intro:
    "Dbamy o Twoją prywatność. Poniżej wyjaśniamy, jakie dane zbieramy przez stronę Restauracji KŁOSY, w jakim celu i na jakiej podstawie, oraz jakie masz prawa.",

  // Sekcja 1 — Administrator danych (z danymi dynamicznymi adresu / Fundacji).
  administrator: {
    heading: "1. Administrator danych",
    leadBefore:
      "Administratorem danych osobowych jest podmiot prowadzący Restaurację KŁOSY, z siedzibą przy ",
    todo:
      "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
    foundationBefore: "Restauracja działa przy ",
    foundationKrs: "KRS",
  },

  // Sekcje z prostą strukturą nagłówek + akapity (bez danych dynamicznych).
  sections: [
    {
      heading: "2. Jakie dane zbieramy",
      paragraphs: [
        "Dane zbieramy wyłącznie wtedy, gdy dobrowolnie prześlesz je przez formularz zapytania (lub mini-konfigurator przyjęcia). Są to: imię i nazwisko, numer telefonu, adres e-mail oraz informacje o planowanym wydarzeniu, które sam(a) podasz (typ wydarzenia, data, liczba gości, miejsce, preferencje menu, alergie, treść wiadomości).",
      ],
    },
  ],

  // Sekcja 3 — Cel i podstawa prawna (lista).
  purpose: {
    heading: "3. Cel i podstawa prawna",
    items: [
      "Obsługa Twojego zapytania, kontakt zwrotny i przygotowanie propozycji (terminu, menu, wyceny) — podstawa: art. 6 ust. 1 lit. b oraz lit. f RODO (działania na żądanie osoby oraz prawnie uzasadniony interes administratora).",
      "Udzielona zgoda na kontakt — art. 6 ust. 1 lit. a RODO (możesz ją wycofać w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania).",
    ],
  },

  // Sekcja 4 — Odbiorcy danych (z adresem e-mail formularza).
  recipients: {
    heading: "4. Odbiorcy danych",
    before: "Zapytania z formularza trafiają na adres ",
    after:
      ". Dane mogą być przetwarzane przez zaufanych dostawców usług IT wspierających obsługę formularza i poczty (np. dostawca usługi wysyłki formularza, hosting poczty), wyłącznie w zakresie niezbędnym do realizacji powyższych celów.",
  },

  // Sekcje 5–7 — prosta struktura nagłówek + akapity.
  policies: [
    {
      heading: "5. Okres przechowywania",
      paragraphs: [
        "Dane przechowujemy przez czas niezbędny do obsługi zapytania i ewentualnej realizacji usługi, a następnie przez okres wynikający z przepisów prawa lub do czasu wycofania zgody / wniesienia skutecznego sprzeciwu.",
      ],
    },
    {
      heading: "6. Twoje prawa",
      paragraphs: [
        "Masz prawo do: dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wycofania zgody. Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).",
      ],
    },
    {
      heading: "7. Pliki cookies",
      paragraphs: [
        "Strona używa niezbędnych plików cookies oraz — po wyrażeniu zgody w bannerze — cookies analitycznych/marketingowych. Zgodę możesz zmienić lub wycofać, czyszcząc dane strony w przeglądarce. Statystyki zbieramy w sposób zgodny z Twoim wyborem (Consent Mode).",
      ],
    },
  ],

  // Sekcja 8 — Kontakt w sprawie danych (z dwoma adresami e-mail).
  contact: {
    heading: "8. Kontakt w sprawie danych",
    before: "W sprawach dotyczących danych osobowych napisz na ",
    between: " lub na ogólny adres ",
    after: ".",
  },

  back: "← Powrót na stronę główną",
};
