import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { FAQ } from "@/components/pages/FAQ";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { MapPlaceholder } from "@/components/pages/MapPlaceholder";
import { PageImage } from "@/components/pages/PageImage";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { GENERAL_FAQ } from "@/data/faq";
import { images } from "@/data/images";
import { PLACEHOLDER, STUDIO_CONFIG, STUDIO_EXPERIENCE, STUDIO_SPACES } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/studio")({
  head: () =>
    pageHead({
      title: "Studio",
      description:
        "Inside the studio: the space, the makeup station, the light, the details, the learning room and the final frame.",
      path: "/studio",
    }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="THE STUDIO"
        title={
          <>
            A room built
            <br />
            <em>for the work.</em>
          </>
        }
        support="Warm light, wide mirrors and a station arranged for precision — the same room that becomes a classroom for academy students."
        image={images.hero.studioPage}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Studio" }]}
      />

      <section className="pg-section pg-spaces" aria-labelledby="studio-spaces">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">THE SPACES</SectionLabel>
              <EditorialHeading id="studio-spaces">
                Six corners of <em>one studio.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Every chapter below pairs with a photograph of the studio environment — demo imagery
              until the studio&apos;s own photography is supplied.
            </p>
          </div>

          <div className="pg-chapters">
            {STUDIO_SPACES.map((space, index) => (
              <article
                key={space.key}
                className={`pg-chapter${index % 2 === 1 ? " is-reverse" : ""}`}
                data-reveal
              >
                <div className="pg-chapter-media">
                  <PageImage image={images.studio.spaces[space.key]} showLabel />
                </div>
                <div className="pg-chapter-copy">
                  <span className="pg-chapter-index">{String(index + 1).padStart(2, "0")}</span>
                  <SectionLabel>{space.label}</SectionLabel>
                  <h3>{space.heading}</h3>
                  <p className="pg-muted">{space.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-experience" aria-labelledby="studio-experience">
        <div className="section-inner">
          <SectionLabel number="02">THE EXPERIENCE</SectionLabel>
          <EditorialHeading id="studio-experience">
            How an appointment <em>actually runs.</em>
          </EditorialHeading>
          <ol className="pg-experience-list">
            {STUDIO_EXPERIENCE.map((step, index) => (
              <li key={step.title} className="pg-experience-step" data-reveal>
                <span className="pg-experience-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <ImageGrid items={images.studio.experience.slice(0, 4)} variant="trio" showLabels />
        </div>
      </section>

      <section className="pg-section pg-studio-visit" aria-labelledby="studio-visit">
        <div className="section-inner pg-visit-layout">
          <div className="pg-visit-copy" data-reveal>
            <SectionLabel number="03">VISITING</SectionLabel>
            <EditorialHeading id="studio-visit">
              Where to find <em>the studio.</em>
            </EditorialHeading>
            <p className="pg-muted">
              The address is not published yet. Nothing is pinned on a map until a real location is
              confirmed, so this block stays a labelled placeholder.
            </p>
            <dl className="pg-visit-details">
              <div>
                <dt>Address</dt>
                <dd>{STUDIO_CONFIG.address || PLACEHOLDER.address}</dd>
              </div>
              <div>
                <dt>Timings</dt>
                <dd>{STUDIO_CONFIG.hours || PLACEHOLDER.hours}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{STUDIO_CONFIG.phone || PLACEHOLDER.phone}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{STUDIO_CONFIG.email || PLACEHOLDER.email}</dd>
              </div>
            </dl>
            <Button asChild className="editorial-primary">
              <Link to="/contact">
                ENQUIRE ABOUT A VISIT <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
          <div className="pg-visit-map" data-reveal>
            <MapPlaceholder />
          </div>
        </div>
      </section>

      <section className="pg-section pg-studio-extras" aria-labelledby="studio-extras">
        <div className="section-inner">
          <SectionLabel number="04">ATMOSPHERE</SectionLabel>
          <EditorialHeading id="studio-extras">
            The rest of <em>the room.</em>
          </EditorialHeading>
          <ImageGrid items={images.studio.extras} variant="mosaic" showLabels />
        </div>
      </section>

      <FAQ
        items={GENERAL_FAQ}
        label="STUDIO QUESTIONS"
        title={
          <>
            Practical <em>questions.</em>
          </>
        }
        support="Availability, travel, trials and pricing are all confirmed during consultation."
      />

      <CTASection
        label="COME IN"
        title={
          <>
            Reserve <em>your date.</em>
          </>
        }
        support="Bring your references, your outfit details and the occasion. Everything else is shaped in the chair."
        image={images.hero.studioPage}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/contact">
            ENQUIRE NOW <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
