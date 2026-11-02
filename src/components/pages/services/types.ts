import type { ServiceIconName } from "./icons";

/* ---------- Tekst z prostym formatowaniem (dane w plikach .ts, bez JSX) ---------- */

export type Inline = string | { strong: string } | { em: string };
/** Akapit: zwykły string albo lista fragmentów z pogrubieniami/kursywą. */
export type Rich = string | Inline[];

export type IconRef = { name: ServiceIconName; color?: string };

export type LinkItem = {
  label: string;
  href: string;
  /** Strzałka po tekście (jak w przyciskach Elementora z ikoną). */
  arrow?: boolean;
};

/* ---------- Bloki ---------- */

export type HeroBlock = {
  type: "hero";
  image: string;
  kicker: string;
  /** Który element jest <h1>: mały nadtytuł (montaż, serwis) czy duży tytuł (przebudowa). */
  h1: "kicker" | "title";
  kickerStyle: "label" | "labelBold" | "plain";
  title: string;
  titleSize: number;
  lead: string;
};

export type HeadingBlock = {
  type: "heading";
  title: string;
  /** Rozmiar h2 w px na desktopie (domyślnie 32). */
  size?: number;
  /** Podtytuł – w oryginale również widget nagłówka (h2). */
  subtitle?: string;
  subtitleColor?: string;
  align?: "left" | "center";
};

export type StatsBlock = {
  type: "stats";
  items: { label: string; value: number; suffix: string }[];
};

/** Mini-kafelki w karcie „Płynny start” (w oryginale para nagłówków h2). */
export type MiniStat = { value: string; label: string };

/** Wiersz „etykieta – wartość” w kartach priorytetów serwisu. */
export type KeyValue = [label: string, value: string];

export type CardTone = "solid" | "glass" | "outline" | "fade" | "plain" | "info" | "blue" | "amber" | "green";

export type CardItem = {
  icon?: IconRef;
  title: string;
  text?: Rich;
  list?: string[];
  /** Tytuł listy wypunktowanej (karta bez ikony, np. „Nasze standardy pracy”). */
  listTitle?: string;
  stats?: MiniStat[];
  rows?: KeyValue[];
  button?: LinkItem;
  tone?: CardTone;
  /** Karta na całą szerokość siatki (np. „Serwis awaryjny”). */
  wide?: boolean;
};

export type CardsBlock = {
  type: "cards";
  /** Liczba kolumn albo proporcje kolumn (np. [3, 2]). */
  cols: number | number[];
  tone: CardTone;
  iconSize?: number;
  titleSize?: number;
  titleWeight?: number;
  descSize?: number;
  descColor?: string;
  items: CardItem[];
};

export type ListCardsBlock = {
  type: "listCards";
  items: { title: string; list: string[] }[];
};

export type ProseBlock = {
  type: "prose";
  paragraphs: Rich[];
  size?: number;
  color?: string;
  align?: "left" | "center";
  /** Wąska kolumna (570px) jak w blokach CTA. */
  narrow?: boolean;
  /** W oryginale część długich tekstów to widget nagłówka (h2) z <br>. */
  as?: "p" | "h2";
};

export type FaqItem = { question: string; answer: Rich };

export type FaqBlock = { type: "faq"; columns: FaqItem[][] };

export type NumberedBlock = { type: "numbered"; items: Rich[] };

export type StepItem = { title: string; subtitle: string; body: Rich[] };

export type ContactPill = { label: string; href: string; icon: "phone" | "whatsapp" | "arrowRight" };

export type StepsBlock = { type: "steps"; items: StepItem[]; contacts: ContactPill[] };

export type ButtonsBlock = { type: "buttons"; buttons: LinkItem[] };

export type Block =
  | HeadingBlock
  | StatsBlock
  | CardsBlock
  | ListCardsBlock
  | ProseBlock
  | FaqBlock
  | NumberedBlock
  | StepsBlock
  | ButtonsBlock;

/** Sekcja = grupa bloków z odstępem 20px; między sekcjami 50px (jak w Elementorze). */
export type ServiceSection = { id?: string; blocks: Block[] };

export type ServicePageContent = {
  hero: HeroBlock;
  sections: ServiceSection[];
};
