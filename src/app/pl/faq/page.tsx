import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FaqView } from "@/components/pages/faq/FaqView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("faq")} />
      <FaqView />
    </>
  );
}
