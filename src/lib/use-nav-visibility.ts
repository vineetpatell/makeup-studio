import { useEffect, useRef } from "react";
import { ScrollTrigger } from "./gsap";

/**
 * Floating-navbar visibility, driven by a scroll boundary rather than a timer.
 *
 * The hero owns Lenis and the single gsap ticker (see AGENTS.md), so this hook
 * adds nothing to the animation architecture: it creates ONE ScrollTrigger that
 * only *toggles state* on the nav element, and the enter/exit transition itself
 * is pure CSS. That keeps the reveal working in both scroll directions, keeps
 * reduced-motion users on an instant (opacity-only) path, and means no second
 * requestAnimationFrame loop exists.
 *
 * `boundary` is the selector of the first section that should show the nav
 * (the homepage passes the "02 Introduction" section, so the nav stays hidden
 * across the whole pinned hero). Omit it — as the inner pages do — and the nav is
 * simply always visible.
 */
export function useNavVisibility<Nav extends HTMLElement>(boundary?: string) {
  const ref = useRef<Nav>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!boundary) return;
    if (!nav) return;

    const section = document.querySelector<HTMLElement>(boundary);
    // No boundary element (or no JS) means there is nothing to hide behind.
    if (!section) return;

    const apply = (visible: boolean) => {
      nav.dataset["navVisible"] = visible ? "true" : "false";
      // Keep the hidden capsule out of the tab order and the a11y tree while it
      // sits over the hero.
      nav.toggleAttribute("inert", !visible);
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      // Show once the first below-hero section has climbed most of the viewport,
      // and keep it for the rest of the document.
      start: "top 72%",
      end: "max",
      invalidateOnRefresh: true,
      onToggle: (self) => apply(self.isActive),
    });

    // Re-sync after late layout shifts (late-loading images, hero refresh).
    const onRefresh = () => apply(trigger.isActive);
    ScrollTrigger.addEventListener("refresh", onRefresh);

    apply(trigger.isActive);

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      trigger.kill();
    };
  }, [boundary]);

  return ref;
}
