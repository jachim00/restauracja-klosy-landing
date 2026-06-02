/**
 * Słownik PL — formularz zapytania eventowego (LeadForm).
 * Zawiera etykiety pól, placeholdery, opcje selectów (typy wydarzeń / zakresy
 * gości / miejsce), komunikaty walidacji (Zod), komunikaty sukcesu/błędu,
 * zgody (RODO) oraz etykietę przycisku wysyłki.
 *
 * KANONICZNE źródło — tłumaczenia muszą mieć identyczny kształt (typ Dictionary
 * jest z tego wyprowadzany).
 *
 * UWAGA — opcje selectów (eventTypeOptions / guestRangeOptions / placeOptions):
 * KLUCZE `value` MUSZĄ pozostać zgodne z identyfikatorami/wartościami z
 * content/event-types.ts (id typów wydarzeń, guestRanges, eventPlaces), bo to
 * one trafiają do walidacji Zod i do payloadu. Tłumaczeniu podlega wyłącznie
 * `label`. Te same `value` są też nazwami query params handoffu z konfiguratora
 * (typ / goscie / miejsce / data) — NIE zmieniać.
 */
export const forms = {
  lead: {
    ariaLabel: "Formularz zapytania o wydarzenie",
    honeypotLabel: "Nie wypełniaj tego pola",
    requiredMark: "*",
    optionalSuffix: "(opcjonalnie)",
    selectPlaceholder: "Wybierz…",
    requiredHint: "są wymagane.",
    requiredHintPrefix: "Pola oznaczone",

    fields: {
      imieNazwisko: {
        label: "Imię i nazwisko",
      },
      telefon: {
        label: "Telefon",
      },
      email: {
        label: "E-mail",
      },
      typWydarzenia: {
        label: "Typ wydarzenia",
      },
      data: {
        label: "Preferowana data",
      },
      liczbaGosci: {
        label: "Liczba gości",
      },
      miejsce: {
        label: "Miejsce",
      },
      budzet: {
        label: "Orientacyjny budżet",
        placeholder: "np. do 5000 zł / na osobę",
      },
      preferencjeMenu: {
        label: "Preferencje menu",
        placeholder: "np. menu dla dzieci, dania wegetariańskie",
      },
      alergie: {
        label: "Alergie / wymagania dietetyczne",
        placeholder: "np. bezglutenowe, bez orzechów",
      },
      wiadomosc: {
        label: "Dodatkowe informacje",
        placeholder: "Opowiedz nam o swoim wydarzeniu — czego potrzebujesz?",
      },
    },

    // Opcje typu wydarzenia. `value` = id z content/event-types.ts (+ "inne").
    eventTypeOptions: [
      { value: "komunia", label: "Komunia" },
      { value: "chrzest", label: "Chrzest" },
      { value: "wesele-kameralne", label: "Wesele kameralne" },
      { value: "rocznica", label: "Rocznica" },
      { value: "urodziny", label: "Urodziny" },
      { value: "spotkanie-rodzinne", label: "Spotkanie rodzinne" },
      { value: "spotkanie-firmowe", label: "Spotkanie firmowe" },
      { value: "catering", label: "Catering" },
      { value: "obiad-grupa", label: "Obiad dla grupy" },
      { value: "inne", label: "Inne" },
    ],

    // Zakresy gości. `value` = wartość z guestRanges (content/event-types.ts).
    guestRangeOptions: [
      { value: "10–20", label: "10–20" },
      { value: "21–35", label: "21–35" },
      { value: "36–50", label: "36–50" },
      { value: "50+", label: "50+" },
      {
        value: "catering — większa liczba osób",
        label: "catering — większa liczba osób",
      },
    ],

    // Miejsce. `value` = wartość z eventPlaces (content/event-types.ts).
    placeOptions: [
      { value: "W lokalu", label: "W lokalu" },
      { value: "Catering z dostawą", label: "Catering z dostawą" },
      { value: "Do ustalenia", label: "Do ustalenia" },
    ],

    consents: {
      heading: "",
      kontakt: {
        text: "Wyrażam zgodę na kontakt telefoniczny lub e-mailowy w celu omówienia mojego zapytania.",
      },
      rodo: {
        before: "Zapoznałem(-am) się z",
        linkText: "polityką prywatności",
        after: "i akceptuję przetwarzanie moich danych w celu obsługi zapytania.",
      },
    },

    submit: {
      idle: "Wyślij zapytanie",
      loading: "Wysyłanie…",
    },

    // Komunikaty walidacji (Zod) — patrz makeLeadSchema(dict).
    validation: {
      imieNazwiskoRequired: "Podaj imię i nazwisko.",
      imieNazwiskoMin: "Podaj imię i nazwisko (min. 2 znaki).",
      telefonRequired: "Podaj numer telefonu.",
      telefonMin: "Podaj numer telefonu (min. 9 cyfr).",
      telefonInvalid: "Podaj poprawny polski numer telefonu.",
      emailRequired: "Podaj adres e-mail.",
      emailInvalid: "Podaj poprawny adres e-mail.",
      typWydarzeniaRequired: "Wybierz typ wydarzenia.",
      liczbaGosciRequired: "Wybierz przybliżoną liczbę gości.",
      miejsceRequired: "Wybierz miejsce wydarzenia.",
      zgodaKontaktRequired: "Zgoda na kontakt jest wymagana.",
      zgodaRodoRequired: "Zgoda na przetwarzanie danych jest wymagana.",
    },

    success: {
      heading: "Dziękujemy za zapytanie!",
      bodyBefore:
        "Odezwiemy się tak szybko, jak to możliwe, aby omówić szczegóły Państwa wydarzenia. Jeśli sprawa jest pilna, prosimy o telefon:",
      again: "Wyślij kolejne zapytanie",
    },

    errors: {
      noEndpoint:
        "Formularz nie jest jeszcze podłączony do odbioru zgłoszeń. Prosimy o kontakt telefoniczny lub e-mailowy. (Konfiguracja: NEXT_PUBLIC_WEB3FORMS_KEY lub NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
      http: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie lub zadzwoń do nas.",
      network: "Wystąpił błąd połączenia. Sprawdź internet i spróbuj ponownie.",
    },

    // Temat / nazwa nadawcy wiadomości (Web3Forms). {typ} / {imie} podstawiane.
    mail: {
      subjectPrefix: "Zapytanie ze strony KŁOSY —",
      fromNamePrefix: "Restauracja KŁOSY — formularz",
    },
  },
};
