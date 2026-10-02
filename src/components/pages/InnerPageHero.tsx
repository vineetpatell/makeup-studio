import type { ReactNode } from "react";
import type { DemoImage } from "@/data/images";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { PageImage } from "./PageImage";
import { SectionLabel } from "./SectionLabel";

/**
 * Cinematic hero for the inner pages: full-bleed demo photograph, gradient
 * shade, breadcrumb, label, headline, supporting line and optional actions.
 */
export function InnerPageHero({
  label,
  title,
  support,
  image,
  breadcrumb,
  actions,
  size = "default",
  note,
}: {
  label: string;
  title: ReactNode;
  support?: string;
  image: DemoImage;
  breadcrumb?: Crumb[];
  actions?: ReactNode;
  size?: "default" | "compact";
  note?: string;
}) {
  return (
    <section className={`pg-hero${size === "compact" ? " is-compact" : ""}`}>
      <div className="pg-hero-media" aria-hidden={image.alt ? undefined : "true"}>
        <PageImage image={image} eager />
      </div>
      <div className="pg-hero-shade" aria-hidden="true" />
      <div className="pg-hero-inner section-inner">
        {breadcrumb && breadcrumb.length > 0 ? <Breadcrumb items={breadcrumb} /> : null}
        <SectionLabel>{label}</SectionLabel>
        <h1 className="pg-hero-title">{title}</h1>
        {support ? <p className="pg-hero-support">{support}</p> : null}
        {actions ? <div className="pg-hero-actions">{actions}</div> : null}
      </div>
      {note ? <span className="pg-hero-note">{note}</span> : null}
    </section>
  );
}
