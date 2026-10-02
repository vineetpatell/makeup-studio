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

const enquirySchema = z.object({
  name: z.string().min(2, "Please share your name"),
  mobile: z.string().min(6, "Please share a reachable number"),
  whatsapp: z.string(),
  email: z.union([z.literal(""), z.string().email("Check the email address")]),
  service: z.string().min(1, "Choose a service"),
  date: z.string(),
  occasion: z.string(),
  location: z.string(),
  message: z.string(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const EMPTY: EnquiryValues = {
  name: "",
  mobile: "",
  whatsapp: "",
  email: "",
  service: "",
  date: "",
  occasion: "",
  location: "",
  message: "",
};

/**
 * Contact enquiry form.
 *
 * There is no CRM or email integration in this demo build, so the form
 * validates, shows a polished confirmation and states that honestly instead of
 * pretending an enquiry was transmitted.
 */
export function EnquiryForm() {
  const [submitted, setSubmitted] = useState<EnquiryValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema), defaultValues: EMPTY });

  const onSubmit = (values: EnquiryValues) => setSubmitted(values);

  if (submitted) {
    return (
      <div className="pg-form-success" aria-live="polite">
        <span className="pg-form-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <SectionLabel>YOUR ENQUIRY</SectionLabel>
        <h3>Ready to send — {submitted.name}.</h3>
        <p className="pg-muted">
          In this showcase build nothing is transmitted yet. {DEMO.form} The summary below is
          exactly what the studio will receive once the form is connected.
        </p>
        <dl className="pg-form-summary">
          <div>
            <dt>Service</dt>
            <dd>{submitted.service}</dd>
          </div>
          {submitted.date ? (
            <div>
              <dt>Preferred date</dt>
              <dd>{submitted.date}</dd>
            </div>
          ) : null}
          {submitted.occasion ? (
            <div>
              <dt>Occasion</dt>
              <dd>{submitted.occasion}</dd>
            </div>
          ) : null}
          <div>
            <dt>Mobile</dt>
            <dd>{submitted.mobile}</dd>
          </div>
          {submitted.whatsapp ? (
            <div>
              <dt>WhatsApp</dt>
              <dd>{submitted.whatsapp}</dd>
            </div>
          ) : null}
          {submitted.email ? (
            <div>
              <dt>Email</dt>
              <dd>{submitted.email}</dd>
            </div>
          ) : null}
          {submitted.location ? (
            <div>
              <dt>Location</dt>
              <dd>{submitted.location}</dd>
            </div>
          ) : null}
          {submitted.message ? (
            <div className="is-wide">
              <dt>Message</dt>
              <dd>{submitted.message}</dd>
            </div>
          ) : null}
        </dl>
        <div className="pg-form-success-actions">
          <Button
            variant="outline"
            className="editorial-outline"
            type="button"
            onClick={() => {
              setSubmitted(null);
              reset(EMPTY);
            }}
          >
            SEND ANOTHER ENQUIRY
          </Button>
          <Button asChild className="editorial-primary">
            <Link to="/booking">
              BOOK AN APPOINTMENT <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="pg-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="pg-form-grid">
        <Field label="Full name" htmlFor="enq-name" required error={errors.name?.message}>
          <input
            id="enq-name"
            className="pg-input"
            type="text"
            autoComplete="name"
            {...register("name")}
          />
        </Field>
        <Field label="Mobile number" htmlFor="enq-mobile" required error={errors.mobile?.message}>
          <input
            id="enq-mobile"
            className="pg-input"
            type="tel"
            autoComplete="tel"
            {...register("mobile")}
          />
        </Field>
        <Field
          label="WhatsApp number"
          htmlFor="enq-whatsapp"
          hint="Only if it differs from your mobile."
        >
          <input
            id="enq-whatsapp"
            className="pg-input"
            type="tel"
            autoComplete="tel"
            {...register("whatsapp")}
          />
        </Field>
        <Field label="Email" htmlFor="enq-email" error={errors.email?.message}>
          <input
            id="enq-email"
            className="pg-input"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
        <Field label="Service" htmlFor="enq-service" required error={errors.service?.message}>
          <select id="enq-service" className="pg-select" defaultValue="" {...register("service")}>
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
        <Field label="Preferred date" htmlFor="enq-date">
          <input
            id="enq-date"
            className="pg-input"
            type="text"
            placeholder="e.g. 12 December"
            {...register("date")}
          />
        </Field>
        <Field label="Occasion" htmlFor="enq-occasion">
          <select id="enq-occasion" className="pg-select" defaultValue="" {...register("occasion")}>
            <option value="">Select an occasion</option>
            {OCCASION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Location / venue" htmlFor="enq-location">
          <input id="enq-location" className="pg-input" type="text" {...register("location")} />
        </Field>
        <Field
          label="Message"
          htmlFor="enq-message"
          hint="Tell us about the look you are imagining."
        >
          <textarea id="enq-message" className="pg-textarea" rows={4} {...register("message")} />
        </Field>
      </div>
      <div className="pg-form-submit">
        <Button type="submit" className="editorial-primary">
          SEND ENQUIRY <ArrowUpRight aria-hidden="true" size={16} />
        </Button>
        <p className="pg-form-note">
          {STUDIO_CONFIG.email ? `Prefer email? Write to ${STUDIO_CONFIG.email}.` : DEMO.form}
        </p>
      </div>
    </form>
  );
}
