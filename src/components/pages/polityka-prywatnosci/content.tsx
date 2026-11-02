import type { LegalSection } from "@/components/pages/legal/LegalPage";

// Treść prawna – przeniesiona 1:1 z oryginalnej strony.

const EMAIL = "hello@indoorplayconcept.com";

export const privacySections: LegalSection[] = [
  {
    title: "1. Informacje ogólne",
    body: (
      <>
        <p>Data ostatniej aktualizacji: 31.12.2025</p>
        <p>
          Niniejsza Polityka prywatności opisuje zasady przetwarzania danych osobowych przez Indoor Play Concept w związku z prowadzoną
          działalnością obejmującą realizację, montaż oraz serwis wewnętrznych placów zabaw na terenie Europy, a także w związku z
          korzystaniem ze strony internetowej, kontaktem telefonicznym i e-mailowym oraz współpracą handlową.
        </p>
      </>
    ),
  },
  {
    title: "2. Administrator danych",
    body: (
      <>
        <p>Administratorem danych osobowych jest:</p>
        <p>
          <strong>Indoor Play Concept</strong>
          <br />
          Aleje Jana Pawła II 13/220A, 37-450 Stalowa Wola, Polska
          <br />
          VAT ID: PL8672111678
          <br />
          tel.: +48 663 960 969
          <br />
          e-mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Godziny kontaktu: Pon – Pia 8:00 – 16:00
        </p>
      </>
    ),
  },
  {
    title: "3. Jakie dane możemy przetwarzać",
    body: (
      <>
        <p>W zależności od relacji i celu, możemy przetwarzać w szczególności:</p>
        <ul>
          <li>
            <p>dane identyfikacyjne i kontaktowe (np. imię, nazwisko, stanowisko, nazwa firmy, e-mail, telefon),</p>
          </li>
          <li>
            <p>dane rozliczeniowe (np. adres, NIP/VAT, dane do faktury),</p>
          </li>
          <li>
            <p>dane dotyczące realizacji usługi (np. miejsce montażu, ustalenia projektowe i serwisowe, korespondencja),</p>
          </li>
          <li>
            <p>dane z korespondencji i rozmów (treść zapytań, ustalenia),</p>
          </li>
          <li>
            <p>
              dane techniczne związane z korzystaniem ze strony (np. adres IP, identyfikatory cookies, logi serwera), jeśli korzystasz z
              Serwisu.
            </p>
          </li>
        </ul>
        <p>
          Podanie danych jest dobrowolne, ale może być konieczne do zawarcia lub realizacji umowy, przygotowania oferty, obsługi zapytania
          lub spełnienia obowiązków prawnych.
        </p>
      </>
    ),
  },
  {
    title: "4. Cele i podstawy prawne przetwarzania",
    body: (
      <>
        <p>Przetwarzamy dane w następujących celach i na następujących podstawach:</p>
        <ol>
          <li>
            <p>
              <strong>Kontakt i obsługa zapytań</strong> (telefon, e-mail, formularz, korespondencja)
              <br />
              Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes administratora polegający na komunikacji i obsłudze zapytań) lub
              art. 6 ust. 1 lit. b RODO, gdy działania zmierzają do zawarcia umowy.
            </p>
          </li>
          <li>
            <p>
              <strong>Przygotowanie oferty, zawarcie i realizacja umowy</strong> (realizacja, montaż, serwis)
              <br />
              Podstawa: art. 6 ust. 1 lit. b RODO (umowa lub działania przed jej zawarciem).
            </p>
          </li>
          <li>
            <p>
              <strong>Rozliczenia, księgowość, podatki</strong> (wystawianie faktur, prowadzenie dokumentacji)
              <br />
              Podstawa: art. 6 ust. 1 lit. c RODO (obowiązek prawny).
            </p>
          </li>
          <li>
            <p>
              <strong>Dochodzić roszczeń i bronić się przed roszczeniami</strong> (np. spory, reklamacje)
              <br />
              Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes administratora).
            </p>
          </li>
          <li>
            <p>
              <strong>Marketing własnych usług</strong> (np. wysyłka informacji handlowych do klientów, którzy podali dane w związku ze
              współpracą)
              <br />
              Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes) lub art. 6 ust. 1 lit. a RODO (zgoda), jeśli jest wymagana, a
              także przepisy dotyczące komunikacji elektronicznej (jeśli mają zastosowanie).
            </p>
          </li>
          <li>
            <p>
              <strong>Prowadzenie i zabezpieczenie Serwisu</strong> (statystyki, bezpieczeństwo, zapobieganie nadużyciom)
              <br />
              Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes).
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "5. Odbiorcy danych",
    body: (
      <>
        <p>
          Dane mogą być przekazywane podmiotom wspierającym nas w prowadzeniu działalności, wyłącznie w zakresie niezbędnym, w
          szczególności:
        </p>
        <ul>
          <li>
            <p>firmom IT i hostingowym,</p>
          </li>
          <li>
            <p>dostawcom poczty e-mail i narzędzi komunikacyjnych,</p>
          </li>
          <li>
            <p>biuru rachunkowemu i doradcom,</p>
          </li>
          <li>
            <p>
              podwykonawcom i partnerom realizującym usługi (np. montaż, serwis, transport), jeśli jest to potrzebne do wykonania umowy,
            </p>
          </li>
          <li>
            <p>firmom kurierskim i transportowym,</p>
          </li>
          <li>
            <p>uprawnionym organom publicznym, gdy wymagają tego przepisy prawa.</p>
          </li>
        </ul>
        <p>Z podmiotami przetwarzającymi dane w naszym imieniu zawieramy umowy powierzenia przetwarzania danych, gdy jest to wymagane.</p>
      </>
    ),
  },
  {
    title: "6. Przekazywanie danych poza Europejski Obszar Gospodarczy",
    body: (
      <p>
        Co do zasady przetwarzamy dane na terenie EOG. Jeżeli w związku z używanymi narzędziami (np. poczta, hosting, analityka) dojdzie
        do przekazania danych poza EOG, zapewnimy odpowiednie zabezpieczenia wymagane przez RODO, w szczególności standardowe klauzule
        umowne.
      </p>
    ),
  },
  {
    title: "7. Okres przechowywania danych",
    body: (
      <>
        <p>Przechowujemy dane przez okres zależny od celu:</p>
        <ul>
          <li>
            <p>dane dotyczące umów i realizacji usług: przez czas trwania umowy oraz następnie przez okres przedawnienia roszczeń,</p>
          </li>
          <li>
            <p>dokumenty księgowe i podatkowe: przez okres wymagany przepisami prawa,</p>
          </li>
          <li>
            <p>
              dane z korespondencji: przez czas niezbędny do prowadzenia komunikacji i archiwizacji ustaleń, nie dłużej niż do upływu
              okresu przedawnienia roszczeń,
            </p>
          </li>
          <li>
            <p>dane przetwarzane na podstawie zgody: do czasu jej cofnięcia lub osiągnięcia celu.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Prawa osób, których dane dotyczą",
    body: (
      <>
        <p>Masz prawo do:</p>
        <ul>
          <li>
            <p>dostępu do danych,</p>
          </li>
          <li>
            <p>sprostowania danych,</p>
          </li>
          <li>
            <p>usunięcia danych,</p>
          </li>
          <li>
            <p>ograniczenia przetwarzania,</p>
          </li>
          <li>
            <p>przenoszenia danych,</p>
          </li>
          <li>
            <p>wniesienia sprzeciwu wobec przetwarzania (gdy podstawą jest uzasadniony interes),</p>
          </li>
          <li>
            <p>
              cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody), bez wpływu na zgodność z prawem
              przetwarzania sprzed cofnięcia.
            </p>
          </li>
        </ul>
        <p>
          Aby skorzystać z praw, skontaktuj się z nami:{" "}
          <strong>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    title: "9. Prawo wniesienia skargi",
    body: (
      <p>
        Jeśli uznasz, że przetwarzamy dane niezgodnie z prawem, przysługuje Ci prawo wniesienia skargi do organu nadzorczego. W Polsce jest
        to <strong>Prezes Urzędu Ochrony Danych Osobowych (UODO)</strong>.
      </p>
    ),
  },
  {
    title: "10. Zautomatyzowane podejmowanie decyzji i profilowanie",
    body: (
      <p>
        Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby
        skutki prawne lub w podobny sposób istotnie na Ciebie wpływały.
      </p>
    ),
  },
  {
    title: "11. Bezpieczeństwo",
    body: (
      <p>
        Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane przed utratą, nieuprawnionym dostępem, modyfikacją lub
        ujawnieniem.
      </p>
    ),
  },
  {
    title: "12. Zmiany Polityki prywatności",
    body: (
      <p>
        Możemy aktualizować Politykę prywatności w razie zmian w przepisach, technologii lub sposobie działania. Aktualna wersja jest
        publikowana w Serwisie.
      </p>
    ),
  },
];
