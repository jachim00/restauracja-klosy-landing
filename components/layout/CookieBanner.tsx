"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/content/restaurant-data";

const CONSENT_KEY = "klosy_consent";

type Consent = "granted" | "denied";

function applyConsent(value: Consent) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (value === "granted") {
    gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  }
}

export function CookieBanner() {
  // null = jeszcze nie sprawdzono localStorage (nie renderuj nic)
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      setVisible(stored === null);
    } catch {
      // brak dostępu do localStorage (np. tryb prywatny) — pokaż baner
      setVisible(true);
    }
  }, []);

  function handleChoice(value: Consent) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // ignoruj brak dostępu do localStorage
    }
    applyConsent(value);
    setVisible(false);
  }

  if (visible !== true) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgody cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-linen bg-cream/95 shadow-soft backdrop-blur animate-fade-up"
    >
      <div className="container-x flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm text-ink/80">
          Używamy plików cookie, aby zapewnić działanie strony oraz — za Twoją zgodą —
          do celów analitycznych i marketingowych. Szczegóły znajdziesz w{" "}
          <Link
            href={restaurant.privacyPolicyUrl}
            className="font-medium text-forest underline underline-offset-2 hover:text-wheat"
          >
            Polityce prywatności
          </Link>{" "}
          [DO UZUPEŁNIENIA: pełna treść Polityki prywatności].
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("denied")}
            className="rounded-card border border-forest px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-linen"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={() => handleChoice("granted")}
            className="rounded-card bg-forest px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-wheat hover:text-forest"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
