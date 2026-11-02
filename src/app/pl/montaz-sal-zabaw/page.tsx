import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePage } from "@/components/pages/services/ServicePage";
import { montazContent } from "@/data/content/montaz-sal-zabaw";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("montaz-sal-zabaw");

export default function MontazPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("montaz-sal-zabaw")} />
      <ServicePage content={montazContent} />
    </>
  );
}
