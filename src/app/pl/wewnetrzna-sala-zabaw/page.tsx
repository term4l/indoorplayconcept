import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { wewnetrznaSalaZabaw as data } from "@/data/content/projects/wewnetrzna-sala-zabaw";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wewnetrzna-sala-zabaw");

export default function WewnetrznaSalaZabawPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wewnetrzna-sala-zabaw")} />
      <ProjectLayout data={data} />
    </>
  );
}
