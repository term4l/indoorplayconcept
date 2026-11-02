import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { malpiGajPodwodnySwiatWSilowni as data } from "@/data/content/projects/malpi-gaj-podwodny-swiat-w-silowni";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("malpi-gaj-podwodny-swiat-w-silowni");

export default function MalpiGajPodwodnySwiatWSilowniPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("malpi-gaj-podwodny-swiat-w-silowni")} />
      <ProjectLayout data={data} />
    </>
  );
}
