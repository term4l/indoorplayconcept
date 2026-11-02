import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { DostawcyView } from "@/components/pages/dostawcy/DostawcyView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("dostawcy");

export default function DostawcyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("dostawcy")} />
      <DostawcyView />
    </>
  );
}
