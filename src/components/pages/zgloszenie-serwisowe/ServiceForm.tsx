"use client";

import { useCallback, useEffect, useRef, useState, type ChangeEvent, type ReactNode } from "react";
import { Form } from "@/components/forms/Form";
import { AccessMap, type AccessPoints, type AccessType, type LatLng, type MapView } from "./AccessMap";
import { LucideIcon, type LucideName } from "./LucideIcon";
import styles from "./ServiceForm.module.css";

// Limity z konfiguracji wtyczki (IPC_SF): 12 plików, maks. 10 MB każdy.
const MAX_FILES = 12;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const DEFAULT_VIEW: MapView = { center: { lat: 52.1, lng: 19.4 }, zoom: 6 };
const EMPTY_POINTS: AccessPoints = { parking: null, wejscie: null };

const formatCoord = (p: LatLng | null) => (p ? `${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}` : "—");
const humanMB = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

function Card({ icon, title, children, className }: { icon?: LucideName; title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {title && (
        <h3 className={styles.cardTitle}>
          {icon && <LucideIcon name={icon} />} {title}
        </h3>
      )}
      {children}
    </div>
  );
}

function Field({ label, icon, wide, children }: { label: string; icon?: LucideName; wide?: boolean; children: ReactNode }) {
  return (
    <label className={styles.field} data-wide={wide || undefined}>
      <span className={styles.label}>
        {icon && <LucideIcon name={icon} />}
        {label}
      </span>
      {children}
    </label>
  );
}

export function ServiceForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const addressRefs = useRef<Record<"address" | "postalCode" | "city" | "country", HTMLInputElement | null>>({
    address: null,
    postalCode: null,
    city: null,
    country: null,
  });
  const geocodeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mode, setMode] = useState<AccessType>("parking");
  const [points, setPoints] = useState<AccessPoints>(EMPTY_POINTS);
  const [view, setView] = useState<MapView>(DEFAULT_VIEW);
  const [files, setFiles] = useState<File[]>([]);

  // Formularz po udanej wysyłce robi form.reset() – czyścimy wtedy też pinezki i listę plików.
  useEffect(() => {
    const form = rootRef.current?.closest("form");
    if (!form) return;
    const onReset = () => {
      setFiles([]);
      setPoints(EMPTY_POINTS);
      setMode("parking");
    };
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  useEffect(() => () => {
    if (geocodeTimer.current) clearTimeout(geocodeTimer.current);
  }, []);

  /** Po wpisaniu adresu centrujemy mapę na obiekcie (Nominatim, jak w oryginale; debounce 600 ms). */
  const geocode = useCallback(() => {
    if (geocodeTimer.current) clearTimeout(geocodeTimer.current);
    geocodeTimer.current = setTimeout(async () => {
      const { address, postalCode, city, country } = addressRefs.current;
      const query = [address, postalCode, city, country]
        .map((el) => el?.value.trim() ?? "")
        .filter(Boolean)
        .join(" ");
      if (!query) return;
      try {
        const url = new URL("https://nominatim.openstreetmap.org/search");
        url.searchParams.set("format", "jsonv2");
        url.searchParams.set("limit", "1");
        url.searchParams.set("q", query);
        const res = await fetch(url, { headers: { "Accept-Language": "en" } });
        if (!res.ok) return;
        const data = (await res.json()) as { lat?: string; lon?: string }[];
        const lat = parseFloat(data[0]?.lat ?? "");
        const lng = parseFloat(data[0]?.lon ?? "");
        if (Number.isFinite(lat) && Number.isFinite(lng)) setView({ center: { lat, lng }, zoom: 17 });
      } catch {
        // brak geokodowania nie blokuje formularza
      }
    }, 600);
  }, []);

  function syncFileInput(list: File[]) {
    const input = fileInput.current;
    if (!input) return;
    const dt = new DataTransfer();
    list.forEach((f) => dt.items.add(f));
    input.files = dt.files;
  }

  function onFilesChange(e: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? [])
      .slice(0, MAX_FILES)
      .filter((f) => f.size <= MAX_FILE_SIZE);
    setFiles(picked);
    syncFileInput(picked);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    syncFileInput(next);
  }

  const placePoint = useCallback((type: AccessType, latLng: LatLng) => setPoints((p) => ({ ...p, [type]: latLng })), []);
  const clearPoint = (type: AccessType) => setPoints((p) => ({ ...p, [type]: null }));

  const addressInput = (name: keyof typeof addressRefs.current) => ({
    name,
    ref: (el: HTMLInputElement | null) => {
      addressRefs.current[name] = el;
    },
    onInput: geocode,
  });

  return (
    <Form
      formId="zgloszenie-serwisowe"
      submitLabel="Wyślij zgłoszenie"
      successMessage="Zgłoszenie wysłane. Dziękujemy! Wrócimy z odpowiedzią możliwie szybko."
      className={styles.form}
    >
      <div className={styles.main} ref={rootRef}>
        <Card icon="user" title="Dane kontaktowe">
          <div className={styles.grid}>
            <Field label="Imię i nazwisko*">
              <input required type="text" name="name" className={styles.control} placeholder="Jan Kowalski" autoComplete="name" />
            </Field>
            <Field label="Telefon*">
              <input required type="tel" name="phone" className={styles.control} placeholder="+48 ..." autoComplete="tel" />
            </Field>
            <Field label="E-mail*" wide>
              <input required type="email" name="email" className={styles.control} placeholder="twoj@mail.pl" autoComplete="email" />
            </Field>
          </div>
        </Card>

        <Card icon="building" title="Obiekt i lokalizacja">
          <div className={styles.grid}>
            <Field label="Nazwa obiektu*">
              <input required type="text" name="venue" className={styles.control} placeholder="np. FunPark Zielona" />
            </Field>
            <Field label="Miasto*">
              <input required type="text" {...addressInput("city")} className={styles.control} placeholder="City" autoComplete="address-level2" />
            </Field>
            <Field label="Kod pocztowy">
              <input type="text" {...addressInput("postalCode")} className={styles.control} placeholder="ZIP / Postcode" autoComplete="postal-code" />
            </Field>
            <Field label="Kraj">
              <input type="text" {...addressInput("country")} className={styles.control} placeholder="np. Poland / Germany / USA" autoComplete="country-name" />
            </Field>
            <Field label="Adres (ulica, nr)" wide>
              <span className={styles.withIcon}>
                <LucideIcon name="mapPin" />
                <input type="text" {...addressInput("address")} className={styles.control} placeholder="Street, number" autoComplete="street-address" />
              </span>
            </Field>
          </div>
        </Card>

        <Card>
          <Card icon="mapPin" title="Dojazd i parking — wskaż na mapie">
            <div className={styles.mapGrid}>
              <div className={styles.mapSide}>
                <div className={styles.mapHelp}>Kliknij na mapę, aby dodać oznaczenia:</div>
                <div className={styles.mapHint}>
                  Podpowiedź: po dodaniu możesz <strong>przeciągnąć</strong> pinezkę w dokładne miejsce.
                </div>
                <div className={styles.buttons}>
                  <button type="button" className={styles.mode} data-active={mode === "parking"} aria-pressed={mode === "parking"} onClick={() => setMode("parking")}>
                    <LucideIcon name="parking" /> Parking serwisu
                  </button>
                  <button type="button" className={styles.mode} data-active={mode === "wejscie"} aria-pressed={mode === "wejscie"} onClick={() => setMode("wejscie")}>
                    <LucideIcon name="door" /> Wejście techniczne
                  </button>
                </div>
                <div className={styles.buttons}>
                  <button type="button" className={styles.clear} onClick={() => clearPoint("parking")}>
                    Usuń parking
                  </button>
                  <button type="button" className={styles.clear} onClick={() => clearPoint("wejscie")}>
                    Usuń wejście
                  </button>
                </div>
                <div className={styles.status}>
                  <div>
                    Aktualnie: <strong>{mode}</strong>
                  </div>
                  <div>Parking: {formatCoord(points.parking)}</div>
                  <div>Wejście: {formatCoord(points.wejscie)}</div>
                </div>
                <input type="hidden" name="access_points_json" value={JSON.stringify(points)} readOnly />
              </div>
              <div className={styles.mapBox}>
                <AccessMap
                  view={view}
                  onViewChange={setView}
                  points={points}
                  onPlace={(latLng) => placePoint(mode, latLng)}
                  onPinMove={placePoint}
                />
              </div>
            </div>
          </Card>
        </Card>

        <Card icon="alert" title="Opis problemu">
          <div className={styles.grid}>
            <Field label="Co się dzieje?*" wide>
              <textarea required name="issue" rows={5} className={styles.control} placeholder="Krótko opisz usterkę…" />
            </Field>
            <Field label="Priorytet*">
              <select required name="priority" className={styles.control} defaultValue="standard">
                <option value="standard">Standard (≤120h)</option>
                <option value="high">Wysoki</option>
                <option value="critical">Krytyczny (bezpieczeństwo)</option>
              </select>
            </Field>
            <div className={styles.dateTime}>
              <Field label="Preferowana data" icon="calendar">
                <input type="date" name="date" className={styles.control} />
              </Field>
              <Field label="Godzina" icon="clock">
                <input type="time" name="time" className={styles.control} />
              </Field>
            </div>
          </div>
        </Card>

        <Card icon="camera" title="Zdjęcia / wideo (maks. 12 plików)">
          <div className={styles.files}>
            <div className={styles.buttons}>
              <label className={styles.outline}>
                <LucideIcon name="upload" />
                <span>Dodaj pliki</span>
                <input ref={fileInput} type="file" name="media" multiple accept="image/*,video/*" className="sr-only" onChange={onFilesChange} />
              </label>
              <a href="https://wa.me/48663960969" target="_blank" rel="noopener noreferrer" className={styles.outline}>
                <LucideIcon name="message" /> Wyślij przez WhatsApp
              </a>
              <a href="mailto:serwis@ipc.com?subject=Materia%C5%82y%20do%20zg%C5%82oszenia" className={styles.outline}>
                <LucideIcon name="mail" /> Doślij mailem
              </a>
            </div>
            {files.length > 0 && (
              <div className={styles.fileList}>
                {files.map((f, i) => (
                  <div key={`${f.name}-${f.size}-${i}`} className={styles.fileCard}>
                    <LucideIcon name="paperclip" className={styles.fileIcon} />
                    <div className={styles.fileMeta}>
                      <div className={styles.fileName}>{f.name}</div>
                      <div className={styles.fileSize}>{humanMB(f.size)}</div>
                    </div>
                    <button type="button" className={styles.fileRemove} onClick={() => removeFile(i)}>
                      usuń
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className={styles.small}>Najlepiej dodać: zdjęcie z dystansu (kontekst), zbliżenie usterki i krótki film (jeśli dotyczy).</p>
          </div>
        </Card>

        <Card className={styles.consentCard}>
          <div className={styles.consent}>
            <input id="ipc-sf-rodo" name="consent" value="tak" type="checkbox" required />
            <label htmlFor="ipc-sf-rodo">
              Wyrażam zgodę na kontakt w celu obsługi zgłoszenia serwisowego oraz przetwarzanie danych zgodnie z polityką prywatności.
            </label>
          </div>
          <div className={styles.buttons}>
            <a href="tel:+48663960969" className={styles.outline}>
              <LucideIcon name="phone" /> Zadzwoń
            </a>
          </div>
        </Card>
      </div>

      <aside className={styles.aside}>
        <h3 className={styles.asideTitle}>Co przyspiesza obsługę?</h3>
        <ul className={styles.checklist}>
          {[
            "Zdjęcia/wideo z opisem lokalizacji usterki",
            "Nazwy modułów, poziom, najbliższe punkty charakterystyczne",
            "Wzmianka o ostatnim przeglądzie lub wcześniejszych naprawach",
            "Preferowane okna czasowe (noc, wczesny ranek, po zamknięciu)",
            "Informacja o dostępie technicznym (wjazd, winda, itp.)",
          ].map((item) => (
            <li key={item}>
              <LucideIcon name="checkCircle" className={styles.check} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className={styles.note}>
          Zgłoszenie przez <strong>WhatsApp</strong> jest darmowe i zwykle najszybsze…
        </div>
      </aside>
    </Form>
  );
}
