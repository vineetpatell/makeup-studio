import type { CSSProperties } from "react";

/**
 * The site's one image frame.
 *
 * Every content image in the layout sits inside a Frame, so photographs always
 * read as designed objects rather than floating crops. The frame owns the aspect
 * ratio, the clipping, the hairline border and the placeholder tone; the image
 * inside is always `opacity: 1` — visibility is never an animation's
 * responsibility, so a missing script, a slow network or a failed trigger can
 * never leave a hole in the page.
 */
export type FrameRatio = "portrait" | "tall" | "square" | "landscape" | "wide";

export type FrameProps = {
  src: string;
  alt: string;
  ratio?: FrameRatio;
  /** Extra class on the frame, e.g. a grid placement or size modifier. */
  className?: string;
  /** Above-the-fold images skip lazy loading. */
  priority?: boolean;
  objectPosition?: string;
  style?: CSSProperties;
  /** Opt into the homepage scroll-reveal system (see home/motion.ts). */
  reveal?: "sm" | "md" | "lg";
  /** Rendered over the image (badges, counters). */
  children?: React.ReactNode;
};

export function Frame({
  src,
  alt,
  ratio = "portrait",
  className,
  priority = false,
  objectPosition,
  style,
  reveal,
  children,
}: FrameProps) {
  return (
    <figure
      className={`frame frame--${ratio}${className ? ` ${className}` : ""}`}
      style={style}
      {...(reveal ? { "data-reveal": reveal } : {})}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
      {children}
    </figure>
  );
}
