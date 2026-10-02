import { images, type DemoImage } from "./images";

export type GalleryCategory = {
  slug: string;
  title: string;
  /** Short editorial caption used on the archive index. */
  short: string;
  description: string;
  hero: DemoImage;
  grid: DemoImage[];
  /** Internal demo label, e.g. student work separation. */
  label?: string;
  /** Slugs of the related looks shown at the end of the page. */
  related: string[];
  /** Cover used on the archive index card. */
  cover: DemoImage;
};

const cat = (
  slug: string,
  title: string,
  short: string,
  description: string,
  set: { hero: DemoImage; grid: DemoImage[]; label?: string },
  related: string[],
): GalleryCategory => ({
  slug,
  title,
  short,
  description,
  hero: set.hero,
  grid: set.grid,
  cover: set.grid[0] ?? set.hero,
  ...(set.label ? { label: set.label } : {}),
  related,
});

export const galleryCategories: GalleryCategory[] = [
  cat(
    "bridal",
    "Bridal",
    "Ceremony looks, jewellery and bridal detail.",
    "Bridal beauty imagery: reds and golds, jewellery placements, veils, and the detail work that holds a look together until the last photograph.",
    images.gallery.bridal,
    ["traditional", "draping", "hd", "soft-glam"],
  ),
  cat(
    "hd",
    "HD",
    "Camera-conscious finishes and skin-first base work.",
    "A study of complexion work — evenness, texture, and finishes designed to read clearly on camera without losing the look of real skin.",
    images.gallery.hd,
    ["airbrush", "soft-glam", "natural", "bridal"],
  ),
  cat(
    "airbrush",
    "Airbrush",
    "Fine, layered application and quiet process.",
    "Airbrush application in progress: layering, mirror checks, and the light, even finishes that hold through long events.",
    images.gallery.airbrush,
    ["hd", "natural", "soft-glam", "party"],
  ),
  cat(
    "engagement",
    "Engagement",
    "Warm, intimate celebrations and soft polish.",
    "Engagement looks composed for intimate ceremonies and interior lighting — soft definition, luminous skin and photograph-friendly polish.",
    images.gallery.engagement,
    ["bridal", "soft-glam", "reception", "hairstyling"],
  ),
  cat(
    "reception",
    "Reception",
    "Evening definition, luminosity and atmosphere.",
    "Reception and evening beauty: deeper definition, luminous finishes and looks built to hold their presence as the night moves.",
    images.gallery.reception,
    ["party", "editorial", "contemporary", "hd"],
  ),
  cat(
    "party",
    "Party",
    "Modern beauty for celebrations and evenings out.",
    "Party and occasion beauty — statement lips, defined eyes and finishes made for dinners, cocktail evenings and celebrations.",
    images.gallery.party,
    ["reception", "eye-makeup", "editorial", "contemporary"],
  ),
];

/* ------------------------------------------------------------------ */
/* Styling-led categories                                              */
/* ------------------------------------------------------------------ */
galleryCategories.push(
  cat(
    "hairstyling",
    "Hairstyling",
    "Form, texture and finishing detail.",
    "Hair work as part of the complete look — updos, buns, soft waves and the finishing details that hold a style in place.",
    images.gallery.hairstyling,
    ["contemporary", "bridal", "draping", "traditional"],
  ),
  cat(
    "draping",
    "Draping",
    "Saree, dupatta and bridal drape work.",
    "Draping imagery: sarees, dupattas, jewellery placement and the silhouette work that ties makeup and styling together.",
    images.gallery.draping,
    ["traditional", "bridal", "hairstyling", "contemporary"],
  ),
  cat(
    "before-after",
    "Before / After",
    "Transformation studies, clearly labelled.",
    "Side-by-side transformation studies using demo imagery. Nothing here is presented as a real client result.",
    { ...images.gallery.beforeAfter, label: "DEMO TRANSFORMATION" },
    ["bridal", "hd", "airbrush", "soft-glam"],
  ),
  cat(
    "student-work",
    "Student Work",
    "Practice plates from the academy floor.",
    "Practice and technique work from academy sessions, kept visually separate from client portfolio imagery.",
    {
      hero: images.gallery.studentWork.hero,
      grid: images.academy.studentWork,
      label: "ACADEMY / STUDENT WORK",
    },
    ["before-after", "eye-makeup", "soft-glam", "hd"],
  ),
);

export function findGalleryCategory(slug: string): GalleryCategory | undefined {
  return galleryCategories.find((category) => category.slug === slug);
}

export function relatedCategories(category: GalleryCategory): GalleryCategory[] {
  return category.related
    .map((slug) => galleryCategories.find((item) => item.slug === slug))
    .filter((item): item is GalleryCategory => Boolean(item));
}

/* ------------------------------------------------------------------ */
/* Editorial-led categories                                            */
/* ------------------------------------------------------------------ */
galleryCategories.push(
  cat(
    "editorial",
    "Editorial",
    "Concept-led beauty for photography and stories.",
    "Editorial beauty work: dramatic light, graphic colour and makeup used as a creative language rather than a routine.",
    images.gallery.editorial,
    ["fashion", "party", "contemporary", "eye-makeup"],
  ),
  cat(
    "fashion",
    "Fashion",
    "Runway energy and photographic styling.",
    "Fashion-led makeup imagery — strong shapes, directional colour and looks built to be photographed rather than seen in daylight.",
    images.gallery.fashion,
    ["editorial", "contemporary", "eye-makeup", "reception"],
  ),
  cat(
    "soft-glam",
    "Soft Glam",
    "Soft definition, glow and modern polish.",
    "Soft glam beauty: blended eyes, luminous skin and definition kept gentle enough to feel like the person, only more considered.",
    images.gallery.softGlam,
    ["natural", "hd", "bridal", "eye-makeup"],
  ),
  cat(
    "natural",
    "Natural",
    "Skin-first looks that stay honest.",
    "Natural beauty work — skin prepared and finished so the makeup supports the face instead of covering it.",
    images.gallery.natural,
    ["soft-glam", "hd", "airbrush", "before-after"],
  ),
  cat(
    "traditional",
    "Traditional",
    "Jewellery, colour and ceremony detail.",
    "Traditional beauty styling: gold jewellery, layered colour and the ceremonial details that define a complete look.",
    images.gallery.traditional,
    ["bridal", "draping", "contemporary", "hairstyling"],
  ),
  cat(
    "contemporary",
    "Contemporary",
    "Modern styling applied to classic forms.",
    "Contemporary styling — modern hair, current textures and classic drapes worn with a lighter, current hand.",
    images.gallery.contemporary,
    ["traditional", "hairstyling", "fashion", "reception"],
  ),
  cat(
    "eye-makeup",
    "Eye Makeup",
    "Liner, lash and blending studies up close.",
    "Close-range studies of eye work: liner shapes, blended shadow, lashes and the detail that photographs reward.",
    images.gallery.eyeMakeup,
    ["soft-glam", "editorial", "hd", "party"],
  ),
);
