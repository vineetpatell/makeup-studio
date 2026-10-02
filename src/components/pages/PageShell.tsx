import { useRef, type ReactNode } from "react";
import { usePageReveal } from "@/lib/use-page-reveal";
import { MobileActions } from "./MobileActions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/**
 * Shell for every inner page: header, entrance transition, restrained
 * IntersectionObserver reveals, footer and mobile action bar.
 *
 * The homepage hero keeps sole ownership of Lenis/GSAP (see AGENTS.md); these
 * pages intentionally use native scroll plus light CSS reveals.
 */
export function PageShell({ children, className }: { children: ReactNode; className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageReveal(rootRef);

  return (
    <div ref={rootRef} className={`pg${className ? ` ${className}` : ""}`}>
      <SiteHeader />
      <main className="pg-main">
        <div className="pg-transition">{children}</div>
      </main>
      <SiteFooter />
      <MobileActions />
    </div>
  );
}
