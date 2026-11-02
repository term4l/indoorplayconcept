import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MediaView } from "@/components/pages/media/MediaView";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("media");

export default function MediaPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("media")} />
      <MediaView />
    </>
  );
}
