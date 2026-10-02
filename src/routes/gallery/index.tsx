import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { FAQ } from "@/components/pages/FAQ";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { GALLERY_FAQ } from "@/data/faq";
import { galleryCategories } from "@/data/gallery";
import { images } from "@/data/images";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery/")({
  head: () =>
    pageHead({
      title: "Gallery",
      description: "A visual collection of makeup, hair, texture, expression and transformation.",
      path: "/gallery",
    }),
  component: GalleryArchivePage,
});

function GalleryArchivePage() {
  return (
    <PageShell>
      <InnerPageHero
        label="THE BEAUTY ARCHIVE"
        title={
          <>
            The beauty
            <br />
            <em>archive.</em>
          </>
        }
        support="A visual collection of makeup, hair, texture, expression and transformation."
        image={images.hero.gallery}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        note="ALL IMAGERY IS ILLUSTRATIVE DEMO PHOTOGRAPHY"
      />

      <section className="pg-section pg-archive" aria-labelledby="archive-categories">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">CATEGORIES</SectionLabel>
              <EditorialHeading id="archive-categories">
                Seventeen ways <em>to look.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Browse by look, technique or styling. Every category is a separate archive page with
              its own sequence of imagery.
            </p>
          </div>

          <div className="pg-category-grid">
            {galleryCategories.map((category, index) => (
              <Link
                key={category.slug}
                to="/gallery/$category"
                params={{ category: category.slug }}
                className={`pg-category-card span-${(index % 5) + 1}`}
                data-reveal
                style={{ "--reveal-delay": `${(index % 5) * 60}ms` } as CSSProperties}
              >
                <div className="pg-category-image">
                  <PageImage image={category.cover} showLabel />
                </div>
                <div className="pg-category-meta">
                  <span className="pg-category-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.short}</p>
                  </div>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={GALLERY_FAQ}
        label="ABOUT THIS COLLECTION"
        title={
          <>
            Honest about <em>the images.</em>
          </>
        }
        support="This showcase build uses illustrative demo photography throughout, clearly labelled in the content layer."
        className="pg-archive-faq"
      />

      <CTASection
        label="FROM ARCHIVE TO APPOINTMENT"
        title={
          <>
            Found a look? <em>Book it.</em>
          </>
        }
        support="Mention the look when you enquire and it will be shaped around your features, outfit and occasion."
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/our-work">
            VIEW THE WORK <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
