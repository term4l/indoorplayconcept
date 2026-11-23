import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { StrefaKlientaView } from "@/components/pages/strefa-klienta/StrefaKlientaView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("strefa-klienta");

export default function StrefaKlientaPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("strefa-klienta")} />
      <StrefaKlientaView />
    </>
  );
}
