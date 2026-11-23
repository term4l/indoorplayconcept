"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/** Czas rozwijania jak w widżecie „nested accordion” Elementora (n_accordion_animation_duration: 400 ms). */
const DURATION_MS = 400;

type Props = {
  className?: string;
  summaryClassName?: string;
  summaryVariant?: string;
  summary: ReactNode;
  bodyClassName?: string;
  children: ReactNode;
};

/**
 * Natywne <details> (treść zawsze w HTML) z płynnym rozwijaniem i zwijaniem wysokości.
 * Bez JS i przy prefers-reduced-motion działa jak zwykłe <details>.
 */
export function Disclosure({ className, summaryClassName, summaryVariant, summary, bodyClassName, children }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  function onClick(e: MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    const body = bodyRef.current;
    if (!details || !body || typeof body.animate !== "function") return;
    e.preventDefault();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = !details.open;
      return;
    }
    animRef.current?.cancel();
    body.style.overflow = "hidden";
    if (!details.open) {
      details.open = true;
      const height = body.scrollHeight;
      animRef.current = body.animate([{ height: "0px", opacity: 0 }, { height: `${height}px`, opacity: 1 }], {
        duration: DURATION_MS,
        easing: "ease",
      });
      animRef.current.onfinish = () => {
        body.style.overflow = "";
        animRef.current = null;
      };
    } else {
      const height = body.getBoundingClientRect().height;
      animRef.current = body.animate([{ height: `${height}px`, opacity: 1 }, { height: "0px", opacity: 0 }], {
        duration: DURATION_MS,
        easing: "ease",
      });
      animRef.current.onfinish = () => {
        details.open = false;
        body.style.overflow = "";
        animRef.current = null;
      };
    }
  }

  return (
    <details ref={detailsRef} className={className}>
      <summary className={summaryClassName} data-variant={summaryVariant} onClick={onClick}>
        {summary}
      </summary>
      <div ref={bodyRef}>
        <div className={bodyClassName}>{children}</div>
      </div>
    </details>
  );
}
