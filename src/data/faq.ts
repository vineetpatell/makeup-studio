/**
 * Reusable FAQ data.
 *
 * No studio policy has been invented: answers stay neutral and point to the
 * consultation, where real availability, travel and pricing are confirmed.
 */

export type FaqItem = { question: string; answer: string };

export const GENERAL_FAQ: FaqItem[] = [
  {
    question: "How do I enquire?",
    answer:
      "Share your occasion, date and the look you are imagining through the contact or booking form. Availability and details are confirmed during consultation.",
  },
  {
    question: "Do you offer trials?",
    answer:
      "Trial requests are welcome to be discussed when enquiring. Trial availability and terms are confirmed during consultation.",
  },
  {
    question: "How far in advance should I enquire?",
    answer:
      "Earlier is always easier, especially for wedding dates and peak season. Availability is confirmed during consultation.",
  },
  {
    question: "Is pricing listed on the site?",
    answer:
      "Pricing is shared on enquiry so it can match your occasion, location and requirements.",
  },
  {
    question: "Do you travel to venues?",
    answer:
      "Travel and on-location requests are discussed when enquiring. Travel details are confirmed during consultation.",
  },
];

export const SERVICE_FAQ: FaqItem[] = [
  {
    question: "Can the makeup be customised around my outfit?",
    answer:
      "Yes. Outfit, jewellery, fabric colour and the venue light are reviewed first so the finish is built around them rather than applied on top.",
  },
  {
    question: "Do you offer hairstyling with makeup?",
    answer:
      "Yes — hairstyling is offered as part of a complete look or as a standalone service. Confirm what you need when enquiring.",
  },
  {
    question: "Do you offer draping?",
    answer:
      "Saree, dupatta and bridal draping can be coordinated with makeup, jewellery and silhouette.",
  },
  {
    question: "What finish should I expect?",
    answer:
      "The finish is chosen for your skin and the occasion — natural-looking where it suits, more defined where the light calls for it. It is agreed during consultation.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "Timings vary with the look and the number of people. A schedule is planned with you when you enquire.",
  },
  {
    question: "Are lashes included?",
    answer:
      "Lash options are part of many looks and are discussed during consultation so nothing is assumed about your preferences.",
  },
];

export const BOOKING_FAQ: FaqItem[] = [
  {
    question: "What should I share when enquiring?",
    answer:
      "Your date, occasion or venue, the number of people who need makeup, and anything you already know about the look you want. Everything else can be shaped in the consultation.",
  },
  {
    question: "Can I request a trial?",
    answer:
      "Yes, trial requests can be included in your enquiry. Trial availability is confirmed during consultation.",
  },
  {
    question: "How far in advance should I enquire?",
    answer:
      "As early as possible for weddings and peak dates. Availability is confirmed during consultation.",
  },
  {
    question: "Can the makeup be customised around my outfit?",
    answer:
      "Yes. Outfit colour, fabric, jewellery and venue lighting all inform the final look. Bring references if you have them.",
  },
  {
    question: "Do you offer hairstyling?",
    answer:
      "Hairstyling is available with makeup or as a standalone service — mention it in your enquiry.",
  },
  {
    question: "Do you offer draping?",
    answer: "Saree, dupatta and bridal draping can be added so the complete look is coordinated.",
  },
  {
    question: "Do you travel?",
    answer:
      "On-location requests are discussed when enquiring. Travel details are confirmed during consultation.",
  },
  {
    question: "Are academy enquiries handled separately?",
    answer:
      'No — the same forms work for academy enquiries. Choose "Academy Enquiry" as the service and the studio will respond with course details.',
  },
];

export const ACADEMY_FAQ: FaqItem[] = [
  {
    question: "What is the duration of the courses?",
    answer:
      "Course durations are to be announced. Enquire to be updated as schedules are confirmed.",
  },
  {
    question: "What are the fees?",
    answer:
      "Fees are shared on enquiry so they can match the course and format you are considering.",
  },
  {
    question: "Is certification provided?",
    answer:
      "Certification details are to be confirmed. No certification, accreditation or placement claim is made on this site.",
  },
  {
    question: "Do students practice on live models?",
    answer:
      "Live model practice is part of the learning structure. Formats and schedules are confirmed when you enquire.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No professional experience is required for the foundation course. Advanced courses are best after foundational practice.",
  },
  {
    question: "Will I build a portfolio?",
    answer:
      "Portfolio development is part of the curriculum, with guided practice aimed at presenting your own work.",
  },
];

export const GALLERY_FAQ: FaqItem[] = [
  {
    question: "Are the images of real clients?",
    answer:
      "No. All imagery on this showcase build is illustrative demo stock photography and is labelled in the content layer as demo work.",
  },
  {
    question: "Can I book something similar to a look I see?",
    answer:
      "Yes — mention the look when enquiring and it can be shaped around your features, outfit and occasion.",
  },
  {
    question: "How will real portfolio work be added?",
    answer:
      "Real client and student photography will replace the demo imagery through the central image registry (src/data/images.ts) once supplied.",
  },
];
