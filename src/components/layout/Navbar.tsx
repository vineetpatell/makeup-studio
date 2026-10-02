import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PRIMARY_NAV, SITE_CONFIG, STUDIO_CONFIG } from "@/data/studio";
import { services } from "@/data/services";
import { useNavVisibility } from "@/lib/use-nav-visibility";

/**
 * The site's floating capsule navigation.
 *
 * A premium pill that floats above the content instead of a full-width bar: a
 * monogram on the left, the primary nav centred, and the booking pill on the
 * right. Below 1024px it collapses to a monogram + menu pill and opens a
 * full-screen editorial panel.
 *
 * `boundary` decides *when* it appears. The inner pages pass nothing (always
 * visible); the homepage passes the "02 Introduction" section so the capsule
 * stays hidden for the whole pinned hero and fades in from Section 02 onward.
 */
export function Navbar({ boundary }: { boundary?: string } = {}) {
  const navRef = useNavVisibility<HTMLElement>(boundary);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Esc closes, and the page behind the panel is locked. `data-lenis-prevent`
  // is honoured by the hero's Lenis instance, so the homepage does not scroll
  // behind the open menu either — without reaching for a second Lenis.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header ref={navRef} className="lux-nav" data-nav-visible={boundary ? undefined : "true"}>
        <div className="lux-nav-inner">
          <Link
            to="/"
            className="lux-brand"
            aria-label={`${SITE_CONFIG.name} — home`}
            onClick={close}
          >
            M<span aria-hidden="true">·</span>A
          </Link>

          <nav className="lux-nav-links" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="lux-nav-link"
                activeProps={{ className: "lux-nav-link is-active" }}
                {...(item.exact ? { activeOptions: { exact: true } } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lux-nav-actions">
            <Link to="/booking" className="lux-cta">
              BOOK AN APPOINTMENT
              <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="lux-menu-button"
              aria-expanded={open}
              aria-controls="lux-menu-panel"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" size={17} /> : <Menu aria-hidden="true" size={17} />}
              <span className="lux-menu-button-label">{open ? "CLOSE" : "MENU"}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="lux-menu-panel"
        ref={panelRef}
        className="lux-menu"
        data-state={open ? "open" : "closed"}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        {...(open ? {} : { inert: true })}
      >
        <nav className="lux-menu-list" aria-label="Mobile">
          {PRIMARY_NAV.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="lux-menu-link"
              activeProps={{ className: "lux-menu-link is-active" }}
              {...(item.exact ? { activeOptions: { exact: true } } : {})}
              onClick={close}
            >
              <span className="lux-menu-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="lux-menu-services">
          <span className="lux-menu-heading">Services</span>
          <div>
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={close}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="lux-menu-actions">
          <Link to="/booking" className="lux-cta lux-cta-block" onClick={close}>
            BOOK AN APPOINTMENT
            <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          {STUDIO_CONFIG.whatsappUrl ? (
            <a
              className="lux-menu-alt"
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP US <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ) : (
            <Link className="lux-menu-alt" to="/contact" onClick={close}>
              CONTACT THE STUDIO <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
