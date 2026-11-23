"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";

/**
 * Wideo w tle hero – jak w Elementorze tylko od tabletu w górę (na telefonie zostaje samo zdjęcie, bez pobierania pliku).
 * Oryginał ma „odtwórz raz” (background_play_once): po zakończeniu wideo znika i zostaje zdjęcie z tła.
 */
export function HeroVideo({ src }: { src: string }) {
  const [enabled, setEnabled] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled || ended) return null;
  return <video className={styles.heroVideo} src={src} autoPlay muted playsInline aria-hidden="true" onEnded={() => setEnded(true)} />;
}
