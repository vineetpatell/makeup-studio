import { useProgress } from '@react-three/drei';
import poster from '@/assets/beauty-poster.jpg';

export function HeroLoader() {
  const { progress } = useProgress();
  return <div className="hero-loader" role="status" style={{ backgroundImage: `url(${poster})` }}><span className="hero-loader-mark">M<span>·</span>A</span><span className="hero-loader-label">LOADING BEAUTY EXPERIENCE</span><span className="hero-loader-percent">{Math.round(progress)}%</span><span className="hero-loader-line" /></div>;
}