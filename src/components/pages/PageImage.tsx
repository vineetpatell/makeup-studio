import { EditorialImage } from "@/components/home/EditorialImage";
import type { DemoImage } from "@/data/images";

/**
 * Renders a registry image through the shared EditorialImage primitive and
 * carries the image's art direction (crop, mobile crop, demo label).
 */
export function PageImage({
  image,
  className,
  eager = false,
  position,
  showLabel = false,
}: {
  image: DemoImage;
  className?: string;
  eager?: boolean;
  position?: string;
  showLabel?: boolean;
}) {
  const style = image.mobilePosition
    ? ({ "--pg-mobile-position": image.mobilePosition } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`pg-image${image.mobilePosition ? " has-mobile-crop" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      <EditorialImage
        src={image.src}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        objectPosition={position ?? image.position ?? "center"}
        fallback="Demo imagery will appear here"
        {...(image.aspect ? { aspectRatio: image.aspect } : {})}
      />
      {showLabel && image.label ? <span className="pg-image-label">{image.label}</span> : null}
    </div>
  );
}
