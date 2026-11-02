"use client";

import { Fragment, useEffect, useState } from "react";
import styles from "./Home.module.css";

// Tempo jak w widżecie "animated headline" Elementora (typing): litery co ~90 ms, pauza 2,5 s na pełnej frazie.
const TYPE_MS = 90;
const HOLD_MS = 2500;
const SELECT_MS = 500;

type Phase = "typing" | "hold" | "selected";

/**
 * Nagłówek z efektem pisania. Wszystkie frazy są w HTML (SSR); widoczna jest tylko aktywna,
 * a bez JS (i przy prefers-reduced-motion bez pisania) pokazuje się pełna pierwsza fraza.
 */
export function RotatingHeadline({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(phrases[0]?.length ?? 0);
  const [phase, setPhase] = useState<Phase>("hold");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const current = phrases[index] ?? "";
    let timer: number;

    if (phase === "hold") {
      timer = window.setTimeout(() => setPhase(reduced ? "typing" : "selected"), HOLD_MS);
    } else if (phase === "selected") {
      timer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setChars(0);
        setPhase("typing");
      }, SELECT_MS);
    } else if (reduced) {
      // Bez animacji: od razu kolejna pełna fraza.
      timer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setChars(Number.MAX_SAFE_INTEGER);
        setPhase("hold");
      }, 0);
    } else if (chars < current.length) {
      timer = window.setTimeout(() => setChars((c) => c + 1), TYPE_MS);
    } else {
      timer = window.setTimeout(() => setPhase("hold"), 0);
    }
    return () => window.clearTimeout(timer);
  }, [phase, chars, index, phrases]);

  return (
    <h3 className={styles.headline}>
      {phrases.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && " "}
          {i === index ? (
            <span className={styles.headlineActive} data-phase={phase}>
              <span className={styles.headlineTyped}>{p.slice(0, chars)}</span>
              <span className={styles.headlineRest}>{p.slice(chars)}</span>
            </span>
          ) : (
            <span className={styles.headlineHidden}>{p}</span>
          )}
        </Fragment>
      ))}
    </h3>
  );
}
