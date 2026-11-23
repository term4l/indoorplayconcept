import Link from "next/link";
import type { ComponentProps } from "react";
import { magazinePage } from "@/data/magazine";
import { pageByPath } from "@/data/pages";

// Trasy obsługiwane przez Next.js idą przez <Link> (prefetch, nawigacja kliencka).
// Pozostałe adresy (inne języki, nieprzeniesione strony WordPressa) to zwykłe <a>.
const isAppRoute = (href: string) => Boolean(pageByPath(href)) || href.startsWith(magazinePage.path);

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  /**
   * Zwykłe <a> mimo trasy aplikacji – pełne przeładowanie jak w WordPressie.
   * Używane dla logo i „Strona główna”: <Link> do bieżącej strony nic nie robi (nie odświeża, nie przewija na górę).
   */
  plain?: boolean;
};

export function AppLink({ href, plain, ...rest }: Props) {
  return isAppRoute(href) && !plain ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
