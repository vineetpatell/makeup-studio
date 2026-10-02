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
import { courses, findCourse } from "@/data/academy";
import { ACADEMY_FAQ } from "@/data/faq";
import { images } from "@/data/images";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/academy/courses/$slug")({
  head: ({ params }) => {
    const course = findCourse(params.slug);
    return pageHead({
      title: course ? course.title : "Course",
      description:
        course?.summary ??
        "Academy course details, curriculum areas and practice structure at the studio.",
      path: `/academy/courses/${params.slug}`,
    });
  },
  component: CoursePage,
});

function CoursePage() {
  const { slug } = Route.useParams();
  const course = findCourse(slug);

  if (!course) {
    return (
      <PageShell>
        <section className="pg-section">
          <div className="section-inner pg-empty">
            <SectionLabel>ACADEMY</SectionLabel>
            <EditorialHeading size="lg">That course isn&apos;t listed.</EditorialHeading>
            <p className="pg-muted">
              The course you followed may have been renamed. Browse the full list instead.
            </p>
            <Button asChild className="editorial-primary">
              <Link to="/academy/courses">
                VIEW COURSES <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const others = courses.filter((item) => item.slug !== course.slug);

  return (
    <PageShell>
      <InnerPageHero
        label="ACADEMY COURSE"
        title={<>{course.title}</>}
        support={course.summary}
        image={course.hero}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Academy", to: "/academy" },
          { label: "Courses", to: "/academy/courses" },
          { label: course.title },
        ]}
        note="DURATION, FEES & CERTIFICATION — TO BE ANNOUNCED"
      />

      <section className="pg-section pg-course-overview" aria-labelledby="course-overview">
        <div className="section-inner pg-split">
          <div className="pg-split-media" data-reveal>
            <PageImage image={course.cover} showLabel />
          </div>
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="01">THE OVERVIEW</SectionLabel>
            <EditorialHeading id="course-overview">
              What this course <em>is.</em>
            </EditorialHeading>
            <p className="pg-muted">{course.overview}</p>
            <dl className="pg-course-details is-stacked">
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
            <p className="pg-form-note">
              Details are confirmed on enquiry. No duration, fee or certification claim is made on
              this page.
            </p>
          </div>
        </div>
      </section>

      <section className="pg-section pg-course-audience" aria-labelledby="course-audience">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="02">WHO IT&apos;S FOR</SectionLabel>
              <EditorialHeading id="course-audience">
                Is this <em>your course?</em>
              </EditorialHeading>
            </div>
            <ul className="pg-list pg-list-loose" data-reveal>
              {course.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pg-course-learn">
            <div data-reveal>
              <SectionLabel number="03">WHAT YOU WILL LEARN</SectionLabel>
              <EditorialHeading size="lg">
                Technique you can <em>repeat.</em>
              </EditorialHeading>
            </div>
            <ol className="pg-learn-list">
              {course.learn.map((item, index) => (
                <li key={item} className="pg-learn-item" data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pg-section pg-course-curriculum" aria-labelledby="course-curriculum">
        <div className="section-inner">
          <SectionLabel number="04">CURRICULUM AREAS</SectionLabel>
          <EditorialHeading id="course-curriculum">
            Covered across <em>the course.</em>
          </EditorialHeading>
          <ul className="pg-chip-list">
            {course.curriculum.map((item, index) => (
              <li key={item} className="pg-chip" data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pg-section pg-course-portfolio" aria-labelledby="course-portfolio">
        <div className="section-inner pg-split is-reverse">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="05">PRACTICE &amp; PORTFOLIO</SectionLabel>
            <EditorialHeading id="course-portfolio">
              Work you can <em>show.</em>
            </EditorialHeading>
            <p className="pg-muted">{course.practice}</p>
            <p className="pg-muted">{course.portfolio}</p>
            <Button asChild variant="link" className="editorial-link">
              <Link to="/academy/student-work">
                SEE STUDENT WORK <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
          <div className="pg-split-media" data-reveal>
            <ImageGrid items={images.academy.studentWork.slice(0, 4)} variant="duo" showLabels />
          </div>
        </div>
      </section>

      <section className="pg-section pg-course-related" aria-labelledby="course-related">
        <div className="section-inner">
          <SectionLabel number="06">OTHER COURSES</SectionLabel>
          <EditorialHeading id="course-related" size="lg">
            Continue the <em>practice.</em>
          </EditorialHeading>
          <div className="pg-course-grid is-compact">
            {others.map((item, index) => (
              <Link
                key={item.slug}
                to="/academy/courses/$slug"
                params={{ slug: item.slug }}
                className={`pg-course-card span-${(index % 3) + 1}`}
                data-reveal
              >
                <div className="pg-course-card-media">
                  <PageImage image={item.cover} showLabel />
                </div>
                <div className="pg-course-card-meta">
                  <span>{item.details.duration}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={ACADEMY_FAQ}
        label="COURSE QUESTIONS"
        title={
          <>
            Before you <em>enrol.</em>
          </>
        }
        support="Duration, fees and certification details are confirmed on enquiry — never assumed by this site."
      />

      <CTASection
        label="ENQUIRE ABOUT THIS COURSE"
        title={
          <>
            Ask about <em>{course.title}.</em>
          </>
        }
        support="Share your experience level and what you want to achieve — the studio will come back with formats, schedules and fees."
        image={course.cover}
      >
        <Button asChild className="editorial-primary">
          <Link to="/contact">
            ENQUIRE NOW <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/academy/courses">
            ALL COURSES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
