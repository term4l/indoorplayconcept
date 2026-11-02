import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { posts } from "@/data/magazine";
import { pages, type PageKey, type PageSeo } from "@/data/pages";
import { RelatedPosts, relatedHeadingId, relatedPostId } from "./RelatedPosts";
import { ShareLinks } from "./ShareLinks";
import { TableOfContents } from "./TableOfContents";
import type { ArticleContent, TocItem } from "./types";
import styles from "./ArticleLayout.module.css";
import bodyStyles from "./ArticleBody.module.css";

const RELATED_COUNT = 4;

const PL: Record<string, string> = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };
const termSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => PL[c])
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** "2026-07-17T10:00:43+00:00" -> { label: "17/07/2026", archive: "/pl/2026/07/17/" } (format WordPressa). */
function publishDate(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split("-");
  return { label: `${d}/${m}/${y}`, archive: `/pl/${y}/${m}/${d}/` };
}

function BackArrow() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512" fill="currentColor">
      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    </svg>
  );
}

type Props = { slug: PageKey; content: ArticleContent };

export function ArticleLayout({ slug, content }: Props) {
  const page: PageSeo = pages[slug];
  const article = page.article;
  if (!article) throw new Error(`Brak metadanych artykułu dla "${slug}"`);

  const title = article.headline;
  const category = article.articleSection[0];
  const published = page.datePublished ? publishDate(page.datePublished) : undefined;
  const related = posts.filter((p) => p.slug !== slug).slice(0, RELATED_COUNT);

  // Spis treści obejmuje nagłówki treści oraz sekcję "Więcej artykułów" (jak w oryginale).
  const toc: TocItem[] = [
    ...content.headings,
    {
      id: relatedHeadingId,
      text: "Więcej artykułów",
      level: 2,
      children: related.map((p) => ({ id: relatedPostId(p), text: p.title, level: 3 })),
    },
  ];

  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        {page.primaryImage && (
          <Image src={page.primaryImage} alt={title} fill priority sizes="100vw" className={styles.heroImage} />
        )}
      </div>

      <div className={styles.columns}>
        <header className={styles.aside}>
          <div className={styles.asideInner}>
            <AppLink href="/pl/play-magazine/" className={styles.back}>
              <BackArrow />
              <span>Wróc do artykułów</span>
            </AppLink>

            <ul className={styles.meta}>
              {published && (
                <li>
                  <a href={published.archive}>
                    <time dateTime={page.datePublished}>{published.label}</time>
                  </a>
                </li>
              )}
              {category && (
                <li>
                  <a href={`/pl/category/${termSlug(category)}/`}>{category}</a>
                </li>
              )}
            </ul>

            <h1 className={styles.title}>{title}</h1>
          </div>
        </header>

        <div className={styles.main}>
          <TableOfContents items={toc} />
          <div className={bodyStyles.body}>{content.body}</div>
        </div>
      </div>

      <div className={styles.shareWrap}>
        <ShareLinks path={page.path} title={title} />
      </div>

      <RelatedPosts posts={related} />
    </article>
  );
}
