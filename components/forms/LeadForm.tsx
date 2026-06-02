"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { makeLeadSchema, type LeadFormValues } from "@/components/forms/lead-schema";
import { restaurant } from "@/content/restaurant-data";
import { pushDataLayerEvent, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { localizedPath, type LocaleCode } from "@/content/i18n/locales";
import type { Dictionary } from "@/content/i18n";

type SubmitStatus = "idle" | "loading" | "success" | "error";

type LeadFormProps = {
  lang: LocaleCode;
  dict: Dictionary["forms"];
  defaultValues?: Partial<LeadFormValues>;
  formName?: string;
};

const fieldBase =
  "w-full rounded-card border border-linen bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-wheat focus:ring-2 focus:ring-wheat/40 disabled:opacity-60";
const labelBase = "mb-1.5 block text-sm font-medium text-forest";
const errorTextBase = "mt-1 text-sm text-clay";

export function LeadForm({
  lang,
  dict,
  defaultValues,
  formName = "event_inquiry",
}: LeadFormProps) {
  const t = dict.lead;
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const startedRef = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  const schema = useMemo(() => makeLeadSchema(dict), [dict]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      imieNazwisko: "",
      telefon: "",
      email: "",
      data: "",
      budzet: "",
      preferencjeMenu: "",
      alergie: "",
      wiadomosc: "",
      hp: "",
      ...defaultValues,
    },
  });

  // Prefill z parametrów URL (handoff z mini-konfiguratora) — po stronie klienta,
  // bo strona jest statyczna (GitHub Pages, brak serwerowych searchParams).
  // Klucze query: typ = stabilne id typu wydarzenia; goscie/miejsce = INDEKS
  // w tablicy opcji (niezależny od języka); data = YYYY-MM-DD.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    const typ = sp.get("typ");
    const goscie = sp.get("goscie");
    const miejsce = sp.get("miejsce");
    const data = sp.get("data");
    if (typ && t.eventTypeOptions.some((o) => o.value === typ))
      setValue("typWydarzenia", typ as LeadFormValues["typWydarzenia"]);
    if (goscie && /^\d+$/.test(goscie)) {
      const opt = t.guestRangeOptions[Number(goscie)];
      if (opt) setValue("liczbaGosci", opt.value as LeadFormValues["liczbaGosci"]);
    }
    if (miejsce && /^\d+$/.test(miejsce)) {
      const opt = t.placeOptions[Number(miejsce)];
      if (opt) setValue("miejsce", opt.value as LeadFormValues["miejsce"]);
    }
    if (data && /^\d{4}-\d{2}-\d{2}$/.test(data)) setValue("data", data);
  }, [setValue, t]);

  // Pierwszy focus w obrębie formularza -> form_start (jednorazowo).
  function handleFirstFocus() {
    if (startedRef.current) return;
    startedRef.current = true;
    pushDataLayerEvent("form_start", { form_name: formName });
  }

  async function onSubmit(values: LeadFormValues) {
    // Honeypot wypełniony -> traktuj jak sukces, nic nie wysyłaj (anty-spam).
    if (values.hp) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    pushDataLayerEvent("form_submit", { form_name: formName });

    // Strona statyczna (GitHub Pages) — wysyłka e-maila:
    //  • Web3Forms (zalecane): ustaw NEXT_PUBLIC_WEB3FORMS_KEY,
    //  • albo własny webhook (Make/Zapier): NEXT_PUBLIC_LEAD_WEBHOOK_URL.
    const web3key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
    if (!web3key && !webhook) {
      setStatus("error");
      setErrorMessage(t.errors.noEndpoint);
      track.formSubmitError("no_endpoint");
      return;
    }

    try {
      const payload: Partial<LeadFormValues> = { ...values };
      delete payload.hp;

      const res = web3key
        ? await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: web3key,
              subject: `${t.mail.subjectPrefix} ${values.typWydarzenia}`,
              from_name: `${t.mail.fromNamePrefix} (${values.imieNazwisko})`,
              ...payload,
            }),
          })
        : await fetch(webhook as string, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ form_name: formName, ...payload }),
          });

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(t.errors.http);
        track.formSubmitError(`http_${res.status}`);
        return;
      }

      setStatus("success");
      track.formSubmitSuccess({
        event_type: values.typWydarzenia,
        guest_count: values.liczbaGosci,
      });
      reset();
      // Focus na komunikat sukcesu (a11y).
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
      setErrorMessage(t.errors.network);
      track.formSubmitError("network_error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-card border border-olive/30 bg-cream p-8 text-center shadow-soft outline-none"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-olive" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-forest">{t.success.heading}</h3>
        <p className="mt-2 text-ink/80">
          {t.success.bodyBefore}{" "}
          <a
            href={`tel:${restaurant.contact.phone}`}
            className="font-medium text-brown underline decoration-wheat underline-offset-4"
            onClick={() => track.phoneClick("lead_form_success", restaurant.contact.phone)}
          >
            {restaurant.contact.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            startedRef.current = false;
          }}
          className="mt-6 rounded-card bg-olive px-5 py-2.5 font-medium text-cream transition hover:bg-forest"
        >
          {t.success.again}
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      onFocusCapture={handleFirstFocus}
      className="space-y-5"
      aria-label={t.ariaLabel}
    >
      {/* Honeypot — ukryte off-screen, niewidoczne dla użytkownika i czytników. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="hp">{t.honeypotLabel}</label>
        <input
          id="hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("hp")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Imię i nazwisko */}
        <div className="sm:col-span-2">
          <label htmlFor="imieNazwisko" className={labelBase}>
            {t.fields.imieNazwisko.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <input
            id="imieNazwisko"
            type="text"
            autoComplete="name"
            className={cn(fieldBase, errors.imieNazwisko && "border-clay")}
            aria-invalid={errors.imieNazwisko ? "true" : "false"}
            aria-describedby={errors.imieNazwisko ? "imieNazwisko-error" : undefined}
            {...register("imieNazwisko")}
          />
          {errors.imieNazwisko && (
            <p id="imieNazwisko-error" className={errorTextBase} role="alert">
              {errors.imieNazwisko.message}
            </p>
          )}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="telefon" className={labelBase}>
            {t.fields.telefon.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <input
            id="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={cn(fieldBase, errors.telefon && "border-clay")}
            aria-invalid={errors.telefon ? "true" : "false"}
            aria-describedby={errors.telefon ? "telefon-error" : undefined}
            {...register("telefon")}
          />
          {errors.telefon && (
            <p id="telefon-error" className={errorTextBase} role="alert">
              {errors.telefon.message}
            </p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className={labelBase}>
            {t.fields.email.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={cn(fieldBase, errors.email && "border-clay")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorTextBase} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Typ wydarzenia */}
        <div>
          <label htmlFor="typWydarzenia" className={labelBase}>
            {t.fields.typWydarzenia.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <select
            id="typWydarzenia"
            defaultValue=""
            className={cn(fieldBase, errors.typWydarzenia && "border-clay")}
            aria-invalid={errors.typWydarzenia ? "true" : "false"}
            aria-describedby={errors.typWydarzenia ? "typWydarzenia-error" : undefined}
            {...register("typWydarzenia")}
          >
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {t.eventTypeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.typWydarzenia && (
            <p id="typWydarzenia-error" className={errorTextBase} role="alert">
              {errors.typWydarzenia.message}
            </p>
          )}
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className={labelBase}>
            {t.fields.data.label} <span className="text-ink/50">{t.optionalSuffix}</span>
          </label>
          <input
            id="data"
            type="date"
            className={cn(fieldBase, errors.data && "border-clay")}
            aria-invalid={errors.data ? "true" : "false"}
            aria-describedby={errors.data ? "data-error" : undefined}
            {...register("data")}
          />
          {errors.data && (
            <p id="data-error" className={errorTextBase} role="alert">
              {errors.data.message}
            </p>
          )}
        </div>

        {/* Liczba gości */}
        <div>
          <label htmlFor="liczbaGosci" className={labelBase}>
            {t.fields.liczbaGosci.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <select
            id="liczbaGosci"
            defaultValue=""
            className={cn(fieldBase, errors.liczbaGosci && "border-clay")}
            aria-invalid={errors.liczbaGosci ? "true" : "false"}
            aria-describedby={errors.liczbaGosci ? "liczbaGosci-error" : undefined}
            {...register("liczbaGosci")}
          >
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {t.guestRangeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.liczbaGosci && (
            <p id="liczbaGosci-error" className={errorTextBase} role="alert">
              {errors.liczbaGosci.message}
            </p>
          )}
        </div>

        {/* Miejsce */}
        <div>
          <label htmlFor="miejsce" className={labelBase}>
            {t.fields.miejsce.label} <span className="text-clay">{t.requiredMark}</span>
          </label>
          <select
            id="miejsce"
            defaultValue=""
            className={cn(fieldBase, errors.miejsce && "border-clay")}
            aria-invalid={errors.miejsce ? "true" : "false"}
            aria-describedby={errors.miejsce ? "miejsce-error" : undefined}
            {...register("miejsce")}
          >
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {t.placeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.miejsce && (
            <p id="miejsce-error" className={errorTextBase} role="alert">
              {errors.miejsce.message}
            </p>
          )}
        </div>

        {/* Budżet */}
        <div>
          <label htmlFor="budzet" className={labelBase}>
            {t.fields.budzet.label} <span className="text-ink/50">{t.optionalSuffix}</span>
          </label>
          <input
            id="budzet"
            type="text"
            placeholder={t.fields.budzet.placeholder}
            className={cn(fieldBase, errors.budzet && "border-clay")}
            aria-invalid={errors.budzet ? "true" : "false"}
            aria-describedby={errors.budzet ? "budzet-error" : undefined}
            {...register("budzet")}
          />
          {errors.budzet && (
            <p id="budzet-error" className={errorTextBase} role="alert">
              {errors.budzet.message}
            </p>
          )}
        </div>

        {/* Preferencje menu */}
        <div className="sm:col-span-2">
          <label htmlFor="preferencjeMenu" className={labelBase}>
            {t.fields.preferencjeMenu.label} <span className="text-ink/50">{t.optionalSuffix}</span>
          </label>
          <input
            id="preferencjeMenu"
            type="text"
            placeholder={t.fields.preferencjeMenu.placeholder}
            className={cn(fieldBase, errors.preferencjeMenu && "border-clay")}
            aria-invalid={errors.preferencjeMenu ? "true" : "false"}
            aria-describedby={errors.preferencjeMenu ? "preferencjeMenu-error" : undefined}
            {...register("preferencjeMenu")}
          />
          {errors.preferencjeMenu && (
            <p id="preferencjeMenu-error" className={errorTextBase} role="alert">
              {errors.preferencjeMenu.message}
            </p>
          )}
        </div>

        {/* Alergie */}
        <div className="sm:col-span-2">
          <label htmlFor="alergie" className={labelBase}>
            {t.fields.alergie.label}{" "}
            <span className="text-ink/50">{t.optionalSuffix}</span>
          </label>
          <input
            id="alergie"
            type="text"
            placeholder={t.fields.alergie.placeholder}
            className={cn(fieldBase, errors.alergie && "border-clay")}
            aria-invalid={errors.alergie ? "true" : "false"}
            aria-describedby={errors.alergie ? "alergie-error" : undefined}
            {...register("alergie")}
          />
          {errors.alergie && (
            <p id="alergie-error" className={errorTextBase} role="alert">
              {errors.alergie.message}
            </p>
          )}
        </div>

        {/* Wiadomość */}
        <div className="sm:col-span-2">
          <label htmlFor="wiadomosc" className={labelBase}>
            {t.fields.wiadomosc.label} <span className="text-ink/50">{t.optionalSuffix}</span>
          </label>
          <textarea
            id="wiadomosc"
            rows={4}
            placeholder={t.fields.wiadomosc.placeholder}
            className={cn(fieldBase, "resize-y", errors.wiadomosc && "border-clay")}
            aria-invalid={errors.wiadomosc ? "true" : "false"}
            aria-describedby={errors.wiadomosc ? "wiadomosc-error" : undefined}
            {...register("wiadomosc")}
          />
          {errors.wiadomosc && (
            <p id="wiadomosc-error" className={errorTextBase} role="alert">
              {errors.wiadomosc.message}
            </p>
          )}
        </div>
      </div>

      {/* Zgody */}
      <div className="space-y-3 border-t border-linen pt-5">
        <div>
          <label htmlFor="zgodaKontakt" className="flex items-start gap-3 text-sm text-ink/90">
            <input
              id="zgodaKontakt"
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 rounded border-linen text-olive focus:ring-wheat"
              aria-invalid={errors.zgodaKontakt ? "true" : "false"}
              aria-describedby={errors.zgodaKontakt ? "zgodaKontakt-error" : undefined}
              {...register("zgodaKontakt")}
            />
            <span>
              {t.consents.kontakt.text} <span className="text-clay">{t.requiredMark}</span>
            </span>
          </label>
          {errors.zgodaKontakt && (
            <p id="zgodaKontakt-error" className={errorTextBase} role="alert">
              {errors.zgodaKontakt.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="zgodaRodo" className="flex items-start gap-3 text-sm text-ink/90">
            <input
              id="zgodaRodo"
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 rounded border-linen text-olive focus:ring-wheat"
              aria-invalid={errors.zgodaRodo ? "true" : "false"}
              aria-describedby={errors.zgodaRodo ? "zgodaRodo-error" : undefined}
              {...register("zgodaRodo")}
            />
            <span>
              {t.consents.rodo.before}{" "}
              <a
                href={localizedPath(lang, restaurant.privacyPolicyUrl)}
                className="font-medium text-brown underline decoration-wheat underline-offset-4"
              >
                {t.consents.rodo.linkText}
              </a>{" "}
              {t.consents.rodo.after}{" "}
              <span className="text-clay">{t.requiredMark}</span>
            </span>
          </label>
          {errors.zgodaRodo && (
            <p id="zgodaRodo-error" className={errorTextBase} role="alert">
              {errors.zgodaRodo.message}
            </p>
          )}
        </div>
      </div>

      {/* Komunikat błędu wysyłki */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-card border border-clay/40 bg-clay/10 p-4 text-sm text-ink"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-clay" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-wheat px-6 py-3.5 font-medium text-forest shadow-soft transition hover:bg-wheat/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            {t.submit.loading}
          </>
        ) : (
          t.submit.idle
        )}
      </button>

      <p className="text-xs text-ink/60">
        {t.requiredHintPrefix} <span className="text-clay">{t.requiredMark}</span> {t.requiredHint}
      </p>
    </form>
  );
}

export default LeadForm;
