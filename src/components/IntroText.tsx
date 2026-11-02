"use client";

import { useState } from "react";
import styles from "./Magazine.module.css";

const VISIBLE_WHEN_COLLAPSED = 2;

// Cały tekst jest w HTML od początku (SSR) – zwijanie to tylko CSS, więc Google widzi wszystkie akapity.
export function IntroText({ paragraphs }: { paragraphs: string[] }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.intro} data-collapsed={collapsed}>
      <div id="pmag-content" className={styles.introContent} aria-live="polite">
        {paragraphs.map((p, i) => (
          <p key={i} data-extra={i >= VISIBLE_WHEN_COLLAPSED || undefined}>
            {p}
          </p>
        ))}
      </div>
      {paragraphs.length > VISIBLE_WHEN_COLLAPSED && (
        <button
          type="button"
          className={styles.introToggle}
          aria-expanded={!collapsed}
          aria-controls="pmag-content"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? "Czytaj więcej" : "Zwiń"}
        </button>
      )}
    </div>
  );
}
