import Link from "next/link";
import { pagePath } from "@/data/magazine";
import styles from "./Magazine.module.css";

type Props = { current: number; total: number; /** Ścieżka strony n (domyślnie Play Magazine). */ hrefFor?: (n: number) => string };

export function Pagination({ current, total, hrefFor = pagePath }: Props) {
  if (total <= 1) return null;

  return (
    <nav aria-label="Paginacja" className={styles.pagination}>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) =>
        n === current ? (
          <span key={n} aria-current="page" className={styles.pageCurrent}>
            <span className="sr-only">Strona </span>
            {n}
          </span>
        ) : (
          <Link key={n} href={hrefFor(n)} className={styles.pageLink}>
            <span className="sr-only">Strona </span>
            {n}
          </Link>
        ),
      )}
    </nav>
  );
}
