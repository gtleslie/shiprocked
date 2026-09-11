export const siteContent = {
  site: {
    title: "The Story of ShipRocked",
    description:
      "A senior thesis documentary capturing sixteen years of ShipRocked, the heavy metal rock cruise festival in the Caribbean.",
  },

  assets: {
    logo: "/assets/logos/Logo.png",
    heroLogo: "/assets/logos/hero-logo.png",
    keLogo: "/assets/logos/KE_LOGO-WHITE.png",
    ask4Logo: "/assets/logos/ask4-entertainment.png",
    skullyRide: "/assets/logos/skully-riding-cruise.png",
    innerCircleLogo: "/assets/logos/inner-circle-logo.mp4",
    seedAndSpark: "/assets/seedandsparktransparent.svg",
    dividerVector: "/assets/divider-vector.svg",
  },

  links: {
    trailer: "#",
    seedAndSpark: "#",
    instagram: "https://www.instagram.com/storyofshiprocked",
    facebook: "#",
    innerCircle: "#",
    youtube: "https://www.youtube.com/@ASK4EntertainmentLLC",
    mailingList: "#",
  },

  campaign: {
    goal: 30000,
    homeGoal: 25000,
    raised: 0,
    dates: "October 14 - November 14, 2026",
    homeDates: "October 14th - November 14th",
    datesLabel: "CAMPAIGN: OCT 14 - NOV 14, 2026",
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
      { label: "Instagram", href: "https://www.instagram.com/storyofshiprocked", icon: "instagram" as const },
      { label: "Facebook", href: "#", icon: "facebook" as const },
      { label: "YouTube", href: "https://www.youtube.com/@ASK4EntertainmentLLC", icon: "youtube" as const },
    ],
    copyright: "© 2026 THE STORY OF SHIPROCKED | A SENIOR THESIS FILM",
  },

  home: {
    hero: {
      subtitle: "Seventeen years of heavy metal at sea. One film to capture it all.",
      voyage: "VOYAGE OF THE RONIN",
      dates: "JANUARY 2027",
      visualLabel: "HERO STILL / POSTER ART",
      watchTrailer: "WATCH TRAILER",
    },
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
          date: "FEB - JUN 2026",
          title: "Post-production",
          description:
            "Editing, sound design, and color grading the 4K raw footage.",
        },
        {
          date: "SEPT - NOV 2026",
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
        {
          name: "ALBERT KOENIG",
          role: "DIRECTOR",
          bio: "Albert leads the vision for The Story of ShipRocked, shaping every frame of this senior thesis documentary. He has spent years embedded with the voyage community, determined to capture the chaos and camaraderie that only happen at sea.",
        },
        {
          name: "MATT DAVIS",
          role: "PRODUCER",
          bio: "Matt keeps the production moving from dock to deadline, bridging creative ambition with the realities of indie filmmaking. He coordinates the campaign, the crew, and the partnerships that make finishing the film possible.",
        },
        {
          name: "SILAS GRASSE",
          role: "PRODUCTION LEAD",
          bio: "Silas runs the day-to-day shoot with a steady hand, turning packed voyage schedules into usable footage. He thrives in the pressure of live events, making sure nothing essential slips past the lens.",
        },
      ],
    },
    characters: {
      overline: "MEET THE CHARACTERS",
      headline: "The voices of the voyage.",
      subjects: [
        { name: "Al McManus", bio: "(bio)" },
        { name: "Jennifer Zito", bio: "(bio)" },
        { name: "Alan Koenig", bio: "(bio)" },
        { name: "Emi Grace", bio: "(bio)" },
        { name: "GANG!", bio: "(bio)" },
        { name: "Cookie", bio: "(bio)" },
        { name: "The Swedes", bio: "(bio)" },
        { name: "The ShipRocked Family", bio: "(bio)" },
      ],
    },
    transparency: {
      overline: "TRANSPARENCY",
      headline: "Where the money goes.",
      breakdown: [
        {
          label: "Post-production & editing",
          percent: 40,
          description:
            "Cutting hours of voyage footage into a finished documentary — editors, assembly, and picture lock.",
        },
        {
          label: "Festival submission fees",
          percent: 20,
          description:
            "Entry fees and materials to get the film in front of festival programmers and audiences.",
        },
        {
          label: "Sound design & color grade",
          percent: 20,
          description:
            "Mixing the roar of the sea and grading every frame so the voyage feels cinematic.",
        },
        {
          label: "Travel & final voyage capture",
          percent: 15,
          description:
            "Getting the crew back on board for the last critical shoots and pickup interviews.",
        },
        {
          label: "Distribution & marketing",
          percent: 5,
          description:
            "Trailers, press kits, and the outreach that helps the story find its audience.",
        },
      ],
    },
  },

  support: {
    hero: {
      overline: "JOIN THE CREW",
      headline: "Fund the final voyage.",
      body: "Every tier gets you closer to the finished film, and the top tier gets you a cabin on the real thing.",
    },
    teaser: {
      badge: "REWARDS INSIDE",
      headline: "Support the film. Earn merch and prizes.",
      body: "Every tier comes with its own reward. Open the board to see what you get and pick yours.",
      cta: "VIEW TIERS",
    },
    innerCircle: {
      overline: "SUPPORT",
      headline: "Join the Inner Circle",
      perks: [
        "Live film updates",
        "Directly help shape the film",
        "Fun games + rewards",
        "Exclusive ShipRocked content",
      ],
      fundraising: "Fundraising begins October 14th",
      cta: "Join the Inner Circle",
    },
    tiers: {
      overline: "CHOOSE YOUR TIER",
      headline: "Six ways to support the film.",
      selectCta: "SELECT THIS TIER",
      claimCta: "CLAIM THIS TIER",
      items: [
        {
          id: "tier-1",
          tier: "TIER I",
          price: 25,
          name: "NEWB",
          reward: "Digital thank you card",
          image: "/assets/logos/Logo.png",
          imageFit: "contain",
          perks: ["Name in credits"],
          featured: false,
          premium: false,
        },
        {
          id: "tier-2",
          tier: "TIER II",
          price: 100,
          name: "SHIPROCKER",
          reward: "Exclusive BTS photo set",
          image: "/assets/logos/skully-riding-cruise.png",
          imageFit: "cover",
          perks: ["Everything in Deckhand"],
          featured: false,
          premium: false,
        },
        {
          id: "tier-3",
          tier: "TIER III",
          price: 250,
          name: "SKULLY'S DAIMYO",
          reward: "Early access to trailer",
          image: "/assets/logos/hero-logo.png",
          imageFit: "contain",
          perks: ["Everything in First Mate"],
          featured: false,
          premium: false,
        },
        {
          id: "tier-4",
          tier: "TIER IV",
          price: 500,
          name: "SKULLY'S HAND",
          reward: "Signed film poster",
          image: "/assets/merch/voyage-poster.jpg",
          imageFit: "cover",
          perks: ["Everything in Navigator"],
          featured: true,
          badge: "MOST CLAIMED",
          premium: false,
        },
        {
          id: "tier-5",
          tier: "TIER V",
          price: 1500,
          name: "SURVIVOR",
          reward: "Digital film download day one",
          image: "/assets/logos/Logo.png",
          imageFit: "contain",
          perks: ["Everything in Quartermaster"],
          featured: false,
          premium: false,
        },
        {
          id: "tier-6",
          tier: "TIER VI",
          price: 6000,
          name: "OCEANVIEW CABIN FOR TWO",
          reward: "Cabin for two on Voyage of the Ronin",
          image: "/assets/logos/skully-riding-cruise.png",
          imageFit: "cover",
          perks: ["Everything in all lower tiers"],
          featured: false,
          badge: "TOP REWARD",
          premium: true,
        },
      ],
    },
    seedAndSpark: {
      overline: "POWERED BY SEED & SPARK",
      headline: "Built for indie film. Designed for trust.",
      body: "We're running this campaign through Seed & Spark, the platform built specifically for independent filmmakers: transparent fees, direct filmmaker support, and a community that champions indie stories.",
      cta: "SUPPORT VIA SEED & SPARK →",
    },
  },

  contact: {
    hero: {
      overline: "GET IN TOUCH",
      headline: "Questions? We're listening.",
      body: "Press, sponsors, fans, and fellow rock-and-roll rōnin: reach out below.",
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
        { label: "INSTAGRAM", href: "https://www.instagram.com/storyofshiprocked", variant: "outline" as const },
        { label: "FACEBOOK", href: "#", variant: "outline" as const },
        { label: "YOUTUBE", href: "https://www.youtube.com/@ASK4EntertainmentLLC", variant: "outline" as const },
        { label: "JOIN MAILING LIST", href: "#", variant: "gold" as const },
      ],
    },
  },
} as const;

export type NavKey = (typeof siteContent.nav.links)[number]["key"];
