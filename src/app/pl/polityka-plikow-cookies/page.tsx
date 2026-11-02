import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/pages/legal/LegalPage";
import { cookiesSections } from "@/components/pages/polityka-plikow-cookies/content";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("polityka-plikow-cookies");

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("polityka-plikow-cookies")} />
      <LegalPage
        title="Polityka Plików Cookies"
        subtitle="Ochrona i przetwarzanie plików cookies"
        lead="Dowiedz się jak dbamy o ochronę Twoich danych osobowych."
        image="https://indoorplayconcept.com/wp-content/uploads/2025/12/photo-1520607162513-77705c0f0d4a.avif"
        sections={cookiesSections}
      />
    </>
  );
}
