# PLAN_REALIZACJI.md — Restauracja KŁOSY (Agent 1: Orkiestrator)

## Stack (zatwierdzony, zgodnie z briefem)
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod · next-sitemap · komponenty własne (+ ew. shadcn/ui). Mobile-first.

> **Uzasadnienie utrzymania Next.js zamiast Astro:** strona ma interaktywny konfigurator, zakładki, formularz wieloetapowy i dataLayer — Next.js z App Router + RSC daje SSG/ISR dla SEO przy zachowaniu bogatej interaktywności wysp klienckich. Astro byłoby lżejsze, ale tu komponentów interaktywnych jest dużo i są kluczowe → Next.js wygrywa stosunkiem korzyści.

## Mapowanie struktury
- Repo root (lokalnie): `D:\Automatyzacje\Landing Page\Projekty\restauracja-klosy\`
- Repo GitHub: `restauracja-klosy-landing` (konto `PFLGroup`)
- Brief mówił `/landing-pages/restauracja-klosy/` — na tym VPS odpowiednik to ścieżka wyżej.

## Kolejność prac (milestones)

| # | Milestone | Zakres | Status |
|---|-----------|--------|:------:|
| M0 | **Audyt + plan** | ANALIZA_STRONY.md, PLAN_REALIZACJI.md | ✅ |
| M1 | **Fundament techniczny** | package.json, tsconfig, tailwind (paleta+fonty), next.config, struktura folderów, layout, .env.example | ⏳ |
| M2 | **Design system** | tokeny kolorów, typografia (Fraunces+Inter), komponenty UI bazowe, motyw kłosów | ⏳ |
| M3 | **Dane + treści** | content/*.ts (restaurant-data, offer-tabs, faq, menu, event-types) z faktami + [DO UZUPEŁNIENIA] | ⏳ |
| M4 | **Sekcje strony głównej** | Hero, wartość, zakładki, konfigurator, galeria, menu, misja, FAQ, kontakt | ⏳ |
| M5 | **Podstrony SEO** | menu, imprezy, komunie-chrzciny, wesela-rocznice, catering, galeria, kontakt | ⏳ |
| M6 | **SEO + Schema** | metadane dynamiczne, JSON-LD (Restaurant/LocalBusiness/FAQ/Service…), sitemap, robots, OG/Twitter | ⏳ |
| M7 | **Analityka + formularz** | analytics.ts (dataLayer + eventy), GTM, consent mode v2 placeholder, cookie banner, formularz RHF+Zod + integracje | ⏳ |
| M8 | **QA / a11y / perf** | Lighthouse, WCAG, kontrast, focus, JSON-LD walidacja, RWD, błędy formularza | ⏳ |
| M9 | **Deployment** | GitHub push + Vercel preview/live + README + instrukcje | ⏳ |

## Decyzje do potwierdzenia przez właściciela projektu (przed M9 outward-facing)
1. **Tryb pracy:** budowa inline etapami vs pełny równoległy workflow wieloagentowy.
2. **GitHub:** push teraz (public/private) czy najpierw lokalnie + ZIP.
3. **Vercel:** czy podpinać deploy (wymaga konta/tokenu Vercel) czy GitHub Pages / tylko lokalnie.
4. **Fakty:** telefon, e-mail formularza, piętro, dane kontaktowe.

## Zasady (z briefu)
- Zero zmyślonych faktów/opinii/cen → `[DO UZUPEŁNIENIA: …]`.
- Lighthouse: Perf ≥90, SEO ≥95, A11y ≥90, BP ≥90.
- Brak języka „AI" (zakazane frazy: magiczna atmosfera, kulinarna podróż, wyjątkowe doświadczenie…).
- prefers-reduced-motion, lazy-load galerii, preload tylko hero, WebP/AVIF.
