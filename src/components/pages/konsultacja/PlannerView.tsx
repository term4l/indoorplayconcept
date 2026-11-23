import Image from "next/image";
import type { ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { Disclosure } from "@/components/Disclosure";
import { LucideIcon, type LucideName } from "@/components/LucideIcon";
import styles from "./Planner.module.css";

/*
 * Podstrona IPC Planner 3D (/pl/konsultacja/) – port pliku Konsultacja.jsx od klienta (24.11.2026).
 * Tailwind → CSS modules, framer-motion (Reveal) pominięte, ikony Lucide z LucideIcon.tsx.
 * Zasoby z kodu klienta: film public/Start.mp4 i zdjęcie hero – jeśli ich nie ma, strona pokazuje zamienniki.
 */

/** WAŻNE: adres domeny konfiguratora 3D – pusty, dopóki konfigurator nie powstanie (przyciski nieaktywne). */
const PLANNER_URL = "";
/** Film promocyjny umieszczony bezpośrednio w public/Start.mp4 (w kodzie klienta). */
const VIDEO_URL = "/Start.mp4";
/** Zdjęcie w tle hero z kodu klienta (plik w public/). */
const HERO_IMAGE_URL = "/Nowoczesne biuro z projektem placu zabaw.png";
/** W kodzie klienta `?view=kontakt` (widok w jego aplikacji); u nas strona kontaktu. */
const CONTACT_URL = "/pl/kontakt/";
/** Tymczasowo playlista z kodu klienta; do zamiany na adres kanału po potwierdzeniu. */
const YOUTUBE_URL = "https://www.youtube.com/playlist?list=PLQHmvIGdJpL4";

const steps: { icon: LucideName; number: string; title: string; text: string }[] = [
  { icon: "ruler", number: "01", title: "Podaj wymiary", text: "Wprowadź długość, szerokość i wysokość swojego lokalu." },
  { icon: "box", number: "02", title: "Ułóż atrakcje", text: "Wybierz elementy sali zabaw, parku trampolin lub toru Ninja." },
  { icon: "wallet", number: "03", title: "Sprawdź cenę", text: "Oglądaj projekt w 2D/3D i kontroluj orientacyjny koszt wyposażenia." },
];

const faq = [
  {
    q: "Czy muszę umieć projektować?",
    a: "Nie. Zacznij od wymiarów pomieszczenia, a następnie dodawaj elementy z katalogu i sprawdzaj układ w 2D oraz 3D.",
  },
  {
    q: "Czy muszę znać budżet?",
    a: "Nie. Możesz rozpocząć projektowanie bez ustalonej kwoty i na bieżąco sprawdzać orientacyjny koszt dobieranego wyposażenia.",
  },
  {
    q: "Czy to pełna cena otwarcia obiektu?",
    a: "Nie. Szacunkowe ceny w Plannerze nie muszą uwzględniać wszystkich kosztów inwestycji, takich jak adaptacja lokalu, transport, montaż czy odbiory.",
  },
  {
    q: "A jeśli potrzebuję pomocy IPC?",
    a: "Możesz zacząć od własnej koncepcji i omówić ją z IPC lub skontaktować się z nami bezpośrednio.",
  },
];

function PlannerCta({ children = "Idź do konfiguratora 3D" }: { children?: ReactNode }) {
  if (PLANNER_URL) {
    return (
      <a href={PLANNER_URL} className={styles.btnPrimary}>
        {children}
        <LucideIcon name="arrow-up-right" size={16} />
      </a>
    );
  }
  return (
    <span className={styles.ctaDisabledWrap}>
      <button type="button" className={styles.btnPrimary} disabled title="Adres konfiguratora zostanie podany">
        {children}
        <LucideIcon name="arrow-up-right" size={16} />
      </button>
      <span className={styles.ctaHint}>Aby aktywować przycisk, uzupełnij adres konfiguratora w PLANNER_URL.</span>
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

type Props = {
  /** Czy public/Start.mp4 istnieje (sprawdzane przy budowaniu). */
  hasVideo: boolean;
  /** Czy zdjęcie hero istnieje w public/. */
  hasHeroImage: boolean;
};

export function PlannerView({ hasVideo, hasHeroImage }: Props) {
  return (
    <div className={styles.page}>
      <section className={styles.hero} data-has-image={hasHeroImage || undefined}>
        {hasHeroImage && <Image src={encodeURI(HERO_IMAGE_URL)} alt="" fill priority sizes="100vw" className={styles.heroImage} />}
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>IPC PLANNER 3D</p>
          <h1 className={styles.heroTitle}>Zaprojektuj własną salę zabaw w 3D</h1>
          <p className={styles.heroLead}>
            Projektowanie sal zabaw online bez oczekiwania na pierwszy projekt. W IPC Planner 3D zaplanujesz także park trampolin lub
            tor Ninja i sprawdzisz orientacyjne ceny wyposażenia.
          </p>
          <div className={styles.heroActions}>
            <PlannerCta />
            <a href="#film" className={styles.btnSecondary}>
              Zobacz, jak to działa <LucideIcon name="play" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Film */}
      <section className={`${styles.section} ${styles.sectionFirst}`}>
        <div id="film" className={`${styles.container} ${styles.filmGrid}`}>
          <div>
            <Eyebrow>ZOBACZ PLANNER W PRAKTYCE</Eyebrow>
            <h2 className={styles.h2}>Jak działa IPC Planner 3D?</h2>
            <p className={styles.textLg}>
              Zobacz, jak działa konfigurator sal zabaw 3D. W filmie pokażemy, jak odwzorować halę, wybrać atrakcje i sprawdzać
              orientacyjne ceny wyposażenia podczas projektowania.
            </p>
            <p className={styles.textSm}>Planner służy do tworzenia wstępnej koncepcji, która przed realizacją wymaga weryfikacji technicznej.</p>
          </div>
          <div className={styles.videoBox}>
            {hasVideo ? (
              <video src={VIDEO_URL} className={styles.video} autoPlay muted loop playsInline preload="metadata" aria-label="Prezentacja IPC Planner 3D">
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            ) : (
              <div className={styles.videoPlaceholder}>
                <LucideIcon name="play" size={40} />
                <span>Film prezentacyjny w przygotowaniu</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trzy kroki */}
      <hr className={styles.rule} />
      <section className={styles.section}>
        <div className={styles.container}>
          <Eyebrow>TO PROSTE</Eyebrow>
          <h2 className={`${styles.h2} ${styles.h2Steps}`}>Projekt sali zabaw 3D w trzech krokach</h2>
          <div className={styles.stepsGrid}>
            {steps.map(({ icon, number, title, text }) => (
              <div key={number} className={styles.stepCard}>
                <div className={styles.stepTop}>
                  <LucideIcon name={icon} size={36} strokeWidth={1.6} className={styles.stepIcon} />
                  <span className={styles.stepNumber}>{number}</span>
                </div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <hr className={styles.rule} />
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div>
            <Eyebrow>PYTANIA INWESTORÓW</Eyebrow>
            <h2 className={styles.h2}>Co warto wiedzieć przed startem?</h2>
            <p className={styles.text}>Nie musisz mieć gotowego projektu ani określonego budżetu. Zacznij od pomysłu, a szczegóły możesz później omówić z IPC.</p>
            <p className={styles.checkLine}>
              <LucideIcon name="circle-check-big" size={20} className={styles.checkIcon} />
              <span>Projektowanie sal zabaw, parków trampolin i torów Ninja — w jednym narzędziu.</span>
            </p>
          </div>
          <div className={styles.faqList}>
            {faq.map((item) => (
              <Disclosure
                key={item.q}
                className={styles.faqItem}
                summaryClassName={styles.faqSummary}
                bodyClassName={styles.faqBody}
                summary={
                  <>
                    <span>{item.q}</span>
                    <LucideIcon name="chevron-down" size={20} className={styles.faqChevron} />
                  </>
                }
              >
                <p>{item.a}</p>
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <hr className={styles.rule} />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ytBox}>
            <div className={styles.ytText}>
              <Eyebrow>KURS NA YOUTUBE</Eyebrow>
              <h2 className={styles.h2Sm}>Naucz się korzystać z IPC Planner 3D</h2>
              <p className={styles.text}>
                Przygotowaliśmy kurs krok po kroku, w którym pokazujemy, jak projektować salę zabaw, rozmieszczać atrakcje, korzystać z
                widoków 2D i 3D oraz sprawdzać orientacyjne ceny wyposażenia. Poznaj możliwości i zalety IPC Planner 3D na naszym YouTube.
              </p>
            </div>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btnSecondary} ${styles.ytBtn}`}>
              <LucideIcon name="play" size={16} />
              Odwiedź nasz YouTube
              <LucideIcon name="arrow-up-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <hr className={styles.rule} />
      <section className={`${styles.section} ${styles.sectionLast}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <LucideIcon name="monitor" size={40} className={styles.ctaIcon} />
            <h2 className={styles.h2}>Masz lokal? Stwórz projekt sali zabaw online.</h2>
            <p className={styles.ctaText}>Otwórz IPC Planner 3D na osobnej domenie, zaprojektuj układ atrakcji i sprawdź orientacyjny koszt wyposażenia.</p>
            <div className={styles.ctaActions}>
              <PlannerCta>Idź do konfiguratora 3D</PlannerCta>
              <AppLink href={CONTACT_URL} className={styles.btnSecondary}>
                Potrzebuję pomocy IPC <LucideIcon name="arrow-right" size={16} />
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
