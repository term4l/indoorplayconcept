import { AppLink } from "@/components/AppLink";
import { footerColumns } from "@/data/footer";
import { postHref, posts } from "@/data/magazine";
import { pages, type PageKey, type PageSeo } from "@/data/pages";
import { PageIntro } from "../o-nas/PageIntro";
import styles from "./MapaStrony.module.css";

/*
 * Mapa strony dla ludzi (/pl/mapa-strony/). W WordPressie link „Mapa strony” w stopce prowadził do mapy XML
 * Yoast z arkuszem XSL; nowe wersje Chrome (sprawdzone w Chrome 156) nie obsługują już XSLT i pokazują ją
 * jako goły tekst, więc stopka linkuje tutaj, a /sitemap.xml zostaje dla wyszukiwarek.
 */

type Group = { title: string; links: { label: string; href: string }[]; wide?: boolean };

const SELF: PageKey = "mapa-strony";

/** Strony projektów (karty katalogu /sale-zabaw-projekty-3d/). */
const projectKeys: PageKey[] = [
  "wewnetrzna-sala-zabaw",
  "wewnetrzne-sale-zabaw",
  "tematyczna-sala-zabaw-zamek",
  "sala-zabaw-w-hotelu-wulkan",
  "malpi-gaj-w-hotelu-pastelowy-raj",
  "wewnetrzny-plac-zabaw-w-hotelu",
  "malpi-gaj-podwodny-swiat-w-silowni",
  "wewnetrzny-plac-zabaw-w-kregielni",
  "sala-zabaw-pinkowo-w-restauracji",
  "kids-area-wewnetrzny-plac-zabaw-w-restauracji",
  "wewnetrzny-plac-zabaw-w-restauracji-potworek",
];

function buildGroups(): Group[] {
  const self = pages[SELF].path;
  const used = new Set<string>([self]);
  const take = (href: string, label: string) => {
    used.add(href);
    return { label, href };
  };

  // Kolumny stopki w tej samej kolejności (bez linku do samej mapy).
  const groups: Group[] = footerColumns.map((column) => ({
    title: column.title,
    links: column.links.filter((link) => link.href !== self && link.href.startsWith("/pl/")).map((link) => take(link.href, link.label)),
  }));

  groups.push({
    title: "Projekty 3D sal zabaw",
    links: projectKeys.map((key) => take(pages[key].path, pages[key].breadcrumb)),
  });

  const category = pages["category-wewnetrzne-place-zabaw"];
  groups.push({
    title: "Play Magazine – artykuły",
    wide: true,
    links: [...posts.map((post) => take(postHref(post), post.title)), take(category.path, `Kategoria: ${category.breadcrumb}`)],
  });

  // Wszystko, co jest w rejestrze stron, a nie trafiło wyżej (np. archiwum kategorii) – żeby niczego nie zgubić.
  const all: PageSeo[] = Object.values(pages);
  const rest = all.filter((page) => !used.has(page.path));
  if (rest.length) {
    groups.push({ title: "Pozostałe strony", links: rest.map((page) => take(page.path, page.breadcrumb)) });
  }
  return groups;
}

export function MapaStronyView() {
  const groups = buildGroups();
  return (
    <>
      <PageIntro
        kicker="INFORMACJE"
        title="Mapa strony"
        lead="Wszystkie podstrony serwisu w jednym miejscu: usługi, projekty sal zabaw, artykuły Play Magazine i informacje o firmie."
      />

      <section className={styles.section}>
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title} className={group.wide ? `${styles.group} ${styles.wide}` : styles.group}>
              <h2 className={styles.title}>{group.title}</h2>
              <ul className={styles.list}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <AppLink href={link.href}>{link.label}</AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Mapa strony dla wyszukiwarek (XML): <a href="/sitemap.xml">/sitemap.xml</a>
        </p>
      </section>
    </>
  );
}
