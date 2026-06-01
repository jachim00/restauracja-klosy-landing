import { NextResponse } from "next/server";
import { leadSchema, type LeadFormValues } from "@/components/forms/lead-schema";
import { restaurant } from "@/content/restaurant-data";

/**
 * Endpoint zgłoszeń eventowych.
 * Walidacja serwerowa (Zod) + warstwa wysyłki:
 *   1. honeypot (hp) niepuste  -> {ok:true} bez wysyłki (anty-spam),
 *   2. LEAD_WEBHOOK_URL ustawione -> POST JSON do webhooka,
 *   3. RESEND_API_KEY ustawione   -> e-mail przez Resend API (fetch),
 *   4. brak konfiguracji          -> 501 (tryb developerski).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

const eventTypeLabels: Record<string, string> = {
  inne: "Inne",
};

function buildEmailBody(data: LeadFormValues): { subject: string; html: string; text: string } {
  const rows: [string, string | undefined][] = [
    ["Imię i nazwisko", data.imieNazwisko],
    ["Telefon", data.telefon],
    ["E-mail", data.email],
    ["Typ wydarzenia", eventTypeLabels[data.typWydarzenia] || data.typWydarzenia],
    ["Data", data.data],
    ["Liczba gości", data.liczbaGosci],
    ["Miejsce", data.miejsce],
    ["Budżet", data.budzet],
    ["Preferencje menu", data.preferencjeMenu],
    ["Alergie / dieta", data.alergie],
    ["Wiadomość", data.wiadomosc],
  ];
  const filled = rows.filter(([, v]) => v && v.trim() !== "");

  const text = filled.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <h2>Nowe zapytanie eventowe — ${restaurant.name}</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${filled
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #EADDC8;font-weight:bold;background:#FFF8ED">${escapeHtml(
              k
            )}</td><td style="border:1px solid #EADDC8">${escapeHtml(v ?? "")}</td></tr>`
        )
        .join("")}
    </table>
  `.trim();

  return {
    subject: `Zapytanie eventowe: ${eventTypeLabels[data.typWydarzenia] || data.typWydarzenia} (${data.liczbaGosci})`,
    html,
    text,
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Nieprawidłowy format żądania." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Formularz zawiera błędy. Sprawdź wprowadzone dane.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Anty-spam: honeypot wypełniony => udajemy sukces, nic nie wysyłamy.
  if (data.hp && data.hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 1) Webhook (np. Make / n8n / Zapier / własny endpoint).
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "restauracja-klosy", ...data, hp: undefined }),
      });
      if (!res.ok) throw new Error(`webhook_status_${res.status}`);
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Nie udało się przekazać zgłoszenia. Spróbuj ponownie później." },
        { status: 502 }
      );
    }
  }

  // 2) Resend (e-mail) — bez dodatkowych zależności, czysty fetch.
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || restaurant.contact.email;
  if (resendKey) {
    try {
      const { subject, html, text } = buildEmailBody(data);
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [toEmail],
          reply_to: data.email,
          subject,
          html,
          text,
        }),
      });
      if (!res.ok) throw new Error(`resend_status_${res.status}`);
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Nie udało się wysłać e-maila. Spróbuj ponownie później." },
        { status: 502 }
      );
    }
  }

  // 3) Brak konfiguracji — tryb developerski.
  return NextResponse.json(
    {
      ok: false,
      dev: true,
      message:
        "Brak konfiguracji LEAD_WEBHOOK_URL/RESEND_API_KEY — zgłoszenie NIE zostało wysłane (tryb developerski).",
    },
    { status: 501 }
  );
}
