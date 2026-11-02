import type { Metadata } from "next";
import { MagazineView } from "@/components/MagazineView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("play-magazine");

export default function PlayMagazinePage() {
  return <MagazineView page={1} />;
}
