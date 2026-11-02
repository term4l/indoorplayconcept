import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { KontaktView } from "@/components/pages/kontakt/KontaktView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("kontakt");

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("kontakt")} />
      <KontaktView />
    </>
  );
}
