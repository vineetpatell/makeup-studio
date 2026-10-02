import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

export function startLenis() {
  const lenis = new Lenis({ duration: 1.25, smoothWheel: true, wheelMultiplier: 0.9 });
  const onScroll = () => ScrollTrigger.update();
  const onTick = (time: number) => lenis.raf(time * 1000);
  lenis.on("scroll", onScroll);
  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(onTick);
    lenis.off("scroll", onScroll);
    lenis.destroy();
  };
}
