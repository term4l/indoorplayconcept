import Image from "next/image";
import type { ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { Icon } from "@/components/Icons";
import {
  aboutChecks,
  aboutImage,
  aboutStats,
  arrangementImages,
  contactBoxes,
  faq,
  headlinePhrases,
  heroImage,
  heroVideo,
  homeProjects,
  magazinePosts,
  mapEmbed,
  steps,
  testimonials,
  type ArrangementScale,
} from "@/data/content/home";
import { ProjectsCatalog } from "../sale-zabaw-projekty-3d/ProjectsCatalog";
import { Carousel } from "./Carousel";
import { HeroVideo } from "./HeroVideo";
import { RotatingHeadline } from "./RotatingHeadline";
import { CheckCircleSvg, ContactSvg, PlaySvg, ShieldSvg, StepSvg } from "./icons";
import styles from "./Home.module.css";

/* ---------- Wspólne drobiazgi ---------- */

function ArrowLink({ href, variant = "ghost", className, children, newTab }: {
  href: string;
  variant?: "ghost" | "light" | "outline";
  className?: string;
  children: ReactNode;
  newTab?: boolean;
}) {
  return (
    <AppLink
      href={href}
      className={[styles.btn, className].filter(Boolean).join(" ")}
      data-variant={variant}
      {...(newTab && { target: "_blank", rel: "noopener" })}
    >
      <span>{children}</span>
      <Icon name="arrowRight" className={styles.btnIcon} />
    </AppLink>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="start" className={styles.hero}>
      <Image src={heroImage} alt="" fill priority sizes="100vw" className={styles.heroImage} />
      <HeroVideo src={heroVideo} />
      <div className={styles.heroInner}>
        <h1 className={styles.h1}>producent sal zabaw</h1>
        <p className={styles.heroKicker}>Realne koszty • Wspólne decyzje • Osiągalne efekty</p>
        <h2 className={styles.heroTitle}>
          Producent Sal Zabaw
          <br /> Indywidualne rozwiązania <br />
          dla Twojego biznesu
        </h2>
        <p className={styles.heroSub}>Od kawiarni po duże parki FEC</p>
        <p className={styles.heroLead}>
          W naszej bazie znajdziesz projekty wewnętrznych sal zabaw typu <strong>soft play</strong> w różnych skalach. Jako{" "}
          <strong>producent</strong> przygotujemy także koncepcję <strong>sal zabaw</strong> dopasowaną do Twojego budżetu i przestrzeni, a
          wszystkie koszty przedstawimy transparentnie, wariant po wariancie.
        </p>
        <a href="#projekty" className={`${styles.btn} ${styles.heroBtn}`} data-variant="ghost">
          <span>Poznaj przykładowe projekty i ich koszt realizacji</span>
          <PlaySvg className={styles.btnIcon} />
        </a>
      </div>
    </section>
  );
}

/* ---------- Projekty (katalog w trybie slider) ---------- */

function Projects() {
  return (
    <section id="projekty" className={styles.projects}>
      <h3 className={styles.eyebrow}>IPC producent sal zabaw - nasze projekty</h3>
      <div className={styles.headRow}>
        <h2 className={styles.projectsTitle}>Produkty i moduły - łączymy je w spójny system wewnętrznych sal zabaw</h2>
        <p className={styles.projectsAside}>Zdecyduj czego potrzebujesz</p>
      </div>
      <ProjectsCatalog projects={homeProjects} variant="slider" />
      <div className={styles.center}>
        <ArrowLink href="/pl/sale-zabaw-projekty-3d/" variant="light">
          Odkryj projekty, które stworzyli nasi projektanci
        </ArrowLink>
      </div>
    </section>
  );
}

/* ---------- Przykładowe aranżacje ---------- */

type Arrangement = { scale: ArrangementScale; eyebrow: string; title: string; body: ReactNode; alt: string };

const arrangements: Arrangement[] = [
  {
    scale: "s",
    eyebrow: "małe sale zabaw",
    title: "Małe przestrzenie (30–100 m²)",
    alt: "Koncepcja 3D małej sali zabaw w lokalu gastronomicznym",
    body: (
      <>
        <p>
          Kompaktowa strefa sal zabaw to dyskretny dodatek, który w naturalny sposób przyciąga rodziny z małymi dziećmi. Dzieci mają swoją
          bezpieczną przestrzeń do zabawy, a rodzice mogą spokojnie korzystać z oferty – w restauracji, kawiarni czy innym lokalu usługowym. To
          prosta, skuteczna strategia: dzieci bawią się, rodzice zostają dłużej, zamawiają więcej i wracają częściej.
        </p>
        <p>
          Na 30–100 m² można stworzyć modułową, estetyczną strefę, która nie zajmuje dużo miejsca, a jednocześnie zapewnia dzieciom ruch i
          zabawę. To inwestycja, która działa praktycznie sama: zwiększa czas pobytu klientów, podnosi sprzedaż i przyciąga rodziny z dziećmi –
          bez potrzeby głównej atrakcji czy dużego marketingu.
        </p>
        <p>
          Sale zabaw w tym wydaniu jest narzędziem biznesowym: nie jest gwiazdą obiektu, ale skutecznie wspiera przychody, zapewniając rodzinom
          komfort i bezpieczeństwo, a Tobie – wymierny zwrot z inwestycji.
        </p>
      </>
    ),
  },
  {
    scale: "m",
    eyebrow: "średnie sale zabaw",
    title: "Średnie obiekty (100–700 m²)",
    alt: "Koncepcja 3D średniej sali zabaw",
    body: (
      <>
        <p>
          Konstrukcje w tej skali mogą z powodzeniem funkcjonować jako&nbsp;<b>samodzielne obiekty rozrywki</b>, ale równie dobrze sprawdzają
          się jako&nbsp;<b>część większego kompleksu</b>, generując przychody niezależnie od pozostałych elementów inwestycji.
        </p>
        <p>
          Przy tego typu realizacjach warto od początku zaplanować&nbsp;<b>strategię rozbudowy w kolejnych latach</b>&nbsp;– dzięki temu obiekt
          pozostaje atrakcyjny i stale przyciąga gości, zamiast narażać się na ryzyko „znudzenia” lokalnej społeczności. Regularne wprowadzanie
          nowych modułów czy atrakcji pozwala budować lojalność klientów i utrzymywać wysoką frekwencję.
        </p>
        <p>
          Na powierzchni od 100 do 700 m² możliwe jest zaprojektowanie szerokiego wachlarza<b>&nbsp;atrakcji sportowych i rozrywkowych</b>
          &nbsp;– od stref aktywności ruchowej, po przestrzenie tematyczne. Ostateczny kształt projektu zależy głównie od&nbsp;
          <b>wysokości budynku</b>, jednak w tej skali ograniczenia są już znacznie mniejsze niż przy mniejszych obiektach.
        </p>
        <p>
          Przed wyborem lokalizacji inwestycji warto upewnić się, że budynek oferuje odpowiednią liczbę miejsc parkingowych, posiada dogodny
          dostęp do komunikacji miejskiej oraz infrastrukturę pozwalającą sprawnie obsłużyć dużą liczbę gości.
        </p>
        <p>
          To kluczowe elementy, które wpływają na komfort odwiedzających, a tym samym na<b>&nbsp;stabilny i szybki zwrot z inwestycji</b>.
        </p>
      </>
    ),
  },
  {
    scale: "xl",
    eyebrow: "duże sale zabaw",
    title: "Duże hale (700–2000+ m²)",
    alt: "Koncepcja 3D dużej hali rozrywki FEC",
    body: (
      <>
        <p>
          Duże hale o powierzchni 700–2000+ m² to inwestycje o&nbsp;<b>znaczeniu krajowym</b>, które stają się ikoną rozrywki i prestiżu,
          przyciągając klientów z szerokiego obszaru i generując stabilny ruch.
        </p>
        <p>
          Już na etapie planowania konieczne jest stworzenie&nbsp;<b>master planu</b>, który uwzględni atrakcyjny mix stref dla dzieci,
          młodzieży i dorosłych, a także przestrzeń na przyszłą rozbudowę oraz integrację nowoczesnych systemów zarządzania, kolejkowania i
          analityki.
        </p>
        <p>
          Tego typu obiekty wymagają&nbsp;<b>przemyślanej logistyki ruchu</b>, dużej przepustowości, rozbudowanej infrastruktury zaplecza oraz
          najwyższych standardów bezpieczeństwa, co zapewnia płynne funkcjonowanie i komfort gości.
        </p>
        <p>
          W tej skali inwestycji kluczowe staje się również już na etapie projektowania zadbanie o samą architekturę budynku, w którym należy
          przewidzieć przestrzenie funkcjonalne takie jak szatnie czy strefy z szafkami dla odwiedzających, co znacząco podnosi standard
          obsługi.
        </p>
        <p>
          Aby wyróżnić się na tle konkurencji, kluczowe są również elementy premium —&nbsp;<b>interaktywne atrakcje</b>, dopracowana
          scenografia i design, unikalny brend oraz kompleksowe doświadczenie klienta wspierane przez strategię marketingową i prestiżową
          oprawę wydarzeń.
        </p>
      </>
    ),
  },
];

function Arrangements() {
  return (
    <section id="aranzacje" className={styles.arrangements}>
      <div className={styles.headRow}>
        <h2 className={styles.arrTitle}>Przykładowe aranżacje — producent sal zabaw od mikro do wielkich FEC</h2>
        <h2 className={styles.arrAside}>Sprawdź jak możesz wykorzystać potencjał swojego obiektu</h2>
      </div>
      <Carousel label="Przykładowe aranżacje" below="mobile" arrows="outside" className={styles.arrList}>
        {arrangements.map((a, i) => (
          <article key={a.scale} className={styles.arrRow} data-reverse={i % 2 === 1 || undefined}>
            <div className={styles.arrText}>
              <h3 className={styles.eyebrow}>{a.eyebrow}</h3>
              <h2 className={styles.arrRowTitle}>{a.title}</h2>
              <div className={styles.arrBody}>{a.body}</div>
              <ArrowLink href={`/pl/sale-zabaw-projekty-3d/?ipc_scale=${a.scale}`} newTab className={styles.arrBtn}>
                PROJEKTY PASUJĄCE DO TEJ SKALI
              </ArrowLink>
            </div>
            <div className={styles.arrMedia}>
              <Image src={arrangementImages[a.scale]} alt={a.alt} fill sizes="(max-width: 767px) 90vw, 50vw" className={styles.cover} />
              <h2 className={styles.arrLabel}>Koncepcja 3D</h2>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}

/* ---------- Proces współpracy ---------- */

function Process() {
  return (
    <section id="proces" className={styles.process}>
      <div className={styles.headRow}>
        <h2 className={styles.processTitle}>Proces współpracy</h2>
        <h2 className={styles.processAside}>
          Jasna ścieżka od audytu po rozwój obiektu — wspólne decyzje i kontrola kosztów na każdym etapie
        </h2>
      </div>
      <Carousel label="Proces współpracy" below="tablet" className={styles.steps}>
        {steps.map((s) => (
          <div key={s.label} className={styles.step}>
            <div className={styles.stepTop}>
              <h2 className={styles.stepLabel}>{s.label}</h2>
              <span className={styles.stepIcon}>
                <StepSvg name={s.icon} />
              </span>
            </div>
            <h2 className={styles.stepTitle}>{s.title}</h2>
            <p className={styles.stepText}>{s.text}</p>
            <span className={styles.stepLine} aria-hidden="true" />
          </div>
        ))}
      </Carousel>
      <div className={styles.ctaBar}>
        <div className={styles.ctaBarText}>
          <ShieldSvg className={styles.ctaBarIcon} />
          <h3>Zacznijmy od krótkiej rozmowy po której w 48h dostaniesz wstępny wariant wraz&nbsp;z&nbsp;kosztami.</h3>
        </div>
        <ArrowLink href="/konsultacja/" variant="outline" className={styles.ctaBarBtn}>
          Sprawdź proces współpracy
        </ArrowLink>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`${styles.headRow} ${styles.stackMobile}`}>
        <h2 className={styles.faqTitle}>Najpierw diagnoza i warianty → potem wspólna decyzja</h2>
        <p className={styles.headAside}>Zero zaskoczeń w kosztach. Konkretne odpowiedzi na najczęstsze obawy</p>
      </div>
      <Carousel label="Najczęstsze pytania" below="mobile" className={styles.cards3}>
        {faq.map((f) => (
          <div key={f.question} className={styles.card}>
            <h2 className={styles.cardTitle}>{f.question}</h2>
            <p className={styles.cardText}>{f.answer}</p>
          </div>
        ))}
      </Carousel>
      <div className={styles.center}>
        <ArrowLink href="/pl/faq/" className={styles.upper}>
          Znajdź odpowiedź na swoje pytania
        </ArrowLink>
      </div>
    </section>
  );
}

/* ---------- Case study ---------- */

function CaseStudies() {
  return (
    <section id="case-studies" className={styles.caseStudies}>
      <h3 className={styles.eyebrow}>producent sal zabaw - nasze realizacje</h3>
      <h2 className={styles.caseTitle}>Case Studies</h2>
      <div className={styles.caseCard}>
        <h2 className={styles.cardTitle}>FEC Belgia — modernizacja parku trampolin</h2>
        <p className={styles.caseTags}>Bezpieczeństwo • nowe strefy • różnorodna oferta</p>
        <div className={styles.caseBody}>
          <p>
            <strong>Cel inwestora:</strong>&nbsp;poprawić bezpieczeństwo i zwiększyć atrakcyjność oferty parku trampolin, który był w połowie
            nieprawidłowo zagospodarowany. Brak bezpiecznych podłóg oraz ograniczona liczba atrakcji powodowały spadek satysfakcji
            odwiedzających i trudności w utrzymaniu przewagi konkurencyjnej.
          </p>
          <p>
            <strong>Nasze rozwiązanie:</strong>&nbsp;zdemontowaliśmy część dotychczasowych trampolin i stworzyliśmy dwie strefy: dla
            najmłodszych oraz starszych dzieci. Wprowadziliśmy gry interaktywne Rugged Interactive do strefy dla starszych dzieci oraz dodaliśmy
            boisko sportowe z interaktywnymi dodatkami i AirCourt od AirTrack Factory w strefie trampolin.
          </p>
          <p>
            <strong>Efekt biznesowy:</strong>&nbsp;obiekt zyskał kompleksową i różnorodną ofertę dostosowaną do różnych grup wiekowych, wydłużył
            czas pobytu odwiedzających i zwiększył rotację gości. Modernizacja poprawiła wizerunek FEC jako miejsca bezpiecznego i innowacyjnego.
          </p>
        </div>
        <ArrowLink href="/pl/kontakt/" className={styles.upper}>
          porozmawiajmy o projekcie w tym stylu
        </ArrowLink>
      </div>
    </section>
  );
}

/* ---------- Opinie ---------- */

function Testimonials() {
  return (
    <section id="opinie" className={styles.section}>
      <div className={styles.headRow}>
        <h2 className={styles.opinionsTitle}>Opinie naszych klientów</h2>
        <p className={styles.headAside}>Efekty ważniejsze niż deklaracje</p>
      </div>
      <Carousel label="Opinie naszych klientów" below="mobile" className={styles.cards3}>
        {testimonials.map((t) => (
          <figure key={t.author} className={`${styles.card} ${styles.quote}`}>
            <blockquote>
              <p className={styles.cardText}>{t.quote}</p>
            </blockquote>
            <figcaption className={styles.quoteAuthor}>{t.author}</figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
}

/* ---------- Play Magazine ---------- */

function Magazine() {
  return (
    <section id="play-magazine" className={styles.section}>
      <div className={styles.headRow}>
        <h2 className={styles.magTitle}>Play Magazine / Inspiracje / Wiedza / Porady</h2>
        <h3 className={styles.headAsideH3}>Bądź świadomy - praktyczne źródło wiedzy o salach zabaw od producenta sal zabaw</h3>
      </div>
      <div className={styles.posts} role="list">
        {magazinePosts.map((p) => (
          <article key={p.href} className={styles.post} role="listitem">
            <AppLink href={p.href} className={styles.postThumb} tabIndex={-1} aria-hidden="true">
              <Image
                src={p.image.src}
                alt=""
                width={p.image.width}
                height={p.image.height}
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 430px"
                className={styles.cover}
              />
            </AppLink>
            <div className={styles.postText}>
              <h3 className={styles.postTitle}>
                <AppLink href={p.href}>{p.title}</AppLink>
              </h3>
              <AppLink href={p.href} className={styles.readMore} aria-label={`Czytaj dalej: ${p.title}`}>
                Czytaj dalej »
              </AppLink>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.center}>
        <ArrowLink href="/pl/play-magazine/" className={styles.upper}>
          zobacz, jak przygotować się do inwestycji
        </ArrowLink>
      </div>
    </section>
  );
}

/* ---------- O nas ---------- */

function About() {
  return (
    <section id="o-nas" className={styles.section}>
      <div className={`${styles.headRow} ${styles.stackMobile}`}>
        <h2 className={styles.magTitle}>O nas</h2>
        <h3 className={styles.aboutAside}>
          Producent sal zabaw i stref soft play. Projektujemy, wytwarzamy i montujemy rozwiązania, które realnie wpływają na frekwencję,
          urodziny i przychody
        </h3>
      </div>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCard}>
          <h3 className={`${styles.eyebrow} ${styles.eyebrowSmall}`}>lider w branży wewnętrznych sal zabaw</h3>
          <h2 className={styles.cardTitle}>Indoor Play Concept</h2>
          <div className={styles.aboutText}>
            <p>
              Projektujemy przestrzenie, które pracują na Twój sukces. Łączymy ciekawy design z bezpieczną konstrukcją i mierzalnym ROI.
              Zaczynamy od szczegółowego audytu i przygotowania koncepcji 3D z kosztorysem, a następnie przejmujemy pełną odpowiedzialność za
              każdy etap – od produkcji, przez montaż, aż po uruchomienie obiektu.
            </p>
            <p>
              Nie kończymy współpracy w dniu montażu – wspieramy Cię również po uruchomieniu obiektu, oferując serwis, doradztwo i stałą opiekę
              techniczną. Dzięki temu masz pewność, że Twoja sala zabaw pozostaje nowoczesny i rentowny przez lata.
            </p>
            <p>Inwestujesz nie tylko w projekt, ale w relację, w której jesteśmy po tej samej stronie — od pierwszego szkicu, aż po codzienne wsparcie.</p>
          </div>
          <ul className={styles.checks}>
            {aboutChecks.map((c) => (
              <li key={c}>
                <CheckCircleSvg className={styles.checkIcon} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className={styles.stats}>
            {aboutStats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.center}>
            <ArrowLink href="/pl/o-nas/">Dowiedz się, kim jesteśmy i jak pracujemy</ArrowLink>
          </div>
        </div>
        <div className={styles.aboutMedia}>
          <Image src={aboutImage.src} alt={aboutImage.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.cover} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Kontakt ---------- */

function Contact() {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.contactInner}>
        <h3 className={`${styles.eyebrow} ${styles.centerText}`}>masz pytanie o sale zabaw?</h3>
        <RotatingHeadline phrases={headlinePhrases} />
        <h2 className={styles.contactTitle}>
          Masz wolną przestrzeń? Zamień ją w inwestycję z porządanymi efektami
        </h2>
        <p className={styles.contactLead}>
          Umów 30-minutową rozmowę. Wskażemy priorytety i doradzimy, które działania warto przeprowadzić w pierwszej kolejności.
        </p>
        <div className={styles.contactBoxes}>
          {contactBoxes.map((b) => (
            <div key={b.icon} className={styles.contactBox} data-wide={b.icon === "envelope" || undefined}>
              <a href={b.href} className={styles.contactBoxIcon} aria-label={b.label} tabIndex={-1}>
                <ContactSvg name={b.icon} />
              </a>
              <h3 className={styles.contactBoxTitle}>
                <a href={b.href}>{b.label}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.map}>
        <iframe src={mapEmbed.src} title={mapEmbed.title} aria-label={mapEmbed.title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

export function HomeView() {
  return (
    <>
      <Hero />
      <Projects />
      <Arrangements />
      <Process />
      <Faq />
      <CaseStudies />
      <Testimonials />
      <Magazine />
      <About />
      <Contact />
    </>
  );
}
