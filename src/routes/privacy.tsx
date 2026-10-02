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

const { privacy } = LEGAL_PLACEHOLDERS;

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy",
      description:
        "How enquiries, images and personal details will be handled once the studio publishes its policy.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <InnerPageHero
        label={privacy.title}
        title={
          <>
            Your details, <em>handled honestly.</em>
          </>
        }
        support={privacy.intro}
        image={images.hero.about}
        breadcrumb={[{ label: "Home", to: "/" }, { label: privacy.title }]}
        size="compact"
        note="PLACEHOLDER POLICY — TO BE REPLACED WITH REVIEWED STUDIO TEXT"
      />

      <section className="pg-section pg-legal" aria-labelledby="privacy-sections">
        <div className="section-inner pg-legal-layout">
          <div className="pg-legal-intro" data-reveal>
            <SectionLabel>POLICY</SectionLabel>
            <EditorialHeading id="privacy-sections" size="lg">
              What this page will <em>say.</em>
            </EditorialHeading>
            <p className="pg-muted">
              The studio&apos;s reviewed privacy policy has not been supplied yet. Until it is,
              these sections state plainly what will be documented — without inventing legal
              commitments.
            </p>
          </div>
          <div className="pg-legal-body">
            {privacy.sections.map((section, index) => (
              <article key={section.heading} className="pg-legal-block" data-reveal>
                <span className="pg-legal-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{section.heading}</h3>
                <p>{section.copy}</p>
              </article>
            ))}
            <div className="pg-legal-actions" data-reveal>
              <Button asChild className="editorial-primary">
                <Link to="/contact">
                  ASK A QUESTION <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="editorial-outline">
                <Link to="/terms">
                  READ THE TERMS <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
