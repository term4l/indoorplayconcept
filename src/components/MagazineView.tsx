import { magazinePage, pagePath, postsForPage, totalPages } from "@/data/magazine";
import { pageJsonLd } from "@/lib/seo";
import { Hero } from "./Hero";
import { IntroText } from "./IntroText";
import { PostCard } from "./PostCard";
import { Pagination } from "./Pagination";
import { JsonLd } from "./JsonLd";
import { AppLink } from "./AppLink";
import styles from "./Magazine.module.css";

export function MagazineView({ page }: { page: number }) {
  const total = totalPages();
  const { hero, sectionHeading, intro, contactCta } = magazinePage;

  return (
    <>
      <JsonLd data={pageJsonLd("play-magazine", { path: pagePath(page) })} />
      {/* React 19 przenosi te <link> do <head>. */}
      {page > 1 && <link rel="prev" href={pagePath(page - 1)} />}
      {page < total && <link rel="next" href={pagePath(page + 1)} />}

      <Hero {...hero} />

      <div className={styles.container}>
        <h2 className={styles.h2}>{sectionHeading}</h2>
        {page === 1 && <IntroText paragraphs={intro} />}

        <div className={styles.grid} role="list">
          {postsForPage(page).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination current={page} total={total} />

        <div className={styles.contactCta}>
          <AppLink href={contactCta.href} className={styles.contactBtn}>
            {contactCta.label}
          </AppLink>
        </div>
      </div>
    </>
  );
}
