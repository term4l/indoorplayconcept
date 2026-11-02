import { getImageProps } from "next/image";
import styles from "./Kontakt.module.css";

// Osadzenie Google Maps z oryginalnego widżetu (wizytówka firmy w Stalowej Woli).
const MAP_SRC =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAleje+Jana+Paw%C5%82a+II+13/220A,+37-450+Stalowa+Wola,+Indoor+playground+concept!5e0!6i17";
const MAP_TITLE = "Aleje Jana Pawła II 13/220A, 37-450 Stalowa Wola, Indoor playground concept";

const contactItems: { text: string; href?: string }[] = [
  { text: "📍 Aleje Jana Pawła II 13/220A" },
  { text: "🧭 37-450 Stalowa Wola" },
  { text: "🏷️ VAT ID: PL8672111678" },
  { text: "📞 +48 663 960 969", href: "tel:+48663960969" },
  { text: "✉️ hello@indoorplayconcept.com", href: "mailto:info@indoorplayconcept.com" },
  { text: "🗓️ Godziny otwarcia: Pon – Pia 8:00 – 16:00", href: "tel:+48663960969" },
];

/** Tło hero: inne zdjęcie na desktopie i na telefonie (jak w Elementorze). */
function HeroPicture() {
  const common = { alt: "", fill: true, priority: true, sizes: "100vw" } as const;
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "https://indoorplayconcept.com/wp-content/uploads/2025/12/Kontakt.webp" });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "https://indoorplayconcept.com/wp-content/uploads/2025/12/N-639.jpg" });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img {...rest} alt="" className={styles.heroImage} />
    </picture>
  );
}

export function KontaktView() {
  return (
    <>
      <section className={styles.hero}>
        <HeroPicture />
        <h1 className={styles.h1}>KONTAKT</h1>
        <h2 className={styles.heroTitle}>Porozmawiajmy</h2>
        <p className={styles.lead}>Wspólnie rozwiążmy Twoje problemy — konkretnie i bez zbędnych formalności.</p>
      </section>

      <div className={`${styles.container} ${styles.row}`}>
        <section className={`${styles.card} ${styles.direct}`}>
          <h2 className={styles.cardTitle}>Kontakt bezpośredni</h2>
          <ul className={styles.list}>
            {contactItems.map(({ text, href }) => (
              <li key={text}>{href ? <a href={href}>{text}</a> : text}</li>
            ))}
          </ul>
        </section>
        <div className={`${styles.card} ${styles.mapCard}`}>
          <iframe className={styles.map} src={MAP_SRC} title={MAP_TITLE} aria-label={MAP_TITLE} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

    </>
  );
}
