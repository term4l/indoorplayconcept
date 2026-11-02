import { pages } from "./pages";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const POSTS_PER_PAGE = 10;

export const magazinePage = {
  path: pages["play-magazine"].path,
  title: pages["play-magazine"].title,
  hero: {
    kicker: "Play Magazine",
    heading: "Wiedza, która pomaga podejmować lepsze decyzje",
    lead: "Z doświadczenia, nie z teorii. O utrzymaniu, bezpieczeństwie i codziennych decyzjach, które decydują o trwałości i jakości obiektu.",
    image: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Information-Magazine.webp",
  },
  sectionHeading: "News Magazine",
  intro: [
    '"Play magazine" powstał jako praktyczne źródło wiedzy o prowadzeniu i utrzymaniu obiektów typu soft play. Skupia się na codziennych zadaniach właścicieli i managerów — od przygotowań do otwarcia, przez organizację pracy, po bieżący serwis i modernizacje konstrukcji.',
    "Znajdziesz tu informacje o kontrolach technicznych, planowaniu przeglądów, dokumentacji zgodnej z EN 1176 i 1177, a także o trwałości materiałów, czystości i sposobach napraw. Poruszamy też tematy związane z bezpieczeństwem, szkoleniem personelu oraz codzienną eksploatacją strefy zabaw.",
    "Wpisy dotyczą również momentu startu — jak przygotować obiekt do otwarcia, jakie procedury wdrożyć, jak zaplanować przestrzeń i utrzymać ją w dobrym stanie od pierwszego dnia działania. Pokazujemy rozwiązania, które sprawdzają się w praktyce i pomagają uniknąć zbędnych kosztów w przyszłości.",
    "Celem tego miejsca jest uporządkowanie wiedzy technicznej i organizacyjnej w jednym miejscu, tak aby każdy właściciel obiektu mógł bez problemu znaleźć odpowiedzi na pytania dotyczące eksploatacji, bezpieczeństwa i rozwoju swojego placu zabaw.",
  ],
  contactCta: { label: "Masz pytanie lub temat na wpis? Porozmawiajmy", href: "/pl/kontakt/" },
};

const CATEGORY = "wewnętrzne place zabaw";
const EXCERPT = "Praktyczny poradnik dla inwestorów i operatorów rodzinnych centrów rozrywki.";

const post = (slug: string, title: string, src: string, width: number, height: number): Post => ({
  slug,
  title,
  excerpt: EXCERPT,
  category: CATEGORY,
  image: { src, width, height, alt: title },
});

// Kolejność jak na stronie (od najnowszych). Wpisy ze strony 2 dopisz na końcu listy.
export const posts: Post[] = [
  post(
    "wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze",
    "Współpraca ze szkołami i przedszkolami: jak wypełnić FEC w dni robocze",
    "/images/posts/Soft-Play-300x225.webp",
    300,
    225,
  ),
  post(
    "zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie",
    "Zarządzanie salą zabaw: co decyduje o wyniku po pierwszym sezonie",
    "/images/posts/Indoor-Play-Concept-Team-300x169.webp",
    300,
    169,
  ),
  post(
    "serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego",
    "Serwis sali zabaw: procedura, materiały i dokumentacja bezpiecznego obiektu",
    "/images/posts/Indoor-Playgrounds-Service-300x169.webp",
    300,
    169,
  ),
  post(
    "modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i",
    "Modernizacja sali zabaw: kiedy dodawać atrakcje tematyczne i elektroniczne",
    "/images/posts/Soft-Play-Modernization-300x169.webp",
    300,
    169,
  ),
  post(
    "marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow",
    "Marketing sali zabaw: plan działań od koncepcji do regularnych powrotów klientów",
    "/images/posts/photo-1522199755839-a2bacb67c546-300x200.avif",
    300,
    200,
  ),
  post(
    "lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy",
    "Lokalizacja FEC: jak ocenić rynek i budynek przed podpisaniem umowy",
    "/images/posts/3D-Designs-300x169.webp",
    300,
    169,
  ),
  post(
    "sala-zabaw-bez-ekranow-jak-ruch-relacje-i-przygoda-wygrywaja-ze",
    "Sala zabaw bez ekranów: jak ruch, relacje i przygoda wygrywają ze smartfonem",
    "/images/posts/M-PA007-300x169.png.webp",
    300,
    169,
  ),
  post(
    "kolory-w-sali-zabaw-jak-dobrac-swiatlo-i-materialy-bez-przebodzcowania",
    "Kolory w sali zabaw: jak dobrać światło i materiały bez przebodźcowania",
    "/images/posts/PM-PA001-300x169.webp",
    300,
    169,
  ),
  post(
    "branding-sali-zabaw-jak-stworzyc-marke-ktora-rodziny-zapamietuja",
    "Branding sali zabaw: jak stworzyć markę, którą rodziny zapamiętują",
    "/images/posts/Audit-Soft-Play-300x225.webp",
    300,
    225,
  ),
  post(
    "interaktywne-atrakcje-do-sali-zabaw-jak-zwiekszyc-liczbe-powrotow-bez",
    "Interaktywne atrakcje do sali zabaw: jak zwiększyć liczbę powrotów bez pełnej przebudowy",
    "https://indoorplayconcept.com/wp-content/uploads/2026/02/PD-PA003-768x432.webp",
    768,
    432,
  ),
];

export const postHref = (p: Post) => `/pl/${p.slug}/`;

export const totalPages = () => Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

export const postsForPage = (page: number) =>
  posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const pagePath = (page: number) =>
  page <= 1 ? magazinePage.path : `${magazinePage.path}page/${page}/`;
