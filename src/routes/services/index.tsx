import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { ServiceCard } from "@/components/pages/ServiceCard";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Services",
      description:
        "From bridal mornings to editorial frames, every service begins with the occasion, the face and the desired finish.",
      path: "/services",
    }),
  component: ServicesPage,
});

const SIZES = [
  "wide",
  "narrow",
  "default",
  "narrow",
  "wide",
  "default",
  "default",
  "narrow",
  "default",
] as const;

function ServicesPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="SIGNATURE SERVICES"
        title={
          <>
            Makeup, composed
            <br />
            <em>around you.</em>
          </>
        }
        support="From bridal mornings to editorial frames, every service begins with the occasion, the face and the desired finish."
        image={images.hero.services}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="pg-section pg-directory" aria-labelledby="services-directory">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">THE DIRECTORY</SectionLabel>
              <EditorialHeading id="services-directory">
                Nine ways to be <em>made up.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted" data-reveal>
              Every service is shaped in consultation — pricing, travel and timings are confirmed
              there rather than listed as fixed promises here.
            </p>
          </div>
          <div className="pg-service-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                size={SIZES[index] ?? "default"}
                delay={(index % 3) * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pt-pair" aria-labelledby="services-detail">
        <div className="section-inner">
          <SectionLabel number="02">DETAIL WORK</SectionLabel>
          <EditorialHeading id="services-detail">
            The parts people <em>remember.</em>
          </EditorialHeading>
          <ImageGrid
            items={[
              images.services.bridal.detail,
              images.services.hairstyling.detail,
              images.services.draping.detail,
              images.services.hd.detail,
              images.services.editorial.detail,
            ]}
            variant="editorial"
            showLabels
          />
        </div>
      </section>

      <section className="pg-section pg-academy-cross">
        <div className="section-inner pg-split">
          <div className="pg-split-copy" data-reveal>
            <SectionLabel>THE ACADEMY</SectionLabel>
            <EditorialHeading size="lg">
              Want to learn <em>the craft?</em>
            </EditorialHeading>
            <p className="pg-muted">
              The same technique that shapes client work is taught through the studio&apos;s academy
              — foundation, bridal, advanced HD and editorial courses.
            </p>
            <Button asChild variant="link" className="editorial-link">
              <Link to="/academy">
                EXPLORE THE ACADEMY <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
          <div className="pg-split-media" data-reveal>
            <ImageGrid items={images.academy.studies} variant="duo" />
          </div>
        </div>
      </section>

      <CTASection
        label="CHOOSE THE OCCASION"
        title={
          <>
            Tell us about <em>your day.</em>
          </>
        }
        support="Share the occasion, the date and anything you already know about the look — the studio will shape the rest."
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
