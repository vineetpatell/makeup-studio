import { Link } from "@tanstack/react-router";
import { SITE_CONFIG, STUDIO_CONFIG } from "@/data/studio";
import { services } from "@/data/services";

const STUDIO_LINKS = [
  { label: "Academy", to: "/academy" },
  { label: "Studio", to: "/studio" },
  { label: "Contact", to: "/contact" },
  { label: "Booking", to: "/booking" },
] as const;

const FOOTER_SERVICES = [
  "bridal",
  "hd-makeup",
  "airbrush",
  "engagement",
  "reception",
  "hairstyling",
  "draping",
];

/**
 * Footer for the inner pages. Every value comes from the studio config, so
 * replacing real contact details later is a one-file change.
 */
export function SiteFooter() {
  const footerServices = FOOTER_SERVICES.map((slug) =>
    services.find((service) => service.slug === slug),
  ).filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-top">
          <div className="footer-identity">
            <Link to="/" className="footer-brand" aria-label="Home">
              M<span>·</span>A
            </Link>
            <p>
              {SITE_CONFIG.tagline}. An exploration of beauty, expression, and the art of becoming.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <span className="footer-label">EXPLORE</span>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/our-work">Our Work</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
            <div>
              <span className="footer-label">THE STUDIO</span>
              {STUDIO_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <span className="footer-label">SERVICES</span>
              {footerServices.map((service) => (
                <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }}>
                  {service.title.replace(" Makeup", "")}
                </Link>
              ))}
            </div>
            <div>
              <span className="footer-label">GET IN TOUCH</span>
              {STUDIO_CONFIG.phone ? (
                <a href={`tel:${STUDIO_CONFIG.phone}`}>{STUDIO_CONFIG.phone}</a>
              ) : (
                <Link to="/contact">Phone · details soon</Link>
              )}
              {STUDIO_CONFIG.whatsappUrl ? (
                <a href={STUDIO_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              ) : (
                <Link to="/contact">WhatsApp · details soon</Link>
              )}
              {STUDIO_CONFIG.email ? (
                <a href={`mailto:${STUDIO_CONFIG.email}`}>{STUDIO_CONFIG.email}</a>
              ) : (
                <Link to="/contact">Email · details soon</Link>
              )}
              <span>{STUDIO_CONFIG.address || "Location · details soon"}</span>
              {STUDIO_CONFIG.instagramUrl ? (
                <a href={STUDIO_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram ↗
                </a>
              ) : (
                <Link to="/contact">Instagram · details soon</Link>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Never Ending Services. All rights reserved.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <span>Designed &amp; Developed by Never Ending Services</span>
        </div>
      </div>
    </footer>
  );
}
