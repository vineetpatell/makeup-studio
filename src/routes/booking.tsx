import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/pages/BookingForm";
import { CTASection } from "@/components/pages/CTASection";
import { EditorialHeading } from "@/components/pages/EditorialHeading";
import { FAQ } from "@/components/pages/FAQ";
import { ImageGrid } from "@/components/pages/ImageGrid";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { PageShell } from "@/components/pages/PageShell";
import { SectionLabel } from "@/components/pages/SectionLabel";
import { BOOKING_FAQ } from "@/data/faq";
import { images } from "@/data/images";
import { DEMO, PLACEHOLDER, STUDIO_CONFIG } from "@/data/studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/booking")({
  head: () =>
    pageHead({
      title: "Booking",
      description:
        "Request an appointment: share your date, occasion, location and the number of people who need makeup.",
      path: "/booking",
    }),
  component: BookingPage,
});

const BOOKING_STEPS = [
  {
    title: "SEND THE REQUEST",
    copy: "The booking form captures date, occasion, location and how many people need makeup.",
  },
  {
    title: "AVAILABILITY CHECK",
    copy: "The studio confirms whether the date is open and what travel would involve.",
  },
  {
    title: "CONSULTATION",
    copy: "Look, finish, timings and pricing are agreed here — trials can be discussed too.",
  },
  {
    title: "THE APPOINTMENT",
    copy: "The plan is executed on the day, with a final check in studio light before you leave.",
  },
] as const;

function BookingPage() {
  return (
    <PageShell>
      <InnerPageHero
        label="BOOKING"
        title={
          <>
            Reserve
            <br />
            <em>your date.</em>
          </>
        }
        support="Share the date, occasion and the number of people who need makeup. Availability is confirmed during consultation."
        image={images.hero.booking}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Booking" }]}
        note={DEMO.form}
      />

      <section className="pg-section pg-booking" aria-labelledby="booking-form">
        <div className="section-inner pg-contact-layout">
          <div className="pg-contact-intro" data-reveal>
            <SectionLabel number="01">THE REQUEST</SectionLabel>
            <EditorialHeading id="booking-form">
              Everything the studio <em>needs to know.</em>
            </EditorialHeading>
            <p className="pg-muted">
              A request is not a confirmed booking. Dates are held once availability and details are
              confirmed in consultation.
            </p>
            <ul className="pg-list">
              <li>Date, occasion or venue, if you have them</li>
              <li>How many people need makeup</li>
              <li>Whether you want hairstyling or draping included</li>
              <li>Any look you already have in mind</li>
            </ul>
            <dl className="pg-visit-details is-stacked">
              <div>
                <dt>Studio timings</dt>
                <dd>{STUDIO_CONFIG.hours || PLACEHOLDER.hours}</dd>
              </div>
              <div>
                <dt>Travel</dt>
                <dd>On-location requests are discussed when enquiring.</dd>
              </div>
              <div>
                <dt>Trials</dt>
                <dd>Trial availability is confirmed during consultation.</dd>
              </div>
            </dl>
          </div>
          <div className="pg-contact-form" data-reveal>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="pg-section pg-booking-flow" aria-labelledby="booking-flow">
        <div className="section-inner">
          <SectionLabel number="02">HOW IT RUNS</SectionLabel>
          <EditorialHeading id="booking-flow">
            From request to <em>appointment.</em>
          </EditorialHeading>
          <ol className="pg-flow">
            {BOOKING_STEPS.map((step, index) => (
              <li key={step.title} className="pg-flow-step" data-reveal>
                <span className="pg-flow-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pg-section pg-booking-strip" aria-labelledby="booking-prep">
        <div className="section-inner">
          <SectionLabel number="03">PREPARATION</SectionLabel>
          <EditorialHeading id="booking-prep">
            Arrive ready to <em>be looked after.</em>
          </EditorialHeading>
          <p className="pg-muted">
            Come with clean, dry hair if styling is booked, and share any skin sensitivities when
            you arrive. Anything you are unsure about is discussed before the first product is
            opened.
          </p>
          <ImageGrid items={images.booking.strip} variant="mosaic" showLabels />
        </div>
      </section>

      <FAQ
        items={BOOKING_FAQ}
        label="BOOKING QUESTIONS"
        title={
          <>
            Before you <em>reserve.</em>
          </>
        }
        support="Availability, trials, travel and pricing are confirmed during consultation."
      />

      <CTASection
        label="ALMOST THERE"
        title={
          <>
            Still <em>deciding?</em>
          </>
        }
        support="Browse the services and the archive first, then send the booking request with what you like."
        image={images.hero.beforeAfter}
      >
        <Button asChild className="editorial-primary">
          <Link to="/services">
            EXPLORE SERVICES <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="editorial-outline">
          <Link to="/contact">
            ASK A QUESTION <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CTASection>
    </PageShell>
  );
}
