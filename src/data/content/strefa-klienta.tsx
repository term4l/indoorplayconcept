import type { ReactNode } from "react";
import type { LucideName } from "@/components/pages/strefa-klienta/icons";

/*
 * Strefa Klienta – interaktywna mapa pierwszej współpracy z Indoor Play Concept.
 * Treść i logika 1:1 z pliku StrefaKlienta.jsx od klienta (24.11.2026); struktura decyzji
 * odpowiada folderom w „Test Brif.zip”.
 */

/** Adres konfiguratora IPC Planner 3D. Pusty, dopóki konfigurator nie powstanie – przyciski Plannera są wtedy nieaktywne. */
export const PLANNER_URL = "";

/** W kodzie klienta był angielski kontakt (indoorplayconcept.com/en/contact/); na polskiej stronie prowadzimy do /pl/kontakt/. */
export const CONTACT_URL = "/pl/kontakt/";

export type PathId = "building" | "no-building" | "modernization" | "research" | "express";
export type BudgetChoiceId = "defined" | "estimate";
export type EndpointType = "planner" | "contact";

export type Endpoint = {
  id: string;
  title: string;
  icon: LucideName;
  teaser: string;
  lead: string;
  body: string;
  tasks: string[];
  cta: string;
  type: EndpointType;
};

export type Path = {
  id: PathId;
  title: string;
  /** Folder w „Test Brif.zip”, któremu odpowiada ścieżka. */
  folder: string;
  icon: LucideName;
  intro: string;
  needs: ReactNode;
  endpoints: Endpoint[];
};

/**
 * Edytowalne formularze PDF dla 3 dróg (Mam budynek, Szukam lokalu, Modernizacja) – plik zależy od budżetu
 * i wybranego punktu końcowego. Pliki należy umieścić w public/dokumenty/. Wstępne rozeznanie i Ekspresowa
 * ścieżka nie mają PDF-ów.
 */
export const COOPERATION_PDF_BY_ROUTE: Partial<Record<PathId, Record<BudgetChoiceId, Record<string, string>>>> = {
  building: {
    estimate: {
      planner: "/dokumenty/IPC_Wspolpraca_building_estimate_planner.pdf",
      "paid-design": "/dokumenty/IPC_Wspolpraca_building_estimate_paid-design.pdf",
    },
    defined: {
      planner: "/dokumenty/IPC_Wspolpraca_building_defined_planner.pdf",
      "design-agreement": "/dokumenty/IPC_Wspolpraca_building_defined_design-agreement.pdf",
      video: "/dokumenty/IPC_Wspolpraca_building_defined_video.pdf",
      "site-paid": "/dokumenty/IPC_Wspolpraca_building_defined_site-paid.pdf",
    },
  },
  "no-building": {
    estimate: {
      planner: "/dokumenty/IPC_Wspolpraca_no-building_estimate_planner.pdf",
      "paid-design": "/dokumenty/IPC_Wspolpraca_no-building_estimate_paid-design.pdf",
    },
    defined: {
      planner: "/dokumenty/IPC_Wspolpraca_no-building_defined_planner.pdf",
      "paid-design": "/dokumenty/IPC_Wspolpraca_no-building_defined_paid-design.pdf",
      video: "/dokumenty/IPC_Wspolpraca_no-building_defined_video.pdf",
    },
  },
  modernization: {
    estimate: {
      planner: "/dokumenty/IPC_Wspolpraca_modernization_estimate_planner.pdf",
      "paid-design": "/dokumenty/IPC_Wspolpraca_modernization_estimate_paid-design.pdf",
      "site-paid": "/dokumenty/IPC_Wspolpraca_modernization_estimate_site-paid.pdf",
    },
    defined: {
      planner: "/dokumenty/IPC_Wspolpraca_modernization_defined_planner.pdf",
      "paid-design": "/dokumenty/IPC_Wspolpraca_modernization_defined_paid-design.pdf",
      video: "/dokumenty/IPC_Wspolpraca_modernization_defined_video.pdf",
      "site-opportunity": "/dokumenty/IPC_Wspolpraca_modernization_defined_site-opportunity.pdf",
      "site-paid": "/dokumenty/IPC_Wspolpraca_modernization_defined_site-paid.pdf",
    },
  },
};

export const PATHS: Path[] = [
  {
    id: "building",
    title: "Mam budynek",
    folder: "01 Etap z budynkiem",
    icon: "building-2",
    intro:
      "Masz budynek lub lokal, do którego posiadasz tytuł prawny, oraz wstępną wizję sali zabaw, parku trampolin lub strefy Ninja. Decyzja o inwestycji jest już podjęta — teraz szukasz sprawdzonego wykonawcy, któremu możesz powierzyć jej realizację.",
    needs: (
      <>
        <p>
          Teraz warto sprawdzić, jak najlepiej wykorzystać przestrzeń: dopasować układ stref i atrakcje do wymiarów, wysokości oraz
          ograniczeń technicznych budynku.
        </p>
        <p>
          <strong>Przygotuj dokumentację techniczną obiektu</strong> — rzuty, przekroje, wymiary i informacje o instalacjach. Dzięki niej
          łatwiej opracujesz realną koncepcję i unikniesz planowania rozwiązań, których nie da się zrealizować w tym miejscu.
        </p>
      </>
    ),
    endpoints: [
      {
        id: "planner",
        title: "IPC Planner 3D",
        icon: "pencil-ruler",
        teaser: "Chcę samodzielnie opracować wstępną koncepcję.",
        lead: "Masz przestrzeń i własną wizję, ale zanim rozpoczniesz szczegółowe uzgodnienia, chcesz zobaczyć, jak atrakcje mogą zmieścić się w budynku.",
        body: "Potrzebujesz narzędzia, w którym ustawisz wymiary hali, rozmieścisz elementy i porównasz różne pomysły bez czekania na pierwsze wizualizacje. IPC Planner 3D umożliwia stworzenie wstępnego układu 2D/3D, sprawdzenie rozmieszczenia atrakcji oraz orientacyjnych kosztów elementów. To punkt wyjścia do dalszej rozmowy z naszym zespołem, a nie gotowy projekt wykonawczy.",
        tasks: [
          "Przygotuj wymiary i wysokość przestrzeni.",
          "Zaznacz najważniejsze ograniczenia obiektu.",
          "Wypróbuj kilka układów atrakcji i zapisz wybrany wariant.",
        ],
        cta: "Przejdź do IPC Planner 3D",
        type: "planner",
      },
      {
        id: "paid-design",
        title: "Projekt zlecony",
        icon: "pencil-ruler",
        teaser: "Potrzebuję opracowania projektu przez specjalistów.",
        lead: "Masz budynek, ale nie chcesz samodzielnie dobierać atrakcji i analizować całego układu przestrzeni.",
        body: "Potrzebujesz profesjonalnego opracowania koncepcji uwzględniającej charakter obiektu, oczekiwania odbiorców, dostępne miejsce i budżet. W ramach odpłatnych prac projektowych można ustalić zakres opracowania, liczbę wariantów, terminy i zasady wprowadzania zmian. Szczegóły i cenę prac uzgadniamy indywidualnie przed ich rozpoczęciem.",
        tasks: ["Prześlij rzut i wymiary budynku.", "Określ grupy wiekowe, rodzaje atrakcji i budżet.", "Ustal z IPC zakres i warunki projektu."],
        cta: "Zapytaj o projekt",
        type: "contact",
      },
      {
        id: "design-agreement",
        title: "Umowa projektowa",
        icon: "handshake",
        teaser: "Jestem gotowy uzgodnić formalne warunki projektowania.",
        lead: "Masz już określoną przestrzeń oraz decyzję, że chcesz przejść od rozmów do formalnego zlecenia prac projektowych.",
        body: "Potrzebujesz jasno opisanych etapów współpracy: zakresu projektu, terminów, wynagrodzenia, materiałów wejściowych, sposobu zatwierdzania koncepcji oraz zasad zmian. Umowa projektowa porządkuje wzajemne obowiązki i wskazuje, co będzie rezultatem opracowania. Przed podpisaniem wspólnie doprecyzujemy te warunki.",
        tasks: ["Przygotuj dane inwestora i lokalizację obiektu.", "Uzgodnij zakres oraz harmonogram dokumentacji.", "Omów warunki umowy z IPC."],
        cta: "Porozmawiaj o umowie",
        type: "contact",
      },
      {
        id: "video",
        title: "Wideorozmowa",
        icon: "video",
        teaser: "Chcę omówić możliwości budynku podczas spotkania online.",
        lead: "Masz budynek i pytania, na które najlepiej odpowiedzieć podczas wspólnego omówienia przestrzeni.",
        body: "Potrzebujesz szybkiej rozmowy o wymiarach, wysokości, dostępnych atrakcjach, budżecie i kolejnych etapach. Spotkanie online pomoże ustalić, jakie informacje są jeszcze potrzebne, jakie warianty warto rozważyć i czy niezbędna będzie wizja lokalna albo dalsze prace projektowe.",
        tasks: ["Przygotuj rzut lub zdjęcia obiektu.", "Spisz najważniejsze pytania.", "Przekaż preferowany termin rozmowy."],
        cta: "Umów wideorozmowę",
        type: "contact",
      },
      {
        id: "site-paid",
        title: "Wizja lokalna zlecona",
        icon: "map-pinned",
        teaser: "Potrzebuję oględzin obiektu na miejscu.",
        lead: "Masz budynek, ale sam rzut i zdjęcia nie wystarczają, by wiarygodnie ocenić jego możliwości.",
        body: "Potrzebujesz wizyty na miejscu, aby wspólnie omówić wymiary, dostęp, przeszkody konstrukcyjne i warunki planowanego montażu. Zlecona wizja lokalna jest odrębną usługą, której zakres, koszt i termin ustalamy przed wyjazdem. Nie zastępuje ona wymaganych odbiorów ani ekspertyz budowlanych.",
        tasks: ["Podaj adres i podstawowe informacje o budynku.", "Wskaż kwestie, które wymagają sprawdzenia.", "Uzgodnij termin i warunki wizyty."],
        cta: "Zapytaj o wizję lokalną",
        type: "contact",
      },
    ],
  },
  {
    id: "no-building",
    title: "Szukam lokalu",
    folder: "02 Etap Braku budynku",
    icon: "compass",
    intro:
      "Masz już wybrany lokal lub budynek i jesteś blisko podpisania umowy najmu albo zakupu. Decyzja o inwestycji jest niemal podjęta. Wiesz, że przygotowanie projektu wymaga czasu, a późniejsze zmiany mogą generować dodatkowe koszty — dlatego chcesz rozpocząć planowanie odpowiednio wcześnie.",
    needs:
      "To właściwy moment, by sprawdzić dokumentację wybranego lokalu: rzuty, wysokości, instalacje i ograniczenia techniczne. Pozwoli Ci to ocenić możliwości rozmieszczenia atrakcji i przygotować koncepcję na podstawie rzeczywistych parametrów obiektu. Wcześniejsze ustalenia ułatwią dalsze decyzje i ograniczą ryzyko kosztownych korekt po podpisaniu umowy.",
    endpoints: [
      {
        id: "planner",
        title: "IPC Planner 3D",
        icon: "pencil-ruler",
        teaser: "Chcę sprawdzić układ atrakcji w wybranym lokalu.",
        lead: "Masz na oku konkretny lokal i chcesz sprawdzić możliwe rozmieszczenie atrakcji przed sfinalizowaniem najmu lub zakupu.",
        body: "Potrzebujesz sprawdzić, jak Twoje założenia pasują do wybranego lokalu. W IPC Planner 3D możesz odtworzyć wymiary przestrzeni, rozmieścić atrakcje, porównać warianty i poznać orientacyjne koszty elementów. Dzięki temu łatwiej ustalisz priorytety jeszcze przed podpisaniem umowy. Koncepcję trzeba następnie zweryfikować z dokumentacją i warunkami technicznymi budynku.",
        tasks: [
          "Zastanów się, jakie atrakcje są najważniejsze.",
          "Wprowadź wymiary wybranego lokalu i przetestuj układ atrakcji.",
          "Zapisz wybrany wariant do dalszych ustaleń.",
        ],
        cta: "Zacznij od IPC Planner 3D",
        type: "planner",
      },
      {
        id: "paid-design",
        title: "Projekt zlecony",
        icon: "pencil-ruler",
        teaser: "Chcę zlecić projekt dla lokalu, który planuję wynająć lub kupić.",
        lead: "Masz wybrany lokal i chcesz zlecić opracowanie koncepcji, zanim podejmiesz ostateczne zobowiązania.",
        body: "Odpłatne opracowanie koncepcji pozwoli ustalić układ stref, dobór atrakcji i zakres planowanych prac dla wskazanego lokalu. Warto zacząć odpowiednio wcześnie: przygotowanie projektu i ewentualne korekty wymagają czasu, a zmiany mogą wiązać się z dodatkowymi kosztami. Zakres, rezultat i cenę prac ustalamy indywidualnie; ostateczne rozwiązania wymagają weryfikacji parametrów technicznych obiektu.",
        tasks: ["Opisz planowaną grupę klientów.", "Wskaż oczekiwane atrakcje i najważniejsze priorytety.", "Uzgodnij zakres wstępnej koncepcji."],
        cta: "Zapytaj o koncepcję",
        type: "contact",
      },
      {
        id: "video",
        title: "Wideorozmowa",
        icon: "video",
        teaser: "Chcę omówić wybrany lokal przed podpisaniem umowy.",
        lead: "Jesteś blisko wynajęcia lub zakupu lokalu i chcesz omówić jego możliwości przed podjęciem ostatecznej decyzji.",
        body: "Podczas wideorozmowy możemy omówić rzut wybranego lokalu, jego wysokość, ograniczenia techniczne, planowane atrakcje oraz harmonogram przygotowania projektu. Ustalimy, które informacje warto jeszcze sprawdzić przed podpisaniem umowy najmu lub zakupu. Rozmowa nie zastępuje oceny technicznej budynku.",
        tasks: [
          "Przygotuj krótki opis pomysłu.",
          "Podaj lokalizację i planowaną kwotę inwestycji.",
          "Przygotuj rzut, zdjęcia i dostępne dane techniczne lokalu.",
        ],
        cta: "Umów rozmowę wstępną",
        type: "contact",
      },
    ],
  },
  {
    id: "modernization",
    title: "Modernizacja",
    folder: "03 Modernizacja",
    icon: "wrench",
    intro: "Prowadzisz już obiekt rozrywkowy lub masz istniejącą konstrukcję i chcesz ją przebudować, odświeżyć albo rozbudować o nowe atrakcje.",
    needs: "Potrzebujesz ocenić stan obecnego wyposażenia, dostępne miejsce, wpływ zmian na działanie obiektu i zakres ewentualnych prac montażowych.",
    endpoints: [
      {
        id: "planner",
        title: "IPC Planner 3D",
        icon: "pencil-ruler",
        teaser: "Chcę samodzielnie rozplanować nowe atrakcje.",
        lead: "Znasz już swój obiekt i masz pomysły na zmiany, ale chcesz najpierw je zwizualizować.",
        body: "Potrzebujesz prostego sposobu przygotowania wstępnego układu nowych elementów i pokazania zespołowi, co planujesz zmienić. IPC Planner 3D umożliwia zbudowanie koncepcji 2D/3D i orientacyjne zestawienie elementów. Przed realizacją modernizacji konieczna jest osobna weryfikacja kompatybilności, mocowań i bezpieczeństwa istniejącej konstrukcji.",
        tasks: ["Zbierz wymiary istniejącej strefy.", "Wybierz elementy do zachowania i wymiany.", "Przygotuj koncepcję zmian do konsultacji."],
        cta: "Otwórz IPC Planner 3D",
        type: "planner",
      },
      {
        id: "paid-design",
        title: "Projekt zlecony",
        icon: "pencil-ruler",
        teaser: "Chcę zlecić IPC przygotowanie projektu modernizacji.",
        lead: "Planujesz przebudowę lub rozbudowę istniejącej konstrukcji i wolisz powierzyć opracowanie koncepcji specjalistom.",
        body: "Potrzebujesz projektu zmian uwzględniającego obecny układ obiektu, elementy do zachowania, nowe atrakcje oraz założony zakres prac. Na podstawie dostępnej dokumentacji i Twoich oczekiwań ustalimy zakres odpłatnego opracowania, jego cenę i harmonogram. Przed realizacją konieczna może być dodatkowa weryfikacja stanu, mocowań i bezpieczeństwa istniejącej konstrukcji — sama koncepcja nie zastępuje takiej oceny.",
        tasks: [
          "Przygotuj zdjęcia, wymiary i dostępną dokumentację istniejącej konstrukcji.",
          "Wskaż elementy, które chcesz zachować, wymienić lub dodać.",
          "Opisz oczekiwany efekt, zakres zmian i orientacyjny budżet, jeśli go znasz.",
        ],
        cta: "Zapytaj o projekt modernizacji",
        type: "contact",
      },
      {
        id: "video",
        title: "Wideorozmowa",
        icon: "video",
        teaser: "Chcę omówić przebudowę z IPC online.",
        lead: "Wiesz, co chcesz zmienić, ale potrzebujesz rozmowy o zakresie i możliwościach technicznych modernizacji.",
        body: "Podczas wideorozmowy możemy wspólnie przejrzeć zdjęcia, dostępne rysunki i opis problemów. Ustalimy, czy informacje wystarczą do przygotowania kolejnego etapu, czy potrzebne są dodatkowe pomiary lub oględziny obiektu. Ocena zdalna nie zastępuje wymaganych przeglądów technicznych.",
        tasks: ["Przygotuj zdjęcia i wymiary strefy.", "Wskaż, co ma pozostać, a co wymienić.", "Opisz oczekiwany termin prac."],
        cta: "Umów wideorozmowę",
        type: "contact",
      },
      {
        id: "site-opportunity",
        title: "Wizja lokalna przy okazji",
        icon: "map-pinned",
        teaser: "Mogę poczekać na wizytę IPC przy okazji innego wyjazdu.",
        lead: "Planujesz modernizację, ale nie potrzebujesz natychmiastowych oględzin na miejscu i możesz elastycznie dopasować termin.",
        body: "Jeśli nasz zespół będzie realizował prace w Twoim regionie, możemy sprawdzić możliwość połączenia wizyt. Taki termin zależy od faktycznego harmonogramu i nie jest gwarantowany. Przed uzgodnieniem potwierdzimy zakres oględzin oraz ewentualne koszty; dzięki temu możesz ocenić, czy warto poczekać, czy lepsza będzie dedykowana wizyta.",
        tasks: ["Prześlij lokalizację obiektu.", "Opisz potrzebny zakres oględzin.", "Podaj, jak elastyczny jest termin modernizacji."],
        cta: "Zapytaj o dogodny termin",
        type: "contact",
      },
      {
        id: "site-paid",
        title: "Wizja lokalna zlecona",
        icon: "map-pinned",
        teaser: "Potrzebuję specjalnie zorganizowanej wizyty na miejscu.",
        lead: "Twoja modernizacja wymaga oględzin istniejącej konstrukcji, pomiarów lub konsultacji bezpośrednio w obiekcie.",
        body: "Potrzebujesz umówić dedykowany przyjazd IPC, niezależny od innych realizacji. Podczas ustalonych oględzin możemy zebrać informacje potrzebne do dalszej oceny planowanych zmian i organizacji prac. Zakres, termin oraz koszt wizyty uzgodnimy przed zleceniem. Specjalistyczne oceny i odbiory, jeśli są wymagane, ustala się oddzielnie.",
        tasks: ["Podaj adres obiektu i dane kontaktowe.", "Prześlij zdjęcia oraz opis istniejącego wyposażenia.", "Ustal priorytety i proponowany termin wizyty."],
        cta: "Zleć wizję lokalną",
        type: "contact",
      },
    ],
  },
  {
    id: "research",
    title: "Wstępne rozeznanie",
    folder: "04 Wstępne rozeznanie",
    icon: "compass",
    intro: "Interesujesz się inwestycją w przestrzeń rozrywki, lecz nie masz jeszcze sprecyzowanego planu, budynku ani budżetu.",
    needs: "Na początek potrzebujesz zobaczyć możliwe rodzaje atrakcji i zrozumieć, od czego zależy skala oraz orientacyjny koszt przedsięwzięcia.",
    endpoints: [
      {
        id: "planner",
        title: "IPC Planner 3D",
        icon: "pencil-ruler",
        teaser: "Chcę poznać możliwości i przetestować własne pomysły.",
        lead: "Jesteś na etapie poznawania branży i nie chcesz jeszcze deklarować konkretnego zakresu inwestycji.",
        body: "Potrzebujesz swobodnie sprawdzić, jak może wyglądać sala zabaw, park trampolin lub strefa Ninja. IPC Planner 3D pozwala eksperymentować z układem i poznawać orientacyjne ceny elementów. Możesz potraktować go jako pierwszą inspirację, bez konieczności zamawiania projektu. Później, gdy sprecyzujesz pomysł, łatwiej będzie przejść do rozmowy o realnej inwestycji.",
        tasks: ["Wybierz typ obiektu, który Cię interesuje.", "Przetestuj przykładowe układy i atrakcje.", "Zanotuj pytania oraz pomysły na dalszy etap."],
        cta: "Rozpocznij swój projekt",
        type: "planner",
      },
    ],
  },
  {
    id: "express",
    title: "Ekspresowa ścieżka współpracy",
    folder: "05 Ekspresowa ścieżka współpracy",
    icon: "zap",
    intro:
      "Chcesz zrealizować salę zabaw, park trampolin lub strefę Ninja jeszcze korzystniej? Sam tworzysz projekt i organizujesz montaż, a IPC zapewnia materiały, dokumentację i wsparcie. Razem ograniczamy koszty realizacji.",
    needs:
      "Nie musisz deklarować budżetu. Zacznij od IPC Planner 3D i sprawdź swój pomysł oraz orientacyjne ceny. Następnie wybierz kompletny zestaw materiałów do samodzielnej realizacji. Ty przejmujesz część zadań, my dostarczamy zaplecze techniczne oraz wiedzę — dzięki temu współpraca dwóch niezależnych partnerów może być znacznie bardziej opłacalna.",
    endpoints: [
      {
        id: "planner",
        title: "IPC Planner 3D",
        icon: "pencil-ruler",
        teaser: "Chcę samodzielnie sprawdzić możliwości i przygotować projekt.",
        lead: "Chcesz zacząć bez deklarowania budżetu i samodzielnie zdecydować, jak ma wyglądać Twoja inwestycja.",
        body: "W IPC Planner 3D możesz wprowadzić wymiary przestrzeni, rozmieścić atrakcje w widoku 2D/3D oraz sprawdzić orientacyjne koszty wybranych elementów. Dzięki temu przygotujesz koncepcję, którą można przekazać IPC jako punkt wyjścia do ustalenia kompletnego zestawu materiałów, dokumentacji i zakresu wsparcia. Nie musisz zamawiać osobnego projektu na samym początku.",
        tasks: [
          "Przygotuj wymiary i podstawowe informacje o przestrzeni.",
          "Samodzielnie rozmieść atrakcje i zapisz wybrany wariant.",
          "Przekaż projekt IPC, gdy będziesz gotowy do zamówienia materiałów.",
        ],
        cta: "Otwórz IPC Planner 3D",
        type: "planner",
      },
      {
        id: "express-kit",
        title: "Kompletny zestaw do samodzielnej realizacji",
        icon: "package-check",
        teaser: "Chcę zamówić materiały, dokumentację i wsparcie montażowe IPC.",
        lead: "Łączymy siły: Ty samodzielnie planujesz i organizujesz montaż, a IPC zapewnia materiały i wsparcie. Taki podział zadań pozwala znacznie obniżyć koszty całej realizacji.",
        body: "Dostajesz kompletny zestaw materiałów z pełną dokumentacją, a podczas montażu wspiera Cię koordynator online. Jeśli zajdzie taka potrzeba, możesz dodatkowo zamówić wizytę specjalisty na miejscu. Zapewniamy atrakcyjne warunki zakupu, a Dealerom proponujemy indywidualnie negocjowane zasady współpracy. Nie musisz deklarować budżetu. Cena końcowa zależy od wybranego zestawu i ustalonych warunków.",
        tasks: [
          "Prześlij projekt z IPC Planner 3D lub opisz planowaną konstrukcję.",
          "Wskaż miejsce dostawy i zakres potrzebnych materiałów.",
          "Uzgodnij dokumentację, wsparcie koordynatora online i ewentualne wizyty na miejscu.",
        ],
        cta: "Rozpocznij swój projekt",
        type: "planner",
      },
    ],
  },
];

/** Pytanie o budżet pojawia się tylko w trzech ścieżkach. */
export const BUDGET_PATH_IDS: PathId[] = ["building", "no-building", "modernization"];

export const BUDGET_CHOICES: { id: BudgetChoiceId; title: string; teaser: string; icon: LucideName }[] = [
  { id: "defined", title: "Mam określoną kwotę", teaser: "Wiem, jakie środki chcę przeznaczyć na realizację.", icon: "wallet" },
  { id: "estimate", title: "Chcę poznać koszty", teaser: "Potrzebuję ustalić, ile może kosztować moja inwestycja.", icon: "circle-help" },
];

/**
 * Lista dostępnych działań zależy od ścieżki i odpowiedzi o kwocie. W modernizacji przy wyborze
 * „Chcę poznać koszty” nie pokazujemy wideorozmowy ani wizji lokalnej przy okazji.
 */
export const ENDPOINT_IDS_BY_PATH_AND_BUDGET: Partial<Record<PathId, Record<BudgetChoiceId, string[]>>> = {
  building: {
    estimate: ["planner", "paid-design"],
    defined: ["planner", "design-agreement", "video", "site-paid"],
  },
  "no-building": {
    estimate: ["planner", "paid-design"],
    defined: ["planner", "paid-design", "video"],
  },
  modernization: {
    estimate: ["planner", "paid-design", "site-paid"],
    defined: ["planner", "paid-design", "video", "site-opportunity", "site-paid"],
  },
};
