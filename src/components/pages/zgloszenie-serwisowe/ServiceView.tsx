import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { Icon } from "@/components/Icons";
import { ServiceForm } from "./ServiceForm";
import styles from "./ServiceView.module.css";

const HERO_IMAGE = "https://indoorplayconcept.com/wp-content/uploads/2025/12/Formularz-Serwisowy.webp";

const PLUS = "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";
const MINUS = "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";

export function ServiceView() {
  return (
    <>
      <section className={styles.hero}>
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className={styles.heroImage} />
        {/* Kolejność nagłówków jak w oryginale: h2 (nadtytuł) nad h1. */}
        <h2 className={styles.kicker}>Zgłoszenie Serwisowe</h2>
        <h1 className={styles.h1}>Zgłoś serwis Soft Play</h1>
        <p className={styles.lead}>Wyślij nam informacje i zdjęcia. Na podstawie materiałów przygotujemy wstępną diagnozę, kosztorys i najbliższy termin.</p>
      </section>

      <div className={styles.container}>
        <details className={styles.accordion}>
          <summary className={styles.accordionTitle}>
            <span>Dlaczego Indoor Play Concept w serwisie wewnętrznych placów zabaw?</span>
            <span className={styles.icon} aria-hidden="true">
              <svg className={styles.closed} viewBox="0 0 448 512" fill="currentColor">
                <path d={PLUS} />
              </svg>
              <svg className={styles.opened} viewBox="0 0 448 512" fill="currentColor">
                <path d={MINUS} />
              </svg>
            </span>
          </summary>
          <div className={styles.accordionBody}>
            <p>
              Jesteśmy zespołem specjalistów od&nbsp;<strong>serwisu placów zabaw wewnętrznych</strong>&nbsp;(Soft Play). Łączymy praktykę
              produkcyjną z doświadczeniem montażowym, dlatego diagnozujemy usterki szybko, naprawiamy trwale i dokumentujemy wszystko
              zgodnie z normami&nbsp;<strong>EN 1176 / EN 1177</strong>. Nasz cel jest prosty:&nbsp;
              <strong>bezpieczeństwo, ciągłość działania i minimalne przestoje</strong>&nbsp;Twojego obiektu.
            </p>
            <h3>Co naprawiamy i konserwujemy</h3>
            <ul>
              <li>
                <strong>Wymiana siatek, poszyć, pianek i lin</strong>&nbsp;– dopasowanie kolorów i gramatury, szycie na wymiar.
              </li>
              <li>
                <strong>Naprawa konstrukcji</strong>&nbsp;– łączenia, kotwy, profile, wygłuszenia, uzupełnienia elementów ochronnych.
              </li>
              <li>
                <strong>Serwis atrakcji</strong>&nbsp;– zjeżdżalnie, przeszkody, mosty, tory przeszkód, strefy maluchów.
              </li>
              <li>
                <strong>Przeglądy okresowe</strong>&nbsp;i&nbsp;<strong>audyt bezpieczeństwa</strong>&nbsp;z raportem i listą zaleceń.
              </li>
              <li>
                <strong>Części zamienne</strong>&nbsp;– szybka dostawa, także dla starszych instalacji (<em>cross-brand service</em>).
              </li>
            </ul>
            <h3>Jak pracujemy</h3>
            <p>
              Oferujemy&nbsp;<strong>serwis gwarancyjny i pogwarancyjny</strong>, tryby pilne oraz działania poza godzinami otwarcia. Dla
              klientów B2B przygotowujemy&nbsp;<strong>SLA</strong>&nbsp;z gwarantowanym czasem reakcji, a po wizycie otrzymujesz
              <strong>&nbsp;raport serwisowy</strong>&nbsp;z dokumentacją zdjęciową oraz wyceną ewentualnych części. Przed przyjazdem prosimy o
              zdjęcia/wideo – to&nbsp;<strong>przyspiesza diagnozę i obniża koszt</strong>.
            </p>
            <h3>Dlaczego to się opłaca</h3>
            <p>
              Regularna konserwacja&nbsp;<strong>zmniejsza ryzyko awarii</strong>, poprawia doświadczenie gości i chroni przychód w szczytach
              frekwencji. Jako producent i wykonawca rozumiemy, jak planować&nbsp;<strong>serwis Soft Play</strong>, by zachować spójność
              kolorów, estetykę i bezpieczeństwo – bez zbędnych przestojów.
            </p>
            <h3>Dla kogo</h3>
            <p>
              Wspieramy&nbsp;<strong>sale zabaw, centra handlowe, hotele, parki rozrywki</strong>&nbsp;i operatorów sieciowych. Niezależnie
              od skali – od szybkiej wymiany poszycia po kompleksowy&nbsp;<strong>przegląd EN 1176/1177</strong>&nbsp;– dostarczamy rozwiązanie,
              które realnie&nbsp;<strong>przywraca sprawność i bezpieczeństwo</strong>.
            </p>
          </div>
        </details>

        <div className={styles.buttons}>
          <a href="https://wa.me/48663960969" className={`${styles.button} ${styles.light}`}>
            Zapytaj na WhastApp
          </a>
          <a href="#formularz" className={`${styles.button} ${styles.ghost}`}>
            Przejdź do formularza
          </a>
        </div>
      </div>

      <section id="formularz" className={styles.formSection}>
        <div className={styles.formInner}>
          <h2 className={styles.formTitle}>Formularz zgłoszenia</h2>
          <p className={styles.formIntro}>Wypełnij pola poniżej…</p>
          <ServiceForm />
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>Masz pytania albo wolisz porozmawiać?</h2>
        <div className={`${styles.buttons} ${styles.center}`}>
          <AppLink href="/pl/kontakt/" className={`${styles.button} ${styles.ghost} ${styles.white}`}>
            Kontakt
            <Icon name="arrowRight" className={styles.arrow} />
          </AppLink>
          <AppLink href="/pl/sale-zabaw-projekty-3d/" className={`${styles.button} ${styles.ghost}`}>
            Przeglądaj nasze projekty 3D
            <Icon name="arrowRight" className={styles.arrow} />
          </AppLink>
        </div>
      </section>
    </>
  );
}
