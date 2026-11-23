import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PlannerView } from "@/components/pages/konsultacja/PlannerView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("konsultacja");

/* Zasoby z kodu klienta leżą w public/ – sprawdzamy przy budowaniu, czy już są, i w razie braku pokazujemy zamienniki. */
const inPublic = (file: string) => existsSync(path.join(process.cwd(), "public", file));

export default function KonsultacjaPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("konsultacja")} />
      <PlannerView hasVideo={inPublic("Start.mp4")} hasHeroImage={inPublic("Nowoczesne biuro z projektem placu zabaw.png")} />
    </>
  );
}
