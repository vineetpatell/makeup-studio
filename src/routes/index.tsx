import { createFileRoute } from "@tanstack/react-router";
import { BeautyHero } from "@/components/hero/BeautyHero";
import { HomeChapters } from "@/components/home/HomeChapters";
import { Navbar } from "@/components/layout/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Art of Transformation | Makeup Artistry & Education" },
      {
        name: "description",
        content: "A cinematic exploration of professional makeup artistry and makeup education.",
      },
      { property: "og:title", content: "The Art of Transformation | Makeup Artistry & Education" },
      {
        property: "og:description",
        content: "A cinematic exploration of professional makeup artistry and makeup education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <BeautyHero />
      {/* The capsule stays hidden across the whole pinned hero and fades in from
          Section 02. The hero itself is untouched — the nav is a sibling, and the
          boundary is the existing "02 Introduction" section, not a timer. */}
      <Navbar boundary=".intro-section" />
      <HomeChapters />
    </>
  );
}
