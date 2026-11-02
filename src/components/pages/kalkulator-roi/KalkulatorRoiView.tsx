import { Button, PageHero } from "@/components/ui";
import { ReadMore } from "./ReadMore";
import { RoiForm, RoiProvider, RoiResults } from "./RoiCalculator";
import styles from "./KalkulatorRoi.module.css";

const HERO_IMAGE = "https://indoorplayconcept.com/wp-content/uploads/2025/12/Kalkulator-Roi-Indoor-Playgrounds.webp";

function Description() {
  return (
    <>
      <p>
        Zwrot z inwestycji (ROI, Return on Investment) to jedno z najważniejszych zagadnień dla każdego inwestora planującego otwarcie
        wewnętrznego placu zabaw. W praktyce ROI pokazuje, jak szybko środki przeznaczone na budowę i wyposażenie obiektu zaczynają się
        zwracać dzięki przychodom generowanym przez odwiedzających. W Indoor Play Concept od lat pomagamy przedsiębiorcom i inwestorom
        oceniać potencjał takich inwestycji, projektując strefy zabaw, które łączą funkcjonalność, bezpieczeństwo i rentowność.
      </p>
      <p>
        Kalkulator ROI Indoor Play Concept to proste narzędzie, które pozwala oszacować, jak długo potrwa zwrot z inwestycji w Twój plac
        zabaw. Na podstawie danych takich jak populacja w zasięgu, procent odwiedzających, cena biletu czy koszty stałe, można szybko
        sprawdzić, czy planowana realizacja jest opłacalna i w jakim czasie zacznie przynosić zysk.
      </p>
      <div role="heading" aria-level={2}>
        Co wpływa na ROI
      </div>
      <p>Na wynik ROI wpływa wiele czynników:</p>
      <ul>
        <li>lokalizacja obiektu i liczba potencjalnych odwiedzających,</li>
        <li>cena biletu oraz dodatkowe źródła przychodu (urodziny, gastronomia, automaty),</li>
        <li>koszt najmu, wynagrodzenia pracowników i opłaty eksploatacyjne,</li>
        <li>sezonowość oraz sposób prowadzenia marketingu,</li>
        <li>trwałość i jakość zastosowanych materiałów w konstrukcjach soft play.</li>
      </ul>
      <p>
        Jako producent wewnętrznych placów zabaw, Indoor Play Concept dostarcza nie tylko profesjonalne konstrukcje, ale również wiedzę o
        tym, jak zwiększyć rentowność inwestycji. Dzięki doświadczeniu w projektowaniu, produkcji i montażu placów zabaw możemy doradzić,
        jak zoptymalizować powierzchnię, dobrać odpowiednie atrakcje i zrównoważyć koszty eksploatacji z przychodami.
      </p>
      <div role="heading" aria-level={2}>
        Jak szybko zwraca się inwestycja
      </div>
      <p>
        Dobrze zaplanowana inwestycja w plac zabaw potrafi zwrócić się w ciągu kilku lat, a odpowiednie zaprojektowanie stref
        urodzinowych, kawiarni czy przestrzeni tematycznych może znacząco skrócić ten czas. ROI to nie tylko liczby, to realny obraz tego,
        jak przemyślany projekt przekłada się na stabilny biznes strefy rodzinnej.
      </p>
      <p>
        Statystyki pokazują, że aż 34% firm nie mierzy regularnie swojego ROI, a tylko około 30% marketerów potrafi rzetelnie ocenić zwrot
        z działań. Tymczasem firmy, które monitorują ROI, osiągają wyższą skuteczność i szybciej podejmują trafne decyzje.
      </p>
      <div role="heading" aria-level={2}>
        Dlaczego warto skorzystać z kalkulatora
      </div>
      <p>
        Dlatego właśnie warto poświęcić chwilę na uzupełnienie kalkulatora. Pozwoli Ci on zobaczyć potencjał Twojego parku, uniknąć
        błędnych założeń i podejmować decyzje oparte na faktach. Wasz sukces jest naszym sukcesem, im lepiej znasz liczby, tym pewniej
        budujesz przyszłość.
      </p>
      <p>Zacznij od analizy. Sprawdź, jakie wyniki daje Twój pomysł w naszym kalkulatorze ROI, a następnie porozmawiajmy o koncepcji.</p>
    </>
  );
}

export function KalkulatorRoiView() {
  return (
    <>
      <PageHero
        image={HERO_IMAGE}
        kicker="KALKULATOR ROI"
        title="Kalkulator zwrotu z inwestycji"
        lead="Podaj własne założenia. Zobacz szacunkowe przychody, koszty i orientacyjny czas zwrotu inwestycji."
      />

      <section className={styles.intro}>
        <h2 className={styles.h2}>Jaki jest zwrot z inwestycji (ROI) dla wewnętrznego placu zabaw?</h2>
        <ReadMore moreLabel="czytaj więcej" lessLabel="zwiń opis">
          <Description />
        </ReadMore>
      </section>

      <RoiProvider>
        <section className={styles.columns}>
          <div className={styles.col}>
            <h2 className={styles.h2}>Jak interpretować wyniki</h2>
            <p className={styles.p}>
              Kalkulator pokazuje orientacyjny wynik na podstawie Twoich danych. Traktuj go jako punkt wyjścia do rozmowy o budżecie i
              modelu działania. Wyniki zależą od lokalnego rynku i sposobu organizacji pracy.
            </p>
            <div className={styles.notes}>
              <p>
                <strong>Populacja i odwiedzający:</strong> przy nowym obiekcie zwykle 2–5% populacji miesięcznie. Zweryfikuj lokalnie.
              </p>
              <p>
                <strong>Przychód na dziecko:</strong>&nbsp;bilet + wydatki dodatkowe (gastronomia, automaty, urodziny).
              </p>
              <p>
                <strong>Koszty personelu:</strong>&nbsp;zależne od grafiku i metrażu. Uwzględnij przerwy, szkolenia i sezonowość.
              </p>
              <p>
                <strong>Leasing:</strong>&nbsp;najczęściej 5–7 lat; jego koszt wpływa na czas zwrotu inwestycji.
              </p>
            </div>
            <div className={styles.tips}>
              <h3>Wskazówki praktyczne</h3>
              <ul>
                <li>Analizuj ruch weekendowy i codzienny – dostosuj godziny otwarcia.</li>
                <li>Planuj przeglądy techniczne z wyprzedzeniem (EN 1176/1177).</li>
                <li>Monitoruj opinie klientów – drobne korekty często przynoszą duży efekt.</li>
                <li>Łącz ofertę urodzin z gastronomią – upraszcza decyzje rodziców.</li>
              </ul>
            </div>
          </div>

          <div className={styles.col}>
            <h2 className={styles.h2}>Podstawowe założenia</h2>
            <p className={styles.p}>Wpisz własne dane i obserwuj, jak zmienia się wynik. Kalkulator przelicza wszystko automatycznie.</p>
            <RoiForm />
          </div>
        </section>

        <section className={styles.resultsSection}>
          <h2 className={`${styles.h2} ${styles.center}`}>Wyniki kalkulacji</h2>
          <RoiResults />
          <div className={styles.cta}>
            <Button href="/pl/kontakt/">Porozmawiajmy o Twoich założeniach</Button>
          </div>
          <p className={styles.note}>
            Wyniki mają charakter orientacyjny. Razem zweryfikujemy lokalny potencjał i optymalny model działania.
          </p>
        </section>
      </RoiProvider>
    </>
  );
}
