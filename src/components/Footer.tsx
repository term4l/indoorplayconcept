import { company, footerColumns } from "@/data/footer";
import { AppLink } from "./AppLink";
import { Icon } from "./Icons";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.col}>
          <h2 className={styles.title}>{company.name}</h2>
          <ul className={styles.list}>
            {company.contact.map(({ icon, text, href }) => {
              const content = (
                <>
                  <Icon name={icon} className={styles.icon} />
                  <span>{text}</span>
                </>
              );
              return (
                <li key={text} className={styles.contactItem}>
                  {href ? <a href={href}>{content}</a> : content}
                </li>
              );
            })}
          </ul>
          <div className={styles.social} role="list">
            {company.social.map((s) => (
              <span role="listitem" key={s.network}>
                <a href={s.href} target="_blank" rel="noopener" className={styles.socialLink}>
                  <span className="sr-only">{s.label}</span>
                  <Icon name={s.network} />
                </a>
              </span>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div className={styles.col} key={col.title}>
            <h2 className={styles.title}>{col.title}</h2>
            <ul className={styles.list}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <AppLink href={l.href} className={styles.link}>
                    {l.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Indoor Play Concept. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
