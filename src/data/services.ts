import { images, type DemoImage } from "./images";

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** One-line note used on cards. */
  tagline: string;
  /** Editorial description for the service hero and directory. */
  description: string;
  /** What the service can include — phrased as possibilities, not package claims. */
  includes: string[];
  suitableFor: string[];
  /** What the finish is about, without unsupported claims. */
  finish: string;
  images: {
    hero: DemoImage;
    looks: DemoImage[];
    details: DemoImage[];
    before?: DemoImage;
    after?: DemoImage;
  };
  related: string[];
};

export const services: Service[] = [
  {
    slug: "bridal",
    number: "01",
    title: "Bridal Makeup",
    tagline: "For the moment that stays with you.",
    description:
      "A complete bridal beauty experience shaped around the ceremony, outfit, jewellery, skin and personal style.",
    includes: [
      "Consultation on the look and the day",
      "Skin preparation and base work",
      "Makeup built for the ceremony and venue light",
      "Hairstyling coordination",
      "Draping coordination",
      "Lash and finishing details",
    ],
    suitableFor: [
      "Wedding morning and ceremony looks",
      "Multi-day celebrations with different outfits",
      "Brides who want a look that still reads as themselves",
    ],
    finish:
      "Natural-looking where it suits, more defined where the ceremony and photographs ask for it.",
    images: {
      hero: images.services.bridal.hero,
      looks: [
        images.services.bridal.look01,
        images.services.bridal.look02,
        images.services.bridal.look03,
      ],
      details: [images.services.bridal.detail],
      before: images.services.bridal.before,
      after: images.services.bridal.after,
    },
    related: ["hd-makeup", "airbrush", "hairstyling", "draping"],
  },
  {
    slug: "hd-makeup",
    number: "02",
    title: "HD Makeup",
    tagline: "A considered finish, in every light.",
    description:
      "A refined, camera-conscious finish designed to maintain natural-looking skin texture while reading beautifully on camera.",
    includes: [
      "Complexion work built for photographs and video",
      "Texture-preserving base application",
      "Colour matched to neck and décolletage",
      "Camera check under studio and event lighting",
      "Setting planned around the length of the event",
    ],
    suitableFor: [
      "Photography-led events and portraits",
      "Guests who will be on camera through the day",
      "Anyone wanting a polished but still skin-like finish",
    ],
    finish: "A balanced, photograph-friendly finish that keeps skin looking like skin.",
    images: {
      hero: images.services.hd.hero,
      looks: [images.services.hd.look01, images.services.hd.look02, images.services.hd.look03],
      details: [images.services.hd.detail],
      before: images.services.hd.before,
      after: images.services.hd.after,
    },
    related: ["bridal", "airbrush", "party", "reception"],
  },
  {
    slug: "airbrush",
    number: "03",
    title: "Airbrush Makeup",
    tagline: "Lightness, refined.",
    description:
      "A lightweight, finely layered finish designed for an even appearance and long event days.",
    includes: [
      "Airbrushed foundation applied in fine layers",
      "Evenness built gradually rather than at once",
      "Blush and highlight worked into the same finish",
      "Feather-light setting for a breathable feel",
    ],
    suitableFor: [
      "Long celebrations with multiple functions",
      "Guests who prefer a lighter feel on the skin",
      "Looks that need to stay consistent across hours of photographs",
    ],
    finish: "A fine, even application with a soft finish — agreed during consultation.",
    images: {
      hero: images.services.airbrush.hero,
      looks: [
        images.services.airbrush.look01,
        images.services.airbrush.look02,
        images.services.airbrush.look03,
      ],
      details: [images.services.airbrush.detail],
      before: images.services.airbrush.before,
      after: images.services.airbrush.after,
    },
    related: ["hd-makeup", "bridal", "party", "engagement"],
  },
  {
    slug: "engagement",
    number: "04",
    title: "Engagement Makeup",
    tagline: "Warm, intimate celebrations.",
    description:
      "Engagement looks composed for intimate ceremonies and interior lighting — soft definition, luminous skin and photograph-friendly polish.",
    includes: [
      "Consultation on the outfit, jewellery and venue light",
      "Skin preparation and complexion work",
      "Soft definition built for close-up frames",
      "Hairstyling coordination",
      "Finishing and setting for a full celebration",
    ],
    suitableFor: [
      "Engagement and roka ceremonies",
      "Couple portraits and indoor celebrations",
      "Anyone wanting polish that still reads as natural",
    ],
    finish:
      "Warm, luminous and softly defined — composed to hold up in indoor light and close-up frames.",
    images: {
      hero: images.services.engagement.hero,
      looks: [
        images.services.engagement.look01,
        images.services.engagement.look02,
        images.services.engagement.look03,
      ],
      details: [images.services.engagement.detail],
      before: images.services.engagement.before,
      after: images.services.engagement.after,
    },
    related: ["bridal", "reception", "hairstyling", "draping"],
  },
  {
    slug: "reception",
    number: "05",
    title: "Reception Makeup",
    tagline: "Evening definition and atmosphere.",
    description:
      "Reception and evening beauty: deeper definition, luminous finishes and looks built to hold their presence as the night moves.",
    includes: [
      "Consultation on the evening look and venue lighting",
      "Complexion work with deeper, evening definition",
      "Eye and lip work composed for photographs after dark",
      "Setting and touch-up planning for a long event",
      "Hairstyling coordination",
    ],
    suitableFor: [
      "Reception and sangeet evenings",
      "Guests who will be photographed through the night",
      "Those wanting more definition than a daytime look",
    ],
    finish:
      "Deepened definition with luminosity kept intact — built for evening light and moving rooms.",
    images: {
      hero: images.services.reception.hero,
      looks: [
        images.services.reception.look01,
        images.services.reception.look02,
        images.services.reception.look03,
      ],
      details: [images.services.reception.detail],
      before: images.services.reception.before,
      after: images.services.reception.after,
    },
    related: ["party", "hd-makeup", "hairstyling", "engagement"],
  },
  {
    slug: "party",
    number: "06",
    title: "Party Makeup",
    tagline: "Ready for the night ahead.",
    description:
      "Occasion makeup for parties and celebrations — colour driven by your outfit, definition that suits the setting and a finish made to last.",
    includes: [
      "Consultation on outfit, colour and the occasion",
      "Base work matched to your skin and the venue light",
      "Eye and lip work suited to the mood of the night",
      "Lash and finishing details",
      "Optional hairstyling add-on",
    ],
    suitableFor: [
      "Parties, birthdays and celebrations",
      "Cocktail and evening events",
      "Anyone wanting a defined look for one night",
    ],
    finish:
      "Defined and expressive, with the colour direction chosen to sit with what you are wearing.",
    images: {
      hero: images.services.party.hero,
      looks: [
        images.services.party.look01,
        images.services.party.look02,
        images.services.party.look03,
      ],
      details: [images.services.party.detail],
      before: images.services.party.before,
      after: images.services.party.after,
    },
    related: ["reception", "hd-makeup", "hairstyling", "editorial"],
  },
  {
    slug: "hairstyling",
    number: "07",
    title: "Hairstyling",
    tagline: "The frame around the face.",
    description:
      "Hair styled to complete the look — updos, waves, braids and finishing work coordinated with the makeup, outfit and occasion.",
    includes: [
      "Consultation on hair length, texture and the outfit",
      "Updo, wave, braid or open styling",
      "Setting and finishing for the length of the day",
      "Coordinated with makeup and draping",
      "Accessory and hairpiece placement",
    ],
    suitableFor: [
      "Bridal and engagement looks needing a complete finish",
      "Guests wanting hair styled for an event",
      "Standalone styling appointments",
    ],
    finish:
      "Styled to hold — finished so the shape survives the ceremony, the photographs and the car journey.",
    images: {
      hero: images.services.hairstyling.hero,
      looks: [
        images.services.hairstyling.look01,
        images.services.hairstyling.look02,
        images.services.hairstyling.look03,
      ],
      details: [images.services.hairstyling.detail],
      before: images.services.hairstyling.before,
      after: images.services.hairstyling.after,
    },
    related: ["bridal", "draping", "party", "reception"],
  },
  {
    slug: "draping",
    number: "08",
    title: "Draping",
    tagline: "Silhouette, fabric and fall.",
    description:
      "Saree, dupatta and bridal draping coordinated with the makeup, hairstyle and jewellery so the complete look holds together.",
    includes: [
      "Consultation on fabric, jewellery and silhouette",
      "Saree, lehenga or dupatta draping",
      "Pin work planned for movement and comfort",
      "Coordination with hair and makeup",
      "Final alignment before you step out",
    ],
    suitableFor: [
      "Bridal and reception looks",
      "Traditional ceremonies and family functions",
      "Anyone wanting the drape handled properly",
    ],
    finish:
      "A drape that stays where it was placed — neat in photographs and comfortable through the event.",
    images: {
      hero: images.services.draping.hero,
      looks: [
        images.services.draping.look01,
        images.services.draping.look02,
        images.services.draping.look03,
        images.services.draping.look04,
      ],
      details: [images.services.draping.detail, images.services.draping.detail02],
    },
    related: ["bridal", "hairstyling", "reception", "engagement"],
  },
  {
    slug: "editorial",
    number: "09",
    title: "Editorial Makeup",
    tagline: "Beauty with a point of view.",
    description:
      "Creative, concept-led makeup for photography, fashion and visual storytelling — colour, texture and structure used deliberately.",
    includes: [
      "Concept and reference discussion before the shoot",
      "Colour direction and texture work",
      "Looks tested against the lighting and lens",
      "Continuity planning across a series",
      "On-set touch-ups during the shoot",
    ],
    suitableFor: [
      "Editorial, fashion and brand shoots",
      "Portrait and creative collaborations",
      "Artists and photographers building imagery",
    ],
    finish:
      "Considered and graphic where the concept asks for it — the makeup is made to be photographed, not only seen.",
    images: {
      hero: images.services.editorial.hero,
      looks: [
        images.services.editorial.look01,
        images.services.editorial.look02,
        images.services.editorial.look03,
        images.services.editorial.look04,
      ],
      details: [images.services.editorial.detail, images.services.editorial.detail02],
    },
    related: ["hd-makeup", "party", "hairstyling", "airbrush"],
  },
];

/** Legacy homepage slugs map onto the canonical service routes. */
export const SERVICE_ALIASES: Record<string, string> = {
  "bridal-makeup": "bridal",
  "airbrush-makeup": "airbrush",
  "engagement-reception": "engagement",
  "party-occasion": "party",
};

export function findService(slug: string): Service | undefined {
  const direct = services.find((service) => service.slug === slug);
  if (direct) return direct;
  const alias = SERVICE_ALIASES[slug];
  if (!alias) return undefined;
  return services.find((service) => service.slug === alias);
}

/** Options used by the contact and booking forms. */
export const SERVICE_FORM_OPTIONS = [
  ...services.map((service) => service.title),
  "Academy Enquiry",
  "Other",
];
