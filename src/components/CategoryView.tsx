import { POSTS_PER_PAGE, posts } from "@/data/magazine";
import { pages } from "@/data/pages";
import { pageJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Pagination } from "./Pagination";
import { PostCard } from "./PostCard";
import styles from "./Magazine.module.css";

/** Archiwum kategorii „wewnętrzne place zabaw” (WordPress: /pl/category/wewnetrzne-place-zabaw/) – wszystkie wpisy Play Magazine. */
export const CATEGORY_KEY = "category-wewnetrzne-place-zabaw" as const;
export const CATEGORY_NAME = "wewnętrzne place zabaw";

const basePath = pages[CATEGORY_KEY].path;
const categoryPosts = () => posts.filter((p) => p.category === CATEGORY_NAME);

export const categoryPagePath = (page: number) => (page <= 1 ? basePath : `${basePath}page/${page}/`);
export const categoryTotalPages = () => Math.max(1, Math.ceil(categoryPosts().length / POSTS_PER_PAGE));

export function CategoryView({ page }: { page: number }) {
  const total = categoryTotalPages();
  const items = categoryPosts().slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <JsonLd data={pageJsonLd(CATEGORY_KEY, { path: categoryPagePath(page) })} />
      {page > 1 && <link rel="prev" href={categoryPagePath(page - 1)} />}
      {page < total && <link rel="next" href={categoryPagePath(page + 1)} />}

      <div className={styles.container}>
        <h1 className={styles.h2}>Kategoria: {CATEGORY_NAME}</h1>
        <div className={styles.grid} role="list">
          {items.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <Pagination current={page} total={total} hrefFor={categoryPagePath} />
      </div>
    </>
  );
}
