export const siteContent = {
  site: {
    title: "Story of Shiprocked",
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
    innerCircleLogoText: "/assets/logos/inner-circle-text.png",
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
    swagSkully: "/swagskullyfinalfinal.jpeg",
  },

  links: {
    trailer: "https://www.youtube.com/watch?v=ce-JuEMSmvk",
    seedAndSpark: "https://seedandspark.com/fund/shiprocked",
    instagram: "https://www.instagram.com/storyofshiprocked",
    facebook: "https://www.facebook.com/GetShipRocked/",
    innerCircle: "https://seedandspark.com/fund/shiprocked",
    youtube: "https://www.youtube.com/@ASK4EntertainmentLLC",
    mailingList: "#",
  },

  campaign: {
    goal: 35000,
    homeGoal: 35000,
    /** Fallback when CAMPAIGN_RAISED env is unset; match Seed & Spark manually or via Vercel env. */
    raised: 11000,
    dates: "October 14 - November 13, 2026",
    homeDatesSoon: "Coming #Soon:",
    homeDates: "October 14th - November 13th",
    datesLabel: "CAMPAIGN: OCT 14 - NOV 13, 2026",
    fundraisingBanner: "Crowdfunding is Live Now! Ends Nov. 13th",
    eightyPercentNote:
      "Seed & Spark requires campaigns to reach 80% of goal before funds are released.",
  },

  nav: {
    supportCta: "Pledge Now",
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
      emailSubject: "Story of ShipRocked — Marketing inquiry",
    },
    connect: [
      { label: "Instagram", href: "https://www.instagram.com/storyofshiprocked", icon: "instagram" as const },
      {
        label: "Facebook",
        href: "https://www.facebook.com/GetShipRocked/",
        icon: "facebook" as const,
      },
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
      kicker: "30+ SCAD students across a range of creative majors",
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
          bio: 'Alan Koenig launched ASK4 Entertainment in 2008 to pioneer ShipRocked, earning his reputation as "The Captain" of the premier floating rock music festival. His vision was to change a typical music festival into a community driven vacation cruise, uniting top-tier rock bands and thousands of fans at sea.',
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
          name: "AL MCMANUS",
          image: "/assets/Al McManus.png",
          bio: "Al McManus serves as the Vice President of ASK4 & Buffet, as well as talent booking for The Stowaways. He manages heavy-hitting artist relations and overall event coordination. He co-produces Making Waves: The ShipRocked, Podcast, helping to keep the cruise community engaged year round.",
        },
        {
          name: "JENNIFER ZITO",
          image: "/assets/Jennifer Zito.png",
          bio: "Jennifer Zito serves as VP of Operations 'N Stuff for ASK4 Entertainment, managing logistics, staff management, and event production behind the scenes. She directs complex shipboard operations required to execute ShipRocked seamlessly year after year.",
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
      headline: "Support the Film",
      body: "Fuel the next chapter of ShipRocked. Get exclusive rewards, help bring the story to life, and become part\nof the crew that makes this film possible.",
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
      fundraising: "Now available to all Film Pledgers",
      cta: "Join the Inner Circle",
      merchNoteLead: "Merch Competitions for Inner Circle Members",
      merchNoteDetail: "",
    },
    merchPreviews: {
      overline: "",
      headline: "",
      body: "",
      flipHint: "",
      showcase: {
        motionMediaLabel: "Motion Media",
        comingSoon: "Coming soon",
        videoSrc: "",
        poster: "/assets/merch/voyage-poster.jpg",
        caption: "A motion showcase of every reward item — launching with the campaign.",
      },
      cards: [
        {
          id: "tier-1",
          name: "Inner Circle",
          tier: "Tier 1",
          price: 25,
          illustration: "/assets/Tier 1.png",
          included: [
            "Inner Circle Group Access",
            "Campaign Updates",
            "Social Media Shoutout",
          ],
        },
        {
          id: "tier-2",
          name: "Stowaway",
          tier: "Tier 2",
          price: 60,
          illustration: "/assets/Tier 2.png",
          included: [
            "BTS Featurette",
            "SCAD Film Cut",
            "Name in Credits",
            "Sticker Sheet",
            "Previous Tier Rewards",
          ],
        },
        {
          id: "tier-3",
          name: "Shiprocker",
          tier: "Tier 3",
          price: 100,
          illustration: "/assets/Tier 3.png",
          included: ["SOS T-Shirt", "SOS Sticker Sheet", "Previous Tier Rewards"],
        },
        {
          id: "tier-4",
          name: "Ronin",
          tier: "Tier 4",
          price: 500,
          illustration: "/assets/Tier 4.png",
          included: [
            "SOS Mug",
            "SOS Canvas Tote",
            "Inner Circle Hat",
            "SOS Hoodie",
            "10 Years Setlist (First 65)",
            "Previous Tier Rewards",
          ],
        },
        {
          id: "tier-5",
          name: "Window Cabin",
          tier: "Tier 5",
          price: 5500,
          illustration: "/assets/Tier 5.png",
          included: [
            "Oceanview Cabin for Two",
            "Custom Guitar",
            "Perfect 10 Benefits",
            "Previous Tier Rewards",
          ],
        },
      ],
    },
    tiers: {
      overline: "COME ABOARD",
      headline: "Five ways to support the film.",
      selectCta: "SELECT THIS TIER",
      claimCta: "CLAIM THIS TIER",
      merchHeadline: "Merchandise",
      items: [
        {
          id: "tier-1",
          tier: "TIER 1",
          price: 25,
          name: "INNER CIRCLE",
          reward: "Inner Circle",
          image: "",
          perks: [
            "Inner Circle Group Access",
            "Campaign Updates",
            "Social Media Shoutout",
          ],
          featured: false,
          premium: false,
        },
        {
          id: "tier-2",
          tier: "TIER 2",
          price: 60,
          name: "STOWAWAY",
          reward: "Stowaway",
          image: "",
          perks: [
            "BTS Featurette",
            "SCAD Film Cut",
            "Name in Credits",
            "Sticker Sheet",
            "Previous Tier Rewards",
          ],
          featured: false,
          premium: false,
        },
        {
          id: "tier-3",
          tier: "TIER 3",
          price: 100,
          name: "SHIPROCKER",
          reward: "Shiprocker",
          image: "",
          perks: [
            "SOS T-Shirt",
            "SOS Sticker Sheet",
            "Previous Tier Rewards",
          ],
          featured: false,
          premium: false,
        },
        {
          id: "tier-4",
          tier: "TIER 4",
          price: 500,
          name: "RONIN",
          reward: "Ronin",
          image: "",
          perks: [
            "SOS Mug",
            "SOS Canvas Tote",
            "Inner Circle Hat",
            "SOS Hoodie",
            "10 Years Setlist (First 65)",
            "Previous Tier Rewards",
          ],
          featured: false,
          premium: false,
        },
        {
          id: "tier-5",
          tier: "TIER 5",
          price: 5500,
          name: "WINDOW CABIN",
          reward: "Oceanview Cabin for Two",
          image: "",
          perks: [
            "Oceanview Cabin for Two",
            "Custom Guitar",
            "Perfect 10 Benefits",
            "Previous Tier Rewards",
          ],
          featured: false,
          premium: true,
        },
      ],
    },
    seedAndSpark: {
      overline: "POWERED BY SEED & SPARK",
      overlinePrefix: "POWERED BY",
      headline: "Built for indie film. Designed for trust.",
      body: "We're running this campaign through Seed & Spark, the platform built specifically for independent filmmakers: transparent fees, direct filmmaker support, and a community that champions indie stories.",
      cta: "PLEDGE VIA SEED & SPARK →",
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
        emailSubject: "Story of ShipRocked — Marketing & press",
        note: null,
        logo: "ke" as const,
      },
      {
        overline: "GENERAL INQUIRIES",
        title: "ASK4 Entertainment",
        email: "info@ask4ent.com",
        emailSubject: "Story of ShipRocked — General inquiry",
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
      /** FormSubmit.co delivery address (activate once via their confirmation email). */
      deliverTo: "shiprocked@koenigentertainment.com",
      subject: "ShipRocked contact form",
      sentHeadline: "Thank you!",
      sentMessage: "Your message is on its way. We'll get back to you soon.",
      sendAnother: "Send another message",
      activationMessage:
        "Almost there — FormSubmit sent an activation link to shiprocked@koenigentertainment.com. Click Activate Form in that email (check spam), then submit again from www.storyofshiprocked.com/contact — not the .vercel.app URL.",
    },
    social: {
      overline: "FOLLOW THE FILM",
      buttons: [
        {
          label: "SEED & SPARK",
          href: "https://seedandspark.com/fund/shiprocked",
          variant: "turquoise" as const,
        },
        { label: "INSTAGRAM", href: "https://www.instagram.com/storyofshiprocked", variant: "outline" as const },
        {
          label: "FACEBOOK",
          href: "https://www.facebook.com/GetShipRocked/",
          variant: "outline" as const,
        },
        { label: "YOUTUBE", href: "https://www.youtube.com/@ASK4EntertainmentLLC", variant: "outline" as const },
      ],
    },
  },
} as const;

export type NavKey = (typeof siteContent.nav.links)[number]["key"];
