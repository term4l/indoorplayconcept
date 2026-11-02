import type { LegalSection } from "@/components/pages/legal/LegalPage";

// Treść deklaracji – przeniesiona 1:1 z oryginalnej strony.

export const accessibilitySections: LegalSection[] = [
  {
    title: "Wstęp",
    body: (
      <>
        <p>
          Niniejsza deklaracja dotyczy serwisu&nbsp;indoorplayconcept.com, który prowadzi Indoor Play Concept (IPC Rafał Nowicki). Dążymy do
          zapewnienia dostępności cyfrowej zgodnie z wytycznymi&nbsp;<strong>WCAG 2.1 na poziomie AA</strong>.
        </p>
        <p>
          Data publikacji deklaracji:&nbsp;1 sierpnia 2024
          <br />
          Data ostatniej aktualizacji:&nbsp;4 października 2025
        </p>
      </>
    ),
  },
  {
    title: "Status zgodności",
    body: (
      <p>
        Serwis jest&nbsp;<strong>częściowo zgodny</strong>&nbsp;z wytycznymi<strong>&nbsp;WCAG 2.1 na poziomie AA</strong>. Poniżej
        wymieniamy znane ograniczenia, które w najbliższym czasie planujemy poprawić.
      </p>
    ),
  },
  {
    title: "Znane ograniczenia w dostępności",
    body: (
      <>
        <ul>
          <li>
            <strong>Suwak „przed/po”</strong>&nbsp;– brak pełnej obsługi z klawiatury oraz brak atrybutów ARIA roli suwaka.
          </li>
          <li>
            <strong>Okna modalne</strong>&nbsp;– brak „focus trap” i niepełne opisy ARIA.
          </li>
          <li>
            <strong>Link „Pomiń do treści”</strong>&nbsp;– obecnie brak skrótu pozwalającego ominąć powtarzalną nawigację.
          </li>
          <li>
            <strong>Widoczny focus</strong>&nbsp;– w niektórych elementach może być słabiej widoczny.
          </li>
          <li>
            <strong>Animacje</strong>&nbsp;– część animacji nie respektuje ustawienia „Preferuj ograniczone ruchy”.
          </li>
          <li>
            <strong>Kontrast drobnych tekstów</strong>&nbsp;– niektóre małe napisy mają zbyt niski kontrast.
          </li>
        </ul>
        <p>Ograniczenia te nie wpływają na dostęp do kluczowych treści. Pracujemy nad ich sukcesywnym usprawnieniem.</p>
      </>
    ),
  },
  {
    title: "Zakres serwisu i informacje techniczne",
    body: (
      <ul>
        <li>Serwis jest responsywny i dostosowany do urządzeń mobilnych.</li>
        <li>Treści są zorganizowane semantycznie (nagłówki, aria-labels).</li>
        <li>Grafiki mają opisy alternatywne w miarę możliwości.</li>
        <li>Formularze mają jednoznaczne etykiety pól.</li>
        <li>Wspierane przeglądarki: Chrome, Edge, Firefox, Safari.</li>
        {/* Pusty punkt listy jest w oryginale. */}
        <li>&nbsp;</li>
      </ul>
    ),
  },
  {
    title: "Metodyka oceny zgodności",
    body: (
      <p>
        Wstępna ocena została przeprowadzona wewnętrznie: przegląd semantyki HTML, nawigacji klawiaturą, oznaczeń ARIA, kontrastu oraz
        zachowania okien modalnych. W miarę rozwoju serwisu planujemy cykliczne przeglądy i testy z użytkownikami.
      </p>
    ),
  },
  {
    title: "Zgłaszanie problemów i kontakt",
    body: (
      <>
        <p>Jeśli napotkasz utrudnienia w korzystaniu z serwisu, prosimy o kontakt:</p>
        <ul>
          <li>
            E-mail:&nbsp;<a href="mailto:hello@indoorplayconcept.com">hello@indoorplayconcept.com</a>
          </li>
          <li>
            Telefon:&nbsp;<a href="tel:+48663960969">+48 663 960 969</a>
          </li>
        </ul>
        <p>
          Podaj proszę adres podstrony, opis problemu i dane kontaktowe. Odpowiadamy zazwyczaj w ciągu&nbsp;<strong>14 dni roboczych</strong>.
        </p>
        <p>
          Jesteśmy podmiotem prywatnym — deklaracja ma charakter dobrowolny. Zapewniamy alternatywny kanał kontaktu (telefon / e-mail), jeśli
          określona treść okaże się niedostępna.
        </p>
      </>
    ),
  },
  {
    title: "Udogodnienia i alternatywne sposoby dostępu",
    body: (
      <ul>
        <li>Na życzenie przekazujemy treści w prostszej formie e-mailowej.</li>
        <li>Materiały graficzne opisujemy tekstowo w wiadomości zwrotnej.</li>
        <li>W przypadku filmów – udostępniamy transkrypt na życzenie.</li>
      </ul>
    ),
  },
];
