import { useState } from "react";
import { DEMO } from "@/data/studio";
import type { DemoImage } from "@/data/images";
import { EditorialHeading } from "./EditorialHeading";
import { PageImage } from "./PageImage";
import { SectionLabel } from "./SectionLabel";

/**
 * Before/after comparison slider.
 * A range input drives the reveal, so it works with keyboard and touch as well
 * as pointer drags. Imagery is demo stock and labelled as such.
 */
export function BeforeAfter({
  before,
  after,
  title,
  label = DEMO.transformation,
  caption,
}: {
  before: DemoImage;
  after: DemoImage;
  title?: string;
  label?: string;
  caption?: string;
}) {
  const [value, setValue] = useState(52);

  return (
    <div className="pg-ba" data-reveal>
      {title ? (
        <div className="pg-ba-head">
          <SectionLabel>{label}</SectionLabel>
          <EditorialHeading size="sm">{title}</EditorialHeading>
        </div>
      ) : null}

      <div className="pg-ba-frame">
        <div className="pg-ba-layer is-before">
          <PageImage image={before} />
        </div>
        <div className="pg-ba-layer is-after" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
          <PageImage image={after} />
        </div>
        <div className="pg-ba-handle" style={{ left: `${value}%` }} aria-hidden="true">
          <span />
        </div>
        <span className="pg-ba-tag is-before-tag">BEFORE</span>
        <span className="pg-ba-tag is-after-tag">AFTER</span>
      </div>

      <label className="pg-ba-control">
        <span className="sr-only">Reveal the after image</span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label="Before and after comparison slider"
        />
      </label>

      <p className="pg-ba-caption">
        {caption ?? `${label} — illustrative demo imagery, not a real client result.`}
      </p>
    </div>
  );
}
