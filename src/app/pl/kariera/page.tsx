import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { KarieraView } from "@/components/pages/kariera/KarieraView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("kariera");

export default function KarieraPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("kariera")} />
      <KarieraView />
    </>
  );
}
