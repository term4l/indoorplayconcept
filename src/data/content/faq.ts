// Treść FAQ 1:1 z oryginalnej strony (dwie kolumny akordeonów).

export type FaqEntry = { question: string; answer: string };

export const faqIntro = [
  "Każda nowa inwestycja w strefę zabaw zaczyna się od pytań — o normy, dokumentację, przebieg projektu i to, jak najlepiej przygotować się do otwarcia.",
  "W tym FAQ zebraliśmy praktyczne wskazówki z codziennej pracy przy realizacjach soft play: od projektu i wyceny, po odbiory, przeglądy i uruchomienie.",
  "Bez marketingu, za to z doświadczenia — tak, by łatwiej zaplanować każdy etap i uniknąć błędów, które potrafią opóźnić start obiektu.",
];

export const faqColumns: FaqEntry[][] = [
  [
    {
      question: "Od czego zacząć planowanie nowej strefy zabaw?",
      answer: "Najpierw określ wiek użytkowników, powierzchnię i wysokość pomieszczenia. Na tej podstawie dobierzemy koncepcję, wstępny układ i budżet.",
    },
    {
      question: "Jak długo trwa realizacja projektu soft play?",
      answer: "Średnio 6–10 tygodni: projekt koncepcyjny 2–3 tyg., produkcja 3–5 tyg, montaż 3–14 dni w zależności od skali i dostępu do obiektu.",
    },
    {
      question: "Czy muszę mieć gotowy projekt architekta?",
      answer: "Nie. Wystarczy rzut pomieszczenia z wymiarami i wysokościami. Nasz dział projektowy przygotuje koncepcję i rysunki montażowe.",
    },
    {
      question: "Jak wygląda proces wyceny?",
      answer: "Na podstawie rzutów i rozmowy o oczekiwaniach przygotowujemy kosztorys i wizualizację.",
    },
    {
      question: "Jakie normy obowiązują przy budowie strefy zabaw?",
      answer: "Wszystkie konstrukcje projektujemy i wykonujemy zgodnie z EN 1176 i 1177 — czyli europejskimi normami bezpieczeństwa dla urządzeń rekreacyjnych.",
    },
    {
      question: "Czy potrzebne są odbiory techniczne?",
      answer: "Tak. Każdy obiekt po zakończeniu montażu przechodzi tzw. odbiór zerowy, wykonywany przez jednostkę certyfikującą. Po kontroli zgodności z EN 1176/1177 otrzymujesz komplet dokumentów dla ubezpieczyciela i własnej ewidencji.",
    },
    {
      question: "Jakie dokumenty otrzymam po montażu?",
      answer: "Raport z przeglądu zerowego, certyfikaty materiałów, instrukcje użytkowania, plan przeglądów i dokumentację powykonawczą w formie PDF.",
    },
    {
      question: "Czy pomagacie w przygotowaniu pomieszczenia?",
      answer: "Tak. Przed montażem przesyłamy wytyczne dotyczące podłoża, oświetlenia, gniazd i zabezpieczeń ścian. Dzięki temu montaż przebiega bez przestojów.",
    },
    {
      question: "Jakie są minimalne wysokości pomieszczenia?",
      answer: "Zalecane min. 300 cm. Dla niższych obiektów projektujemy układ poziomy bez kondygnacji.",
    },
    {
      question: "Czy można połączyć soft play z kawiarnią lub strefą rodzica?",
      answer: "Oczywiście. Pomagamy w zaplanowaniu ergonomicznego układu – tak, by strefy wizualnie współgrały i były bezpieczne dla dzieci.",
    },
  ],
  [
    {
      question: "Jak wygląda kwestia gwarancji?",
      answer: "Standardowo udzielamy 24 miesięcy gwarancji na konstrukcję i elementy tapicerowane.",
    },
    {
      question: "Czy oferujecie pomoc po uruchomieniu obiektu?",
      answer: "Tak. Zapewniamy szkolenie personelu, plan kontroli dziennych oraz wsparcie serwisowe w całym okresie eksploatacji.",
    },
    {
      question: "Jak zaplanować przeglądy po otwarciu?",
      answer: "Rekomendujemy przegląd co 6 lub 12 miesięcy, w zależności od intensywności ruchu.",
    },
    {
      question: "Czy można zamówić projekt koncepcyjny bez zobowiązań?",
      answer: "Tak. Przygotowujemy koncepcję 2D wraz z wyceną — dopiero po akceptacji przechodzimy do dalszego projektowania.",
    },
    {
      question: "Czy realizujecie projekty zagraniczne?",
      answer: "Tak, dostarczamy, montujemy i serwisujemy konstrukcje we wszystkich krajach Unii Eurupejskiej.",
    },
    {
      question: "Jakie są orientacyjne koszty inwestycji?",
      answer: "Koszt zależy przede wszystkim od wielkości i złożoności projektu — liczby poziomów, rodzaju atrakcji oraz wykończenia.",
    },
    {
      question: "Czy mogę obejrzeć realizacje na żywo?",
      answer: "Tak. Możesz odwiedzić wybrane realizacje soft play, aby zobaczyć, jak wyglądają nasze konstrukcje i standard wykonania w działających obiektach.",
    },
    {
      question: "Jak wygląda transport i montaż?",
      answer: "Wszystkie elementy przywozimy gotowe do złożenia. Zespół montażowy IPC wykonuje instalację.",
    },
    {
      question: "Czy pomagacie w promocji nowego obiektu?",
      answer: "Tak, możemy udostępnić materiały zdjęciowe i filmowe z montażu lub pomóc w przygotowaniu materiałów do otwarcia.",
    },
    {
      question: "Co dalej po otwarciu?",
      answer: "Wspieramy Cię w pierwszych miesiącach — przypomnienia o przeglądach, dostęp do serwisu i możliwość modernizacji, gdy strefa się rozwinie.",
    },
  ],
];
