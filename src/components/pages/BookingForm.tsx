import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { DEMO, OCCASION_OPTIONS, STUDIO_CONFIG } from "@/data/studio";
import { SERVICE_FORM_OPTIONS } from "@/data/services";
import { Field } from "./Field";
import { SectionLabel } from "./SectionLabel";

const bookingSchema = z.object({
  name: z.string().min(2, "Please share your name"),
  mobile: z.string().min(6, "Please share a reachable number"),
  whatsapp: z.string(),
  email: z.union([z.literal(""), z.string().email("Check the email address")]),
  service: z.string().min(1, "Choose a service"),
  occasion: z.string(),
  date: z.string(),
  location: z.string(),
  time: z.string(),
  people: z.string(),
  preference: z.string(),
  notes: z.string(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const EMPTY: BookingValues = {
  name: "",
  mobile: "",
  whatsapp: "",
  email: "",
  service: "",
  occasion: "",
  date: "",
  location: "",
  time: "",
  people: "",
  preference: "",
  notes: "",
};

/**
 * Booking request form with a live enquiry summary.
 *
 * The demo build has no backend, so the confirmation states honestly that the
 * enquiry is not yet transmitted and shows exactly what the studio will
 * receive once the form is connected.
 */
export function BookingForm() {
  const [submitted, setSubmitted] = useState<BookingValues | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema), defaultValues: EMPTY });

  const values = watch();
  const onSubmit = (data: BookingValues) => setSubmitted(data);

  const summaryRows: { label: string; value: string }[] = [
    { label: "Service", value: values.service },
    { label: "Date", value: values.date },
    { label: "Occasion", value: values.occasion },
    { label: "Location", value: values.location },
  ];

  if (submitted) {
    return (
      <div className="pg-form-success is-wide" aria-live="polite">
        <span className="pg-form-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <SectionLabel>BOOKING REQUEST</SectionLabel>
        <h3>Your enquiry is ready to send, {submitted.name}.</h3>
        <p className="pg-muted">
          {DEMO.form} Nothing has been transmitted yet — the summary below shows exactly what the
          studio will receive once the booking form is connected.
        </p>
        <dl className="pg-form-summary">
          <div>
            <dt>Service</dt>
            <dd>{submitted.service}</dd>
          </div>
          {submitted.date ? (
            <div>
              <dt>Date</dt>
              <dd>{submitted.date}</dd>
            </div>
          ) : null}
          {submitted.time ? (
            <div>
              <dt>Preferred time</dt>
              <dd>{submitted.time}</dd>
            </div>
          ) : null}
          {submitted.occasion ? (
            <div>
              <dt>Occasion</dt>
              <dd>{submitted.occasion}</dd>
            </div>
          ) : null}
          {submitted.location ? (
            <div>
              <dt>Event location</dt>
              <dd>{submitted.location}</dd>
            </div>
          ) : null}
          {submitted.people ? (
            <div>
              <dt>Number of people</dt>
              <dd>{submitted.people}</dd>
            </div>
          ) : null}
          {submitted.preference ? (
            <div>
              <dt>Makeup preference</dt>
              <dd>{submitted.preference}</dd>
            </div>
          ) : null}
          <div>
            <dt>Mobile</dt>
            <dd>{submitted.mobile}</dd>
          </div>
          {submitted.notes ? (
            <div className="is-wide">
              <dt>Notes</dt>
              <dd>{submitted.notes}</dd>
            </div>
          ) : null}
        </dl>
        <div className="pg-form-success-actions">
          <Button
            type="button"
            variant="outline"
            className="editorial-outline"
            onClick={() => {
              setSubmitted(null);
              reset(EMPTY);
            }}
          >
            START A NEW REQUEST
          </Button>
          <Button asChild className="editorial-primary">
            <Link to="/contact">
              CONTACT THE STUDIO <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pg-booking">
      <form
        id="pg-booking-form"
        className="pg-form pg-booking-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="pg-form-grid">
          <Field label="Name" htmlFor="bk-name" required error={errors.name?.message}>
            <input
              id="bk-name"
              className="pg-input"
              type="text"
              autoComplete="name"
              {...register("name")}
            />
          </Field>
          <Field label="Mobile" htmlFor="bk-mobile" required error={errors.mobile?.message}>
            <input
              id="bk-mobile"
              className="pg-input"
              type="tel"
              autoComplete="tel"
              {...register("mobile")}
            />
          </Field>
          <Field label="WhatsApp" htmlFor="bk-whatsapp">
            <input
              id="bk-whatsapp"
              className="pg-input"
              type="tel"
              autoComplete="tel"
              {...register("whatsapp")}
            />
          </Field>
          <Field label="Email" htmlFor="bk-email" error={errors.email?.message}>
            <input
              id="bk-email"
              className="pg-input"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
          </Field>
          <Field label="Service" htmlFor="bk-service" required error={errors.service?.message}>
            <select id="bk-service" className="pg-select" defaultValue="" {...register("service")}>
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_FORM_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Occasion" htmlFor="bk-occasion">
            <select
              id="bk-occasion"
              className="pg-select"
              defaultValue=""
              {...register("occasion")}
            >
              <option value="">Select an occasion</option>
              {OCCASION_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Date" htmlFor="bk-date" hint="A date range or a single day both work.">
            <input
              id="bk-date"
              className="pg-input"
              type="text"
              placeholder="e.g. 12–14 December"
              {...register("date")}
            />
          </Field>
          <Field label="Event location" htmlFor="bk-location">
            <input
              id="bk-location"
              className="pg-input"
              type="text"
              placeholder="Venue or city"
              {...register("location")}
            />
          </Field>
          <Field label="Preferred time" htmlFor="bk-time">
            <input
              id="bk-time"
              className="pg-input"
              type="text"
              placeholder="e.g. morning, 6 AM onwards"
              {...register("time")}
            />
          </Field>
          <Field label="Number of people" htmlFor="bk-people">
            <input
              id="bk-people"
              className="pg-input"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 2"
              {...register("people")}
            />
          </Field>
          <Field label="Makeup preference" htmlFor="bk-preference">
            <select
              id="bk-preference"
              className="pg-select"
              defaultValue=""
              {...register("preference")}
            >
              <option value="">No preference yet</option>
              <option value="Natural">Natural / skin-first</option>
              <option value="Soft glam">Soft glam</option>
              <option value="HD">HD finish</option>
              <option value="Airbrush">Airbrush</option>
              <option value="Full glam">Full glam</option>
            </select>
          </Field>
          <Field label="Additional notes" htmlFor="bk-notes">
            <textarea id="bk-notes" className="pg-textarea" rows={4} {...register("notes")} />
          </Field>
        </div>
      </form>
      <aside className="pg-booking-aside" aria-label="Your enquiry">
        <SectionLabel>YOUR ENQUIRY</SectionLabel>
        <dl className="pg-enquiry-summary">
          {summaryRows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd className={row.value ? "" : "is-empty"}>{row.value || "Not selected yet"}</dd>
            </div>
          ))}
        </dl>
        <p className="pg-booking-note">
          {STUDIO_CONFIG.hours
            ? `Studio hours: ${STUDIO_CONFIG.hours}.`
            : "Studio timings are confirmed during consultation."}
        </p>
        <Button
          type="submit"
          form="pg-booking-form"
          className="editorial-primary pg-booking-submit"
        >
          SUBMIT BOOKING REQUEST <ArrowUpRight aria-hidden="true" size={16} />
        </Button>
        <p className="pg-form-note">{DEMO.form}</p>
      </aside>
    </div>
  );
}
