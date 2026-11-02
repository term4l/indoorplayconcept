import Link from "next/link";
import type { ComponentProps } from "react";
import { magazinePage } from "@/data/magazine";
import { pageByPath } from "@/data/pages";

// Trasy obsługiwane przez Next.js idą przez <Link> (prefetch, nawigacja kliencka).
// Pozostałe adresy (inne języki, nieprzeniesione strony WordPressa) to zwykłe <a>.
const isAppRoute = (href: string) => Boolean(pageByPath(href)) || href.startsWith(magazinePage.path);

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

export function AppLink({ href, ...rest }: Props) {
  return isAppRoute(href) ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
