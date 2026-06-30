export const siteContent = {
  site: {
    title: "The Story of ShipRocked",
    description:
      "A senior thesis documentary capturing sixteen years of ShipRocked — the heavy metal rock cruise festival in the Caribbean.",
  },

  assets: {
    logo: "/assets/logo.png",
    seedAndSpark: "/assets/seedandsparktransparent.svg",
    dividerVector: "/assets/divider-vector.svg",
    dividerLine: "/assets/divider-line.png",
    heroSamurai: "/assets/hero-samurai.jpg",
    filmStill: "/assets/film-still.jpg",
    btsPhoto: "/assets/bts-photo.jpg",
    productionStills: [
      "/assets/production-still-1.jpg",
      "/assets/production-still-2.jpg",
      "/assets/production-still-3.jpg",
    ],
    crew: {
      albert: "/assets/crew-albert.jpg",
      matt: "/assets/crew-matt.jpg",
      silas: "/assets/crew-silas.jpg",
    },
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
    raised: 0,
    dates: "Sept 7 – Nov 7, 2026",
    datesShort: "September 7 – November 7, 2026",
    eightyPercentNote:
      "Seed & Spark requires campaigns to reach 80% of goal before funds are released.",
  },

  nav: {
    donateCta: "DONATE NOW",
    links: [
      { label: "HOME", href: "/", key: "home" as const, underlineWidth: 38 },
      { label: "ABOUT", href: "/about", key: "about" as const, underlineWidth: 45 },
      { label: "DONATE", href: "/donate", key: "donate" as const, underlineWidth: 53 },
      { label: "CONTACT", href: "/contact", key: "contact" as const, underlineWidth: 62 },
    ],
  },

  footer: {
    explore: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
    ],
    contact: {
      label: "Marketing inquiries",
      email: "info@ask4ent.com",
    },
    connect: [
      { label: "Instagram", href: "#" },
      { label: "Mailing list", href: "#" },
    ],
    copyright: "© 2026 THE STORY OF SHIPROCKED — A SENIOR THESIS FILM",
  },

  splash: {
    subtitle: [
      "Four thousand rock fans. One cruise ship. Sixteen years of chaos,",
      "community, and music — captured for the first time on film.",
    ],
    watchTrailer: "WATCH TRAILER",
    donate: "DONATE",
  },

  home: {
    hero: {
      overline: "WELCOME TO SHIPROCKED",
      subtitle: "A floating world, decades in the making.",
      watchTrailer: "WATCH TRAILER",
      donate: "DONATE",
    },
    film: {
      overline: "THE FILM",
      headline: ["A floating world,", "decades in the making."],
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
          title: "THE FAMILY",
          description:
            "A distinct culture, 16 years deep. Fans who have sailed every single year, and the crew who keeps it running.",
        },
        {
          number: "03",
          title: "THE PRODUCTION",
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
    },
    timeline: {
      overline: "THE TIMELINE",
      headline: "From dock to deadline.",
      items: [
        {
          date: "FALL 2024",
          title: "Pre-production begins",
          description:
            "Research, outreach, and building relationships with the ShipRocked community.",
        },
        {
          date: "JAN 2025",
          title: "First voyage shoot",
          description:
            "Embarking on the cruise with cameras, crew, and a mountain of hard drives.",
        },
        {
          date: "SPRING 2025",
          title: "Post-production ramp",
          description:
            "Logging, transcribing, and shaping hundreds of hours of footage.",
        },
        {
          date: "JAN 2027",
          title: "Voyage of the Ronin",
          description:
            "The next ShipRocked cruise — our deadline to deliver the finished film.",
        },
      ],
    },
    crew: {
      overline: "MEET THE CREW",
      headline: "The people behind the lens.",
      members: [
        {
          name: "Albert Koenig",
          role: "DIRECTOR",
          bio: "Senior thesis filmmaker documenting the culture and community of ShipRocked from the inside.",
        },
        {
          name: "Matt Davis",
          role: "PRODUCER",
          bio: "Production lead coordinating shoots, logistics, and the growing archive of voyage footage.",
        },
        {
          name: "Silas Grasse",
          role: "MARKETING LEAD",
          bio: "Driving awareness for the campaign and connecting the film with fans and press.",
        },
      ],
    },
    characters: {
      overline: "MEET THE CHARACTERS",
      headline: "The faces of ShipRocked.",
      subjects: [
        { name: "Subject TBD", note: "Longtime sailor" },
        { name: "Subject TBD", note: "Artist alumni" },
        { name: "Subject TBD", note: "Crew member" },
        { name: "Subject TBD", note: "First-time voyager" },
      ],
    },
    transparency: {
      overline: "TRANSPARENCY",
      headline: "Where your support goes.",
      breakdown: [
        { label: "Production & equipment", percent: 35 },
        { label: "Post-production & editing", percent: 25 },
        { label: "Music licensing", percent: 15 },
        { label: "Marketing & festival submissions", percent: 15 },
        { label: "Contingency", percent: 10 },
      ],
    },
  },

  donate: {
    hero: {
      overline: "JOIN THE CREW",
      headline: "Fund the final voyage.",
    },
    tiers: [
      {
        id: "tier-1",
        tier: "Tier I",
        price: 25,
        name: "NEWB",
        description: "Digital thank-you and campaign updates.",
        featured: false,
        comingSoon: false,
        availability: null,
        premium: false,
      },
      {
        id: "tier-2",
        tier: "Tier II",
        price: 100,
        name: "SHIPROCKER",
        description: "Exclusive digital content and behind-the-scenes access.",
        featured: false,
        comingSoon: false,
        availability: null,
        premium: false,
      },
      {
        id: "tier-3",
        tier: "Tier III",
        price: 250,
        name: "SKULLY'S DAIMYO",
        description: "Limited-edition merch and early screening invite.",
        featured: false,
        comingSoon: false,
        availability: null,
        premium: false,
      },
      {
        id: "tier-4",
        tier: "Tier IV",
        price: 500,
        name: "SKULLY'S HAND",
        description: "Producer credit, signed poster, and VIP screening access.",
        featured: true,
        badge: "MOST CLAIMED",
        comingSoon: false,
        availability: null,
        premium: false,
      },
      {
        id: "tier-5-coming",
        tier: "Tier V",
        price: null,
        name: "COMING SOON",
        description: "A new reward tier is on the way.",
        featured: false,
        comingSoon: true,
        availability: null,
        premium: false,
      },
      {
        id: "tier-6",
        tier: "Tier VI",
        price: 1500,
        name: "SURVIVOR",
        description: "Premium package with exclusive voyage memorabilia.",
        featured: false,
        comingSoon: false,
        availability: "Only 40 available.",
        premium: false,
      },
      {
        id: "tier-7",
        tier: "Tier VII",
        price: 6000,
        name: "OCEANVIEW CABIN FOR TWO",
        description:
          "The ultimate reward — an oceanview cabin for two on a future ShipRocked voyage.",
        featured: false,
        comingSoon: false,
        availability: null,
        premium: true,
      },
    ],
    seedAndSpark: {
      overline: "POWERED BY",
      headline: "Seed & Spark",
      body: "Our crowdfunding campaign runs on Seed & Spark. Every contribution helps us cross the finish line.",
      cta: "VISIT CAMPAIGN",
    },
  },

  contact: {
    hero: {
      overline: "GET IN TOUCH",
      headline: "Questions? We're listening.",
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
        note: "Response within 2-3 business days",
      },
    ],
    form: {
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
