# AUDYT DESIGN — Restauracja KŁOSY

**Autor:** Karol (performance marketing · CRO · art direction)
**Data:** 2026-06-01
**Zakres:** głęboki audyt designu + system wizualny + 14 wdrażalnych pomysłów (CSS/SVG only, bez psucia CWV)
**Stack:** Next.js 15 (export statyczny, GitHub Pages), Tailwind, `next/image` w trybie `unoptimized`, animacje CSS (Framer usunięty), `prefers-reduced-motion` respektowane globalnie.
**Materiał wizualny przeanalizowany wzrokowo:** hero-caprese, wnetrze-sala-lampy, pieczona-kaczka, stol-komunijny-girlanda, stol-bankietowy.

---

## 0. Diagnoza w jednym zdaniu

Strona jest **technicznie poprawna i czysta**, ale wizualnie **bezpieczna i generyczna** — wygląda jak dobry szablon „restauracja/usługi lokalne", a nie jak miejsce z konkretną duszą. Tymczasem realne zdjęcia (ciepłe kopułowe lampy, drewno, len, świece, polne kwiaty) zdradzają, że KŁOSY mają **bardzo silny, niewyeksploatowany kapitał nastroju**. Cały audyt sprowadza się do jednego: **przestać tłumić te zdjęcia neutralnym szablonem, a zacząć budować wokół nich spójny, rozpoznawalny system.**

### Co realnie pokazują zdjęcia (fakty, nie życzenia)

- **Wnętrze (`wnetrze-sala-lampy`):** mocne, czarno-złote kopułowe lampy rzucające **bursztynowe światło**, drewniana podłoga, bielone krzesła w stylu farmhouse (krzyż w oparciu), ściana z kamienia, palma, drewniane przesuwne drzwi. To jest najmocniejszy asset marki — kameralny, ciepły, „wiejski dom w mieście". Aktualnie **w ogóle nie jest bohaterem strony** (leży w zakładce „rodzinne").
- **Stół komunijny (`stol-komunijny-girlanda`):** białe obrusy, **łososiowe (clay/peach) serwetki składane w wachlarz**, świeże polne kwiaty (biały + róż), girlanda lampek (bokeh), drewniane deski do podania. Naturalna, ciepła oprawa — dokładnie brief.
- **Stół bankietowy (`stol-bankietowy`):** długi stół, świece słupkowe, czerwono-zielone serwetki, kryształowe szklanki, ściana w stylu góralskiej chaty z ramkami. Klimat „wigilijnej kolacji u rodziny".
- **Kaczka (`pieczona-kaczka`):** danie na **talerzu we wzór floral/transferware** na kwiecistym obrusie, jadalny kwiat bratka. Autentyczne, „babcine", ale foto-amatorskie (telefon, płaskie światło).
- **Hero-caprese:** bufet z góry — kolorowy, apetyczny, ale **chaotyczny kompozycyjnie** i z zimnym, sztucznym światłem; najmniej „markowe" ze wszystkich, a paradoksalnie zrobione hero.

**Wniosek art-direction:** najsilniejszy materiał (wnętrze z lampami, stół komunijny, świece) jest schowany, a najsłabszy (płaski bufet) jest twarzą strony. To pierwszy błąd do naprawienia.

---

## 1. WIZJA PRZEWODNIA (art direction)

### Nazwa kierunku: **„Ostatnie światło dnia" (Golden Hour we wnętrzu)**

Jeden, spójny koncept: **bursztynowe światło kopułowych lamp KŁOSÓW jako sygnatura marki.** Wszystko — paleta, gradient hero, tinty zdjęć, dividery, hover — wynika z jednego fizycznego źródła, które klient już ma na sali. To nie jest abstrakcyjny mood „natura/premium"; to **rekonstrukcja konkretnego wrażenia: wchodzisz z szarej Al. Jerozolimskich do ciepłego, złotego wnętrza pachnącego obiadem.**

Trzy filary systemu (każdy = realna tekstura, nie ozdobnik):

1. **ŚWIATŁO (wheat gold → amber glow).** Sygnaturowy element: miękka, eliptyczna poświata „spod lampy" (radial-gradient w `wheat`/`clay`) pojawiająca się za nagłówkami i kartami. To zamienia płaski beż w „oświetloną scenę".
2. **ZIARNO I LEN (tekstura).** Subtelny szum/grain (SVG `feTurbulence`, 2–4% opacity) na sekcjach `cream`/`linen` — papier, len obrusu, łuska zboża. Likwiduje „cyfrową płaskość" Tailwinda. Plus realny motyw kłosa jako jedyna ilustracja brandowa (już jest `WheatDivider` i `WheatPattern` — do rozwinięcia w pełny system).
3. **CIEMNY LAS (forest dark mode).** Sekcje `forest` (#26351F) jako „wieczór" — przerywniki kontrastu między jasnymi sekcjami, z bursztynowym światłem i kłosami. Już używane w hero/CTA/footer, ale jako płaska zieleń; do wzbogacenia o głębię (gradient + grain + glow).

**Reguła nadrzędna systemu:** *każda sekcja jest albo „dzień" (cream/linen + grain + glow), albo „wieczór" (forest + amber glow + wheat). Rytm dzień→wieczór→dzień prowadzi przez stronę jak światło prowadzi przez kolację.* To daje rozpoznawalność, której teraz brak.

**Czego NIE robimy (granice marki):** zero glamour/złotego marmuru, zero ciemnego „fine dining" z czarnym tłem i serif w stylu steakhouse, zero stockowych „rodzin przy stole". Ciepło ma być **naturalne i domowe**, nie luksusowe.

---

## 2. AUDYT SEKCJA PO SEKCJI

### HERO (`components/sections/Hero.tsx`)
- **Działa:** czysta kompozycja, CSS `fade-up` ze stagger (delay 60/120/180ms) — elegancko i tanio; potrójny gradient + `mix-blend-multiply` ładnie wtapia zdjęcie w zieleń; `WheatPattern` (sway) to dobry zalążek brandu; CTA hierarchia (1 dominant wheat + 2 outline) zgodna z CRO.
- **Słabe:**
  1. **Złe zdjęcie hero.** `hero-caprese` (płaski bufet, zimne światło, brak focal pointu) to najsłabszy asset. Łamie zasadę „hero = emocja/pierwsze wrażenie".
  2. `WheatPattern` schowany `-right-10` przy `text-wheat/15` — praktycznie niewidoczny, marnuje się jedyny brandowy element.
  3. Brak głębi — gradient jest liniowy i „płaski", nie ma sygnaturowego „światła spod lampy".
  4. `min-h-[78vh]` + treść `justify-center` — na mobile CTA wpada poza thumb-zone, dużo pustej zieleni u góry.
- **Propozycja:** zmiana zdjęcia na `wnetrze-sala-lampy` (lampy = sygnatura) lub `stol-komunijny-girlanda`; dodanie amber-glow radial za nagłówkiem; wzmocnienie i przeniesienie kłosów; lekki parallax-lite na grain. (Patrz pomysły #1, #2, #3.)

### „KŁOSY w kilku słowach" (value prop, `app/page.tsx`)
- **Działa:** konkret zamiast ogólników (zgodnie z briefem), dobra siatka 2×2 kafelków.
- **Słabe:** wizualnie martwa — 2 akapity + 4 identyczne kafelki na białym. Brak zdjęcia, brak tekstury, brak hierarchii. To pierwsza sekcja po hero i „gaśnie".
- **Propozycja:** grain na tle, „światło" za nagłówkiem, kafelki z ikoną kłosa + hover-lift; ewentualnie wpleść jedno pionowe zdjęcie wnętrza. (Pomysł #6, #11.)

### Zakładki ofertowe (`OfferTabs.tsx`)
- **Działa:** dobra mechanika (tablist, scroll na mobile, `key`-remount = fade), poprawny `aria-selected`, czytelne benefity z checkami.
- **Słabe:** karta po zmianie zakładki jest statyczna — zdjęcie 4:3 + tekst, zero „życia". Aktywna pigułka `olive` jest OK, ale nieaktywne są bardzo szare. Obraz nie ma żadnego tintu/ramki spójnej z systemem.
- **Propozycja:** duotone/tint zdjęć w palecie, ramka „passe-partout" (len), subtelny zoom na hover, animowany underline aktywnej zakładki. (Pomysł #4, #7.)

### Konfigurator wydarzenia (`EventConfigurator.tsx`)
- **Działa:** **najlepszy element konwersyjny strony** — 5 kroków, progressbar, walidacja, przekazanie parametrów do formularza. Mechanicznie dojrzały.
- **Słabe:** wizualnie to „formularz SaaS" — biała karta, olive progressbar, szare bordery. Kompletnie odklejony od ciepłego, restauracyjnego klimatu. Ikony lucide (cienkie, techniczne) kłócą się z naturą/drewnem.
- **Propozycja:** progressbar jako „rosnący kłos"/wypełniany ziarnem, tło karty `cream` + grain zamiast czystej bieli, stany `selected` z amber-glow zamiast zimnego ringu, mikro-„sway" na wybranej ikonie. (Pomysł #8.)

### „Jak wygląda organizacja przyjęcia?" (5 kroków)
- **Działa:** klarowny proces 1→5, dobry na trust/CRO.
- **Słabe:** 5 białych kartek z żółtym kółkiem-numerem na `linen/40`. Numery w `bg-wheat` z `font-serif` to jedyny akcent. Brak linii łączącej kroki (nie czytamy tego jako „ścieżki").
- **Propozycja:** połączyć kroki cienką, falującą linią-łodygą (SVG, dekoracyjna), numery w stylu „pieczątki", scroll-reveal sekwencyjny. (Pomysł #9.)

### Galeria (`Gallery.tsx`)
- **Działa:** solidny lightbox (Esc/strzałki, scroll-lock, focus), filtry, lazy-load, `group-hover:scale-105`. Funkcjonalnie bardzo dobra.
- **Słabe:** sztywna siatka samych kafli 4:3 — monotonna, „katalogowa". Nie oddaje, że to **miejsce z klimatem**. Brak rytmu (wszystko równe). Etykieta kategorii to drobny olive tekst — ginie.
- **Propozycja:** masonry-lite / mozaika z kilkoma kafelkami 2×wysokość lub 2×szerokość, hover z amber-glow i podniesieniem podpisu, opcjonalnie jedno duże „bohaterskie" zdjęcie wnętrza. (Pomysł #10.)

### FAQ (`Faq.tsx`)
- **Działa:** elegancki accordion na `grid-rows-[0fr→1fr]` (animacja wysokości bez JS-measure, świetne dla CWV), `aria-expanded` OK.
- **Słabe:** bardzo surowy — biała karta, plus/minus. Neutralny do bólu.
- **Propozycja:** subtelny kłos jako marker zamiast +/−, hover-tint wiersza, „papierowe" tło. (Pomysł #12 — drobny.)

### Końcowe CTA (forest band)
- **Działa:** dobry kontrast, pojedyncze dominujące CTA.
- **Słabe:** płaska zieleń, brak światła/kłosów — nie korzysta z „dark mode" jako momentu wow. Wygląda jak zwykły pasek.
- **Propozycja:** forest + amber radial-glow + duży, przycięty kłos w rogu + grain = „wieczorny" akcent domykający stronę. (Pomysł #5.)

### Podstrony edytorskie (`PageHero`, `EditorialSplit`, `FactsBand`, `PhotoStrip`, `WheatDivider`) — na przykładzie `catering`
- **Działa:** dojrzała architektura edytorska — naprzemienne bloki, pasek faktów, taśma zdjęć ze `snap-x` (bez JS!), `<details>` dla FAQ (zero JS), `WheatDivider`. Bardzo dobra robota strukturalna.
- **Słabe:**
  1. `PageHero` `min-h-[52vh]` + treść `justify-end` — dobre, ale znów płaski gradient bez światła.
  2. `EditorialSplit` ma jeden dekoracyjny `rounded-full border-wheat/50` w rogu — to za mało i przypadkowe; brak spójnego „passe-partout".
  3. `FactsBand` — `value` bywa długim tekstem („Catering z dostawą") zamiast liczby; traci charakter „licznika". Wizualnie płaski.
  4. `WheatDivider` jest ładny, ale **mały i pojedynczy** — niewykorzystany potencjał na pełnowymiarowy, kłosowy separator-fala.
  5. `PhotoStrip` (snap) świetny technicznie, ale kafelki 3:4 bez tintu/ramki — znów „katalog".
- **Propozycja:** wspólny system tintu + ramki + glow zastosowany do wszystkich tych komponentów (jedna zmiana → spójność na wszystkich podstronach). (Pomysły #4, #7, #5, #9.)

### Nawigacja / Footer / MobileCtaBar
- **Działa:** sticky navbar z `backdrop-blur`, logotyp „KŁOSY" serif, mobilny pasek CTA 3-przyciskowy (Zadzwoń/Napisz/Zapytaj) — bardzo dobre dla konwersji lokalnej, thumb-zone OK.
- **Słabe:** logo to czysty tekst — brak choćby minimalnego znaku kłosa; navbar `cream/90` jest neutralny; brak stanu „aktywna strona".
- **Propozycja:** mały SVG-kłos przy logotypie, podkreślenie aktywnego linku łodygą, MobileCtaBar z subtelnym top-glow. (Pomysł #2 rozszerzony, drobne.)

---

## 3. 14 KONKRETNYCH POMYSŁÓW WIZUALNYCH (wdrażalne, CSS/SVG only)

> Format: **Sekcja → Problem → Propozycja → Jak wdrożyć**
> Wszystkie kompatybilne z `prefers-reduced-motion` (globalny guard już jest) i nie obciążają wątku głównego (czyste CSS/SVG, zero JS runtime).

---

### POMYSŁ #1 — Zmiana zdjęcia hero na sygnaturowe wnętrze
**Sekcja:** Hero
**Problem:** `hero-caprese` (płaski bufet, zimne światło) jest najsłabszym, najmniej markowym assetem — a robi za twarz całej marki.
**Propozycja:** Hero = `wnetrze-sala-lampy` (bursztynowe lampy = sygnatura „Golden Hour") lub `stol-komunijny-girlanda` (ciepło + kwiaty + bokeh lampek). Bufet przenieść do galerii/cateringu.
**Jak wdrożyć:** zmiana jednej ścieżki w `Hero.tsx`:
```tsx
src={assetPath("/assets/restauracja-klosy/interior/wnetrze-sala-lampy.jpg")}
```
Zdjęcie jest pionowe (720×900) — dla hero 16:9 desktop dorobić kadr poziomy lub użyć `object-position: center 35%`, by złapać lampy + salę. Mobile (9:16) i tak zyskuje, bo wnętrze jest pionowe. Waga 238KB — pod limit po konwersji.
**Effort:** Quick win.

---

### POMYSŁ #2 — Sygnatura „światło spod lampy" (amber glow) za nagłówkami
**Sekcja:** Hero + nagłówki sekcji (cały system)
**Problem:** gradienty są liniowe i płaskie; brak elementu, który spina markę i daje wrażenie „oświetlonej sceny".
**Propozycja:** miękka, eliptyczna poświata w `wheat`/`clay` za H1/H2 i w hero. To wizualny „podpis" całej strony — wynika wprost z lamp na zdjęciu.
**Jak wdrożyć:** utility w `globals.css`:
```css
@layer utilities {
  .glow-amber {
    position: relative;
  }
  .glow-amber::before {
    content: "";
    position: absolute;
    inset: -20% -10% auto -10%;
    height: 120%;
    background: radial-gradient(60% 80% at 50% 20%,
      rgba(201,154,58,0.28), rgba(184,121,82,0.10) 45%, transparent 70%);
    filter: blur(8px);
    z-index: 0;
    pointer-events: none;
  }
}
```
W hero dodać `<div className="glow-amber absolute inset-0" aria-hidden />` nad zdjęciem, pod tekstem. Dla sekcji `forest` wariant mocniejszy (opacity 0.4). Zero JS, zero CLS (absolutny, pod treścią).
**Effort:** Quick win.

---

### POMYSŁ #3 — Tekstura ziarna/lnu (film grain SVG) na sekcjach jasnych
**Sekcja:** wszystkie `cream`/`linen` + `forest`
**Problem:** płaskie wypełnienia kolorem = „cyfrowa płaskość", brak związku z teksturą lnu/papieru/zboża z briefu.
**Propozycja:** globalny, ultralekki grain overlay (2–4% opacity), inline SVG `feTurbulence` (≈0.3KB, bez requestu sieciowego).
**Jak wdrożyć:** komponent `components/ui/GrainOverlay.tsx`:
```tsx
export function GrainOverlay() {
  return (
    <svg aria-hidden className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.035] mix-blend-multiply">
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter>
      <rect width="100%" height="100%" filter="url(#grain)"/>
    </svg>
  );
}
```
Wstawić raz w `layout.tsx` (przed `<main>`). Na `forest` grain z `mix-blend-overlay opacity-[0.06]`. `fixed` = brak repaintu przy scrollu poza kompozytorem.
**Effort:** Quick win.

---

### POMYSŁ #4 — Duotone / ciepły tint zdjęć w palecie marki
**Sekcja:** OfferTabs, EditorialSplit, PhotoStrip, Gallery (kafle)
**Problem:** zdjęcia są foto-amatorskie o **niespójnej temperaturze barwowej** (bufet zimny, kaczka ciepła, wnętrze bursztynowe). Na jednej stronie wygląda to chaotycznie.
**Propozycja:** ujednolicić wszystkie zdjęcia ciepłym tintem przez nakładkę `forest`/`wheat` z `mix-blend` + delikatny `sepia`/`saturate` filtr. To „markuje" nawet słabe zdjęcia i spina je w jeden klimat.
**Jak wdrożyć:** utility:
```css
@layer utilities {
  .img-warm { filter: saturate(1.05) contrast(1.03) sepia(0.06); }
  .tint-frame { position: relative; }
  .tint-frame::after {
    content:""; position:absolute; inset:0;
    background: linear-gradient(180deg, transparent 55%, rgba(38,53,31,0.18));
    mix-blend-mode: multiply; pointer-events:none;
  }
}
```
Na `<Image className="object-cover img-warm">` i wrapper `tint-frame`. Hover: `group-hover:[filter:saturate(1.12)]`. Konsystencja temperatur natychmiast rośnie.
**Effort:** Quick win → Średni (przejść po komponentach).

---

### POMYSŁ #5 — „Wieczorny" forest band z światłem + przyciętym kłosem
**Sekcja:** końcowe CTA (home) + CTA na podstronach
**Problem:** forest band jest płaski; marnuje moment „wow" na zamknięciu strony.
**Propozycja:** głębia wieczoru — forest gradient + amber-glow od dołu (jak łuna lampy) + duży, częściowo przycięty SVG-kłos w rogu, lekko kołyszący się (`animate-sway`).
**Jak wdrożyć:** w sekcji CTA:
```tsx
<section className="relative overflow-hidden bg-forest text-cream">
  <div aria-hidden className="absolute inset-0
    bg-[radial-gradient(70%_60%_at_50%_120%,rgba(201,154,58,0.30),transparent_70%)]" />
  <WheatPattern className="absolute -right-8 -bottom-8 h-[140%] w-auto text-wheat/10 animate-sway" />
  {/* ...treść z relative z-10... */}
</section>
```
Reużywa istniejący `WheatPattern` z Hero (wydzielić do `components/ui/WheatPattern.tsx`).
**Effort:** Quick win.

---

### POMYSŁ #6 — Typografia: skala, kontrast, akcenty (display vs body)
**Sekcja:** globalnie (H1–H3, eyebrow, liczby)
**Problem:** Sora (display) i Manrope (body) są poprawne, ale **typografia nie ma charakteru** — wszystkie H mają podobny ciężar, brak kontrastu skali, eyebrow `uppercase tracking-wide` jest standardowe. „Ładnie, ale jak każdy szablon."
**Propozycja:**
1. Mocniejszy kontrast skali: H1 hero do `clamp(2.4rem, 6vw, 4.25rem)`, ciaśniejszy `leading` i `tracking-tight` na display, `font-weight: 700`.
2. Akcent: jedno słowo w H1/H2 w `text-wheat` lub `italic` (np. „Domowa **kuchnia** i przyjęcia").
3. Eyebrow z drobnym znakiem kłosa zamiast samego uppercase.
4. Liczby w `FactsBand` z `font-feature-settings: "tnum"` i większą skalą.
**Jak wdrożyć:** w `tailwind.config.ts` dodać `letterSpacing`/`fontSize` clamp tokeny; w `globals.css`:
```css
@layer base {
  h1,h2 { letter-spacing: -0.02em; }
  .display-xl { font-size: clamp(2.4rem,6vw,4.25rem); line-height:1.05; font-weight:700; }
  .num { font-feature-settings:"tnum","lnum"; }
}
```
Akcent w JSX: `Domowa <span className="text-wheat">kuchnia</span>...`.
**Effort:** Średni.

---

### POMYSŁ #7 — „Passe-partout" — spójna ramka edytorska zdjęć
**Sekcja:** EditorialSplit, OfferTabs, PageHero (na podstronach)
**Problem:** zdjęcia „pływają" z różnymi przypadkowymi akcentami (jeden `rounded-full border-wheat` w rogu EditorialSplit). Brak systemu.
**Propozycja:** jedna, rozpoznawalna oprawa: cienka linenowa ramka z offsetowym „cieniem-podkładem" w `wheat/clay` (jak passe-partout w obrazie / drewniana deska do serwowania ze zdjęć).
**Jak wdrożyć:**
```tsx
<div className="relative">
  <span aria-hidden className="absolute -inset-2 rounded-[1.5rem] bg-wheat/15 -z-10" />
  <div className="relative aspect-[4/3] overflow-hidden rounded-card ring-1 ring-linen shadow-soft tint-frame">
    <Image ... className="object-cover img-warm" />
  </div>
</div>
```
Zastąpić obecny przypadkowy `rounded-full` border. Jeden wzorzec → wszystkie zdjęcia wyglądają „skomponowane".
**Effort:** Średni.

---

### POMYSŁ #8 — Konfigurator: progressbar jako „rosnący kłos" + ciepłe stany
**Sekcja:** EventConfigurator
**Problem:** najważniejszy element konwersji wygląda jak formularz SaaS — zimny, odklejony od marki.
**Propozycja:**
1. Tło karty `cream` + grain zamiast czystej bieli; ring `selected` zmienić z zimnego `ring-olive/40` na ciepły amber-glow.
2. Progressbar: zamiast goła olive belka — gradient `olive→wheat` + na końcu drobny SVG-kłos jako „główka" rosnąca z każdym krokiem.
3. Wybrana ikona typu wydarzenia dostaje mikro-`sway` (już mamy keyframe).
**Jak wdrożyć:**
```tsx
<div className="h-2 rounded-full bg-gradient-to-r from-olive to-wheat transition-[width] duration-500 ease-out"
     style={{ width: `${progressPct}%` }} />
```
Stan selected: `... selected ? "border-wheat bg-wheat/10 shadow-[0_0_0_3px_rgba(201,154,58,0.25)]" : ...`.
Ikona: `<Icon className={cn(selected && "animate-sway")} />`.
**Effort:** Średni.

---

### POMYSŁ #9 — Scroll-reveal sekwencyjny + „łodyga" łącząca kroki (CSS only)
**Sekcja:** „Jak organizujemy" (5 kroków), karty ofert/cateringu
**Problem:** wszystkie elementy pojawiają się naraz (lub statycznie); brak prowadzenia wzroku. Kroki nie czytają się jako ścieżka.
**Propozycja:** wejście kart sekwencyjnie podczas scrolla (`animation-timeline: view()` — natywny scroll-driven CSS, zero JS, zero biblioteki) + cienka, falująca pionowa/pozioma linia-łodyga łącząca numery.
**Jak wdrożyć:** scroll-driven (z fallbackiem dla starszych — degraduje do widoczności):
```css
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .reveal { animation: fade-up linear both; animation-timeline: view(); animation-range: entry 0% cover 25%; }
  }
}
```
Linia: SVG `<path>` (krzywa Béziera) za kartami, `stroke-dasharray` „rosnący" przez ten sam scroll-timeline. `view()` jest wspierane w Chrome/Edge/Safari TP; brak wsparcia = element po prostu widoczny (graceful).
**Effort:** Większa przebudowa (warto — to efekt „wow" bez kosztu CWV).

---

### POMYSŁ #10 — Galeria: mozaika (masonry-lite) zamiast równej siatki
**Sekcja:** Gallery (home) + sekcje galerii podstron
**Problem:** identyczne kafle 4:3 = monotonia „katalogu", nie oddaje klimatu miejsca.
**Propozycja:** rytm — kilka kafelków zajmuje `row-span-2`/`col-span-2` (duże „bohaterskie" wnętrze + portretowe dania), reszta normalnie. Hover: amber-glow + podpis wjeżdżający od dołu.
**Jak wdrożyć:** CSS grid z gęstym upakowaniem (zero JS, w przeciwieństwie do JS-masonry):
```tsx
<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 [grid-auto-rows:11rem] [grid-auto-flow:dense]">
  {items.map((it,i) => (
    <button className={cn("relative overflow-hidden rounded-card tint-frame",
      i % 5 === 0 && "row-span-2", i % 7 === 0 && "col-span-2")}>...</button>
  ))}
</div>
```
Podpis na hover: `translate-y-full group-hover:translate-y-0 transition`.
**Effort:** Średni.

---

### POMYSŁ #11 — Pełnowymiarowy „kłosowy" separator-fala między sekcjami
**Sekcja:** przejścia dzień↔wieczór (cream→forest i odwrotnie)
**Problem:** sekcje stykają się twardą, prostą krawędzią; `WheatDivider` jest mały i pojedynczy. Brak miękkiego, organicznego rytmu z briefu.
**Propozycja:** SVG-fala (łagodny `path`) jako górna/dolna krawędź sekcji forest, z rozsianymi drobnymi kłosami na grzbiecie fali. Robi „pole zboża na horyzoncie o zmierzchu".
**Jak wdrożyć:** komponent `SectionWave` (inline SVG, `fill="currentColor"` = kolor sąsiedniej sekcji):
```tsx
<div aria-hidden className="text-forest -mb-px leading-[0]">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full sm:h-20">
    <path fill="currentColor" d="M0,40 C240,80 480,0 720,32 C960,64 1200,8 1440,40 L1440,80 L0,80 Z"/>
  </svg>
</div>
```
Na grzbiecie dorzucić 3–4 mini-kłosy z `WheatDivider`. Skala odpowiedzialna, `preserveAspectRatio="none"`.
**Effort:** Średni.

---

### POMYSŁ #12 — Mikrointerakcje i detale (hover, kłos jako marker, focus)
**Sekcja:** FAQ, przyciski CTA, linki nav, karty
**Problem:** hovery są jednorodne (`scale-[1.03]` wszędzie), FAQ marker to generyczny +/−, brak „charakteru" w detalu.
**Propozycja (pakiet drobnych):**
1. FAQ: zamiast +/− — obracający się kłos/strzałka-łodyga (`rotate-180` na open).
2. CTA wheat: na hover delikatny „glow" zamiast samego scale: `hover:shadow-[0_8px_30px_-6px_rgba(201,154,58,0.6)]`.
3. Linki nav: animowany underline „rosnący" (`bg-wheat` `scale-x-0→100` od lewej).
4. Aktywny link nav: stała łodyga-podkreślenie.
5. Focus-visible już jest dobry (`ring-wheat`) — zostawić.
**Jak wdrożyć:** czyste utility/Tailwind, np. underline:
```tsx
<Link className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
  after:origin-left after:scale-x-0 after:bg-wheat after:transition-transform hover:after:scale-x-100">
```
**Effort:** Quick win (każdy z osobna).

---

### POMYSŁ #13 — Logotyp ze znakiem kłosa + favicon/OG spójne
**Sekcja:** Navbar, Footer, favicon, OG image
**Problem:** „KŁOSY" to czysty tekst; marka nie ma znaku. OG image to przypadkowe zdjęcie cateringu (bufet).
**Propozycja:** mały, ręcznie wektorowy kłos (z `WheatDivider`) przed/nad logotypem — minimalny lockup. Favicon = ten sam kłos na forest. OG image = ciepłe wnętrze z lampami (sygnatura), nie bufet.
**Jak wdrożyć:**
```tsx
<Link href="/" className="inline-flex items-center gap-2 font-serif text-xl font-semibold text-forest">
  <WheatMark className="h-5 w-5 text-wheat" /> KŁOSY
</Link>
```
OG: w `layout.tsx` zmienić `openGraph.images` na `/assets/.../interior/wnetrze-sala-lampy.jpg`. Favicon: wyeksportować kłos do `app/icon.svg` (Next auto-podłącza).
**Effort:** Quick win.

---

### POMYSŁ #14 — Sticky „menu dnia / godziny" jako element zaufania (bez zmyślania danych)
**Sekcja:** Hero / pod-hero (po uzupełnieniu danych przez właściciela)
**Problem:** brak elementów zaufania above-the-fold (godziny, „dziś w menu", lokalizacja-pin) — CRO mówi, że dla local services to kluczowe. **UWAGA: dane są niepełne (`[DO UZUPEŁNIENIA]` w `restaurant-data.ts`) — nie wolno zmyślać godzin/menu.**
**Propozycja:** lekki, „papierowy" pasek pod hero: pin lokalizacji (Ochota / Atlas Tower) + telefon + slot „Menu dnia" (link do `/menu-dnia`). Pole godzin renderować **warunkowo** — tylko gdy uzupełnione, inaczej ukryć (komponent już ma `note: "[DO UZUPEŁNIENIA]"`).
**Jak wdrożyć:** mała listwa `bg-cream/grain` z `ring-linen`:
```tsx
{!restaurant.hours.note.includes("UZUPEŁNIENIA") && (
  <span className="inline-flex items-center gap-2"><Clock size={16}/> {restaurant.hours.note}</span>
)}
```
Bez danych — pokazujemy tylko to, co potwierdzone (adres, telefon, „menu dnia"). Trzyma zasadę „nie zmyślamy".
**Effort:** Średni (i zależny od danych właściciela).

---

## 4. EFEKTY „WOW" BEZ OBNIŻANIA CWV (podsumowanie technik)

Wszystkie poniższe = **CSS/SVG only**, brak JS runtime, brak bibliotek, kompatybilne z `prefers-reduced-motion`:

| Efekt | Technika | Koszt CWV |
|-------|----------|-----------|
| Amber glow „spod lampy" | `radial-gradient` + `::before` | zero (absolutny, pod treścią) |
| Film grain ziarno/len | inline SVG `feTurbulence`, `fixed`, `mix-blend` | ~0.3KB, brak requestu, brak repaintu |
| Scroll-reveal sekwencyjny | `animation-timeline: view()` (natywny) | zero JS; graceful fallback |
| „Rosnąca łodyga" łącząca kroki | SVG `stroke-dasharray` + view-timeline | zero JS |
| Duotone/tint zdjęć | CSS `filter` + `mix-blend` overlay | zero (GPU compositing) |
| Separator-fala z kłosami | inline SVG `path` | ~0.5KB |
| Sway kłosów | istniejący `@keyframes sway` | znikomy, GPU transform |
| Parallax-lite hero grain | `background-attachment` / translate na scroll-timeline | zero JS |
| Hover-glow CTA | `box-shadow` transition | zero |

**Twarda zasada wydajności (z KB `lcp_optimization`):** hero zostaje `priority`/`loading="eager"` + `fetchpriority="high"`; wszystkie nowe efekty są **dekoracyjne i pod treścią** (`-z-10`/`z-0`, `aria-hidden`, `pointer-events-none`), więc **nie stają się elementem LCP i nie powodują CLS**. Grain jako `fixed` nie wywołuje layout/paint przy scrollu.

### Dług techniczny do naprawienia przy okazji (CWV)
- **Brak AVIF/WebP:** wszystkie zdjęcia to JPG, `next/image` w trybie `unoptimized` (GitHub Pages nie ma optymalizatora). Raw FB-pliki w `_DO-ANALIZY/` ważą do **967KB**. Rekomendacja: prebuild przez `scripts/optimize-images.mjs` (sharp) → AVIF q55 + WebP q78 + `<picture>` lub wygenerowane warianty + ręczny `srcset`. To skróci LCP i da budżet na nowe efekty. (Zgodne z KB: AVIF > WebP > mozjpeg, hero ≤200KB.)
- **`hours`, `mapsUrl`, `menuPdf`, ceny** = placeholdery → nie budować na nich elementów zaufania, dopóki klient nie poda.

---

## 5. PRIORYTETYZACJA

| # | Pomysł | Sekcja | Effort | Wpływ wizualny | Wpływ konwersja |
|---|--------|--------|:------:|:--------------:|:---------------:|
| 1 | Zmiana zdjęcia hero na wnętrze z lampami | Hero | **Quick (≤1h)** | ★★★★★ | ★★★★ |
| 2 | Amber-glow „spod lampy" (utility) | global | **Quick** | ★★★★ | ★★ |
| 3 | Film grain ziarno/len (SVG) | global | **Quick** | ★★★★ | ★ |
| 5 | Wieczorny forest band + kłos | CTA | **Quick** | ★★★★ | ★★★ |
| 13 | Logo-kłos + OG = wnętrze | Navbar/OG | **Quick** | ★★★ | ★★ |
| 12 | Mikrointerakcje (underline, glow, FAQ-kłos) | global | **Quick** | ★★★ | ★★ |
| 4 | Duotone/tint zdjęć (spójność temperatur) | foto | **Średni** | ★★★★★ | ★★ |
| 7 | Passe-partout (ramka zdjęć) | edytorskie | **Średni** | ★★★★ | ★★ |
| 6 | Typografia: skala/kontrast/akcent | global | **Średni** | ★★★★ | ★★ |
| 8 | Konfigurator: kłos-progressbar + ciepłe stany | Configurator | **Średni** | ★★★ | ★★★★ |
| 10 | Galeria masonry-lite | Gallery | **Średni** | ★★★★ | ★★ |
| 11 | Separator-fala z kłosami | przejścia | **Średni** | ★★★ | ★ |
| 14 | Pasek zaufania (warunkowy, gdy dane) | Hero | **Średni*** | ★★ | ★★★★ |
| 9 | Scroll-reveal + rosnąca łodyga | „Jak organizujemy" | **Większy** | ★★★★★ | ★★ |
| — | AVIF/WebP pipeline (dług CWV) | infra | **Większy** | — (perf) | ★★ (LCP/QS) |

\* zależny od uzupełnienia danych przez właściciela.

### Rekomendowana ścieżka wdrożenia
1. **Sprint 1 (pół dnia, „dzień i noc różnica"):** #1 + #2 + #3 + #5 + #13. To samo światło + wnętrze + grain + wieczorny band zmienia odbiór z „szablon" na „KŁOSY".
2. **Sprint 2 (spójność foto):** #4 + #7 + #6 — ujednolicenie temperatur zdjęć, ramki, typografia.
3. **Sprint 3 (konwersja + galeria):** #8 + #10 + #12.
4. **Sprint 4 (wow + infra):** #9 + #11 + pipeline AVIF/WebP + #14 (po danych klienta).

---

## TL;DR

**Wizja:** *„Ostatnie światło dnia"* — bursztynowe światło kopułowych lamp KŁOSÓW staje się sygnaturą całej strony; rytm sekcji „dzień" (cream + ziarno/len + glow) ↔ „wieczór" (forest + amber glow + kłosy). Marka, której teraz brak, wynika wprost z realnego, najsilniejszego assetu klienta — wnętrza.

**Top 5 rekomendacji (zacząć od tych):**
1. **Zmień hero** z płaskiego bufetu na ciepłe wnętrze z lampami (`wnetrze-sala-lampy`) — natychmiastowy skok charakteru. *(Quick)*
2. **Dodaj „światło spód lampy"** (amber radial-glow) za nagłówkami i w hero — jeden CSS-utility, sygnatura systemu. *(Quick)*
3. **Nałóż grain (ziarno/len)** na całość — likwiduje cyfrową płaskość, łączy z teksturą briefu, ~0.3KB SVG. *(Quick)*
4. **Ujednolić temperaturę zdjęć** ciepłym tintem/duotone — spina foto-amatorski, niespójny materiał w jeden klimat. *(Quick→Średni)*
5. **Ożyw konfigurator** (najlepszy element konwersji): kłos-progressbar + ciepłe stany zamiast „formularza SaaS". *(Średni)*

Wszystko CSS/SVG, zero nowego JS, zgodne z `prefers-reduced-motion`, bez ryzyka dla Core Web Vitals (dekoracje pod treścią, hero nadal `priority`). Osobny dług do domknięcia: pipeline AVIF/WebP (zdjęcia to dziś JPG do ~967KB w `_DO-ANALIZY`).

**Plik audytu:** `D:\Automatyzacje\Landing Page\Projekty\restauracja-klosy\docs\AUDYT_DESIGN_KAROL.md`
