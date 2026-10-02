import { images, type DemoImage } from "./images";

/** Curriculum areas — educational categories, not claims about a certified course. */
export const AREAS_OF_STUDY: { title: string; detail: string }[] = [
  {
    title: "Skin Preparation",
    detail: "Reading skin and preparing it properly before any product goes on.",
  },
  {
    title: "Skin Types & Undertones",
    detail: "Understanding what different skins need from base work.",
  },
  {
    title: "Product Knowledge",
    detail: "What products do, how they behave, and where each belongs.",
  },
  {
    title: "Base & Complexion",
    detail: "Building an even, believable complexion that matches the person.",
  },
  { title: "Colour Theory", detail: "Choosing colour deliberately instead of by habit." },
  {
    title: "Eye Artistry",
    detail: "Shapes, blending, liners, lashes and eyes that suit the face.",
  },
  { title: "Contouring & Sculpting", detail: "Light and shadow used with restraint and intent." },
  { title: "Bridal Makeup", detail: "Looks built for ceremonies, jewellery and long days." },
  {
    title: "HD Makeup",
    detail: "Camera-conscious finishes and texture that survives photographs.",
  },
  {
    title: "Airbrush Techniques",
    detail: "Layered, even application and the control airbrushing requires.",
  },
  { title: "Hairstyling", detail: "Forms, textures and finishing that complete a look." },
  {
    title: "Draping",
    detail: "Saree, dupatta and bridal draping coordinated with the whole look.",
  },
  {
    title: "Editorial Makeup",
    detail: "Creative work for photography, fashion and visual stories.",
  },
  {
    title: "Camera & Lighting Awareness",
    detail: "How light and lenses change what the makeup does on camera.",
  },
  {
    title: "Client Consultation",
    detail: "Understanding the person, occasion and brief before the brush.",
  },
  {
    title: "Portfolio Development",
    detail: "Presenting your own work with intention and consistency.",
  },
];

export type Course = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  forWho: string[];
  learn: string[];
  curriculum: string[];
  practice: string;
  portfolio: string;
  hero: DemoImage;
  cover: DemoImage;
  /** Configurable fields — no duration, fee or certification is claimed yet. */
  details: { duration: string; fee: string; certification: string };
};

export const courses: Course[] = [
  {
    slug: "pro-makeup-artistry",
    title: "Professional Makeup Artistry",
    summary: "A structured foundation for aspiring professional makeup artists.",
    overview:
      "A foundation course that moves from skin and complexion through to colour, eyes and bridal application — building technique through repetition rather than imitation.",
    forWho: [
      "Beginners with no professional experience",
      "Self-taught artists wanting structure",
      "Anyone considering makeup as a career",
    ],
    learn: [
      "Skin preparation and product behaviour",
      "Complexion building and correction",
      "Colour theory applied to real faces",
      "Eye artistry and blending technique",
      "Contour and sculpting with restraint",
      "Bridal and HD application",
      "Portfolio practice with guided feedback",
    ],
    curriculum: [
      "skin preparation",
      "complexion",
      "colour",
      "eyes",
      "contour",
      "bridal",
      "HD",
      "portfolio practice",
    ],
    practice:
      "Guided practice at the studio stations, with repeated application drills before work on live models.",
    portfolio:
      "Portfolio development is built into the course so you finish with work that represents your own hand.",
    hero: images.hero.courses,
    cover: images.academy.courses.pro,
    details: { duration: "To be announced", fee: "Enquire", certification: "To be confirmed" },
  },
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup Specialist",
    summary:
      "Focused training around bridal beauty, event makeup, styling coordination and complete look development.",
    overview:
      "A focused course for artists who want to work with brides: reading a brief, building for ceremony and camera, and coordinating hair, draping and finishing details into one whole look.",
    forWho: [
      "Artists with foundational skills",
      "Freelancers moving into bridal work",
      "Artists building an event portfolio",
    ],
    learn: [
      "Consultation and reading the bridal brief",
      "Looks built around outfit, jewellery and venue light",
      "Coordination with hairstyling and draping",
      "Long-wear planning for multi-hour days",
      "Photographing finished work consistently",
    ],
    curriculum: [
      "bridal consultation",
      "bridal base work",
      "ceremony looks",
      "styling coordination",
      "draping awareness",
      "portfolio practice",
    ],
    practice:
      "Structured bridal scenarios practised at the studio, moving from consultation notes to the finished look.",
    portfolio:
      "Finish with bridal-focused portfolio work and a documented process for your own studio.",
    hero: images.hero.courses,
    cover: images.academy.courses.bridal,
    details: { duration: "To be announced", fee: "Enquire", certification: "To be confirmed" },
  },
  {
    slug: "advanced-hd-airbrush",
    title: "Advanced HD & Airbrush",
    summary:
      "Advanced complexion techniques for camera-conscious beauty and professional application.",
    overview:
      "For artists who already work with base makeup and want finer control: HD finishes, airbrush layering, and complexion work tested against real camera conditions.",
    forWho: [
      "Working artists refining complexion skill",
      "Artists adding airbrush to their kit",
      "Artists specialising in camera work",
    ],
    learn: [
      "Advanced complexion correction",
      "Airbrush control and layering",
      "Texture-preserving HD application",
      "Testing finishes under studio and event light",
      "Working efficiently on set",
    ],
    curriculum: [
      "advanced complexion",
      "colour correction",
      "HD finishes",
      "airbrush layering",
      "camera testing",
      "set practice",
    ],
    practice:
      "Technique drills with airbrush and HD products, checked under studio lighting and on camera.",
    portfolio:
      "Complete with complexion-focused portfolio imagery shot under controlled studio light.",
    hero: images.hero.courses,
    cover: images.academy.courses.advancedHd,
    details: { duration: "To be announced", fee: "Enquire", certification: "To be confirmed" },
  },
  {
    slug: "editorial-makeup",
    title: "Editorial Makeup",
    summary: "Creative makeup for photography, fashion and visual storytelling.",
    overview:
      "A creative course for artists who want to build imagery: concept, colour, texture and how makeup behaves once light and a lens are involved.",
    forWho: [
      "Artists with a creative direction in mind",
      "Artists wanting to shoot editorial work",
      "Artists building a visual identity",
    ],
    learn: [
      "Building a concept from a reference",
      "Colour and texture as creative tools",
      "Working with photographers and lighting",
      "Continuity across a story or series",
      "Presenting editorial work in a portfolio",
    ],
    curriculum: [
      "concept development",
      "colour direction",
      "texture work",
      "set etiquette",
      "lighting awareness",
      "portfolio building",
    ],
    practice:
      "Studio practice sessions with shooting setups so work is assessed the way it will be seen.",
    portfolio: "Guided editorial portfolio development, from concept boards to finished images.",
    hero: images.hero.courses,
    cover: images.academy.courses.editorial,
    details: { duration: "To be announced", fee: "Enquire", certification: "To be confirmed" },
  },
];

export function findCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
