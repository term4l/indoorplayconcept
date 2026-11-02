import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { APPLY_HREF, careerHero, jobOffers, recruitmentSteps, whyUs, type CareerTile, type JobOffer } from "@/data/content/kariera";
import styles from "./Kariera.module.css";

/** Ikona Font Awesome „dot-circle” używana w listach Elementora. */
function DotCircle() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512" className={styles.dot}>
      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" />
    </svg>
  );
}

function Tiles({ items }: { items: CareerTile[] }) {
  return (
    <div className={styles.tiles}>
      {items.map((tile) => (
        <div key={tile.title} className={styles.tile}>
          <h3 className={styles.tileTitle}>{tile.title}</h3>
          <p className={styles.tileText}>{tile.text}</p>
        </div>
      ))}
    </div>
  );
}

function Offer({ offer }: { offer: JobOffer }) {
  return (
    <article className={styles.offer}>
      <div className={styles.offerHead}>
        <div>
          <h3 className={styles.tileTitle}>{offer.title}</h3>
          <p className={styles.offerType}>{offer.type}</p>
        </div>
        <AppLink href={APPLY_HREF} className={styles.apply}>
          Aplikuj teraz
        </AppLink>
      </div>
      <div className={styles.columns}>
        {offer.columns.map((column) => (
          <div key={column.title} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.list}>
              {column.items.map((item) => (
                <li key={item}>
                  <DotCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.note}>{offer.note}</p>
    </article>
  );
}

export function KarieraView() {
  return (
    <>
      <section className={styles.hero}>
        <Image src={careerHero.image} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        <p className={styles.kicker}>{careerHero.kicker}</p>
        <h1 className={styles.h1}>{careerHero.title}</h1>
        <div className={styles.lead}>
          <p>{careerHero.lead}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>DLACZEGO WARTO</h2>
        <Tiles items={whyUs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Jak wygląda rekrutacja</h2>
        <Tiles items={recruitmentSteps} />
      </section>

      <section className={`${styles.section} ${styles.offers}`}>
        <h2 className={styles.h2}>Aktualne oferty</h2>
        <div className={styles.offerList}>
          {jobOffers.map((offer) => (
            <Offer key={offer.title} offer={offer} />
          ))}
        </div>
      </section>
    </>
  );
}
