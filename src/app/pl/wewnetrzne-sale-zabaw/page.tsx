import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { wewnetrzneSaleZabaw as data } from "@/data/content/projects/wewnetrzne-sale-zabaw";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wewnetrzne-sale-zabaw");

export default function WewnetrzneSaleZabawPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wewnetrzne-sale-zabaw")} />
      <ProjectLayout data={data} />
    </>
  );
}
