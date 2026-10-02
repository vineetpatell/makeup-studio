import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { imageUrl, type DemoImage } from "@/data/images";
import { PageImage } from "./PageImage";

/**
 * Gallery grid with an accessible lightbox.
 * Tiles are real buttons; the dialog handles Escape, focus trapping and the
 * close affordance, and prev/next move through the set.
 */
export function GalleryGrid({
  items,
  showLabels = true,
  className,
  eager = false,
}: {
  items: DemoImage[];
  showLabels?: boolean;
  className?: string;
  eager?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? undefined : items[openIndex];
  const hasActive = Boolean(active);

  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = (current + direction + items.length) % items.length;
        return next;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!hasActive) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasActive, step]);

  return (
    <div className={`pg-gallery-grid${className ? ` ${className}` : ""}`}>
      {items.map((image, index) => (
        <button
          type="button"
          key={`${image.id}-${index}`}
          className={`pg-gallery-tile span-${(index % 7) + 1}`}
          onClick={() => setOpenIndex(index)}
          aria-label={`Open image: ${image.alt}`}
          data-reveal
          style={{ "--reveal-delay": `${(index % 7) * 60}ms` } as React.CSSProperties}
        >
          <PageImage image={image} showLabel={showLabels} eager={eager && index < 3} />
        </button>
      ))}

      <Dialog
        open={hasActive}
        onOpenChange={(open) => setOpenIndex(open ? (openIndex ?? 0) : null)}
      >
        {active ? (
          <DialogContent className="pg-lightbox">
            <DialogTitle className="sr-only">{active.alt}</DialogTitle>
            <img src={imageUrl(active.id, 1600)} alt={active.alt} className="pg-lightbox-image" />
            <div className="pg-lightbox-bar">
              {active.label ? <span className="pg-lightbox-label">{active.label}</span> : <span />}
              <div className="pg-lightbox-nav">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                  <ArrowLeft aria-hidden="true" size={16} />
                </button>
                <span>
                  {(openIndex ?? 0) + 1} / {items.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next image">
                  <ArrowRight aria-hidden="true" size={16} />
                </button>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
}
