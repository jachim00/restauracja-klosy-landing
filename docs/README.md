# Restauracja KŁOSY — strona (Next.js)

Interaktywna strona Restauracji KŁOSY w Warszawie: wizytówka + landing eventowy + podstrony SEO + analityka + formularz zapytań.

> **Status:** M1–M2 + rdzeń strony głównej GOTOWE i zbudowane (`pnpm build` ✅). Pozostałe milestones — patrz `PLAN_REALIZACJI.md`.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod · next-sitemap.

## Uruchomienie lokalne
```bash
pnpm install
cp .env.example .env        # uzupełnij wartości
pnpm dev                    # http://localhost:3000
pnpm build && pnpm start    # produkcyjnie
pnpm typecheck              # kontrola typów
```

## Struktura
```
app/                 # trasy (App Router) — strona główna + podstrony
components/
  layout/            # Navbar, Footer, MobileCtaBar
  sections/          # Hero, OfferTabs, Faq, (konfigurator – TODO)
  ui/ forms/ seo/ analytics/
content/             # SINGLE SOURCE OF TRUTH (dane + treści)
  restaurant-data.ts offer-tabs.ts faq.ts menu.ts event-types.ts
lib/                 # analytics.ts (dataLayer), schema.ts (JSON-LD), constants.ts, utils.ts
public/assets/restauracja-klosy/   # zdjęcia (hero/food/interior/events/communions/catering/icons)
docs/                # dokumentacja projektu
```

## Jak zmienić treści
Wszystkie fakty i teksty są w `content/*.ts` — to jedyne źródło prawdy.
- Dane kontaktowe / adres → `content/restaurant-data.ts`
- Zakładki ofertowe → `content/offer-tabs.ts`
- FAQ → `content/faq.ts`
- Typy wydarzeń (konfigurator/formularz) → `content/event-types.ts`
Miejsca wymagające danych od właściciela oznaczone jako `[DO UZUPEŁNIENIA: …]`.

## Jak dodać zdjęcia
1. Wrzuć oryginały do `public/assets/restauracja-klosy/original/`.
2. Skonwertuj do WebP/AVIF → `optimized/` i odpowiedni podfolder kategorii.
3. Nazwy bez polskich znaków (np. `sala-komunia.webp`).
4. Podmień ścieżki w `content/offer-tabs.ts` i komponentach galerii.
5. Uzupełnij `alt` (SEO) i źródło w `docs/PHOTO_REQUIREMENTS.md`.

## GTM / GA4
- Ustaw `NEXT_PUBLIC_GTM_ID` w `.env` → GTM ładuje się automatycznie (`components/analytics/GtmScript.tsx`).
- GA4, Meta Pixel, Google Ads konfiguruje się **wewnątrz kontenera GTM** (nie w kodzie).
- Wszystkie zdarzenia w `dataLayer` opisane w `docs/TRACKING_PLAN.md`. Helper: `pushDataLayerEvent()` / `track.*` w `lib/analytics.ts`.
- Consent Mode v2: default „denied" ustawiany przed GTM (do połączenia z bannerem zgód — TODO).

## Formularz — integracje
Endpoint przyjmuje zgłoszenie i przekazuje je w zależności od `.env`:
- `LEAD_WEBHOOK_URL` → Make.com / Zapier / własny webhook.
- `RESEND_API_KEY` + `CONTACT_EMAIL` → e-mail przez Resend/SMTP.
- Brak konfiguracji → komunikat developerski, **bez udawania wysłania**.
(Implementacja API route — milestone M7.)

## Wdrożenie
Patrz `docs/DEPLOYMENT.md` (GitHub + Vercel, krok po kroku).

## Zasady projektu
- Zero zmyślonych faktów/cen/opinii → placeholdery `[DO UZUPEŁNIENIA]`.
- Lighthouse cel: Performance ≥90, SEO ≥95, A11y ≥90, Best Practices ≥90.
- `prefers-reduced-motion`, lazy-load galerii, preload tylko hero.
