/**
 * Central image registry — every photograph used anywhere on the site lives here.
 *
 * ALL images are illustrative demo stock photography (Pexels) because real
 * studio photography has not been supplied yet. Replace `src` for a key and the
 * whole site updates — no component hardcodes an image URL.
 *
 * Each entry carries: the remote source id (so any render width can be rebuilt),
 * meaningful alt text, an optional art-directed object position, an optional
 * mobile crop position and an internal demo label used by the content layer.
 */

export type DemoImage = {
  /** Source photo id — use imageUrl(id, width) to rebuild at any render size. */
  id: number;
  src: string;
  alt: string;
  /** CSS object-position for the desktop crop. */
  position?: string;
  /** Optional different crop on small screens. */
  mobilePosition?: string;
  /** Optional aspect ratio hint, e.g. '4 / 5'. */
  aspect?: string;
  /** Internal demo/portfolio label — never presented as real client work. */
  label?: string;
};

/** Build a Pexels demo URL at a given render width. */
export function imageUrl(id: number, width: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

const img = (
  id: number,
  alt: string,
  width = 1200,
  position?: string,
  extra?: { label?: string; mobilePosition?: string; aspect?: string },
): DemoImage => ({
  id,
  src: imageUrl(id, width),
  alt,
  ...(position ? { position } : {}),
  ...(extra?.label ? { label: extra.label } : {}),
  ...(extra?.mobilePosition ? { mobilePosition: extra.mobilePosition } : {}),
  ...(extra?.aspect ? { aspect: extra.aspect } : {}),
});

const HERO_W = 1920;
const LOOK_W = 1100;
const TILE_W = 900;
const DEMO_TILE = { label: "DEMO PORTFOLIO" };
const ACADEMY_TILE = { label: "ACADEMY STUDY" };

export const images = {
  /* ------------------------------------------------------------------ */
  /* Page heroes                                                         */
  /* ------------------------------------------------------------------ */
  hero: {
    about: img(
      33607398,
      "Makeup artist working on a client in a warm studio session",
      HERO_W,
      "50% 35%",
    ),
    services: img(
      29692113,
      "Makeup artist applying blush to a model with a soft brush",
      HERO_W,
      "50% 32%",
    ),
    work: img(
      30855932,
      "Close-up portrait of a woman wearing creative makeup",
      HERO_W,
      "50% 30%",
      DEMO_TILE,
    ),
    gallery: img(14982364, "Close-up beauty portrait of a woman wearing makeup", HERO_W, "50% 28%"),
    academy: img(
      33940225,
      "Makeup artist applying eyeshadow to a student model in a studio",
      HERO_W,
      "50% 35%",
      ACADEMY_TILE,
    ),
    courses: img(
      29588105,
      "Makeup artist applying eyeshadow during a beauty studio session",
      HERO_W,
      "50% 38%",
      ACADEMY_TILE,
    ),
    studentWork: img(
      29692121,
      "Close-up of a makeup brush working across a model’s face",
      HERO_W,
      "50% 35%",
      ACADEMY_TILE,
    ),
    studioPage: img(
      32159331,
      "Professional makeup studio with vanity mirrors and warm lighting",
      HERO_W,
      "50% 55%",
    ),
    contact: img(34701352, "Elegant woman doing her makeup in a studio mirror", HERO_W, "50% 30%"),
    booking: img(35583434, "Elegant bride getting ready before her celebration", HERO_W, "50% 28%"),
    beforeAfter: img(
      7035297,
      "Model receiving a makeup retouch during a beauty session",
      HERO_W,
      "50% 32%",
      {
        label: "DEMO TRANSFORMATION",
      },
    ),
  },

  /* ------------------------------------------------------------------ */
  /* About page                                                          */
  /* ------------------------------------------------------------------ */
  about: {
    approach: img(
      28581615,
      "Portrait of a smiling bride with a soft bridal makeup look",
      LOOK_W,
      "50% 25%",
    ),
    story: img(28863309, "Bride getting ready with a hairstylist finishing her look", TILE_W),
    principles: {
      skin: img(6925504, "Woman following a considered skincare routine", TILE_W),
      intention: img(
        3873687,
        "Colourful eyeshadow palette showing considered colour choices",
        TILE_W,
      ),
      transformation: img(34959982, "Portrait of a woman in glamorous evening makeup", TILE_W),
    },
    artistry: [
      img(
        7510154,
        "Artist’s hand stroking a brush across a model’s cheek",
        TILE_W,
        undefined,
        DEMO_TILE,
      ),
      img(8554941, "Close-up of a beauty treatment in progress", TILE_W, undefined, DEMO_TILE),
      img(
        8089240,
        "Hands holding a foundation product during application",
        TILE_W,
        undefined,
        DEMO_TILE,
      ),
      img(
        4285539,
        "Close-up of makeup being applied with a small brush",
        TILE_W,
        undefined,
        DEMO_TILE,
      ),
      img(6546374, "Gentle makeup application on a relaxed model", TILE_W, undefined, DEMO_TILE),
    ],
    education: img(
      19301071,
      "Beautician applying foundation while guiding a learner",
      TILE_W,
      undefined,
      ACADEMY_TILE,
    ),
  },

  /* ------------------------------------------------------------------ */
  /* Services — one complete, replaceable set per service                */
  /* ------------------------------------------------------------------ */
  services: {
    bridal: {
      hero: img(13824470, "Indian bride wearing traditional bridal makeup", HERO_W, "50% 28%"),
      look01: img(
        30495792,
        "Elegant Indian bridal portrait in traditional attire",
        LOOK_W,
        "50% 25%",
      ),
      look02: img(30214962, "Traditional Indian bride in a red saree", LOOK_W, "50% 25%"),
      look03: img(
        24549086,
        "Portrait of a bride wearing a nath and bridal jewellery",
        LOOK_W,
        "50% 25%",
      ),
      detail: img(
        30597740,
        "Elegant bridal hairstyle finished with a golden hairpiece",
        TILE_W,
        "50% 30%",
      ),
      before: img(
        35765754,
        "Portrait of a woman with natural, bare-skin beauty",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
      after: img(
        38796463,
        "Traditional Indian bridal portrait with jewellery and full makeup",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    hd: {
      hero: img(
        31403887,
        "Close-up of a woman’s face with a smooth HD makeup finish",
        HERO_W,
        "50% 25%",
      ),
      look01: img(16311371, "Close-up of a flawless makeup finish on camera", LOOK_W, "50% 25%"),
      look02: img(34935919, "Portrait of a smiling woman with polished makeup", LOOK_W, "50% 25%"),
      look03: img(10949700, "Close-up study of skin texture under HD makeup", LOOK_W, "50% 25%"),
      detail: img(6648491, "Artist applying makeup to a model’s face with precision", TILE_W),
      before: img(3484670, "Portrait of a woman with fresh, unretouched skin", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(38272176, "Close-up portrait of a woman wearing HD makeup", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
    },
    airbrush: {
      hero: img(39190651, "Makeup artist working in a bright studio setting", HERO_W, "50% 35%"),
      look01: img(32117490, "Professional makeup application in a studio", LOOK_W, "50% 30%"),
      look02: img(3894511, "Woman having her makeup applied in a beauty seat", LOOK_W, "50% 25%"),
      look03: img(6135662, "A woman being made up during a beauty appointment", LOOK_W, "50% 25%"),
      detail: img(9743967, "Woman carefully applying her own makeup with a brush", TILE_W),
      before: img(16961221, "Portrait of a young woman before makeup", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(
        36078897,
        "Close-up portrait of a stylish woman wearing makeup",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    engagement: {
      hero: img(35354271, "Happy couple celebrating their engagement", HERO_W, "50% 30%"),
      look01: img(17285070, "Happy woman showing her engagement ring", LOOK_W, "50% 30%"),
      look02: img(34894009, "Couple celebrating an engagement in the evening", LOOK_W, "50% 30%"),
      look03: img(35253004, "Joyful couple showing an engagement ring", LOOK_W, "50% 30%"),
      detail: img(31054311, "Close-up of an engagement ring exchange ceremony", TILE_W),
      before: img(8343960, "Close-up shot of a woman’s face before styling", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(
        29528108,
        "Portrait of a woman with soft celebration makeup in studio light",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    reception: {
      hero: img(34362907, "Elegant woman in glamorous evening makeup", HERO_W, "50% 25%"),
      look01: img(34362903, "Elegant woman with glamorous makeup and jewellery", LOOK_W, "50% 25%"),
      look02: img(35341787, "Portrait of a woman in luminous evening makeup", LOOK_W, "50% 25%"),
      look03: img(
        37768501,
        "Elegant young woman celebrating in an evening dress",
        LOOK_W,
        "50% 25%",
      ),
      detail: img(19675165, "Evening atmosphere with a woman dressed for a reception", TILE_W),
      before: img(6774532, "Stylish young woman with a fresh, minimal look", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(
        31845455,
        "Close-up portrait of a woman with expressive evening makeup",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    party: {
      hero: img(20224513, "Studio shot of a young woman in glamour makeup", HERO_W, "50% 25%"),
      look01: img(30213006, "Glamorous party atmosphere with bold styling", LOOK_W, "50% 30%"),
      look02: img(
        31861446,
        "Elegant portrait of a woman with creative party makeup",
        LOOK_W,
        "50% 25%",
      ),
      look03: img(33395533, "Bold portrait of a woman with artistic makeup", LOOK_W, "50% 25%"),
      detail: img(7290206, "Close-up of a person wearing red lipstick", TILE_W, "50% 30%"),
      before: img(7588626, "Close-up of a woman doing her own makeup at home", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(
        37573322,
        "Glamorous woman with bold eye makeup for an evening out",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    hairstyling: {
      hero: img(
        31065906,
        "Elegant updo hairstyle finished with hair accessories",
        HERO_W,
        "50% 25%",
      ),
      look01: img(10422367, "Braided bun styled in long hair", LOOK_W, "50% 30%"),
      look02: img(16976882, "Back view of a polished hairstyle", LOOK_W, "50% 30%"),
      look03: img(13347114, "Back view of an elegant low bun", LOOK_W, "50% 30%"),
      detail: img(13106742, "Back view of hair finished with floral details", TILE_W, "50% 30%"),
      before: img(7623566, "Woman tying her hair before styling", TILE_W, "50% 25%", {
        label: "DEMO TRANSFORMATION",
      }),
      after: img(
        38989501,
        "Elegant portrait of a woman with an updo and pearls",
        TILE_W,
        "50% 25%",
        {
          label: "DEMO TRANSFORMATION",
        },
      ),
    },
    draping: {
      hero: img(
        19891765,
        "Traditional Indian bridal portrait styled in Puducherry",
        HERO_W,
        "50% 25%",
      ),
      look01: img(
        19891849,
        "Traditional Indian bridal portrait with gold jewellery",
        LOOK_W,
        "50% 25%",
      ),
      look02: img(6304019, "Woman in a red and gold sari wearing a veil", LOOK_W, "50% 25%"),
      look03: img(14089108, "Woman styled in a red and gold sari", LOOK_W, "50% 25%"),
      look04: img(13779724, "Woman in a red and gold lehenga", LOOK_W, "50% 25%"),
      detail: img(12655191, "Close-up of sari fabric and drape detail", TILE_W, "50% 40%"),
      detail02: img(
        38998852,
        "Elegant portrait of a woman in a traditional saree",
        TILE_W,
        "50% 25%",
      ),
    },
    editorial: {
      hero: img(33852945, "Dramatic fashion portrait under red studio lighting", HERO_W, "50% 30%"),
      look01: img(30492648, "Dramatic portrait of a fashion model", LOOK_W, "50% 25%"),
      look02: img(
        29641650,
        "Stylish woman posing under dramatic studio lighting",
        LOOK_W,
        "50% 25%",
      ),
      look03: img(37167777, "Dramatic portrait of a woman in low light", LOOK_W, "50% 25%"),
      look04: img(36542707, "Edgy fashion portrait with bold makeup", LOOK_W, "50% 25%"),
      detail: img(36707534, "Colourful artistic portrait with floral details", TILE_W, "50% 25%"),
      detail02: img(
        27760014,
        "Portrait of a woman wearing artistic editorial makeup",
        TILE_W,
        "50% 25%",
      ),
    },
  },

  /* ------------------------------------------------------------------ */
  /* Academy                                                             */
  /* ------------------------------------------------------------------ */
  academy: {
    intro: img(
      4006709,
      "Learner practising makeup application with a brush",
      LOOK_W,
      "50% 30%",
      ACADEMY_TILE,
    ),
    practice: img(
      7388922,
      "Focused practice session styling hair",
      TILE_W,
      undefined,
      ACADEMY_TILE,
    ),
    studies: [
      img(
        31865216,
        "Practice of eyeliner application with a steady hand",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(6835823, "Creative eye makeup study on a model", TILE_W, undefined, ACADEMY_TILE),
      img(4384555, "Close study of long lashes and mascara work", TILE_W, undefined, ACADEMY_TILE),
      img(29528112, "Soft light portrait used for makeup studies", TILE_W, undefined, ACADEMY_TILE),
    ],
    courses: {
      pro: img(
        6684148,
        "Student checking brushwork in a compact mirror",
        LOOK_W,
        "50% 30%",
        ACADEMY_TILE,
      ),
      bridal: img(
        8881960,
        "Hairstylist finishing the hair of an ethnic bride",
        LOOK_W,
        "50% 30%",
        ACADEMY_TILE,
      ),
      advancedHd: img(
        9390425,
        "Close-up study of eye makeup technique",
        LOOK_W,
        "50% 30%",
        ACADEMY_TILE,
      ),
      editorial: img(
        36210694,
        "Creative portrait used as an editorial study reference",
        LOOK_W,
        "50% 30%",
        ACADEMY_TILE,
      ),
    },
    studentWork: [
      img(6713325, "Practice of mascara application on a model", TILE_W, undefined, ACADEMY_TILE),
      img(
        8558522,
        "Lashes and mascara brush used during practice",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(
        5388846,
        "Applying red lipstick during a practice session",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(4138626, "Close-up of finished lip work", TILE_W, undefined, ACADEMY_TILE),
      img(6784725, "Artistic colour study on a model", TILE_W, undefined, ACADEMY_TILE),
      img(8554941, "Guided beauty work in progress", TILE_W, undefined, ACADEMY_TILE),
      img(
        8558434,
        "Makeup brushes and cosmetic products set out for practice",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(
        7290681,
        "Top view of makeup brushes arranged for a lesson",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(
        7290739,
        "Assorted eyeshadow palette used for colour training",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(
        12323036,
        "Well-used eyeshadow palette from practice sessions",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(
        15984941,
        "Colourful makeup palettes arranged for study",
        TILE_W,
        undefined,
        ACADEMY_TILE,
      ),
      img(37442204, "Vibrant eyeshadow palette on a makeup desk", TILE_W, undefined, ACADEMY_TILE),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Studio                                                              */
  /* ------------------------------------------------------------------ */
  studio: {
    spaces: {
      space: img(7750104, "Interior of a spacious modern beauty studio", 1400, "50% 55%"),
      station: img(5731891, "Makeup dresser with vanity mirrors and organised tools", 1100),
      light: img(29590426, "Photography studio lighting setup for beauty work", 1100),
      detail: img(33365013, "Makeup brushes and cosmetics arranged in detail", 1100, "50% 40%"),
      learning: img(28863319, "Makeup being applied in a modern salon environment", 1100),
      frame: img(
        38796467,
        "Traditional bridal portrait with jewellery in studio light",
        1100,
        "50% 25%",
      ),
    },
    experience: [
      img(6198653, "Calm vanity table styled for an appointment", TILE_W),
      img(34749163, "Young woman enjoying a makeup appointment at a vanity", TILE_W),
      img(6663365, "Skin preparation with a treatment mask", TILE_W),
      img(7446413, "Makeup brushes and eyeshadows laid out for work", TILE_W),
      img(29588091, "Woman reflecting in the mirror at the vanity desk", TILE_W),
    ],
    extras: [
      img(10773643, "Mirror reflection of a woman in a salon chair", TILE_W),
      img(33714920, "Professional photo shoot running inside a modern studio", TILE_W),
      img(12328338, "Behind the scenes of a beauty photo shoot", TILE_W),
      img(25526512, "Studio lighting equipment standing in a dark room", TILE_W),
      img(12124036, "Vanity space with flowers and everyday details", TILE_W),
      img(7750099, "Beauty salon interior design with warm finishes", TILE_W),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Our Work — demo case studies                                        */
  /* ------------------------------------------------------------------ */
  work: {
    study01: {
      hero: img(28861487, "Bride preparing on her wedding morning", 1400, "50% 25%"),
      gallery: [
        img(35536272, "Bride getting ready for her special day", TILE_W, undefined, DEMO_TILE),
        img(34631587, "Bride preparing in an elegant room", TILE_W, undefined, DEMO_TILE),
        img(15434988, "Bride getting ready for the wedding", TILE_W, undefined, DEMO_TILE),
        img(19879697, "Bridal hair finished in a low bun", TILE_W, "50% 25%", DEMO_TILE),
      ],
    },
    study02: {
      hero: img(38894231, "Portrait of a woman under dramatic lighting", 1400, "50% 25%"),
      gallery: [
        img(
          35161378,
          "Elegant portrait lit dramatically in a studio",
          TILE_W,
          undefined,
          DEMO_TILE,
        ),
        img(37687972, "Chic urban portrait with dramatic lighting", TILE_W, undefined, DEMO_TILE),
        img(
          36826346,
          "Creative fashion portrait with unusual styling",
          TILE_W,
          undefined,
          DEMO_TILE,
        ),
        img(8945036, "Model’s eyes framed by editorial makeup", TILE_W, "50% 30%", DEMO_TILE),
      ],
    },
    study03: {
      hero: img(39613138, "Close-up portrait with vibrant eye makeup", 1400, "50% 25%"),
      gallery: [
        img(
          38283818,
          "Close-up of an eye with natural, polished makeup",
          TILE_W,
          "50% 30%",
          DEMO_TILE,
        ),
        img(19846635, "Close-up of white eyeliner work", TILE_W, "50% 30%", DEMO_TILE),
        img(7035368, "Artistic colour work around the brows", TILE_W, undefined, DEMO_TILE),
        img(6784725, "Art study portrait against a bright backdrop", TILE_W, undefined, DEMO_TILE),
      ],
    },
    study04: {
      hero: img(
        34607502,
        "Portrait of a young woman wearing red lipstick outdoors",
        1400,
        "50% 25%",
      ),
      gallery: [
        img(
          29639510,
          "Close-up portrait of a woman wearing red lipstick",
          TILE_W,
          "50% 25%",
          DEMO_TILE,
        ),
        img(
          36139936,
          "Artistic close-up of red lips with lipstick marks",
          TILE_W,
          "50% 40%",
          DEMO_TILE,
        ),
        img(27393259, "Red lipstick photographed in a studio", TILE_W, undefined, DEMO_TILE),
        img(12606885, "Close-up of a red lipstick bullet", TILE_W, "50% 40%", DEMO_TILE),
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* Contact + booking atmospherics                                      */
  /* ------------------------------------------------------------------ */
  contact: {
    strip: [
      img(5878871, "Crew preparing a studio space before a session", TILE_W),
      img(34749163, "Client enjoying a makeup appointment", TILE_W),
      img(2388569, "Studio setting arranged for a session", TILE_W),
      img(12767729, "Setting up a studio space before a shoot", TILE_W),
    ],
  },
  booking: {
    strip: [
      img(35538832, "Joyful bride-to-be showing her engagement ring", TILE_W),
      img(6417958, "Skin preparation with serum before makeup", TILE_W),
      img(6619491, "Woman applying face cream as part of preparation", TILE_W),
      img(3852149, "Relaxed skincare moment before an event", TILE_W),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Gallery — one set per category page                                 */
  /* ------------------------------------------------------------------ */
  gallery: {
    bridal: {
      hero: img(
        37797086,
        "Traditional Indian bridal portrait with henna detailing",
        HERO_W,
        "50% 25%",
      ),
      grid: [
        img(36896552, "Elegant traditional bride with floral jewellery", TILE_W, "50% 25%"),
        img(18428774, "Bride in a red lehenga with gold jewellery", TILE_W, "50% 25%"),
        img(37615683, "Indian bride in a traditional red bridal lehenga", TILE_W, "50% 25%"),
        img(38578964, "Indian bride in traditional red and gold attire", TILE_W, "50% 25%"),
        img(20883949, "Close-up of a bride in red embroidered fabric", TILE_W, "50% 30%"),
        img(30167019, "Elegant South Asian bridal portrait in red attire", TILE_W, "50% 25%"),
        img(11813842, "Bride having her makeup finished before the wedding", TILE_W, "50% 25%"),
        img(36438712, "Bride preparing in a sunlit room", TILE_W, "50% 25%"),
        img(38781283, "Bridal portrait in a lace gown", TILE_W, "50% 25%"),
      ],
    },
    hd: {
      hero: img(33497764, "Bridal portrait with a flawless complexion finish", HERO_W, "50% 25%"),
      grid: [
        img(34607163, "Portrait of a bride in soft focus", TILE_W, "50% 25%"),
        img(28519198, "Portrait finished with a floral wreath", TILE_W, "50% 25%"),
        img(36098061, "Bridal portrait finished with a veil", TILE_W, "50% 25%"),
        img(29379520, "Bride photographed with her bridesmaids", TILE_W, "50% 25%"),
        img(26972609, "Woman photographed beside a bride", TILE_W, "50% 25%"),
        img(15865292, "Smiling bride in a wedding dress", TILE_W, "50% 25%"),
        img(14975739, "Woman in a pink traditional set", TILE_W, "50% 25%"),
        img(35341765, "Bridal hair styling in progress", TILE_W, "50% 25%"),
        img(7119169, "Hairdresser finishing a bridal hairstyle", TILE_W, "50% 25%"),
      ],
    },
    airbrush: {
      hero: img(29810443, "Woman applying makeup reflected in a studio mirror", HERO_W, "50% 30%"),
      grid: [
        img(38495501, "Makeup application seen in a mirror reflection", TILE_W, "50% 30%"),
        img(30089118, "Woman applying makeup in front of a mirror", TILE_W, "50% 30%"),
        img(39326311, "Reflection of a woman applying makeup", TILE_W, "50% 30%"),
        img(3764024, "Woman doing her makeup while looking into a mirror", TILE_W, "50% 30%"),
        img(26761504, "Reflection of a woman doing her makeup", TILE_W, "50% 30%"),
        img(4351383, "Woman reflecting in a mirror while applying makeup", TILE_W, "50% 30%"),
        img(33793983, "Woman’s reflection in a makeup mirror", TILE_W, "50% 30%"),
        img(10211588, "Woman putting on makeup before a mirror", TILE_W, "50% 30%"),
        img(
          8558427,
          "Cosmetic products and makeup brushes ready for application",
          TILE_W,
          "50% 40%",
        ),
      ],
    },
    engagement: {
      hero: img(35354265, "Romantic engagement moment focusing on the rings", HERO_W, "50% 35%"),
      grid: [
        img(30652174, "Romantic couple moment with an engagement ring", TILE_W, "50% 30%"),
        img(32727605, "Engagement celebration at sunset", TILE_W, "50% 30%"),
        img(
          17354874,
          "Woman showing an engagement ring while hugging her partner",
          TILE_W,
          "50% 30%",
        ),
        img(35538832, "Joyful bride-to-be showing an engagement ring", TILE_W, "50% 30%"),
        img(34894009, "Couple celebrating an engagement in the evening", TILE_W, "50% 30%"),
        img(35253004, "Joyful couple showing an engagement ring", TILE_W, "50% 30%"),
        img(17285070, "Happy woman showing her engagement ring", TILE_W, "50% 30%"),
        img(31054311, "Engagement ring exchange ceremony", TILE_W, "50% 30%"),
        img(35354271, "Happy couple celebrating their engagement", TILE_W, "50% 30%"),
      ],
    },
    reception: {
      hero: img(30213006, "Glamorous reception atmosphere with bold styling", HERO_W, "50% 35%"),
      grid: [
        img(19675165, "Woman dressed for a reception evening", TILE_W, "50% 25%"),
        img(20224513, "Studio glamour portrait for an evening look", TILE_W, "50% 25%"),
        img(31861446, "Creative evening makeup portrait", TILE_W, "50% 25%"),
        img(33395533, "Bold artistic makeup portrait", TILE_W, "50% 25%"),
        img(35341787, "Luminous evening makeup portrait", TILE_W, "50% 25%"),
        img(34362903, "Glamorous makeup and jewellery for a reception", TILE_W, "50% 25%"),
        img(34362907, "Glamorous evening makeup portrait", TILE_W, "50% 25%"),
        img(37768501, "Woman celebrating in an evening dress", TILE_W, "50% 25%"),
        img(37573322, "Bold eye makeup for an evening out", TILE_W, "50% 25%"),
      ],
    },
    party: {
      hero: img(7290206, "Close-up portrait with a statement red lip", HERO_W, "50% 35%"),
      grid: [
        img(30213006, "Glamorous party atmosphere with bold styling", TILE_W, "50% 35%"),
        img(19675165, "Woman dressed for an evening party", TILE_W, "50% 25%"),
        img(20224513, "Studio glamour portrait for a night out", TILE_W, "50% 25%"),
        img(31861446, "Creative party makeup portrait", TILE_W, "50% 25%"),
        img(33395533, "Bold artistic makeup portrait", TILE_W, "50% 25%"),
        img(35341787, "Luminous makeup portrait for a celebration", TILE_W, "50% 25%"),
        img(37573322, "Bold eye makeup for an evening out", TILE_W, "50% 25%"),
        img(36139936, "Artistic close-up of a statement lip", TILE_W, "50% 40%"),
        img(27393259, "Red lipstick photographed in a studio", TILE_W, undefined),
      ],
    },
    editorial: {
      hero: img(30492648, "Dramatic editorial portrait of a fashion model", HERO_W, "50% 25%"),
      grid: [
        img(33852945, "Fashion portrait under red studio lighting", TILE_W, "50% 25%"),
        img(29641650, "Stylish pose under dramatic studio lighting", TILE_W, "50% 25%"),
        img(37167777, "Dramatic portrait in low light", TILE_W, "50% 25%"),
        img(36542707, "Edgy fashion portrait with bold makeup", TILE_W, "50% 25%"),
        img(36707534, "Colourful artistic portrait with floral details", TILE_W, "50% 25%"),
        img(27760014, "Portrait of artistic editorial makeup", TILE_W, "50% 25%"),
        img(36210694, "Creative portrait with flowers and makeup art", TILE_W, "50% 25%"),
        img(36826346, "Creative fashion portrait with unusual styling", TILE_W, "50% 25%"),
        img(33714194, "Creative studio space lit dramatically", TILE_W, "50% 45%"),
      ],
    },
    fashion: {
      hero: img(37687972, "Chic fashion portrait with dramatic lighting", HERO_W, "50% 25%"),
      grid: [
        img(35161378, "Elegant portrait under dramatic studio lighting", TILE_W, "50% 25%"),
        img(36826346, "Creative fashion portrait with unusual styling", TILE_W, "50% 25%"),
        img(36542707, "Edgy fashion portrait with bold makeup", TILE_W, "50% 25%"),
        img(36707534, "Colourful artistic portrait with floral details", TILE_W, "50% 25%"),
        img(38894231, "Portrait of a woman under dramatic lighting", TILE_W, "50% 25%"),
        img(30492648, "Dramatic editorial portrait of a fashion model", TILE_W, "50% 25%"),
        img(29641650, "Stylish pose under dramatic studio lighting", TILE_W, "50% 25%"),
        img(8945036, "Model’s eyes framed by editorial makeup", TILE_W, "50% 30%"),
        img(37468392, "Professional photo studio interior set up for a shoot", TILE_W, "50% 45%"),
      ],
    },
    softGlam: {
      hero: img(10949700, "Soft glam portrait with luminous skin", HERO_W, "50% 25%"),
      grid: [
        img(16311371, "Close-up of a soft glam complexion finish", TILE_W, "50% 25%"),
        img(31403887, "Portrait with a smooth, glowing finish", TILE_W, "50% 25%"),
        img(38272176, "Close-up portrait in soft glam makeup", TILE_W, "50% 25%"),
        img(34935919, "Smiling portrait with polished, natural makeup", TILE_W, "50% 25%"),
        img(38283818, "Close-up of a softly defined eye", TILE_W, "50% 30%"),
        img(14982364, "Beauty portrait with soft makeup", TILE_W, "50% 25%"),
        img(28581615, "Bridal portrait with a soft makeup finish", TILE_W, "50% 25%"),
        img(8343960, "Close-up portrait before styling", TILE_W, "50% 25%"),
        img(15865292, "Smiling portrait in a wedding dress", TILE_W, "50% 25%"),
      ],
    },
    natural: {
      hero: img(35765754, "Portrait of natural, unretouched beauty", HERO_W, "50% 25%"),
      grid: [
        img(3484670, "Portrait of a woman with fresh skin", TILE_W, "50% 25%"),
        img(16961221, "Portrait of a young woman before makeup", TILE_W, "50% 25%"),
        img(6774532, "Stylish young woman with a fresh, minimal look", TILE_W, "50% 25%"),
        img(7588626, "Woman doing her own light makeup", TILE_W, "50% 25%"),
        img(6417958, "Serum and skin preparation before makeup", TILE_W, undefined),
        img(6619491, "Woman applying face cream", TILE_W, undefined),
        img(6925504, "Considered skincare routine", TILE_W, undefined),
        img(3985330, "Woman receiving a facial treatment", TILE_W, undefined),
        img(7113526, "Woman using under-eye masks", TILE_W, undefined),
      ],
    },
    traditional: {
      hero: img(
        19600931,
        "Portrait of a woman in traditional clothing and gold jewellery",
        HERO_W,
        "50% 25%",
      ),
      grid: [
        img(20651278, "Traditional clothing with layered gold jewellery", TILE_W, "50% 25%"),
        img(14062404, "Portrait with traditional golden jewellery", TILE_W, "50% 25%"),
        img(4220994, "Portrait of a woman wearing traditional jewellery", TILE_W, "50% 25%"),
        img(39164376, "Elegant portrait adorned with Indian jewellery", TILE_W, "50% 25%"),
        img(27155540, "Woman wearing golden jewellery", TILE_W, "50% 25%"),
        img(20134507, "Traditional attire with golden jewellery", TILE_W, "50% 25%"),
        img(32718396, "Traditional Indian woman in an elegant saree", TILE_W, "50% 25%"),
        img(36521478, "Thoughtful portrait in a traditional saree", TILE_W, "50% 25%"),
        img(38951469, "Elegant woman in traditional bridal attire", TILE_W, "50% 25%"),
      ],
    },
    contemporary: {
      hero: img(38701455, "Elegant woman in a contemporary saree styling", HERO_W, "50% 25%"),
      grid: [
        img(33465761, "Portrait in an elegant saree at sunset", TILE_W, "50% 25%"),
        img(38989501, "Modern updo finished with pearls", TILE_W, "50% 25%"),
        img(13347114, "Back view of a contemporary low bun", TILE_W, "50% 30%"),
        img(30175223, "Hair styled with a modern bow detail", TILE_W, "50% 25%"),
        img(21316046, "Woman tousling styled braids", TILE_W, "50% 25%"),
        img(36441633, "Close-up of detailed braiding work", TILE_W, "50% 30%"),
        img(3065096, "Modern hair styling detail", TILE_W, "50% 30%"),
        img(4783329, "Hairdresser working on a contemporary style", TILE_W, "50% 25%"),
        img(36521478, "Thoughtful portrait in a styled saree", TILE_W, "50% 25%"),
      ],
    },
    eyeMakeup: {
      hero: img(33945866, "Professional artist applying detailed eye makeup", HERO_W, "50% 30%"),
      grid: [
        img(38283818, "Close-up of an eye with polished makeup", TILE_W, "50% 30%"),
        img(19846635, "Close-up of white eyeliner work", TILE_W, "50% 30%"),
        img(9390425, "Close-up of a finished eye look", TILE_W, "50% 30%"),
        img(7035368, "Artistic colour work around the brows", TILE_W, "50% 30%"),
        img(6784725, "Art study portrait against a bright backdrop", TILE_W, "50% 25%"),
        img(8945036, "Model’s eyes framed by editorial makeup", TILE_W, "50% 30%"),
        img(4384555, "Close study of long lashes", TILE_W, "50% 30%"),
        img(8558522, "Lashes and mascara brush close-up", TILE_W, "50% 35%"),
        img(6713325, "Mascara application in progress", TILE_W, "50% 30%"),
      ],
    },
    hairstyling: {
      hero: img(32856321, "Hair being styled in a professional salon", HERO_W, "50% 30%"),
      grid: [
        img(4783340, "Hairdresser styling a client’s hair", TILE_W, "50% 25%"),
        img(16976882, "Back view of a polished hairstyle", TILE_W, "50% 30%"),
        img(7623566, "Woman tying her hair before styling", TILE_W, "50% 25%"),
        img(31065906, "Elegant updo finished with hair accessories", TILE_W, "50% 25%"),
        img(10422367, "Braided bun in long hair", TILE_W, "50% 30%"),
        img(13347114, "Back view of an elegant low bun", TILE_W, "50% 30%"),
        img(13106742, "Hair finished with floral details", TILE_W, "50% 30%"),
        img(38989501, "Updo portrait finished with pearls", TILE_W, "50% 25%"),
        img(30175223, "Hair styled with a bow detail", TILE_W, "50% 25%"),
      ],
    },
    draping: {
      hero: img(
        14062404,
        "Portrait with traditional golden jewellery and drape",
        HERO_W,
        "50% 25%",
      ),
      grid: [
        img(19600931, "Traditional attire with gold jewellery", TILE_W, "50% 25%"),
        img(20651278, "Layered gold jewellery over traditional clothing", TILE_W, "50% 25%"),
        img(4220994, "Woman wearing traditional jewellery", TILE_W, "50% 25%"),
        img(39164376, "Portrait adorned with Indian jewellery", TILE_W, "50% 25%"),
        img(27155540, "Golden jewellery styling detail", TILE_W, "50% 25%"),
        img(6304019, "Red and gold sari styled with a veil", TILE_W, "50% 25%"),
        img(14089108, "Woman styled in a red and gold sari", TILE_W, "50% 25%"),
        img(13779724, "Woman in a red and gold lehenga", TILE_W, "50% 25%"),
        img(12655191, "Close-up of sari fabric and drape detail", TILE_W, "50% 40%"),
      ],
    },
    beforeAfter: {
      hero: img(6774532, "Portrait of a fresh, minimal starting point", HERO_W, "50% 25%"),
      grid: [
        img(29639510, "Close-up of a finished statement lip", TILE_W, "50% 25%"),
        img(36139936, "Artistic close-up of red lips", TILE_W, "50% 40%"),
        img(4138626, "Close-up of finished lip work", TILE_W, "50% 40%"),
        img(5388846, "Applying red lipstick during practice", TILE_W, "50% 30%"),
        img(12606885, "Close-up of a red lipstick bullet", TILE_W, "50% 40%"),
        img(850801, "Red lipstick resting on a desk", TILE_W, "50% 40%"),
        img(7810603, "Red lipstick close-up", TILE_W, "50% 40%"),
        img(27393259, "Red lipstick photographed in a studio", TILE_W, undefined),
        img(6784725, "Art study portrait against a bright backdrop", TILE_W, "50% 25%"),
      ],
    },
    studentWork: {
      hero: img(
        6684148,
        "Student checking brushwork in a compact mirror",
        HERO_W,
        "50% 30%",
        ACADEMY_TILE,
      ),
    },
  },
};
