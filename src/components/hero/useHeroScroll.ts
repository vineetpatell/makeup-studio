import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { startLenis } from '@/lib/lenis';
import { HERO_STAGES } from './config';

export function useHeroScroll(stage: React.RefObject<HTMLElement | null>, ready: boolean, reduced: boolean) {
  const progress = useRef({ value: reduced ? 1 : 0 });

  useEffect(() => {
    if (!ready || !stage.current) return;
    if (reduced) {
      progress.current.value = 1;
      return;
    }
    const el = stage.current;
    const stopLenis = startLenis();

    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 1.15,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const fill = el.querySelector<HTMLElement>('.hero-progress-fill');
          if (fill) fill.style.transform = `scaleY(${Math.max(.015, self.progress)})`;
        },
      },
    });
    timeline.to(progress.current, { value: 1, duration: 1 }, 0);
    timeline.fromTo(el.querySelector('.hero-overline'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.09 }, HERO_STAGES.TYPOGRAPHY);
    timeline.fromTo(el.querySelector('.hero-line-one'), { autoAlpha: 0, yPercent: 110 }, { autoAlpha: 1, yPercent: 0, duration: 0.12, ease: 'power4.out' }, HERO_STAGES.TYPOGRAPHY + 0.015);
    timeline.fromTo(el.querySelector('.hero-line-two'), { autoAlpha: 0, yPercent: 110 }, { autoAlpha: 1, yPercent: 0, duration: 0.12, ease: 'power4.out' }, HERO_STAGES.TYPOGRAPHY + 0.045);
    timeline.fromTo(el.querySelector('.hero-copy'), { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.1 }, HERO_STAGES.COPY);
    timeline.fromTo(el.querySelector('.hero-actions'), { autoAlpha: 0, y: 20, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.08 }, HERO_STAGES.CTA);
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => {
      window.clearTimeout(refresh);
      timeline.scrollTrigger?.kill();
      timeline.kill();
      stopLenis();
    };
  }, [ready, reduced, stage]);
  return progress;
}
