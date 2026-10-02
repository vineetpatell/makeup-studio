import bridal from '@/assets/editorial-bridal.jpg';
import hd from '@/assets/editorial-hd.jpg';
import occasion from '@/assets/editorial-occasion.jpg';
import airbrush from '@/assets/editorial-airbrush.jpg';
import academy from '@/assets/editorial-academy.jpg';
import studio from '@/assets/editorial-studio.jpg';
import { findGalleryCategory } from '@/data/gallery';
import type { DemoImage } from '@/data/images';

// Editorial imagery is illustrative. Replace with commissioned studio work before publishing as a portfolio.
export const imagery = { bridal, hd, occasion, airbrush, academy, studio };

/**
 * Carousel slide sets.
 *
 * Both carousels read from the central image registry (src/data/images.ts) via
 * the gallery categories and case studies — no image URL is ever written in a
 * component. The strings below are *semantic keys*: swapping a photo later means
 * editing one key in the registry, never the carousel markup.
 */

/** Carousel #1 — the editorial gallery. Keyed by gallery category slug. */
const EDITORIAL_SLUGS = [
  'bridal',
  'hd',
  'airbrush',
  'engagement',
  'reception',
  'editorial',
  'soft-glam',
  'eye-makeup',
] as const;

/** Carousel #2 — the working portfolio, chosen for a more artistic sequence. */
const WORK_SLUGS = [
  'bridal',
  'reception',
  'soft-glam',
  'traditional',
  'contemporary',
  'editorial',
  'hairstyling',
  'eye-makeup',
] as const;

export type CarouselSlide = {
  /** Stable semantic key — also used as the React key and the slide id. */
  key: string;
  /** Small category caption shown on the slide. */
  category: string;
  image: DemoImage;
};

const slideFor = (slug: string): CarouselSlide | null => {
  const category = findGalleryCategory(slug);
  if (!category) return null;
  // Prefer a supporting frame for a more editorial, less repetitive sequence.
  const image = category.grid[1] ?? category.cover;
  return { key: slug, category: category.title, image };
};

export const carouselEditorial: CarouselSlide[] = EDITORIAL_SLUGS.flatMap((slug) => {
  const slide = slideFor(slug);
  return slide ? [slide] : [];
});

export const carouselWork: CarouselSlide[] = WORK_SLUGS.flatMap((slug) => {
  const slide = slideFor(slug);
  return slide ? [slide] : [];
});

/** Carousel #1 copy. */
export const carouselEditorialCopy = {
  eyebrow: 'SELECTED BEAUTY',
  title: 'A STUDY IN TRANSFORMATION.',
  support:
    'Bridal, editorial and occasion looks shaped around the person — not a template.',
  cta: 'EXPLORE THE GALLERY',
  to: '/gallery',
} as const;

/** Carousel #2 copy. */
export const carouselWorkCopy = {
  eyebrow: 'SELECTED WORK',
  title: 'THE LOOK, THE LIGHT, THE DETAIL.',
  support:
    'Portfolio studies from the studio — direction, makeup, hair and light, documented frame by frame.',
  cta: 'VIEW ALL WORK',
  to: '/our-work',
} as const;

export const services = [
  { title: 'Bridal Makeup', slug: 'bridal-makeup', image: bridal, note: 'For the moment that stays with you.' },
  { title: 'HD Makeup', slug: 'hd-makeup', image: hd, note: 'A considered finish, in every light.' },
  { title: 'Airbrush Makeup', slug: 'airbrush-makeup', image: airbrush, note: 'Lightness, refined.' },
  { title: 'Engagement / Reception', slug: 'engagement-reception', image: occasion, note: 'Made for the celebration.' },
  { title: 'Party / Occasion', slug: 'party-occasion', image: hd, note: 'For wherever the evening takes you.' },
  { title: 'Hairstyling', slug: 'hairstyling', image: bridal, note: 'The finishing form.' },
  { title: 'Draping', slug: 'draping', image: occasion, note: 'Every detail in place.' },
] as const;

export const work = [
  { category: 'Bridal', image: bridal, alt: 'Illustrative bridal makeup portrait' },
  { category: 'Editorial', image: hd, alt: 'Illustrative editorial makeup portrait' },
  { category: 'Occasion', image: occasion, alt: 'Illustrative occasion makeup portrait' },
  { category: 'HD', image: airbrush, alt: 'Illustrative HD beauty portrait' },
] as const;

export const journey = [
  { title: 'CONSULT', detail: 'It starts with your vision, your occasion, your point of view.' },
  { title: 'CREATE', detail: 'A considered look, shaped around you.' },
  { title: 'TRANSFORM', detail: 'Artistry in the details; intention in every touch.' },
  { title: 'REVEAL', detail: 'Still yourself. Entirely unforgettable.' },
] as const;

export const academyCategories = ['Professional Makeup', 'Bridal Artistry', 'Personal Makeup'] as const;

// Fill these only with verified details; empty values never create fake contact links or reviews.
export const studioDetails = {
  phone: '',
  email: '',
  address: '',
  whatsappUrl: '',
  instagramUrl: '',
  testimonials: [] as { quote: string; name: string; context?: string }[],
  studentWork: [] as { image: string; alt: string }[],
  socialPosts: [] as { image: string; alt: string; url: string }[],
  credentials: [] as string[],
};
