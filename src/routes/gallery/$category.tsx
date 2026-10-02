import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/pages/BeforeAfter";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { GalleryGrid } from "@/components/pages/GalleryGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import type { DemoImage } from "@/data/images";
import { findGalleryCategory, galleryCategories, relatedCategories } from "@/data/gallery";
import { services, type Service } from "@/data/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery/$category")({
  head: ({ params }) => {
    const category = findGalleryCategory(params.category);
    return pageHead({
      title: category ? `Gallery — ${category.title}` : "Gallery",
      description:
        category?.description ??
        "Browse the studio archive of makeup, hair, draping and transformation imagery.",
      path: `/gallery/${params.category}`,
    });
  },
  component: GalleryCategoryPage,
});

type TransformationPair = { service: Service; before: DemoImage; after: DemoImage };

function GalleryCategoryPage() {
  const { category: slug } = Route.useParams();
  const category = findGalleryCategory(slug);

  if (!category) {
    return (
      <PageShell>
        <section className="pg-section">
          <div className="section-inner pg-empty">
            <SectionLabel>GALLERY</SectionLabel>
            <EditorialHeading size="lg">
              That collection isn&apos;t in the archive.
            </EditorialHeading>
            <p className="pg-muted">
              The category you followed may have been renamed. Browse the full archive instead.
            </p>
            <Button asChild className="editorial-primary">
              <Link to="/gallery">
                VIEW THE ARCHIVE <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const position = galleryCategories.findIndex((item) => item.slug === category.slug) + 1;
  const related = relatedCategories(category);
  const transformations: TransformationPair[] = services
    .map((service) => ({ service, before: service.images.before, after: service.images.after }))
    .filter((pair): pair is TransformationPair => Boolean(pair.before && pair.after))
    .slice(0, 4);

  return (
    <PageShell>
      <InnerPageHero
        label={`GALLERY ${String(position).padStart(2, "0")} — ${category.title.toUpperCase()}`}
        title={<>{category.title}</>}
        support={category.description}
        image={category.hero}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Gallery", to: "/gallery" },
          { label: category.title },
        ]}
        note={category.label ?? "ILLUSTRATIVE DEMO PHOTOGRAPHY"}
      />

      <section className="pg-section" aria-labelledby="category-looks">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">LOOKS</SectionLabel>
              <EditorialHeading id="category-looks">
                {category.title}, <em>in sequence.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Open any frame for a larger view. All imagery in this archive is illustrative demo
              photography, labelled in the content layer.
            </p>
          </div>
          <GalleryGrid items={category.grid} showLabels />
        </div>
      </section>

      {transformations.length > 0 ? (
        <section className="pg-section pg-transformation" aria-labelledby="category-transformation">
          <div className="section-inner">
            <SectionLabel number="02">TRANSFORMATION STUDIES</SectionLabel>
            <EditorialHeading id="category-transformation">
              Before / after, <em>clearly labelled.</em>
            </EditorialHeading>
            <div className="pg-ba-grid">
              {transformations.map((pair) => (
                <BeforeAfter
                  key={pair.service.slug}
                  before={pair.before}
                  after={pair.after}
                  title={pair.service.title}
                  caption="DEMO TRANSFORMATION — illustrative stock imagery, not a real client result."
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pg-section pg-related" aria-labelledby="category-related">
        <div className="section-inner">
          <SectionLabel number="03">RELATED LOOKS</SectionLabel>
          <EditorialHeading id="category-related" size="lg">
            More from the <em>archive.</em>
          </EditorialHeading>
          <div className="pg-related-grid is-categories">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/gallery/$category"
                params={{ category: item.slug }}
                className="pg-related-card"
                data-reveal
              >
                <div className="pg-related-image">
                  <PageImage image={item.cover} showLabel />
                </div>
                <div className="pg-related-meta">
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <Button asChild variant="link" className="editorial-link">
            <Link to="/gallery">
              BACK TO THE ARCHIVE <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection
        label="BOOK THIS LOOK"
        title={
          <>
            See it on <em>your face.</em>
          </>
        }
        support="Mention the category when you enquire — the look will be shaped around your features, outfit and occasion."
        image={category.hero}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/services">
            EXPLORE SERVICES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
