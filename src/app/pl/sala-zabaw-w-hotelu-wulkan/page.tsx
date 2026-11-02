import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectLayout } from "@/components/pages/project/ProjectLayout";
import { salaZabawWHoteluWulkan as data } from "@/data/content/projects/sala-zabaw-w-hotelu-wulkan";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sala-zabaw-w-hotelu-wulkan");

export default function SalaZabawWHoteluWulkanPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("sala-zabaw-w-hotelu-wulkan")} />
      <ProjectLayout data={data} />
    </>
  );
}
