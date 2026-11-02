"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { AppLink } from "@/components/AppLink";
import { Form } from "@/components/forms/Form";
import { ConsentCheckbox, TextArea, TextField } from "@/components/forms/Fields";
import type { Project } from "@/data/content/sale-zabaw-projekty-3d";
import { Modal } from "./Modal";
import { ProjectCard, projectDims } from "./ProjectCard";
import { RangeField, type Range } from "./RangeField";
import styles from "./Projects.module.css";

const PER_PAGE = 9;
const MAX_COMPARE = 5;
const UNIT = "m";

type Dim = "length" | "width" | "height";
type Ranges = Record<Dim, Range>;
type Sort = "default" | "sizeAsc" | "sizeDesc";
type ScaleKey = "s" | "m" | "xl";

const LIMITS: Record<Dim, Range> = { length: [0, 40], width: [0, 30], height: [0, 10] };
const DIM_LABELS: Record<Dim, string> = { length: "Długość (L)", width: "Szerokość (W)", height: "Wysokość (H)" };

// Stałe zakresy presetów skali (jak w ipc.js); URL może wymusić preset przez ?ipc_scale=s|m|xl
const PRESETS: Record<ScaleKey, Ranges> = {
  s: { length: [0, 10], width: [0, 10], height: [0, 4] },
  m: { length: [8, 22], width: [8, 18], height: [3, 6] },
  xl: { length: [18, 40], width: [14, 30], height: [4, 10] },
};
const isScaleKey = (k: string): k is ScaleKey => k in PRESETS;

const SORTS: { key: Sort; label: string }[] = [
  { key: "default", label: "Domyślnie" },
  { key: "sizeAsc", label: "Rozmiar ↑" },
  { key: "sizeDesc", label: "Rozmiar ↓" },
];

const fullRanges = (): Ranges => ({ length: LIMITS.length, width: LIMITS.width, height: LIMITS.height });

const area = (p: Project) => p.length * p.width;

function filterProjects(list: Project[], q: string, ranges: Ranges, sort: Sort): Project[] {
  const needle = q.trim().toLowerCase();
  const inRange = (v: number, [a, b]: Range) => v >= a && v <= b;
  const out = list.filter(
    (p) =>
      inRange(p.length, ranges.length) &&
      inRange(p.width, ranges.width) &&
      inRange(p.height, ranges.height) &&
      (!needle || [p.title, p.description, p.code, p.category, ...p.badges].join(" ").toLowerCase().includes(needle)),
  );
  if (sort === "sizeAsc") out.sort((x, y) => area(x) - area(y));
  if (sort === "sizeDesc") out.sort((x, y) => area(y) - area(x));
  return out;
}

type Inquiry = { heading: string; product: string; dims: string; titles: string };

type Props = {
  projects: Project[];
  /**
   * "grid" – pełny katalog z filtrem i porównaniem (strona Projekty 3D).
   * "slider" – poziomy pasek kart ze strzałkami, bez filtra (tryb .ipc-wrap--slider ze strony głównej).
   */
  variant?: "grid" | "slider";
};

export function ProjectsCatalog({ projects, variant = "grid" }: Props) {
  const isSlider = variant === "slider";
  const [q, setQ] = useState("");
  const [ranges, setRanges] = useState<Ranges>(fullRanges);
  const [sort, setSort] = useState<Sort>("default");
  const [scale, setScale] = useState<ScaleKey | null>(null);
  const [shown, setShown] = useState(PER_PAGE);
  const [compare, setCompare] = useState<string[]>([]);
  const [product, setProduct] = useState<Project | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => filterProjects(projects, q, ranges, sort), [projects, q, ranges, sort]);
  const visible = isSlider ? results : results.slice(0, shown);
  const remaining = results.length - visible.length;
  const byId = useMemo(() => new Map(projects.map((p) => [p.id, p])), [projects]);
  const compared = compare.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));

  // Każda zmiana filtrów zaczyna listę od pierwszej strony.
  const resetPaging = () => setShown(PER_PAGE);

  // Preset z adresu (?ipc_scale=…) i deep link do projektu (#ipc-project-ID).
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const key = (sp.get("ipc_scale") || sp.get("scale") || "").toLowerCase();
    if (isScaleKey(key)) {
      setScale(key);
      setRanges(PRESETS[key]);
    }
    const openFromHash = () => {
      const m = window.location.hash.match(/^#ipc-project-(\d+)$/);
      const p = m ? byId.get(m[1]) : undefined;
      if (p) setProduct(p);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [byId]);

  function setDim(dim: Dim, v: Range) {
    setRanges((r) => ({ ...r, [dim]: v }));
    resetPaging();
  }

  function applyScale(key: ScaleKey) {
    setScale(key);
    setRanges(PRESETS[key]);
    resetPaging();
  }

  function reset() {
    setRanges(fullRanges());
    setQ("");
    setSort("default");
    setScale(null);
    resetPaging();
  }

  function toggleCompare(id: string) {
    if (compare.includes(id)) {
      setCompare((c) => c.filter((x) => x !== id));
    } else if (compare.length >= MAX_COMPARE) {
      window.alert("Maksymalnie 5 pozycji.");
    } else {
      setCompare((c) => [...c, id]);
    }
  }

  const closeProduct = useCallback(() => setProduct(null), []);
  const closeCompare = useCallback(() => setCompareOpen(false), []);
  const closeInquiry = useCallback(() => setInquiry(null), []);

  function askAboutProduct(p: Project) {
    setProduct(null);
    setInquiry({ heading: "Zapytanie o projekt", product: p.title, dims: projectDims(p, UNIT), titles: "" });
  }

  function askAboutSelected() {
    if (!compared.length) return;
    const titles = compared.map((p) => p.title);
    setCompareOpen(false);
    setInquiry({ heading: "Zapytanie o wybrane projekty", product: titles.join(", "), dims: "", titles: titles.join("\n") });
  }

  return (
    <div className={styles.wrap} data-variant={variant}>
      {!isSlider && (
        <aside className={styles.sidebar} data-collapsed={filtersCollapsed || undefined}>
          <div className={styles.head}>
            <button
              type="button"
              className={styles.headToggle}
              aria-expanded={!filtersCollapsed}
              onClick={() => setFiltersCollapsed((c) => !c)}
            >
              <span className={styles.filterIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
              </span>
              <span className={styles.filterText}>Szybki filtr</span>
            </button>
            <button type="button" className={styles.reset} onClick={reset}>
              RESET
            </button>
          </div>
  
          <div className={styles.sidebarBody}>
            <div className={styles.search}>
              <input
                type="text"
                aria-label="Szukaj projektów"
                placeholder="fraza, np. interaktywne, tematyczne, …"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  resetPaging();
                }}
              />
            </div>
  
            <div className={styles.scale}>
              {(["s", "m", "xl"] as const).map((k) => (
                <button key={k} type="button" data-active={scale === k || undefined} onClick={() => applyScale(k)}>
                  Skala {k.toUpperCase()}
                </button>
              ))}
            </div>
  
            {(Object.keys(LIMITS) as Dim[]).map((dim) => (
              <RangeField
                key={dim}
                label={DIM_LABELS[dim]}
                min={LIMITS[dim][0]}
                max={LIMITS[dim][1]}
                unit={UNIT}
                value={ranges[dim]}
                onChange={(v) => setDim(dim, v)}
              />
            ))}
  
            <div className={styles.sort}>
              {SORTS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  data-active={sort === s.key || undefined}
                  onClick={() => {
                    setSort(s.key);
                    resetPaging();
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
  
            <div className={styles.counter} aria-live="polite">
              Wyniki: {visible.length} / {results.length}
            </div>
  
            <div className={styles.tray}>
              <div className={styles.trayHdr}>
                <span>Porównaj</span>
                <span className={styles.trayCount}>{compare.length}</span>
              </div>
              <div>
                {compared.map((p) => (
                  <div key={p.id} className={styles.trayRow}>
                    <span className={styles.trayTitle}>{p.title}</span>
                    <span className={styles.trayPrice}>{p.price}</span>
                    <button type="button" className={styles.trayX} aria-label="Usuń" onClick={() => toggleCompare(p.id)}>
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.trayActions}>
                <button type="button" onClick={() => setCompare([])}>
                  Wyczyść
                </button>
                <button type="button" onClick={() => setCompareOpen(true)}>
                  Porównaj
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      <div className={styles.results}>
        {isSlider && <SliderArrows gridRef={gridRef} />}
        <div className={styles.grid} ref={gridRef}>
          {visible.map((p) =>
            isSlider ? (
              <ProjectCard key={p.id} project={p} variant="slider" onOpen={() => setProduct(p)} />
            ) : (
              <ProjectCard
                key={p.id}
                project={p}
                compared={compare.includes(p.id)}
                onOpen={() => setProduct(p)}
                onToggleCompare={() => toggleCompare(p.id)}
              />
            ),
          )}
          {results.length === 0 && <div className={styles.empty}>Brak wyników.</div>}
        </div>
        {!isSlider && remaining > 0 && (
          <div className={styles.loadMore}>
            <button type="button" onClick={() => setShown((n) => n + PER_PAGE)}>
              Pokaż więcej ({remaining})
            </button>
          </div>
        )}
      </div>

      {/* Pływający przycisk porównania (widoczny, gdy są pozycje) */}
      {!isSlider && compare.length > 0 && (
        <button type="button" className={styles.floatCompare} aria-label="Otwórz porównanie" onClick={() => setCompareOpen(true)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span className={styles.floatCount}>{compare.length}</span>
        </button>
      )}

      {/* Modal produktu */}
      <Modal open={Boolean(product)} onClose={closeProduct} label={product?.title ?? "Podgląd projektu"} variant="product">
        {product && (
          <div className={styles.productDialog}>
            <div className={styles.productMain}>
              <div className={styles.productMedia}>
                <Image src={product.image} alt={product.title} width={1024} height={576} sizes="(max-width: 900px) 98vw, 1000px" />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDesc}>{product.description}</p>
                <div className={styles.productMeta}>
                  <span>Kategoria: {product.category}</span>
                  <span className={styles.sep}>•</span>
                  <span>Wymiary: {projectDims(product, UNIT)}</span>
                </div>
              </div>
            </div>
            <div className={styles.productSide}>
              <div>
                <div className={styles.priceLabel}>Cena zestawu</div>
                <div className={styles.priceMain}>
                  <span className={styles.priceFrom}>od</span>
                  <span className={styles.priceValue}>{product.price}</span>
                </div>
                <p className={styles.priceNote}>
                  Cena obejmuje produkcję i dostawę podstawowego układu. Montaż i rozbudowy po audycie.
                </p>
              </div>
              <div className={styles.productActions}>
                {product.fullDescUrl && (
                  <AppLink href={product.fullDescUrl} className={styles.btnDark}>
                    Zobacz pełny opis →
                  </AppLink>
                )}
                <button type="button" className={styles.btnLight} onClick={() => askAboutProduct(product)}>
                  Zapytaj o projekt →
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal porównania */}
      <Modal open={compareOpen} onClose={closeCompare} label="Porównanie" variant="compare">
        <h3 className={styles.compareTitle}>Porównanie</h3>
        <div className={styles.cmpGrid}>
          {compared.length === 0 && <div className={styles.cmpEmpty}>Brak pozycji do porównania.</div>}
          {compared.map((p) => (
            <div key={p.id} className={styles.cmpCard}>
              <div className={styles.cmpMedia}>
                <Image src={p.image} alt="" width={1024} height={576} sizes="320px" />
              </div>
              <div className={styles.cmpTitle}>{p.title}</div>
              <div className={styles.cmpPrice}>{p.price}</div>
              <div className={styles.cmpMeta}>
                <div>
                  <span className={styles.k}>Kategoria:</span> <span>{p.category}</span>
                </div>
                <div>
                  <span className={styles.k}>Wymiary:</span> <span>{projectDims(p, UNIT)}</span>
                </div>
              </div>
              <div className={styles.cmpDesc}>{p.description}</div>
              {p.badges.length > 0 && (
                <div className={styles.cmpTags}>
                  <div className={styles.k}>Tagi:</div>
                  <div className={styles.badges}>
                    {p.badges.map((b) => (
                      <span key={b} className={styles.badge}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.cmpActions}>
                <button
                  type="button"
                  onClick={() => {
                    setCompareOpen(false);
                    setProduct(p);
                  }}
                >
                  Podgląd
                </button>
                <button type="button" data-remove onClick={() => toggleCompare(p.id)}>
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cmpFoot}>
          <button type="button" className={styles.btnLight} disabled={compared.length === 0} onClick={askAboutSelected}>
            Zapytaj o wybrane projekty →
          </button>
          <button type="button" className={styles.btnOutline} onClick={closeCompare}>
            Zamknij
          </button>
        </div>
      </Modal>

      {/* Modal kontaktowy */}
      <Modal open={Boolean(inquiry)} onClose={closeInquiry} label={inquiry?.heading ?? "Zapytanie o projekt"} variant="contact">
        {inquiry && (
          <div className={styles.contactBody}>
            <h3 className={styles.contactTitle}>{inquiry.heading}</h3>
            <div className={styles.contactSub}>
              <span>{inquiry.product}</span>
              {inquiry.dims && (
                <>
                  <span className={styles.sep}> • </span>
                  <span>Wymiary: {inquiry.dims}</span>
                </>
              )}
            </div>
            <Form
              formId="projekty-3d"
              submitLabel="Wyślij zapytanie →"
              successMessage="Dziękujemy za zapytanie. Otrzymaliśmy Twoją wiadomość. Skontaktujemy się z Tobą tak szybko, jak to tylko możliwe."
              className={styles.contactForm}
            >
              <input type="hidden" name="project_title" value={inquiry.product} readOnly />
              <input type="hidden" name="project_dims" value={inquiry.dims} readOnly />
              <input type="hidden" name="project_titles" value={inquiry.titles} readOnly />
              <TextArea name="message" label="Wiadomość" required placeholder="Opisz lokalizację, termin, dodatkowe potrzeby" />
              <TextField name="name" label="Imię i nazwisko" required placeholder="Imię i nazwisko" autoComplete="name" />
              <TextField name="email" type="email" label="Adres e-mail" required placeholder="Adres e-mail" autoComplete="email" />
              <TextField name="phone" type="tel" label="Nr telefonu" placeholder="Nr telefonu" autoComplete="tel" />
              <TextField name="location" label="Miasto / kraj" placeholder="Miasto / kraj" />
              <ConsentCheckbox />
            </Form>
            <div className={styles.contactCancel}>
              <button type="button" className={styles.btnOutline} onClick={closeInquiry}>
                Anuluj
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

/** Strzałki trybu slider: przewijają pasek o jedną kartę (+ odstęp), blokują się na końcach (jak w ipc.js). */
function SliderArrows({ gridRef }: { gridRef: RefObject<HTMLDivElement | null> }) {
  const [state, setState] = useState({ scrollable: false, atStart: true, atEnd: false });

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const update = () => {
      const max = Math.max(0, grid.scrollWidth - grid.clientWidth);
      const x = grid.scrollLeft;
      setState({ scrollable: max > 2, atStart: x <= 2, atEnd: x >= max - 2 });
    };
    update();
    grid.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      grid.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [gridRef]);

  function step(dir: 1 | -1) {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.firstElementChild;
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const amount = card ? card.getBoundingClientRect().width + gap : Math.max(220, grid.clientWidth * 0.9);
    grid.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div className={styles.sliderTop}>
      <div className={styles.sliderArrows} hidden={!state.scrollable}>
        <button type="button" className={styles.sliderArrow} aria-label="Poprzednie projekty" disabled={state.atStart} onClick={() => step(-1)}>
          ‹
        </button>
        <button type="button" className={styles.sliderArrow} aria-label="Następne projekty" disabled={state.atEnd} onClick={() => step(1)}>
          ›
        </button>
      </div>
    </div>
  );
}
