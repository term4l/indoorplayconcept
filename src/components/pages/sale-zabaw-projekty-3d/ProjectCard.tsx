"use client";

import Image from "next/image";
import { useState, type KeyboardEvent, type MouseEvent } from "react";
import type { Project } from "@/data/content/sale-zabaw-projekty-3d";
import styles from "./Projects.module.css";

export const projectDims = (p: Project, unit = "m") => `${p.length}×${p.width}×${p.height} ${unit}`;

type Props = {
  project: Project;
  onOpen: () => void;
  /** "slider" (strona główna): bez przycisków porównania/kopiowania i bez etykiety "Projekt:". */
  variant?: "grid" | "slider";
  compared?: boolean;
  onToggleCompare?: () => void;
};

async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(ta);
  if (!ok) throw new Error("copy_failed");
}

export function ProjectCard({ project: p, onOpen, variant = "grid", compared = false, onToggleCompare }: Props) {
  const isSlider = variant === "slider";
  const [copied, setCopied] = useState(false);

  function onCopy(e: MouseEvent) {
    e.stopPropagation();
    const link = `${window.location.href.split("#")[0]}#ipc-project-${p.id}`;
    copyToClipboard(link)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      })
      .catch(() => window.prompt("Skopiuj link:", link));
  }

  function onKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  }

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`Podgląd: ${p.title}`}
      onClick={onOpen}
      onKeyDown={onKeyDown}
    >
      <div className={styles.thumb}>
        <Image src={p.image} alt={p.title} width={1024} height={576} sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 300px" />
        <div className={styles.topbar}>
          {!isSlider && (
            <div className={styles.thumbActions}>
              <button
                type="button"
                className={styles.thumbBtn}
                data-on={compared || undefined}
                aria-pressed={compared}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompare?.();
                }}
              >
                <span>Porównaj</span>
                <span className={styles.check} aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M20.285 6.709a1 1 0 0 1 0 1.414l-10.01 10.01a1 1 0 0 1-1.414 0L3.715 13a1 1 0 1 1 1.414-1.414l4.025 4.025 9.303-9.302a1 1 0 0 1 1.414 0z" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className={`${styles.thumbBtn} ${styles.copyBtn}`}
                data-copied={copied || undefined}
                aria-label="Kopiuj link do projektu"
                title="Kopiuj link do projektu"
                onClick={onCopy}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16h-9V7h9v14z" />
                </svg>
              </button>
            </div>
          )}
          <div className={styles.price}>od {p.price}</div>
        </div>
      </div>
      <div className={styles.txt}>
        <h3 className={styles.cardTitle}>{p.title}</h3>
        <div className={styles.row2}>
          <span className={styles.pill}>{p.age}</span>
          <div className={styles.metaLine}>
            <span className={styles.pill}>Wymiary: {projectDims(p)}</span>
            <span className={styles.projNo}>
              {!isSlider && <span className={styles.projLabel}>Projekt:</span>}
              <span>{p.code}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
