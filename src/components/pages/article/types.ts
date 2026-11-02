import type { ReactNode } from "react";

export type TocItem = {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
};

/** Treść wpisu: nagłówki (do spisu treści, z id wstawionymi w JSX) + sam body. */
export type ArticleContent = {
  headings: TocItem[];
  body: ReactNode;
};
