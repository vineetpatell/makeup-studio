import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";
import { EditorialHeading } from "./EditorialHeading";
import { SectionLabel } from "./SectionLabel";

/** Reusable FAQ block built on the existing Radix accordion primitive. */
export function FAQ({
  items,
  label = "QUESTIONS",
  title,
  support,
  className,
}: {
  items: FaqItem[];
  label?: string;
  title?: ReactNode;
  support?: string;
  className?: string;
}) {
  return (
    <section
      className={`pg-section pg-faq-section${className ? ` ${className}` : ""}`}
      aria-label="Frequently asked questions"
    >
      <div className="section-inner pg-faq-layout">
        <div className="pg-faq-intro" data-reveal>
          <SectionLabel>{label}</SectionLabel>
          {title ? <EditorialHeading size="lg">{title}</EditorialHeading> : null}
          {support ? <p className="pg-muted">{support}</p> : null}
        </div>
        <Accordion type="single" collapsible className="pg-faq" data-reveal>
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="pg-faq-item">
              <AccordionTrigger className="pg-faq-question">{item.question}</AccordionTrigger>
              <AccordionContent className="pg-faq-answer">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
