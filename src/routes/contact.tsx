import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { EnquiryForm } from "@/components/pages/EnquiryForm";
import { FAQ } from "@/components/pages/FAQ";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { MapPlaceholder } from "@/components/pages/MapPlaceholder";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { GENERAL_FAQ } from "@/data/faq";
import { images } from "@/data/images";
import { DEMO, PLACEHOLDER, STUDIO_CONFIG } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description:
        "Enquire about bridal, occasion or academy work — share your date, occasion and the look you are imagining.",
      path: "/contact",
    }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Phone, label: "Phone", value: STUDIO_CONFIG.phone || PLACEHOLDER.phone },
  { icon: Mail, label: "Email", value: STUDIO_CONFIG.email || PLACEHOLDER.email },
  { icon: Instagram, label: "Instagram", value: STUDIO_CONFIG.instagram || PLACEHOLDER.instagram },
  { icon: Clock, label: "Timings", value: STUDIO_CONFIG.hours || PLACEHOLDER.hours },
] as const;

function ContactPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="CONTACT"
        title={
          <>
            Tell us about
            <br />
            <em>the occasion.</em>
          </>
        }
        support="Share your date, venue and the look you are imagining. Availability, travel and pricing are confirmed during consultation."
        image={images.hero.contact}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        note={DEMO.form}
      />

      <section className="pg-section pg-contact" aria-labelledby="contact-form">
        <div className="section-inner pg-contact-layout">
          <div className="pg-contact-intro" data-reveal>
            <SectionLabel number="01">THE ENQUIRY</SectionLabel>
            <EditorialHeading id="contact-form">
              A conversation <em>first.</em>
            </EditorialHeading>
            <p className="pg-muted">
              Nothing is booked from a form alone. Send the details you have and the studio will
              respond with availability, next steps and anything still to decide.
            </p>
            <ul className="pg-channel-list">
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <channel.icon aria-hidden="true" size={18} />
                  <div>
                    <span>{channel.label}</span>
                    <p>{channel.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="pg-form-note">
              Studio contact details are not published yet — these fields stay neutral until the
              real phone, email and address are supplied.
            </p>
          </div>
          <div className="pg-contact-form" data-reveal>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="pg-section pg-contact-details" aria-labelledby="contact-details">
        <div className="section-inner pg-visit-layout">
          <div className="pg-visit-copy" data-reveal>
            <SectionLabel number="02">WHAT HAPPENS NEXT</SectionLabel>
            <EditorialHeading id="contact-details">
              After you <em>send it.</em>
            </EditorialHeading>
            <ul className="pg-list">
              <li>Your enquiry is read against the date and occasion you shared</li>
              <li>Availability is checked and travel requirements discussed</li>
              <li>Pricing is shared so it can match your requirements</li>
              <li>Trial requests and looks are agreed during consultation</li>
            </ul>
            <p className="pg-muted">
              Academy enquiries use the same form — choose “Academy Enquiry” as the service and
              course details follow.
            </p>
          </div>
          <div className="pg-visit-map" data-reveal>
            <MapPlaceholder />
          </div>
        </div>
        <div className="section-inner">
          <ImageGrid items={images.contact.strip} variant="mosaic" showLabels />
        </div>
      </section>

      <FAQ
        items={GENERAL_FAQ}
        label="QUESTIONS"
        title={
          <>
            Asked <em>often.</em>
          </>
        }
        support="Availability, trials, travel and pricing are confirmed during consultation rather than assumed here."
      />

      <CTASection
        label="READY WHEN YOU ARE"
        title={
          <>
            Let&apos;s start with <em>your date.</em>
          </>
        }
        support="Prefer a fuller form with timings and the number of people? The booking page covers that."
        image={images.hero.booking}
      >
        <Button asChild className="editorial-primary">
          <Link to="/booking">
            GO TO BOOKING <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/services">
            EXPLORE SERVICES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
