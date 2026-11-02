import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/pages/legal/LegalPage";
import { accessibilitySections } from "@/components/pages/deklaracja-dostepnosci/content";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("deklaracja-dostepnosci");

export default function AccessibilityStatementPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("deklaracja-dostepnosci")} />
      <LegalPage
        title="Deklaracja dostępności"
        subtitle={<>Dostępność serwisu <br />indoorplayconcept.com</>}
        lead="Chcemy, aby każdy — w tym osoby z niepełnosprawnościami — mógł wygodnie korzystać z naszego serwisu. Poniżej opisujemy stan zgodności i sposób zgłaszania problemów."
        image="https://indoorplayconcept.com/wp-content/uploads/2025/12/photo-1522199755839-a2bacb67c546.avif"
        sections={accessibilitySections}
      />
    </>
  );
}
