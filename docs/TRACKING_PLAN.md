# TRACKING_PLAN.md — Restauracja KŁOSY (Agent 5)

Wszystkie zdarzenia przez `pushDataLayerEvent(name, params)` (`lib/analytics.ts`) → `dataLayer` → GTM → GA4 / Meta / Google Ads.

## Konfiguracja
- `NEXT_PUBLIC_GTM_ID` — kontener GTM (ładowany w `components/analytics/GtmScript.tsx`).
- Consent Mode v2: default „denied" przed GTM; po akceptacji bannera → `update` (banner TODO M7).

## Lista zdarzeń

| Event | Trigger | Parametry | Miejsce w kodzie | Status |
|-------|---------|-----------|------------------|:------:|
| `page_view` | wejście na stronę | page_path | GTM (auto) / layout | GTM |
| `phone_click` | klik w telefon | phone_number, location | Navbar, Hero, MobileCtaBar, kontakt | ✅ |
| `email_click` | klik w e-mail | location | MobileCtaBar, footer, kontakt | ✅ |
| `directions_click` | klik „dojazd"/mapa | — | sekcja kontakt (M5) | ⏳ |
| `fb_click` | klik Facebook | — | footer/kontakt (M5) | ⏳ |
| `instagram_click` | klik Instagram | — | footer/kontakt (M5) | ⏳ |
| `pyszne_click` / `glovo_click` | klik dostawa | — | sekcja menu (M5) | ⏳ |
| `menu_view` | wejście na /menu-dnia | — | strona menu (M5) | ⏳ |
| `menu_download` / `pdf_offer_download` | pobranie PDF | file | przycisk PDF (M5) | ⏳ |
| `offer_tab_click` | zmiana zakładki oferty | tab_name | `OfferTabs.tsx` | ✅ |
| `event_type_select` | wybór typu eventu | event_type | konfigurator (M4) | ⏳ |
| `guest_count_change` | wybór liczby gości | guest_count | konfigurator (M4) | ⏳ |
| `gallery_open` | otwarcie zdjęcia (lightbox) | image | galeria (M4/M5) | ⏳ |
| `gallery_filter_click` | filtr galerii | filter | galeria (M4/M5) | ⏳ |
| `form_start` | pierwszy focus w formularzu | form_name | formularz (M7) | ⏳ |
| `form_step_complete` | ukończenie kroku | step | konfigurator/formularz (M7) | ⏳ |
| `form_submit` | klik wyślij | form_name | formularz (M7) | ⏳ |
| `form_submit_success` | sukces wysyłki | form_name, event_type, guest_count, lead_source | formularz (M7) | ✅ helper |
| `form_submit_error` | błąd wysyłki | reason | formularz (M7) | ✅ helper |
| `scroll_25/50/75/90` | głębokość scrolla | percent | GTM scroll trigger | GTM |
| `cta_click_hero` | CTA w hero | label | `Hero.tsx`, MobileCtaBar | ✅ |
| `cta_click_event` | CTA w sekcji eventu | — | sekcje (M4/M5) | ⏳ |
| `cta_click_contact` | CTA w kontakcie | — | sekcja kontakt (M5) | ⏳ |

## Przykłady payloadów
```js
// phone_click
{ event: "phone_click", phone_number: "509068888", location: "header" }
// offer_tab_click
{ event: "offer_tab_click", tab_name: "komunie-chrzciny" }
// form_submit_success
{ event: "form_submit_success", form_name: "event_inquiry", event_type: "komunia", guest_count: "21–35", lead_source: "website" }
```

## Konwersje (do oznaczenia w GA4/Ads)
`form_submit_success`, `phone_click`, `email_click`, `pdf_offer_download`.
