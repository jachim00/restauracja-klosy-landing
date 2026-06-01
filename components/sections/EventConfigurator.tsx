"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Baby,
  Heart,
  Gift,
  Cake,
  Users,
  Briefcase,
  Truck,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  Check,
  CalendarDays,
  Send,
  type LucideIcon,
} from "lucide-react";
import { eventTypes, guestRanges, eventPlaces } from "@/content/event-types";
import { pushDataLayerEvent, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** Mapowanie nazwy ikony z content/event-types.ts na komponent lucide-react. */
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Baby,
  Heart,
  Gift,
  Cake,
  Users,
  Briefcase,
  Truck,
  UtensilsCrossed,
};

const TOTAL_STEPS = 5;

const stepTitles = [
  "Jaki rodzaj przyjęcia planujesz?",
  "Ile osób spodziewasz się gościć?",
  "Gdzie ma się odbyć?",
  "Jaki termin bierzesz pod uwagę?",
  "Podsumowanie",
] as const;

export function EventConfigurator() {
  const router = useRouter();
  const reduce = useReducedMotion();

  const [step, setStep] = useState(1);
  const [eventTypeId, setEventTypeId] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [place, setPlace] = useState<string | null>(null);
  const [eventDate, setEventDate] = useState("");

  const selectedType = eventTypes.find((t) => t.id === eventTypeId) ?? null;

  /** Czy bieżący krok ma wybraną wartość (krok 5 = zawsze gotowy do wysyłki). */
  function isStepValid(s: number): boolean {
    switch (s) {
      case 1:
        return eventTypeId !== null;
      case 2:
        return guests !== null;
      case 3:
        return place !== null;
      case 4:
        return true; // termin nieobowiązkowy — restauracja i tak go potwierdza
      default:
        return true;
    }
  }

  function goNext() {
    if (!isStepValid(step)) return;
    pushDataLayerEvent("form_step_complete", { step });
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit() {
    if (!eventTypeId) return;
    pushDataLayerEvent("form_step_complete", { step: TOTAL_STEPS });
    pushDataLayerEvent("cta_click_event", {});

    const params = new URLSearchParams();
    params.set("typ", eventTypeId);
    if (guests) params.set("goscie", guests);
    if (place) params.set("miejsce", place);
    if (eventDate) params.set("data", eventDate);

    router.push(`/kontakt?${params.toString()}#formularz`);
  }

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: { duration: 0.3 },
      };

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <section id="konfigurator" className="section-y bg-linen/40">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl">Zaplanuj przyjęcie</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          W kilku krokach zbierz najważniejsze informacje o swoim wydarzeniu. Na końcu
          przekażemy je do formularza kontaktowego — odezwiemy się z propozycją.
        </p>

        <div className="mt-8 rounded-card bg-white p-6 shadow-soft sm:p-8">
          {/* Pasek postępu */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-ink/70">
              <span>
                Krok {step} z {TOTAL_STEPS}
              </span>
              <span className="font-medium text-forest">{stepTitles[step - 1]}</span>
            </div>
            <div
              className="mt-3 h-2 w-full overflow-hidden rounded-full bg-linen"
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-label="Postęp konfiguratora przyjęcia"
            >
              <motion.div
                className="h-full rounded-full bg-olive"
                initial={false}
                animate={{ width: `${progressPct}%` }}
                transition={reduce ? { duration: 0 } : { duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} {...motionProps}>
              {/* KROK 1 — typ wydarzenia */}
              {step === 1 && (
                <fieldset>
                  <legend className="text-lg font-medium text-forest">
                    {stepTitles[0]}
                  </legend>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {eventTypes.map((t) => {
                      const Icon = iconMap[t.icon] ?? Sparkles;
                      const selected = eventTypeId === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            setEventTypeId(t.id);
                            track.eventTypeSelect(t.id);
                          }}
                          className={cn(
                            "group flex flex-col items-start gap-2 rounded-card border p-4 text-left transition-all",
                            !reduce && "hover:-translate-y-0.5 hover:shadow-soft",
                            selected
                              ? "border-olive bg-olive/10 ring-2 ring-olive/40"
                              : "border-linen bg-white hover:border-olive/50"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                              selected
                                ? "bg-olive text-cream"
                                : "bg-linen/60 text-olive group-hover:bg-olive/15"
                            )}
                          >
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <span className="font-medium text-ink">{t.label}</span>
                          <span className="text-xs text-ink/60">{t.blurb}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {/* KROK 2 — liczba gości */}
              {step === 2 && (
                <fieldset>
                  <legend className="text-lg font-medium text-forest">
                    {stepTitles[1]}
                  </legend>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {guestRanges.map((range) => {
                      const selected = guests === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            setGuests(range);
                            track.guestCount(range);
                          }}
                          className={cn(
                            "rounded-full border px-5 py-3 text-sm transition-all",
                            !reduce && "hover:scale-[1.03]",
                            selected
                              ? "border-olive bg-olive text-cream"
                              : "border-linen bg-white text-ink/80 hover:border-olive/50"
                          )}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {/* KROK 3 — miejsce */}
              {step === 3 && (
                <fieldset>
                  <legend className="text-lg font-medium text-forest">
                    {stepTitles[2]}
                  </legend>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {eventPlaces.map((p) => {
                      const selected = place === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setPlace(p)}
                          className={cn(
                            "flex items-center justify-between rounded-card border px-4 py-4 text-left text-sm transition-all",
                            !reduce && "hover:-translate-y-0.5 hover:shadow-soft",
                            selected
                              ? "border-olive bg-olive/10 ring-2 ring-olive/40"
                              : "border-linen bg-white hover:border-olive/50"
                          )}
                        >
                          <span className="font-medium text-ink">{p}</span>
                          {selected && (
                            <Check size={18} className="shrink-0 text-olive" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {/* KROK 4 — termin */}
              {step === 4 && (
                <div>
                  <label
                    htmlFor="event-date"
                    className="text-lg font-medium text-forest"
                  >
                    {stepTitles[3]}
                  </label>
                  <p className="mt-2 text-sm text-ink/60">
                    Termin jest orientacyjny — wspólnie potwierdzimy dostępność.
                  </p>
                  <div className="mt-5 flex max-w-xs items-center gap-3 rounded-card border border-linen bg-white px-4 py-3 focus-within:border-olive">
                    <CalendarDays size={20} className="shrink-0 text-olive" aria-hidden="true" />
                    <input
                      id="event-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-transparent text-ink outline-none"
                    />
                  </div>
                </div>
              )}

              {/* KROK 5 — podsumowanie + wysyłka */}
              {step === 5 && (
                <div>
                  <h3 className="text-lg font-medium text-forest">{stepTitles[4]}</h3>
                  <dl className="mt-5 divide-y divide-linen rounded-card border border-linen bg-cream/50">
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">Rodzaj przyjęcia</dt>
                      <dd className="font-medium text-ink">
                        {selectedType?.label ?? "—"}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">Liczba gości</dt>
                      <dd className="font-medium text-ink">{guests ?? "—"}</dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">Miejsce</dt>
                      <dd className="font-medium text-ink">{place ?? "—"}</dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">Preferowany termin</dt>
                      <dd className="font-medium text-ink">
                        {eventDate || "Do ustalenia"}
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform sm:w-auto",
                      !reduce && "hover:scale-[1.03]"
                    )}
                  >
                    <Send size={18} aria-hidden="true" />
                    Wyślij zapytanie o przyjęcie
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nawigacja wstecz/dalej (kroki 1–4) */}
          {step < TOTAL_STEPS && (
            <div className="mt-8 flex items-center justify-between border-t border-linen pt-6">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 1}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                  step === 1
                    ? "cursor-not-allowed text-ink/30"
                    : "text-ink/70 hover:text-forest"
                )}
              >
                <ChevronLeft size={18} aria-hidden="true" />
                Wstecz
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!isStepValid(step)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-6 py-2 text-sm font-medium transition-all",
                  isStepValid(step)
                    ? "bg-olive text-cream hover:bg-forest"
                    : "cursor-not-allowed bg-linen text-ink/40"
                )}
              >
                Dalej
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm text-ink/60">
          Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje
          propozycję menu.
        </p>
      </div>
    </section>
  );
}
