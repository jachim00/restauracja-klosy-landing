# PHOTO_REQUIREMENTS.md — Restauracja KŁOSY (Agent 7)

## Zasada praw do zdjęć
- Używamy WYŁĄCZNIE zdjęć, do których restauracja ma prawa (własne / z oficjalnych kanałów za zgodą).
- NIE pobieramy zdjęć z przypadkowych portali.
- Każde użyte zdjęcie → wpis w tabeli „Źródła" poniżej + potwierdzona zgoda.

## Status
2026-06-01: właściciel dostarczył **24 pliki** (23 zdjęcia restauracji + 1 grafika AI). 23 zdjęcia przeanalizowano wzrokowo, opisano pod SEO (alt) i wpięto na stronę (hero, zakładki ofertowe, galeria). Grafika AI (`ChatGPT Image...`) odrzucona — za niska rozdzielczość (~232 px).

> ⚠️ **Do potwierdzenia z właścicielem:** prawa/zgody na publikację tych 23 zdjęć (zakładamy, że pochodzą z materiałów restauracji / jej profilu FB i klient ma do nich prawa). Oryginały w `_DO-ANALIZY/` (gitignored), wersje robocze (.jpg) w folderach kategorii. Docelowo warto przekonwertować do WebP/AVIF — obecnie serwuje je `next/image` (konwersja w locie na Vercel).

## Mapowanie zdjęć na stronę (23 szt.)
- **Hero (tło):** `interior/wnetrze-sala-lampy.jpg` (preload).
- **Zakładki ofertowe:** obiady→`food/obiad-golonka`, komunie→`communions/stol-komunijny-girlanda`, wesela→`events/stol-bankietowy`, rodzinne→`interior/sala-kameralna-kwiaty`, catering→`catering/catering-bufet-caprese`, grupy→`food/obiad-kurczak-makaron`.
- **Galeria (filtry):** Jedzenie (6: pierogi, kaczka, golonka, pieczeń, kurczak, tagliatelle), Sala (4), Komunie (3), Catering (4), Dekoracje (2), Na wynos (4: owsianki/desery).
- **OG image:** `catering/catering-bufet-caprese.jpg`.
- Pełne `alt`-y SEO: w `content/gallery.ts` i `content/offer-tabs.ts`.

## Struktura folderów
```
public/assets/restauracja-klosy/
  original/     # oryginały (nieskompresowane)
  optimized/    # WebP/AVIF po kompresji
  hero/ food/ interior/ events/ communions/ catering/ icons/
```

## Wymagania techniczne
- Format docelowy: WebP/AVIF; hero dodatkowo z `priority`/preload.
- Pozostałe: lazy-load.
- Nazwy bez polskich znaków (`sala-komunia.webp`, `obiad-dnia.webp`).
- `alt` opisowy pod SEO (frazy naturalne).

## Lista zdjęć do wykonania / dostarczenia
| Kategoria | Ujęcie | Plik (proponowany) | Użycie |
|-----------|--------|--------------------|--------|
| hero | nakryty rodzinny stół w restauracji | `hero/hero-stol.webp` | Hero |
| communions | sala przygotowana pod komunię | `communions/sala-komunia.webp` | zakładka/podstrona |
| events | sala pod rocznicę / urodziny | `events/sala-rocznica.webp` | zakładka/podstrona |
| food | zbliżenie dań obiadowych | `food/obiad-dnia.webp` | oferta/menu |
| food | deska serów / przystawki | `food/przystawki.webp` | menu/catering |
| catering | catering firmowy | `catering/catering-firmowy.webp` | zakładka/podstrona |
| interior | widok na salę | `interior/sala-widok.webp` | o nas/galeria |
| interior | wejście / lokalizacja Atlas Tower | `interior/wejscie-atlas-tower.webp` | kontakt |
| events | zespół / obsługa | `events/zespol.webp` | o nas |
| icons/detale | kłosy, kwiaty, świece, zastawa, drewno | `food/detale-*.webp` | dekoracyjne |

## Źródła użytych zdjęć
| Pliki | Źródło | Prawa / zgoda | Data |
|-------|--------|----------------|------|
| 23 zdjęcia (food/interior/events/communions/catering) | Materiały restauracji / profil FB Restauracji KŁOSY (dostarczone przez właściciela) | **[DO POTWIERDZENIA: zgoda/prawa do publikacji]** | 2026-06-01 |
| `ChatGPT Image 24 maj 2026...png` | Grafika AI | Odrzucona (zbyt niska rozdzielczość) | 2026-06-01 |
