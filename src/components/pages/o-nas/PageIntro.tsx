import Image from "next/image";
import styles from "./PageIntro.module.css";

type Props = {
  kicker: string;
  title: string;
  lead: string;
  /** Opcjonalne zdjęcie w tle (z ciemną nakładką, jak w Elementorze). */
  image?: string;
};

/**
 * Niski nagłówek strony (min. 20vh) używany na /o-nas/, /media/ i /dostawcy/ –
 * w oryginale ten sam kontener Elementora: nadtytuł, <h1> i lead na połowę szerokości.
 */
export function PageIntro({ kicker, title, lead, image }: Props) {
  return (
    <section className={styles.intro} data-has-image={Boolean(image)}>
      {image && <Image src={image} alt="" fill priority sizes="100vw" className={styles.bg} />}
      <div className={styles.inner}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </section>
  );
}
