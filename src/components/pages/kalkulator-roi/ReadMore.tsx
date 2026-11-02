"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import styles from "./ReadMore.module.css";

type Props = {
  children: ReactNode;
  moreLabel: string;
  lessLabel: string;
  /** Dodatkowe linki-przyciski obok "czytaj więcej". */
  links?: { href: string; label: string }[];
};

/**
 * Zwijany opis z animacją wysokości (port skryptu "toggleBtn" z oryginału).
 * Pełna treść jest zawsze w HTML – zwinięcie to tylko CSS (height + overflow).
 */
export function ReadMore({ children, moreLabel, lessLabel, links = [] }: Props) {
  const id = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  function expand() {
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) return;
    setExpanded(true);
    panel.style.height = `${panel.getBoundingClientRect().height}px`;
    requestAnimationFrame(() => {
      panel.style.height = `${content.scrollHeight}px`;
    });
    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "height") return;
      panel.style.height = "auto";
      panel.removeEventListener("transitionend", onEnd);
    };
    panel.addEventListener("transitionend", onEnd);
  }

  function collapse() {
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) return;
    setExpanded(false);
    panel.style.height = `${content.scrollHeight}px`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Usunięcie inline height przywraca wysokość zwiniętą z CSS (z animacją).
        panel.style.height = "";
      });
    });
  }

  return (
    <div className={styles.wrap}>
      <div id={id} ref={panelRef} className={styles.collapsible} data-expanded={expanded} aria-live="polite">
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.btn}
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => (expanded ? collapse() : expand())}
        >
          {expanded ? lessLabel : moreLabel}
        </button>
        {links.map((l) => (
          <AppLink key={l.href} href={l.href} className={styles.btn} role="button">
            {l.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}
