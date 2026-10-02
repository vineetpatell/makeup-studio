import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { PageImage } from "./PageImage";

/** Service directory card: large image, number, title, note, explore arrow. */
export function ServiceCard({
  service,
  index,
  size = "default",
  delay = 0,
}: {
  service: Service;
  index: number;
  size?: "default" | "wide" | "narrow";
  delay?: number;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`pg-service-card is-${size}`}
      aria-label={`Explore ${service.title}`}
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className="pg-service-image">
        <PageImage image={service.images.hero} showLabel />
      </div>
      <div className="service-meta">
        <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{service.title}</h3>
          <p>{service.tagline}</p>
        </div>
        <ArrowUpRight size={21} aria-hidden="true" />
      </div>
    </Link>
  );
}
