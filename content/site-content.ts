export const siteContent = {
  site: {
    title: "The Story of ShipRocked",
    description:
      "A senior thesis documentary capturing sixteen years of ShipRocked — the heavy metal rock cruise festival in the Caribbean.",
  },

  assets: {
    logo: "/assets/logos/Logo.png",
    heroLogo: "/assets/logos/hero-logo.png",
    seedAndSpark: "/assets/seedandsparktransparent.svg",
    dividerVector: "/assets/divider-vector.svg",
  },

  links: {
    trailer: "#",
    seedAndSpark: "#",
    instagram: "#",
    facebook: "#",
    youtube: "#",
    mailingList: "#",
  },

  campaign: {
    goal: 30000,
    homeGoal: 25000,
    raised: 0,
    dates: "Sept 7 – Nov 7, 2026",
    homeDates: "Oct 2nd – Nov 7, 2026",
    datesLabel: "CAMPAIGN: SEPT 7 – NOV 7, 2026",
    eightyPercentNote:
      "Seed & Spark requires campaigns to reach 80% of goal before funds are released.",
  },

  nav: {
    supportCta: "SUPPORT NOW",
    links: [
      { label: "HOME", href: "/", key: "home" as const },
      { label: "ABOUT", href: "/about", key: "about" as const },
      { label: "SUPPORT", href: "/support", key: "support" as const },
      { label: "CONTACT", href: "/contact", key: "contact" as const },
    ],
  },

  footer: {
    tagline: "A senior thesis documentary",
    explore: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
    contact: {
      label: "Marketing inquiries",
      email: "info@ask4ent.com",
    },
    connect: [
      { label: "Instagram", href: "#", icon: "instagram" as const },
      { label: "Facebook", href: "#", icon: "facebook" as const },
      { label: "Email", href: "mailto:info@ask4ent.com", icon: "email" as const },
    ],
    copyright: "© 2026 THE STORY OF SHIPROCKED — A SENIOR THESIS FILM",
  },

  home: {
    film: {
      overline: "THE FILM",
      headline: ["A floating world,", "finally documented."],
      paragraphs: [
        "For sixteen years, ShipRocked has brought thousands of rock and metal fans together on a cruise ship in the Caribbean, part festival, part floating community, all chaos.",
        "This documentary goes behind the music to capture what makes ShipRocked unlike anything else in the touring world: the fans who return year after year, the artists who become family, and the culture built one voyage at a time.",
        "Now, as the next voyage, Voyage of the Ronin, approaches, we follow the people making it happen.",
      ],
      readMore: "READ MORE →",
    },
    whyItMatters: {
      overline: "WHY THIS FILM MATTERS",
      headline: "Built on the deck, not the boardroom.",
      cards: [
        {
          number: "01",
          title: "THE LINEUP",
          description:
            "30+ artists every voyage, fully integrated into the fan experience, poolside, not roped off.",
        },
        {
          number: "02",
          title: "THE COMMUNITY",
          description:
            "A distinct culture, 16 years deep. Fans who have sailed every single year, and the crew who keeps it running.",
        },
        {
          number: "03",
          title: "THE STAKES",
          description:
            "A senior thesis film, self-funded, racing toward a January 2027 voyage and a hard deadline.",
        },
      ],
    },
    campaign: {
      overline: "THE CAMPAIGN",
      headline: "Help us finish the voyage.",
      supportCta: "SUPPORT THE FILM",
    },
  },

  about: {
    hero: {
      overline: "PRODUCTION DETAILS",
      headline: "30 terabytes",
      headlineAccent: "and counting.",
      body: "What started as a film school thesis has become the most ambitious documentation project in ShipRocked's sixteen-year history. Two years of footage, hundreds of interviews, and one voyage left to capture before the story is complete.",
    },
    timeline: {
      overline: "THE TIMELINE",
      headline: "From dock to deadline.",
      items: [
        {
          date: "JAN 2026",
          title: "Voyage of the Ronin filming begins",
          description:
            "Principal documentary footage captured aboard the first voyage.",
        },
        {
          date: "FEB – JUN 2026",
          title: "Post-production",
          description:
            "Editing, sound design, and color grading the 4K raw footage.",
        },
        {
          date: "SEPT – NOV 2026",
          title: "Fundraising campaign",
          description:
            "Public campaign to fund post-production and distribution costs.",
        },
        {
          date: "2027",
          title: "Festival circuit & release",
          description:
            "Submission to documentary festivals, followed by public release.",
        },
      ],
    },
    crew: {
      overline: "MEET THE CREW",
      headline: "The people behind the lens.",
      members: [
        { name: "ALBERT KOENIG", role: "DIRECTOR" },
        { name: "MATT DAVIS", role: "PRODUCER" },
        { name: "SILAS GRASSE", role: "PRODUCTION LEAD" },
      ],
    },
    characters: {
      overline: "MEET THE CHARACTERS",
      headline: "The voices of the voyage.",
      subjects: [
        { name: "[NAME TBD]", note: "Character / scene name TBD" },
        { name: "[NAME TBD]", note: "Character / scene name TBD" },
        { name: "[NAME TBD]", note: "Character / scene name TBD" },
        { name: "[NAME TBD]", note: "Character / scene name TBD" },
      ],
    },
    transparency: {
      overline: "TRANSPARENCY",
      headline: "Where the money goes.",
      breakdown: [
        { label: "Post-production & editing", percent: 40 },
        { label: "Festival submission fees", percent: 20 },
        { label: "Sound design & color grade", percent: 20 },
        { label: "Travel & final voyage capture", percent: 15 },
        { label: "Distribution & marketing", percent: 5 },
      ],
    },
  },

  support: {
    teaser: {
      badge: "COMING SOON",
      headline: "Every voyage needs a crew.",
      subheadline: "Exclusive merch drops at launch — be ready.",
      cta: "GET NOTIFIED →",
      note: "Limited edition gear, signed collectibles, and rewards for early supporters.",
      date: "NOVEMBER 2026",
    },
  },

  contact: {
    hero: {
      overline: "GET IN TOUCH",
      headline: "Questions? We're listening.",
      body: "Press, sponsors, fans, and fellow rock-and-roll rōnin — reach out below.",
    },
    blocks: [
      {
        overline: "MARKETING & PRESS",
        title: "Story of ShipRocked Team",
        email: "shiprocked@koenigentertainment.com",
        note: null,
      },
      {
        overline: "GENERAL INQUIRIES",
        title: "ASK4 Entertainment",
        email: "info@ask4ent.com",
        note: "Response within 2–3 business days",
      },
    ],
    form: {
      overline: "GOT A QUESTION?",
      headline: "Drop us a line.",
      name: "NAME",
      email: "EMAIL",
      message: "MESSAGE",
      submit: "SEND MESSAGE",
    },
    social: {
      overline: "FOLLOW THE FILM",
      buttons: [
        { label: "INSTAGRAM", href: "#", variant: "outline" as const },
        { label: "FACEBOOK", href: "#", variant: "outline" as const },
        { label: "YOUTUBE", href: "#", variant: "outline" as const },
        { label: "JOIN MAILING LIST", href: "#", variant: "gold" as const },
      ],
    },
  },
} as const;

export type NavKey = (typeof siteContent.nav.links)[number]["key"];
