import type { ServicePageContent } from "@/components/pages/services/types";

const WHITE = "#ffffff";
const ROSE = "#f43f5e";
const ASK: { label: string; href: string } = { label: "Zapytaj o pakiet", href: "/pl/kontakt/" };

export const serwisContent: ServicePageContent = {
  hero: {
    type: "hero",
    image: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Indoor-Playgrounds-Service.webp",
    kicker: "serwis sal zabaw",
    h1: "kicker",
    kickerStyle: "labelBold",
    title: "Serwis i przeglądy Soft Play",
    titleSize: 32,
    lead: "Serwis sal zabaw zapewnia ciągłość działania Twojej strefy zabaw: szybka reakcja, zgodność z EN 1176/1177 i pełna dokumentacja serwisowa.",
  },
  sections: [
    {
      blocks: [
        { type: "heading", title: "Serwis to zabezpieczenie Twojej inwestycji" },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          items: [
            {
              icon: { name: "shieldThin", color: WHITE },
              title: "Bezpieczeństwo i zgodność",
              text: "Kontrole wykonywane według EN 1176/1177, protokoły i zalecenia — gotowe do audytów i ubezpieczyciela.",
            },
            {
              icon: { name: "fileCheckSolid", color: WHITE },
              title: "Przewidywalność kosztów",
              text: "Wczesne wykrycie zużycia i części do wymiany redukuje drogie przestoje i naprawy awaryjne.",
            },
            {
              icon: { name: "clock" },
              title: "Wizerunek i przychody",
              text: "Zadbana strefa = zaufanie rodziców i stały ruch. Działamy szybko, by nie blokować sprzedaży.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Zakres naszych usług serwisowych" },
        {
          type: "cards",
          cols: 2,
          tone: "glass",
          items: [
            {
              icon: { name: "clipboardList", color: WHITE },
              title: "Przeglądy okresowe",
              text: "Kontrola konstrukcji, mocowań, siatek, pianek i poszyć i zużycia innych materiałów. Raport PDF + zalecenia i priorytety napraw.",
              list: ["Testy funkcjonalne i bezpieczeństwa", "Lista części i kosztorys napraw", "Zgodność z EN 1176/1177"],
            },
            {
              icon: { name: "wrench", color: WHITE },
              title: "Konserwacja i naprawy",
              text: "Wymiana zużytych elementów, uzupełnianie poszyć, napinanie siatek, dokręcanie łączników, naprawy mechaniczne i estetyczne.",
              list: ["Standardowe części na stanie", "Prace poza godzinami otwarcia", "Dokumentacja powykonawcza"],
            },
            {
              icon: { name: "shieldThin", color: WHITE },
              title: "Higiena i dezynfekcja",
              text: "Czyszczenie elementów tapicerowanych, paneli i siatek przy użyciu profesjonalnych środków.",
              list: ["Plan higieny dostosowany do obiektu", "Środki z atestami", "Czyszczenie basenów z piłkami bądź piankami"],
            },
            {
              icon: { name: "message", color: WHITE },
              title: "Modernizacje i rozbudowa",
              text: "Doradztwo i instalacja nowych modułów (np. interaktywne panele), wymiany na nowsze generacje, korekta układu pod ruch gości.",
              list: ["Audyt atrakcyjności strefy", "Różne Warianty cenowe", "Realizacja „pod klucz”"],
            },
            {
              icon: { name: "clock", color: "var(--c-blue)" },
              title: "Serwis awaryjny",
              text: "Reagujemy zwykle w ≤ 120h, a w przypadkach krytycznych możliwa interwencja do 24h. Minimalizujemy przestoje i działamy na terenie całej Unii Europejskiej.",
              tone: "info",
              wide: true,
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Standard obsługi" },
        {
          type: "prose",
          paragraphs: [
            "Każde zgłoszenie serwisowe klasyfikujemy według priorytetu – dzięki temu możesz liczyć na przewidywalny czas reakcji i naprawy.",
          ],
        },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          items: [
            {
              icon: { name: "alert", color: ROSE },
              title: "Bezpieczeństwo i zgodność",
              text: "Natychmiastowa reakcja w przypadku zagrożenia bezpieczeństwa lub przerwy w działaniu strefy.",
              rows: [
                ["Reakcja", "≤ 24h"],
                ["Naprawa", "do 48h"],
                ["Dostępność", "7 dni w tygodniu"],
              ],
            },
            {
              icon: { name: "clock", color: "#d1a81e" },
              title: "Zgłoszenie standardowe",
              text: "Typowe zgłoszenia dotyczące napraw i konserwacji, bez zagrożenia bezpieczeństwa.",
              rows: [
                ["Reakcja", "≤ 120h"],
                ["Naprawa", "do 72h"],
                ["Dostępność", "pon-pt"],
              ],
            },
            {
              icon: { name: "clipboardList", color: "#0ea5e9" },
              title: "Przegląd okresowy",
              text: "Planowe przeglądy techniczne zgodne z normą EN 1176/1177 i harmonogramem klienta.",
              rows: [
                ["Ustalenie terminu", "z wyprzedzeniem"],
                ["Czas na miejscu", "5-10 dni (typowo)"],
                ["Dokumenty", "Raport PDF + zalecenia"],
              ],
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Dlaczego właściciele wybierają serwis IPC " },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          items: [
            {
              title: "Specjalizacja w systemach soft play i parkach trampolin",
              text: "Działamy wyłącznie w naszej branży — soft play, parki trampolin, tory ninja i konstrukcje modułowe. Dzięki temu znamy każdy detal, normę i potencjalne problemy techniczne jeszcze zanim się pojawią.",
            },
            {
              title: "Oryginalne lub równoważne komponenty",
              text: "W pierwszej kolejności stosujemy oryginalne części z naszej produkcji. Jeśli obsługujemy plac innego producenta — dobieramy certyfikowane zamienniki o porównywalnych parametrach, by zachować pełne bezpieczeństwo i estetykę.",
            },
            {
              title: "Dokumentacja i certyfikaty",
              text: "Po każdej wizycie otrzymujesz pełen zestaw materiałów: protokół serwisowy, raport zdjęciowy i potwierdzenie zgodności z EN 1176/1177 — gotowe do audytu i ubezpieczyciela.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Pakiety serwisowe sal zabaw" },
        {
          type: "cards",
          cols: 3,
          tone: "blue",
          titleSize: 22,
          items: [
            {
              title: "Basic",
              list: ["1 przegląd rocznie", "Rabat na części", "Standardowa reakcja (≤ 96h)"],
              button: ASK,
            },
            {
              title: "Biznes",
              tone: "amber",
              list: ["2 przeglądy rocznie", "Szkolenie personelu", "Priorytet w kalendarzu"],
              button: ASK,
            },
            {
              title: "Premium",
              tone: "green",
              list: ["4 przeglądów rocznie", "Priorytetowa ścieżka obsługi", "Rozszerzona Opieka serwisowa"],
              button: ASK,
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Kiedy warto zamówić serwis? " },
        {
          type: "cards",
          cols: 3,
          tone: "glass",
          iconSize: 35,
          titleSize: 16,
          titleWeight: 400,
          items: [
            { icon: { name: "wrenchSmall", color: "#0ea5e9" }, title: "Widzisz luźne mocowania, przetarcia lub zużyte siatki." },
            { icon: { name: "shield", color: "#34d399" }, title: "Elementy tracą kolor, napięcie lub sprężystość." },
            { icon: { name: "clock", color: "#cabd1c" }, title: "Ostatni przegląd był ponad 12 miesięcy temu." },
            { icon: { name: "alert", color: ROSE }, title: "Dzieci zaczynają omijać niektóre strefy." },
            { icon: { name: "clipboardList", color: WHITE }, title: "Zbliża się audyt lub kontrola jednostki certyfikującej." },
            {
              icon: { name: "fileCheck", color: ROSE },
              title: "Twoi klienci zaczynają zwracać uwagę na stan wyposażenia lub czystość strefy.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "FAQ — najczęstsze pytania " },
        {
          type: "prose",
          color: "var(--c-soft)",
          paragraphs: [
            "Zebraliśmy najważniejsze informacje o serwisach sal zabaw, które pomogą Ci lepiej zaplanować przegląd i serwis konstrukcji. Nasz zespół dba o bezpieczeństwo, wygodę i spokój właściciela obiektu.",
          ],
        },
        {
          type: "faq",
          columns: [
            [
              {
                question: "Jak często zamawiać przegląd?",
                answer: "Minimum 1 razy w roku. Przy dużym natężeniu ruchu rekomendujemy 2 razy przeglądów.",
              },
              {
                question: "Czy muszę zamknąć strefę na czas serwisu?",
                answer: "Nie zawsze — w większości przypadków wystarczy wyłączyć fragment strefy.",
              },
              {
                question: "Jak szybko możecie rozpocząć pracę?",
                answer: "W trybie standardowym w ciągu ≤120h, a w nagłych przypadkach oferujemy ekspresową interwencję.",
              },
              {
                question: "Czy oferujecie stałą opiekę serwisową?",
                answer: "Tak — proponujemy pakiety roczne z regularnymi przeglądami i raportowaniem online.",
              },
              {
                question: "Czy serwis obejmuje również czyszczenie?",
                answer: "Tak, oferujemy także kompleksowe czyszczenie konstrukcji i stref zabawy.",
              },
            ],
            [
              {
                question: "Co otrzymam po zakończeniu prac?",
                answer: "Raport PDF, protokół, listę części i zalecenia – wszystko w formie cyfrowej, gotowej do audytu.",
              },
              {
                question: "Czy mogę zlecić naprawę od razu po przeglądzie?",
                answer: "Tak — nasi technicy mogą przeprowadzić naprawy bezpośrednio po przeglądzie, jeśli to możliwe.",
              },
              {
                question: "Jak wygląda zgłoszenie serwisowe?",
                answer: "Wystarczy wypełnić krótki formularz online – skontaktujemy się, by ustalić termin wizyty.",
              },
              {
                question: "Czy mogę uzyskać pomoc poza godzinami pracy?",
                answer: "Tak, posiadamy całodobową linię zgłoszeń awaryjnych dla klientów z pakietem serwisowym.",
              },
              {
                question: "Czy mogę otrzymać przypomnienie o kolejnym przeglądzie?",
                answer: "Tak — nasz system automatycznie przypomina o zbliżających się terminach.",
              },
            ],
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Zgłoszenie serwisowe sali zabaw — krok po kroku " },
        {
          type: "steps",
          items: [
            {
              title: "Wyślij zgłoszenie lub zadzwoń",
              subtitle: "Formularz online, telefon lub WhatsApp.",
              body: [
                "Nawet najlepsza rozmowa nie zastąpi zdjęć — to one pozwalają nam dokładnie ocenić nie tylko uszkodzony element, ale też całe otoczenie problemu. Dołącz więc kilka fotografii lub krótkie wideo z opisem i lokalizacją.",
                [
                  "Im więcej szczegółów nam przekażesz, tym szybciej i dokładniej zaplanujemy działania. Rekomendujemy przesłanie zgłoszenia przez ",
                  { strong: "WhatsApp" },
                  " — to najszybszy i darmowy sposób komunikacji, bez kosztów rozmów.",
                ],
                "Jeśli wolisz — możesz wysłać zgłoszenie również mailowo. Wtedy zostanie ono oznaczone jako priorytet w naszym systemie i przeanalizowane jako jedno z pierwszych po rozpoczęciu dnia pracy.",
              ],
            },
            {
              title: "Diagnoza i plan",
              subtitle: "Analiza materiałów, wycena i termin wizyty.",
              body: [
                "Analizujemy wszystkie przesłane zdjęcia i materiały, aby dokładnie zrozumieć zakres usterki. Następnie przygotowujemy wycenę części oraz robocizny i przesyłamy Ci kosztorys wraz z proponowanym terminem realizacji.",
                [
                  "Po akceptacji kosztorysu wysyłamy ",
                  { strong: "fakturę proforma" },
                  " do opłacenia — dotyczy to sytuacji, gdy nie korzystasz z naszych pakietów serwisowych.",
                ],
                "Wszystko odbywa się w formie elektronicznej, aby maksymalnie skrócić czas reakcji.",
              ],
            },
            {
              title: "Wizyta serwisowa",
              subtitle: "Przebieg prac i komunikacja z klientem.",
              body: [
                "Plan wizyty otrzymasz z wyprzedzeniem na swój adres e-mail — dzięki temu będziesz dokładnie wiedzieć, która strefa zostanie wyłączona jako pierwsza i na jakich elementach skupimy się w pierwszej kolejności.",
                "Nasi technicy pracują etapami, by nie blokować całej strefy zabaw i ograniczyć przestoje do minimum. Wszystkie potrzebne części mamy przygotowane przed przyjazdem ekipy — dzięki wcześniejszej analizie zdjęć i materiałów.",
                "Dzięki temu większość napraw wykonujemy od razu na miejscu, bez konieczności ponownej wizyty i bez niepotrzebnych opóźnień.",
              ],
            },
            {
              title: "Raport, rekomendacje i faktura końcowa",
              subtitle: "Pełna dokumentacja + zalecenia.",
              body: [
                "Po zakończeniu serwisu otrzymujesz kompletny raport PDF z listą wykonanych czynności, rekomendacjami i planem dalszych działań.",
                [
                  "Do raportu dołączamy również ",
                  { strong: "fakturę końcową" },
                  " oraz dokumentację fotograficzną, dzięki czemu wszystko masz w jednym miejscu — gotowe do audytu lub okazania ubezpieczycielowi.",
                ],
                "W raporcie znajdziesz też propozycję harmonogramu kolejnych przeglądów, aby zachować bezpieczeństwo i ciągłość pracy strefy.",
              ],
            },
          ],
          contacts: [
            { label: "Zadzwoń", href: "tel:+48663960969", icon: "phone" },
            {
              label: "WhatsApp",
              href: "https://api.whatsapp.com/send/?phone=48663960969&text&type=phone_number&app_absent=0",
              icon: "whatsapp",
            },
            { label: "Zgłoś Serwis", href: "/pl/zgloszenie-serwisowe/", icon: "arrowRight" },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Nie znalazłeś odpowiedzi na swoje pytania? ", align: "center" },
        {
          type: "prose",
          align: "center",
          narrow: true,
          color: "var(--c-text)",
          paragraphs: [
            "Skontaktuj się z nami — doradzimy w kwestiach przeglądów, napraw i modernizacji konstrukcji. Jeśli stan Twojej strefy zabaw wymaga większej interwencji, być może to dobry moment, aby podnieść jej standard i atrakcyjność poprzez pełną modernizację. Pomożemy Ci ocenić, co będzie najlepszym rozwiązaniem dla Twojego obiektu.",
          ],
        },
        {
          type: "buttons",
          buttons: [
            { label: "Skontaktuj się z nami", href: "/pl/kontakt/", arrow: true },
            { label: "Zobacz, jak wygląda modernizacja", href: "/pl/przebudowa/", arrow: true },
          ],
        },
      ],
    },
  ],
};
