import { images, type DemoImage } from "./images";

/**
 * Demo case studies.
 *
 * These are NOT real clients. Every study is labelled DEMO / PORTFOLIO STUDY and
 * uses illustrative imagery until real studio work replaces it.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  label: string;
  direction: string;
  look: string;
  makeup: string;
  hair: string;
  lighting: string;
  hero: DemoImage;
  gallery: DemoImage[];
  related: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bridal-study-01",
    title: "BRIDAL STUDY 01",
    category: "Bridal",
    label: "DEMO / PORTFOLIO STUDY",
    direction:
      "A wedding-morning story: preparation, jewellery and the quiet minute before leaving the room.",
    look: "Soft, luminous base with defined eyes, warm cheeks and a rose-toned lip that holds through the ceremony.",
    makeup:
      "Skin-first base, restrained contour, layered colour on the eyes and a considered lip that suits red and gold.",
    hair: "Low, structured bun finished with the veil placement in mind.",
    lighting: "Window light during preparation; warm interior light for the portrait frames.",
    hero: images.work.study01.hero,
    gallery: images.work.study01.gallery,
    related: "bridal",
  },
  {
    slug: "editorial-study-01",
    title: "EDITORIAL STUDY 01",
    category: "Editorial",
    label: "DEMO / PORTFOLIO STUDY",
    direction:
      "A low-key colour story built around negative space, shadow and a single strong focal point.",
    look: "Graphic liner, sculpted cheek and a muted lip so the eyes carry the frame.",
    makeup: "Shaped brow, precise liner work and colour placed deliberately rather than broadly.",
    hair: "Slicked, minimal, kept out of the way of the light.",
    lighting: "Hard directional light with deep shadow, tested on camera before committing.",
    hero: images.work.study02.hero,
    gallery: images.work.study02.gallery,
    related: "editorial",
  },
  {
    slug: "soft-glam-study-01",
    title: "SOFT GLAM STUDY 01",
    category: "Soft Glam",
    label: "DEMO / PORTFOLIO STUDY",
    direction: "A close-up study of eye work, lashes and soft glam detail at portrait distance.",
    look: "Blended eyeshadow, lifted liner, defined lashes and a glossy, natural lip.",
    makeup: "Detail-focused work photographed close so the blending does the talking.",
    hair: "Soft, brushed back and left deliberately simple.",
    lighting: "Beauty dish light from the front with a gentle fall-off.",
    hero: images.work.study03.hero,
    gallery: images.work.study03.gallery,
    related: "soft-glam",
  },
  {
    slug: "reception-study-01",
    title: "RECEPTION STUDY 01",
    category: "Reception",
    label: "DEMO / PORTFOLIO STUDY",
    direction: "An evening story about a statement lip, clean skin and confidence after dark.",
    look: "Polished complexion with a deep red lip and minimal eye interference.",
    makeup: "Precision lip work, clean liner and careful setting for a long evening.",
    hair: "Loose, modern and moved off the face for the lip to read.",
    lighting: "Mixed evening light with a single clean key for the portrait frames.",
    hero: images.work.study04.hero,
    gallery: images.work.study04.gallery,
    related: "reception",
  },
];

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
