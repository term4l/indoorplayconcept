import { Icon } from "@/components/Icons";
import { Button, PageHero } from "@/components/ui";
import { projects } from "@/data/content/sale-zabaw-projekty-3d";
import { ReadMore } from "../kalkulator-roi/ReadMore";
import { ProjectsCatalog } from "./ProjectsCatalog";
import styles from "./Projekty3d.module.css";

const HERO_IMAGE = "https://indoorplayconcept.com/wp-content/uploads/2025/12/3D-Designs.webp";

function Description() {
  return (
    <>
      <div role="heading" aria-level={2} data-title="">
        Jak powstają nasze projekty 3D wewnętrznych placów zabaw, czyli sale zabaw
      </div>
      <p>
        Każdy projekt, który trafia do tej sekcji, jest efektem dziesiątek godzin pracy, rozmów i doświadczenia wyniesionego z wielu
        realizacji. Nie tworzymy przypadkowych wizualizacji - projektujemy sale zabaw tak, by każdy układ stanowił solidną bazę do dalszego
        dopasowania pod konkretną przestrzeń, budżet i oczekiwania inwestora.
      </p>
      <div role="heading" aria-level={2}>
        Od pomysłu do koncepcji
      </div>
      <p>
        Proces projektowy zaczynamy od zrozumienia, w jakim miejscu powstanie plac zabaw i kto będzie z niego korzystał. Inwestorzy często
        przychodzą do nas z ogólną wizją - chcą stworzyć sale zabaw, które będą przyciągać rodziny, angażować dzieci i jednocześnie wyróżniać
        się na tle konkurencji. Naszym zadaniem jest przekuć te założenia w konkretną przestrzeń: funkcjonalną, bezpieczną i atrakcyjną
        wizualnie.
      </p>
      <p>
        Pracujemy w środowisku 3D, które pozwala realnie zobaczyć proporcje, wysokości i przejścia pomiędzy elementami. Dzięki temu inwestor
        ma pełen obraz tego, jak będzie wyglądać jego przyszły obiekt i jak zadziałają w nim sale zabaw.
      </p>
      <div role="heading" aria-level={2}>
        Bezpieczeństwo i normy to podstawa
      </div>
      <p>
        Wszystkie nasze projekty wewnętrznych placów zabaw, takich jak sale zabaw, powstają w oparciu o normy EN 1176 / EN 1177, które
        regulują bezpieczeństwo wyposażenia placów zabaw oraz nawierzchni amortyzujących upadki. To nie jest dodatek - to punkt wyjścia.
        Każdy moduł, wysokość i odległość są projektowane tak, by spełnić wymagania bezpieczeństwa bez ograniczania kreatywności pomysłu.
      </p>
      <p>
        Wewnętrzne place zabaw, czyli sale zabaw, to przestrzenie, które muszą działać nieprzerwanie przez lata. Dlatego projektując,
        zwracamy uwagę nie tylko na wygląd, ale i na trwałość materiałów, sposób mocowania oraz łatwość ewentualnej rozbudowy. Nasze
        doświadczenie z produkcji pozwala już na etapie koncepcji przewidzieć potencjalne trudności montażowe i wyeliminować je zawczasu.
      </p>
      <div role="heading" aria-level={2}>
        Dla kogo powstają nasze gotowe koncepcje
      </div>
      <p>
        Sekcja „Projekty 3D” powstała z myślą o inwestorach, którzy chcą zobaczyć, co jest możliwe, zanim przejdą do pełnego projektu
        indywidualnego. To baza inspiracji dla:
      </p>
      <ul>
        <li>właścicieli centrów handlowych i hoteli, a także osób prowadzących sale zabaw,</li>
        <li>operatorów parków rozrywki i stref rekreacyjnych,</li>
        <li>deweloperów szukających wartości dodanej dla rodzinnych inwestycji,</li>
        <li>oraz architektów, którzy potrzebują gotowych koncepcji do swoich projektów wnętrz.</li>
      </ul>
      <p>
        Wystarczy wybrać projekt, który najbardziej odpowiada charakterowi obiektu - a my dopasujemy go do wymiarów, wysokości pomieszczenia,
        budżetu i docelowej grupy wiekowej użytkowników. Możemy też rozwinąć koncepcję, dodając interaktywne elementy świetlne, moduły
        sensoryczne czy strefy relaksu dla rodziców.
      </p>
      <div role="heading" aria-level={2}>
        Dlaczego warto zacząć od projektu gotowego
      </div>
      <p>
        Gotowe projekty 3D pozwalają zaoszczędzić czas i szybko przejść od inspiracji do realnej wyceny. Dla inwestora to konkret: wymiary,
        wizualizacja, cena bazowa i możliwość dostosowania. Dla nas - punkt startu, który możemy dalej rozwijać bez konieczności tworzenia
        wszystkiego od zera.
      </p>
      <p>
        Co istotne, każdy projekt wewnętrznego placu zabaw jest opracowany w skali rzeczywistej i gotowy do dalszego opracowania
        technicznego. Dzięki temu można precyzyjnie oszacować, ile miejsca potrzeba, by uzyskać optymalny efekt zabawy i bezpieczeństwa. To
        również świetna baza do rozmów z wykonawcami czy projektantami wnętrz.
      </p>
      <p>
        Wybierając projekt z naszej bazy wewnętrznych placów zabaw, zyskujesz nie tylko koncepcję, ale też wsparcie zespołu, który zna każdy
        detal konstrukcji. Doradzimy, jak umieścić strefy, gdzie zaplanować wejścia, jak rozwiązać kwestię akustyki czy oświetlenia. Dla nas
        to codzienność - dla Ciebie gwarancja, że inwestycja będzie przemyślana.
      </p>
      <div role="heading" aria-level={2}>
        Nasze podejście do projektowania
      </div>
      <p>
        Nie jesteśmy dużym zespołem, w którym klient staje się tylko numerem. Dzięki temu możemy podejść do każdego projektu osobiście - z
        uwagą, szacunkiem i czasem, którego często brakuje w większych strukturach. Każdy plac zabaw, który projektujemy, jest wynikiem
        dialogu, obserwacji i wspólnego myślenia o przestrzeni.
      </p>
      <p>
        Staramy się, aby każdy projekt miał coś wyjątkowego - detal, kolorystykę, układ, który zapada w pamięć. Zależy nam, by przestrzeń do
        zabawy była nie tylko atrakcyjna, ale też niosła wartość: rozwijała, integrowała i dawała dzieciom prawdziwą radość z ruchu. Bo to
        właśnie z tych emocji rodzi się najtrwalszy efekt.
      </p>
      <div role="heading" aria-level={2}>
        Zaufaj doświadczeniu
      </div>
      <p>
        Indoor Play Concept to zespół, który od lat tworzy wewnętrzne place zabaw. Łączymy estetykę z inżynierią i realnym doświadczeniem
        produkcyjnym. Dlatego każdy projekt, który widzisz na tej stronie, jest możliwy do wykonania - nie jest tylko wizualizacją, ale
        rzeczywistą propozycją do wdrożenia.
      </p>
      <p>
        Niezależnie od tego, czy szukasz kompaktowej strefy zabaw dla małego lokalu, czy rozbudowanego systemu modułów dla dużego centrum
        rozrywki - zaczynamy od rozmowy. Od zrozumienia, jakie emocje chcesz wywołać u swoich gości. Reszta to kwestia doświadczenia, pasji i
        konsekwencji w dążeniu do jakości.
      </p>
      <p>
        Każdy projekt to dla nas historia - a najlepsze historie powstają wtedy, gdy za koncepcją stoi człowiek, nie tylko komputer.
        Zapraszamy do zapoznania się z naszymi projektami, które dodajemy co tydzień i do rozmowy o Twoim pomyśle.
      </p>
    </>
  );
}

export function Projekty3dView() {
  return (
    <>
      <PageHero
        image={HERO_IMAGE}
        kicker="Sale Zabaw - WYBIERAJ ŚWIADOMIE"
        title="Sale Zabaw Projekty 3D"
        lead="Gotowe koncepcje wewnętrznych placów zabaw – stworzone z myślą o inwestorach. Wybierz projekt, który dopasujemy lub przeprojektujemy pod Twoją przestrzeń i budżet, z pełnym wsparciem na każdym etapie."
      >
        <Button href="#projekty" className={styles.heroBtn}>
          Zobacz Projekty
          <Icon name="arrowRight" className={styles.heroIcon} />
        </Button>
      </PageHero>

      <section className={styles.description}>
        <ReadMore moreLabel="Czytaj więcej" lessLabel="zwiń opis" links={[{ href: "/pl/montaz-sal-zabaw/", label: "Jak przebiega montaż" }]}>
          <Description />
        </ReadMore>
      </section>

      <section id="projekty" className={styles.projects} aria-label="Projekty 3D">
        <ProjectsCatalog projects={projects} />
      </section>
    </>
  );
}
