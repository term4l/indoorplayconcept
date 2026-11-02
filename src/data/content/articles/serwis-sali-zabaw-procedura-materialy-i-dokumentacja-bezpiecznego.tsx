// Treść wpisu przeniesiona 1:1 z WordPressa (blok "post content").
import { AppLink } from "@/components/AppLink";
import type { ArticleContent } from "@/components/pages/article/types";
import styles from "@/components/pages/article/ArticleBody.module.css";

export const content: ArticleContent = {
  headings: [
    { id: "tl-dr", text: "TL;DR", level: 2 },
    { id: "najwazniejsze-decyzje-w-skrocie", text: "Najważniejsze decyzje w skrócie", level: 2 },
    { id: "plan-dzialania", text: "Plan działania", level: 2 },
    { id: "serwis-jako-zabezpieczenie-twojej-inwestycji", text: "Serwis jako zabezpieczenie Twojej inwestycji", level: 2 },
    { id: "co-obejmuje-profesjonalny-serwis-indoor-play-concept", text: "Co obejmuje profesjonalny serwis Indoor Play Concept?", level: 2 },
    { id: "przeglady-okresowe", text: "Przeglądy okresowe", level: 2 },
    { id: "konserwacja-i-naprawy", text: "Konserwacja i naprawy", level: 2 },
    { id: "higiena-i-dezynfekcja", text: "Higiena i dezynfekcja", level: 2 },
    { id: "modernizacje-i-rozbudowy", text: "Modernizacje i rozbudowy", level: 2 },
    { id: "serwis-awaryjny", text: "Serwis awaryjny", level: 2 },
    { id: "dlaczego-obiekty-wybieraja-serwis-indoor-play-concept", text: "Dlaczego obiekty wybierają serwis Indoor Play Concept?", level: 2 },
    { id: "pakiety-serwisowe-dostosowane-do-roznych-potrzeb", text: "Pakiety serwisowe dostosowane do różnych potrzeb", level: 2 },
    { id: "kiedy-warto-zamowic-serwis", text: "Kiedy warto zamówić serwis?", level: 2 },
    { id: "jak-wyglada-zgloszenie-serwisowe", text: "Jak wygląda zgłoszenie serwisowe?", level: 2 },
    { id: "potrzebujesz-wsparcia-lub-przegladu-swojej-strefy", text: "Potrzebujesz wsparcia lub przeglądu swojej strefy?", level: 2 },
    { id: "powiazane-materialy-indoor-play-concept", text: "Powiązane materiały Indoor Play Concept", level: 2 },
  ],
  body: (
    <>
      <p>Praktyczny poradnik dla inwestorów i operatorów rodzinnych centrów rozrywki.</p>
      <h2 id="tl-dr">TL;DR</h2>
      <ul>
        <li>Serwis sali zabaw powinien łączyć oględziny konstrukcji, mocowań, siatek, pianek, poszyć i elementów interaktywnych.</li>
        <li>Usterki wpływające na bezpieczeństwo wymagają natychmiastowego wyłączenia elementu i pilnego zgłoszenia.</li>
        <li>Raport zdjęciowy, lista priorytetów i historia napraw pomagają planować koszty oraz rozmowy z ubezpieczycielem.</li>
        <li>Regularne przeglądy i szybkie drobne naprawy zwykle ograniczają koszt awarii oraz czas wyłączenia strefy.</li>
      </ul>
      <h2 id="najwazniejsze-decyzje-w-skrocie">Najważniejsze decyzje w skrócie</h2>
      <figure className={styles.table}>
        <table>
          <tbody>
            <tr>
              <th><strong>Tryb</strong></th>
              <th><strong>Reakcja według aktualnej oferty IPC</strong></th>
              <th><strong>Rezultat</strong></th>
            </tr>
            <tr>
              <td>Krytyczny</td>
              <td>Reakcja do 24 h; naprawa typowo do 48 h</td>
              <td>Zabezpieczenie lub szybkie przywrócenie strefy</td>
            </tr>
            <tr>
              <td>Standardowy</td>
              <td>Reakcja do 120 h; naprawa typowo do 72 h</td>
              <td>Planowa korekta bez zagrożenia bezpieczeństwa</td>
            </tr>
            <tr>
              <td>Okresowy</td>
              <td>Termin ustalany z wyprzedzeniem</td>
              <td>Raport PDF, zdjęcia i zalecenia</td>
            </tr>
            <tr>
              <td>Modernizacja</td>
              <td>Po audycie zakresu i atrakcyjności</td>
              <td>Nowe moduły, korekta układu lub odświeżenie</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h2 id="plan-dzialania">Plan działania</h2>
      <ol>
        <li>Zabezpiecz lub wyłącz element, jeżeli usterka może zagrażać użytkownikom.</li>
        <li>Przygotuj zdjęcie ogólne, zbliżenie, lokalizację modułu i krótki opis objawu.</li>
        <li>Przekaż historię przeglądów, wcześniejszych napraw oraz możliwe okna dostępu.</li>
        <li>Po diagnozie zatwierdź priorytety, części, termin i zakres wyłączenia strefy.</li>
        <li>Zachowaj raport, dokumentację zdjęciową i zalecenia do kolejnego przeglądu.</li>
      </ol>
      <p>Wewnętrzne place zabaw pracują intensywnie każdego dnia, często od rana do późnego wieczora. To środowisko, w którym materiały są nieustannie eksploatowane, a bezpieczeństwo użytkowników musi pozostać niepodważalne. Właśnie dlatego regularny serwis, kontrola stanu technicznego i dbałość o higienę wyposażenia stanowią fundament trwałości całej inwestycji. W Indoor Play Concept od lat specjalizujemy się w serwisowaniu stref soft play, parków trampolin oraz konstrukcji modułowych zgodnie z normami EN 1176 i EN 1177. Nasza wiedza i doświadczenie pozwalają utrzymywać obiekty w idealnej kondycji, a właścicielom dają spokój i pewność działania przez cały rok.</p>
      <h2 id="serwis-jako-zabezpieczenie-twojej-inwestycji">Serwis jako zabezpieczenie Twojej inwestycji</h2>
      <p>Regularny serwis to nie tylko działanie prewencyjne, ale również sposób na realne obniżenie kosztów funkcjonowania obiektu. Przeglądy wykonywane w oparciu o europejskie normy EN 1176 i EN 1177 pozwalają wcześnie wykryć zużycie materiałów, uszkodzenia konstrukcji czy zmiany w napięciu siatek. Dzięki temu naprawa jest szybka, przewidywalna i znacznie tańsza niż interwencje awaryjne.</p>
      <p>Systematyczna kontrola wpływa również na pozytywny wizerunek obiektu. Zadbana strefa zabaw zwiększa zaufanie rodziców i zachęca dzieci do aktywnego korzystania z atrakcji. Jeżeli wyposażenie wygląda estetycznie i świeżo, a konstrukcja jest utrzymana w świetnym stanie, goście spędzają więcej czasu w obiekcie i chętniej do niego wracają.</p>
      <h2 id="co-obejmuje-profesjonalny-serwis-indoor-play-concept">Co obejmuje profesjonalny serwis Indoor Play Concept?</h2>
      <h2 id="przeglady-okresowe">Przeglądy okresowe</h2>
      <p>Podczas przeglądów szczegółowo analizujemy stan konstrukcji, efektywność mocowań, kondycję poszyć, pianek, siatek oraz wszystkich elementów wykończeniowych. Sprawdzamy również zgodność z normami EN 1176 i EN 1177, aby mieć pewność, że strefa spełnia wszystkie wymogi bezpieczeństwa. Po zakończeniu kontroli przygotowujemy kompletny raport w formie PDF, zawierający zdjęcia, ocenę stanu technicznego oraz listę zaleceń z określeniem priorytetów.</p>
      <h2 id="konserwacja-i-naprawy">Konserwacja i naprawy</h2>
      <p>W ramach prac naprawczych wymieniamy zużyte poszycia, uzupełniamy pianki, napinamy siatki, dokręcamy łączniki i wzmacniamy elementy konstrukcyjne. Realizujemy zarówno drobne korekty estetyczne, jak i bardziej zaawansowane prace techniczne. Posiadamy standardowe części na stanie, co pozwala skrócić czas reakcji i przeprowadzić naprawę bez oczekiwania na dostawy.</p>
      <h2 id="higiena-i-dezynfekcja">Higiena i dezynfekcja</h2>
      <p>Czystość w strefie zabaw ma ogromny wpływ na komfort gości i odbiór obiektu jako całości. Oferujemy profesjonalne czyszczenie elementów tapicerowanych, modułów konstrukcji, siatek oraz paneli. Pracujemy wyłącznie na środkach posiadających stosowne atesty, a każdy plan higieny dostosowujemy do rodzaju obiektu, natężenia ruchu i specyfiki strefy.</p>
      <h2 id="modernizacje-i-rozbudowy">Modernizacje i rozbudowy</h2>
      <p>Jeśli strefa wymaga unowocześnienia, możemy przygotować audyt atrakcyjności, zaproponować nowe moduły lub elementy interaktywne, a nawet przeprojektować układ konstrukcji pod ruch gości. Modernizacja to świetna okazja, aby wznieść strefę na wyższy poziom i przyciągnąć nowych użytkowników.</p>
      <h2 id="serwis-awaryjny">Serwis awaryjny</h2>
      <p>W sytuacjach nagłych działamy szybko i precyzyjnie. W przypadkach krytycznych reagujemy zazwyczaj w ciągu 24 godzin, a naprawy wykonujemy maksymalnie w ciągu 48 godzin. Standardowe zgłoszenia realizujemy średnio w czasie do 120 godzin. Dzięki temu przestoje są minimalne, a obiekt może działać praktycznie bez przerwy.</p>
      <h2 id="dlaczego-obiekty-wybieraja-serwis-indoor-play-concept">Dlaczego obiekty wybierają serwis Indoor Play Concept?</h2>
      <p>Właściciele doceniają przede wszystkim naszą specjalizację. Nie zajmujemy się wszystkim – skupiamy się wyłącznie na branży soft play, parkach trampolin i konstrukcjach modułowych. Dzięki temu znamy typowe problemy techniczne, potrafimy przewidywać potencjalne usterki i dobieramy rozwiązania, które realnie wydłużają żywotność całej strefy.</p>
      <p>Korzystamy z oryginalnych części z naszej produkcji lub – w przypadku konstrukcji innych producentów – z certyfikowanych zamienników o porównywalnych parametrach. Niezależnie od zakresu prac gwarantujemy zachowanie pełnego poziomu bezpieczeństwa i estetyki obiektu.</p>
      <p>Każda wizyta kończy się pełnym zestawem dokumentów: raportem serwisowym, protokołem zgodności z normami oraz dokumentacją fotograficzną. To kompleksowy materiał, który sprawdzi się zarówno podczas audytu, jak i w kontaktach z ubezpieczycielem.</p>
      <h2 id="pakiety-serwisowe-dostosowane-do-roznych-potrzeb">Pakiety serwisowe dostosowane do różnych potrzeb</h2>
      <p>Stworzyliśmy trzy poziomy opieki serwisowej, dzięki którym właściciel obiektu może dobrać zakres działań do swojego kalendarza i rodzaju działalności. Pakiet Basic obejmuje jeden przegląd rocznie i jest idealny dla mniejszych obiektów. Pakiet Biznes to najczęściej wybierana opcja, oferująca dwa przeglądy oraz dodatkowe szkolenie personelu. Najbardziej rozbudowany pakiet Premium zapewnia aż cztery przeglądy w roku i gwarantuje priorytetową obsługę niezależnie od sytuacji.</p>
      <h2 id="kiedy-warto-zamowic-serwis">Kiedy warto zamówić serwis?</h2>
      <p>Jeżeli zauważasz luźne mocowania, przetarcia poszyć, spadek napięcia siatek lub jeśli ostatni przegląd był wykonany ponad rok temu, to dobry moment na kontakt z naszym zespołem. Warto również zamówić przegląd, jeśli zbliża się audyt jednostki certyfikującej albo jeśli klienci zaczynają zgłaszać uwagi dotyczące stanu wyposażenia.</p>
      <h2 id="jak-wyglada-zgloszenie-serwisowe">Jak wygląda zgłoszenie serwisowe?</h2>
      <p>Proces jest prosty i przejrzysty. Najpierw zgłaszasz problem telefonicznie, przez formularz lub WhatsApp. Następnie analizujemy materiał, przygotowujemy wstępny kosztorys i ustalamy termin wizyty. Na miejscu realizujemy prace zgodnie z planem, a po zakończeniu otrzymujesz pełną dokumentację i zalecenia dotyczące dalszej eksploatacji.</p>
      <h2 id="potrzebujesz-wsparcia-lub-przegladu-swojej-strefy">Potrzebujesz wsparcia lub przeglądu swojej strefy?</h2>
      <p>Zachęcamy do kontaktu z Indoor Play Concept. Doradzimy, wykonamy kompleksową analizę i zadbamy o to, aby Twoja strefa zabaw nie tylko działała bezpiecznie, ale również prezentowała się estetycznie i przyciągała nowych użytkowników. Jeśli wyposażenie wymaga większej interwencji, chętnie przygotujemy projekt modernizacji dostosowany do charakteru Twojego obiektu.</p>
      <h2 id="powiazane-materialy-indoor-play-concept">Powiązane materiały Indoor Play Concept</h2>
      <ul>
        <li><AppLink href="/pl/serwis-sal-zabaw/">Usługa serwisu sal zabaw</AppLink></li>
        <li><AppLink href="/pl/zgloszenie-serwisowe/">Formularz zgłoszenia serwisowego</AppLink></li>
        <li><AppLink href="/pl/audyt-sali-zabaw-przed-serwisem/">Audyt sali zabaw przed serwisem</AppLink></li>
        <li><AppLink href="/pl/przebudowa/">Modernizacja i przebudowa</AppLink></li>
      </ul>
      <p><strong>Masz projekt lub działający obiekt? </strong><AppLink href="/pl/konsultacja/">Umów konsultację z Indoor Play Concept.</AppLink></p>
    </>
  ),
};
