import Link from "next/link";
import { pagePath } from "@/data/magazine";
import styles from "./Magazine.module.css";

export function Pagination({ current, total }: { current: number; total: number }) {
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
          <Link key={n} href={pagePath(n)} className={styles.pageLink}>
            <span className="sr-only">Strona </span>
            {n}
          </Link>
        ),
      )}
    </nav>
  );
}
