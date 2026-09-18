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
    innerCircleJoin: "/assets/logos/click-to-join.png",
    seedAndSpark: "/assets/seedandsparktransparent.svg",
    dividerVector: "/assets/divider-vector.svg",
  },

  links: {
    trailer: "https://www.youtube.com/watch?v=rL6LEVvv6Sk",
    seedAndSpark: "#",
    instagram: "https://www.instagram.com/storyofshiprocked",
    facebook: "#",
    innerCircle:
      "https://docs.google.com/forms/d/1KZD-Ogcz0iUF5weKBX-_ZGT5Fn_KoVsRfWWu-P8DzF8/viewform",
    youtube: "https://www.youtube.com/@ASK4EntertainmentLLC",
    mailingList: "#",
  },

  campaign: {
    goal: 30000,
    homeGoal: 25000,
    raised: 0,
    dates: "October 14 - November 13, 2026",
    homeDatesSoon: "Coming #Soon:",
    homeDates: "October 14th - November 13th",
    datesLabel: "CAMPAIGN: OCT 14 - NOV 13, 2026",
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
      youtubeId: "rL6LEVvv6Sk",
    },
    film: {
      overline: "THE FILM",
      headline: ["A floating world,", "finally documented."],
      testimonialsYoutubeId: "IPbCpdFxE0k",
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
          image: "/assets/photos/lineup.jpg",
          alt: "ShipRocked lineup performing on the undead deck",
        },
        {
          number: "02",
          title: "THE COMMUNITY",
          description:
            "A distinct culture, 16 years deep. Fans who have sailed every single year, and the crew who keeps it running.",
          image: "/assets/photos/community.jpg",
          alt: "ShipRocked fans in costume on a theme night",
        },
        {
          number: "03",
          title: "THE STAKES",
          description:
            "A senior thesis film, self-funded, racing toward a January 2027 voyage and a hard deadline.",
          image: "/assets/photos/stakes.jpg",
          alt: "Film crew shooting live during a ShipRocked set",
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
      headlineAccent: "and counting...",
      body: "What started as a film school thesis has become the most ambitious documentation project in ShipRocked's sixteen-year history. Two years of footage, hundreds of interviews, and one voyage left to capture before the story is complete.",
    },
    timeline: {
      overline: "THE TIMELINE",
      headline: "From dock to deadline.",
      items: [
        {
          date: "SEPT - NOV 2026",
          title: "Fundraising campaign",
          description:
            "Public campaign to fund post-production and distribution costs.",
        },
        {
          date: "JAN 2026",
          title: "Filming Resumes: Voyage of the Ronin filming begins",
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
          date: "2027",
          title: "Festival circuit & release",
          description:
            "Submission to documentary festivals, followed by public release.",
        },
      ],
    },
    crew: {
      overline: "MEET THE CREW",
      headline: "Meet the Film-Crew",
      members: [
        {
          name: "ALBERT KOENIG",
          role: "DIRECTOR",
          bio: "Albert Koenig is a documentary producer and editor from Nashville, TN. With ShipRocked being his dad's livelihood, he's excited to explore the family and world through the lens of cinema.",
        },
        {
          name: "MATT DAVIS",
          role: "PRODUCER",
          bio: "(bio)",
        },
        {
          name: "SILAS GRASSE",
          role: "MARKETING PRODUCER",
          bio: "Silas Grasse is a Marketer and Producer from Philadelphia, PA. He specializes in creating vivid and interactive promotional campaigns for experiential creative projects.",
        },
        { name: "ELLIOT CUNNINGHAM", role: "POST SUPERVISOR", bio: "(bio)" },
        { name: "JACK EASTERHAUS", role: "CINEMATOGRAPHY", bio: "(bio)" },
        { name: "WILLIAM BROWN", role: "PRODUCTION SOUND", bio: "(bio)" },
        { name: "ARCHER MCCRACKEN", role: "SOUND SUPERVISOR", bio: "(bio)" },
        { name: "EMILY MOTTA", role: "EDITOR", bio: "(bio)" },
      ],
    },
    meetCharacters: {
      overline: "MEET THE CHARACTERS",
      headline: "Meet the Characters",
      subjects: [
        { name: "ALAN KOENIG", bio: "(bio)" },
        { name: "COOKIE", bio: "(bio)" },
        { name: "GANG!", bio: "(bio)" },
        { name: "EMI GRACE", bio: "(bio)" },
        { name: "JENNIFER ZITO", bio: "(bio)" },
        { name: "AL MCMANUS", bio: "(bio)" },
        { name: "THE SWEDES", bio: "(bio)" },
        { name: "THE SHIPROCKED FAMILY", bio: "(bio)" },
      ],
    },
    transparency: {
      overline: "FUNDING GOALS",
      headline: "Budget Breakdown.",
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
      fundraising: "Free Entry Until October 14th",
      cta: "Join the Inner Circle",
      merchNote:
        "Merchandise previews coming #soon. Inner Circle members get first-looks, and help design the items.",
    },
    tiers: {
      overline: "COME ABOARD",
      headline: "Six ways to support the film.",
      selectCta: "SELECT THIS TIER",
      claimCta: "CLAIM THIS TIER",
      merchHeadline: "Merchandise",
      items: [
        {
          id: "tier-1",
          tier: "TIER I",
          price: 25,
          name: "NEWB",
          reward: "Digital thank you card",
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
          perks: ["Everything in all lower tiers"],
          featured: false,
          badge: "MOST CLAIMED",
          premium: true,
        },
      ],
    },
    seedAndSpark: {
      overline: "POWERED BY SEED & SPARK",
      headline: "Built for indie film. Designed for trust.",
      body: "We're running this campaign through Seed & Spark, the platform built specifically for independent filmmakers: transparent fees, direct filmmaker support, and a community that champions indie stories. More info on the campaign, and rewards for our donors coming #soon!",
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
        logo: "ke" as const,
      },
      {
        overline: "GENERAL INQUIRIES",
        title: "ASK4 Entertainment",
        email: "info@ask4ent.com",
        note: "Response within 2-3 business days",
        logo: "ask4" as const,
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
