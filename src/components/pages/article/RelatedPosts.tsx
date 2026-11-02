import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { postHref, type Post } from "@/data/magazine";
import styles from "./ArticleLayout.module.css";

export const relatedHeadingId = "wiecej-artykulow";
export const relatedPostId = (p: Post) => `wpis-${p.slug}`;

/** Sekcja "Więcej artykułów" – 4 najnowsze wpisy poza bieżącym (jak widget Posts w Elementorze). */
export function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className={styles.related} aria-labelledby={relatedHeadingId}>
      <h2 id={relatedHeadingId} className={styles.relatedHeading}>
        Więcej artykułów
      </h2>
      <div className={styles.relatedGrid} role="list">
        {posts.map((p) => {
          const href = postHref(p);
          return (
            <article key={p.slug} className={styles.post} role="listitem">
              <AppLink href={href} className={styles.postThumb} tabIndex={-1} aria-hidden="true">
                <Image src={p.image.src} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" />
              </AppLink>
              <div className={styles.postText}>
                <h3 id={relatedPostId(p)} className={styles.postTitle}>
                  <AppLink href={href}>{p.title}</AppLink>
                </h3>
                <div className={styles.postExcerpt}>
                  <p>{p.excerpt}</p>
                </div>
                <AppLink href={href} className={styles.readMore} aria-label={`Read more about ${p.title}`}>
                  Czytaj więcej &gt;&gt;
                </AppLink>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
