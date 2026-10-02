import { useEffect, type RefObject } from "react";

/**
 * Restrained, unpinned reveal motion for the inner pages.
 *
 * The hero keeps sole ownership of Lenis and the GSAP scroll timeline
 * (see AGENTS.md); this hook only toggles an `is-inview` class on
 * `[data-reveal]` elements so CSS can run gentle entrance transitions.
 *
 * The class is *toggled* rather than latched: leaving the viewport removes it
 * and re-entering adds it back, so a section replays its reveal every time it
 * is scrolled into view, in both directions. (An earlier `unobserve()` here made
 * every reveal strictly one-shot.)
 */
export function usePageReveal(ref: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled || reduced || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-inview"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play on enter, reset on exit, so re-entry plays again.
          entry.target.classList.toggle("is-inview", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [ref, enabled]);
}
