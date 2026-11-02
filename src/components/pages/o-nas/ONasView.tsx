import Image from "next/image";
import type { ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import {
  bezpieczenstwoParagraphs,
  bezpieczenstwoPoints,
  dlaczegoParagraphs,
  dlaczegoPoints,
  founderQuote,
  founderSignature,
  images,
  kimJestesmyPoints,
  misjaParagraphs,
  ofertaIntro,
  ofertaItems,
  zespolParagraphs,
} from "@/data/content/o-nas";
import { PageIntro } from "./PageIntro";
import { Typewriter } from "./Typewriter";
import styles from "./ONas.module.css";

/* Ikony (Iconify / Lucide) z widżetów icon-box – obrys w kolorze #38bdf8. */
const iconPaths: Record<"puzzle" | "cog" | "users", ReactNode> = {
  puzzle: (
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707a2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303c.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073c-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29c.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  ),
  cog: (
    <>
      <path d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" />
    </>
  ),
  users: (
    <>
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </>
  ),
};

function IconBox({ icon, children }: { icon: keyof typeof iconPaths; children: ReactNode }) {
  return (
    <div className={styles.iconBox}>
      <svg
        className={styles.icon}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#38bdf8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[icon]}
      </svg>
      <p>{children}</p>
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className={styles.points}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const paragraphs = (items: string[]) => items.map((p) => <p key={p.slice(0, 40)}>{p}</p>);

export function ONasView() {
  return (
    <>
      <PageIntro
        kicker="O nas"
        title="Poznaj Indoor Play Concept"
        lead="Tworzymy bezpieczne, innowacyjne i niezawodne strefy zabaw. Dowiedz się więcej o naszej misji, wartościach i zespole."
      />

      {/* Kim jesteśmy */}
      <section className={styles.band}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={styles.aside}>
            <h2 className={styles.h2Sans}>Kim jesteśmy?</h2>
            <span className={styles.spacer} aria-hidden="true" />
            <Points items={kimJestesmyPoints} />
          </div>
          <div className={styles.main}>
            <IconBox icon="puzzle">
              <b>Indoor Play Concept </b>to firma rodzinna, która od początku powstała z prostego przekonania – że każda
              przestrzeń może być wyjątkowa, jeśli podejdzie się do niej z sercem i uważnością. Każdy projekt traktujemy
              indywidualnie, wsłuchując się w wizję inwestora, bo wierzymy, że to właśnie rozmowa i zrozumienie potrzeb są
              kluczem do stworzenia dobrego projektu. Nigdy nie obiecujemy rzeczy niemożliwych. Wolimy mówić uczciwie, nawet
              jeśli to oznacza trudniejszą drogę. Dla nas liczy się dotrzymane słowo, jakość i terminowość – to trzy
              wartości, których nigdy nie poświęcamy.
            </IconBox>
            <IconBox icon="cog">
              Zajmujemy się <b>projektowaniem, produkcją i montażem </b>wewnętrznych, miękkich stref zabaw. Wszystko, co
              tworzymy, powstaje u nas, w Polsce – od pomysłu po gotowy moduł. Nie stosujemy półśrodków i nie sięgamy po
              materiały niewiadomego pochodzenia. Wierzymy, że bezpieczeństwo i solidność nie są dodatkiem, tylko podstawą.
              Pracowaliśmy przy wielu różnych realizacjach – od małych kącików po duże strefy – ale dla nas każda z nich ma
              taką samą wartość. Niezależnie od skali, każdy klient stoi na tej samej linii, bo szacunek do współpracy nie
              zależy od wielkości projektu.
            </IconBox>
            <IconBox icon="users">
              Z biegiem lat nauczyliśmy się, że w tej branży nie da się stanąć w miejscu. Dlatego ciągle się rozwijamy –
              uczymy się, testujemy nowe rozwiązania, dopracowujemy procesy i szukamy jeszcze lepszych sposobów na{" "}
              <b>połączenie bezpieczeństwa, estetyki i funkcjonalności.</b> Naszym mottem jest, by zawsze zostawić po sobie
              dobre wrażenie. Takie, które nie wymaga tłumaczenia, tylko zostawia spokój i satysfakcję z dobrze wykonanej
              pracy. Projekt uważamy za zakończony dopiero wtedy, gdy klient ma w rękach pełną dokumentację, certyfikację i
              pewność, że może na nas polegać. Choć tak naprawdę wiemy, że współpraca nigdy się nie kończy – bo dobre
              relacje zawsze prowadzą do kolejnych wspólnych historii.
            </IconBox>
          </div>
        </div>
      </section>

      {/* Nasza misja */}
      <section className={`${styles.container} ${styles.missionWrap}`}>
        <div className={styles.mission}>
          <h2 className={styles.missionTitle}>Nasza misja</h2>
          <div className={styles.lgText}>{paragraphs(misjaParagraphs)}</div>
        </div>
      </section>

      {/* Dlaczego warto wybrać IPC? */}
      <section className={`${styles.band} ${styles.bandTop}`}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={styles.aside}>
            <h2 className={`${styles.h2Serif} ${styles.h2Why}`}>Dlaczego warto wybrać IPC?</h2>
            <span className={styles.spacer} aria-hidden="true" />
            <Points items={dlaczegoPoints} />
          </div>
          <div className={`${styles.main} ${styles.lgText}`}>{paragraphs(dlaczegoParagraphs)}</div>
        </div>
      </section>

      {/* Co oferujemy */}
      <section className={styles.container}>
        <div className={styles.offer}>
          <h2 className={`${styles.h2Serif} ${styles.ruled}`}>Co oferujemy</h2>
          <p className={styles.offerIntro}>{ofertaIntro}</p>
          <ul className={styles.offerGrid}>
            {ofertaItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bezpieczeństwo i jakość */}
      <section className={`${styles.band} ${styles.bandTop} ${styles.spaced}`}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={styles.aside}>
            <h2 className={`${styles.h2Serif} ${styles.ruled}`}>Bezpieczeństwo i jakość</h2>
            <span className={`${styles.spacer} ${styles.spacerSoft}`} aria-hidden="true" />
            <Points items={bezpieczenstwoPoints} />
          </div>
          <div className={`${styles.main} ${styles.lgText}`}>{paragraphs(bezpieczenstwoParagraphs)}</div>
        </div>
      </section>

      {/* Zespół */}
      <section className={`${styles.band} ${styles.bandTop}`}>
        <div className={`${styles.container} ${styles.team}`}>
          <div className={styles.teamHead}>
            <p className={styles.eyebrow}>ZESPÓŁ</p>
            <h2 className={`${styles.h2Serif} ${styles.teamTitle}`}>Ludzie, którzy tworzą Indoor Play Concept</h2>
          </div>
          <div className={styles.teamText}>{paragraphs(zespolParagraphs)}</div>
          <div className={styles.teamImage}>
            <Image
              src={images.team.src}
              alt={images.team.alt}
              title="Indoor Play Concept Team (1)"
              width={images.team.width}
              height={images.team.height}
              sizes="(max-width: 767px) 100vw, 560px"
              className={styles.rounded}
            />
          </div>
        </div>
      </section>

      {/* Założyciel */}
      <section className={styles.band}>
        <div className={`${styles.container} ${styles.founder}`}>
          <div className={styles.founderImage}>
            <Image
              src={images.founder.src}
              alt={images.founder.alt}
              title="Rafał Nowicki"
              width={images.founder.width}
              height={images.founder.height}
              sizes="(max-width: 767px) 100vw, 400px"
              className={styles.rounded}
            />
          </div>
          <div className={styles.founderBody}>
            <p className={styles.eyebrow}>ZAŁOŻYCIEL</p>
            <h2 className={`${styles.h2Serif} ${styles.ruled}`}>Rafał Nowicki</h2>
            <Typewriter text={founderQuote} signature={founderSignature} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.container} ${styles.cta}`}>
        <h2 className={styles.h2Serif}>Porozmawiajmy o Twoim pomyśle</h2>
        <p>
          Jeśli myślisz o stworzeniu lub modernizacji strefy zabaw — po prostu się odezwij. Chętnie porozmawiamy o
          możliwościach, podpowiemy, od czego zacząć i wspólnie zastanowimy się, co w Twoim obiekcie ma największy sens.
          Bez zobowiązań, za to z pełnym zaangażowaniem i konkretną wiedzą.
        </p>
        <AppLink href="/konsultacja/" className={styles.ctaButton}>
          Umów rozmowę
        </AppLink>
      </section>
    </>
  );
}
