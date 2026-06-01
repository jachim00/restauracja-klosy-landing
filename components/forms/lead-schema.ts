import { z } from "zod";
import { eventTypes, guestRanges, eventPlaces } from "@/content/event-types";

/**
 * Schemat walidacji formularza zapytania eventowego (Zod).
 * Używany po stronie klienta (react-hook-form) i serwera (route handler).
 * Komunikaty błędów po polsku.
 */

// Identyfikatory typów wydarzeń z content/event-types.ts + opcja "inne".
const eventTypeIds = eventTypes.map((e) => e.id);
const eventTypeValues = [...eventTypeIds, "inne"] as unknown as [string, ...string[]];

const guestRangeValues = [...guestRanges] as unknown as [string, ...string[]];
const eventPlaceValues = [...eventPlaces] as unknown as [string, ...string[]];

// Polski numer telefonu: cyfry, spacje, myślniki, opcjonalny prefiks +48 / 0048.
const phoneRegex = /^(?:\+?48|0048)?[\s-]?(?:\d[\s-]?){9}$/;

export const leadSchema = z.object({
  imieNazwisko: z
    .string({ required_error: "Podaj imię i nazwisko." })
    .trim()
    .min(2, "Podaj imię i nazwisko (min. 2 znaki)."),
  telefon: z
    .string({ required_error: "Podaj numer telefonu." })
    .trim()
    .min(9, "Podaj numer telefonu (min. 9 cyfr).")
    .regex(phoneRegex, "Podaj poprawny polski numer telefonu."),
  email: z
    .string({ required_error: "Podaj adres e-mail." })
    .trim()
    .email("Podaj poprawny adres e-mail."),
  typWydarzenia: z.enum(eventTypeValues, {
    required_error: "Wybierz typ wydarzenia.",
    invalid_type_error: "Wybierz typ wydarzenia.",
  }),
  data: z.string().trim().optional(),
  liczbaGosci: z.enum(guestRangeValues, {
    required_error: "Wybierz przybliżoną liczbę gości.",
    invalid_type_error: "Wybierz przybliżoną liczbę gości.",
  }),
  miejsce: z.enum(eventPlaceValues, {
    required_error: "Wybierz miejsce wydarzenia.",
    invalid_type_error: "Wybierz miejsce wydarzenia.",
  }),
  budzet: z.string().trim().optional(),
  preferencjeMenu: z.string().trim().optional(),
  alergie: z.string().trim().optional(),
  wiadomosc: z.string().trim().optional(),
  zgodaKontakt: z.literal(true, {
    errorMap: () => ({ message: "Zgoda na kontakt jest wymagana." }),
  }),
  zgodaRodo: z.literal(true, {
    errorMap: () => ({ message: "Zgoda na przetwarzanie danych jest wymagana." }),
  }),
  // Honeypot — pole musi pozostać puste (boty je wypełniają).
  hp: z.string().max(0, "").optional().default(""),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
