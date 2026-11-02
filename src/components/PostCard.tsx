import Image from "next/image";
import { postHref, type Post } from "@/data/magazine";
import styles from "./Magazine.module.css";

export function PostCard({ post }: { post: Post }) {
  const href = postHref(post);

  return (
    <article className={styles.card} role="listitem">
      <a href={href} tabIndex={-1} className={styles.thumb}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </a>
      <div className={styles.badge}>{post.category}</div>
      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>
          <a href={href}>{post.title}</a>
        </h3>
        <div className={styles.excerpt}>
          <p>{post.excerpt}</p>
        </div>
        <a href={href} className={styles.readMore} aria-label={`Czytaj dalej: ${post.title}`} tabIndex={-1}>
          Czytaj dalej »
        </a>
      </div>
    </article>
  );
}
