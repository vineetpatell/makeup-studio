import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroCTA() {
  return <div className="hero-actions">
    <Button className="hero-button hero-button-primary" onClick={() => {}} title="Our work page is coming in a future phase">EXPLORE OUR WORK <ArrowUpRight aria-hidden="true" /></Button>
    <Button variant="outline" className="hero-button hero-button-secondary" onClick={() => {}} title="Appointments will be available in a future phase">BOOK AN APPOINTMENT</Button>
  </div>;
}