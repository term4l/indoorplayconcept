import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { tematycznaSalaZabawZamek as data } from "@/data/content/projects/tematyczna-sala-zabaw-zamek";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("tematyczna-sala-zabaw-zamek");

export default function TematycznaSalaZabawZamekPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("tematyczna-sala-zabaw-zamek")} />
      <ProjectLayout data={data} />
    </>
  );
}
