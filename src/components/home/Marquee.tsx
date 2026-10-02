import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import type { CarouselSlide } from "./content";

/**
 * A continuously moving image marquee.
 *
 * The track holds the set twice and is translated from 0 to -50% on an
 * infinite loop, so the second copy lands exactly where the first began and the
 * seam is invisible. This replaces the previous scroll-snap + interval slider:
 * there is no snap, no arrow, no scroll position to keep in sync, and nothing
 * for the visitor to operate. One GSAP tween per instance.
 *
 * Interaction is purely additive and never affects layout:
 *  - pointer over the stage  -> the tween pauses; leaving resumes it
 *  - pointer over one image  -> that frame scales up, its neighbours ease back
 * The focus state is mirrored onto the matching frame in the duplicate half, so
 * whichever copy is on screen reacts.
 *
 * Each item's accessible name comes from its own contents (the image's alt plus
 * the visible category caption), so no `aria-label` is needed and the name stays
 * correct whether or not the track is moving.
 *
 * Under `prefers-reduced-motion` the tween is never created: a single static,
 * fully framed set is rendered instead.
 */

type FocusState = "idle" | "focus" | "near" | "rest";

export type MarqueeProps = {
  slides: CarouselSlide[];
  /** Seconds for one full cycle of the doubled track. */
  duration?: number;
  /** Visual weight of the frames. */
  scale?: "standard" | "large";
  label: string;
};

export function Marquee({ slides, duration = 24, scale = "standard", label }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [focus, setFocus] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;
    // -50% of the doubled track is exactly one set, which is what makes the
    // loop seamless.
    const tween = gsap.fromTo(
      track,
      { xPercent: 0 },
      { xPercent: -50, duration, ease: "none", repeat: -1 },
    );
    tweenRef.current = tween;
    return () => {
      tween.kill();
      gsap.set(track, { clearProps: "transform" });
    };
  }, [duration, reduced]);

  if (slides.length === 0) return null;

  const stateFor = (index: number): FocusState => {
    if (focus === null || reduced) return "idle";
    if (index === focus) return "focus";
    return Math.abs(index - focus) === 1 ? "near" : "rest";
  };

  const set = (key: string) => (
    <div className="marquee-set" key={key} aria-hidden={key === "b" || undefined}>
      {slides.map((slide, index) => (
        <button
          type="button"
          className="marquee-item"
          data-focus={stateFor(index)}
          key={slide.key}
          onPointerEnter={() => setFocus(index)}
          onPointerLeave={() => setFocus(null)}
          onFocus={() => setFocus(index)}
          onBlur={() => setFocus(null)}
          tabIndex={key === "a" ? 0 : -1}
        >
          {/* The caption is a SIBLING of the frame, not a child: the frame is
              `overflow: hidden` with a fixed aspect ratio, so anything inside
              it would be clipped away and never seen. */}
          <span className="marquee-frame">
            <img
              src={slide.image.src}
              alt={slide.image.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: slide.image.position ?? "center" }}
            />
          </span>
          <span className="marquee-caption">{slide.category}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee marquee--${scale}`}
      aria-label={label}
      role="group"
      onPointerEnter={() => tweenRef.current?.pause()}
      onPointerLeave={() => {
        setFocus(null);
        tweenRef.current?.resume();
      }}
    >
      <div className="marquee-track" ref={trackRef}>
        {set("a")}
        {reduced ? null : set("b")}
      </div>
    </div>
  );
}
