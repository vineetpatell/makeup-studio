import { HeroCTA } from './HeroCTA';

export function HeroText({ reduced }: { reduced: boolean }) {
  return <div className={`hero-content ${reduced ? 'hero-content-static' : ''}`}>
    <div className="hero-overline">MAKEUP <span>•</span> ARTISTRY <span>•</span> EDUCATION</div>
    <h1 className="hero-title"><span className="hero-mask"><span className="hero-line-one">THE ART</span></span><span className="hero-mask"><span className="hero-line-two"><span className="hero-of">OF </span><span className="hero-transformation">TRANSFORMATION</span></span></span></h1>
    <div className="hero-copy"><p>Professional Makeup Artistry <em>&amp;</em> Makeup Education</p><span>BRIDAL&nbsp; • &nbsp;EDITORIAL&nbsp; • &nbsp;OCCASION&nbsp; • &nbsp;PROFESSIONAL TRAINING</span></div>
    <HeroCTA />
  </div>;
}