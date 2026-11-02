import Image from "next/image";
import type { ReactNode } from "react";
import { Form } from "@/components/forms/Form";
import { Checkbox, TextArea, TextField } from "@/components/forms/Fields";
import {
  downloads,
  factSheet,
  heroImage,
  highlights,
  historyParagraphs,
  milestones,
  pressKitUrl,
  spokespeople,
  type HighlightIcon,
} from "@/data/content/media";
import { PageIntro } from "../o-nas/PageIntro";
import styles from "./Media.module.css";

/* Ikony z widżetów icon-box (Iconify / Font Awesome). */
const highlightIcons: Record<HighlightIcon, { viewBox: string; d: string }> = {
  shield: {
    viewBox: "0 0 24 24",
    d: "M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z",
  },
  images: {
    viewBox: "0 0 256 256",
    d: "M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96Zm32-32h-92l64-64l28 28v36Zm-88-64a24 24 0 1 0-24-24a24 24 0 0 0 24 24Zm0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8Z",
  },
  file: {
    viewBox: "0 0 384 512",
    d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z",
  },
};

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12" />
    </svg>
  );
}

function Box({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[styles.box, className].filter(Boolean).join(" ")}>{children}</div>;
}

export function MediaView() {
  return (
    <>
      <PageIntro
        kicker="DLA MEDIÓW"
        title="Media / Press Kit"
        lead="Historia, logotypy, zdjęcia i kontakt. Wszystko, czego potrzebujesz do publikacji o Indoor Play Concept."
        image={heroImage}
      />

      {/* Historia */}
      <section className={`${styles.section} ${styles.history}`}>
        <h2 className={styles.h2}>Historia Indoor Play Concept</h2>
        <div className={styles.text}>
          {historyParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Krótki opis */}
      <section className={styles.section}>
        <h2 className={`${styles.h2} ${styles.h2Sm}`}>Krótki opis do artykułów</h2>
        <div className={styles.text}>
          <p>
            <strong>Indoor Play Concept</strong>&nbsp;to europejski producent nowoczesnych stref&nbsp;<em>soft play</em>.
            Projektujemy i produkujemy konstrukcje dopasowane do potrzeb inwestora, dbając o bezpieczeństwo, trwałość i
            maksymalny efekt wizualny. Nasze realizacje spełniają wymagania norm<strong>&nbsp;EN 1176/1177&nbsp;</strong>i
            są projektowane z myślą o przeznaczeniu dla centrów rozrywki
          </p>
          <p>
            Zapewniamy pełny proces – od audytu i koncepcji 3D z kosztorysem, przez produkcję elementów i montaż, aż po
            serwis oraz modernizacje istniejących obiektów. Wspieramy inwestorów w całej Europie, pomagając tworzyć
            miejsca, które przyciągają gości, budują społeczność i przynoszą realny zwrot z inwestycji.
          </p>
          <p>
            Wyróżnia nas podejście partnerskie, techniczne zaplecze i wieloletnie doświadczenie w realizacjach dla parków
            FEC, galerii handlowych, hoteli, kawiarni rodzinnych oraz przestrzeni edukacyjnych.
          </p>
        </div>
        <div className={`${styles.grid} ${styles.cols2}`}>
          {highlights.map(({ icon, text }) => {
            const { viewBox, d } = highlightIcons[icon];
            return (
              <Box key={text} className={styles.highlight}>
                <svg className={styles.highlightIcon} aria-hidden="true" viewBox={viewBox} fill="currentColor">
                  <path d={d} />
                </svg>
                <p>{text}</p>
              </Box>
            );
          })}
        </div>
      </section>

      {/* Fact sheet */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Fact sheet</h2>
        <div className={`${styles.grid} ${styles.cols3} ${styles.gridTight}`}>
          {factSheet.map(({ label, value }) => (
            <Box key={label} className={styles.fact}>
              <h3>{label}</h3>
              <p>{value}</p>
            </Box>
          ))}
        </div>
      </section>

      {/* Logotypy i materiały */}
      <section className={styles.section}>
        <div className={styles.headRow}>
          <h2 className={styles.h2}>Logotypy i materiały</h2>
          <a href={pressKitUrl} className={styles.kitButton}>
            <DownloadIcon className={styles.kitIcon} />
            Pobierz cały perss kit
          </a>
        </div>
        <div className={`${styles.grid} ${styles.cols3} ${styles.gridTight}`}>
          {downloads.map(({ title, href, pdf }) => (
            <Box key={title} className={styles.download}>
              <div>
                <h3>
                  <a href={href} download={pdf ? "pdf" : undefined}>
                    {title}
                  </a>
                </h3>
                <p>Wysokiej jakości pliki do druku i internetu.</p>
              </div>
              <a href={href} download={pdf ? "pdf" : undefined} className={styles.downloadIcon} aria-hidden="true" tabIndex={-1}>
                <DownloadIcon />
              </a>
            </Box>
          ))}
        </div>
      </section>

      {/* Osoby do wypowiedzi */}
      <section className={styles.section}>
        <h2 className={`${styles.h2} ${styles.h2Sm}`}>Osoby do wypowiedzi</h2>
        <div className={`${styles.grid} ${styles.cols2} ${styles.gridTight}`}>
          {spokespeople.map((person) => (
            <Box key={person.name} className={styles.person}>
              <Image
                src={person.image}
                alt={person.alt}
                title={person.alt}
                width={52}
                height={52}
                className={styles.avatar}
              />
              <div>
                <h3>
                  {person.name}
                  <br />
                  {person.role}
                </h3>
                <p>{person.description}</p>
              </div>
            </Box>
          ))}
        </div>
      </section>

      {/* Kamienie milowe */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Kamienie milowe</h2>
        <ol className={`${styles.grid} ${styles.cols4} ${styles.milestones}`}>
          {milestones.map(({ year, text }) => (
            <li key={year} className={`${styles.box} ${styles.milestone}`}>
              <h3>{year}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Zapytanie prasowe */}
      <section className={styles.formSection}>
        <div className={`${styles.box} ${styles.formCard}`}>
          <h2 className={`${styles.h2} ${styles.center}`}>Zapytanie prasowe</h2>
          <p className={styles.formIntro}>Napisz kilka zdań o materiale – wrócimy z odpowiedzią i niezbędnymi informacjami.</p>
          <Form
            formId="media"
            submitLabel="Wyślij Zapytanie"
            successMessage="Dziękujemy! Zapytanie zostało wysłane – odezwiemy się wkrótce."
            className={styles.form}
          >
            <TextField label="Imię i nazwisko" name="name" placeholder="Imię i nazwisko" autoComplete="name" required />
            <TextField label="Redakcja / portal" name="outlet" placeholder="Redakcja / portal" autoComplete="organization" required />
            <TextField label="E-mail" name="email" type="email" placeholder="anna@example.com" autoComplete="email" required />
            <TextField label="Telefon" name="phone" type="tel" placeholder="+48 123 123 123" autoComplete="tel" required />
            <TextArea
              label="Temat materiału / pytania"
              name="message"
              rows={4}
              placeholder="Temat materiału / pytania"
              required
            />
            <Checkbox
              name="consent"
              required
              label="Wyrażam zgodę na kontakt w sprawie zapytania. Dane wykorzystamy wyłącznie do odpowiedzi."
            />
          </Form>
          <p className={styles.formNote}>Dla pilnych tematów prosimy o kontakt telefoniczny:&nbsp;+48 663 960 969</p>
        </div>
      </section>
    </>
  );
}
