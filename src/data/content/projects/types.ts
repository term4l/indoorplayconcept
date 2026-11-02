/** Wspólny model danych podstron projektów 3D („Zobacz pełny opis →” w katalogu projektów). */

/** Fragment akapitu: zwykły tekst, pogrubienie albo złamanie wiersza (jak w treści z Elementora). */
export type Inline = string | { b: string } | { br: true };
export type Paragraph = Inline[];

export type FaqIconName = "child" | "hotel" | "pencil" | "cubes" | "smile" | "cookie" | "peopleCarry";

export type GalleryImage = {
  /** Miniatura (medium_large). */
  src: string;
  /** Pełny rozmiar – otwierany w lightboxie. */
  full: string;
  width: number;
  height: number;
  alt: string;
};

type HeadedBlock = { eyebrow: string; heading: string; intro: Paragraph[] };

export type ProjectPageData = {
  /** Klucz w src/data/pages.ts (= slug adresu /pl/<slug>/). */
  slug: string;
  /** Nagłówek h2 nad tytułem (nadtytuł w hero). */
  kicker: string;
  /** Jedyny h1 strony. */
  title: string;
  intro: Paragraph[];
  /** Tło hero (pełna wizualizacja). */
  heroImage: string;
  /** Kod projektu do formularza (z karty katalogu; tekst wyświetlany jest w description.codeText). */
  code: string;
  /** Wymiary L×W×H do formularza. */
  dims: string;
  description: {
    heading: string;
    /** Dokładnie jak na stronie, np. "Kod projektu: PS-PA001". */
    codeText: string;
    price: string;
    sections: { heading: string; body: Paragraph[] }[];
  };
  gallery: HeadedBlock & { images: GalleryImage[] };
  specs: { eyebrow: string; heading: string; body: Paragraph[] };
  faq: { eyebrow: string; heading: string; items: { icon: FaqIconName; question: string; answer: string }[] };
  /** Slugi wpisów Play Magazine (dane kart z src/data/magazine.ts). */
  articles: HeadedBlock & { slugs: string[] };
  similar: HeadedBlock;
};
