# ANALIZA_STRONY.md — Restauracja KŁOSY

**Data audytu:** 2026-06-01  
**Agent:** 1 (Orkiestrator / Product Owner)  
**Źródła:** https://www.restauracjaklosy.pl/ (crawl), brief klienta, FB (ściana logowania — niedostępne automatycznie).

---

## 1. Stan obecny (co jest)

Obecna strona to prosty serwis typu wizytówka (prawdopodobnie kreator). Zawiera:
- Powitanie i ogólne hasła marketingowe ("Odkryj wyjątkowe smaki", "Witaj w restauracji KŁOSY", "Razem tworzymy wyjątkowe chwile").
- Nawigację: Strona Główna · O nas · Menu · Nasza oferta · Kontakt.
- Wzmiankę o organizacji przyjęć, cateringu, komunii, chrzcin.
- Powiązanie z **Fundacją Pomocy Rodzinie „Człowiek w Potrzebie"** (KRS 000239060, NIP 5213361463, REGON 140217610).

### Potwierdzone fakty (NAP + marka)
| Pole | Wartość | Źródło | Status |
|------|---------|--------|:------:|
| Nazwa | Restauracja KŁOSY | strona | ✅ |
| Adres | Al. Jerozolimskie 123a, 02-017 Warszawa | strona | ✅ |
| Budynek / piętro | Atlas Tower, 5. piętro | brief | 🟡 do potwierdzenia |
| Telefon | 509 068 888 | brief (przykład analityki) | 🟡 do potwierdzenia |
| E-mail | biuro@czlowiekwpotrzebie.org **(żywa strona)** vs biuro@restauracjaklosy.pl **(brief)** | rozbieżność | 🔴 do rozstrzygnięcia |
| Fundacja | „Człowiek w Potrzebie" — zysk wspiera cele statutowe | strona + brief | ✅ |
| Profil | kuchnia polska, obiady domowe, menu dnia, catering, przyjęcia | strona + brief | ✅ |

---

## 2. Luki (gap analysis) — czego brakuje

| Obszar | Brak | Skutek biznesowy |
|--------|------|------------------|
| **Storytelling** | brak historii, misji, „dlaczego my" | brak emocji, brak różnicowania |
| **CTA** | brak mocnych wezwań (Zadzwoń / Zapytaj o termin) | użytkownik nie wie co zrobić |
| **Segmentacja usług** | wszystko wrzucone razem | brak ścieżek pod konkretne eventy |
| **Oferta eventowa** | brak rozwinięcia (komunie, wesela, rocznice, firmowe) | utrata leadów okolicznościowych |
| **Formularz** | brak | brak kanału pozyskania zapytań |
| **Ścieżki konwersji** | brak landingów | brak gotowości pod Ads |
| **SEO** | brak meta, struktury H, danych strukturalnych, fraz lokalnych | brak widoczności organicznej |
| **AI SEO / AEO** | brak treści answer-friendly, brak schema | niewidoczność w AI Overviews / LLM |
| **Analityka** | brak GTM/GA4/eventów | brak pomiaru leadów i kampanii |
| **Galeria** | brak uporządkowanej galerii z filtrami | słaby nośnik emocji |
| **Mobile CTA** | brak paska Zadzwoń/Napisz | utrata konwersji mobilnych |

---

## 3. Architektura informacji (docelowa)

**Nawigacja główna:** Strona główna · Menu dnia · Imprezy okolicznościowe · Komunie i chrzciny · Wesela i rocznice · Catering · Galeria · Kontakt

**Strona główna (landing):**
1. Hero + CTA (Zapytaj o termin / Zobacz ofertę / Zadzwoń)
2. Propozycja wartości („KŁOSY w kilku słowach")
3. Interaktywne zakładki ofertowe (Obiady · Komunie/Chrzciny · Wesela · Rocznice/Rodzinne · Catering · Grupy szkolne)
4. „Zorganizuj przyjęcie w KŁOSACH"
5. Mini-konfigurator wydarzenia (5 kroków → formularz)
6. Galeria (filtry: Jedzenie/Sala/Komunie/Catering/Dekoracje/Menu)
7. Menu dnia / kuchnia
8. Misja (Fundacja — wyważona, nie dominująca)
9. FAQ (akordeon, answer-friendly)
10. Kontakt + mapa + formularz

**Podstrony SEO** (każda: 1×H1, H2/H3, 700–1200 słów gdzie ma sens, FAQ, CTA, linki wewn., JSON-LD, frazy lokalne).

---

## 4. Kolejność prac (milestones) — patrz PLAN_REALIZACJI.md

Audyt → fundament techniczny → design system → treści (z placeholderami) → komponenty/sekcje → SEO/schema → analityka/formularz → QA → deployment.

---

## 5. Źródła do ręcznego uzupełnienia
- **Facebook** (ściana logowania) — właściciel powinien wskazać posty/zdjęcia do wykorzystania.
- **Menu PDF** — brak publicznego linku.
- **Zdjęcia** — wymagana zgoda na wykorzystanie (patrz PHOTO_REQUIREMENTS.md).

---

## 6. Lista [DO POTWIERDZENIA z właścicielem]
- [ ] Telefon kontaktowy (509 068 888?)
- [ ] E-mail formularza (restauracjaklosy.pl vs czlowiekwpotrzebie.org)
- [ ] Atlas Tower, 5. piętro — potwierdzenie
- [ ] Liczba miejsc / maksymalna liczba gości na przyjęcie
- [ ] Aktualne ceny / pakiety menu (komunie, wesela)
- [ ] Godziny otwarcia / godziny kontaktu
- [ ] Zgody na zdjęcia + aktualne zdjęcia sali/dań
- [ ] Linki: Pyszne / Glovo / Instagram / Google Maps
- [ ] Polityka prywatności
- [ ] ID: GTM / GA4 / Meta Pixel / Google Ads
- [ ] Webhook formularza (Make/Zapier/Resend)
