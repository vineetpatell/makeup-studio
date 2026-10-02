import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Homepage scroll motion.
 *
 * One system, one authority. The hero keeps sole ownership of Lenis and the
 * shared gsap ticker (see AGENTS.md); everything below it is a plain
 * ScrollTrigger entrance created inside a single `gsap.matchMedia()` gated on
 * `prefers-reduced-motion: no-preference`.
 *
 * Rules this file enforces, so the page can never drift back into the state
 * where animation decides whether content exists:
 *
 *  - Content is visible by default. The hidden state is written only when a
 *    tween actually plays (`immediateRender: false`), so a trigger that never
 *    fires leaves a fully readable section rather than an empty one.
 *  - Only `opacity` and `transform` animate. No clip-path, no `autoAlpha` (so
 *    nothing is ever left `visibility: hidden`), no layout properties.
 *  - `toggleActions: "play reverse play reverse"` — enter plays, leaving resets,
 *    re-entering plays again, in both scroll directions.
 *  - Each block is scoped to its own element, so one section can never animate
 *    another section's content.
 *  - Under reduced motion nothing animates and nothing is hidden.
 */

type RevealSize = "sm" | "md" | "lg";

const REVEAL_PRESETS: Record<RevealSize, { y: number; duration: number }> = {
  sm: { y: 14, duration: 0.6 },
  md: { y: 22, duration: 0.75 },
  lg: { y: 34, duration: 0.9 },
};

/** Wire up `[data-reveal]` elements inside one block, in document order. */
function revealWithin(scope: HTMLElement, stagger: number) {
  const items = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (items.length === 0) return;

  items.forEach((item, index) => {
    const preset =
      REVEAL_PRESETS[(item.dataset["reveal"] as RevealSize) || "md"] ?? REVEAL_PRESETS.md;
    gsap.fromTo(
      item,
      { opacity: 0, y: preset.y },
      {
        opacity: 1,
        y: 0,
        duration: preset.duration,
        ease: "power3.out",
        delay: Math.min(index, 6) * stagger,
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      },
    );
  });
}

/** Each block owns its own scope and its own stagger. */
const BLOCKS: [string, number][] = [
  [".intro-section", 0.08],
  [".services-section", 0.1],
  [".work-section", 0.1],
  [".experience-section", 0.08],
  [".academy-section", 0.09],
  [".studio-section", 0.08],
  [".proof-section", 0.08],
  [".closing-section", 0.08],
  [".site-footer", 0.05],
];

export function useEditorialMotion(rootRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      BLOCKS.forEach(([selector, stagger]) => {
        const block = root.querySelector<HTMLElement>(selector);
        if (block) revealWithin(block, stagger);
      });
    });

    return () => {
      media.revert();
      // Leave no inline animation state behind on unmount or route change.
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.set(item, { clearProps: "opacity,transform" });
      });
    };
  }, [rootRef]);
}
