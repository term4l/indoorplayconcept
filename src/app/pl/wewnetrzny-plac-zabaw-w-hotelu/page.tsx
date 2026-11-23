import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { wewnetrznyPlacZabawWHotelu as data } from "@/data/content/projects/wewnetrzny-plac-zabaw-w-hotelu";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wewnetrzny-plac-zabaw-w-hotelu");

export default function WewnetrznyPlacZabawWHoteluPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wewnetrzny-plac-zabaw-w-hotelu")} />
      <ProjectLayout data={data} />
    </>
  );
}
