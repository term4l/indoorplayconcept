"use client";

import { createContext, useContext, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import { calculateRoi, emptyRoiInputs, formatRoiResults, type RoiField, type RoiInputs } from "./calc";
import styles from "./RoiCalculator.module.css";

/* ---------- Wspólny stan formularza i wyników (dwie osobne sekcje strony) ---------- */

type RoiState = {
  inputs: RoiInputs;
  setField: (k: RoiField, v: string) => void;
  city: string;
  setCity: (v: string) => void;
};

const RoiContext = createContext<RoiState | null>(null);

function useRoi(): RoiState {
  const ctx = useContext(RoiContext);
  if (!ctx) throw new Error("RoiForm/RoiResults muszą być wewnątrz <RoiProvider>.");
  return ctx;
}

export function RoiProvider({ children }: { children: ReactNode }) {
  const [inputs, setInputs] = useState<RoiInputs>(emptyRoiInputs);
  const [city, setCity] = useState("");
  const value = useMemo<RoiState>(
    () => ({ inputs, setField: (k, v) => setInputs((prev) => ({ ...prev, [k]: v })), city, setCity }),
    [inputs, city],
  );
  return <RoiContext.Provider value={value}>{children}</RoiContext.Provider>;
}

/* ---------- Formularz ---------- */

type FieldDef = { key: RoiField; label: string; placeholder: string; min: number; max?: number; step?: number };

function NumberInput({ def }: { def: FieldDef }) {
  const { inputs, setField } = useRoi();
  return (
    <label>
      {def.label}{" "}
      <input
        type="number"
        id={`ipc-${def.key.replace(/_/g, "-")}`}
        placeholder={def.placeholder}
        min={def.min}
        max={def.max}
        step={def.step}
        value={inputs[def.key]}
        onChange={(e) => setField(def.key, e.target.value)}
      />
    </label>
  );
}

const pair = (a: FieldDef, b: FieldDef) => (
  <div className={styles.grid2}>
    <NumberInput def={a} />
    <NumberInput def={b} />
  </div>
);

export function RoiForm() {
  const { city, setCity } = useRoi();
  return (
    <div className={styles.form}>
      <div className={styles.card}>
        <h2>Inwestycja</h2>
        <label>
          Miasto inwestycji{" "}
          <input
            type="text"
            id="ipc-investment-city"
            placeholder="np. Warszawa"
            maxLength={80}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <p className={styles.help}>Miasto zostanie dołączone do wysyłanego wyniku.</p>
      </div>

      <div className={styles.card}>
        <h2>Przychody</h2>
        <NumberInput def={{ key: "population", label: "Populacja (osoby w zasięgu)", placeholder: "np. 100000", min: 0 }} />
        {pair(
          { key: "visitors_percent", label: "Odsetek odwiedzających / mies. (%)", placeholder: "np. 3", min: 0, max: 100, step: 0.1 },
          { key: "ticket_price", label: "Cena biletu", placeholder: "np. 30", min: 0, step: 0.1 },
        )}
        <NumberInput def={{ key: "additional_revenue", label: "Dodatkowy przychód na dziecko", placeholder: "np. 10", min: 0, step: 0.1 }} />
      </div>

      <div className={styles.card}>
        <h2>Urodziny (dodatkowy przychód)</h2>
        <p className={styles.helpText}>
          Podaj liczbę imprez w skali <strong>miesiąca</strong>.
        </p>
        {pair(
          { key: "parties_per_month", label: "Imprezy urodzinowe / miesiąc", placeholder: "np. 26", min: 0 },
          { key: "kids_per_party", label: "Dzieci na imprezie (średnio)", placeholder: "np. 12", min: 0 },
        )}
        {pair(
          { key: "birthday_ticket", label: "Bilet urodzinowy / dziecko", placeholder: "np. 49", min: 0, step: 0.1 },
          { key: "birthday_upsell", label: "Dodatkowe wydatki / dziecko", placeholder: "np. 15", min: 0, step: 0.1 },
        )}
      </div>

      <div className={styles.card}>
        <h2>Koszty</h2>
        {pair(
          { key: "area", label: "Powierzchnia / m²", placeholder: "np. 200", min: 0 },
          { key: "rent_per_m2", label: "Czynsz / m²", placeholder: "np. 10", min: 0, step: 0.1 },
        )}
        {pair(
          { key: "staff_hourly", label: "Koszt pracownika / h", placeholder: "np. 25", min: 0, step: 0.1 },
          { key: "daily_hours", label: "Godziny pracy / dzień", placeholder: "np. 10", min: 0 },
        )}
        {pair(
          { key: "employees", label: "Liczba pracowników", placeholder: "np. 3", min: 0 },
          { key: "working_days", label: "Dni robocze / mies.", placeholder: "np. 26", min: 0 },
        )}
        <NumberInput def={{ key: "utilities", label: "Koszty mediów / mies.", placeholder: "np. 2000", min: 0, step: 0.1 }} />
        {pair(
          { key: "equipment_cost", label: "Koszt konstrukcji i wyposażenia", placeholder: "np. 400000", min: 0 },
          { key: "lease_months", label: "Okres leasingu (mies.)", placeholder: "np. 60", min: 1 },
        )}
        <NumberInput def={{ key: "annual_interest", label: "Oprocentowanie roczne (%)", placeholder: "np. 6", min: 0, step: 0.1 }} />
      </div>
    </div>
  );
}

/* ---------- Wyniki + wysyłka na e-mail ---------- */

type EmailStatus = { text: string; variant: "success" | "error" | "info" } | null;

const MSG = {
  invalid: "Podaj poprawny adres e-mail.",
  sending: "Wysyłanie…",
  sent: "Wysłano! Sprawdź skrzynkę e-mail.",
  failed: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
};

export function RoiResults() {
  const { inputs, city } = useRoi();
  const results = useMemo(() => calculateRoi(inputs), [inputs]);
  const out = formatRoiResults(results);

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<EmailStatus>(null);

  async function sendEmail(input: HTMLInputElement | null) {
    const value = email.trim();
    if (!value || (input && !input.checkValidity())) {
      setStatus({ text: MSG.invalid, variant: "error" });
      return;
    }
    if (!consent) {
      setStatus({ text: "Zaznacz zgodę na przetwarzanie danych.", variant: "error" });
      return;
    }
    const body = new FormData();
    body.set("email", value);
    body.set("investment_city", city);
    body.set("page_url", window.location.href);
    body.set("inputs", JSON.stringify({ investment_city: city, ...inputs }));
    body.set("results", JSON.stringify(results));
    body.set("consent", "tak");

    setSending(true);
    setStatus({ text: MSG.sending, variant: "info" });
    try {
      const res = await fetch("/api/forms/kalkulator-roi/", { method: "POST", body });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? MSG.failed);
      setStatus({ text: MSG.sent, variant: "success" });
    } catch (err) {
      setStatus({ text: err instanceof Error && err.message ? err.message : MSG.failed, variant: "error" });
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      void sendEmail(e.currentTarget);
    }
  }

  return (
    <div className={styles.results}>
      <div className={`${styles.grid2} ${styles.resultsGrid}`}>
        <div className={`${styles.card} ${styles.cardResult}`}>
          <div className={styles.block}>
            <span className={styles.label}>Odwiedzający / miesiąc</span>
            <span className={styles.value}>{out.monthlyVisitors}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.block}>
            <span className={styles.label}>Przychód miesięczny (łącznie)</span>
            <span className={styles.value}>{out.monthlyRevenue}</span>
          </div>
          <p className={styles.small}>
            w tym urodziny: <span>{out.monthlyBirthdayRevenue}</span>
          </p>
        </div>
        <div className={`${styles.card} ${styles.cardResult}`}>
          <div className={styles.block}>
            <span className={styles.label}>Łączne koszty miesięczne</span>
            <span className={styles.value}>{out.totalMonthlyCost}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.block}>
            <span className={styles.label}>Wynik miesięczny</span>
            <span className={styles.value} data-profit={out.profitNegative ? "negative" : "positive"}>
              {out.monthlyProfit}
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardCenter}`}>
        <span className={styles.label}>Szacowany czas zwrotu</span>
        <span className={styles.valueBig}>{out.payback}</span>
      </div>

      <div className={`${styles.card} ${styles.cardCenter}`}>
        <span className={styles.label}>Wyślij wynik na e-mail</span>
        <div className={styles.emailRow}>
          <input
            id="ipc-roi-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Twój e-mail"
            aria-label="Twój e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            type="button"
            className={styles.emailBtn}
            disabled={sending}
            onClick={() => void sendEmail(document.getElementById("ipc-roi-email") as HTMLInputElement | null)}
          >
            Wyślij wynik
          </button>
        </div>
        <label className={styles.consent}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania zgodnie z{" "}
            <a href="/pl/polityka-prywatnosci/">Polityką prywatności</a>.
          </span>
        </label>
        <div className={styles.status} aria-live="polite" data-variant={status?.variant}>
          {status?.text}
        </div>
      </div>
    </div>
  );
}
