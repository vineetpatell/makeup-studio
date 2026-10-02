import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import poster from '@/assets/beauty-poster.jpg';
import { useHeroScroll } from './useHeroScroll';
import { HeroText } from './HeroText';
import { HeroLoader } from './HeroLoader';

const BeautyScene = lazy(() => import('./BeautyScene'));

export function BeautyHero() {
  const stage = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [compact, setCompact] = useState(false);
  const [reduced, setReduced] = useState(false);
  const progress = useHeroScroll(stage, ready || failed, reduced);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const size = window.matchMedia('(max-width: 767px)');
    const update = () => { setReduced(motion.matches); setCompact(size.matches); };
    update();
    motion.addEventListener('change', update);
    size.addEventListener('change', update);
    const fallback = window.setTimeout(() => setFailed(current => current || !ready), 9000);
    return () => { motion.removeEventListener('change', update); size.removeEventListener('change', update); window.clearTimeout(fallback); };
  }, [ready]);

  return <main className="beauty-page">
    <section ref={stage} className={`beauty-hero ${reduced ? 'is-reduced' : ''}`} aria-label="The art of transformation">
      <div className={`hero-poster ${ready ? 'hero-poster-ready' : ''}`} style={{ backgroundImage: `url(${poster})` }} aria-hidden="true" />
      {!failed && <div className="hero-canvas" aria-hidden="true"><Suspense fallback={null}><BeautyScene progress={progress} compact={compact} reduced={reduced} onReady={onReady} /></Suspense></div>}
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline"><span className="hero-monogram">M<span>·</span>A</span><span className="hero-toplabel">A STUDY IN BEAUTY</span><span className="hero-edition">EST. IN ARTISTRY</span></div>
      <div className="hero-side-label" aria-hidden="true">THE BEAUTY EXPERIENCE — 01 / 01</div>
      <HeroText reduced={reduced || failed} />
      {!reduced && <div className="hero-scroll-note">SCROLL TO DISCOVER <span className="hero-scroll-rule" /></div>}
      {!reduced && <div className="hero-progress" aria-hidden="true"><div className="hero-progress-track"><div className="hero-progress-fill" /></div><span>01</span></div>}
      {!ready && !failed && <HeroLoader />}
    </section>
  </main>;
}
