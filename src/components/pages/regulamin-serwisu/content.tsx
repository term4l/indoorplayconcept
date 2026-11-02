import type { LegalSection } from "@/components/pages/legal/LegalPage";

// Treść prawna – przeniesiona 1:1 z oryginalnej strony.

const EMAIL = "hello@indoorplayconcept.com";

export const termsSections: LegalSection[] = [
  {
    title: "Wstęp",
    body: (
      <>
        <p>Data ostatniej aktualizacji:&nbsp;4 października 2025</p>
        <p>
          Niniejszy regulamin („Regulamin”) określa zasady korzystania ze strony internetowej&nbsp;www.indoorplayconcept.com
        </p>
      </>
    ),
  },
  {
    title: "1. Postanowienia ogólne",
    body: (
      <ul>
        <li>Właścicielem Serwisu jest Indoor Play Concept –&nbsp; Aleje Jana Pawła II 13/220A 37-450 Stalowa Wola, Poland</li>
        <li>Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</li>
        <li>
          Kontakt:&nbsp;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
      </ul>
    ),
  },
  {
    title: "2. Zakres usług i funkcjonalności",
    body: (
      <ul>
        <li>
          Serwis ma charakter informacyjno–prezentacyjny i dotyczy projektowania, produkcji oraz montażu wewnętrznych placów zabaw.
        </li>
        <li>
          Udostępniamy formularze: kontaktowy, rekrutacyjny (Kariera) oraz dla dostawców (Dostawcy) do przekazywania zapytań i ofert.
        </li>
        <li>Serwis nie prowadzi sprzedaży online ani płatności elektronicznych.</li>
      </ul>
    ),
  },
  {
    title: "3. Zasady korzystania z Serwisu",
    body: (
      <ul>
        <li>Korzystaj z Serwisu zgodnie z prawem, dobrymi obyczajami i niniejszym Regulaminem.</li>
        <li>Zakazane jest publikowanie treści bezprawnych, obraźliwych, reklamowych (spam) lub naruszających prawa osób trzecich.</li>
        <li>Zakazane są działania mogące zakłócić działanie Serwisu (np. próby ataków, skrypty automatyzujące).</li>
        <li>Wykorzystywanie danych kontaktowych do celów marketingowych wymaga uprzedniej zgody właściciela Serwisu.</li>
      </ul>
    ),
  },
  {
    title: "4. Odpowiedzialność",
    body: (
      <ul>
        <li>
          Dokładamy starań, aby informacje w Serwisie były aktualne i rzetelne; możliwe są jednak przeoczenia lub zmiany po publikacji.
        </li>
        <li>Serwis może zawierać odnośniki do stron zewnętrznych. Nie odpowiadamy za treści i polityki prywatności podmiotów trzecich.</li>
        <li>Treści w Serwisie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego.</li>
      </ul>
    ),
  },
  {
    title: "5. Prawa autorskie",
    body: (
      <ul>
        <li>
          Materiały w Serwisie (teksty, grafiki, zdjęcia, projekty, wideo) podlegają ochronie prawa autorskiego. Właściciel: Indoor Play
          Concept – IPC Rafał Nowicki lub licencjodawcy.
        </li>
        <li>Kopiowanie i rozpowszechnianie treści bez pisemnej zgody jest zabronione, chyba że wyraźnie zaznaczono inaczej.</li>
      </ul>
    ),
  },
  {
    title: "6. Dane osobowe i kontakt",
    body: (
      <>
        <p>Zasady przetwarzania danych osobowych oraz cookies opisuje&nbsp;Polityka Prywatności&nbsp;i&nbsp;Polityka Cookies.</p>
        <p>
          W sprawach dotyczących Serwisu prosimy o kontakt:&nbsp;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    title: "7. Zmiany Regulaminu i prawo właściwe",
    body: (
      <ul>
        <li>
          Indoor Play Concept zastrzega sobie prawo do zmiany Regulaminu; nowa treść obowiązuje od chwili publikacji w Serwisie.
        </li>
        <li>W sprawach nieuregulowanych zastosowanie ma prawo polskie.</li>
      </ul>
    ),
  },
];
