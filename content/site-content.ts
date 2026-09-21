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
    seedAndSpark: "/assets/logos/seed-and-spark.png",
    seedAndSparkInline: "/assets/seedandsparkinline.png",
    dividerVector: "/assets/divider-vector.svg",
    filmCrewSkeletons: "/assets/sr-skeletons-film-crew.png",
    skeletonDirector: "/assets/sr-skeleton-directors-chair.png",
    cruiseShip: "/assets/curiseshipfinalfinal.png",
    homeBackground: "/assets/background-1.jpg",
    duoBackground: "/assets/duo-background.jpg",
    aboutBackground: "/assets/background-2-about.jpg",
    dockToDeadline: "/assets/dock-to-deadline.jpg",
    meetCharactersCrew: "/assets/meet-the-characters-and-film-crew.jpg",
    contactBackground: "/assets/contact-artboard.jpg",
  },

  links: {
    trailer: "https://www.youtube.com/watch?v=ce-JuEMSmvk",
    seedAndSpark: "https://seedandspark.com/user/shiprocked-01knmpy4554rbz6ppy7xb7y4vk",
    instagram: "https://www.instagram.com/storyofshiprocked",
    facebook: "#",
    innerCircle:
      "https://docs.google.com/forms/d/1KZD-Ogcz0iUF5weKBX-_ZGT5Fn_KoVsRfWWu-P8DzF8/viewform",
    youtube: "https://www.youtube.com/@ASK4EntertainmentLLC",
    mailingList: "#",
  },

  campaign: {
    goal: 30000,
    homeGoal: 30000,
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
      youtubeId: "ce-JuEMSmvk",
    },
    film: {
      overline: "THE FILM",
      headline: ["A floating world,", "finally documented."],
      testimonialsYoutubeId: "IPbCpdFxE0k",
      paragraphs: [
        "For sixteen years, ShipRocked has built something bigger than a music festival: a family. Four thousand people come together for one week in the Caribbean, but the friendships, traditions, and stories live on long after the ship docks.",
        "The Story of ShipRocked follows the people who make that family possible - from ASK4 Entertainment navigating impossible problems more than a year before sailing, to artists becoming part of the community, to fans whose ShipRocked relationships have carried into weddings, funerals, road trips, and everyday life. Through pandemics, near-disasters, changing music, and the beautiful chaos onboard, the film explores what happens when thousands of people find a place where they truly belong.",
      ],
      paragraphsMobile: [
        "For sixteen years, ShipRocked has built something bigger than a music festival: a family. Four thousand people come together for one week in the Caribbean, but the friendships, traditions, and stories live on long after the ship docks.",
        "The Story of ShipRocked follows the people behind that family - from ASK4 Entertainment and the artists to the fans whose ShipRocked relationships have shaped their lives. Through pandemics, near-disasters, changing music, and the beautiful chaos onboard, the film explores what happens when thousands of people find a place where they truly belong.",
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
      overline: "DOCUMENTARY DETAILS",
      headline: "30 terabytes",
      headlineAccent: "and counting...",
      body: "What started as a film school thesis has become the most ambitious documentation project in ShipRocked's sixteen-year history. Two years of footage, hundreds of interviews, and one voyage left to capture before the story is complete.",
    },
    timeline: {
      overline: "THE TIMELINE",
      headline: "From dock to deadline.",
      items: [
        {
          date: "OCT - NOV 2026",
          title: "Fundraising campaign",
          description:
            "Public campaign to fund post-production and distribution costs.",
        },
        {
          date: "JAN 2026",
          title: "Filming Resumes: Voyage of the Ronin filming begins",
          mobileTitle: "Filming resumes",
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
      slides: [
        {
          image: "/assets/photos/ship-3.jpg",
          alt: "Sound and camera crew filming in a kids club aboard the ship",
        },
        {
          image: "/assets/photos/ship-1.jpg",
          alt: "Film crew shooting dancers on the ShipRocked floor",
        },
        {
          image: "/assets/photos/ship-4.jpg",
          alt: "Camera operators filming in a ship lounge",
        },
        {
          image: "/assets/photos/ship-2.jpg",
          alt: "A subject sits against an elevator while a boom mic records",
        },
        {
          image: "/assets/photos/ship-5.jpg",
          alt: "The film crew and ship staff gathered in a production room",
        },
        {
          image: "/assets/photos/ship-6.jpg",
          alt: "The documentary crew filming aboard ShipRocked",
        },
      ],
    },
    crew: {
      overline: "THE TEAM",
      kicker: "36 SCAD students across a range of creative majors",
      headline: "Meet the Film-Crew",
      members: [
        {
          name: "ALBERT KOENIG",
          role: "DIRECTOR",
          image: "/assets/Albert Koenig.png",
          bio: "Albert Koenig is a documentary producer and editor from Nashville, TN. With ShipRocked being his dad's livelihood, he has grown up around the people, music, and culture that make the event what it is. As Director of The Story of ShipRocked, he's excited to explore that family and world through the lens of cinema.",
        },
        {
          name: "MATT DAVIS",
          role: "FILM PRODUCER",
          image: "/assets/Matt Davis.png",
          bio: "Matt Davis is a film producer from Dallas, TX, with experience across both SCAD productions and independent projects outside the university. As a producer on The Story of ShipRocked, he helps bring together the people, logistics, and creative pieces behind the film-capturing what makes ShipRocked unlike anything else.",
        },
        {
          name: "SILAS GRASSE",
          role: "MARKETING PRODUCER",
          image: "/assets/Silas Grasse.png",
          bio: "Silas Grasse is a Marketer and Producer from Philadelphia, PA. He specializes in creating vivid and interactive promotional campaigns for experiential creative projects. As Marketing Producer on The Story of ShipRocked, he leads the film's marketing strategy & execution, and works to bring the ShipRocked story to audiences beyond the ship.",
        },
        {
          name: "ARCHER MCCRACKEN",
          role: "SOUND SUPERVISOR",
          image: "/assets/Archer MackCracken.png",
          bio: "Archer MacCracken is a Sound Supervisor and Recording Engineer from Washington, D.C., deeply involved in SCAD's film and production community. As head of the post-sound team on The Story of ShipRocked, Archer is shaping the sonic world of the film-from live music and crowd energy to the intimate moments in between.",
        },
        {
          name: "WILLIAM BROWN",
          role: "PRODUCTION SOUND",
          image: "/assets/William Brown.png",
          bio: "William Brown is a Sound Engineer from Nashville, TN, whose work spans SCAD's film, television, and theater productions. With sound as his specialty, William has built experience across a wide range of live and filmed productions and brings that hands-on expertise to The Story of ShipRocked.",
        },
        {
          name: "JACK EASTERHAUS",
          role: "CINEMATOGRAPHY",
          image: "/assets/Jack Easterhaus.png",
          bio: "Jack Easterhaus is a Director-Cinematographer based out of Savannah, focusing on narrative short films and advertising. Jack is the Supervising Director of Photography for ShipRocked, helping coordinate film crews and overseeing the visual look across the sailings.",
        },
        {
          name: "ELLIOT CUNNINGHAM",
          role: "POST SUPERVISOR",
          image: "/assets/Elliot Cunningham.png",
          bio: "Elliot Cunningham is a post-production storyteller raised in Dallas, TX, with experience across SCAD productions and professional film work. After interning at HBO this summer, Elliot joins The Story of ShipRocked as Post Supervisor, helping lead the editorial team and build an efficient, collaborative post-production workflow.",
        },
        {
          name: "EMILY MOTTA",
          role: "EDITOR",
          image: "/assets/Emily Motta.png",
          bio: "Emily Motta is a documentary editor from Columbus, Ohio, with extensive experience cutting SCAD film productions. As the editor of The Story of ShipRocked, Emily brings a documentary-focused eye to hours of footage, shaping the performances, people, and stories that make up the ShipRocked experience.",
        },
      ],
    },
    meetCharacters: {
      overline: "MEET THE CHARACTERS",
      headline: "Meet the Characters",
      subjects: [
        {
          name: "ALAN KOENIG",
          image: "/assets/Alan Koenig.png",
          bio: 'Alan Koenig launched ASK4 Entertainment in 2009 to pioneer ShipRocked, earning his reputation as "the father" of the premier floating rock festival. His vision replaced standard music venues with a community-driven cruise, uniting top-tier rock bands and thousands of fans at sea for over 15 years.',
        },
        {
          name: "COOKIE",
          image: "/assets/Cookie.png",
          bio: 'Jonathan "Cookie" Adams serves as the high-energy onboard personality and guest host who keeps the vacation vibe dialed up around the clock. Backed by a background in live theater, he leads fan-favorite events and deck parties to cultivate the legendary family atmosphere unique to ShipRocked.',
        },
        {
          name: "GANG!",
          image: "/assets/Gang.png",
          bio: "GANG! is a chaotic Los Angeles punk collective that pairs skateboarding-inspired riffs with a mysterious visual identity defined by neon green ski-masks. Aboard ShipRocked, they bring their lawless energy to the open ocean, turning deck stages into interactive, crowd-surfing spectacles for the cruise community.",
        },
        {
          name: "EMI GRACE",
          image: "/assets/Emmie Grace.jpeg",
          bio: "Emi Grace is a self-taught guitar prodigy known for her heavy electronic riffs, a distinct Stratocaster shred style, and backing from rock legends like Brian May. Aboard ShipRocked, she channels that exact raw energy into high-octane solo sets and guest appearances with the cruise’s all-star band, The Stowaways.",
        },
        {
          name: "JENNIFER ZITO",
          image: "/assets/Jennifer Zito.png",
          bio: "Jennifer Zito serves as the Vice President of Operations for ASK4 Entertainment, managing all logistics, event planning, and production behind the scenes. She directs the complex shipboard operations required to execute ShipRocked seamlessly year after year.",
        },
        {
          name: "AL MCMANUS",
          image: "/assets/Al McManus.png",
          bio: "Al McManus serves as the Vice President of Operations and Talent Booker for ASK4 Entertainment, managing heavy-hitting artist relations and event coordination. He also produces Making Waves: The ShipRocked Podcast, keeping the cruise community engaged year-round.",
        },
        {
          name: "THE SWEDES",
          image: "/assets/The Swedes.png",
          bio: 'This high-energy Swedish crew of friends stands out as ShipRocked’s most legendary international fan faction. Operating under their official motto, "Have no fear, The Swedes are here," the group was launched over a decade ago by key members Michael and Zandra Mobius to bring international rock enthusiasts together at sea.',
        },
        {
          name: "THE SHIPROCKED FAMILY",
          image: "/assets/the-shiprocked-family.png",
          bio: "The ShipRocked Family represents the core heartbeat of the entire cruise-a massive, global community of passionate rock fans who reunite at sea year after year. Bonded by a shared love for heavy music and vacation vibes, this inclusive, high-energy family turns a standard vacation into a legendary, lifelong community.",
        },
      ],
    },
    transparency: {
      overline: "CAMPAIGN FUNDING GOALS",
      headline: "Budget Breakdown.",
      breakdown: [
        {
          label: "Post-production & editing",
          percent: 40,
          image: "/assets/post production.png",
          description:
            "Cutting hours of voyage footage into a finished documentary - editors, assembly, and picture lock.",
        },
        {
          label: "Festival submission fees",
          percent: 20,
          image: "/assets/festival.png",
          description:
            "Entry fees and materials to get the film in front of festival programmers and audiences.",
        },
        {
          label: "Sound design & color grade",
          percent: 20,
          image: "/assets/sound design.png",
          description:
            "Mixing the roar of the sea and grading every frame so the voyage feels cinematic.",
        },
        {
          label: "Travel & final voyage capture",
          percent: 15,
          image: "/assets/travel.png",
          description:
            "Getting the crew back on board for the last critical shoots and pickup interviews.",
        },
        {
          label: "Distribution & marketing",
          percent: 5,
          image: "/assets/3 (1).png",
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
      merchNoteLead: "FILM MERCHANDISE previews coming #soon.",
      merchNoteDetail:
        "Inner Circle members get first-looks and help design the items.",
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
      overlinePrefix: "POWERED BY",
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
        email: "storyofshiprocked@koenigentertainment.com",
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
      name: "Your name",
      email: "Your email",
      message: "MESSAGE",
      submit: "SEND MESSAGE",
    },
    social: {
      overline: "FOLLOW THE FILM",
      buttons: [
        {
          label: "JOIN THE INNER CIRCLE",
          href: "https://docs.google.com/forms/d/1KZD-Ogcz0iUF5weKBX-_ZGT5Fn_KoVsRfWWu-P8DzF8/viewform",
          variant: "turquoise" as const,
        },
        { label: "INSTAGRAM", href: "https://www.instagram.com/storyofshiprocked", variant: "outline" as const },
        { label: "FACEBOOK", href: "#", variant: "outline" as const },
        { label: "YOUTUBE", href: "https://www.youtube.com/@ASK4EntertainmentLLC", variant: "outline" as const },
      ],
    },
  },
} as const;

export type NavKey = (typeof siteContent.nav.links)[number]["key"];
