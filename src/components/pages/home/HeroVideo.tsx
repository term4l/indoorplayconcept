"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";

/** Wideo w tle hero – jak w Elementorze tylko od tabletu w górę (na telefonie zostaje samo zdjęcie, bez pobierania pliku). */
export function HeroVideo({ src }: { src: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;
  return <video className={styles.heroVideo} src={src} autoPlay muted loop playsInline aria-hidden="true" />;
}
