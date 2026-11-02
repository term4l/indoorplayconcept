# Indoor Play Concept – strona w Next.js + React + TypeScript

Przepisana z WordPress/Elementor polska wersja indoorplayconcept.com. Wszystkie strony są prerenderowane
do statycznego HTML (SSG), więc wyszukiwarki dostają pełną treść bez JS.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Zmienne środowiskowe (`.env.local`):

| Zmienna | Do czego |
| --- | --- |
| `FORMS_WEBHOOK_URL` | adres, na który API wysyła zgłoszenia z formularzy jako JSON (Make / Zapier / n8n / własny backend wysyłający maile). Bez niej zgłoszenia są tylko logowane na serwerze. |

## Strony

| Adres | Kod |
| --- | --- |
| `/pl/` (strona główna) | `src/components/pages/home/`, dane `src/data/content/home.ts` |
| 6 artykułów Play Magazine (`/pl/<slug-wpisu>/`) | szablon `src/components/pages/article/`, treści `src/data/content/articles/*.tsx` |
| 10 podstron projektów (`/pl/<slug-projektu>/`) | szablon `src/components/pages/project/`, dane `src/data/content/projects/*.ts` |
| `/pl/play-magazine/` (+ `/page/N/`) | `src/components/MagazineView.tsx`, dane `src/data/magazine.ts` |
| `/pl/o-nas/`, `/pl/media/`, `/pl/dostawcy/` | `src/components/pages/{o-nas,media,dostawcy}/` |
| `/pl/montaz-sal-zabaw/`, `/pl/serwis-sal-zabaw/`, `/pl/przebudowa/` | wspólny `src/components/pages/services/ServicePage.tsx`, treści w `src/data/content/*.ts` |
| `/pl/faq/`, `/pl/kontakt/`, `/pl/zgloszenie-serwisowe/` | `src/components/pages/{faq,kontakt,zgloszenie-serwisowe}/` |
| `/pl/sale-zabaw-projekty-3d/` | katalog projektów, dane `src/data/content/sale-zabaw-projekty-3d.ts` |
| `/pl/kalkulator-roi/` | logika 1:1 z wtyczki WP w `src/components/pages/kalkulator-roi/calc.ts` |
| `/pl/kariera/` | `src/components/pages/kariera/`, dane `src/data/content/kariera.ts` |
| polityki, regulamin, deklaracja dostępności | wspólny `src/components/pages/legal/LegalPage.tsx` |

## Wspólne elementy

| Ścieżka | Co tam jest |
| --- | --- |
| `src/data/pages.ts` | rejestr SEO każdej strony (title, description, hreflang, daty) – wygenerowany z oryginalnych `<head>` |
| `src/lib/seo.ts` | `pageMetadata(slug)` i `pageJsonLd(slug)` – meta, Open Graph, hreflang, schema.org jak w Yoast |
| `src/data/navigation.ts`, `src/data/footer.ts` | menu, przełącznik języków, stopka |
| `src/components/ui/` | `PageHero`, `Section`, `Button`, `Card`, `Grid`, `Prose`, `Accordion` |
| `src/components/forms/`, `src/lib/forms.ts`, `src/app/api/forms/[form]/route.ts` | formularze, lista formularzy z wymaganymi polami, API (walidacja, honeypot, webhook) |
| `src/components/AppLink.tsx` | linki do stron w aplikacji idą przez `next/link`, reszta jako zwykłe `<a>` |

Nowa strona: dodaj wpis w `src/data/pages.ts`, utwórz `src/app/pl/<slug>/page.tsx` z
`export const metadata = pageMetadata("<slug>")` i `<JsonLd data={pageJsonLd("<slug>")} />`.

## SEO – co zostało zachowane

- identyczne `title`, `description`, `canonical`, `hreflang` i daty dla każdej strony (sprawdzone automatycznie z oryginałami)
- adresy z `/` na końcu (`trailingSlash: true`); stare krótkie adresy (`/kontakt/`, `/montaz/` …) → 301 na kanoniczne
- `robots: index, follow, max-image-preview:large…`, Open Graph, `twitter:*`, weryfikacja Google Search Console
- JSON-LD: WebPage/CollectionPage, obraz główny, BreadcrumbList, WebSite, Organization
- jeden `h1` na stronie, cała treść (również zwijana i w akordeonach) w HTML
- `/sitemap.xml` z alternatywami językowymi, `/robots.txt`
- przełącznik języka w menu prowadzi do odpowiednika bieżącej strony (z hreflang)

## Kolejne języki

Na razie jest tylko polski. Linki do `/en/...` itd. i do nieprzeniesionych stron to zwykłe `<a>` – trafią do WordPressa.
Przy dodawaniu języków: przenieść `src/app/pl/` do `src/app/[lang]/`, teksty z `src/data/*` rozbić per język.

## Do uzupełnienia

- **nieprzeniesione strony:** `/konsultacja/`, strefa klienta, 4 artykuły ze strony 1 Play Magazine (bez ekranów, kolory, branding, interaktywne atrakcje), podstrona `/pl/wewnetrzny-plac-zabaw-w-hotelu/`, archiwa dat i kategorii (`/pl/2026/…`, `/pl/category/…`)
- **Play Magazine:** wpisy ze strony 2 – dopisz na końcu `posts` w `src/data/magazine.ts`
- **Projekty 3D:** w zapisanej stronie było 9 z 13 projektów (resztę WP dociągał AJAX-em) – dopisz brakujące w pliku danych
- **formularze:** ustaw `FORMS_WEBHOOK_URL`; załączniki ze zgłoszenia serwisowego nie są przekazywane dalej (tylko nazwy plików); wynik kalkulatora ROI nie jest wysyłany mailem do klienta, dopóki nie zrobi tego usługa za webhookiem
- **Regulamin** w oryginale nie ma meta description
- większość zdjęć ładuje się z `indoorplayconcept.com/wp-content/` – przed wyłączeniem WordPressa trzeba je skopiować do `public/images/`
