import { useEffect, useRef, useState } from "react";

type EditorialImageProps = {
  src?: string;
  alt: string;
  wide?: boolean;
  className?: string;
  aspectRatio?: string;
  objectPosition?: string;
  fallback?: string;
  loading?: "lazy" | "eager";
};

/**
 * Inner-page image primitive.
 *
 * Kept as a separate, minimal component because the inner routes (gallery,
 * services, academy…) still target its `.editorial-image` class contract in
 * styles/pages-*.css.
 *
 * Note the image is *never* hidden while loading: the placeholder layer sits
 * behind it and the photograph simply paints over the top once it decodes, so a
 * slow or failed request can never produce an empty box. An image that completes
 * before React attaches onLoad is reconciled from the element itself, which is
 * the case a naive `onLoad`-only implementation silently loses.
 */
export function EditorialImage({
  src,
  alt,
  wide = false,
  className = "",
  aspectRatio,
  objectPosition = "center",
  fallback = "Illustrative image",
  loading = "lazy",
}: EditorialImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  useEffect(() => {
    const image = imgRef.current;
    if (!image?.complete) return;
    if (image.naturalWidth > 0) setLoaded(true);
    else setFailed(true);
  }, [src]);

  return (
    <div
      className={`editorial-image${wide ? " editorial-image-wide" : ""}${loaded ? " is-loaded" : ""}${failed || !src ? " is-fallback" : ""}${className ? ` ${className}` : ""}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      data-image-state={failed ? "failed" : loaded ? "loaded" : "loading"}
    >
      <div className="editorial-image-fallback" aria-hidden="true">
        <span className="editorial-fallback-mark">
          M<span>·</span>A
        </span>
        <span className="editorial-fallback-caption">{fallback}</span>
      </div>
      {src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          width={wide ? 1536 : 1024}
          height={wide ? 1024 : 1280}
          style={{ objectPosition }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
