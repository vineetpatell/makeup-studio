import type { ReactNode } from "react";
import type { DemoImage } from "@/data/images";
import { DEMO } from "@/data/studio";
import { EditorialHeading } from "./EditorialHeading";
import { PageImage } from "./PageImage";
import { SectionLabel } from "./SectionLabel";

/**
 * Reusable closing CTA band. Actions arrive as children so every CTA stays a
 * typed router link at the call site.
 */
export function CTASection({
  label = "THE BEGINNING OF SOMETHING BEAUTIFUL",
  title,
  support,
  children,
  image,
  note,
}: {
  label?: string;
  title: ReactNode;
  support?: string;
  children: ReactNode;
  image?: DemoImage;
  note?: string;
}) {
  return (
    <section className={`pg-cta${image ? " has-image" : ""}`} aria-label="Call to action">
      {image ? (
        <>
          <div className="pg-cta-media" aria-hidden="true">
            <PageImage image={image} />
          </div>
          <div className="pg-cta-shade" aria-hidden="true" />
        </>
      ) : null}
      <div className="section-inner pg-cta-inner" data-reveal>
        <SectionLabel>{label}</SectionLabel>
        <EditorialHeading size="xl">{title}</EditorialHeading>
        {support ? <p className="pg-cta-support">{support}</p> : null}
        <div className="pg-cta-actions">{children}</div>
        <p className="pg-cta-note">{note ?? DEMO.form}</p>
      </div>
    </section>
  );
}
