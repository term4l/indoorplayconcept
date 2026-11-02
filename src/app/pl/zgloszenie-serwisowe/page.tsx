import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceView } from "@/components/pages/zgloszenie-serwisowe/ServiceView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("zgloszenie-serwisowe");

export default function ZgloszenieSerwisowePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("zgloszenie-serwisowe")} />
      <ServiceView />
    </>
  );
}
