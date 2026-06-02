"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { pushDataLayerEvent, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { localizedPath, type LocaleCode } from "@/content/i18n/locales";
import type { Dictionary } from "@/content/i18n";

/** Mapowanie nazwy ikony ze słownika na komponent lucide-react. */
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

export function EventConfigurator({ lang, dict }: { lang: LocaleCode; dict: Dictionary["configurator"] }) {
  const router = useRouter();

  const stepTitles = dict.stepTitles;

  const [step, setStep] = useState(1);
  const [eventTypeId, setEventTypeId] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [place, setPlace] = useState<string | null>(null);
  const [eventDate, setEventDate] = useState("");

  const selectedType = dict.eventTypes.find((t) => t.id === eventTypeId) ?? null;

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

    // Handoff do formularza: typ = stabilne id; goscie/miejsce = INDEKS w tablicy
    // (tablice są równoległe między językami i wobec opcji formularza), więc
    // prefill działa niezależnie od języka (etykiety są tłumaczone, indeks nie).
    const params = new URLSearchParams();
    params.set("typ", eventTypeId);
    if (guests) {
      const gi = dict.guestRanges.indexOf(guests);
      if (gi >= 0) params.set("goscie", String(gi));
    }
    if (place) {
      const pi = dict.places.indexOf(place);
      if (pi >= 0) params.set("miejsce", String(pi));
    }
    if (eventDate) params.set("data", eventDate);

    router.push(`${localizedPath(lang, "/kontakt")}?${params.toString()}#formularz`);
  }

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <section id="konfigurator" className="section-y bg-linen/40">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl">{dict.heading}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">{dict.intro}</p>

        <div className="mt-8 rounded-card bg-cream p-6 shadow-soft sm:p-8">
          {/* Pasek postępu */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-ink/70">
              <span>
                {dict.progress.stepLabel
                  .replace("{step}", String(step))
                  .replace("{total}", String(TOTAL_STEPS))}
              </span>
              <span className="font-medium text-forest">{stepTitles[step - 1]}</span>
            </div>
            <div
              className="mt-3 h-2 w-full rounded-full bg-linen"
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-label={dict.progress.barAria}
            >
              {/* „rosnący kłos": gradient olive→wheat + ziarnista główka na końcu */}
              <div
                className="relative h-full rounded-full bg-gradient-to-r from-olive to-wheat transition-[width] duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              >
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-wheat shadow-[0_0_0_3px_rgba(255,248,237,0.8)]"
                />
              </div>
            </div>
          </div>

          <div key={step} className="animate-fade-up">
              {/* KROK 1 — typ wydarzenia */}
              {step === 1 && (
                <fieldset>
                  <legend className="text-lg font-medium text-forest">
                    {stepTitles[0]}
                  </legend>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {dict.eventTypes.map((t) => {
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
                            "group flex flex-col items-start gap-2 rounded-card border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft",
                            selected
                              ? "border-wheat bg-wheat/15 shadow-[0_0_0_3px_rgba(201,154,58,0.25)]"
                              : "border-linen bg-white hover:border-olive/50"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                              selected
                                ? "bg-wheat text-forest"
                                : "bg-linen/60 text-olive group-hover:bg-olive/15"
                            )}
                          >
                            <Icon size={20} aria-hidden="true" className={cn(selected && "animate-sway")} />
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
                    {dict.guestRanges.map((range) => {
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
                            "rounded-full border px-5 py-3 text-sm transition-all hover:scale-[1.03]",
                            selected
                              ? "border-wheat bg-wheat text-forest"
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
                    {dict.places.map((p) => {
                      const selected = place === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setPlace(p)}
                          className={cn(
                            "flex items-center justify-between rounded-card border px-4 py-4 text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-soft",
                            selected
                              ? "border-wheat bg-wheat/15 shadow-[0_0_0_3px_rgba(201,154,58,0.25)]"
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
                    {dict.dateHint}
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
                      <dt className="text-sm text-ink/60">{dict.summary.eventType}</dt>
                      <dd className="font-medium text-ink">
                        {selectedType?.label ?? dict.summary.empty}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">{dict.summary.guests}</dt>
                      <dd className="font-medium text-ink">{guests ?? dict.summary.empty}</dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">{dict.summary.place}</dt>
                      <dd className="font-medium text-ink">{place ?? dict.summary.empty}</dd>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <dt className="text-sm text-ink/60">{dict.summary.preferredDate}</dt>
                      <dd className="font-medium text-ink">
                        {eventDate || dict.summary.dateTbd}
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    <Send size={18} aria-hidden="true" />
                    {dict.summary.submit}
                  </button>
                </div>
              )}
          </div>

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
                {dict.nav.back}
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
                {dict.nav.next}
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm text-ink/60">
          {dict.footnote}
        </p>
      </div>
    </section>
  );
}
