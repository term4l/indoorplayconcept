import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { salaZabawPinkowoWRestauracji as data } from "@/data/content/projects/sala-zabaw-pinkowo-w-restauracji";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sala-zabaw-pinkowo-w-restauracji");

export default function SalaZabawPinkowoWRestauracjiPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("sala-zabaw-pinkowo-w-restauracji")} />
      <ProjectLayout data={data} />
    </>
  );
}
