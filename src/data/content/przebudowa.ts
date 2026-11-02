import type { ServicePageContent } from "@/components/pages/services/types";

const GREEN = "#34d399";
const AMBER = "#fbbf24";
const ROSE = "#fb7185";
const SKY = "#38bdf8";

export const przebudowaContent: ServicePageContent = {
  hero: {
    type: "hero",
    image: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Soft-Play-Modernization.webp",
    kicker: "PRZEBUDOWA",
    h1: "title",
    kickerStyle: "plain",
    title: "Przebudowa i modernizacja Twojej sali zabaw",
    titleSize: 40,
    lead: "Zmodernizuj swoją strefę zabaw — wprowadzamy nowoczesne moduły, podnosimy bezpieczeństwo i zwiększamy atrakcyjność inwestycji.",
  },
  sections: [
    {
      blocks: [
        { type: "heading", title: "Dlaczego przebudować strefę zabaw? " },
        {
          type: "prose",
          size: 17,
          paragraphs: [
            "Każda strefa zabaw z czasem ulega zużyciu — poszycia tracą kolor, materiały obiciowe się przecierają, a atrakcyjność poszczególnych modułów maleje wraz z pojawianiem się nowych, bardziej zaawansowanych rozwiązań na rynku. Dlatego co kilka lat warto zastanowić się nad jej modernizacją. Przebudowa nie musi oznaczać całkowitej zmiany — czasami wystarczy wymiana kilku kluczowych elementów, aby miejsce zyskało świeżość i przyciągnęło nowych gości. W świecie rozrywki dla dzieci trendy zmieniają się dynamicznie: pojawiają się technologie interaktywne, tory przeszkód inspirowane telewizyjnymi show, zjeżdżalnie tunelowe o nietypowych kształtach. Wprowadzenie takich elementów pozwala wyróżnić się na tle konkurencji i przedłużyć cykl życia istniejących instalacji.",
            "Przebudowa to także okazja do optymalizacji przestrzeni. Strefy zabaw często powstają w istniejących budynkach, gdzie powierzchnia jest ograniczona. Z czasem, gdy poznasz preferencje swoich gości i obserwujesz zachowanie dzieci, możesz zidentyfikować obszary, które generują tłok lub nie są w pełni wykorzystywane. Modernizując układ i łącząc moduły w nowe konfiguracje, zwiększasz przepustowość strefy, poprawiasz płynność poruszania się i tworzysz strefy tematyczne, które odpowiadają różnym grupom wiekowym. Dzięki temu rodzice łatwiej kontrolują zabawę swoich pociech, a dzieci spędzają czas aktywnie i bezpiecznie.",
            "Nie bez znaczenia jest także aspekt bezpieczeństwa i zgodności z aktualnymi normami. Przepisy EN 1176/1177 są regularnie uaktualniane, a nowe wytyczne mogą wymagać dostosowania istniejących konstrukcji. Przebudowa strefy zabaw to najlepszy moment, by wprowadzić zmiany wynikające z najnowszych przepisów i wytycznych jednostki certyfikującej. Modernizacja obejmuje m.in. dostosowanie wysokości barier ochronnych, wzmocnienie konstrukcji, wymianę zużytych lin i siatek oraz zastosowanie nowych materiałów amortyzujących o lepszych parametrach tłumienia energii. Dzięki temu zyskujesz pewność, że Twoja strefa zabaw spełnia najwyższe standardy i możesz bez obaw zapraszać do niej dzieci w każdym wieku.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Korzyści z modernizacji" },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          iconSize: 35,
          descSize: 17,
          items: [
            {
              icon: { name: "sparkles" },
              title: "Nowe doznania dla gości -",
              text: "wprowadzając świeże atrakcje, zaskakujesz stałych bywalców i zachęcasz nowych użytkowników do odwiedzin. Badania pokazują, że odświeżone strefy zabaw generują nawet o 35 % wyższy ruch w pierwszym roku po modernizacji.",
            },
            {
              icon: { name: "trendingUp", color: GREEN },
              title: "Zwiększenie przychodów -",
              text: "nowości w ofercie dają podstawę do podniesienia cen biletów i organizacji dodatkowych wydarzeń, takich jak turnieje na torze ninja czy warsztaty dla dzieci. Dodatkowo strefa staje się bardziej atrakcyjna dla organizatorów urodzin i imprez grupowych.",
            },
            {
              icon: { name: "cpu", color: SKY },
              title: "Dopasowanie do zmieniających się trendów -",
              text: "interaktywne technologie, sensoryczne moduły czy strefy VR to elementy, które dziś przyciągają dzieci i młodzież. Dzięki przebudowie możesz je wprowadzić, unikając kosztów budowy nowej strefy od zera.",
            },
            {
              icon: { name: "shieldCheck", color: GREEN },
              title: "Oszczędność na serwisie -",
              text: "wymiana zużytych komponentów i zastosowanie nowych materiałów konstrukcyjnych sprawia, że strefa staje się bardziej odporna na uszkodzenia. To obniża koszty konserwacji i zmniejsza liczbę awarii wymagających interwencji serwisowej.",
            },
            {
              icon: { name: "layoutGrid", color: AMBER },
              title: "Lepsze wykorzystanie przestrzeni -",
              text: "przebudowując układ i reorganizując moduły, możesz uzyskać więcej wolnej przestrzeni do odpoczynku dla rodziców lub wydzielić osobną strefę dla najmłodszych dzieci.",
            },
            {
              icon: { name: "gift", color: ROSE },
              title: "Pakiet otwarcia w cenie -",
              text: "dostajesz gotowe materiały promocyjne (grafiki, krótkie wideo, szablony postów), harmonogram kampanii oraz checklistę wydarzenia re-openingu. Efekt: szybki start i natychmiastowy wzrost wizyt bez dodatkowych kosztów.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Zakres usług przebudowy " },
        {
          type: "cards",
          cols: 2,
          tone: "glass",
          iconSize: 35,
          descSize: 17,
          items: [
            {
              icon: { name: "lightbulb", color: AMBER },
              title: "Analiza i konsultacje",
              text: "przeprowadzamy wstępną diagnozę obecnej strefy, identyfikujemy elementy wymagające wymiany i proponujemy rozwiązania zwiększające atrakcyjność. Nasze konsultacje obejmują także przewidywany koszt inwestycji i propozycje marketingowe.",
            },
            {
              icon: { name: "ruler", color: SKY },
              title: "Projekt koncepcyjny",
              text: "tworzymy wizualizacje i rzuty 3D, które prezentują nowe konfiguracje strefy. Uwzględniamy ergonomię, bezpieczeństwo, przepustowość i preferencje Twojej grupy docelowej.",
            },
            {
              icon: { name: "rotateCcw" },
              title: "Demontaż i odzysk",
              text: "demontujemy stare moduły w sposób, który pozwala ponownie wykorzystać części w dobrym stanie. Dzięki temu obniżamy koszty i zmniejszamy ilość odpadów.",
            },
            {
              icon: { name: "hammer" },
              title: "Wymiana i montaż",
              text: "instalujemy nowe moduły, uzupełniamy je o nowoczesne elementy interaktywne, wymieniamy poszycia, liny i siatki. Prace wykonujemy z zachowaniem norm EN 1176/1177.",
            },
            {
              icon: { name: "boxes", color: GREEN },
              title: "Modernizacja podłoża",
              text: "w razie potrzeby instalujemy nowe maty amortyzujące lub materiały antypoślizgowe na platformach poprawiając bezpieczeństwo i estetykę.",
            },
            {
              icon: { name: "layers", color: ROSE },
              title: "Odświeżenie wyglądu",
              text: "wymieniamy kolorystykę, wprowadzamy motywy tematyczne (piraci, kosmos, dziki zachód), montujemy elementy dekoracyjne oraz oświetlenie LED, które tworzy wyjątkowy klimat.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Proces modernizacji krok po kroku " },
        {
          type: "numbered",
          items: [
            "Kontakt i wstępna wycena. Skontaktuj się z nami, aby porozmawiać o potrzebach swojej strefy. Na podstawie krótkiego wywiadu przygotujemy wstępną wycenę i zaproponujemy termin wizji lokalnej.",
            "Wizja lokalna i szczegółowa analiza. Nasi specjaliści odwiedzą Twój obiekt, aby dokonać dokładnych pomiarów, ocenić stan techniczny konstrukcji i zidentyfikować potencjał przestrzeni. Na tym etapie omawiamy Twoje oczekiwania, inspiracje oraz ograniczenia.",
            "Projekt i harmonogram prac. Opracowujemy kilka wariantów projektu modernizacji wraz z dokładnym kosztorysem i harmonogramem. Uwzględniamy kolejność etapów, czas potrzebny na demontaż, montaż i prace wykończeniowe.",
            "Realizacja modernizacji. Demontujemy stare elementy, dokonujemy ewentualnych napraw strukturalnych, montujemy nowe moduły i instalacje. Dbamy o jakość wykonania, pracujemy dłużej każdego dnia, aby skrócić czas wyłączenia obiektu z użytku.",
            "Testy i odbiór. Po zakończeniu prac przeprowadzamy testy bezpieczeństwa, szkolimy personel z obsługi nowych urządzeń i przekazujemy pełną dokumentację odbiorową. Po uruchomieniu strefy jesteśmy do dyspozycji w zakresie serwisu i dalszych usprawnień.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Pakiety modernizacyjne" },
        {
          type: "prose",
          paragraphs: [
            "Każdy projekt jest inny, dlatego oferujemy trzy pakiety modernizacji, które można dopasować do budżetu i oczekiwań. Wszystkie pakiety uwzględniają nadzór techniczny i zgodność z normami.",
          ],
        },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          titleSize: 19,
          items: [
            {
              title: "Pakiet Odświeżenie",
              text: "Skupia się na wymianie zużytych poszyć, lin i elementów amortyzujących, drobnej rearanżacji układu oraz dodaniu nowych kolorów i motywów dekoracyjnych. Doskonały dla stref, które potrzebują oddechu bez rewolucyjnych zmian.",
            },
            {
              title: "Pakiet Upgrade",
              text: "Obejmuje wprowadzenie nowych modułów (np. tor ninja, trampoliny), zmianę konfiguracji konstrukcji, modernizację podłoża oraz wymianę kluczowych elementów konstrukcyjnych. Umożliwia znaczący wzrost atrakcyjności i przepustowości strefy.",
            },
            {
              title: "Pakiet Total",
              text: "Całościowa przebudowa z pełnym demontażem i budową nowej strefy w oparciu o najnowsze trendy. Obejmuje projekt koncepcyjny, pełne prace rozbiórkowo‑montażowe i instalacje multimedialne. Idealny dla obiektów, które chcą zdominować rynek regionalny.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Najczęściej zadawane pytania " },
        {
          type: "faq",
          columns: [
            [
              {
                question: "Ile trwa przebudowa strefy zabaw?",
                answer:
                  "Czas modernizacji zależy od zakresu prac. Drobne odświeżenie można wykonać w ciągu kilku dni, natomiast pełna przebudowa z instalacją nowych modułów i zmianą układu trwa zazwyczaj około dwóch tygodni. Harmonogram ustalamy indywidualnie, aby zminimalizować przestoje w działalności.",
              },
              {
                question: "Czy w trakcie modernizacji obiekt musi być zamknięty?",
                answer:
                  "Nie zawsze. W wielu przypadkach możemy wyłączyć z użytku tylko fragment strefy i prowadzić prace etapami. Przy większych modernizacjach proponujemy prowadzenie montażu nocą lub poza godzinami szczytu, aby zachować ciągłość działania obiektu.",
              },
              {
                question: "Ile to kosztuje i czy wycena jest bezpłatna?",
                answer: [
                  "Wstępna wycena jest ",
                  { strong: "bezpłatna" },
                  ". Po krótkim wywiadzie i obejrzeniu materiałów (zdjęcia/wideo) przygotujemy kosztorys od odświeżenia po pełny upgrade. Dzięki temu wybierasz zakres, który daje najlepszy stosunek efektów do budżetu.",
                ],
              },
              {
                question: "Czy mogę rozłożyć modernizację na etapy, by nie tracić przychodu?",
                answer: [
                  "Tak. ",
                  { strong: "Plan etapowy" },
                  " to najczęstszy wybór — wyłączamy tylko fragment strefy i pracujemy poza szczytem, aby minimalizować przestoje. Ustalamy kolejność tak, by ",
                  { strong: "każdy etap przynosił widoczny efekt" },
                  " i szybki zwrot z inwestycji.",
                ],
              },
              {
                question: "Czy oferujecie finansowanie (raty/leasing) lub odkup starej konstrukcji?",
                answer: [
                  "Pomagamy w organizacji ",
                  { strong: "leasingu/rat" },
                  " oraz możemy wesprzeć",
                  { strong: " odsprzedaż obecnej konstrukcji" },
                  " (wycena, ogłoszenie, demontaż). To realnie obniża koszt wejścia w nową, atrakcyjniejszą strefę.",
                ],
              },
            ],
            [
              {
                question: "Jakie dokumenty otrzymuję po przebudowie?",
                answer:
                  "Po zakończeniu prac przekazujemy pełną dokumentację: protokół odbioru, certyfikaty użytych materiałów, instrukcje obsługi i konserwacji nowych modułów oraz dokumentację projektową, która ułatwi przyszłe serwisowanie i ewentualne rozbudowy.",
              },
              {
                question: "Czy zobaczę projekt 3D przed podjęciem decyzji?",
                answer: [
                  "Tak — przygotowujemy ",
                  { strong: "wizualizacje 3D" },
                  " i warianty układu. Zobaczysz, jak zmieni się przepływ gości, strefy wiekowe i najważniejsze moduły. To ułatwia decyzję i pozwala porównać opcje.",
                ],
              },
              {
                question: "Jak szybko możecie zacząć i ile zajmie realizacja?",
                answer: [
                  "Po akceptacji projektu i kosztorysu rezerwujemy najbliższy termin ekipy.",
                  { strong: " Drobne modernizacje" },
                  " zamykamy zwykle w kilka dni, a",
                  { strong: " większe" },
                  " — w 2–4 tygodnie (w trybie etapowym, z minimalnym wpływem na sprzedaż).",
                ],
              },
              {
                question: "Jakie mam zabezpieczenia po modernizacji (gwarancja/serwis)?",
                answer: [
                  "Otrzymujesz ",
                  { strong: "gwarancję" },
                  " na wykonane prace i komponenty, pełną ",
                  { strong: "dokumentację" },
                  " oraz możliwość dołączenia do",
                  { strong: " pakietu serwisowego" },
                  " (przeglądy, priorytet reakcji, zniżki na części). To utrzymuje wysoką jakość i stabilny przychód.",
                ],
              },
              {
                question: "Czy pomagacie w marketingu po modernizacji?",
                answer: [
                  "Tak — udostępniamy zdjęcia/wideo z realizacji, materiały do social mediów i wskazówki promocyjne, aby ",
                  { strong: "na starcie zwiększyć ruch" },
                  " i szybciej „odpalić” sprzedaż.",
                ],
              },
            ],
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Skontaktuj się z nami ", align: "center" },
        {
          type: "prose",
          align: "center",
          size: 17,
          paragraphs: [
            "Czy Twoja strefa zabaw potrzebuje odświeżenia? Niezależnie od tego, czy planujesz drobne zmiany, czy kompletną metamorfozę, chętnie doradzimy i przygotujemy indywidualną wycenę. Zaufaj naszemu doświadczeniu i przekonaj się, jak modernizacja może zwiększyć atrakcyjność Twojego obiektu.",
            [
              "Nie jesteś jeszcze zdecydowany na modernizację? Rozważ",
              { strong: " sprzedaż obecnej konstrukcji" },
              " — możemy pomóc w wycenie, przygotowaniu oferty, demontażu i znalezieniu kupującego. Alternatywnie wymienimy Twoją konstrukcję na",
              { strong: " zupełnie nową" },
              ", a Ty możesz wybrać rozwiązanie z naszej ",
              { strong: "bazy gotowych projektów 3D" },
              ".",
            ],
            ["Jeśli kupiłeś konstrukcję u nas, otrzymasz", { strong: " rabat" }, " na modernizację lub wymianę."],
          ],
        },
        {
          type: "buttons",
          buttons: [
            { label: "Przeglądaj projekty 3D", href: "/pl/sale-zabaw-projekty-3d/" },
            { label: "Kontakt", href: "/pl/kontakt/" },
            { label: "Umów Konsultację", href: "/pl/konsultacja/" },
          ],
        },
      ],
    },
  ],
};
