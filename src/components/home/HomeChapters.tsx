import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  academyCategories,
  carouselEditorial,
  carouselEditorialCopy,
  carouselWork,
  carouselWorkCopy,
  imagery,
  journey,
  services,
  studioDetails,
  work,
} from "./content";
import { Frame } from "./Frame";
import { Marquee } from "./Marquee";
import { useEditorialMotion } from "./motion";

function ChapterLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <p className="chapter-label">
      <span>{number}</span>
      <span>{children}</span>
    </p>
  );
}

function TextLink({
  to,
  children,
}: {
  to:
    | "/about"
    | "/services"
    | "/our-work"
    | "/academy"
    | "/studio"
    | "/booking"
    | "/contact"
    | "/gallery";
  children: ReactNode;
}) {
  return (
    <Button asChild variant="link" className="editorial-link">
      <Link to={to}>
        {children}
        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
    </Button>
  );
}

/** Section label + statement + the continuously moving image marquee. */
function CarouselBand({
  copy,
  titleId,
  className,
  scale,
  duration,
  slides,
}: {
  copy: { eyebrow: string; title: string; support: string; cta: string; to: string };
  titleId: string;
  className: string;
  scale: "standard" | "large";
  duration: number;
  slides: typeof carouselEditorial;
}) {
  return (
    <section className={`band ${className}`} aria-labelledby={titleId}>
      <div className="section-inner band-head">
        <p className="band-eyebrow" data-reveal="sm">
          {copy.eyebrow}
        </p>
        <h2 id={titleId} className="band-title" data-reveal="lg">
          {copy.title}
        </h2>
        <div className="band-aside">
          <p data-reveal="sm">{copy.support}</p>
          <TextLink to={copy.to as "/gallery"}>{copy.cta}</TextLink>
        </div>
      </div>
      <Marquee slides={slides} duration={duration} scale={scale} label={copy.eyebrow} />
    </section>
  );
}

export function HomeChapters() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEditorialMotion(rootRef);

  return (
    <div ref={rootRef} className="home-chapters">
      {/* 02 — Introduction: statement-led, compact, image anchored in the grid */}
      <section className="intro-section" aria-labelledby="intro-title">
        <div className="section-inner intro-grid">
          <div className="intro-lede" data-reveal="md">
            <ChapterLabel number="02">INTRODUCTION</ChapterLabel>
            <p>
              Professional makeup artistry and makeup education, brought together by one belief: the
              most compelling transformation reveals what is already yours.
            </p>
            <TextLink to="/about">DISCOVER OUR APPROACH</TextLink>
          </div>
          <h2 id="intro-title" className="intro-statement" data-reveal="lg">
            Beauty is not a look.
            <br />
            <em>It is a feeling.</em>
          </h2>
          <Frame
            className="intro-frame"
            ratio="landscape"
            src={imagery.airbrush}
            alt="Illustrative editorial beauty portrait"
            reveal="md"
          />
        </div>
      </section>

      <CarouselBand
        className="band--editorial"
        titleId="carousel-editorial-title"
        copy={carouselEditorialCopy}
        slides={carouselEditorial}
        scale="standard"
        duration={26}
      />
      {/* 03 — Signature services: one coordinated card grid */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="section-head">
            <ChapterLabel number="03">SIGNATURE SERVICES</ChapterLabel>
            <h2 id="services-title" data-reveal="lg">
              Artistry for
              <br />
              <em>every occasion.</em>
            </h2>
            <p data-reveal="sm">
              Considered beauty, from the first conversation to the final detail.
            </p>
          </div>
          <ul className="service-grid">
            {services.map((service, index) => (
              <li key={service.slug} data-reveal="sm">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="service-card"
                  aria-label={`Explore ${service.title}`}
                >
                  <Frame
                    ratio={index === 0 ? "wide" : index % 3 === 1 ? "tall" : "portrait"}
                    src={service.image}
                    alt={`Illustrative ${service.title} beauty image`}
                  >
                    <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                  </Frame>
                  <div className="service-meta">
                    <h3>{service.title}</h3>
                    <p>{service.note}</p>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="section-foot">
            <TextLink to="/services">EXPLORE ALL SERVICES</TextLink>
          </div>
        </div>
      </section>

      {/* 04 — Selected work: heading immediately followed by the composition */}
      <section className="work-section" aria-labelledby="work-title">
        <div className="section-inner">
          <div className="section-head section-head--split">
            <ChapterLabel number="04">SELECTED WORK</ChapterLabel>
            <h2 id="work-title" data-reveal="lg">
              A study in
              <br />
              <em>expression.</em>
            </h2>
            <p data-reveal="sm">
              Portraits of possibility. An editorial preview of the beauty stories to come.
            </p>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <Frame
                key={index}
                className={`work-frame work-frame-${index + 1}`}
                ratio={index < 2 ? "portrait" : "tall"}
                src={item.image}
                alt={item.alt}
                reveal="sm"
              />
            ))}
          </div>
          <div className="section-foot">
            <TextLink to="/our-work">VIEW ALL WORK</TextLink>
          </div>
        </div>
      </section>

      <CarouselBand
        className="band--work"
        titleId="carousel-work-title"
        copy={carouselWorkCopy}
        slides={carouselWork}
        scale="large"
        duration={30}
      />
      {/* 05 — The experience */}
      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="section-head section-head--split">
            <ChapterLabel number="05">THE EXPERIENCE</ChapterLabel>
            <h2 id="experience-title" data-reveal="lg">
              The hour that
              <br />
              <em>changes everything.</em>
            </h2>
            <p data-reveal="sm">Four movements, from the first conversation to the final look.</p>
          </div>
          <ol className="journey-grid">
            {journey.map((step, index) => (
              <li key={step.title} className="journey-step" data-reveal="sm">
                <span className="journey-number">
                  <i aria-hidden="true" />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — The academy */}
      <section className="academy-section" aria-labelledby="academy-title">
        <div className="section-inner academy-layout">
          <div className="academy-copy">
            <ChapterLabel number="06">THE ACADEMY</ChapterLabel>
            <h2 id="academy-title" data-reveal="lg">
              Master
              <br />
              <em>the art.</em>
            </h2>
            <p data-reveal="sm">
              Professional makeup education built around practice, technique, and the confidence to
              find your own creative voice.
            </p>
            <ul className="academy-categories" data-reveal="sm">
              {academyCategories.map((category, index) => (
                <li key={category}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {category}
                </li>
              ))}
            </ul>
            <TextLink to="/academy">EXPLORE THE ACADEMY</TextLink>
          </div>
          <div className="academy-media">
            <Frame
              ratio="portrait"
              src={imagery.academy}
              alt="Illustrative makeup training environment"
              reveal="md"
            />
            <p className="media-caption">THE PRACTICE OF ARTISTRY</p>
          </div>
        </div>
      </section>
      {/* 07 — The studio */}
      <section className="studio-section" aria-labelledby="studio-title">
        <div className="section-inner studio-layout">
          <div className="studio-copy">
            <ChapterLabel number="07">THE STUDIO</ChapterLabel>
            <h2 id="studio-title" data-reveal="lg">
              A room
              <br />
              <em>set for you.</em>
            </h2>
            <p data-reveal="sm">
              One client at a time. A calm, considered space where the work happens slowly and
              properly.
            </p>
            <TextLink to="/studio">CONTACT THE STUDIO</TextLink>
          </div>
          <Frame
            className="studio-frame"
            ratio="landscape"
            src={imagery.studio}
            alt="Illustrative professional makeup studio"
            reveal="md"
          />
        </div>
      </section>

      {/* 08 — In their words */}
      <section className="proof-section" aria-labelledby="proof-title">
        <div className="section-inner">
          <ChapterLabel number="08">IN THEIR WORDS</ChapterLabel>
          <h2 id="proof-title" data-reveal="lg">
            Real words,
            <br />
            <em>real people.</em>
          </h2>
          {studioDetails.testimonials.length > 0 ? (
            <div className="proof-grid">
              {studioDetails.testimonials.map((item) => (
                <blockquote key={item.name} data-reveal="sm">
                  <p>{item.quote}</p>
                  <cite>{item.name}</cite>
                </blockquote>
              ))}
            </div>
          ) : (
            <p className="proof-empty" data-reveal="sm">
              Real words, real experiences. Client stories will appear here once shared with
              permission.
            </p>
          )}
        </div>
      </section>

      {/* 09 — Final invitation */}
      <section className="closing-section" aria-labelledby="closing-title">
        <div className="section-inner closing-layout">
          <div className="closing-copy">
            <ChapterLabel number="09">THE BEGINNING OF SOMETHING BEAUTIFUL</ChapterLabel>
            <h2 id="closing-title" data-reveal="lg">
              Your moment.
              <br />
              <em>Your artistry.</em>
            </h2>
            <p data-reveal="sm">Professional Makeup Artistry &amp; Makeup Education</p>
            <div className="closing-actions" data-reveal="sm">
              <Button asChild className="editorial-primary">
                <Link to="/booking">
                  BOOK AN APPOINTMENT <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </Button>
              {studioDetails.whatsappUrl ? (
                <Button asChild variant="outline" className="editorial-outline">
                  <a href={studioDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WHATSAPP US <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </Button>
              ) : (
                <Button asChild variant="outline" className="editorial-outline">
                  <Link to="/contact">
                    WHATSAPP US <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <Frame
            className="closing-frame"
            ratio="portrait"
            src={imagery.occasion}
            alt="Illustrative beauty portrait"
            reveal="md"
          />
        </div>
      </section>
      <footer className="site-footer">
        <div className="section-inner">
          <div className="footer-top">
            <div className="footer-identity">
              <Link to="/" className="brand-mark" aria-label="Home">
                M<span aria-hidden="true">·</span>A
              </Link>
              <p>
                Professional makeup artistry and education. An exploration of beauty, expression,
                and the art of becoming.
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
                <Link to="/academy">Academy</Link>
                <Link to="/studio">Studio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/booking">Booking</Link>
              </div>
              <div>
                <span className="footer-label">GET IN TOUCH</span>
                {studioDetails.email ? (
                  <a href={`mailto:${studioDetails.email}`}>{studioDetails.email}</a>
                ) : (
                  <Link to="/contact">Email · details soon</Link>
                )}
                {studioDetails.instagramUrl ? (
                  <a href={studioDetails.instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram ↗
                  </a>
                ) : (
                  <span>Instagram · details soon</span>
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

      <div className="mobile-actions" aria-label="Quick actions">
        <Button asChild variant="ghost">
          <Link to="/contact">
            <Phone size={16} aria-hidden="true" />
            CALL
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/contact">
            <MessageCircle size={16} aria-hidden="true" />
            WHATSAPP
          </Link>
        </Button>
        <Button asChild>
          <Link to="/booking">
            BOOK <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
