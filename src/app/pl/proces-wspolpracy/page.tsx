import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProcesWspolpracyView } from "@/components/pages/proces-wspolpracy/ProcesWspolpracyView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("proces-wspolpracy");

export default function ProcesWspolpracyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("proces-wspolpracy")} />
      <ProcesWspolpracyView />
    </>
  );
}
