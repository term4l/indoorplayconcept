/** Projekty 3D – dane kart z oryginalnej strony (pierwsza strona wyników wtyczki IPC Projects). */

export type Project = {
  id: string;
  title: string;
  /** Numer projektu, np. "PD-PA003". */
  code: string;
  image: string;
  category: string;
  description: string;
  /** Cena bazowa (tekst jak w WooCommerce). */
  price: string;
  /** Wymiary w metrach. */
  length: number;
  width: number;
  height: number;
  age: string;
  badges: string[];
  fullDescUrl: string;
};

export const projects: Project[] = [
  {
    "id": "3583",
    "title": "Wewnętrzne sale zabaw",
    "code": "PD-PA003",
    "image": "/images/sale-zabaw-projekty-3d/pd-pa003.webp",
    "category": "soft-play",
    "description": "Wewnętrzne sale zabaw – mogą zawierać taki projekt jako główną atrakcja dużych obiektów komercyjnych. Wielopoziomowa konstrukcja inspirowana światem podwodnym łączy intensywną aktywność ruchową, efekt wizualny i długie zaangażowanie dzieci, tworząc…",
    "price": "118 699,00 €",
    "length": 17.1,
    "width": 17.1,
    "height": 5,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/wewnetrzne-sale-zabaw/"
  },
  {
    "id": "3581",
    "title": "Wewnętrzna Sala Zabaw",
    "code": "PD-PA002",
    "image": "/images/sale-zabaw-projekty-3d/pd-pa002.webp",
    "category": "soft-play",
    "description": "Wewnętrzna sala zabaw zaprojektowana jako jeden duży, dominujący obiekt stanowiący główną atrakcję całego centrum rodzinnego. Projekt opiera się na wyraźnym elemencie „wow” w postaci 14-metrowej zjeżdżalni rodzinnej, rozbudowanej konstrukcji wielopoziomowej…",
    "price": "112 918,00 €",
    "length": 19.5,
    "width": 12.2,
    "height": 6.5,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/wewnetrzna-sala-zabaw/"
  },
  {
    "id": "3576",
    "title": "Tematyczna Sala Zabaw – Zamek",
    "code": "PD-PA001",
    "image": "/images/sale-zabaw-projekty-3d/pd-pa001.webp",
    "category": "soft-play",
    "description": "Tematyczna Sala Zabaw – Zamek to ciekawy projekt wewnętrznej sali zabaw zaprojektowany z myślą o dużych obiektach komercyjnych, które chcą stworzyć silną, rozpoznawalną atrakcję dla rodzin z dziećmi. Motyw zamku,…",
    "price": "41 302,00 €",
    "length": 19.5,
    "width": 12.2,
    "height": 6.5,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/tematyczna-sala-zabaw-zamek/"
  },
  {
    "id": "3568",
    "title": "Sala Zabaw „Pinkowo” w Restauracji",
    "code": "PS-PA017",
    "image": "/images/sale-zabaw-projekty-3d/ps-pa017.webp",
    "category": "soft-play",
    "description": "Sala zabaw w restauracji „Pinkowo” to rozbudowana, mocno różowa strefa zabaw dla dzieci od 4. roku życia, zaprojektowana jako wydzielone pomieszczenie w obiektach gastronomicznych. Projekt łączy wielopoziomową konstrukcję, elementy sensoryczne…",
    "price": "43 192,00 €",
    "length": 20.7,
    "width": 4.9,
    "height": 4,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/sala-zabaw-pinkowo-w-restauracji/"
  },
  {
    "id": "3560",
    "title": "Wewnętrzny plac zabaw w restauracji – Potworek",
    "code": "PS-PA007",
    "image": "/images/sale-zabaw-projekty-3d/ps-pa007.webp",
    "category": "soft-play",
    "description": "Wewnętrzny plac zabaw w restauracji – Potworek to rozbudowana, tematyczna strefa zabaw zaprojektowana jako osobne pomieszczenie w obiektach gastronomicznych. Projekt umożliwia dzieciom aktywną, bezpieczną zabawę podczas wizyt rodzinnych, przyjęć okolicznościowych…",
    "price": "58 481,00 €",
    "length": 13.5,
    "width": 7.3,
    "height": 6,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/wewnetrzny-plac-zabaw-w-restauracji-potworek/"
  },
  {
    "id": "3558",
    "title": "Sala Zabaw w Hotelu – Wulkan",
    "code": "PS-PA004",
    "image": "/images/sale-zabaw-projekty-3d/ps-pa004.webp",
    "category": "soft-play",
    "description": "Sala zabaw w hotelu – Wulkan to efektowny, tematyczny projekt zaprojektowany jako osobne pomieszczenie w obiektach hotelowych. Konstrukcja idealnie sprawdza się w hotelach rodzinnych, resortach oraz obiektach wypoczynkowych, gdzie strefa…",
    "price": "40 713,00 €",
    "length": 9.8,
    "width": 11,
    "height": 5,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/sala-zabaw-w-hotelu-wulkan/"
  },
  {
    "id": "3550",
    "title": "Wewnętrzny plac zabaw w kręgielni",
    "code": "PS-PA002",
    "image": "/images/sale-zabaw-projekty-3d/ps-pa002.webp",
    "category": "soft-play",
    "description": "Wewnętrzny plac zabaw w kręgielni to dynamiczna, wielopoziomowa strefa zabaw zaprojektowana jako osobne pomieszczenie lub wydzielona strefa w obiektach bowlingowych. Projekt umożliwia dzieciom aktywną, bezpieczną zabawę podczas gry dorosłych, turniejów…",
    "price": "26 689,00 €",
    "length": 8.5,
    "width": 4.8,
    "height": 4,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/wewnetrzny-plac-zabaw-w-kregielni/"
  },
  {
    "id": "3542",
    "title": "Kids Area – wewnętrzny plac zabaw w restauracji",
    "code": "PS-PA001",
    "image": "/images/sale-zabaw-projekty-3d/ps-pa001.webp",
    "category": "soft-play",
    "description": "Kids Area to rozbudowana, wielopoziomowa strefa zabaw zaprojektowana jako osobne pomieszczenie w obiektach gastronomicznych. Projekt pełni funkcję wewnętrznego placu zabaw w restauracji, zapewniając dzieciom bezpieczną i atrakcyjną przestrzeń zabawy podczas…",
    "price": "43 374,00 €",
    "length": 9.8,
    "width": 9.8,
    "height": 5,
    "age": "Wiek:4+",
    "badges": [],
    "fullDescUrl": "/pl/kids-area-wewnetrzny-plac-zabaw-w-restauracji/"
  },
  {
    "id": "3535",
    "title": "Małpi Gaj w Hotelu – Pastelowy Raj",
    "code": "PM-PA011",
    "image": "/images/sale-zabaw-projekty-3d/pm-pa011.webp",
    "category": "soft-play",
    "description": "Małpi Gaj w Hotelu – Pastelowy Raj to całoroczny, kompaktowy projekt mieszczący się w miejscu ustronnym, zaprojektowany z myślą o hotelach rodzinnych, które chcą zapewnić najmłodszym gościom bezpieczną, spokojną i…",
    "price": "9 162,00 €",
    "length": 4.9,
    "width": 3.6,
    "height": 2.5,
    "age": "Wiek:2+",
    "badges": [],
    "fullDescUrl": "/pl/malpi-gaj-w-hotelu-pastelowy-raj/"
  }
];
