# SEO_AI_SEO_PLAN.md — Restauracja KŁOSY (Agent 4)

## 1. Klastry słów kluczowych → strony

| Strona | Główne frazy | Intencja |
|--------|--------------|----------|
| `/` (home) | restauracja Kłosy Warszawa, restauracja Al. Jerozolimskie 123A, restauracja Atlas Tower, restauracja Warszawa Ochota | brand + lokalna |
| `/menu-dnia` | obiady domowe Warszawa Centrum, menu dnia Warszawa, obiady dla grup Warszawa | usługowa |
| `/imprezy-okolicznosciowe` | imprezy okolicznościowe Warszawa, przyjęcia rodzinne Warszawa, urodziny/rocznica w restauracji Warszawa | eventowa |
| `/komunie-chrzciny` | komunie Warszawa, chrzciny Warszawa, przyjęcie komunijne restauracja | eventowa long-tail |
| `/wesela-rocznice` | kameralne wesele Warszawa, rocznica Warszawa restauracja | eventowa |
| `/catering` | catering Warszawa, catering firmowy Warszawa, catering z dostawą Warszawa, przerwa kawowa Warszawa, catering na szkolenie | usługowa B2B |
| `/galeria` | (wsparcie wizualne, frazy long-tail z altów) | wspierająca |
| `/kontakt` | restauracja Al. Jerozolimskie 123A, jak dojechać, rezerwacja | nawigacyjna/lokalna |

## 2. Struktura on-page (każda podstrona)
- 1× H1 z frazą główną, logiczne H2/H3.
- 700–1200 słów tam, gdzie ma to sens SEO (eventowe/usługowe).
- Bloki FAQ (answer-friendly) + sekcja „krótkie odpowiedzi".
- Linki wewnętrzne (home ↔ usługi ↔ kontakt/formularz).
- Zdjęcia z opisowym `alt` (frazy naturalne).
- Frazy lokalne wplecione naturalnie — BEZ przeoptymalizowania.

## 3. AI SEO / AEO / GEO
Strona ma jasno komunikować modelom AI: czym jest KŁOSY, gdzie, co oferuje, dla kogo, jakie eventy, ile osób, jak działa catering, jak zapytać o termin, godziny kontaktu.
- Sekcje „krótkie odpowiedzi" (Q&A) na stronie głównej i podstronach.
- FAQPage JSON-LD (zaimplementowane w `lib/schema.ts`).
- Treść w jasnych, samodzielnych akapitach (łatwe do cytowania przez LLM).
- Spójne NAP w treści i danych strukturalnych.

### Pytania answer-friendly (wdrożone w content/faq.ts)
Komunia / chrzciny / wesele kameralne / catering z dostawą / obiady dla grup / lokalizacja / jak zapytać o termin / dopasowanie menu / dania wegetariańskie.

## 4. Dane strukturalne JSON-LD (lib/schema.ts)
Wdrożone: `Organization`, `WebSite`, `Restaurant`+`LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Service`.
Do uzupełnienia po danych: `OpeningHoursSpecification` (godziny), `Menu` (po otrzymaniu menu), `Offer` (tylko jeśli ceny potwierdzone), `ImageObject` (realne zdjęcia), `ContactPoint`.
**Zasada:** nie dodajemy ratingów/recenzji/cen bez potwierdzenia.

## 5. Meta title / description (wzorce)
- Home: „Restauracja KŁOSY Warszawa | Obiady, catering i przyjęcia rodzinne"
- Imprezy: „Imprezy okolicznościowe Warszawa | Restauracja KŁOSY"
- Komunie/chrzciny: „Komunie i chrzciny Warszawa | Kameralne przyjęcia rodzinne"
- Catering: „Catering Warszawa | Restauracja KŁOSY"
- Kontakt: „Kontakt | Restauracja KŁOSY, Al. Jerozolimskie 123A"

## 6. Techniczne SEO
- Dynamiczne metadane per strona (Next Metadata API).
- canonical, OG, Twitter Card (w layout + per route).
- sitemap.xml + robots.txt (next-sitemap, post-build).
- Wydajność (Core Web Vitals) jako czynnik rankingowy — patrz wymagania Lighthouse.

## 7. Lokalne SEO (poza stroną — rekomendacje dla właściciela)
- Wizytówka Google (Profil Firmy) — spójne NAP, kategorie, zdjęcia, godziny.
- NAP identyczny na stronie, w GBP i katalogach.
- Opinie Google (realne — nie generujemy).
