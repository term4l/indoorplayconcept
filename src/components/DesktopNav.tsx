"use client";

import { AppLink as Link } from "./AppLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/data/navigation";
import { localizeLanguageSwitcher } from "@/lib/i18n";
import { Icon } from "./Icons";
import styles from "./Header.module.css";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const navItems = localizeLanguageSwitcher(items, pathname);
  const [open, setOpen] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Header żyje w layoucie i nie przeładowuje się przy nawigacji – po zmianie strony
  // zamykamy podmenu i zdejmujemy fokus z klikniętego linku (inaczej :focus-within trzyma je otwarte).
  useEffect(() => {
    setOpen(null);
    const active = document.activeElement;
    if (active instanceof HTMLElement && navRef.current?.contains(active)) active.blur();
  }, [pathname]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <nav ref={navRef} aria-label="Menu" className={styles.desktopNav}>
      <ul className={styles.menu}>
        {navItems.map((item, i) => {
          if (!item.children) {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          }
          const id = `submenu-${i}`;
          const isOpen = open === i;
          return (
            <li
              key={item.label}
              className={styles.hasSub}
              data-open={isOpen}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                className={styles.menuLink}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={id}
                // Myszką/dotykiem menu jest już otwarte przez hover – klik nie może go zamykać.
                // Z klawiatury (detail === 0) Enter/Spacja przełącza.
                onClick={(e) => setOpen(e.detail === 0 && isOpen ? null : i)}
              >
                {item.label}
                <Icon name="caretDown" className={styles.caret} />
              </button>
              <ul id={id} className={styles.submenu}>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={styles.submenuLink}
                      lang={child.lang}
                      hrefLang={child.lang}
                      aria-current={pathname === child.href ? "page" : undefined}
                      onClick={(e) => {
                        setOpen(null);
                        e.currentTarget.blur();
                      }}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
