import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/pages/BeforeAfter";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { FAQ } from "@/components/pages/FAQ";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { ServiceMeta } from "@/components/pages/ServiceMeta";
import { SERVICE_FAQ } from "@/data/faq";
import { findService, services } from "@/data/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = findService(params.slug);
    return pageHead({
      title: service?.title ?? "Service",
      description:
        service?.description ??
        "Explore makeup artistry services for brides, occasions and editorial work.",
      path: `/services/${params.slug}`,
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = findService(slug);

  if (!service) {
    return (
      <PageShell>
        <section className="pg-section">
          <div className="section-inner pg-empty">
            <SectionLabel>SERVICE</SectionLabel>
            <EditorialHeading size="lg">That service page isn&apos;t available.</EditorialHeading>
            <p className="pg-muted">
              The service you followed may have moved. Explore the full directory instead.
            </p>
            <Button asChild className="editorial-primary">
              <Link to="/services">
                VIEW ALL SERVICES <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const related = service.related
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof services)[number] => Boolean(item));

  return (
    <PageShell>
      <InnerPageHero
        label={`SERVICE ${service.number}`}
        title={<>{service.title}</>}
        support={service.description}
        image={service.images.hero}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        actions={
          <>
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
          </>
        }
      />

      <section className="pg-section" aria-labelledby="service-look">
        <div className="section-inner">
          <div className="pg-heading-row">
            <div data-reveal>
              <SectionLabel number="01">THE LOOK</SectionLabel>
              <EditorialHeading id="service-look">
                {service.tagline.replace(/\.$/, "")} <em>in frames.</em>
              </EditorialHeading>
            </div>
            <p className="pg-muted">{service.finish}</p>
          </div>
          <ImageGrid items={service.images.looks} variant="trio" showLabels />
        </div>
      </section>

      <section className="pg-section pg-service-notes" aria-labelledby="service-includes">
        <div className="section-inner pg-service-notes-grid">
          <div data-reveal>
            <SectionLabel number="02">WHAT IT CAN INCLUDE</SectionLabel>
            <ul className="pg-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pg-muted is-small">
              Each element is confirmed in consultation. Nothing is assumed to be included
              automatically.
            </p>
          </div>
          <div data-reveal>
            <SectionLabel number="03">SUITABLE FOR</SectionLabel>
            <ul className="pg-list">
              {service.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pg-note-band">
              <span className="pg-note-label">PRICE</span>
              <p>
                Available on consultation — shared once the occasion, location and requirements are
                clear.
              </p>
            </div>
          </div>
          <div className="pg-service-detail-shot" data-reveal>
            <ImageGrid items={service.images.details} variant="duo" showLabels />
          </div>
        </div>
      </section>

      {service.images.before && service.images.after ? (
        <section className="pg-section pg-transformation" aria-labelledby="service-transformation">
          <div className="section-inner">
            <BeforeAfter
              before={service.images.before}
              after={service.images.after}
              label="DEMO TRANSFORMATION"
              title="Before / after, clearly labelled."
              caption="DEMO TRANSFORMATION — illustrative stock imagery, not a real client result. Real studio before/after pairs will replace these."
            />
          </div>
        </section>
      ) : null}

      <section className="pg-section pg-related" aria-labelledby="service-related">
        <div className="section-inner">
          <SectionLabel number="04">RELATED SERVICES</SectionLabel>
          <EditorialHeading id="service-related" size="lg">
            Where this <em>leads next.</em>
          </EditorialHeading>
          <div className="pg-related-grid">
            {related.map((item, index) => (
              <ServiceMeta
                key={item.slug}
                number={String(index + 1).padStart(2, "0")}
                title={item.title}
                note={item.tagline}
                href={{ slug: item.slug }}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={SERVICE_FAQ}
        label="QUESTIONS"
        title={
          <>
            Asked before <em>booking.</em>
          </>
        }
        support="Policy, availability and travel details are always confirmed during consultation."
      />

      <CTASection
        label="READY WHEN YOU ARE"
        title={
          <>
            Book <em>{service.title.toLowerCase()}.</em>
          </>
        }
        support="Share your date and occasion — the studio will confirm availability and shape the look with you."
        image={service.images.hero}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/gallery">
            VIEW THE WORK <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
