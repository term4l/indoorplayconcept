"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import {
  BUDGET_CHOICES,
  BUDGET_PATH_IDS,
  CONTACT_URL,
  COOPERATION_PDF_BY_ROUTE,
  ENDPOINT_IDS_BY_PATH_AND_BUDGET,
  PATHS,
  PLANNER_URL,
  type BudgetChoiceId,
  type Endpoint,
  type Path,
  type PathId,
} from "@/data/content/strefa-klienta";
import { LucideIcon, type LucideName } from "./icons";
import styles from "./CooperationMap.module.css";

/*
 * Interaktywna mapa pierwszej współpracy – port komponentu StrefaKlienta.jsx od klienta (24.11.2026).
 * Zamiast Tailwinda i framer-motion: CSS modules i animacja wejścia w CSS; ikony Lucide wklejone (icons.tsx).
 * Logika wyboru ścieżek, budżetu i punktów końcowych oraz pobierania PDF jest 1:1 z oryginału.
 */

async function downloadCooperationPdf(pathId: PathId | null, budgetChoiceId: BudgetChoiceId | null, endpointId: string | null) {
  const url = pathId && budgetChoiceId && endpointId ? COOPERATION_PDF_BY_ROUTE[pathId]?.[budgetChoiceId]?.[endpointId] : undefined;
  if (!url) throw new Error("Nie znaleziono PDF dla wybranej ścieżki.");
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error("Plik PDF nie jest dostępny na serwerze.");
  const blob = await response.blob();
  // W niektórych hostingach błędna ścieżka zwraca HTML z kodem 200.
  const signature = new Uint8Array(await blob.slice(0, 5).arrayBuffer());
  if (String.fromCharCode(...signature) !== "%PDF-") {
    throw new Error("Serwer nie zwrócił prawidłowego PDF.");
  }
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = url.split("/").pop() ?? "dokument.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
}

const plannerUrl = PLANNER_URL.trim();

function PathConnector({ muted = false }: { muted?: boolean }) {
  return (
    <div className={styles.connector} data-muted={muted || undefined} aria-hidden="true">
      <span className={styles.connectorLine} />
      <LucideIcon name="arrow-down" size={15} className={styles.connectorArrow} />
    </div>
  );
}

function StepTitle({ index, children }: { index: number; children: ReactNode }) {
  return (
    <div className={styles.stepTitle}>
      <span className={styles.stepKicker}>Krok {index}</span>
      <h2 className={styles.stepHeading}>{children}</h2>
    </div>
  );
}

type ChoiceCardProps = {
  title: string;
  description: string;
  icon: LucideName;
  selected: boolean;
  onClick: () => void;
  variant?: "green" | "orange";
  featured?: boolean;
};

function ChoiceCard({ title, description, icon, selected, onClick, variant = "green", featured = false }: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={styles.choice}
      data-selected={selected || undefined}
      data-featured={featured || undefined}
      data-variant={variant}
    >
      <span className={styles.choiceTop}>
        <span className={styles.choiceIcon}>
          <LucideIcon name={icon} size={21} />
        </span>
        {selected ? (
          <LucideIcon name="circle-check-big" size={21} className={styles.choiceCheck} />
        ) : (
          <LucideIcon name="chevron-right" size={19} className={styles.choiceChevron} />
        )}
      </span>
      <span className={styles.choiceTitle}>{title}</span>
      <span className={styles.choiceDesc}>{description}</span>
    </button>
  );
}

function PlannerButton({ label }: { label: string }) {
  if (plannerUrl) {
    return (
      <a href={plannerUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
        {label} <LucideIcon name="external-link" size={19} />
      </a>
    );
  }
  return (
    <div className={styles.disabledWrap}>
      <button type="button" disabled className={`${styles.btnGreen} ${styles.btnDisabled}`}>
        {label} <LucideIcon name="external-link" size={19} />
      </button>
      <p className={styles.hint}>Aby aktywować przycisk, uzupełnij adres Plannera w PLANNER_URL.</p>
    </div>
  );
}

type ContentPanelProps = {
  path: Path;
  endpoint: Endpoint;
  onDownloadPlannerDocs: () => void;
  plannerDocsReady: boolean;
  plannerDocsLoading: boolean;
  plannerDocsError: string;
};

function ContentPanel({ path, endpoint, onDownloadPlannerDocs, plannerDocsReady, plannerDocsLoading, plannerDocsError }: ContentPanelProps) {
  const isClientDocumentPath = BUDGET_PATH_IDS.includes(path.id);
  // W tych trzech drogach wybranie IPC Planner 3D kieruje po pobraniu PDF bezpośrednio do konfiguratora;
  // pozostałe punkty do kontaktu IPC.
  const isClientPlanner = isClientDocumentPath && endpoint.id === "planner" && endpoint.type === "planner";
  // Te dwie drogi prowadzą wprost do Plannera i nie wymagają pobrania PDF.
  const directPlannerCTA = (path.id === "research" && endpoint.id === "planner") || (path.id === "express" && endpoint.id === "express-kit");
  const label = directPlannerCTA ? endpoint.cta : endpoint.type === "planner" && !plannerUrl ? "Zapytaj o dostęp do IPC Planner 3D" : endpoint.cta;
  const centered = path.id === "express" || (endpoint.id === "planner" && endpoint.type === "planner");

  const downloadButton = (text: string, loadingText: string) => (
    <button type="button" onClick={onDownloadPlannerDocs} disabled={plannerDocsLoading} className={styles.btnOrange}>
      <LucideIcon name="download" size={19} />
      {plannerDocsLoading ? loadingText : text}
    </button>
  );
  const errorText = plannerDocsError && (
    <p role="alert" className={styles.error}>
      {plannerDocsError}
    </p>
  );

  return (
    <section className={styles.panel} aria-live="polite">
      <div className={styles.panelBar} />
      <div className={styles.panelBody}>
        <div className={styles.crumbs}>
          <span>{path.title}</span>
          <LucideIcon name="chevron-right" size={13} />
          <span className={styles.crumbCurrent}>{endpoint.title}</span>
        </div>
        <div className={styles.panelHead}>
          <span className={styles.panelIcon}>
            <LucideIcon name={endpoint.icon} size={25} />
          </span>
          <div>
            <p className={styles.panelLabel}>Twoja wybrana droga</p>
            <h2 className={styles.panelTitle}>{endpoint.title}</h2>
          </div>
        </div>
        <p className={styles.panelLead}>{endpoint.lead}</p>
        <p className={styles.panelText}>{endpoint.body}</p>
        {path.id !== "express" && (
          <div className={styles.tasks}>
            <h3 className={styles.tasksTitle}>Co dalej?</h3>
            <ul className={styles.tasksList}>
              {endpoint.tasks.map((task) => (
                <li key={task}>
                  <LucideIcon name="circle-check-big" size={19} className={styles.taskIcon} />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles.actions} data-centered={centered || undefined}>
          {isClientDocumentPath ? (
            <div className={styles.docFlow}>
              {downloadButton("Pobierz dokument PDF", "Pobieranie PDF...")}
              {errorText}
              {plannerDocsReady && (
                <div className={styles.docReady}>
                  <p className={styles.docNote}>
                    {isClientPlanner
                      ? "Dokument został przekazany do pobrania. Możesz teraz otworzyć IPC Planner 3D i rozpocząć projektowanie."
                      : "Dokument został przekazany do pobrania. Uzupełnij pola w PDF, zapisz plik i prześlij go do IPC, abyśmy mogli wspólnie omówić dalsze kroki."}
                  </p>
                  {isClientPlanner ? (
                    <PlannerButton label="Rozpocznij projektowanie" />
                  ) : (
                    <AppLink href={CONTACT_URL} className={styles.btnGreen}>
                      Porozmawiajmy o Twoim projekcie <LucideIcon name="external-link" size={19} />
                    </AppLink>
                  )}
                </div>
              )}
            </div>
          ) : directPlannerCTA ? (
            <PlannerButton label={label} />
          ) : endpoint.id === "planner" && endpoint.type === "planner" ? (
            <div className={styles.docFlow}>
              {downloadButton("Pobierz dokumenty", "Pobieranie dokumentu PDF...")}
              {errorText}
              {plannerDocsReady && (
                <div className={styles.docReady}>
                  <p className={styles.docNote}>Dokument PDF został przekazany do pobrania. Możesz rozpocząć projektowanie.</p>
                  <PlannerButton label="Rozpocznij projektowanie" />
                </div>
              )}
            </div>
          ) : endpoint.type === "planner" && plannerUrl ? (
            <a href={plannerUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
              {label} <LucideIcon name="external-link" size={19} />
            </a>
          ) : (
            <AppLink href={CONTACT_URL} className={styles.btnGreen}>
              {label} <LucideIcon name="external-link" size={19} />
            </AppLink>
          )}
        </div>
      </div>
    </section>
  );
}

type ScrollTarget = "step2" | "step3" | "step4" | "result" | null;

export function CooperationMap() {
  const [started, setStarted] = useState(false);
  const [plannerPdfState, setPlannerPdfState] = useState<{ routeKey: string | null; isLoading: boolean; error: string }>({
    routeKey: null,
    isLoading: false,
    error: "",
  });
  const [pathId, setPathId] = useState<PathId | null>(null);
  const [budgetChoiceId, setBudgetChoiceId] = useState<BudgetChoiceId | null>(null);
  const [expressPlannerSelected, setExpressPlannerSelected] = useState(false);
  const [endpointId, setEndpointId] = useState<string | null>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [scrollTarget, setScrollTarget] = useState<ScrollTarget>(null);

  const path = PATHS.find((p) => p.id === pathId);
  const isExpress = path?.id === "express";
  const hasBudgetQuestion = path ? BUDGET_PATH_IDS.includes(path.id) : false;
  const routeKey = `${pathId}:${budgetChoiceId || "default"}:${endpointId || "none"}`;

  const openPlannerDocuments = async () => {
    setPlannerPdfState({ routeKey: null, isLoading: true, error: "" });
    try {
      await downloadCooperationPdf(pathId, budgetChoiceId, endpointId);
      setPlannerPdfState({ routeKey, isLoading: false, error: "" });
    } catch (error) {
      setPlannerPdfState({
        routeKey: null,
        isLoading: false,
        error: `${error instanceof Error ? error.message : "Nie udało się pobrać PDF."} Sprawdź pliki w public/dokumenty.`,
      });
    }
  };

  const allowedEndpointIds = path && budgetChoiceId ? ENDPOINT_IDS_BY_PATH_AND_BUDGET[path.id]?.[budgetChoiceId] : undefined;
  const visibleEndpoints: Endpoint[] = path
    ? isExpress
      ? path.endpoints.filter((e) => e.id === "express-kit")
      : allowedEndpointIds
        ? path.endpoints.filter((e) => allowedEndpointIds.includes(e.id))
        : hasBudgetQuestion
          ? []
          : path.endpoints
    : [];
  const endpoint = visibleEndpoints.find((e) => e.id === endpointId);

  useEffect(() => {
    if (!scrollTarget) return;
    const ref = scrollTarget === "step2" ? step2Ref : scrollTarget === "step3" ? step3Ref : scrollTarget === "step4" ? step4Ref : resultRef;
    // Przewijamy po następnym renderze, gdy nowy etap jest już w DOM.
    const id = window.requestAnimationFrame(() => {
      if (ref.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    setScrollTarget(null);
    return () => window.cancelAnimationFrame(id);
  }, [scrollTarget, started, pathId, budgetChoiceId, endpointId]);

  const reset = () => {
    setStarted(false);
    setPathId(null);
    setBudgetChoiceId(null);
    setExpressPlannerSelected(false);
    setEndpointId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const selectPath = (id: PathId) => {
    setPathId(id);
    setBudgetChoiceId(null);
    setExpressPlannerSelected(false);
    setEndpointId(null);
    setScrollTarget("step3");
  };
  const selectBudgetChoice = (id: BudgetChoiceId) => {
    setBudgetChoiceId(id);
    setEndpointId(null);
    setScrollTarget("step4");
  };
  const selectExpressPlanner = () => {
    setExpressPlannerSelected(true);
    setEndpointId(null);
    setScrollTarget("step4");
  };
  const selectEndpoint = (id: string) => {
    setEndpointId(id);
    setScrollTarget("result");
  };

  const showStep4 = Boolean(path && ((hasBudgetQuestion && budgetChoiceId) || (isExpress && expressPlannerSelected)));

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>Indoor Play Concept • Pierwszy krok</p>
          <h1 className={styles.heroTitle}>
            Twoja droga do <span className={styles.heroAccent}>własnego projektu</span>
          </h1>
          <p className={styles.heroLead}>
            Każdy inwestor zaczyna w innym miejscu. Wybierz odpowiedź, która najlepiej opisuje Twoją sytuację. Odkrywaj kolejne
            możliwości i sam zdecyduj, jak chcesz rozpocząć współpracę z IPC.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.topRow}>
          <span>Mapa współpracy • wybierz swoją ścieżkę</span>
          <button type="button" onClick={reset} className={styles.resetBtn}>
            <LucideIcon name="rotate-ccw" size={15} /> Od początku
          </button>
        </div>

        <div className={styles.startWrap}>
          <button
            type="button"
            aria-expanded={started}
            className={styles.startBtn}
            data-active={started || undefined}
            onClick={() => {
              setStarted((v) => !v);
              setPathId(null);
              setBudgetChoiceId(null);
              setExpressPlannerSelected(false);
              setEndpointId(null);
              setScrollTarget("step2");
            }}
          >
            <span className={styles.startIcon}>
              <LucideIcon name="handshake" size={36} />
            </span>
            <span className={styles.startTitle}>Jestem inwestorem</span>
            <span className={styles.startHint}>{started ? "Wybierz jedną z dróg poniżej" : "Kliknij, aby rozpocząć"}</span>
          </button>
        </div>

        {started && (
          <div key="stage-2" ref={step2Ref} className={styles.stage}>
            <PathConnector />
            <StepTitle index={1}>Na jakim etapie jesteś?</StepTitle>
            <div className={styles.pathsGrid}>
              {PATHS.map((p) => (
                <div key={p.id} className={styles.pathCell} data-express={p.id === "express" || undefined}>
                  <ChoiceCard
                    title={p.title}
                    description={p.intro}
                    icon={p.icon}
                    selected={pathId === p.id}
                    featured={p.id === "express"}
                    onClick={() => selectPath(p.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {path && (
          <div key={path.id} ref={step3Ref} className={styles.stage}>
            <PathConnector />
            <div className={styles.pathInfo}>
              <div className={styles.pathInfoHead}>
                <LucideIcon name={path.icon} size={21} />
                {path.title}
              </div>
              <div className={styles.pathNeeds}>{path.needs}</div>
            </div>
            {hasBudgetQuestion ? (
              <>
                <StepTitle index={2}>Czy wiesz już, ile chcesz przeznaczyć na swoją inwestycję?</StepTitle>
                <div className={styles.budgetGrid}>
                  {BUDGET_CHOICES.map((choice) => (
                    <ChoiceCard
                      key={`${path.id}-${choice.id}`}
                      title={choice.title}
                      description={choice.teaser}
                      icon={choice.icon}
                      selected={budgetChoiceId === choice.id}
                      onClick={() => selectBudgetChoice(choice.id)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <StepTitle index={2}>{isExpress ? "Zacznij od IPC Planner 3D" : "Co najlepiej odpowiada Twoim potrzebom?"}</StepTitle>
                <div className={isExpress || path.id === "research" ? styles.singleGrid : styles.endpointsGrid}>
                  {(isExpress ? path.endpoints.filter((e) => e.id === "planner") : path.endpoints).map((e) => (
                    <ChoiceCard
                      key={`${path.id}-${e.id}`}
                      title={e.title}
                      description={e.teaser}
                      icon={e.icon}
                      variant="orange"
                      selected={isExpress ? expressPlannerSelected : endpointId === e.id}
                      onClick={() => (isExpress ? selectExpressPlanner() : selectEndpoint(e.id))}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {path && showStep4 && (
          <div key={`${path.id}-${budgetChoiceId || "express"}-options`} ref={step4Ref} className={styles.stage}>
            <PathConnector />
            <StepTitle index={3}>{isExpress ? "Teraz wybierz zestaw do realizacji" : "Co najlepiej odpowiada Twoim potrzebom?"}</StepTitle>
            {isExpress && plannerUrl && (
              <div className={styles.plannerLinkRow}>
                <a href={plannerUrl} target="_blank" rel="noopener noreferrer" className={styles.plannerLink}>
                  Otwórz IPC Planner 3D
                  <LucideIcon name="external-link" size={16} />
                </a>
              </div>
            )}
            <div className={isExpress ? styles.singleGrid : styles.endpointsGrid}>
              {visibleEndpoints.map((e) => (
                <ChoiceCard
                  key={`${path.id}-${e.id}`}
                  title={e.title}
                  description={e.teaser}
                  icon={e.icon}
                  variant="orange"
                  selected={endpointId === e.id}
                  onClick={() => selectEndpoint(e.id)}
                />
              ))}
            </div>
          </div>
        )}

        {path && endpoint && (
          <div key={`${path.id}-${endpoint.id}`} ref={resultRef} className={`${styles.stage} ${styles.resultStage}`}>
            <PathConnector />
            <ContentPanel
              path={path}
              endpoint={endpoint}
              onDownloadPlannerDocs={openPlannerDocuments}
              plannerDocsReady={plannerPdfState.routeKey === routeKey}
              plannerDocsLoading={plannerPdfState.isLoading}
              plannerDocsError={plannerPdfState.error}
            />
            <div className={styles.resultLinks}>
              <button
                type="button"
                className={styles.textBtn}
                onClick={() => {
                  setEndpointId(null);
                  setScrollTarget(hasBudgetQuestion || isExpress ? "step4" : "step3");
                }}
              >
                <LucideIcon name="arrow-left" size={16} /> Wybierz inną możliwość
              </button>
              <button type="button" className={styles.textBtn} onClick={reset}>
                <LucideIcon name="rotate-ccw" size={15} /> Zacznij od początku
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
