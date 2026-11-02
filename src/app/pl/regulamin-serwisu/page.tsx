import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/pages/legal/LegalPage";
import { termsSections } from "@/components/pages/regulamin-serwisu/content";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("regulamin-serwisu");

export default function TermsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("regulamin-serwisu")} />
      <LegalPage
        title="Regulamin serwisu"
        subtitle="Zasady korzystania ze strony"
        lead="Przejrzyste zasady, odpowiedzialność i prawa użytkowników."
        image="https://indoorplayconcept.com/wp-content/uploads/2025/12/photo-1520607162513-77705c0f0d4a.avif"
        sections={termsSections}
      />
    </>
  );
}
