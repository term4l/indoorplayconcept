import { Fragment } from "react";
import type { Inline, Paragraph } from "@/data/content/projects/types";

function renderInline(part: Inline, i: number) {
  if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
  if ("b" in part) return <b key={i}>{part.b}</b>;
  return <br key={i} />;
}

/** Akapity z pogrubieniami – odpowiednik widżetu „text-editor” z Elementora. */
export function RichText({ paragraphs, className }: { paragraphs: Paragraph[]; className?: string }) {
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={className}>
          {p.map(renderInline)}
        </p>
      ))}
    </>
  );
}
