import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

/**
 * Compact service row: number, title, note and arrow.
 * Used for related-service lists and cross-links.
 */
export function ServiceMeta({
  number,
  title,
  note,
  href,
}: {
  number: string;
  title: string;
  note: string;
  href: { slug: string };
}) {
  return (
    <Link
      to="/services/$slug"
      params={href}
      className="service-meta pg-service-meta"
      aria-label={`Explore ${title}`}
      data-reveal
    >
      <span className="service-index">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{note}</p>
      </div>
      <ArrowUpRight size={21} aria-hidden="true" />
    </Link>
  );
}
