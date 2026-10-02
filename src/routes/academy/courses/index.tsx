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
import { courses } from "@/data/academy";
import { ACADEMY_FAQ } from "@/data/faq";
import { images } from "@/data/images";
import { DEMO } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/academy/courses/")({
  head: () =>
    pageHead({
      title: "Courses",
      description:
        "Four academy programmes: professional makeup artistry, bridal, advanced HD & airbrush, and editorial makeup.",
      path: "/academy/courses",
    }),
  component: CoursesPage,
});

const STEPS = [
  {
    title: "ENQUIRE",
    copy: "Share your experience level and what you want to learn through the contact form.",
  },
  {
    title: "CONSULT",
    copy: "A conversation about direction, the format that fits you and what the course involves.",
  },
  {
    title: "SCHEDULE",
    copy: "Duration, fees and dates are confirmed at this stage — nothing is promised before it.",
  },
  {
    title: "PRACTISE",
    copy: "Studio practice at real stations, repeated drills and guided work on models.",
  },
] as const;

function CoursesPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="ACADEMY COURSES"
        title={
          <>
            Courses for
            <br />
            <em>serious hands.</em>
          </>
        }
        support="Four programmes covering foundation artistry through to advanced complexion and editorial work."
        image={images.hero.courses}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Academy", to: "/academy" },
          { label: "Courses" },
        ]}
        note="DURATION, FEES & CERTIFICATION — TO BE ANNOUNCED"
      />

      <section className="pg-section pg-course-list" aria-labelledby="courses-list">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">THE PROGRAMMES</SectionLabel>
              <EditorialHeading id="courses-list">
                Four courses, <em>one standard.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Every programme is taught hands-on, with repeated practice before live model work.
              Fees and certification details are shared on enquiry.
            </p>
          </div>

          <div className="pg-course-list-grid">
            {courses.map((course, index) => (
              <article key={course.slug} className="pg-course-row" data-reveal>
                <div className="pg-course-media">
                  <PageImage image={course.cover} showLabel />
                </div>
                <div className="pg-course-copy">
                  <span className="pg-course-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="pg-course-title">{course.title}</h3>
                  <p className="pg-muted">{course.summary}</p>
                  <dl className="pg-course-details">
                    <div>
                      <dt>Duration</dt>
                      <dd>{course.details.duration}</dd>
                    </div>
                    <div>
                      <dt>Fees</dt>
                      <dd>{course.details.fee}</dd>
                    </div>
                    <div>
                      <dt>Certification</dt>
                      <dd>{course.details.certification}</dd>
                    </div>
                  </dl>
                  <Button asChild variant="link" className="editorial-link">
                    <Link to="/academy/courses/$slug" params={{ slug: course.slug }}>
                      VIEW COURSE <ArrowUpRight aria-hidden="true" size={17} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-course-flow" aria-labelledby="courses-flow">
        <div className="section-inner">
          <SectionLabel number="02">HOW IT WORKS</SectionLabel>
          <EditorialHeading id="courses-flow">
            From enquiry to <em>first brush.</em>
          </EditorialHeading>
          <ol className="pg-flow">
            {STEPS.map((step, index) => (
              <li key={step.title} className="pg-flow-step" data-reveal>
                <span className="pg-flow-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pg-section pg-course-outcome" aria-labelledby="courses-outcome">
        <div className="section-inner pg-split is-reverse">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="03">WHAT YOU LEAVE WITH</SectionLabel>
            <EditorialHeading id="courses-outcome">
              Technique, notes and <em>your own portfolio.</em>
            </EditorialHeading>
            <p className="pg-muted">
              No certification, accreditation or placement claim is made on this site. What is
              offered is taught technique, documented process and guided portfolio work you can
              present as your own.
            </p>
            <ul className="pg-list">
              <li>A repeatable process for complexion, colour and eyes</li>
              <li>Written notes you can work from afterwards</li>
              <li>Portfolio imagery built with guided feedback</li>
              <li>Camera and lighting awareness for real jobs</li>
            </ul>
          </div>
          <div className="pg-split-media" data-reveal>
            <ImageGrid items={images.academy.studies} variant="duo" showLabels />
          </div>
        </div>
      </section>

      <FAQ
        items={ACADEMY_FAQ}
        label="COURSE QUESTIONS"
        title={
          <>
            Asked before <em>enrolling.</em>
          </>
        }
        support="Course details are shared on enquiry and confirmed during consultation."
      />

      <CTASection
        label="RESERVE YOUR PLACE"
        title={
          <>
            Enquire about <em>a course.</em>
          </>
        }
        support="Share your experience level and the direction you want to take — the studio will come back with formats and schedules."
        image={images.hero.courses}
      >
        <Button asChild className="editorial-primary">
          <Link to="/contact">
            ENQUIRE NOW <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/academy/student-work">
            STUDENT WORK <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
