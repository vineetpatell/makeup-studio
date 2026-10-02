import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UpcomingPage({ title }: { title: string }) {
  return <main className="upcoming-page">
    <div className="upcoming-top"><Link to="/" className="home-brand" aria-label="Home">M<span>·</span>A</Link><span>MAKEUP ARTISTRY & EDUCATION</span></div>
    <div className="upcoming-inner"><p className="eyebrow">THE STUDIO JOURNAL</p><h1>{title}</h1><p>This page is being prepared. In the meantime, explore the homepage.</p><Button asChild variant="outline" className="editorial-outline"><Link to="/"><ArrowLeft size={16} /> BACK TO HOME</Link></Button></div>
  </main>;
}
