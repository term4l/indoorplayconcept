import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ONasView } from "@/components/pages/o-nas/ONasView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("o-nas");

export default function ONasPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("o-nas")} />
      <ONasView />
    </>
  );
}
