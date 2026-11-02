import type { LegalSection } from "@/components/pages/legal/LegalPage";

// Treść prawna – przeniesiona 1:1 z oryginalnej strony.

export const cookiesSections: LegalSection[] = [
  {
    title: "1. Czym są cookies",
    body: (
      <>
        <p>Data ostatniej aktualizacji: 31.12.2025</p>
        <p>
          Cookies (pliki cookie) to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika (komputer, telefon, tablet) podczas
          korzystania ze strony internetowej. Cookies mogą wspierać działanie Serwisu, poprawiać jego bezpieczeństwo i wygodę oraz umożliwiać
          analizę ruchu.
        </p>
      </>
    ),
  },
  {
    title: "2. Kto stosuje cookies",
    body: (
      <>
        <p>Cookies mogą być ustawiane przez:</p>
        <ul>
          <li>
            <p>
              <strong>Indoor Play Concept</strong> (cookies własne),
            </p>
          </li>
          <li>
            <p>podmioty trzecie, jeśli Serwis korzysta z ich narzędzi (cookies zewnętrzne).</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Do czego używamy cookies",
    body: (
      <>
        <p>W Serwisie cookies mogą być używane w następujących celach:</p>
        <ol>
          <li>
            <p>
              <strong>Niezbędne cookies</strong>: zapewniają prawidłowe działanie Serwisu i jego podstawowych funkcji.
            </p>
          </li>
          <li>
            <p>
              <strong>Funkcjonalne cookies</strong>: zapamiętują ustawienia i wybory użytkownika (np. preferencje).
            </p>
          </li>
          <li>
            <p>
              <strong>Analityczne cookies</strong>: pomagają zrozumieć, jak użytkownicy korzystają z Serwisu (statystyki, poprawa
              działania).
            </p>
          </li>
          <li>
            <p>
              <strong>Marketingowe cookies</strong>: mogą służyć do prezentowania dopasowanych treści lub prowadzenia działań reklamowych,
              jeśli takie narzędzia są używane.
            </p>
          </li>
        </ol>
        <p>Zakres faktycznie stosowanych kategorii zależy od konfiguracji Serwisu i wyrażonych zgód.</p>
      </>
    ),
  },
  {
    title: "4. Podstawa stosowania cookies i zgody",
    body: (
      <>
        <ul>
          <li>
            <p>Cookies niezbędne mogą być stosowane bez zgody, ponieważ są konieczne do działania Serwisu.</p>
          </li>
          <li>
            <p>
              W przypadku cookies analitycznych, funkcjonalnych i marketingowych, jeśli prawo tego wymaga, stosujemy je na podstawie zgody
              użytkownika wyrażonej w banerze cookies lub ustawieniach prywatności.
            </p>
          </li>
        </ul>
        <p>
          Zgodę możesz w każdej chwili wycofać lub zmienić ustawienia cookies w Serwisie (jeśli dostępny jest panel ustawień) albo w
          ustawieniach przeglądarki.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies podmiotów trzecich",
    body: (
      <p>
        Jeśli w Serwisie korzystamy z narzędzi zewnętrznych (np. analitycznych lub marketingowych), ich dostawcy mogą stosować własne cookies
        i przetwarzać dane na własnych zasadach, w tym zgodnie z ich politykami prywatności. Dotyczy to w szczególności narzędzi służących do
        statystyk, pomiaru ruchu lub kampanii reklamowych, jeśli są wdrożone w Serwisie. (Google Search Console, GA4, Microsoft Clarity)
      </p>
    ),
  },
  {
    title: "6. Jak zarządzać cookies w przeglądarce",
    body: (
      <>
        <p>
          Możesz samodzielnie zarządzać cookies w ustawieniach przeglądarki, w tym blokować je lub usuwać. Pamiętaj, że wyłączenie
          niektórych cookies może wpłynąć na działanie Serwisu.
        </p>
        <p>Instrukcje znajdziesz w ustawieniach przeglądarek, np.:</p>
        {/* Zagnieżdżona lista jak w oryginale. */}
        <ul>
          <li>
            <ul>
              <li>
                <p>Google Chrome</p>
              </li>
              <li>
                <p>Mozilla Firefox</p>
              </li>
              <li>
                <p>Microsoft Edge</p>
              </li>
              <li>
                <p>Safari</p>
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Logi serwera",
    body: (
      <p>
        Podczas korzystania z Serwisu nasze systemy mogą automatycznie zapisywać logi (np. adres IP, czas zapytania, informacje o
        przeglądarce) w celach technicznych, administracyjnych i bezpieczeństwa. Dane te są wykorzystywane głównie do zapewnienia poprawnego
        działania Serwisu i ochrony przed nadużyciami.
      </p>
    ),
  },
  {
    title: "8. Zmiany Polityki cookies",
    body: (
      <p>
        Polityka cookies może być aktualizowana w razie zmian technologicznych lub prawnych. Aktualna wersja jest publikowana w Serwisie.
      </p>
    ),
  },
];
