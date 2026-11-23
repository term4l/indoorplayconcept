import type { SVGProps } from "react";

/*
 * Ikony Lucide (lucide-static 0.468.0, licencja ISC) używane na stronach z kodu klienta (Strefa Klienta,
 * IPC Planner 3D) – wklejone jako ścieżki, żeby nie dodawać zależności lucide-react.
 * Nazwy jak w Lucide (CheckCircle2 = circle-check-big).
 */
const ICONS = {
  "arrow-down": [<path key={0} d="M12 5v14" />, <path key={1} d="m19 12-7 7-7-7" />],
  "arrow-left": [<path key={0} d="m12 19-7-7 7-7" />, <path key={1} d="M19 12H5" />],
  "arrow-right": [<path key={0} d="M5 12h14" />, <path key={1} d="m12 5 7 7-7 7" />],
  "arrow-up-right": [<path key={0} d="M7 7h10v10" />, <path key={1} d="M7 17 17 7" />],
  "box": [<path key={0} d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />, <path key={1} d="m3.3 7 8.7 5 8.7-5" />, <path key={2} d="M12 22V12" />],
  "building-2": [<path key={0} d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />, <path key={1} d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />, <path key={2} d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />, <path key={3} d="M10 6h4" />, <path key={4} d="M10 10h4" />, <path key={5} d="M10 14h4" />, <path key={6} d="M10 18h4" />],
  "chevron-down": [<path key={0} d="m6 9 6 6 6-6" />],
  "chevron-right": [<path key={0} d="m9 18 6-6-6-6" />],
  "circle-check-big": [<path key={0} d="M21.801 10A10 10 0 1 1 17 3.335" />, <path key={1} d="m9 11 3 3L22 4" />],
  "circle-help": [<circle key={0} cx="12" cy="12" r="10" />, <path key={1} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />, <path key={2} d="M12 17h.01" />],
  "compass": [<path key={0} d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />, <circle key={1} cx="12" cy="12" r="10" />],
  "download": [<path key={0} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />, <polyline key={1} points="7 10 12 15 17 10" />, <line key={2}  />],
  "external-link": [<path key={0} d="M15 3h6v6" />, <path key={1} d="M10 14 21 3" />, <path key={2} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />],
  "handshake": [<path key={0} d="m11 17 2 2a1 1 0 1 0 3-3" />, <path key={1} d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />, <path key={2} d="m21 3 1 11h-2" />, <path key={3} d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />, <path key={4} d="M3 4h8" />],
  "map-pinned": [<path key={0} d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />, <circle key={1} cx="12" cy="8" r="2" />, <path key={2} d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />],
  "monitor": [<rect key={0} width="20" height="14" x="2" y="3" rx="2" />, <line key={1}  />, <line key={2}  />],
  "package-check": [<path key={0} d="m16 16 2 2 4-4" />, <path key={1} d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />, <path key={2} d="m7.5 4.27 9 5.15" />, <polyline key={3} points="3.29 7 12 12 20.71 7" />, <line key={4}  />],
  "pencil-ruler": [<path key={0} d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />, <path key={1} d="m8 6 2-2" />, <path key={2} d="m18 16 2-2" />, <path key={3} d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />, <path key={4} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />, <path key={5} d="m15 5 4 4" />],
  "play": [<polygon key={0} points="6 3 20 12 6 21 6 3" />],
  "rotate-ccw": [<path key={0} d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />, <path key={1} d="M3 3v5h5" />],
  "ruler": [<path key={0} d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />, <path key={1} d="m14.5 12.5 2-2" />, <path key={2} d="m11.5 9.5 2-2" />, <path key={3} d="m8.5 6.5 2-2" />, <path key={4} d="m17.5 15.5 2-2" />],
  "video": [<path key={0} d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />, <rect key={1} x="2" y="6" width="14" height="12" rx="2" />],
  "wallet": [<path key={0} d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />, <path key={1} d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />],
  "wrench": [<path key={0} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />],
  "zap": [<path key={0} d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />],
};

export type LucideName = keyof typeof ICONS;

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & { name: LucideName; size?: number };

export function LucideIcon({ name, size = 24, ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {ICONS[name]}
    </svg>
  );
}
