/**
 * Central studio configuration — the single place to replace demo placeholders
 * with real studio information.
 *
 * No phone number, WhatsApp number, email, address, rating, review count,
 * certification or accreditation has been invented anywhere in this project.
 * Empty values render neutral "coming soon" states instead of fabricated data.
 */

export const SITE_CONFIG = {
  /**
   * The real studio name has not been supplied yet. Page titles read
   * "Bridal Makeup | Makeup Artistry & Education" until this is replaced.
   */
  name: "Makeup Artistry & Education",
  monogram: "M·A",
  tagline: "Professional Makeup Artistry & Makeup Education",
  city: "",
} as const;

export const STUDIO_CONFIG = {
  phone: "", // e.g. '+91 00000 00000'
  whatsapp: "", // e.g. '+91 00000 00000'
  whatsappUrl: "", // full wa.me link once the number is known
  email: "", // e.g. 'studio@example.com'
  address: "", // street, area, city
  instagram: "", // e.g. '@studio'
  instagramUrl: "", // full profile URL
  bookingUrl: "", // optional external booking system
  mapUrl: "", // optional Google Maps share link
  hours: "", // e.g. 'By appointment'
} as const;

/** Neutral copy shown wherever a real studio detail has not been supplied. */
export const PLACEHOLDER = {
  phone: "Details coming soon",
  whatsapp: "Details coming soon",
  email: "Details coming soon",
  address: "Address coming soon",
  hours: "Timings coming soon",
  instagram: "Handle coming soon",
  location: "STUDIO LOCATION — DETAILS COMING SOON",
  duration: "To be announced",
  fee: "Enquire",
  certification: "To be confirmed",
} as const;

/** Honest labels used because the site is a demo/showcase build. */
export const DEMO = {
  form: "Demo enquiry form — connect to email/CRM before production.",
  portfolio: "DEMO / PORTFOLIO STUDY",
  imagery: "DEMO IMAGERY",
  transformation: "DEMO TRANSFORMATION",
  studentWork: "DEMO STUDENT WORK",
  academyStudy: "ACADEMY STUDY",
  editorial: "EDITORIAL STUDY",
} as const;

/** Every static route that can be linked without params. */
export type StaticPath =
  | "/"
  | "/about"
  | "/services"
  | "/our-work"
  | "/gallery"
  | "/academy"
  | "/academy/courses"
  | "/academy/student-work"
  | "/studio"
  | "/contact"
  | "/booking"
  | "/privacy"
  | "/terms";

export const PRIMARY_NAV: { label: string; to: StaticPath; exact?: boolean }[] = [
  { label: "Home", to: "/", exact: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "Gallery", to: "/gallery" },
  { label: "Academy", to: "/academy" },
  { label: "Studio", to: "/studio" },
  { label: "Contact", to: "/contact" },
];

/** Consistent CTA language across the site. */
export const CTA = {
  book: "BOOK AN APPOINTMENT",
  enquire: "ENQUIRE NOW",
  exploreLook: "EXPLORE THE LOOK",
  viewWork: "VIEW THE WORK",
  academy: "EXPLORE THE ACADEMY",
  studio: "CONTACT THE STUDIO",
  whatsapp: "WHATSAPP US",
} as const;

/** The studio experience, in the order a client lives it. */
export const STUDIO_EXPERIENCE = [
  {
    title: "ARRIVE",
    detail: "A calm room, reserved for you. Bags down, hair out, conversation first.",
  },
  {
    title: "CONSULT",
    detail: "Occasion, outfit, jewellery and how you want to feel are mapped before a brush moves.",
  },
  {
    title: "PREPARE",
    detail: "Skin is cleaned, toned and prepared so the makeup has something honest to sit on.",
  },
  {
    title: "CREATE",
    detail: "Colour, texture and structure are built layer by layer, checked in real light.",
  },
  {
    title: "REVEAL",
    detail: "The mirror turns. The look is finished, set, photographed and yours for the day.",
  },
] as const;

/** Studio environment chapters — each pairs with a photograph in images.studio. */
export const STUDIO_SPACES = [
  {
    key: "space",
    label: "THE SPACE",
    heading: "A room that lowers your shoulders.",
    copy: "Warm light, wide mirrors and enough room to think. The studio is arranged so getting ready feels like part of the celebration rather than a stop before it.",
  },
  {
    key: "station",
    label: "THE MAKEUP STATION",
    heading: "Where the work happens.",
    copy: "Sanitised tools, organised palettes and a station built for precision. Everything within reach, nothing rushed.",
  },
  {
    key: "light",
    label: "THE LIGHT",
    heading: "Truthful light, every time.",
    copy: "Daylight-balanced illumination means the finish you approve in the chair is the finish that walks into the venue and stands up to a camera.",
  },
  {
    key: "detail",
    label: "THE DETAIL",
    heading: "Details are the difference.",
    copy: "Lashes, liners, pins, drapes, jewellery placement. The smallest decisions are the ones people remember in photographs.",
  },
  {
    key: "learning",
    label: "THE LEARNING SPACE",
    heading: "Built to be taught in.",
    copy: "The same room becomes a classroom for academy students — real stations, real faces, real light to learn technique against.",
  },
  {
    key: "frame",
    label: "THE FINAL FRAME",
    heading: "Before you step out.",
    copy: "A last check in the mirror, a photograph in the studio light, and you leave as the finished version of the plan.",
  },
] as const;

/** Occasion options shared by the contact and booking forms. */
export const OCCASION_OPTIONS = [
  "Wedding",
  "Engagement",
  "Reception",
  "Sangeet",
  "Party",
  "Editorial / Shoot",
  "Personal Occasion",
  "Academy",
  "Other",
] as const;

/** Placeholder legal copy — replace with reviewed studio policy text. */
export const LEGAL_PLACEHOLDERS = {
  privacy: {
    title: "PRIVACY",
    intro: "How enquiries, images and personal details are handled will be published here.",
    sections: [
      {
        heading: "Enquiries",
        copy: "Contact and booking form details are stored only once this demo build is connected to the studio’s email or CRM system.",
      },
      {
        heading: "Imagery",
        copy: "Client and student images are only published with permission. All imagery currently shown on this site is demo stock photography.",
      },
      {
        heading: "Your choices",
        copy: "Requests to update or remove personal information will be honoured — the studio contact channels will be published here.",
      },
    ],
  },
  terms: {
    title: "TERMS",
    intro: "Studio booking terms will be published here once finalised.",
    sections: [
      {
        heading: "Appointments",
        copy: "Appointment, cancellation and rescheduling terms are confirmed during consultation.",
      },
      {
        heading: "Academy",
        copy: "Course duration, fees and certification details are to be announced and are never implied on this demo build.",
      },
      {
        heading: "Imagery",
        copy: "All photography shown is illustrative demo imagery and does not represent completed client work.",
      },
    ],
  },
} as const;
