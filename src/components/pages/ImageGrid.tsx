import type { DemoImage } from "@/data/images";
import { PageImage } from "./PageImage";

/**
 * Editorial image grid with art-directed spans.
 * variants: duo (two large), trio (three), editorial (asymmetric 4-5),
 * mosaic (dense mixed sizes).
 */
export function ImageGrid({
  items,
  variant = "editorial",
  showLabels = false,
  className,
  eager = false,
}: {
  items: DemoImage[];
  variant?: "duo" | "trio" | "editorial" | "mosaic";
  showLabels?: boolean;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`pg-grid is-${variant}${className ? ` ${className}` : ""}`}>
      {items.map((image, index) => (
        <figure
          key={`${image.id}-${index}`}
          className={`pg-grid-item span-${(index % 6) + 1}`}
          data-reveal
          style={{ "--reveal-delay": `${(index % 6) * 70}ms` } as React.CSSProperties}
        >
          <PageImage image={image} showLabel={showLabels} eager={eager && index < 2} />
        </figure>
      ))}
    </div>
  );
}
