import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { FAQ } from "@/components/pages/FAQ";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { ACADEMY_FAQ } from "@/data/faq";
import { AREAS_OF_STUDY, courses } from "@/data/academy";
import { images } from "@/data/images";
import { DEMO } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/academy/")({
  head: () =>
    pageHead({
      title: "Academy",
      description:
        "Makeup education covering skin, complexion, colour, bridging, HD, airbrush, hairstyling and editorial technique.",
      path: "/academy",
    }),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="THE ACADEMY"
        title={
          <>
            Learn the craft
            <br />
            <em>behind the look.</em>
          </>
        }
        support="Makeup education built on technique, repetition and honest feedback — taught in the same studio where client work happens."
        image={images.hero.academy}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Academy" }]}
        note={DEMO.academyStudy}
      />

      <section className="pg-section pg-areas" aria-labelledby="academy-areas">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">AREAS OF STUDY</SectionLabel>
              <EditorialHeading id="academy-areas">
                Sixteen things worth <em>learning properly.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Curriculum areas rather than claimed certifications. Course duration, fees and
              certification details are shared on enquiry and never implied on this site.
            </p>
          </div>
          <ol className="pg-area-list">
            {AREAS_OF_STUDY.map((area, index) => (
              <li key={area.title} className="pg-area" data-reveal>
                <span className="pg-area-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pg-section pg-academy-courses" aria-labelledby="academy-courses">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="02">THE COURSES</SectionLabel>
              <EditorialHeading id="academy-courses">
                Four ways to <em>begin.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              From a first foundation course through to advanced complexion and editorial work —
              each taught hands-on at the studio.
            </p>
          </div>
          <div className="pg-course-grid">
            {courses.map((course, index) => (
              <Link
                key={course.slug}
                to="/academy/courses/$slug"
                params={{ slug: course.slug }}
                className={`pg-course-card span-${(index % 4) + 1}`}
                data-reveal
              >
                <div className="pg-course-card-media">
                  <PageImage image={course.cover} showLabel />
                </div>
                <div className="pg-course-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{course.title}</h3>
                  <p>{course.summary}</p>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <Button asChild variant="link" className="editorial-link">
            <Link to="/academy/courses">
              SEE ALL COURSES <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
      </section>

      <section className="pg-section pg-practice" aria-labelledby="academy-practice">
        <div className="section-inner pg-split">
          <div className="pg-split-media" data-reveal>
            <PageImage image={images.academy.practice} showLabel />
          </div>
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="03">PRACTICE &amp; PORTFOLIO</SectionLabel>
            <EditorialHeading id="academy-practice">
              Repetition before <em>performance.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Technique is built through drills — brushes, blending, complexion, brows and lips
              practised until the hand knows the movement. Only then does work move to live models.
            </p>
            <ul className="pg-list">
              <li>Guided practice at real studio stations</li>
              <li>Live model sessions with feedback</li>
              <li>Portfolio development built into the course</li>
              <li>Camera awareness: how the work reads in photographs</li>
            </ul>
            <Button asChild variant="link" className="editorial-link">
              <Link to="/academy/student-work">
                SEE STUDENT WORK <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pg-section pg-student-preview" aria-labelledby="academy-student">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="04">STUDENT WORK</SectionLabel>
              <EditorialHeading id="academy-student">
                Practice plates, <em>kept separate.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              {DEMO.studentWork} — academy practice is shown separately from client portfolio work
              so nothing is confused for professional experience.
            </p>
          </div>
          <ImageGrid items={images.academy.studentWork.slice(0, 6)} variant="trio" showLabels />
          <Button asChild variant="link" className="editorial-link">
            <Link to="/academy/student-work">
              OPEN THE STUDENT ARCHIVE <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>
      </section>

      <FAQ
        items={ACADEMY_FAQ}
        label="ACADEMY QUESTIONS"
        title={
          <>
            Before you <em>enrol.</em>
          </>
        }
        support="Duration, fees and certification details are confirmed on enquiry — never assumed by this site."
      />

      <CTASection
        label="START THE CONVERSATION"
        title={
          <>
            Enquire about <em>the academy.</em>
          </>
        }
        support="Tell us your experience level and what you want to learn. Choose “Academy Enquiry” in the form and the studio will respond with course details."
        image={images.hero.courses}
      >
        <Button asChild className="editorial-primary">
          <Link to="/contact">
            ENQUIRE NOW <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/academy/courses">
            VIEW COURSES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
