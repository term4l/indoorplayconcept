import type { Metadata } from "next";
import { pageMetadata, pageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { KalkulatorRoiView } from "@/components/pages/kalkulator-roi/KalkulatorRoiView";

export const metadata: Metadata = pageMetadata("kalkulator-roi");

export default function KalkulatorRoiPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("kalkulator-roi")} />
      <KalkulatorRoiView />
    </>
  );
}
