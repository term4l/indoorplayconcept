import Image from "next/image";
import styles from "./Magazine.module.css";

type Props = { kicker: string; heading: string; lead: string; image: string };

export function Hero({ kicker, heading, lead, image }: Props) {
  return (
    <section className={styles.hero}>
      <Image src={image} alt="" fill priority sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.h1}>{heading}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </section>
  );
}
