"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import styles from "./AccessMap.module.css";

/*
 * Lekka mapa OpenStreetMap (zamiennik Leafleta z oryginału, bez dodatkowych paczek):
 * przesuwanie, zoom kółkiem i przyciskami, klik = pinezka, pinezki można przeciągać.
 */

export type LatLng = { lat: number; lng: number };
export type AccessType = "parking" | "wejscie";
export type AccessPoints = Record<AccessType, LatLng | null>;
export type MapView = { center: LatLng; zoom: number };

const TILE = 256;
const MIN_ZOOM = 1;
const MAX_ZOOM = 19;
const MAX_LAT = 85.0511287798;
const PIN_COLORS: Record<AccessType, string> = { parking: "#60a5fa", wejscie: "#f59e0b" };

type Point = { x: number; y: number };

const worldSize = (zoom: number) => TILE * 2 ** zoom;

function project({ lat, lng }: LatLng, zoom: number): Point {
  const s = worldSize(zoom);
  const sin = Math.sin((Math.max(-MAX_LAT, Math.min(MAX_LAT, lat)) * Math.PI) / 180);
  return { x: ((lng + 180) / 360) * s, y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * s };
}

function unproject({ x, y }: Point, zoom: number): LatLng {
  const s = worldSize(zoom);
  const n = Math.PI - (2 * Math.PI * y) / s;
  return { lat: (180 / Math.PI) * Math.atan(Math.sinh(n)), lng: (x / s) * 360 - 180 };
}

type Drag =
  | { kind: "pan"; pointerId: number; start: Point; startCenter: Point; moved: boolean }
  | { kind: "pin"; pointerId: number; type: AccessType; offset: Point };

type Props = {
  view: MapView;
  onViewChange: (view: MapView) => void;
  points: AccessPoints;
  onPlace: (latLng: LatLng) => void;
  onPinMove: (type: AccessType, latLng: LatLng) => void;
};

export function AccessMap({ view, onViewChange, points, onPlace, onPinMove }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const lastWheel = useRef(0);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { zoom } = view;
  const centerPx = project(view.center, zoom);
  const origin = { x: centerPx.x - size.w / 2, y: centerPx.y - size.h / 2 };

  // Kółko myszy: zoom wokół kursora. Natywny listener, bo React rejestruje wheel jako passive.
  const viewRef = useRef(view);
  useEffect(() => {
    viewRef.current = view;
  }, [view]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel.current < 250 || e.deltaY === 0) return;
      lastWheel.current = now;
      const rect = el.getBoundingClientRect();
      const cursor = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      zoomAround(viewRef.current, e.deltaY < 0 ? 1 : -1, cursor, { w: rect.width, h: rect.height }, onViewChange);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onViewChange]);

  function localPoint(e: ReactPointerEvent): Point {
    const rect = ref.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { kind: "pan", pointerId: e.pointerId, start: { x: e.clientX, y: e.clientY }, startCenter: centerPx, moved: false };
  }

  function onPinPointerDown(e: ReactPointerEvent<HTMLButtonElement>, type: AccessType) {
    const point = points[type];
    if (e.button !== 0 || !point) return;
    e.stopPropagation();
    ref.current!.setPointerCapture(e.pointerId);
    const pin = project(point, zoom);
    const p = localPoint(e);
    drag.current = { kind: "pin", pointerId: e.pointerId, type, offset: { x: pin.x - origin.x - p.x, y: pin.y - origin.y - p.y } };
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || d.pointerId !== e.pointerId) return;
    if (d.kind === "pan") {
      const dx = e.clientX - d.start.x;
      const dy = e.clientY - d.start.y;
      if (!d.moved && Math.hypot(dx, dy) < 4) return;
      d.moved = true;
      onViewChange({ zoom, center: unproject({ x: d.startCenter.x - dx, y: d.startCenter.y - dy }, zoom) });
    } else {
      const p = localPoint(e);
      onPinMove(d.type, unproject({ x: origin.x + p.x + d.offset.x, y: origin.y + p.y + d.offset.y }, zoom));
    }
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || d.pointerId !== e.pointerId) return;
    drag.current = null;
    if (d.kind === "pan" && !d.moved) {
      const p = localPoint(e);
      onPlace(unproject({ x: origin.x + p.x, y: origin.y + p.y }, zoom));
    }
  }

  const tiles: { key: string; src: string; left: number; top: number }[] = [];
  if (size.w > 0) {
    const count = 2 ** zoom;
    const x0 = Math.floor(origin.x / TILE);
    const x1 = Math.floor((origin.x + size.w) / TILE);
    const y0 = Math.max(0, Math.floor(origin.y / TILE));
    const y1 = Math.min(count - 1, Math.floor((origin.y + size.h) / TILE));
    for (let ty = y0; ty <= y1; ty++) {
      for (let tx = x0; tx <= x1; tx++) {
        const wrapped = ((tx % count) + count) % count;
        tiles.push({
          key: `${zoom}/${tx}/${ty}`,
          src: `https://tile.openstreetmap.org/${zoom}/${wrapped}/${ty}.png`,
          left: tx * TILE - origin.x,
          top: ty * TILE - origin.y,
        });
      }
    }
  }

  return (
    <div
      ref={ref}
      className={styles.map}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (drag.current = null)}
      role="application"
      aria-label="Mapa: kliknij, aby dodać oznaczenie"
    >
      {tiles.map((t) => (
        // Kafelki mapy (zewnętrzne, zmienne) – zwykły <img>, next/image nie ma tu sensu.
        <img key={t.key} src={t.src} alt="" width={TILE} height={TILE} draggable={false} className={styles.tile} style={{ left: t.left, top: t.top }} />
      ))}

      {(Object.keys(points) as AccessType[]).map((type) => {
        const point = points[type];
        if (!point || size.w === 0) return null;
        const p = project(point, zoom);
        return (
          <button
            key={type}
            type="button"
            className={styles.pin}
            style={{ left: p.x - origin.x, top: p.y - origin.y, color: PIN_COLORS[type] }}
            onPointerDown={(e) => onPinPointerDown(e, type)}
            aria-label={type === "parking" ? "Parking serwisu" : "Wejście techniczne"}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </button>
        );
      })}

      <div className={styles.zoom} onPointerDown={(e) => e.stopPropagation()}>
        <button type="button" title="Zoom in" aria-label="Zoom in" disabled={zoom >= MAX_ZOOM} onClick={() => zoomAround(view, 1, null, size, onViewChange)}>
          +
        </button>
        <button type="button" title="Zoom out" aria-label="Zoom out" disabled={zoom <= MIN_ZOOM} onClick={() => zoomAround(view, -1, null, size, onViewChange)}>
          −
        </button>
      </div>
      <div className={styles.attribution} onPointerDown={(e) => e.stopPropagation()}>
        ©{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
          OpenStreetMap
        </a>
      </div>
    </div>
  );
}

/** Zmiana zoomu o `delta`, z zachowaniem punktu pod kursorem (albo środka mapy). */
function zoomAround(view: MapView, delta: number, cursor: Point | null, size: { w: number; h: number }, onViewChange: (v: MapView) => void) {
  const zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, view.zoom + delta));
  if (zoom === view.zoom) return;
  if (!cursor) {
    onViewChange({ center: view.center, zoom });
    return;
  }
  const c = project(view.center, view.zoom);
  const anchor = unproject({ x: c.x - size.w / 2 + cursor.x, y: c.y - size.h / 2 + cursor.y }, view.zoom);
  const a = project(anchor, zoom);
  onViewChange({ zoom, center: unproject({ x: a.x - cursor.x + size.w / 2, y: a.y - cursor.y + size.h / 2 }, zoom) });
}
