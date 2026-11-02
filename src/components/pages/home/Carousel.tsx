"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Carousel.module.css";

type Props = {
  /** Etykieta regionu karuzeli (aria-label). */
  label: string;
  /**
   * Od jakiej szerokości elementy zamieniają się w karuzelę:
   * "mobile" – ≤767px, "tablet" – ≤1024px. Powyżej układ wyznacza `className` (siatka/kolumna).
   */
  below: "mobile" | "tablet";
  /** Strzałki po bokach karty ("inside") albo poza nią ("outside"). */
  arrows?: "inside" | "outside";
  /** Klasa toru – układ na desktopie (np. grid 3 kolumny). */
  className?: string;
  children: ReactNode;
};

/**
 * Karuzela zastępująca Swipera z Elementora (n-carousel).
 * Każdy slajd jest w HTML tylko raz (bez klonów pętli); na desktopie slajdy są zwykłymi elementami siatki,
 * a na węższych ekranach tor przewija się poziomo (scroll-snap), ze strzałkami i kropkami.
 */
export function Carousel({ label, below, arrows = "inside", className, children }: Props) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slideEls = useCallback(() => Array.from(trackRef.current?.children ?? []) as HTMLElement[], []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const els = slideEls();
      if (els.length < 2) return;
      const step = els[1].offsetLeft - els[0].offsetLeft;
      if (step <= 0) return;
      setActive(Math.min(els.length - 1, Math.max(0, Math.round(track.scrollLeft / step))));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [slideEls]);

  function goTo(index: number) {
    const track = trackRef.current;
    const els = slideEls();
    if (!track || !els.length) return;
    // Pętla jak w oryginale: za ostatnim slajdem wracamy do pierwszego.
    const i = (index + els.length) % els.length;
    track.scrollTo({ left: els[i].offsetLeft - els[0].offsetLeft, behavior: "smooth" });
    setActive(i);
  }

  return (
    <div className={styles.root} data-below={below} data-arrows={arrows} role="region" aria-roledescription="carousel" aria-label={label}>
      <div ref={trackRef} className={[styles.track, className].filter(Boolean).join(" ")}>
        {slides.map((slide, i) => (
          <div key={i} className={styles.slide} role="group" aria-roledescription="slide" aria-label={`${i + 1} z ${slides.length}`}>
            {slide}
          </div>
        ))}
      </div>

      <button type="button" className={`${styles.arrow} ${styles.prev}`} aria-label="Poprzedni slajd" onClick={() => goTo(active - 1)}>
        <svg viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
        </svg>
      </button>
      <button type="button" className={`${styles.arrow} ${styles.next}`} aria-label="Następny slajd" onClick={() => goTo(active + 1)}>
        <svg viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
        </svg>
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dot}
            aria-label={`Przejdź do slajdu ${i + 1}`}
            aria-current={i === active || undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
