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
import { DEMO } from "@/data/studio";
import { images } from "@/data/images";
import { caseStudies } from "@/data/work";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/our-work/")({
  head: () =>
    pageHead({
      title: "Our Work",
      description:
        "Portfolio studies covering bridal, editorial, soft glam and reception work — each labelled as a demo study.",
      path: "/our-work",
    }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="THE WORK"
        title={
          <>
            Looks, studied
            <br />
            <em>frame by frame.</em>
          </>
        }
        support="Portfolio studies covering bridal, editorial, soft glam and reception work — each one documented from direction to finished frame."
        image={images.hero.work}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Our Work" }]}
        note={DEMO.portfolio}
      />

      <section className="pg-section pg-work-index" aria-labelledby="work-index">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">PORTFOLIO STUDIES</SectionLabel>
              <EditorialHeading id="work-index">
                Four studies, <em>one approach.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              {DEMO.portfolio} — illustrative demo imagery standing in for real client work until
              the studio&apos;s own photography is supplied.
            </p>
          </div>

          <div className="pg-study-list">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className={`pg-study${index % 2 === 1 ? " is-reverse" : ""}`}
                data-reveal
              >
                <div className="pg-study-media">
                  <PageImage image={study.hero} showLabel />
                </div>
                <div className="pg-study-copy">
                  <span className="pg-study-index">{String(index + 1).padStart(2, "0")}</span>
                  <SectionLabel>{study.label}</SectionLabel>
                  <h3 className="pg-study-title">{study.title}</h3>
                  <p className="pg-study-category">{study.category}</p>
                  <p className="pg-muted">{study.direction}</p>
                  <dl className="pg-study-facts">
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
                  <Button asChild variant="link" className="editorial-link">
                    <Link to="/our-work/$slug" params={{ slug: study.slug }}>
                      READ THE STUDY <ArrowUpRight aria-hidden="true" size={17} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-work-approach" aria-labelledby="work-approach">
        <div className="section-inner pg-split is-reverse">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="02">THE APPROACH</SectionLabel>
            <EditorialHeading id="work-approach">
              Documented, not <em>decorated.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Each study records what was actually decided — the direction, the makeup, the hair and
              the light. Process notes matter more than adjectives because they can be repeated on a
              real face.
            </p>
            <ul className="pg-list">
              <li>Direction agreed before the first brush</li>
              <li>Skin prepared and complexion matched to the light</li>
              <li>Colour and structure built for the camera</li>
              <li>Finishing notes recorded for consistency</li>
            </ul>
          </div>
          <div className="pg-split-media" data-reveal>
            <PageImage image={images.work.study01.hero} showLabel />
          </div>
        </div>
      </section>

      <section className="pg-section pg-work-grid" aria-labelledby="work-frames">
        <div className="section-inner">
          <SectionLabel number="03">SELECTED FRAMES</SectionLabel>
          <EditorialHeading id="work-frames">
            Detail is where it <em>holds up.</em>
          </EditorialHeading>
          <ImageGrid
            items={[
              ...images.work.study01.gallery.slice(0, 2),
              ...images.work.study02.gallery.slice(0, 2),
              ...images.work.study03.gallery.slice(0, 1),
              ...images.work.study04.gallery.slice(0, 1),
            ]}
            variant="editorial"
            showLabels
          />
          <p className="pg-demo-note">
            {DEMO.portfolio} — every frame on this page is illustrative demo imagery. Real studio
            photography will replace these through the central image registry.
          </p>
        </div>
      </section>

      <CTASection
        label="YOUR STUDY NEXT"
        title={
          <>
            Let&apos;s plan <em>your look.</em>
          </>
        }
        support="Bring the references you love. The studio will translate them around your features, outfit and occasion."
        image={images.hero.booking}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/gallery">
            BROWSE THE ARCHIVE <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
