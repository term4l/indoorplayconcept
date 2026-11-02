import type { Metadata } from "next";
import { pageMetadata, pageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Projekty3dView } from "@/components/pages/sale-zabaw-projekty-3d/Projekty3dView";

export const metadata: Metadata = pageMetadata("sale-zabaw-projekty-3d");

export default function SaleZabawProjekty3dPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("sale-zabaw-projekty-3d")} />
      <Projekty3dView />
    </>
  );
}
