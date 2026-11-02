import type { NavItem } from "@/data/navigation";
import { pageByPath } from "@/data/pages";

/** Podmienia linki przełącznika języka na odpowiedniki bieżącej strony (z hreflang). */
export function localizeLanguageSwitcher(items: NavItem[], pathname: string): NavItem[] {
  const hreflang = pageByPath(pathname)?.hreflang;
  return items.map((item) =>
    item.isLanguageSwitcher && item.children
      ? {
          ...item,
          children: item.children.map((child) => {
            const code = child.lang?.slice(0, 2) as keyof NonNullable<typeof hreflang>;
            return { ...child, href: hreflang?.[code] ?? `/${code}/` };
          }),
        }
      : item,
  );
}
