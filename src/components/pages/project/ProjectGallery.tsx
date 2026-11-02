"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import type { GalleryImage } from "@/data/content/projects/types";
import styles from "./Project.module.css";

/**
 * Galeria wizualizacji z lightboxem (zamiennik lightboxa Elementora).
 * Miniatura jest zwykłym linkiem do pełnego pliku – bez JS działa jak w oryginale.
 */
export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const count = images.length;
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + count) % count)), [count]);

  useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  function open(e: MouseEvent<HTMLAnchorElement>, i: number) {
    // Ctrl/⌘-klik otwiera plik w nowej karcie jak zwykły link.
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    setIndex(i);
  }

  const current = index === null ? null : images[index];

  return (
    <>
      <div className={styles.gallery}>
        {images.map((img, i) => (
          <figure key={img.full} className={styles.galleryItem}>
            <a href={img.full} onClick={(e) => open(e, i)} aria-label={`Powiększ: ${img.alt}`}>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 767px) 100vw, 1040px" />
            </a>
          </figure>
        ))}
      </div>

      {current && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={current.alt}>
          <div className={styles.lightboxOverlay} onClick={close} />
          <button type="button" className={styles.lightboxClose} aria-label="Zamknij" onClick={close} autoFocus>
            ×
          </button>
          {count > 1 && (
            <>
              <button type="button" className={styles.lightboxPrev} aria-label="Poprzednie zdjęcie" onClick={() => step(-1)}>
                ‹
              </button>
              <button type="button" className={styles.lightboxNext} aria-label="Następne zdjęcie" onClick={() => step(1)}>
                ›
              </button>
            </>
          )}
          <div className={styles.lightboxMedia}>
            <Image src={current.full} alt={current.alt} fill sizes="100vw" />
          </div>
        </div>
      )}
    </>
  );
}
