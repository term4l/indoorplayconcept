import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { wewnetrznyPlacZabawWKregielni as data } from "@/data/content/projects/wewnetrzny-plac-zabaw-w-kregielni";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wewnetrzny-plac-zabaw-w-kregielni");

export default function WewnetrznyPlacZabawWKregielniPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wewnetrzny-plac-zabaw-w-kregielni")} />
      <ProjectLayout data={data} />
    </>
  );
}
