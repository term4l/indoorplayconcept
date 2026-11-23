import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MapaStronyView } from "@/components/pages/mapa-strony/MapaStronyView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("mapa-strony");

export default function MapaStronyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("mapa-strony")} />
      <MapaStronyView />
    </>
  );
}
