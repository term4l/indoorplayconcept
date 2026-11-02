import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { Counter } from "./Counter";
import { ServiceIcon } from "./icons";
import type {
  Block,
  ButtonsBlock,
  CardItem,
  CardsBlock,
  FaqBlock,
  HeadingBlock,
  HeroBlock,
  LinkItem,
  ListCardsBlock,
  NumberedBlock,
  ProseBlock,
  Rich,
  ServicePageContent,
  StatsBlock,
  StepsBlock,
} from "./types";
import styles from "./services.module.css";

/* ---------- Tekst ---------- */

export function RichText({ value }: { value: Rich }) {
  if (typeof value === "string") return value;
  return value.map((part, i) => {
    if (typeof part === "string") return part;
    if ("strong" in part) return <strong key={i}>{part.strong}</strong>;
    return <em key={i}>{part.em}</em>;
  });
}

type Vars = CSSProperties & Record<`--${string}`, string | number | undefined>;
const px = (n?: number) => (n === undefined ? undefined : `${n}px`);

/* ---------- Hero ---------- */

function Hero({ hero }: { hero: HeroBlock }) {
  const Kicker = hero.h1 === "kicker" ? "h1" : "p";
  const Title = hero.h1 === "title" ? "h1" : "h2";
  return (
    <section className={styles.hero} style={{ "--title-size": px(hero.titleSize) } as Vars}>
      <Image src={hero.image} alt="" fill priority sizes="100vw" className={styles.heroImage} />
      <Kicker className={styles.kicker} data-style={hero.kickerStyle}>
        {hero.kicker}
      </Kicker>
      <Title className={styles.heroTitle}>{hero.title}</Title>
      <p className={styles.heroLead}>{hero.lead}</p>
    </section>
  );
}

/* ---------- Przycisk-link ---------- */

function LinkButton({ link, className }: { link: LinkItem; className?: string }) {
  return (
    <AppLink href={link.href} className={[styles.button, className].filter(Boolean).join(" ")}>
      {link.label}
      {link.arrow && <ServiceIcon name="arrowRight" className={styles.buttonIcon} />}
    </AppLink>
  );
}

/* ---------- Bloki ---------- */

function Heading({ block }: { block: HeadingBlock }) {
  return (
    <div className={styles.heading} data-align={block.align ?? "left"}>
      <h2 className={styles.h2} style={{ "--size": px(block.size) } as Vars}>
        {block.title}
      </h2>
      {block.subtitle && (
        <h2 className={styles.subtitle} style={{ color: block.subtitleColor }}>
          {block.subtitle}
        </h2>
      )}
    </div>
  );
}

function Stats({ block }: { block: StatsBlock }) {
  return (
    <div className={styles.stats}>
      {block.items.map((item) => (
        <div key={item.label} className={styles.stat}>
          <div className={styles.statLabel}>{item.label}</div>
          <div className={styles.statNumber}>
            <Counter value={item.value} />
            <span>{item.suffix}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item}>
          <ServiceIcon name="circleCheck" className={styles.checkIcon} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ item, tone }: { item: CardItem; tone: CardsBlock["tone"] }) {
  return (
    <div className={styles.card} data-tone={item.tone ?? tone} data-wide={item.wide ?? false}>
      <div className={styles.iconBox}>
        {item.icon && <ServiceIcon name={item.icon.name} color={item.icon.color} className={styles.boxIcon} />}
        <div className={styles.iconBoxContent}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          {item.text && (
            <p className={styles.cardText}>
              <RichText value={item.text} />
            </p>
          )}
        </div>
      </div>
      {item.stats && (
        <div className={styles.miniStats}>
          {item.stats.map((stat) => (
            <div key={stat.value} className={styles.miniStat}>
              <h2 className={styles.miniValue}>{stat.value}</h2>
              <h2 className={styles.miniLabel}>{stat.label}</h2>
            </div>
          ))}
        </div>
      )}
      {item.rows && (
        <dl className={styles.rows}>
          {item.rows.map(([label, value]) => (
            <div key={label} className={styles.row}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {item.list && <CheckList items={item.list} />}
      {item.button && <LinkButton link={item.button} className={styles.cardButton} />}
    </div>
  );
}

function Cards({ block }: { block: CardsBlock }) {
  const weights = Array.isArray(block.cols) ? block.cols : Array<number>(block.cols).fill(1);
  const vars: Vars = {
    "--columns": weights.map((w) => `${w}fr`).join(" "),
    "--count": weights.length,
    "--icon-size": px(block.iconSize),
    "--title-size": px(block.titleSize),
    "--title-weight": block.titleWeight,
    "--desc-size": px(block.descSize),
    "--desc-color": block.descColor,
  };
  return (
    <div className={styles.cards} style={vars} data-count={weights.length}>
      {block.items.map((item) => (
        <Card key={item.title} item={item} tone={block.tone} />
      ))}
    </div>
  );
}

function ListCards({ block }: { block: ListCardsBlock }) {
  return (
    <div className={styles.cards} style={{ "--columns": "1fr 1fr" } as Vars} data-count={2}>
      {block.items.map((item) => (
        <div key={item.title} className={styles.card} data-tone="outline">
          <h2 className={styles.listTitle}>{item.title}</h2>
          <CheckList items={item.list} />
        </div>
      ))}
    </div>
  );
}

function Prose({ block }: { block: ProseBlock }) {
  const vars: Vars = { "--size": px(block.size), "--color": block.color };
  if (block.as === "h2") {
    // Oryginał: jeden widget nagłówka z akapitami rozdzielonymi <br><br>.
    return (
      <h2 className={styles.prose} style={vars} data-align={block.align ?? "left"}>
        {block.paragraphs.map((p, i) => (
          <span key={i}>
            {i > 0 && (
              <>
                <br />
                <br />
              </>
            )}
            <RichText value={p} />
          </span>
        ))}
      </h2>
    );
  }
  return (
    <div className={styles.prose} style={vars} data-align={block.align ?? "left"} data-narrow={block.narrow ?? false}>
      {block.paragraphs.map((p, i) => (
        <p key={i}>
          <RichText value={p} />
        </p>
      ))}
    </div>
  );
}

function ToggleIcons() {
  return (
    <span className={styles.toggle} aria-hidden="true">
      <ServiceIcon name="plus" className={styles.iconClosed} />
      <ServiceIcon name="minus" className={styles.iconOpen} />
    </span>
  );
}

function Faq({ block }: { block: FaqBlock }) {
  return (
    <div className={styles.faq}>
      {block.columns.map((column, i) => (
        <div key={i} className={styles.faqColumn}>
          {column.map((item) => (
            <details key={item.question} className={styles.details}>
              <summary className={styles.summary}>
                <span className={styles.question}>{item.question}</span>
                <ToggleIcons />
              </summary>
              <div className={styles.answer}>
                <RichText value={item.answer} />
              </div>
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}

function Numbered({ block }: { block: NumberedBlock }) {
  return (
    <div className={styles.numbered}>
      {block.items.map((item, i) => (
        <div key={i} className={styles.numberedRow}>
          <div className={styles.numberCell}>
            <h2 className={styles.number}>{i + 1}</h2>
          </div>
          <div className={styles.card} data-tone="glass">
            <p className={styles.numberedText}>
              <RichText value={item} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Steps({ block }: { block: StepsBlock }) {
  return (
    <div className={styles.steps}>
      <div>
        {block.items.map((step, i) => (
          <details key={step.title} className={styles.details}>
            <summary className={styles.summary} data-variant="step">
              <span className={styles.stepHeader}>
                <span className={styles.stepNumber}>{i + 1}</span> {step.title}
                <br />
                <span className={styles.stepSubtitle}>{step.subtitle}</span>
              </span>
              <ToggleIcons />
            </summary>
            <div className={styles.answer}>
              {step.body.map((p, j) => (
                <p key={j}>
                  <RichText value={p} />
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
      <div className={styles.pills}>
        {block.contacts.map((pill) => (
          <h3 key={pill.label} className={styles.pillTitle}>
            <AppLink href={pill.href} className={styles.pill}>
              {pill.label}
              <ServiceIcon name={pill.icon} className={styles.pillIcon} />
            </AppLink>
          </h3>
        ))}
      </div>
    </div>
  );
}

function Buttons({ block }: { block: ButtonsBlock }) {
  return (
    <div className={styles.buttons}>
      {block.buttons.map((b) => (
        <LinkButton key={b.label} link={b} />
      ))}
    </div>
  );
}

function renderBlock(block: Block, key: number): ReactNode {
  switch (block.type) {
    case "heading":
      return <Heading key={key} block={block} />;
    case "stats":
      return <Stats key={key} block={block} />;
    case "cards":
      return <Cards key={key} block={block} />;
    case "listCards":
      return <ListCards key={key} block={block} />;
    case "prose":
      return <Prose key={key} block={block} />;
    case "faq":
      return <Faq key={key} block={block} />;
    case "numbered":
      return <Numbered key={key} block={block} />;
    case "steps":
      return <Steps key={key} block={block} />;
    case "buttons":
      return <Buttons key={key} block={block} />;
  }
}

/* ---------- Strona ---------- */

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <div className={styles.page}>
      <Hero hero={content.hero} />
      {content.sections.map((section, i) => (
        <section key={i} id={section.id} className={styles.section}>
          {section.blocks.map(renderBlock)}
        </section>
      ))}
    </div>
  );
}
