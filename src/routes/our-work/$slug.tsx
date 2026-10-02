import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { findGalleryCategory } from "@/data/gallery";
import { DEMO } from "@/data/studio";
import { caseStudies, findCaseStudy } from "@/data/work";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/our-work/$slug")({
  head: ({ params }) => {
    const study = findCaseStudy(params.slug);
    return pageHead({
      title: study ? study.title : "Portfolio Study",
      description:
        study?.direction ??
        "Portfolio study from the studio — direction, makeup, hair and lighting notes with illustrative demo imagery.",
      path: `/our-work/${params.slug}`,
    });
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const study = findCaseStudy(slug);

  if (!study) {
    return (
      <PageShell>
        <section className="pg-section">
          <div className="section-inner pg-empty">
            <SectionLabel>PORTFOLIO</SectionLabel>
            <EditorialHeading size="lg">That study isn&apos;t in the portfolio.</EditorialHeading>
            <p className="pg-muted">
              The study you followed may have been renamed. Browse the full portfolio instead.
            </p>
            <Button asChild className="editorial-primary">
              <Link to="/our-work">
                VIEW OUR WORK <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const category = findGalleryCategory(study.related);
  const position = caseStudies.findIndex((item) => item.slug === study.slug) + 1;

  return (
    <PageShell>
      <InnerPageHero
        label={study.label}
        title={<>{study.title}</>}
        support={study.direction}
        image={study.hero}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Work", to: "/our-work" },
          { label: study.title },
        ]}
        note={DEMO.portfolio}
      />

      <section className="pg-section pg-study-detail" aria-labelledby="study-notes">
        <div className="section-inner pg-split">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number={String(position).padStart(2, "0")}>THE BRIEF</SectionLabel>
            <EditorialHeading id="study-notes">
              {study.category} <em>study.</em>
            </EditorialHeading>
            <p className="pg-muted">{study.direction}</p>
            <dl className="pg-study-facts is-stacked">
              <div>
                <dt>Look</dt>
                <dd>{study.look}</dd>
              </div>
              <div>
                <dt>Makeup</dt>
                <dd>{study.makeup}</dd>
              </div>
              <div>
                <dt>Hair</dt>
                <dd>{study.hair}</dd>
              </div>
              <div>
                <dt>Light</dt>
                <dd>{study.lighting}</dd>
              </div>
            </dl>
          </div>
          <div className="pg-split-media" data-reveal>
            <PageImage image={study.gallery[0] ?? study.hero} showLabel />
          </div>
        </div>
      </section>

      <section className="pg-section pg-study-gallery" aria-labelledby="study-frames">
        <div className="section-inner">
          <SectionLabel number="02">THE FRAMES</SectionLabel>
          <EditorialHeading id="study-frames">
            Seen at <em>portrait distance.</em>
          </EditorialHeading>
          <ImageGrid items={study.gallery} variant="mosaic" showLabels />
          <p className="pg-demo-note">
            {DEMO.portfolio} — these frames are illustrative demo imagery, not a real client result.
          </p>
        </div>
      </section>

      {category ? (
        <section className="pg-section pg-related" aria-labelledby="study-related">
          <div className="section-inner">
            <SectionLabel number="03">RELATED LOOKS</SectionLabel>
            <EditorialHeading id="study-related" size="lg">
              More {category.title.toLowerCase()}, <em>in the archive.</em>
            </EditorialHeading>
            <Link
              to="/gallery/$category"
              params={{ category: category.slug }}
              className="pg-related-card is-wide"
              data-reveal
            >
              <div className="pg-related-image">
                <PageImage image={category.cover} showLabel />
              </div>
              <div className="pg-related-meta">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ArrowUpRight size={19} aria-hidden="true" />
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <CTASection
        label="BRING THE REFERENCE"
        title={
          <>
            Make it <em>yours.</em>
          </>
        }
        support="Send the study you like and the studio will translate it around your features, outfit and occasion."
        image={study.hero}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/our-work">
            ALL STUDIES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
