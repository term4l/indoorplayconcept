import Image from "next/image";
import { Button } from "@/components/ui";
import { faqColumns, faqIntro, type FaqEntry } from "@/data/content/faq";
import styles from "./Faq.module.css";

const HERO_IMAGE = "https://indoorplayconcept.com/wp-content/uploads/2025/12/FAQ.webp";

// Ikony plus/minus z Font Awesome – te same, co w akordeonie Elementora.
const PLUS = "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";
const MINUS = "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";

function FaqItem({ question, answer }: FaqEntry) {
  return (
    <details className={styles.item}>
      <summary className={styles.title}>
        <span>{question}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg className={styles.closed} viewBox="0 0 448 512" fill="currentColor">
            <path d={PLUS} />
          </svg>
          <svg className={styles.opened} viewBox="0 0 448 512" fill="currentColor">
            <path d={MINUS} />
          </svg>
        </span>
      </summary>
      <div className={styles.answer}>{answer}</div>
    </details>
  );
}

export function FaqView() {
  return (
    <>
      <section className={styles.hero}>
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        <p className={styles.kicker}>FAQ dla inwestorów</p>
        <h1 className={styles.h1}>Jak zaplanować nową strefę zabaw?</h1>
        <p className={styles.lead}>
          Zebraliśmy odpowiedzi na pytania, które pojawiają się najczęściej przed startem inwestycji — od koncepcji i projektu po odbiory,
          dokumenty i uruchomienie obiektu.
        </p>
      </section>

      <section className={styles.container}>
        <h2 className={styles.h2}>FAQ — pytania, które dostajemy najczęściej</h2>
        <div className={styles.intro}>
          {faqIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.faq}`}>
        <div className={styles.columns}>
          {faqColumns.map((column, i) => (
            <div key={i} className={styles.column}>
              {column.map((item) => (
                <FaqItem key={item.question} {...item} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/pl/kontakt/">Masz inne pytanie? Porozmawiajmy</Button>
        </div>
      </section>
    </>
  );
}
