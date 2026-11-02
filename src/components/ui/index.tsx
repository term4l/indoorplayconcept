import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { AppLink } from "../AppLink";
import styles from "./ui.module.css";

/* ---------- PageHero: jedyny <h1> na stronie ---------- */

type PageHeroProps = {
  title: ReactNode;
  kicker?: string;
  lead?: ReactNode;
  /** Zdjęcie w tle (lokalne z /public lub z indoorplayconcept.com). Bez zdjęcia hero jest kompaktowe. */
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function PageHero({ title, kicker, lead, image, align = "left", children }: PageHeroProps) {
  return (
    <section className={styles.hero} data-has-image={Boolean(image)} data-size={image ? "full" : "compact"} data-align={align}>
      {image && <Image src={image} alt="" fill priority sizes="100vw" className={styles.heroImage} />}
      <div className={styles.heroInner}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h1 className={styles.h1}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}

/* ---------- Section ---------- */

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  width?: "narrow" | "default" | "wide";
  className?: string;
  children?: ReactNode;
};

export function Section({ id, eyebrow, title, intro, align = "left", width = "default", className, children }: SectionProps) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(" ")} data-width={width}>
      {(eyebrow || title || intro) && (
        <div className={styles.sectionHead} data-align={align}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {title && <h2 className={styles.h2}>{title}</h2>}
          {intro && <p className={styles.sectionIntro}>{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

/* ---------- Button (link albo <button>) ---------- */

type ButtonProps = {
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
} & ({ href: string; type?: never; disabled?: never } | { href?: never; type?: "button" | "submit"; disabled?: boolean; onClick?: () => void });

export function Button({ variant = "primary", children, className, ...rest }: ButtonProps) {
  const cls = [styles.button, className].filter(Boolean).join(" ");
  if ("href" in rest && rest.href) {
    return (
      <AppLink href={rest.href} className={cls} data-variant={variant}>
        {children}
      </AppLink>
    );
  }
  const { type = "button", disabled, onClick } = rest as { type?: "button" | "submit"; disabled?: boolean; onClick?: () => void };
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls} data-variant={variant}>
      {children}
    </button>
  );
}

/* ---------- Card / Grid ---------- */

export function Card({ title, children, className }: { title?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export function Grid({ cols = 3, children, className }: { cols?: number; children: ReactNode; className?: string }) {
  return (
    <div className={[styles.grid, className].filter(Boolean).join(" ")} style={{ "--cols": cols } as CSSProperties}>
      {children}
    </div>
  );
}

/* ---------- Prose: typografia długich tekstów (polityki, regulamin) ---------- */

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[styles.prose, className].filter(Boolean).join(" ")}>{children}</div>;
}

/* ---------- Accordion: <details>, więc odpowiedzi są w HTML bez JS ---------- */

export type AccordionItem = { question: string; answer: ReactNode };

export function Accordion({ items, headingLevel = 3 }: { items: AccordionItem[]; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details key={item.question} className={styles.accordionItem}>
          <summary>
            <Heading style={{ font: "inherit", margin: 0 }}>{item.question}</Heading>
          </summary>
          <div className={`${styles.accordionBody} ${styles.prose}`}>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
