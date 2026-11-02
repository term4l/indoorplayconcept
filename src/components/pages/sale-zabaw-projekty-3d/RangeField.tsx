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

/** Format wartości w polach "od/do" (nf() z ipc.js). */
const nf = (x: number) => String(Math.round(x * 100) / 100);

/** Podwójny suwak zakresu z polami "od / do" (port klasy Slider z ipc.js). */
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

  function syncFromInputs(minStr: string, maxStr: string) {
    const parse = (s: string, fallback: number) => (s === "" ? fallback : parseFloat(s.replace(",", ".")));
    let na = parse(minStr, min);
    let nb = parse(maxStr, max);
    if (Number.isNaN(na)) na = min;
    if (Number.isNaN(nb)) nb = max;
    na = clamp(snapToStep(clamp(na, min, max), step), min, max);
    nb = clamp(snapToStep(clamp(nb, min, max), step), min, max);
    if (na > nb) [na, nb] = [nb, na];
    onChange([na, nb]);
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
      <div className={styles.inputs}>
        <label className={styles.inp}>
          <span>od</span>
          <input
            type="number"
            step={step}
            inputMode="decimal"
            value={inMin}
            onChange={(e) => syncFromInputs(e.target.value, inMax)}
          />
          <span>{unit}</span>
        </label>
        <label className={styles.inp}>
          <span>do</span>
          <input
            type="number"
            step={step}
            inputMode="decimal"
            value={inMax}
            onChange={(e) => syncFromInputs(inMin, e.target.value)}
          />
          <span>{unit}</span>
        </label>
      </div>
    </div>
  );
}
