import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { Icon } from "@/components/Icons";
import { ProjectsCatalog } from "@/components/pages/sale-zabaw-projekty-3d/ProjectsCatalog";
import { postHref, posts, type Post } from "@/data/magazine";
import { similarProjects } from "@/data/content/projects/similar";
import type { Paragraph, ProjectPageData } from "@/data/content/projects/types";
import { FaqIcon } from "./FaqIcon";
import { ProjectGallery } from "./ProjectGallery";
import { RichText } from "./RichText";
import styles from "./Project.module.css";

// Spis treści jest identyczny na wszystkich stronach projektów (kotwica "#Zalety" w oryginale nie ma celu).
const TOC = [
  { href: "#opis", label: "Opis Realizacji" },
  { href: "#galeria", label: "Galeria Zdjęć" },
  { href: "#dane", label: "Dane Techniczne" },
  { href: "#Zalety", label: "Zalety" },
  { href: "#artykuly", label: "Artykuły" },
  { href: "#podobne", label: "Podobne Projekty" },
];

const ARTICLE_EXCERPT = "Praktyczny poradnik dla inwestorów i operatorów rodzinnych centrów rozrywki.";

/** Nagłówek sekcji: h3 (nadtytuł) + h2 + opcjonalny wstęp – jak w oryginale. */
function SectionHead({ eyebrow, heading, intro, align = "center" }: { eyebrow: string; heading: string; intro?: Paragraph[]; align?: "center" | "start" }) {
  return (
    <div className={styles.sectionHead} data-align={align}>
      <h3 className={styles.eyebrow}>{eyebrow}</h3>
      <h2 className={styles.sectionTitle}>{heading}</h2>
      {intro && intro.length > 0 && (
        <div className={styles.sectionIntro}>
          <RichText paragraphs={intro} />
        </div>
      )}
    </div>
  );
}

function ArticleCard({ post }: { post: Post }) {
  const href = postHref(post);
  return (
    <article className={styles.post} role="listitem">
      <AppLink href={href} className={styles.postThumb} tabIndex={-1}>
        <Image src={post.image.src} alt="" width={post.image.width} height={post.image.height} sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 360px" />
      </AppLink>
      <div className={styles.postText}>
        <h3 className={styles.postTitle}>
          <AppLink href={href}>{post.title}</AppLink>
        </h3>
        <div className={styles.postExcerpt}>
          <p>{ARTICLE_EXCERPT}</p>
        </div>
        <AppLink href={href} className={styles.postMore} aria-label={`Read more about ${post.title}`}>
          WIĘCEJ »
        </AppLink>
      </div>
    </article>
  );
}

export function ProjectLayout({ data }: { data: ProjectPageData }) {
  const { description: desc, gallery, specs, faq, articles, similar } = data;
  const articlePosts = articles.slugs.map((slug) => posts.find((p) => p.slug === slug)).filter((p): p is Post => Boolean(p));

  return (
    <div className={styles.page}>
      {/* Hero: wizualizacja w tle, nadtytuł h2 + h1 */}
      <section className={styles.hero}>
        <Image src={data.heroImage} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroInner}>
          <h2 className={styles.heroKicker}>{data.kicker}</h2>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <div className={styles.heroIntro}>
            <RichText paragraphs={data.intro} />
          </div>
        </div>
      </section>

      {/* Opis + spis treści */}
      <div id="opis" className={styles.opis}>
        <nav className={styles.toc} aria-labelledby="spis-tresci">
          <h3 id="spis-tresci" className={styles.tocTitle}>
            Spis treści
          </h3>
          <ul className={styles.tocList}>
            {TOC.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.descCard}>
          <div className={styles.descHead}>
            <div>
              <h2 className={styles.descTitle}>{desc.heading}</h2>
              <h3 className={styles.descCode}>{desc.codeText}</h3>
            </div>
            <div className={styles.priceBox}>
              <h3 className={styles.priceLabel}>Cena zestawu</h3>
              <h2 className={styles.priceValue}>{desc.price}</h2>
              <h3 className={styles.priceNote}>Cena bazowa. Montaż i adaptacje po audycie.</h3>
            </div>
          </div>

          {desc.sections.map((s) => (
            <div key={s.heading} className={styles.descSection}>
              <h3 className={styles.descSectionTitle}>{s.heading}</h3>
              <RichText paragraphs={s.body} />
            </div>
          ))}

          <AppLink href="/pl/kontakt/" className={styles.ctaButton}>
            Zapytaj się o szczegóły
            <Icon name="arrowRight" className={styles.ctaIcon} />
          </AppLink>
        </div>
      </div>

      {/* Galeria */}
      <section id="galeria" className={styles.section}>
        <SectionHead eyebrow={gallery.eyebrow} heading={gallery.heading} intro={gallery.intro} />
        <ProjectGallery images={gallery.images} />
      </section>

      {/* Dane techniczne + FAQ */}
      <section id="dane" className={styles.section}>
        <SectionHead eyebrow={specs.eyebrow} heading={specs.heading} intro={specs.body} />

        <div className={styles.faq}>
          <div className={styles.sectionHead} data-align="center">
            <h3 className={styles.eyebrow}>{faq.eyebrow}</h3>
            <h2 className={styles.sectionTitle}>{faq.heading}</h2>
          </div>
          <div className={styles.faqGrid}>
            {faq.items.map((item) => (
              <div key={item.question} className={styles.faqBox}>
                <FaqIcon name={item.icon} className={styles.faqIcon} />
                <div>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artykuły */}
      <section id="artykuly" className={styles.section}>
        <SectionHead eyebrow={articles.eyebrow} heading={articles.heading} intro={articles.intro} align="start" />
        <div className={styles.posts} role="list">
          {articlePosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Podobne projekty – slider wtyczki IPC (karta → podgląd → formularz zapytania) */}
      <section id="podobne" className={styles.section} data-last>
        <SectionHead eyebrow={similar.eyebrow} heading={similar.heading} intro={similar.intro} />
        <ProjectsCatalog projects={similarProjects} variant="slider" />
      </section>
    </div>
  );
}
