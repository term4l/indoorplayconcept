// Treści strony /pl/kariera/ – 1:1 z oryginału.

export type CareerTile = { title: string; text: string };

export type JobOffer = {
  title: string;
  type: string;
  columns: { title: string; items: string[] }[];
  note: string;
};

export const careerHero = {
  kicker: "Kariera",
  title: "Dołącz do Indoor Play Concept",
  lead: "Projektujemy i budujemy wewnętrzne place zabaw. Szukamy ludzi, którzy chcą łączyć estetykę z bezpieczeństwem i realnym wpływem na finalny produkt.",
  image: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Employment.webp",
};

export const whyUs: CareerTile[] = [
  {
    title: "Realny wpływ",
    text: "Każdy dział – od projektowania, przez obsługę klienta, po montaż – ma udział w tworzeniu finalnego efektu u inwestora.",
  },
  {
    title: "Praca zespołowa",
    text: "Stawiamy na współpracę i szybki przepływ informacji – decyzje podejmujemy wspólnie, a każdy głos jest ważny.",
  },
  {
    title: "Rozwój i stabilność",
    text: "Oferujemy szkolenia, jasne standardy i stabilne warunki współpracy, dzięki którym możesz się rozwijać w swojej specjalizacji.",
  },
];

export const recruitmentSteps: CareerTile[] = [
  { title: "1) Aplikacja", text: "Wyślij CV/portfolio i kilka zdań o sobie." },
  { title: "2) Krótka rozmowa", text: "30 minut online o doświadczeniu i sposobie pracy." },
  { title: "3) Mini-zadanie", text: "Niewielki case techniczno-kreatywny." },
];

const CLOSING_NOTE = "Jeśli chcesz pracować w zespole, który buduje kreatywne i bezpieczne przestrzenie dla dzieci – wyślij swoje zgłoszenie.";

const customerServiceRequirements = (language: string) => [
  `Biegła znajomość języka ${language} (mowa i pismo).`,
  "Komunikatywny angielski – mile widziany.",
  "Umiejętność jasnego, kulturalnego komunikowania się.",
  "Dobra organizacja pracy i skrupulatność.",
  "Doświadczenie w obsłudze klienta będzie dodatkowym atutem.",
];

const customerServiceOffer = [
  "Stabilne zatrudnienie i rozwój w branży B2B.",
  "Szkolenie wprowadzające i wsparcie zespołu.",
  "Możliwość pracy hybrydowej.",
  "Atrakcyjne warunki współpracy i premie projektowe.",
  "Codzienny kontakt z klientami międzynarodowymi.",
];

export const jobOffers: JobOffer[] = [
  {
    title: "Projektant/Projektantka 3D (place zabaw)",
    type: "Pełny Etat",
    columns: [
      {
        title: "Zakres obowiązków",
        items: [
          "Modelowanie koncepcji i układów stref zabawy w 3D.",
          "Przygotowanie rysunków technicznych i zestawień.",
          "Dobór materiałów/kolorów zgodnie z biblioteką firmy.",
          "Współpraca z produkcją i montażem przy wdrożeniu.",
          "Weryfikacja rozwiązań pod kątem bezpieczeństwa.",
        ],
      },
      {
        title: "Wymagania",
        items: [
          "Doświadczenie w modelowaniu 3D.",
          "Umiejętność czytania i tworzenia dokumentacji 2D.",
          "Wyczucie estetyki i przestrzeni.",
          "Język angielski, francuski, niderlandzki lub niemiecki w stopniu komunikatywnym (wystarczy jeden z nich).",
          "Mile widziane: znajomość norm branżowych (np. EN 1176), praca z kolorami bez fototekstur.",
          "Dokładność, terminowość, współpraca w zespole.",
        ],
      },
      {
        title: "Oferujemy",
        items: [
          "Stabilną współpracę i realny wpływ na produkt.",
          "Sprzęt i oprogramowanie do pracy.",
          "Wsparcie doświadczonego zespołu i szybki feedback.",
          "Budżet na rozwój i szkolenia.",
          "Elastyczne godziny w modelu hybrydowym.",
        ],
      },
    ],
    note: "Aplikuj, jeśli masz portfolio pokazujące układy przestrzenne (nie tylko produkty) — link do Behance/Drive/Gitlab mile widziany.",
  },
  {
    title: "Specjalista/Specjalistka ds. Obsługi Klienta (j. niderlandzki)",
    type: "Pełny etat",
    columns: [
      {
        title: "Zakres obowiązków",
        items: [
          "Kontakt mailowy i telefoniczny z klientami z Belgii i Holandii.",
          "Wsparcie inwestorów na etapie zapytań, briefów i ofert.",
          "Koordynacja prostych spraw administracyjnych i dokumentacji.",
          "Ścisła współpraca z działem projektowym i montażem.",
          "Budowanie pozytywnych, długofalowych relacji z klientami.",
        ],
      },
      { title: "Wymagania", items: customerServiceRequirements("niderlandzkiego") },
      { title: "Oferujemy", items: customerServiceOffer },
    ],
    note: CLOSING_NOTE,
  },
  {
    title: "Specjalista/Specjalistka ds. Obsługi Klienta (j. niemiecki)",
    type: "Pełny etat",
    columns: [
      {
        title: "Zakres obowiązków",
        items: [
          "Kontakt mailowy i telefoniczny z klientami z Niemiec i Austrii.",
          "Wsparcie inwestorów na etapie zapytań i przygotowania ofert.",
          "Koordynacja prostych spraw administracyjnych i dokumentacji.",
          "Ścisła współpraca z działem projektowym i logistyką.",
          "Budowanie pozytywnych, długofalowych relacji z klientami.",
        ],
      },
      { title: "Wymagania", items: customerServiceRequirements("niemieckiego") },
      { title: "Oferujemy", items: customerServiceOffer },
    ],
    note: CLOSING_NOTE,
  },
  {
    title: "Specjalista/Specjalistka ds. Obsługi Klienta (j. francuski)",
    type: "Pełny etat",
    columns: [
      {
        title: "Zakres obowiązków",
        items: [
          "Kontakt mailowy i telefoniczny z klientami z Francji i Belgii.",
          "Wsparcie inwestorów w przygotowaniu zapytań i ofert.",
          "Koordynacja bieżących spraw administracyjnych.",
          "Ścisła współpraca z działem projektowym i montażowym.",
          "Budowanie relacji i opieka nad klientami francuskojęzycznymi.",
        ],
      },
      {
        title: "Wymagania",
        items: [
          "Biegła znajomość języka francuskiego (mowa i pismo).",
          "Komunikatywny angielski lub polski – mile widziany.",
          "Wysoka kultura osobista i łatwość w nawiązywaniu kontaktu.",
          "Dobra organizacja pracy i samodzielność.",
          "Doświadczenie w obsłudze klienta – będzie dodatkowym atutem.",
        ],
      },
      {
        title: "Oferujemy",
        items: [
          "Stabilne zatrudnienie w rozwijającej się firmie.",
          "Szkolenie wprowadzające i stałe wsparcie zespołu.",
          "Możliwość pracy zdalnej lub hybrydowej.",
          "Atrakcyjne wynagrodzenie i premie uzależnione od wyników.",
          "Pracę w międzynarodowym środowisku.",
        ],
      },
    ],
    note: CLOSING_NOTE,
  },
];

/** Przyciski „Aplikuj teraz” prowadziły w oryginale do /kontakt/ (przekierowanie na /pl/kontakt/). */
export const APPLY_HREF = "/pl/kontakt/";
