import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePage } from "@/components/pages/services/ServicePage";
import { serwisContent } from "@/data/content/serwis-sal-zabaw";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("serwis-sal-zabaw");

export default function SerwisPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("serwis-sal-zabaw")} />
      <ServicePage content={serwisContent} />
    </>
  );
}
