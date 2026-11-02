"use client";

import { useEffect, type ReactNode } from "react";
import styles from "./Projects.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  label: string;
  variant?: "product" | "contact" | "compare";
  children: ReactNode;
};

/** Okno modalne (overlay, ×, Escape) – odpowiednik .ipc-modal z ipc.js. */
export function Modal({ open, onClose, label, variant = "product", children }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" aria-label={label}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.dialog} data-variant={variant}>
        <button type="button" className={styles.close} aria-label="Zamknij" onClick={onClose} autoFocus>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
