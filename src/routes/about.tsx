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
import { images } from "@/data/images";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About",
      description:
        "A considered approach to makeup, styling and education — built around the person in the chair, not a template.",
      path: "/about",
    }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    number: "01",
    title: "SKIN FIRST",
    copy: "Great makeup begins with understanding the skin beneath it.",
  },
  {
    number: "02",
    title: "INTENTION",
    copy: "Every colour, texture and line should have a reason.",
  },
  {
    number: "03",
    title: "TRANSFORMATION",
    copy: "The goal is not to make you look like someone else. It is to reveal the version of you that belongs to the moment.",
  },
] as const;

function AboutPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="ABOUT THE STUDIO"
        title={
          <>
            Beauty is personal.
            <br />
            <em>Artistry makes it unforgettable.</em>
          </>
        }
        support="A considered approach to makeup, styling and education — built around the person in the chair, not a template."
        image={images.hero.about}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="pg-section" aria-labelledby="about-approach">
        <div className="section-inner pg-split">
          <div className="pg-split-media" data-reveal>
            <PageImage image={images.about.approach} />
          </div>
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="01">THE APPROACH</SectionLabel>
            <EditorialHeading id="about-approach">
              Every face has its own language.
            </EditorialHeading>
            <p className="pg-muted">
              Our approach begins with observation — skin, features, expression, outfit, occasion
              and light. Makeup is then built around those details rather than placed on top of
              them.
            </p>
            <p className="pg-muted">
              What follows is a conversation, not a template: what the day asks for, what the fabric
              does under the light, and how you want to feel when you catch your own reflection.
            </p>
          </div>
        </div>
      </section>

      <section className="pg-section pg-principles" aria-labelledby="about-principles">
        <div className="section-inner">
          <SectionLabel number="02">THE PHILOSOPHY</SectionLabel>
          <EditorialHeading id="about-principles">
            Three ideas, <em>every time.</em>
          </EditorialHeading>
          <div className="pg-principle-grid">
            <div className="pg-principle is-text" data-reveal>
              <span className="pg-principle-number">{PRINCIPLES[0].number}</span>
              <h3>{PRINCIPLES[0].title}</h3>
              <p>{PRINCIPLES[0].copy}</p>
            </div>
            <div className="pg-principle-media" data-reveal>
              <PageImage image={images.about.principles.skin} />
            </div>
            <div className="pg-principle is-text" data-reveal>
              <span className="pg-principle-number">{PRINCIPLES[1].number}</span>
              <h3>{PRINCIPLES[1].title}</h3>
              <p>{PRINCIPLES[1].copy}</p>
            </div>
            <div className="pg-principle-media is-tall" data-reveal>
              <PageImage image={images.about.principles.intention} />
            </div>
            <div className="pg-principle is-text is-wide" data-reveal>
              <span className="pg-principle-number">{PRINCIPLES[2].number}</span>
              <h3>{PRINCIPLES[2].title}</h3>
              <p>{PRINCIPLES[2].copy}</p>
            </div>
            <div className="pg-principle-media" data-reveal>
              <PageImage image={images.about.principles.transformation} />
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-artistry" aria-labelledby="about-artistry">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="03">THE ARTISTRY</SectionLabel>
              <EditorialHeading id="about-artistry">
                Craft over <em>formula.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              From bridal mornings to editorial frames, the work changes with the person, the light
              and the story. The technique follows the occasion — never the other way around.
            </p>
          </div>
          <ImageGrid items={images.about.artistry} variant="mosaic" showLabels />
          <div className="pg-artistry-foot">
            <div className="pg-artistry-detail" data-reveal>
              <PageImage image={images.about.story} />
            </div>
            <div data-reveal>
              <SectionLabel>BETWEEN THE FRAMES</SectionLabel>
              <EditorialHeading size="sm">
                Preparation is part of <em>the work.</em>
              </EditorialHeading>
              <p className="pg-muted">
                Skin prepared, tools sanitised, light checked. The minutes before the first brush
                are what make the final look dependable.
              </p>
              <Button asChild variant="link" className="editorial-link">
                <Link to="/services">
                  EXPLORE ALL SERVICES <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-education" aria-labelledby="about-education">
        <div className="section-inner pg-split is-reverse">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel number="04">THE ACADEMY</SectionLabel>
            <EditorialHeading id="about-education">
              The art is also <em>taught.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Alongside client artistry, the studio is designed as a learning environment for
              aspiring makeup artists who want to understand technique, skin, structure and
              professional application.
            </p>
            <Button asChild variant="link" className="editorial-link">
              <Link to="/academy">
                EXPLORE THE ACADEMY <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
          <div className="pg-split-media" data-reveal>
            <PageImage image={images.about.education} />
          </div>
        </div>
      </section>

      <CTASection
        label="THE BEGINNING OF SOMETHING BEAUTIFUL"
        title={
          <>
            Let&apos;s create <em>your look.</em>
          </>
        }
        support="Share your occasion and the look you are imagining — the studio will shape the rest."
        image={images.hero.booking}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/our-work">
            EXPLORE OUR WORK <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
