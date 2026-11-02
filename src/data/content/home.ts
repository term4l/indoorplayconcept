/** Strona główna (/pl/) – dane sekcji z oryginału WordPress/Elementor (post-12). */

import { posts } from "@/data/magazine";
import { projects as projects3d, type Project } from "@/data/content/sale-zabaw-projekty-3d";

const WP = "https://indoorplayconcept.com/wp-content/uploads";

export const heroImage = `${WP}/2025/12/Hero-scaled.webp`;
export const heroVideo = `${WP}/2025/12/Animacja-Hero.mp4`;

/* ---------- Projekty (wtyczka IPC Projects w trybie slider) ---------- */

// Projekty, których nie ma na pierwszej stronie katalogu Projekty 3D (dane z kart na stronie głównej).
const extraProjects: Project[] = [
  {
    id: "3530",
    title: "Małpi gaj w siłowni",
    code: "PM-PA007",
    image: `${WP}/2026/02/PM-PA007-1024x576.webp`,
    category: "soft-play",
    description:
      "Małpi gaj w siłowni – Podwodny Świat to kompaktowa strefa zabaw dla młodszych oraz starszych dzieci zaprojektowana specjalnie do przestrzeni klubów fitness i siłowni. Rozwiązanie umożliwia rodzicom komfortowy trening, zapewniając…",
    price: "15 667,00 €",
    length: 7.3,
    width: 3.6,
    height: 3.5,
    age: "Wiek:3+",
    badges: [],
    fullDescUrl: "/pl/malpi-gaj-podwodny-swiat-w-silowni/",
  },
  {
    id: "3500",
    title: "Małpi Gaj w restauracji",
    code: "PM-PA004",
    image: `${WP}/2026/02/PM-PA004-1024x576.webp`,
    category: "soft-play",
    description:
      "Małpi Gaj Dziecięcy Świat ten przykładowy projekt, który zaproponowaliśmy idealnie wpisuje się do zastosowaniu jako Małpi Gaj w restauracji. Co przekłada się na świadomy wzrost odwiedzających rodzin z dziećmi.",
    price: "18 883,00 €",
    length: 7.3,
    width: 4.9,
    height: 3,
    age: "Wiek:3+",
    badges: [],
    fullDescUrl: "",
  },
  {
    id: "3513",
    title: "Małpi gaj w kręgielni",
    code: "PM-PA005",
    image: `${WP}/2026/02/PM-PA005-1024x576.webp`,
    category: "soft-play",
    description:
      "Małpi gaj w kręgielni to poziomowa konstrukcja z miękkim wykończeniem zaprojektowana z myślą o kręgielniach i obiektach rozrywki, w których najmłodsze dzieci potrzebują bezpiecznej i angażującej strefy zabawy w czasie…",
    price: "19 982,00 €",
    length: 7.3,
    width: 6.1,
    height: 3,
    age: "Wiek:3+",
    badges: [],
    fullDescUrl: "",
  },
  {
    id: "3333",
    title: "Wewnętrzny plac zabaw w hotelu",
    code: "PM-PA001",
    image: `${WP}/2026/02/PM-PA001-1024x576.webp`,
    category: "soft-play",
    description:
      "Wewnętrzny plac zabaw w hotelu to kolorowa, wielopoziomowa przestrzeń zabaw zaprojektowana jako osobne pomieszczenie hotelowe, przeznaczone dla dzieci w różnym wieku. Projekt łączy strefę z rozbudowaną konstrukcją zabawową, zapewniając aktywną…",
    price: "22 673,00 €",
    length: 6.1,
    width: 8.5,
    height: 3,
    age: "Wiek:4+",
    badges: [],
    fullDescUrl: "/pl/wewnetrzny-plac-zabaw-w-hotelu/",
  },
];

// Kolejność jak w sliderze na stronie głównej (od najtańszego).
const HOME_PROJECT_CODES = [
  "PM-PA011",
  "PM-PA007",
  "PM-PA004",
  "PM-PA005",
  "PM-PA001",
  "PS-PA002",
  "PS-PA004",
  "PD-PA001",
  "PS-PA017",
];

const byCode = new Map([...projects3d, ...extraProjects].map((p) => [p.code, p]));

export const homeProjects: Project[] = HOME_PROJECT_CODES.map((code) => byCode.get(code)).filter(
  (p): p is Project => Boolean(p),
);

/* ---------- Przykładowe aranżacje ---------- */

export type ArrangementScale = "s" | "m" | "xl";

export const arrangementImages: Record<ArrangementScale, string> = {
  s: `${WP}/2025/12/Small-Areas.webp`,
  m: `${WP}/2025/12/Medium-Areas.webp`,
  xl: `${WP}/2025/12/Big-Areas.webp`,
};

/* ---------- Proces współpracy ---------- */

export type StepIcon = "chart" | "ruler" | "handshake" | "box" | "wrench" | "rocket";

export const steps: { label: string; title: string; text: string; icon: StepIcon }[] = [
  {
    label: "Krok 1",
    title: "Audyt i cele biznesowe",
    text: "Szybkie rozpoznanie obiektu i priorytetów. W 48h możliwe wstępne liczby i rekomendacje dopasowane do hotelu, FEC, galerii handlowej, restauracji lub innej lokalizacji.",
    icon: "chart",
  },
  {
    label: "Krok 2",
    title: "Koncepcja 3D i warianty",
    text: "Przedstawiamy warianty w różnej skali i budżecie według twoich wskazań. Jasno: co daje upgrade budynku, gdzie można oszczędzić, jak wpływa to na opinie gości oraz propozycje przyszłościowe.",
    icon: "ruler",
  },
  {
    label: "Krok 3",
    title: "Transparentna wycena i harmonogram",
    text: "Szczegółowy kosztorys bez ukrytych pozycji. Opcja etapowania (np. dziś soft play, później trampoliny). Zabezpieczenia i klarowne terminy w umowie.",
    icon: "handshake",
  },
  {
    label: "Krok 4",
    title: "Produkcja i kontrola jakości",
    text: "Pełna odpowiedzialność po naszej stronie: materiały, testy, zgodność norm. Informacja w sprawie statusu postępów i zdjęcia z produkcji na życzenie.",
    icon: "box",
  },
  {
    label: "Krok 5",
    title: "Montaż, odbiór i szkolenie",
    text: "Koordynujemy transport i montaż. Odbiory, certyfikaty bezpieczeństwa, dokumentacja i szkolenie obsługi.",
    icon: "wrench",
  },
  {
    label: "Krok 6",
    title: "Wsparcie i rozwój obiektu",
    text: "Serwis, modernizacje i nowe moduły. Proaktywnie proponujemy aktualizacje według standardów rynkowych, by obiekt był zawsze atrakcyjny i rentowny.",
    icon: "rocket",
  },
];

/* ---------- FAQ ---------- */

export const faq: { question: string; answer: string }[] = [
  {
    question: "Czy inwestycja szybko się zwróci?",
    answer: "Już na etapie audytu pomożemy przejść przez obliczenia ROI i przekażemy warianty. Decyzję podejmujesz na liczbach, a nie na domysłach.",
  },
  {
    question: "Jak mam kontrolować koszty?",
    answer: "Wycena jest transparentna, bez ukrytych opłat. Umowa blokuje zmiany cen, a serwis określamy z góry.",
  },
  {
    question: "Czy montaż zaburzy działanie już funkcjonującego obiektu?",
    answer:
      "Uzgadniamy z tobą możliwe ramy czasowe instalacji i planujemy transport tak, aby nie zakłócać Twojego działającego biznesu, a instalację staramy się zakończyć jak najszybciej to możliwe.",
  },
  {
    question: "Co z bezpieczeństwem i normami?",
    answer: "Każdy projekt spełnia normy EN 1176/1177 i ma pełną dokumentację potrzebną do odbioru.",
  },
  {
    question: "Jak wygląda wsparcie po uruchomieniu?",
    answer:
      "Po montażu zapewniamy serwis, modernizacje i możliwość rozbudowy konstrukcji. Dzięki temu Twoja inwestycja pozostaje bezpieczna, nowoczesna i gotowa do dalszego rozwoju.",
  },
  {
    question: "Co jeśli mam małą przestrzeń lub ograniczony budżet?",
    answer: "Projektujemy moduły od 30 m² i opcję etapowania inwestycji. Nawet mała strefa może stać się przewagą Twojego biznesu.",
  },
];

/* ---------- Opinie ---------- */

export const testimonials: { quote: string; author: string }[] = [
  {
    quote:
      "“Współpraca z Indoor Play Concept całkowicie odmieniła nasz obiekt. Zespół podszedł do zadania profesjonalnie, od samego początku rozumiejąc nasze potrzeby i problemy związane z dotychczasowym układem parku. Dzięki modernizacji zyskaliśmy nowe, bezpieczne i atrakcyjne strefy – zarówno dla młodszych, jak i starszych dzieci. Interaktywne gry oraz sportowe boisko z elektroniką przyciągają klientów i sprawiają, że goście spędzają u nas więcej czasu. To nie tylko poprawiło satysfakcję odwiedzających, ale też znacząco zwiększyło naszą konkurencyjność na rynku. Indoor Play Concept to partner, który naprawdę potrafi łączyć bezpieczeństwo, nowoczesność i biznesowe podejście do inwestycji.”",
    author: "Maxence — właściciel FEC",
  },
  {
    quote:
      "“Decyzja o stworzeniu kącika dla dzieci z Indoor Play Concept była strzałem w dziesiątkę. Dzięki temu rozwiązaniu nasi najmłodsi goście mają bezpieczne i ciekawe miejsce do zabawy, a rodzice mogą spokojnie delektować się posiłkiem. Zauważyliśmy wyraźny wzrost liczby rodzin odwiedzających restaurację oraz wydłużenie czasu pobytu gości przy stolikach. Zespół IPC działał sprawnie i profesjonalnie – od projektu po montaż. To inwestycja, która nie tylko poprawiła komfort klientów, ale też realnie przełożyła się na rozwój naszego biznesu.”",
    author: "Maciek — właściciel restauracji",
  },
  {
    quote:
      "“Indoor Play Concept stworzyło dla nas kameralną strefę zabaw dla dzieci w osobnym pomieszczeniu przy funkcjonującej sali weselnej. To rozwiązanie okazało się ogromnym atutem dla naszego hotelu – rodzice mogą cieszyć się uroczystością, a dzieci mają bezpieczną, nowoczesną i atrakcyjną przestrzeń do zabawy. Goście są zachwyceni, a my zauważyliśmy, że coraz częściej wybierają nasz obiekt właśnie ze względu na tę dodatkową wartość. Profesjonalizm zespołu, dbałość o detale i pełne zrozumienie potrzeb branży hotelarskiej sprawiły, że z pełnym przekonaniem polecamy Indoor Play Concept jako partnera do tworzenia takich rozwiązań.”",
    author: "Marta — właściciel hotelu",
  },
];

/* ---------- Play Magazine (6 najnowszych wpisów, pełnowymiarowe miniatury) ---------- */

const magazineImages: Record<string, { src: string; width: number; height: number }> = {
  "wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze": { src: `${WP}/2025/12/Soft-Play.webp`, width: 1600, height: 1200 },
  "zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie": {
    src: `${WP}/2025/12/Indoor-Play-Concept-Team.webp`,
    width: 1709,
    height: 961,
  },
  "serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego": {
    src: `${WP}/2025/12/Indoor-Playgrounds-Service.webp`,
    width: 1920,
    height: 1080,
  },
  "modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i": {
    src: `${WP}/2025/12/Soft-Play-Modernization.webp`,
    width: 1920,
    height: 1080,
  },
  "marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow": {
    src: `${WP}/2025/12/photo-1522199755839-a2bacb67c546.avif`,
    width: 2400,
    height: 1597,
  },
  "lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy": { src: `${WP}/2025/12/3D-Designs.webp`, width: 2560, height: 1440 },
};

export const magazinePosts = posts.slice(0, 6).map((p) => ({
  href: `/pl/${p.slug}/`,
  title: p.title,
  image: magazineImages[p.slug] ?? { src: p.image.src, width: p.image.width, height: p.image.height },
}));

/* ---------- O nas ---------- */

export const aboutImage = {
  src: `${WP}/elementor/thumbs/Indoor-Play-Concept-Team2-rgefolbjkjw4nve6xugndh91jaazp4lr2mcxhp7iwi.webp`,
  alt: "Indoor Play Concept Team2",
};

export const aboutChecks = [
  "Zgodność z EN 1176/1177 i wsparcie przy odbiorach.",
  "Warianty i transparentny zakres kosztów – decyzje na liczbach.",
  "Modułowe systemy, łatwy serwis i dostępność części zamiennych.",
];

export const aboutStats: { value: string; label: string }[] = [
  { value: "150+", label: "zainstalowanych obiektów" },
  { value: "6–10 tyg.", label: "typowy czas wdrożenia" },
  { value: "9.1", label: "NPS" },
  { value: "2 lata", label: "Gwarancja" },
];

/* ---------- Kontakt ---------- */

// Animowany nagłówek (Elementor "animated headline", efekt pisania) – kolejne frazy.
export const headlinePhrases = [
  "Projekty dopasowane do Twojej przestrzeni",
  "Przejrzyste i konkurencyjne ceny",
  "Pełna kontrola nad budżetem inwestycji",
  "Twoja strategia - nasz priorytet !",
  "Najwyższej jakości certyfikowane materiały",
  "Bezpieczne konstrukcje zgodne z normami europejskimi",
  "Produkcja w Europie – gwarancja jakości",
];

export type ContactBoxIcon = "phone" | "whatsapp" | "marker" | "envelope";

export const contactBoxes: { icon: ContactBoxIcon; label: string; href: string }[] = [
  { icon: "phone", label: "+48 663 960 969", href: "tel:+48663960969" },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=48663960969&text&type=phone_number&app_absent=0"
  },
  { icon: "marker", label: "Stalowa Wola", href: "https://share.google/9LLCg0JqwqbVulE1v" },
  { icon: "envelope", label: "HELLO@INDOORPLAYCONCEPT.COM", href: "mailto:HELLO@INDOORPLAYCONCEPT.COM" },
];

export const mapEmbed = {
  src: "https://maps.google.com/maps?q=Aleje%20Jana%20Paw%C5%82a%20II%2013%2F220A%2C%2037-450%20Stalowa%20Wola%2C%20Indoor%20Play%20Concept&t=m&z=17&output=embed&iwloc=near",
  title: "Aleje Jana Pawła II 13/220A, 37-450 Stalowa Wola, Indoor Play Concept",
};
