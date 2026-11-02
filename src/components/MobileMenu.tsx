"use client";

import { AppLink as Link } from "./AppLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/data/navigation";
import { localizeLanguageSwitcher } from "@/lib/i18n";
import { Icon } from "./Icons";
import styles from "./MobileMenu.module.css";

type Props = {
  items: NavItem[];
  cta: { label: string; href: string };
};

export function MobileMenu({ items, cta }: Props) {
  const pathname = usePathname();
  const navItems = localizeLanguageSwitcher(items, pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.classList.add(styles.lock);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove(styles.lock);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label="Menu Toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(true)}
      >
        <Icon name="menu" />
      </button>

      <div
        className={styles.overlay}
        data-open={isOpen}
        onClick={(e) => e.target === e.currentTarget && close()}
        inert={!isOpen}
      >
        <div id="mobile-menu" className={styles.panel} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.header}>
            <Link href="/pl/" className={styles.brand} onClick={close}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.svg" alt="IndoorPlayConcept" width={81} height={28} />
            </Link>
            <button ref={closeRef} type="button" className={styles.close} aria-label="Zamknij menu" onClick={close}>
              ×
            </button>
          </div>

          <ul className={styles.list}>
            {navItems.map((item, i) => {
              const subId = `mobile-submenu-${i}`;
              const isExpanded = expanded === i;
              return (
                <li key={item.label} className={styles.item}>
                  <div className={styles.row}>
                    {item.children ? (
                      <button
                        type="button"
                        className={styles.link}
                        aria-expanded={isExpanded}
                        aria-controls={subId}
                        onClick={() => setExpanded(isExpanded ? null : i)}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.link}
                        data-active={pathname === item.href}
                        onClick={close}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <button
                        type="button"
                        className={styles.expand}
                        aria-expanded={isExpanded}
                        aria-controls={subId}
                        aria-label={isExpanded ? "Zwiń" : "Rozwiń"}
                        onClick={() => setExpanded(isExpanded ? null : i)}
                      >
                        <span className={styles.chevron} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul id={subId} className={styles.submenu} hidden={!isExpanded}>
                      {item.children.map((child) => (
                        <li key={child.href} className={styles.item}>
                          <div className={styles.row}>
                            <Link
                              href={child.href}
                              className={styles.link}
                              lang={child.lang}
                              hrefLang={child.lang}
                              data-active={pathname === child.href}
                              onClick={close}
                            >
                              {child.label}
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.cta}>
            <Link href={cta.href} className={styles.ctaBtn} onClick={close}>
              <span>{cta.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
