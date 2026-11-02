"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "../ui";
import styles from "./forms.module.css";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

type Props = {
  /** Identyfikator formularza – trafia do /api/forms/[formId] (lista w src/lib/forms.ts). */
  formId: string;
  submitLabel: string;
  successMessage?: string;
  className?: string;
  children: ReactNode;
};

export function Form({ formId, submitLabel, successMessage = "Dziękujemy! Wiadomość została wysłana.", className, children }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch(`/api/forms/${formId}/`, { method: "POST", body: new FormData(form) });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Nie udało się wysłać formularza.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Nie udało się wysłać formularza." });
    }
  }

  return (
    <form className={[styles.form, className].filter(Boolean).join(" ")} onSubmit={onSubmit} noValidate={false}>
      {children}

      {/* Honeypot – ukryte pole, które wypełniają tylko boty. */}
      <div className={styles.hp} aria-hidden="true">
        <label>
          Strona www
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.footer}>
        <Button type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Wysyłanie…" : submitLabel}
        </Button>
        <p className={styles.status} role="status" aria-live="polite" data-state={status.state}>
          {status.state === "sent" && successMessage}
          {status.state === "error" && status.message}
        </p>
      </div>
    </form>
  );
}
