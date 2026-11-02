import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { wewnetrznyPlacZabawWRestauracjiPotworek as data } from "@/data/content/projects/wewnetrzny-plac-zabaw-w-restauracji-potworek";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wewnetrzny-plac-zabaw-w-restauracji-potworek");

export default function WewnetrznyPlacZabawWRestauracjiPotworekPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wewnetrzny-plac-zabaw-w-restauracji-potworek")} />
      <ProjectLayout data={data} />
    </>
  );
}
