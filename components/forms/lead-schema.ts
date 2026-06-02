import { z } from "zod";
import { eventTypes, guestRanges, eventPlaces } from "@/content/event-types";
import type { Dictionary } from "@/content/i18n";
import { forms as plForms } from "@/content/i18n/messages/pl/forms";

/**
 * Schemat walidacji formularza zapytania eventowego (Zod).
 * Używany po stronie klienta (react-hook-form) i serwera (route handler).
 *
 * Komunikaty błędów są tłumaczalne — schema budowana jest z dostarczonego
 * słownika przez makeLeadSchema(dict). Eksportowany `leadSchema` to wariant
 * zbudowany na kanonicznym słowniku PL (na potrzeby inferencji typu oraz
 * ewentualnego użycia serwerowego z domyślnym językiem).
 */

// Identyfikatory typów wydarzeń z content/event-types.ts + opcja "inne".
const eventTypeIds = eventTypes.map((e) => e.id);
const eventTypeValues = [...eventTypeIds, "inne"] as unknown as [string, ...string[]];

const guestRangeValues = [...guestRanges] as unknown as [string, ...string[]];
const eventPlaceValues = [...eventPlaces] as unknown as [string, ...string[]];

// Polski numer telefonu: cyfry, spacje, myślniki, opcjonalny prefiks +48 / 0048.
const phoneRegex = /^(?:\+?48|0048)?[\s-]?(?:\d[\s-]?){9}$/;

export function makeLeadSchema(dict: Dictionary["forms"]) {
  const v = dict.lead.validation;
  return z.object({
    imieNazwisko: z
      .string({ required_error: v.imieNazwiskoRequired })
      .trim()
      .min(2, v.imieNazwiskoMin),
    telefon: z
      .string({ required_error: v.telefonRequired })
      .trim()
      .min(9, v.telefonMin)
      .regex(phoneRegex, v.telefonInvalid),
    email: z
      .string({ required_error: v.emailRequired })
      .trim()
      .email(v.emailInvalid),
    typWydarzenia: z.enum(eventTypeValues, {
      required_error: v.typWydarzeniaRequired,
      invalid_type_error: v.typWydarzeniaRequired,
    }),
    data: z.string().trim().optional(),
    liczbaGosci: z.enum(guestRangeValues, {
      required_error: v.liczbaGosciRequired,
      invalid_type_error: v.liczbaGosciRequired,
    }),
    miejsce: z.enum(eventPlaceValues, {
      required_error: v.miejsceRequired,
      invalid_type_error: v.miejsceRequired,
    }),
    budzet: z.string().trim().optional(),
    preferencjeMenu: z.string().trim().optional(),
    alergie: z.string().trim().optional(),
    wiadomosc: z.string().trim().optional(),
    zgodaKontakt: z.literal(true, {
      errorMap: () => ({ message: v.zgodaKontaktRequired }),
    }),
    zgodaRodo: z.literal(true, {
      errorMap: () => ({ message: v.zgodaRodoRequired }),
    }),
    // Honeypot — pole musi pozostać puste (boty je wypełniają).
    hp: z.string().max(0, "").optional().default(""),
  });
}

// Kanoniczny wariant PL — źródło typu LeadFormValues i domyślny fallback.
export const leadSchema = makeLeadSchema(plForms);

export type LeadFormValues = z.infer<typeof leadSchema>;
