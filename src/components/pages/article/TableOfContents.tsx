"use client";

import { useEffect, useRef } from "react";
import type { TocItem } from "./types";
import styles from "./ArticleLayout.module.css";

// Jak w Elementorze: spis treści rozwinięty na desktopie, zwinięty od tabletu w dół.
// Lista jest zawsze w HTML (natywny <details>), JS jedynie otwiera ją na szerokim ekranie.
const DESKTOP = "(min-width: 1025px)";

function TocList({ items }: { items: TocItem[] }) {
  return (
    <ol className={styles.tocList}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.text}</a>
          {item.children && item.children.length > 0 && <TocList items={item.children} />}
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current && window.matchMedia(DESKTOP).matches) ref.current.open = true;
  }, []);

  return (
    <details ref={ref} className={styles.toc}>
      <summary className={styles.tocHeader}>
        <h4 className={styles.tocTitle}>Spis treści</h4>
        <svg className={styles.tocChevron} aria-hidden="true" focusable="false" viewBox="0 0 448 512" fill="currentColor">
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
        </svg>
      </summary>
      <nav aria-label="Spis treści" className={styles.tocBody}>
        <TocList items={items} />
      </nav>
    </details>
  );
}
