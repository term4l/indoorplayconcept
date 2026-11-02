import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nie znaleziono strony | IndoorPlayConcept",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div style={{ padding: "120px 16px", textAlign: "center" }}>
      <h1 style={{ color: "var(--c-text)" }}>Nie znaleziono strony</h1>
      <p>
        <Link href="/pl/play-magazine/" style={{ textDecoration: "underline" }}>
          Wróć do Play Magazine
        </Link>
      </p>
    </div>
  );
}
