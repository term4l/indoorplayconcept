"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import styles from "./Projects.module.css";

export type Range = [number, number];

type Props = {
  label: string;
  min: number;
  max: number;
  step?: number;
  unit: string;
  value: Range;
  onChange: (v: Range) => void;
};

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

/** Przyciąganie do kroku z korektą błędów zmiennoprzecinkowych (jak snapToStep w ipc.js). */
export function snapToStep(v: number, step: number): number {
  if (!step || step <= 0) return v;
  return parseFloat((Math.round(v / step) * step).toFixed(10));
}

/** Format wartości "od/do" (nf() z ipc.js). */
const nf = (x: number) => String(Math.round(x * 100) / 100);

/**
 * Podwójny suwak zakresu (port klasy Slider z ipc.js). Wartości „od / do” są tylko do odczytu –
 * klient chce ustawiania wymiarów wyłącznie suwakiem (uwagi z 24.11.2026); w oryginale były to pola do wpisania.
 */
export function RangeField({ label, min, max, step = 0.1, unit, value, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [a, b] = value;
  // Jak w oryginale: pola "od/do" zawsze pokazują znormalizowaną wartość suwaka.
  const inMin = nf(a);
  const inMax = nf(b);

  const range = max - min || 1;
  const pa = ((a - min) / range) * 100;
  const pb = ((b - min) / range) * 100;

  function valFrom(clientX: number) {
    const r = trackRef.current?.getBoundingClientRect();
    if (!r) return min;
    const t = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    return min + t * (max - min);
  }

  function start(which: "a" | "b" | null, e: ReactPointerEvent) {
    e.preventDefault();
    e.stopPropagation();
    // Aktualne wartości trzymamy lokalnie, bo props zmienią się dopiero po renderze.
    let curA = a;
    let curB = b;
    const move = (clientX: number) => {
      const v = clamp(snapToStep(valFrom(clientX), step), min, max);
      let target = which;
      if (!target) target = Math.abs(v - curA) <= Math.abs(v - curB) ? "a" : "b";
      if (target === "a") curA = Math.min(v, curB);
      else curB = Math.max(v, curA);
      onChange([curA, curB]);
    };
    const onMove = (ev: PointerEvent) => move(ev.clientX);
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    move(e.clientX);
  }

  return (
    <div className={styles.field}>
      <div className={styles.fieldLabel}>
        {label}
        <span className={styles.ext}>
          <span>{min}</span>–<span>{max}</span> <em>{unit}</em>
        </span>
      </div>
      <div className={styles.slider} role="group" aria-label="Zakres" onPointerDown={(e) => start(null, e)}>
        <div ref={trackRef} className={styles.track} />
        <div className={styles.highlight} style={{ left: `${pa}%`, right: `${100 - pb}%` }} />
        <button
          type="button"
          className={styles.handle}
          aria-label="Lewy uchwyt"
          style={{ left: `${pa}%` }}
          onPointerDown={(e) => start("a", e)}
        />
        <button
          type="button"
          className={styles.handle}
          aria-label="Prawy uchwyt"
          style={{ left: `${pb}%` }}
          onPointerDown={(e) => start("b", e)}
        />
      </div>
      <div className={styles.inputs} aria-live="polite">
        <span className={styles.inp}>
          <span>od</span>
          <output className={styles.inpValue}>{inMin}</output>
          <span>{unit}</span>
        </span>
        <span className={styles.inp}>
          <span>do</span>
          <output className={styles.inpValue}>{inMax}</output>
          <span>{unit}</span>
        </span>
      </div>
    </div>
  );
}
