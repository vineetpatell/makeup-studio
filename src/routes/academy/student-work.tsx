import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { GalleryGrid } from "@/components/pages/GalleryGrid";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { images } from "@/data/images";
import { DEMO } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/academy/student-work")({
  head: () =>
    pageHead({
      title: "Student Work",
      description:
        "Practice and technique plates from academy sessions — shown separately from client portfolio work.",
      path: "/academy/student-work",
    }),
  component: StudentWorkPage,
});

function StudentWorkPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="ACADEMY / STUDENT WORK"
        title={
          <>
            Practice,
            <br />
            <em>in progress.</em>
          </>
        }
        support="Technique plates, drills and guided model work from academy sessions — kept visually separate from client portfolio imagery."
        image={images.hero.studentWork}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Academy", to: "/academy" },
          { label: "Student Work" },
        ]}
        note={DEMO.studentWork}
      />

      <section className="pg-section pg-student-archive" aria-labelledby="student-archive">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">THE ARCHIVE</SectionLabel>
              <EditorialHeading id="student-archive">
                Plates from <em>the practice floor.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Open any frame for a larger view. {DEMO.studentWork} — nothing in this archive is
              presented as paid client work.
            </p>
          </div>
          <GalleryGrid items={images.academy.studentWork} showLabels />
        </div>
      </section>

      <section className="pg-section pg-student-notes" aria-labelledby="student-notes">
        <div className="section-inner pg-split is-reverse">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="02">WHY IT&apos;S SEPARATE</SectionLabel>
            <EditorialHeading id="student-notes">
              Practice shown <em>as practice.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Student work is displayed as academy practice, never as a client portfolio. Keeping
              the two archives apart is what makes both of them honest.
            </p>
            <ul className="pg-list">
              <li>Drills and repetitions documented as they happen</li>
              <li>Guided model work with feedback recorded</li>
              <li>Colour and texture studies kept as references</li>
              <li>Portfolio-ready frames developed from these sessions</li>
            </ul>
            <Button asChild variant="link" className="editorial-link">
              <Link to="/academy/courses">
                EXPLORE THE COURSES <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
          <div className="pg-split-media" data-reveal>
            <ImageGrid items={images.academy.studies} variant="duo" showLabels />
          </div>
        </div>
      </section>

      <section className="pg-section pg-student-next" aria-labelledby="student-next">
        <div className="section-inner pg-split">
          <div className="pg-split-media" data-reveal>
            <PageImage image={images.academy.intro} showLabel />
          </div>
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="03">START PRACTISING</SectionLabel>
            <EditorialHeading id="student-next">
              Your plates <em>come next.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Every one of these frames started as a first attempt. Enquire with your experience
              level and the studio will point you to the course that fits.
            </p>
            <Button asChild className="editorial-primary">
              <Link to="/contact">
                ENQUIRE ABOUT THE ACADEMY <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
