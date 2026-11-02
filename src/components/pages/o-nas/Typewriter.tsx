"use client";

import { Dancing_Script } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import styles from "./Typewriter.module.css";

const signatureFont = Dancing_Script({ subsets: ["latin", "latin-ext"], weight: ["400"], display: "swap" });

// Tempo z oryginalnego skryptu: ms na znak i mnożniki pauz po znakach interpunkcyjnych.
const BASE_MS = 42;
const SIGNATURE_FACTOR = 1.2;

function delayFor(ch: string, base: number): number {
  if (ch === " ") return base * 1.4;
  if (",;:".includes(ch)) return base * 7;
  if (".!?".includes(ch)) return base * 12;
  if (ch === "—" || ch === "–") return base * 9;
  return base;
}

type Props = { text: string; signature: string };

/**
 * Efekt "maszyny do pisania" z widżetu HTML Elementora.
 * Pełny tekst jest zawsze w HTML (SSR, czytniki ekranu); animowana kopia leży nad nim i jest aria-hidden.
 * Animacja startuje, gdy akapit wejdzie w widok, i nie uruchamia się przy prefers-reduced-motion.
 */
export function Typewriter({ text, signature }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [typing, setTyping] = useState(false);
  const [bodyCount, setBodyCount] = useState(0);
  const [sigCount, setSigCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let i = 0;
    let phase: "body" | "signature" = "body";
    let nextAt = performance.now();

    const step = (now: number) => {
      const source = phase === "body" ? text : signature;
      const base = phase === "body" ? BASE_MS : Math.round(BASE_MS * SIGNATURE_FACTOR);
      if (i >= source.length) {
        if (phase === "body") {
          phase = "signature";
          i = 0;
        } else {
          setTyping(false);
          return;
        }
      }
      if (now >= nextAt) {
        const ch = (phase === "body" ? text : signature)[i++];
        if (phase === "body") setBodyCount(i);
        else setSigCount(i);
        nextAt = now + delayFor(ch, base);
      }
      raf = requestAnimationFrame(step);
    };

    setTyping(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, signature]);

  const sigClass = `${styles.signature} ${signatureFont.className}`;
  const signatureStarted = bodyCount >= text.length;

  return (
    <div className={styles.wrap}>
      <p ref={ref} className={styles.text} data-typing={typing || undefined}>
        <span className={styles.full}>
          {text}
          <br />
          <span className={sigClass}>{signature}</span>
        </span>
        {typing && (
          <span className={styles.typed} aria-hidden="true">
            {text.slice(0, bodyCount)}
            {signatureStarted && (
              <>
                <br />
                <span className={sigClass}>{signature.slice(0, sigCount)}</span>
              </>
            )}
          </span>
        )}
      </p>
    </div>
  );
}
