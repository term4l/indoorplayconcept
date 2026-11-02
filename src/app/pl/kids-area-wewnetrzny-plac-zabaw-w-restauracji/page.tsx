import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { kidsAreaWewnetrznyPlacZabawWRestauracji as data } from "@/data/content/projects/kids-area-wewnetrzny-plac-zabaw-w-restauracji";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("kids-area-wewnetrzny-plac-zabaw-w-restauracji");

export default function KidsAreaWewnetrznyPlacZabawWRestauracjiPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("kids-area-wewnetrzny-plac-zabaw-w-restauracji")} />
      <ProjectLayout data={data} />
    </>
  );
}
