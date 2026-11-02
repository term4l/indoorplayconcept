import Image from "next/image";
import type { ReactNode } from "react";
import { Prose } from "@/components/ui";
import styles from "./LegalPage.module.css";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  /** Mały, wersalikowy nagłówek – w oryginale to on jest <h1>. */
  title: string;
  /** Duży podtytuł hero (w oryginale <h2>). */
  subtitle: ReactNode;
  lead: ReactNode;
  /** Zdjęcie tła hero (z indoorplayconcept.com). */
  image: string;
  sections: LegalSection[];
};

/** Wspólny układ stron prawnych: hero ze zdjęciem + numerowane sekcje w ramkach. */
export function LegalPage({ title, subtitle, lead, image, sections }: LegalPageProps) {
  return (
    <>
      <section className={styles.hero}>
        <Image src={image} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.lead}>
          <p>{lead}</p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.box}>
              <Prose className={styles.prose}>{section.body}</Prose>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
