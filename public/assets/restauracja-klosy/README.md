# Zdjęcia i grafiki — Restauracja KŁOSY

## 📥 Gdzie wrzucić zdjęcia (najprościej)

Wrzuć **surowe zdjęcia** (jak są, dowolny format/nazwa) do:

```
public/assets/restauracja-klosy/_DO-ANALIZY/
```

To „skrzynka wejściowa". Po wrzuceniu napisz mi „przeanalizuj zdjęcia" — wtedy:
1. obejrzę każde zdjęcie,
2. przypiszę kategorię (hero / food / interior / events / communions / catering),
3. napiszę **opis SEO (alt)** po polsku, dopasowany do treści strony,
4. zaproponuję optymalizację do **WebP/AVIF** i docelową nazwę bez polskich znaków,
5. podstawię je w odpowiednie miejsca w kodzie (hero, zakładki ofertowe, galeria),
6. zapiszę źródło/zgody w `docs/PHOTO_REQUIREMENTS.md`,
tak aby cała koncepcja wizualna była spójna.

> Możesz też od razu wrzucać do folderów kategorii poniżej — ale `_DO-ANALIZY` jest wygodniejsze, bo nie musisz nic nazywać ani sortować.

## 📁 Mapa folderów (docelowe miejsca)

| Folder | Co tu trafia |
|--------|--------------|
| `_DO-ANALIZY/` | **skrzynka wejściowa** — surowe zdjęcia do obróbki |
| `original/` | oryginały (kopia źródłowa, nieskompresowana) |
| `optimized/` | wersje WebP/AVIF gotowe na stronę |
| `hero/` | główne zdjęcie nagłówka (nakryty stół / sala) |
| `food/` | dania, obiady, przystawki |
| `interior/` | sala, wnętrze, wejście (Atlas Tower) |
| `events/` | przyjęcia: rocznice, urodziny, spotkania |
| `communions/` | komunie i chrzciny |
| `catering/` | catering firmowy/prywatny |
| `icons/` | ikony, drobne grafiki, logo |

## 🖼️ Nazwy plików, których oczekuje już kod (do podmiany placeholderów)

Strona główna / zakładki ofertowe (`content/offer-tabs.ts`):
- `food/obiad-dnia.webp`
- `communions/sala-komunia.webp`
- `events/wesele-kameralne.webp`
- `events/spotkanie-rodzinne.webp`
- `catering/catering-firmowy.webp`
- `food/obiad-grupa.webp`

Hero (proponowane): `hero/hero-stol.webp`
Galeria: nazwy zdefiniowane w `content/gallery.ts` (15 pozycji w 6 kategoriach).

> Nie musisz trzymać się tych nazw — jeśli wrzucisz do `_DO-ANALIZY`, dopasuję nazwy i ścieżki w kodzie sam.

## ⚙️ Wymagania techniczne
- Docelowo **WebP/AVIF**, hero dodatkowo z `priority`/preload, reszta `lazy`.
- Nazwy plików **bez polskich znaków i spacji** (np. `sala-komunia.webp`).
- Każde zdjęcie dostaje opisowy `alt` (SEO) — robię to przy analizie.
- ⚠️ Używamy tylko zdjęć, do których restauracja ma prawa (patrz `docs/PHOTO_REQUIREMENTS.md`).
