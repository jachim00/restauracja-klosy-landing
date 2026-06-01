# DEPLOYMENT.md — Restauracja KŁOSY (Agent 3)

## A. GitHub (repo: `restauracja-klosy-landing`)

Konto GitHub na tym VPS: `jachim00` (gh CLI zalogowany).

```bash
cd "D:/Automatyzacje/Landing Page/Projekty/restauracja-klosy"
git init
git add .
git commit -m "feat: fundament + rdzeń strony głównej Restauracji KŁOSY"
gh repo create restauracja-klosy-landing --private --source=. --remote=origin --push
```
> `--private` zalecane do czasu publikacji; zmień na `--public` gdy gotowe.
> Alternatywnie ręcznie: utwórz repo na github.com → `git remote add origin <url>` → `git push -u origin main`.

## B. Vercel (preview / live)

**Opcja 1 — przez UI (najprostsza):** zaloguj się na vercel.com → „Add New Project" → import repo `restauracja-klosy-landing` → framework wykryje Next.js automatycznie → dodaj zmienne środowiskowe (z `.env.example`) → Deploy. Każdy push na `main` = nowy deploy; PR = preview.

**Opcja 2 — Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel            # preview
vercel --prod     # produkcja
```

### Zmienne środowiskowe na Vercel (Settings → Environment Variables)
- `NEXT_PUBLIC_SITE_URL` (np. domena docelowa lub *.vercel.app)
- `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `LEAD_WEBHOOK_URL` lub `RESEND_API_KEY` + `CONTACT_EMAIL`

## C. Alternatywa: GitHub Pages
Next.js z formularzem/API route wymaga środowiska Node (Vercel/Node host). GitHub Pages = tylko statyczny export (`output: 'export'`) — wtedy formularz musi iść przez zewnętrzny webhook (bez API route). Rekomendacja: **Vercel**.

## D. Paczka ZIP (gdyby brak dostępu do GitHub)
```powershell
Compress-Archive -Path "D:\Automatyzacje\Landing Page\Projekty\restauracja-klosy\*" `
  -DestinationPath "D:\Automatyzacje\_downloads\restauracja-klosy-landing.zip" -Force
```
Następnie ręcznie: utwórz repo na github.com, wgraj zawartość, połącz z Vercel.

## E. Po wdrożeniu — checklista
- [ ] Ustaw `NEXT_PUBLIC_SITE_URL` na docelową domenę (wpływa na canonical, sitemap, OG).
- [ ] Podłącz domenę w Vercel (jeśli własna).
- [ ] Zweryfikuj sitemap.xml i robots.txt na produkcji.
- [ ] Wgraj GTM ID i przetestuj dataLayer (GTM Preview).
- [ ] Lighthouse na produkcji (cel: Perf ≥90, SEO ≥95, A11y ≥90, BP ≥90).
