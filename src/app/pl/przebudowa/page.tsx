import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePage } from "@/components/pages/services/ServicePage";
import { przebudowaContent } from "@/data/content/przebudowa";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("przebudowa");

export default function PrzebudowaPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("przebudowa")} />
      <ServicePage content={przebudowaContent} />
    </>
  );
}
