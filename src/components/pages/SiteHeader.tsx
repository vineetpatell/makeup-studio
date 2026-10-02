import { Navbar } from "@/components/layout/Navbar";

/**
 * Inner-page navigation.
 *
 * The capsule itself now lives in `components/layout/Navbar.tsx` so the
 * homepage and the inner pages share one implementation. Inner pages have no
 * pinned hero to protect, so no `boundary` is passed and it is simply always
 * visible.
 */
export function SiteHeader() {
  return <Navbar />;
}
