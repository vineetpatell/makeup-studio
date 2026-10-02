import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { images } from "@/data/images";
import { LEGAL_PLACEHOLDERS } from "@/data/studio";
import { pageHead } from "@/lib/seo";

const { terms } = LEGAL_PLACEHOLDERS;

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms",
      description:
        "Booking, academy and imagery terms will be published here once the studio finalises its policy.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <InnerPageHero
        label={terms.title}
        title={
          <>
            Clear terms, <em>published honestly.</em>
          </>
        }
        support={terms.intro}
        image={images.hero.services}
        breadcrumb={[{ label: "Home", to: "/" }, { label: terms.title }]}
        size="compact"
        note="PLACEHOLDER TERMS — TO BE REPLACED WITH REVIEWED STUDIO TEXT"
      />

      <section className="pg-section pg-legal" aria-labelledby="terms-sections">
        <div className="section-inner pg-legal-layout">
          <div className="pg-legal-intro" data-reveal>
            <SectionLabel>TERMS</SectionLabel>
            <EditorialHeading id="terms-sections" size="lg">
              What this page will <em>cover.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Finalised booking terms have not been supplied. Each section below describes what will
              be documented — nothing is implied about deposits, cancellation windows or course
              outcomes.
            </p>
          </div>
          <div className="pg-legal-body">
            {terms.sections.map((section, index) => (
              <article key={section.heading} className="pg-legal-block" data-reveal>
                <span className="pg-legal-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{section.heading}</h3>
                <p>{section.copy}</p>
              </article>
            ))}
            <div className="pg-legal-actions" data-reveal>
              <Button asChild className="editorial-primary">
                <Link to="/booking">
                  BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="editorial-outline">
                <Link to="/privacy">
                  READ THE PRIVACY NOTE <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
