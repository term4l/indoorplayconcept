import type { Metadata } from "next";
import { pageMetadata, pageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { HomeView } from "@/components/pages/home/HomeView";

export const metadata: Metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("home")} />
      <HomeView />
    </>
  );
}
