import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/pages/legal/LegalPage";
import { privacySections } from "@/components/pages/polityka-prywatnosci/content";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("polityka-prywatnosci");

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("polityka-prywatnosci")} />
      <LegalPage
        title="Polityka Prywatności"
        subtitle="Ochrona i przetwarzanie Twoich danych"
        lead="Dowiedz się jak dbamy o ochronę Twoich danych osobowych."
        image="https://indoorplayconcept.com/wp-content/uploads/2025/12/photo-1520607162513-77705c0f0d4a.avif"
        sections={privacySections}
      />
    </>
  );
}
