import type { ServicePageContent } from "@/components/pages/services/types";

const BLUE = "#0ea5e9";
const WHITE = "#ffffff";

export const montazContent: ServicePageContent = {
  hero: {
    type: "hero",
    image: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Montaz-Soft-Play.webp",
    kicker: "montaż sal zabaw",
    h1: "kicker",
    kickerStyle: "label",
    title: "Montaż systemu wewnętrznego placu zabaw",
    titleSize: 45,
    lead: "Montaż sal zabaw to etap, w którym koncepcja staje się rzeczywistością. Zapewniamy precyzyjny montaż, pełną dokumentację i odbiór bez stresu. Zadbamy o wszystko.",
  },
  sections: [
    {
      blocks: [
        { type: "heading", title: "Nasze atuty montażowe" },
        {
          type: "stats",
          items: [
            { label: "Instalacji", value: 150, suffix: "+" },
            { label: "Czas reakcji serwisu w okresie gwarancji", value: 72, suffix: "h" },
            { label: "Gwarancji", value: 24, suffix: "m-cy" },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Dlaczego wybrać IPC? " },
        {
          type: "cards",
          cols: 3,
          tone: "solid",
          descColor: "var(--c-soft)",
          items: [
            {
              icon: { name: "star" },
              title: "Jakość premium",
              text: "Komponenty o zwiększonej wytrwałości, staranne dopasowanie, estetyczne wykończenie.",
            },
            {
              icon: { name: "clock" },
              title: "Szybka realizacja",
              text: "Montaż planowany z wyprzedzeniem i prowadzony etapami — krótszy czas realizacji bez kompromisów jakościowych.",
            },
            {
              icon: { name: "users", color: WHITE },
              title: "Dyskretna ekipa",
              text: "Pracujemy z poszanowaniem przestrzeni obiektu — cicho, schludnie i w pełnej koordynacji z personelem.",
            },
          ],
        },
        {
          type: "cards",
          cols: [3, 2],
          tone: "solid",
          iconSize: 24,
          titleSize: 21,
          items: [
            {
              icon: { name: "compass" },
              title: "Płynny start",
              text: "Harmonogram dopasowany do każdego projektu — bieżące raporty i kontakt 1:1. Zgodność z EN 1176/1177 oraz pełna dokumentacja powykonawcza.",
              tone: "fade",
              stats: [
                { value: "Optymalny", label: "harmonogram" },
                { value: "1:1", label: "z projektem" },
                { value: "Pełna", label: "dokumentacja" },
              ],
            },
            {
              icon: { name: "shieldThin", color: WHITE },
              title: "Mniej ryzyka",
              text: "Instalacja zgodna z projektem i normami EN 1176/1177. Wszystkie elementy przetestowane pod kątem trwałości i bezpieczeństwa użytkowania.",
            },
          ],
        },
        {
          type: "cards",
          cols: 2,
          tone: "solid",
          iconSize: 24,
          titleSize: 21,
          items: [
            {
              icon: { name: "fileCheckSolid", color: WHITE },
              title: "Dokumentacja i odbiór",
              text: "Zestaw dokumentów, certyfikatów i kart produktu przekazujemy w gotowej formie do audytu lub inspekcji.",
            },
            {
              icon: { name: "clock" },
              title: "Montaż poza godzinami",
              text: "Jeśli wymaga tego harmonogram obiektu — realizujemy prace nocne lub rotacyjne, z zachowaniem pełnego bezpieczeństwa.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          title: "Proces montażu sal zabaw",
          size: 45,
          subtitle: "Pięć kroków — od logistyki po przekazanie certyfikatów.",
        },
        {
          type: "cards",
          cols: 5,
          tone: "plain",
          iconSize: 24,
          titleSize: 21,
          items: [
            {
              icon: { name: "clipboardList", color: BLUE },
              title: "Logistyka i dostawa",
              text: "Analizujemy możliwe rozwiązania logistyczne i koordynujemy dostawy z innymi ekipami pracującymi na obiekcie, aby uniknąć kolizji prac. Materiały składowane są w miejscach uzgodnionych z inwestorem lub osobą odpowiedzialną.",
            },
            {
              icon: { name: "wrenchSmall", color: BLUE },
              title: "Instalacja główna",
              text: "Montujemy kompletną konstrukcję, mocując ją do podłoża i kluczowych punktów nośnych, aby zapewnić maksymalną stabilność i bezpieczeństwo.",
            },
            {
              icon: { name: "circleCheck", color: BLUE },
              title: "Wykończenie i detale",
              text: "Pracujemy szybko, ale z pełną precyzją — dbamy o każdy szczegół projektu oraz ustalenia w kontrakcie.",
            },
            {
              icon: { name: "shield", color: BLUE },
              title: "Testy i odbiór",
              text: "W większości przypadków kończymy prace dzień przed planowanym odbiorem, aby inspekcja przebiegła sprawnie i bez stresu.",
            },
            {
              icon: { name: "fileCheck", color: BLUE },
              title: "Dokumentacja i przekazanie",
              text: "Dokumentacja przekazywana jest podczas odbioru do rąk inwestora. Po uzyskaniu certyfikatu przekazujemy go niezwłocznie klientowi, a na życzenie pomagamy również w analizie ryzyka.",
            },
          ],
        },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          title: "Montaż sal zabaw w praktyce",
          subtitle:
            "Z doświadczenia o instalacji wiemy, że dobrze zorganizowany montaż to nie tylko szybkość. To precyzja, komunikacja i bezpieczeństwo, które pozwalają inwestorowi spać spokojnie. ",
          subtitleColor: "#bababa",
        },
        {
          type: "listCards",
          items: [
            {
              title: "Nasze standardy pracy ",
              list: [
                "Zawsze pracujemy według zatwierdzonego projektu — bez improwizacji.",
                "Każdy etap montażu dokumentujemy zdjęciowo (na życzenie klienta).",
                "Zespół montażowy jest stały — bez przypadkowych podwykonawców.",
                "Po zakończeniu pozostawiamy obiekt w pełnym porządku i gotowy do odbioru.",
              ],
            },
            {
              title: "Dlaczego inwestorzy nam ufają",
              list: [
                "Stały kontakt z koordynatorem montażu od pierwszego dnia.",
                "Transparentny harmonogram i codzienne podsumowania prac.",
                "Dostosowanie godzin pracy do rytmu obiektu.",
                "Bezpieczeństwo i zgodność z EN 1176/1177 potwierdzona dokumentacją.",
              ],
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Tak budujemy spokój inwestora" },
        {
          type: "prose",
          as: "h2",
          size: 17,
          paragraphs: [
            "Każdy montaż realizujemy z poszanowaniem zasad bezpieczeństwa i dobrych praktyk obowiązujących w kraju, w którym pracujemy. Niezależnie od miejsca — zawsze działamy odpowiedzialnie wobec ludzi, przestrzeni i czasu.",
            "Dbamy o komfort i regenerację naszej ekipy, bo wiemy, że wypoczęty zespół to precyzja, uważność i mniejsza wypadkowość. Każdy dzień pracy planowany jest tak, by utrzymać tempo bez presji i kompromisów jakościowych.",
            "Po zakończeniu montażu zostawiamy obiekt w czystości. Odpady, opakowania i zabezpieczenia są usuwane zgodnie z zasadami recyklingu oraz lokalnymi przepisami środowiskowymi.",
            "Jeszcze przed rozpoczęciem prac przekazujemy inwestorowi klarowne wytyczne: zakres przygotowania obiektu, punkty przyłączeniowe i strefy bezpieczeństwa. Dzięki temu instalacja przebiega bez niespodzianek.",
          ],
        },
        {
          type: "prose",
          color: "var(--c-soft)",
          paragraphs: [
            [
              {
                em: "Wierzymy, że profesjonalny montaż to nie tylko złożenie konstrukcji — to kultura pracy, w której liczy się każdy szczegół i każdy człowiek.",
              },
            ],
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Najczęstsze pytania o montaż sal zabaw" },
        {
          type: "faq",
          columns: [
            [
              {
                question: "Jak długo trwa montaż systemu soft play?",
                answer:
                  "To zależy od skali i złożoności projektu — zwykle od kilku do kilkunastu dni, po wcześniejszym uzgodnieniu harmonogramu.",
              },
              {
                question: "Czy montujecie w działającym obiekcie?",
                answer:
                  "Tak. Pracujemy etapami i w koordynacji z personelem obiektu; w razie potrzeby realizujemy prace poza godzinami szczytu.",
              },
              {
                question: "Jakie dokumenty otrzymam po montażu?",
                answer: "Komplet: instrukcje, karty produktu, protokoły odbioru oraz dokumenty zgodności pod audyt lub inspekcję.",
              },
              {
                question: "Czy instalacja jest zgodna z normami EN 1176/1177?",
                answer: "Tak. Montaż prowadzimy zgodnie z EN 1176/1177, a użyte elementy mają badania wytrzymałościowe.",
              },
              {
                question: "Jak przygotować obiekt do instalacji?",
                answer:
                  "Zapewnić wolne miejsce dojazdowe, wyznaczyć strefę składowania, dostęp do zasilania oraz osobę kontaktową na czas prac.",
              },
            ],
            [
              {
                question: "Czy pomagacie w analizie ryzyka?",
                answer:
                  "Tak — na życzenie wspieramy przygotowanie analizy ryzyka i dokumentacji dla instytucji certyfikujących.",
              },
              {
                question: "Co z czystością po zakończeniu prac?",
                answer:
                  "Tak. Pracujemy etapami i w koordynacji z personelem obiektu; w razie potrzeby realizujemy prace poza godzinami szczytu.",
              },
              {
                question: "Jaka jest gwarancja i czas reakcji serwisu?",
                answer:
                  "Standardowo 24 miesiące (w zależności od umowy); czas reakcji serwisu wynosi do 72 h od zgłoszenia, pod warunkiem dostępności części zamiennych.",
              },
              {
                question: "Od czego zależy wycena montażu?",
                answer:
                  "Od wielkości i złożoności projektu, warunków logistycznych oraz terminu. Przygotujemy kosztorys po krótkim briefie.",
              },
              {
                question: "Kto koordynuje prace na miejscu?",
                answer:
                  "Dedykowany koordynator montażu zapewnia stały kontakt 1:1, codzienne podsumowania i aktualizacje harmonogramu. W przypadku większych realizacji właściciel firmy Indoor Play Concept osobiście nadzoruje przebieg montażu na miejscu.",
              },
            ],
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", title: "Nie znalazłeś odpowiedzi na swoje pytania dotyczące montażu? ", align: "center" },
        {
          type: "prose",
          align: "center",
          narrow: true,
          paragraphs: [
            "Skontaktuj się z nami — chętnie doradzimy w kwestiach harmonogramu, logistyki montażu lub dokumentów potrzebnych do odbioru. Jeśli interesuje Cię opieka posprzedażowa i przeglądy techniczne, odwiedź nasz dział serwisu.",
          ],
        },
        {
          type: "buttons",
          buttons: [
            { label: "Przejdź do kontaktu", href: "/pl/kontakt/", arrow: true },
            { label: "Zobacz dział serwisu", href: "/pl/serwis-sal-zabaw/", arrow: true },
          ],
        },
      ],
    },
  ],
};
