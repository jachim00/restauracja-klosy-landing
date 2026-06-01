# PHOTO_REQUIREMENTS.md — Restauracja KŁOSY (Agent 7)

## Zasada praw do zdjęć
- Używamy WYŁĄCZNIE zdjęć, do których restauracja ma prawa (własne / z oficjalnych kanałów za zgodą).
- NIE pobieramy zdjęć z przypadkowych portali.
- Każde użyte zdjęcie → wpis w tabeli „Źródła" poniżej + potwierdzona zgoda.

## Status
Na moment audytu (2026-06-01) brak pobranych zdjęć — Facebook za ścianą logowania, na stronie brak galerii o jasnym statusie praw. **Wymagane dostarczenie zdjęć przez właściciela** lub zgoda na pobranie z oficjalnych kanałów.

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

## Źródła użytych zdjęć (do uzupełniania)
| Plik | Źródło | Prawa / zgoda | Data |
|------|--------|----------------|------|
| — | — | — | — |
