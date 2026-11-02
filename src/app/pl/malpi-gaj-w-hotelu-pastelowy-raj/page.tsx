import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { malpiGajWHoteluPastelowyRaj as data } from "@/data/content/projects/malpi-gaj-w-hotelu-pastelowy-raj";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("malpi-gaj-w-hotelu-pastelowy-raj");

export default function MalpiGajWHoteluPastelowyRajPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("malpi-gaj-w-hotelu-pastelowy-raj")} />
      <ProjectLayout data={data} />
    </>
  );
}
