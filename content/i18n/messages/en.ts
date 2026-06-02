import type { Dictionary } from "@/content/i18n";

export const en: Dictionary = {
  common: {
    brand: "KŁOSY",
    brandFull: "Restauracja KŁOSY",
    ogImageAlt: "Warm interior of Restauracja KŁOSY in Warsaw with amber lamp light",
    skipToContent: "Skip to content",

    nav: {
      ariaLabel: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      links: [
        { key: "home", href: "/", label: "Home", short: "Home" },
        { key: "menu", href: "/menu-dnia", label: "Daily menu", short: "Menu" },
        { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Special occasions", short: "Events" },
        { key: "komunie", href: "/komunie-chrzciny", label: "Communions & christenings", short: "Communions" },
        { key: "wesela", href: "/wesela-rocznice", label: "Weddings & anniversaries", short: "Weddings" },
        { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
        { key: "galeria", href: "/galeria", label: "Gallery", short: "Gallery" },
        { key: "kontakt", href: "/kontakt", label: "Contact", short: "Contact" },
      ],
    },

    langSwitcher: {
      label: "Change language",
      current: "Language",
    },

    cta: {
      reserve: "Ask about a date",
      sendInquiry: "Send inquiry",
      call: "Call",
      write: "Write",
      ask: "Ask about a date",
      seeOffer: "See our offer",
      seeMenu: "See the daily menu",
      backHome: "Back to home",
    },

    mobileCta: {
      call: "Call",
      write: "Write",
      ask: "Ask",
    },

    footer: {
      tagline: "Home-style cooking, catering and intimate family receptions in the heart of Warsaw.",
      navHeading: "Navigation",
      contactHeading: "Contact",
      foundationNote:
        "The restaurant is run by Fundacja Pomocy Rodzinie „Człowiek w Potrzebie” — profits support the Foundation's statutory goals.",
      copyright: "All rights reserved.",
      madeBy: "Built by:",
      privacy: "Privacy policy",
    },

    cookie: {
      text:
        "We use cookies for statistical and marketing purposes. You can accept all of them or use only the essential ones.",
      accept: "Accept",
      reject: "Essential only",
      privacyLink: "Privacy policy",
      ariaLabel: "Cookie notice",
    },
  },

  meta: {
    home: {
      title: "Restauracja KŁOSY Warsaw | Lunches, catering and family receptions",
      description:
        "Restauracja KŁOSY at Al. Jerozolimskie 123a in Warsaw — home-style lunches, catering and intimate receptions: communions, christenings, weddings, anniversaries and company gatherings.",
      ogDescription:
        "Home-style cooking and family receptions in the heart of Warsaw. Ask about a date for a communion, christening, wedding or catering.",
    },
    menuDnia: {
      title: "Daily menu and home-style lunches in Warsaw",
      description:
        "Home-style lunches and a daily menu at Restauracja KŁOSY on Al. Jerozolimskie in Warsaw. Polish cuisine, vegetarian options, group lunches and catering with delivery.",
      ogDescription: "Home-style lunches and a daily menu in the heart of Warsaw. Polish cuisine, vegetarian options, group lunches.",
    },
    imprezy: {
      title: "Special occasions in Warsaw",
      description:
        "Intimate special occasions at Restauracja KŁOSY in Warsaw: birthdays, anniversaries, jubilees and family gatherings. Bespoke menu and on-site service.",
      ogDescription: "Intimate special-occasion receptions in the heart of Warsaw — birthdays, jubilees, anniversaries.",
    },
    komunie: {
      title: "Communions & christenings in Warsaw | Intimate family receptions",
      description:
        "Communion and christening receptions at Restauracja KŁOSY in Warsaw. Menu for children and adults, on-site service, help with planning. Ask about an available date.",
      ogDescription: "Communion and christening receptions in the heart of Warsaw — menu for children and adults, on-site service.",
    },
    wesela: {
      title: "Intimate weddings and anniversaries in Warsaw",
      description:
        "Intimate weddings, jubilees and anniversaries at Restauracja KŁOSY in Warsaw. A warm, natural setting, a bespoke menu and planning support.",
      ogDescription: "Intimate weddings and anniversaries in the heart of Warsaw — a natural setting, a bespoke menu.",
    },
    catering: {
      title: "Catering Warsaw — corporate and private | Restauracja KŁOSY",
      description:
        "Corporate and private catering in Warsaw: coffee breaks, business lunches, private events — on-site or delivered. VAT invoice. Ask for a quote.",
      ogDescription: "Corporate and private catering in Warsaw — coffee breaks, business lunches, with delivery.",
    },
    galeria: {
      title: "Gallery — interior, dishes and receptions",
      description:
        "Gallery of Restauracja KŁOSY in Warsaw: the interior, home-style dishes, table settings for communions and receptions, and our catering offer.",
      ogDescription: "See the interior, dishes and reception settings at Restauracja KŁOSY in Warsaw.",
    },
    kontakt: {
      title: "Contact | Restauracja KŁOSY, Al. Jerozolimskie 123a",
      description:
        "Get in touch with Restauracja KŁOSY in Warsaw (Al. Jerozolimskie 123a). Ask about a reception date, catering or a group lunch via the form or by phone.",
      ogDescription: "Get in touch with Restauracja KŁOSY in Warsaw — inquiry form, phone, directions.",
    },
    polityka: {
      title: "Privacy policy",
      description: "Privacy policy of the Restauracja KŁOSY website in Warsaw — rules on data processing and the use of cookies.",
      ogDescription: "Rules on data processing and the use of cookies on the Restauracja KŁOSY website.",
    },
  },

  home: {
    hero: {
      badge: "Warsaw · Al. Jerozolimskie 123a",
      titleBefore: "Home-style ",
      titleHighlight: "cooking",
      titleAfter: " and family receptions in the heart of Warsaw",
      subtitle:
        "Lunches, catering and intimate receptions — communions, christenings, weddings, anniversaries and company gatherings. Tell us what you're planning and we'll put together a menu proposal.",
      ctaAsk: "Ask about a date",
      ctaSeeOffer: "See our offer",
      scrollAria: "Scroll to our offer",
    },

    about: {
      heading: "Restauracja KŁOSY in a few words",
      paragraph1Before:
        "We're a restaurant with home-style cooking at Al. Jerozolimskie 123a in Warsaw (Atlas Tower). We cook lunches on site, run catering and host intimate family receptions. The restaurant operates under ",
      paragraph1After:
        ", and its profits support the Foundation's statutory goals.",
      paragraph2:
        "We don't throw lavish parties for hundreds of guests — we focus on intimacy, good food and calm service for families, friends and teams.",
      tiles: [
        { title: "Lunches", desc: "daily menu and for groups" },
        { title: "Catering", desc: "corporate and private" },
        { title: "Communions", desc: "and christenings" },
        { title: "Weddings", desc: "intimate weddings and anniversaries" },
      ],
    },

    process: {
      heading: "What does planning a reception look like?",
      steps: [
        { n: "1", title: "Contact", desc: "You send an inquiry through the form or give us a call." },
        { n: "2", title: "Date", desc: "We confirm the availability of your chosen date." },
        { n: "3", title: "Menu", desc: "We match the menu to the type of event and your guests." },
        { n: "4", title: "Preparation", desc: "We get the room or the catering ready." },
        { n: "5", title: "Event", desc: "We take care of your reception on the day of the event." },
      ],
      note: "After you send an inquiry, the restaurant will confirm the date's availability and prepare a menu proposal.",
    },

    finalCta: {
      heading: "Plan your reception at KŁOSY",
      text: "Tell us what you're planning — we'll reply with a proposed date and menu.",
      button: "Send inquiry",
    },
  },

  offers: {
    heading: "What can we organize for you?",
    intro:
      "Choose a type of event — we'll show you what's included, the benefits and the next step. We work out the details and menu individually once you send your inquiry.",
    tablistAria: "Offer",
    tabs: [
      {
        id: "obiady",
        label: "Lunches and daily menu",
        heading: "Home-style lunches and a daily menu in the heart of Warsaw",
        description:
          "Daily lunches prepared on site — Polish cuisine, seasonal ingredients, a daily menu for individual guests and groups. A great spot for lunch near Al. Jerozolimskie and Ochota.",
        benefits: ["Fresh daily menu", "Vegetarian options", "Group lunches", "Catering with delivery"],
        ctaLabel: "See the daily menu",
        href: "/menu-dnia",
        image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
        imageAlt: "Home-style lunch at Restauracja KŁOSY in Warsaw: roast pork knuckle, soup and dessert",
      },
      {
        id: "komunie-chrzciny",
        label: "Communions & christenings",
        heading: "Communion and christening receptions",
        description:
          "Intimate family receptions with a menu tailored to children and adults and on-site service. We arrange the date and details individually.",
        benefits: ["Menu for children and adults", "Private room (to be confirmed)", "Waiter service", "Help with planning"],
        ctaLabel: "Ask about a communion / christening",
        href: "/komunie-chrzciny",
        image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
        imageAlt: "Table setting for a communion with appetizers at Restauracja KŁOSY in Warsaw",
      },
      {
        id: "wesela",
        label: "Intimate weddings",
        heading: "Intimate weddings and anniversaries",
        description:
          "A wedding among your closest, jubilees and anniversaries — in a warm, natural setting. We arrange the menu and guest count for each specific event.",
        benefits: ["Intimate atmosphere", "Bespoke menu", "Natural decorations", "Planning support"],
        ctaLabel: "Ask about a wedding / anniversary",
        href: "/wesela-rocznice",
        image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
        imageAlt: "Banquet table set for an intimate reception at Restauracja KŁOSY in Warsaw",
      },
      {
        id: "rodzinne",
        label: "Anniversaries and family gatherings",
        heading: "Anniversaries, birthdays and family gatherings",
        description:
          "A shared lunch or dinner for the family, birthdays, jubilees — without the planning stress, with a menu on request.",
        benefits: ["Menu on request", "Space for the family", "On-site service", "Flexible hours"],
        ctaLabel: "Plan a gathering",
        href: "/imprezy-okolicznosciowe",
        image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
        imageAlt: "The intimate room at Restauracja KŁOSY in Warsaw set for a family gathering",
      },
      {
        id: "catering",
        label: "Corporate and private catering",
        heading: "Corporate and private catering in Warsaw",
        description:
          "Catering for company meetings, training sessions and private events — on site or delivered. We agree the scope and format based on your inquiry.",
        benefits: ["Catering with delivery", "Coffee breaks", "Business lunches", "VAT invoice"],
        ctaLabel: "Ask about catering",
        href: "/catering",
        image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
        imageAlt: "KŁOSY catering buffet in Warsaw with caprese appetizers, tartines and desserts",
      },
      {
        id: "grupy",
        label: "Lunches for school groups",
        heading: "Lunches for groups, including school groups",
        description:
          "We prepare lunches for groups — trips, school groups and organized groups. Please get in touch so we can agree on the number of people and the menu.",
        benefits: ["Menu for groups", "Efficient service", "Flexible dates", "Adapted to dietary needs"],
        ctaLabel: "Ask about a group lunch",
        href: "/catering",
        image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
        imageAlt: "Home-style group lunches at Restauracja KŁOSY in Warsaw — chicken and pasta in sauce",
      },
    ],
  },

  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Can I host a communion at Restauracja KŁOSY?",
        a: "Yes. Restauracja KŁOSY in Warsaw (Al. Jerozolimskie 123a) hosts communion receptions — with a menu tailored to your guests and on-site service. We arrange the date and details individually after your inquiry.",
      },
      {
        q: "Is the venue suitable for christenings?",
        a: "Yes, we host intimate christening receptions. After you send an inquiry, we confirm the date's availability and prepare a menu proposal.",
      },
      {
        q: "Can I host an intimate wedding?",
        a: "Yes. KŁOSY specializes in intimate family receptions, including intimate weddings and anniversaries. We arrange the guest count and menu individually.",
      },
      {
        q: "Does the restaurant offer catering with delivery?",
        a: "Yes, we run catering — corporate and private, on site or delivered within Warsaw. We agree the scope and format based on your inquiry.",
      },
      {
        q: "Can I order lunches for school groups?",
        a: "Yes, we prepare lunches for groups, including school groups. Please get in touch so we can agree on the number of people and the menu.",
      },
      {
        q: "Where is Restauracja KŁOSY located?",
        a: "At Al. Jerozolimskie 123a in Warsaw (the Ochota district), in the Atlas Tower building. We confirm the exact floor and directions when you get in touch.",
      },
      {
        q: "How do I ask about an available date?",
        a: "The quickest way is the inquiry form on the website or a phone call. After you send an inquiry, we confirm the date's availability and prepare a menu proposal.",
      },
      {
        q: "Can the menu be tailored to the guests?",
        a: "Yes. We build the menu around the type of event and your guests' preferences — including, among other things, vegetarian dishes and any allergy information provided in your inquiry.",
      },
    ],
  },

  configurator: {
    heading: "Plan your reception",
    intro:
      "In a few steps, gather the most important details about your event. At the end we'll pass them to the contact form — we'll get back to you with a proposal.",

    progress: {
      stepLabel: "Step {step} of {total}",
      barAria: "Reception planner progress",
    },

    stepTitles: [
      "What type of reception are you planning?",
      "How many guests are you expecting?",
      "Where should it take place?",
      "Which date are you considering?",
      "Summary",
    ],

    dateHint: "The date is approximate — we'll confirm availability together.",

    summary: {
      eventType: "Type of reception",
      guests: "Number of guests",
      place: "Location",
      preferredDate: "Preferred date",
      dateTbd: "To be arranged",
      empty: "—",
      submit: "Send a reception inquiry",
    },

    nav: {
      back: "Back",
      next: "Next",
    },

    footnote:
      "After you send an inquiry, the restaurant will confirm the date's availability and prepare a menu proposal.",

    eventTypes: [
      { id: "komunia", label: "Communion", icon: "Sparkles", blurb: "An intimate communion reception with a menu for children and adults." },
      { id: "chrzest", label: "Christening", icon: "Baby", blurb: "A calm, family christening reception in an elegant room." },
      { id: "wesele-kameralne", label: "Intimate wedding", icon: "Heart", blurb: "A wedding among your closest — understated, with class." },
      { id: "rocznica", label: "Anniversary", icon: "Gift", blurb: "A jubilee, wedding anniversary or company anniversary — in a warm setting." },
      { id: "urodziny", label: "Birthday", icon: "Cake", blurb: "A birthday for family and friends, with a menu on request." },
      { id: "spotkanie-rodzinne", label: "Family gathering", icon: "Users", blurb: "A shared lunch or dinner for the whole family." },
      { id: "spotkanie-firmowe", label: "Company gathering", icon: "Briefcase", blurb: "Team meetings, coffee breaks, business lunches." },
      { id: "catering", label: "Catering", icon: "Truck", blurb: "Corporate and private catering — on site or delivered." },
      { id: "obiad-grupa", label: "Group lunch", icon: "UtensilsCrossed", blurb: "Lunches for groups, including school groups." },
    ],

    guestRanges: ["10–20", "21–35", "36–50", "50+", "catering — larger number of people"],

    places: ["On site", "Catering with delivery", "To be arranged"],
  },

  forms: {
    lead: {
      ariaLabel: "Event inquiry form",
      honeypotLabel: "Do not fill in this field",
      requiredMark: "*",
      optionalSuffix: "(optional)",
      selectPlaceholder: "Choose…",
      requiredHint: "are required.",
      requiredHintPrefix: "Fields marked",

      fields: {
        imieNazwisko: {
          label: "Full name",
        },
        telefon: {
          label: "Phone",
        },
        email: {
          label: "E-mail",
        },
        typWydarzenia: {
          label: "Type of event",
        },
        data: {
          label: "Preferred date",
        },
        liczbaGosci: {
          label: "Number of guests",
        },
        miejsce: {
          label: "Location",
        },
        budzet: {
          label: "Approximate budget",
          placeholder: "e.g. up to PLN 5,000 / per person",
        },
        preferencjeMenu: {
          label: "Menu preferences",
          placeholder: "e.g. children's menu, vegetarian dishes",
        },
        alergie: {
          label: "Allergies / dietary requirements",
          placeholder: "e.g. gluten-free, nut-free",
        },
        wiadomosc: {
          label: "Additional information",
          placeholder: "Tell us about your event — what do you need?",
        },
      },

      eventTypeOptions: [
        { value: "komunia", label: "Communion" },
        { value: "chrzest", label: "Christening" },
        { value: "wesele-kameralne", label: "Intimate wedding" },
        { value: "rocznica", label: "Anniversary" },
        { value: "urodziny", label: "Birthday" },
        { value: "spotkanie-rodzinne", label: "Family gathering" },
        { value: "spotkanie-firmowe", label: "Company gathering" },
        { value: "catering", label: "Catering" },
        { value: "obiad-grupa", label: "Group lunch" },
        { value: "inne", label: "Other" },
      ],

      guestRangeOptions: [
        { value: "10–20", label: "10–20" },
        { value: "21–35", label: "21–35" },
        { value: "36–50", label: "36–50" },
        { value: "50+", label: "50+" },
        {
          value: "catering — większa liczba osób",
          label: "catering — larger number of people",
        },
      ],

      placeOptions: [
        { value: "W lokalu", label: "On site" },
        { value: "Catering z dostawą", label: "Catering with delivery" },
        { value: "Do ustalenia", label: "To be arranged" },
      ],

      consents: {
        heading: "",
        kontakt: {
          text: "I consent to being contacted by phone or e-mail to discuss my inquiry.",
        },
        rodo: {
          before: "I have read the",
          linkText: "privacy policy",
          after: "and I accept the processing of my data for the purpose of handling this inquiry.",
        },
      },

      submit: {
        idle: "Send inquiry",
        loading: "Sending…",
      },

      validation: {
        imieNazwiskoRequired: "Please enter your full name.",
        imieNazwiskoMin: "Please enter your full name (min. 2 characters).",
        telefonRequired: "Please enter a phone number.",
        telefonMin: "Please enter a phone number (min. 9 digits).",
        telefonInvalid: "Please enter a valid Polish phone number.",
        emailRequired: "Please enter an e-mail address.",
        emailInvalid: "Please enter a valid e-mail address.",
        typWydarzeniaRequired: "Please choose a type of event.",
        liczbaGosciRequired: "Please choose an approximate number of guests.",
        miejsceRequired: "Please choose the event location.",
        zgodaKontaktRequired: "Consent to be contacted is required.",
        zgodaRodoRequired: "Consent to data processing is required.",
      },

      success: {
        heading: "Thank you for your inquiry!",
        bodyBefore:
          "We'll get back to you as soon as possible to discuss the details of your event. If your matter is urgent, please call:",
        again: "Send another inquiry",
      },

      errors: {
        noEndpoint:
          "The form isn't connected to receive submissions yet. Please contact us by phone or e-mail. (Configuration: NEXT_PUBLIC_WEB3FORMS_KEY or NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
        http: "We couldn't send your submission. Please try again or give us a call.",
        network: "A connection error occurred. Check your internet and try again.",
      },

      mail: {
        subjectPrefix: "Inquiry from the KŁOSY website —",
        fromNamePrefix: "Restauracja KŁOSY — form",
      },
    },
  },

  kontakt: {
    breadcrumb: {
      home: "Home",
      current: "Contact",
    },

    hero: {
      eyebrow: "Restauracja KŁOSY in Warsaw",
      heading: "Contact",
      lead:
        "Want to ask about a reception date, order catering or arrange a group lunch? Call us, send an e-mail or fill in the form — we reply clearly and with no obligation. We're located at Al. Jerozolimskie 123a in Warsaw's Ochota district, a few minutes from the city center.",
      callPrefix: "Call:",
      toForm: "Go to the form",
    },

    nap: {
      heading: "Contact details",
      intro:
        "The fastest way to reach us is by phone or e-mail. If you prefer, describe your event in the form below — we'll call you back or reply.",
      addressLabel: "Address",
      buildingSuffix: "— to be confirmed",
      districtLabel: "District:",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      hoursLabel: "Hours",
      hoursPlaceholder: "[DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]",
      socialHeading: "You'll also find us here",
      facebook: "Facebook",
      instagram: "Instagram",
      instagramPlaceholder: "[DO UZUPEŁNIENIA: Instagram]",
      pyszne: "Pyszne.pl",
      pysznePlaceholder: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
      glovo: "Glovo",
      glovoPlaceholder: "[DO UZUPEŁNIENIA: link Glovo]",
    },

    map: {
      heading: "Directions",
      intro:
        "We're at a well-connected spot in Warsaw, on Al. Jerozolimskie. We confirm the exact entrance and floor in the Atlas Tower building when you get in touch.",
      imgAlt:
        "Location of Restauracja KŁOSY at Al. Jerozolimskie 123a in Warsaw",
      placeholder:
        "[DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]",
      directions: "Get directions in Google Maps",
      directionsPlaceholder: "[DO UZUPEŁNIENIA: link Google Maps]",
    },

    form: {
      heading: "Ask about a date, catering or a reception",
      intro:
        "Describe what you're planning — the type of event, an approximate date and the number of guests. The more details you provide, the more accurate the menu and date proposal we can prepare. Optional fields (budget, menu preferences, allergies) help us, but aren't required.",
    },

    faq: {
      heading: "Contact and inquiries — frequently asked questions",
    },

    cta: {
      heading: "Not sure where to start?",
      body:
        "Give us a call — tell us in a few sentences what you're planning, and we'll suggest what works and what information we'll need to prepare a proposal.",
      callPrefix: "Call:",
      write: "Write an e-mail",
      seeAlso: "See also:",
      links: {
        menuDnia: "Daily menu",
        komunie: "Communions & christenings",
        wesela: "Weddings & anniversaries",
        imprezy: "Special occasions",
        catering: "Catering",
      },
    },
  },

  menuDnia: {
    hero: {
      alt: "Home-style lunch at Restauracja KŁOSY: pork knuckle, soup and dessert",
      eyebrow: "Daily menu • Warsaw, Ochota",
      title: "Daily menu and Polish cuisine in the heart of Warsaw",
      subtitle:
        "Daily home-style lunches — soups, main courses and vegetarian options — at Al. Jerozolimskie 123a in Warsaw (Atlas Tower, Ochota). For an everyday lunch at work, lunch with friends, and larger orders for groups.",
      ctaLabel: "Ask about a date",
    },

    breadcrumbs: {
      ariaLabel: "Breadcrumbs",
      home: "Home",
      current: "Daily menu",
    },

    facts: [
      { value: "Daily menu", label: "fresh every day" },
      { value: "Polish cuisine", label: "home-style lunches" },
      { value: "Group lunches", label: "on site or delivered" },
      { value: "Delivery", label: "within Warsaw" },
    ],

    about: {
      alt: "Roast duck — a main course from the home-style kitchen of Restauracja KŁOSY",
      eyebrow: "What our daily menu is about",
      title: "Home-style lunches, no gimmicks",
      p1: "The daily menu is a lunch set prepared fresh as we go — home-style cooking with no gimmicks: a warming soup, a hearty main course and a vegetarian option. We focus on simple, good food, the kind you know from home, served calmly and without rushing. The exact contents of the set change every day.",
      p2Before:
        "We confirm the current menu card and today's daily menu by phone or on site — we give prices and specific dishes when you get in touch, so the information always matches what we're actually cooking that day. The restaurant operates under ",
      p2After: ", and its profits support its statutory goals.",
      points: [
        "Lunch during a break at work (near Atlas Tower)",
        "Lunch with friends or family",
        "A daily warm meal on site",
        "Larger lunch orders for groups",
      ],
    },

    groups: {
      alt: "Lunch: chicken with pasta — an option for groups at Restauracja KŁOSY",
      eyebrow: "Group lunches",
      title: "Lunch for your team, class and family",
      p1: "We prepare lunches for groups — including school groups, company teams and family gatherings. We match the menu to the number of people and their preferences, including vegetarian dishes and any allergy information provided in advance in your inquiry.",
      p2: "We arrange the number of portions, the serving format (on site or delivered) and the date individually. Just let us know how many guests there are and when you need the lunch — we'll send back a menu proposal and confirm availability.",
      points: [
        "• Menu tailored to the group (including vegetarian options)",
        "• Lunches for school groups and company teams",
        "• Served on site or delivered within Warsaw",
      ],
      ctaLabel: "Ask about group lunches",
    },

    delivery: {
      alt: "Tagliatelle with shrimp — a dish from the Restauracja KŁOSY menu",
      eyebrow: "Lunch with delivery",
      title: "Daily-menu lunch with delivery in Warsaw",
      lead: "You can order a daily-menu lunch with delivery — through popular delivery platforms. We confirm dish availability, hours and the delivery area directly; below are links to order online.",
      pyszneLabel: "Order on Pyszne.pl",
      pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
      glovoLabel: "Order on Glovo",
      glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
      cateringBefore: "Prefer a larger, bespoke order? Check out our ",
      cateringLink: "catering offer",
      cateringAfter: " — we prepare corporate and private catering based on your inquiry.",
    },

    menu: {
      title: "What you'll find on the menu",
      intro:
        "Below are the categories on our menu. We add specific items and prices based on the restaurant's current menu — until then we give them by phone or on site.",
      pdfLabel: "Download the menu (PDF)",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
    },

    realizacje: {
      heading: "See our work",
      images: [
        { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Dumplings with bilberries from the home-style kitchen of Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Lunch: roast with salads at Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "A tray of oat desserts at Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Oatmeal with strawberries at Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Chocolate dessert with cherries at Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Two cups of oatmeal at Restauracja KŁOSY" },
      ],
    },

    faq: {
      heading: "Frequently asked questions about lunches",
    },

    next: {
      heading: "See also",
      cards: [
        { href: "/catering", label: "Catering", desc: "Corporate and private, on site or delivered." },
        { href: "/imprezy-okolicznosciowe", label: "Special occasions", desc: "Intimate receptions and gatherings." },
        { href: "/kontakt", label: "Contact", desc: "Ask about dates, the menu and group lunches." },
      ],
    },

    cta: {
      title: "Order lunches or ask about the daily menu",
      text: "Tell us how many guests there are and for when — we'll prepare a proposal and confirm the date.",
      button: "Send inquiry",
    },

    schema: {
      serviceName: "Daily menu and home-style lunches — Warsaw",
      serviceDescription:
        "Daily home-style lunches (daily menu), Polish cuisine, group lunches and delivery in Warsaw. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
    },
  },

  imprezy: {
    hero: {
      eyebrow: "Restauracja KŁOSY · Warsaw, Ochota",
      title: "Special occasions in Warsaw",
      subtitle:
        "Intimate birthdays, anniversaries and family and company gatherings at Al. Jerozolimskie 123a — with home-style cooking and calm service, without lavish parties for hundreds of guests.",
      ctaLabel: "Ask about a date",
    },

    facts: [
      { value: "Family receptions", label: "Birthdays, anniversaries, gatherings" },
      { value: "Company gatherings", label: "Lunches and coffee breaks" },
      { value: "Menu on request", label: "Tailored to your guests" },
      { value: "Central Warsaw", label: "Ochota, Al. Jerozolimskie 123a" },
    ],

    occasionsSection: {
      eyebrow: "The occasions we organize",
      title: "Occasions we prepare at KŁOSY",
      intro:
        "We arrange every reception individually — from the guest count and date to the menu. Most often we organize:",
      occasions: [
        {
          title: "Birthdays",
          desc:
            "Birthdays for children and adults among family and friends. We build the menu around the guests' age and the occasion — from a lunch with cake to a dinner for loved ones. We arrange the number of people and the schedule in your inquiry.",
        },
        {
          title: "Anniversaries",
          desc:
            "Wedding anniversaries, jubilees and company anniversaries in a calm, warm setting. We focus on intimacy and good food rather than a lavish party — with a menu and service matched to the character of the gathering.",
        },
        {
          title: "Family gatherings",
          desc:
            "A shared lunch or dinner for the whole family — with or without an occasion. We'll set a table for a dozen or so people, include vegetarian dishes and any allergy information provided in advance.",
        },
        {
          title: "Company gatherings",
          desc:
            "Team meetings, business lunches and coffee breaks. We host them on site or as catering delivered within Warsaw. We arrange the format and time around the company's daily schedule.",
        },
      ],
    },

    ambianceSection: {
      eyebrow: "Intimate and family-friendly",
      title: "A calm, family atmosphere instead of a huge banquet hall",
      paragraphs: [
        "Our room is in the Atlas Tower building at Al. Jerozolimskie 123a. We confirm the exact floor and directions when you get in touch. We've gone for a calm, family atmosphere — instead of a huge banquet hall, we offer a space where guests can hear each other and feel at home.",
        "We build the menu around the type of event and the guests' preferences — including vegetarian dishes and any allergy information provided in your inquiry.",
        "We specialize in intimate receptions. We confirm the exact room capacity and the maximum number of guests when you get in touch, as they depend on the table layout and the character of the event.",
      ],
      capacityLabel: "Seats in the room:",
      maxGuestsLabel: "Maximum number of guests at a reception:",
      largerGroupsLabel: "Larger groups:",
      largerGroupsTextBefore: "for a larger number of people we suggest catering with delivery —",
      largerGroupsLink: "see our catering offer",
    },

    processSection: {
      eyebrow: "What planning looks like",
      title: "From inquiry to the day of the event",
      intro:
        "Planning a reception at KŁOSY takes just a few simple steps — we guide you through them from the first contact to the day of the event:",
      steps: [
        ["1", "Contact", "You send an inquiry through the form or give us a call."],
        ["2", "Date", "We confirm the availability of your chosen date."],
        ["3", "Menu", "We match the menu to the type of event and your guests."],
        ["4", "Preparation", "We get the room or the catering ready."],
        ["5", "Event", "We take care of your reception on the day of the event."],
      ],
      note:
        "After you send an inquiry, the restaurant will confirm the date's availability and prepare a menu proposal.",
      foundationTextBefore: "The restaurant operates under",
      foundationTextAfter:
        ", and its profits support the Foundation's statutory goals. By choosing KŁOSY for your reception, you also support this work.",
    },

    photoStripHeading: "See our work",

    related: {
      heading: "Check out also",
      links: [
        {
          href: "/komunie-chrzciny",
          title: "Communions & christenings",
          desc: "Family communion and christening receptions with a menu for children and adults.",
        },
        {
          href: "/wesela-rocznice",
          title: "Weddings & anniversaries",
          desc: "Intimate weddings and jubilees among your closest.",
        },
        {
          href: "/catering",
          title: "Catering",
          desc: "Corporate and private catering — on site or delivered within Warsaw.",
        },
      ],
    },

    faqHeading: "Frequently asked questions",

    finalCta: {
      title: "Plan your event at KŁOSY",
      text: "Tell us what you're planning — we'll reply with a proposed date and menu.",
      button: "Send inquiry",
    },

    jsonLd: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Special occasions",
      serviceName: "Special-occasion event planning — Warsaw",
      serviceDescription:
        "Intimate special occasions at Restauracja KŁOSY at Al. Jerozolimskie 123a in Warsaw: birthdays, anniversaries, family and company gatherings, with a menu tailored to your guests and on-site service or catering with delivery.",
    },
  },

  komunie: {
    hero: {
      eyebrow: "Family receptions in Warsaw",
      title: "Communions & christenings at Restauracja KŁOSY",
      subtitle:
        "An intimate room in Ochota, a few minutes from the center of Warsaw. Receptions after a First Communion and after a baptism — with a menu for children and adults and on-site service.",
      alt: "A set table prepared for an intimate communion reception at Restauracja KŁOSY",
      ctaLabel: "Ask about a date",
    },

    facts: [
      { value: "Intimate", label: "Intimate receptions" },
      { value: "For everyone", label: "Menu for children and adults" },
      { value: "On site", label: "On-site service" },
      { value: "Ochota", label: "Warsaw, Ochota" },
    ],

    charakter: {
      eyebrow: "The character of the place",
      title: "An intimate place for a family celebration",
      alt: "A communion table with balloon decorations at Restauracja KŁOSY",
      p1: "A communion and a christening are family celebrations, not big events — and that's exactly how we approach them. KŁOSY is a calm, intimate restaurant where it's easy to talk at the table, and children have room to be near the adults. We focus on home-style Polish cuisine and a simple, warm setting instead of a noisy banquet hall.",
      p2Before: "We're located at Al. Jerozolimskie 123a in Warsaw's Ochota district, in the Atlas Tower building. It's a well-connected location close to the center — convenient for guests coming from different parts of Warsaw and from out of town. We confirm the exact directions and floor when you get in touch (",
      p2After: ").",
      p2Fallback: "to be confirmed",
      p3: "Because we take on a limited number of receptions, we give each family our full attention: we build the menu around the specific celebration, and on the day of the reception we take care of the service so the hosts can be guests in their own home. The restaurant is run by Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”, so every reception also supports its statutory goals.",
    },

    uroczystosci: {
      eyebrow: "Communions & christenings",
      title: "Two different celebrations, one place",
      alt: "Waiter service at the table during a reception at Restauracja KŁOSY",
      p1: "First Holy Communion is a day for the child and the whole family. We'll prepare a communion lunch with a menu that appeals to children and adults alike, find room for the cake, and after the Mass you simply come straight to us. The communion season (usually May) can be busy, so it's best to ask about dates well in advance.",
      p2: "We host christenings all year round and usually among the closest — godparents, grandparents, family. It's often a quieter, even more intimate gathering. We'll provide a calm, comfortable space where the little one and the parents feel at ease, and a menu for a relaxed, family lunch.",
      bullets: [
        "A lunch menu for children and adults, room for the cake",
        "An intimate table layout for your closest",
        "Service so parents can be with their child",
      ],
    },

    menu: {
      eyebrow: "Menu",
      title: "A menu for children and for adults",
      alt: "An intimate restaurant room with flowers at Restauracja KŁOSY",
      p1: "At a communion or christening reception, grandparents and small children sit at the same table — which is why we build the menu along two tracks. For adults we suggest home-style Polish cuisine in a lunch version; for children we choose simpler, sure-fire dishes that they'll actually eat. We include vegetarian dishes and any allergies and intolerances reported in advance in your inquiry.",
      p2: "We prepare the specific menu items and the quote individually, once we know the number of guests and the character of the celebration — we don't publish a fixed price list or ready-made sets here, because we plan each reception separately. You can also download the current menu card below.",
      seeMenu: "See the daily menu",
      pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Download the menu (PDF)",
      pricingNote:
        "Prices and availability: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — arranged individually after your inquiry.",
    },

    realizacje: {
      heading: "See our work",
      images: [
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
          alt: "A communion table with a floral garland at Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
          alt: "A communion table with balloon decorations at Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
          alt: "Waiter service during a reception at Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "A sweet table with cakes for a family reception",
        },
        {
          src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
          alt: "Roast duck — a dish from home-style Polish cuisine",
        },
      ],
    },

    checklist: {
      title: "What's worth preparing before your inquiry",
      intro:
        "The more details you provide at the start, the faster we can prepare an accurate menu and date proposal. You don't need to have everything finalized — approximate information is enough.",
      items: [
        "An approximate date and the time the Mass / church celebration will end.",
        "The number of adults and the number of children (separately) — this affects the menu and room layout.",
        "Information about allergies, intolerances and the need for vegetarian dishes.",
        "Whether you'll provide your own cake or the restaurant should handle it.",
        "Any decorations or commemorative items you'd like to bring.",
        "Whether there will be small children among the guests who need a comfortable, calm space.",
      ],
    },

    lokalizacja: {
      title: "Directions and contact",
      intro:
        "Restauracja KŁOSY is located in central Warsaw, in Ochota — a well-connected spot for guests from across the city and the surrounding area.",
      addressSuffix: "to be confirmed",
    },

    faq: {
      title: "Communions & christenings — frequently asked questions",
    },

    cta: {
      title: "Let's plan a communion or christening together",
      text: "Tell us when you're planning the celebration and how many guests you expect — we'll get back to you with a proposed date and menu. No obligation.",
      sendLabel: "Send inquiry",
      callLabel: "Call:",
      seeAlso: "See also:",
      links: {
        wesela: "Weddings & anniversaries",
        imprezy: "Special occasions",
        catering: "Catering",
        menuDnia: "Daily menu",
      },
    },

    schema: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Communions & christenings",
      serviceName: "Communion and christening receptions",
      serviceDescription:
        "Planning of intimate communion and christening receptions at Restauracja KŁOSY in Warsaw — a menu for children and adults, room and service on site.",
    },
  },

  wesela: {
    hero: {
      alt: "A rustic room prepared for an intimate wedding reception at Restauracja KŁOSY",
      eyebrow: "Weddings & anniversaries",
      title: "Intimate weddings and anniversaries in Warsaw",
      subtitle:
        "A close circle, home-style cooking and calm service — without the buzz of halls for hundreds of guests. Wedding, anniversary and jubilee receptions at Al. Jerozolimskie 123a in Ochota.",
      ctaLabel: "Ask about a date",
    },

    facts: {
      weselaValue: "Intimate weddings",
      weselaLabel: "For a close circle, one reception per date",
      roczniceValue: "Anniversaries and jubilees",
      roczniceLabel: "Milestone anniversaries, jubilees and reunions",
      menuValue: "Bespoke menu",
      menuLabel: "Built around the character of the reception and the guests' preferences",
      pakietyValueAfter: " packages",
      pakietyLabel: "We confirm package proposals in response to your inquiry",
    },

    intro: {
      before:
        "Restauracja KŁOSY at Al. Jerozolimskie 123a (Ochota, the Atlas Tower building) organizes intimate weddings and anniversary and jubilee receptions. We focus on a close circle, home-style cooking and calm service — without the buzz of halls for hundreds of guests. The restaurant operates under ",
      after: ", and its profits support the Foundation's statutory goals.",
    },

    wesele: {
      alt: "A set banquet table prepared for an intimate wedding at Restauracja KŁOSY",
      eyebrow: "Intimate wedding",
      title: "An intimate wedding — for a close circle",
      p1: "Not every wedding has to be a grand affair. More and more couples are choosing the intimate format: the closest family and friends, one room, a calm flow to the day and a menu that really tastes good. This format suits KŁOSY — we cook on site, know every table by name and don't spread ourselves across several events at once.",
      p2: "An intimate wedding works well for a civil ceremony nearby, a reception after the ceremony among a small circle, or a relaxed “second day” in a family atmosphere. Instead of a rigid script, we work out the flow with you: the welcome, lunch, the toast, dessert and as much space as you need for conversation.",
      p3Before:
        "We arrange the number of guests, the room layout and the reception hours individually after your inquiry. We confirm the maximum number of seats when you get in touch — ",
      p3After: ".",
      points: [
        { t: "Intimacy", d: "One reception per date, the full attention of our staff for your guests." },
        { t: "Home-style cooking", d: "Dishes cooked on site, matched to the wedding menu and the guests' preferences." },
        { t: "A close circle", d: "A format for family and friends, without a lavish hall for hundreds of guests." },
        { t: "A calm flow", d: "We set the schedule for the day together with you — without rush or chaos." },
      ],
    },

    rocznice: {
      alt: "An intimate room with floral decorations for an anniversary reception at Restauracja KŁOSY",
      eyebrow: "Anniversaries and jubilees",
      title: "Anniversaries and jubilees",
      p1: "A milestone wedding anniversary, a couple's jubilee, a family senior's birthday or a reunion after years apart — anniversaries are all about the people at the table. That's why we organize them so no one has to run between counters: you sit down, and we take care of the rest.",
      listHeading: "The anniversaries we organize",
      items: [
        "wedding anniversaries and couples' jubilees",
        "milestone birthdays and name days",
        "family reunions after years apart",
        "jubilees and company gatherings in an intimate circle",
      ],
      p2Before:
        "We quote and plan every reception individually after your inquiry. Ready-made wedding packages and sample anniversary menus: ",
      p2After: " — we'll prepare them in response to your inquiry, along with a proposed menu and date.",
    },

    menu: {
      alt: "A sweet table with cakes and desserts prepared for a reception at Restauracja KŁOSY",
      eyebrow: "Menu and personalization",
      title: "A bespoke menu for a wedding and anniversary",
      p1: "We don't serve a single, fixed set. We build the menu around the character of the reception, the time of day and the guests' preferences. Just tell us in your inquiry how many people you're planning for and what you expect — we'll work out the rest together.",
      cards: [
        { t: "Tailored to the guests", d: "We include vegetarian dishes and any allergy information provided in your inquiry." },
        { t: "Reception format", d: "A seated lunch, plated dishes or a buffet format — we decide together with you." },
        { t: "Toast and dessert", dBefore: "Cake, dessert and the sweet-table setting handled by the restaurant or in your chosen format. Details: ", dAfter: "." },
        { t: "Drinks", dBefore: "We arrange the range of drinks and any service individually. Details and prices: ", dAfter: "." },
      ],
      noteBefore: "Current menu and sample proposals: ",
      noteAfter: ". We confirm package and menu prices in response to your inquiry.",
    },

    realizacje: {
      heading: "See our work",
      images: [
        { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "A set banquet table for a reception at Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "A rustic room prepared for an intimate reception" },
        { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "A room set for a festive family reception" },
        { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "A sweet table with cakes and desserts" },
        { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle with shrimp — a dish from the Restauracja KŁOSY menu" },
      ],
    },

    kroki: {
      heading: "How we plan a reception step by step",
      steps: [
        ["1", "Inquiry", "You send the form or give us a call — providing the date and the number of guests."],
        ["2", "Date", "We confirm the availability of your chosen date."],
        ["3", "Menu", "We match the menu to the wedding or anniversary and the guests' preferences."],
        ["4", "Arrangements", "We firm up the room, the schedule for the day and the service details."],
        ["5", "Event", "We take care of your reception on the day of the celebration."],
      ],
      note: "After you send an inquiry, the restaurant will confirm the date's availability and prepare a menu and quote proposal.",
    },

    lokalizacja: {
      heading: "Where it takes place",
      p1Before: "Restauracja KŁOSY is located at ",
      p1AfterBuilding: " ",
      p1Confirm: "(to be confirmed)",
      p1End: ". We confirm the exact directions, parking and floor accessibility when you get in touch.",
      districtBefore: "(the ",
      districtAfter: " district), in the ",
    },

    faq: {
      heading: "Frequently asked questions about weddings and anniversaries",
    },

    next: {
      heading: "See also",
      cards: [
        { href: "/komunie-chrzciny", t: "Communions & christenings", d: "Intimate family receptions." },
        { href: "/imprezy-okolicznosciowe", t: "Special occasions", d: "Birthdays, gatherings, jubilees." },
        { href: "/catering", t: "Catering", d: "Corporate and private, also with delivery." },
      ],
    },

    cta: {
      title: "Planning an intimate wedding or anniversary?",
      text: "Tell us how many people and which date you have in mind — we'll reply with a proposed menu and quote.",
      button: "Send inquiry",
    },

    schema: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Weddings & anniversaries",
      serviceName: "Intimate weddings and anniversary receptions",
      serviceDescription:
        "Planning of intimate weddings and anniversary and jubilee receptions at Restauracja KŁOSY in Warsaw (Al. Jerozolimskie 123a, Ochota). A bespoke menu and service for a close circle.",
    },
  },

  catering: {
    hero: {
      alt: "Restauracja KŁOSY catering buffet — caprese appetizers prepared to be served at a company meeting",
      eyebrow: "Catering in Warsaw",
      title: "Corporate and private catering — Restauracja KŁOSY",
      subtitle:
        "Home-style Polish cuisine from our restaurant in Ochota — in your office, at a training session or at a family gathering. On site or delivered within Warsaw. We settle corporate orders with a VAT invoice.",
      ctaLabel: "Ask about a date",
    },

    facts: [
      { value: "Catering with delivery", label: "Within Warsaw" },
      { value: "Corporate and private", label: "Office, training, family gathering" },
      { value: "Coffee breaks", label: "Coffee, tea and refreshments" },
      { value: "VAT invoice", label: "Convenient settlement for companies" },
    ],

    intro: {
      alt: "Desserts and catering appetizers from Restauracja KŁOSY arranged on a tray",
      eyebrow: "Catering from a restaurant",
      title: "Catering from a restaurant, not from a catering factory",
      paragraphs: [
        "KŁOSY is a working restaurant at Al. Jerozolimskie 123a in Warsaw, in the Ochota district, in the Atlas Tower building. Catering is an extension of our everyday kitchen: the dishes we serve guests on site we also prepare for takeaway and delivery. As a result, your company or family gathering gets the same home-style Polish cuisine, not anonymous portions off a production line.",
        "We handle two main directions. The first is corporate catering (B2B): team lunches, coffee breaks, support for training sessions and conferences, and recurring deliveries to offices — all settled with a VAT invoice. The second is private catering: family gatherings, birthdays, anniversaries and intimate celebrations, for which we deliver the food or prepare it for pickup.",
        "Whatever the scale of the order, we build the menu individually — around the number of people, the time of day and the character of the gathering. We include vegetarian dishes and any allergies and intolerances reported in your inquiry. We don't publish a fixed price list here, because we quote each order separately once we know the details.",
      ],
    },

    typesSection: {
      title: "What we'll prepare as part of catering",
      intro:
        "From a single coffee break to regular team lunches — below are the most common forms of catering we deliver in Warsaw.",
      types: [
        {
          title: "Corporate catering",
          body: "We handle office meetings and company events in Ochota and the surrounding area — from working breakfasts, through team lunches, to refreshments for a client meeting. Settlement by VAT invoice, with a single point of contact on our side.",
          points: [
            "Lunches for the team and client meetings",
            "Catering for conferences and company events",
            "Ongoing cooperation or a one-off order",
          ],
        },
        {
          title: "Private catering",
          body: "Family gatherings, birthdays, anniversaries and intimate celebrations — we'll prepare home-style Polish cuisine for your reception. You can pick the catering up from us or we'll deliver it to a specified address in Warsaw.",
          points: [
            "Family gatherings and birthdays",
            "Refreshments for intimate celebrations",
            "Pickup on site or delivery to an address",
          ],
        },
        {
          title: "Catering with delivery",
          body: "You don't have to come for the food — we deliver catering within Warsaw. We arrange the delivery area, time and handover method when you order, so the dishes arrive fresh and on time.",
          points: [
            "Delivery within Warsaw",
            "An agreed handover time",
            "Dishes packed for transport",
          ],
        },
        {
          title: "Coffee breaks",
          body: "A coffee break for a training session, workshop or board meeting — coffee, tea, water and light savory and sweet refreshments. We adapt the scope to the length of the meeting and the number of participants.",
          points: [
            "Coffee, tea, water",
            "Light savory and sweet refreshments",
            "A continuous coffee break or at set times",
          ],
        },
        {
          title: "Business lunches",
          body: "Lunch for the team without leaving the office — lunch sets based on our daily menu, in a format that's convenient to serve. Works well for regular staff meals and for all-day meetings.",
          points: [
            "Lunch sets from the daily menu",
            "Vegetarian options",
            "A format convenient to serve in the office",
          ],
        },
        {
          title: "Catering for training sessions and groups",
          body: "We handle training sessions, workshops and group meetings — combining coffee breaks with lunch for the participants. We also prepare lunches for groups, including school groups, in an agreed number of portions.",
          points: [
            "Full support for training sessions (break + lunch)",
            "Lunches for groups, including school groups",
            "A fixed number of portions agreed in advance",
          ],
        },
      ],
    },

    b2bSection: {
      alt: "Croissants and small baked goods for a coffee break prepared by Restauracja KŁOSY",
      eyebrow: "For companies",
      title: "Corporate catering with a VAT invoice",
      lead:
        "For companies, catering should above all be convenient and predictable. That's why we run business orders with a single point of contact on our side, settle them with a VAT invoice and handle both one-off events and recurring deliveries to the office.",
      points: [
        {
          title: "VAT invoice",
          body: "We settle every corporate order with a VAT invoice — convenient for accounting and for ongoing cooperation.",
        },
        {
          title: "A single contact",
          body: "One person guides you on our side: from agreeing the menu, through the date, to the handover and settlement of the order.",
        },
        {
          title: "Recurring orders",
          body: "We handle both one-off events and regular, recurring deliveries — e.g. regular lunches for the team.",
        },
        {
          title: "Supporting the Foundation",
          body: "By ordering with us, you also support the statutory goals of Fundacja „Człowiek w Potrzebie” — an argument that matters to many companies.",
        },
      ],
      note:
        "We collect invoice details (tax ID, company name, address) when confirming the order. Minimum order values and the delivery area: [DO UZUPEŁNIENIA: minimalne zamówienie cateringu firmowego / strefa dostawy] — arranged with your inquiry.",
    },

    groupsSection: {
      alt: "A sweet table with cakes prepared by Restauracja KŁOSY",
      eyebrow: "Organized groups",
      title: "Lunches for groups, including school groups",
      paragraphs: [
        "We prepare lunches for organized groups — trips, school groups, training and workshop participants. We agree the number of portions in advance, so every participant gets a warm, hearty meal without queues or waiting.",
        "For school groups we choose simpler, sure-fire dishes and, if needed, prepare vegetarian versions and account for reported allergies. We can deliver group catering on site at the restaurant or bring it to an agreed location within Warsaw.",
      ],
      note:
        "Prices of group sets: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] — arranged individually once the number of people is provided.",
    },

    menuSection: {
      title: "Catering menu and quote",
      intro:
        "We base our catering menu on our everyday menu card and the daily menu — in a version adapted to serving outside the restaurant. We prepare specific sets and a quote individually, once we know the number of people, the character of the gathering and the handover format (pickup or delivery). You can view and download the current menu card below:",
      menuDniaLink: "See the daily menu",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Download the menu (PDF)",
      note:
        "Catering prices and packages: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — arranged individually after your inquiry.",
    },

    processSection: {
      title: "How to order catering — step by step",
      intro: "The process is simple: four steps from the first inquiry to the handover of your order.",
      steps: [
        {
          title: "1. Inquiry",
          body: "You send an inquiry through the form or give us a call. You provide the catering type (corporate / private), the date, the number of people and whether it's pickup at our place or delivery.",
        },
        {
          title: "2. Menu proposal and quote",
          body: "We put together a menu proposal for your needs and prepare a quote. We include vegetarian dishes and any allergies and intolerances reported in your inquiry.",
        },
        {
          title: "3. Confirmation",
          body: "We confirm the details: the handover or delivery time, the number of portions and the settlement format. For companies we issue a VAT invoice by default.",
        },
        {
          title: "4. Delivery",
          body: "At the agreed time we prepare the order for pickup at our place or deliver it to the specified address in Warsaw.",
        },
      ],
    },

    checklistSection: {
      title: "What's worth providing in a catering inquiry",
      intro:
        "The more details you provide at the start, the faster we can prepare an accurate menu proposal and quote. Approximate information is enough.",
      items: [
        "The catering type: corporate or private — and whether a VAT invoice is needed.",
        "The date and time of handover or delivery, and any coffee-break times.",
        "The number of people and the format: pickup on site or delivery to an address.",
        "The character of the meeting: lunch, coffee break, training session, group lunch.",
        "Information about allergies, intolerances and the need for vegetarian dishes.",
        "Whether the order is one-off or should be recurring (e.g. regular lunches).",
      ],
    },

    photoStrip: {
      heading: "See our work",
      images: [
        {
          src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
          alt: "A catering buffet with caprese appetizers prepared by Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-croissanty.webp",
          alt: "Croissants and small baked goods for a coffee break",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.webp",
          alt: "Catering desserts and appetizers arranged on a tray",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "A sweet table with cakes from Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp",
          alt: "Oat desserts served on a tray",
        },
      ],
    },

    locationSection: {
      title: "Where we deliver from, and contact",
      intro:
        "We prepare catering at our restaurant in Ochota and deliver within Warsaw. It's a well-connected spot, close to the center — convenient for deliveries to offices and for meetings in different parts of the city.",
      buildingSuffix: "to be confirmed",
      note:
        "The delivery area and cost: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] — we confirm them with your order.",
    },

    faqHeading: "Catering — frequently asked questions",

    finalCta: {
      title: "Let's order catering together",
      text:
        "Tell us for when and for how many people you need catering and whether it should be delivered — we'll get back to you with a menu proposal and quote. For companies we issue a VAT invoice by default.",
      sendButton: "Send inquiry",
      callPrefix: "Call:",
      relatedLabel: "See also:",
      related: [
        { href: "/menu-dnia", label: "Daily menu" },
        { href: "/imprezy-okolicznosciowe", label: "Special occasions" },
        { href: "/komunie-chrzciny", label: "Communions & christenings" },
        { href: "/wesela-rocznice", label: "Weddings & anniversaries" },
      ],
    },

    jsonLd: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Catering",
      serviceName: "Corporate and private catering in Warsaw",
      serviceDescription:
        "Catering at Restauracja KŁOSY in Warsaw — corporate and private, on site or delivered: business lunches, coffee breaks, catering for training sessions and lunches for school groups. Settlement by VAT invoice.",
    },
  },

  galeria: {
    page: {
      eyebrow: "Restauracja KŁOSY · Warsaw",
      title: "Gallery",
      intro:
        "Before you book a table, a group lunch or a family reception, see what our place at Al. Jerozolimskie 123a in central Warsaw looks like. Below you'll find photos of the room, set tables and sample dishes from Polish cuisine. We keep adding material — if you're looking for something specific, write or call and we'll send more.",
      ctaLabel: "Ask about a date or a quote",
    },

    breadcrumbs: {
      home: "Home",
      current: "Gallery",
    },

    section: {
      title: "Gallery",
      intro:
        "Take a look before you visit — the room, the tables and sample dishes. We keep adding photos.",
      filtersAriaLabel: "Gallery filters",
      all: "All",
      empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
      zoomLabel: "Zoom in on photo:",
      closeLabel: "Close gallery",
      prevLabel: "Previous photo",
      nextLabel: "Next photo",
    },

    categories: {
      Jedzenie: "Food",
      Sala: "Room",
      Komunie: "Communions",
      Catering: "Catering",
      Dekoracje: "Decorations",
      "Na wynos": "Takeaway",
    },

    alts: {
      "jedzenie-pierogi":
        "Dumplings with bilberries and cream at Restauracja KŁOSY in Warsaw, Polish cuisine",
      "jedzenie-kaczka":
        "Roast duck with red cabbage — Polish cuisine at Restauracja KŁOSY in Warsaw",
      "jedzenie-golonka":
        "Home-style lunch at KŁOSY Warsaw: roast pork knuckle, soup and dessert",
      "jedzenie-pieczen":
        "Home-style lunch — roast with egg, potatoes and salads at Restauracja KŁOSY in Warsaw",
      "jedzenie-kurczak":
        "Home-style lunches at Restauracja KŁOSY in Warsaw — chicken and pasta in sauce",
      "jedzenie-tagliatelle":
        "Tagliatelle with shrimp at Restauracja KŁOSY in Warsaw, a seasonal dish",
      "sala-bufet":
        "Dining room of Restauracja KŁOSY in Warsaw with a lunch buffet and white tables",
      "sala-nakryta":
        "The intimate room of Restauracja KŁOSY in Warsaw set for a family reception",
      "sala-kameralna":
        "The intimate room of Restauracja KŁOSY in Warsaw set for a family lunch",
      "sala-lampy":
        "Interior of Restauracja KŁOSY in Warsaw — a room with a buffet and atmospheric lighting",
      "komunie-balony":
        "A table set for a communion reception at Restauracja KŁOSY in Warsaw",
      "komunie-girlanda":
        "Table setting for a communion with appetizers at Restauracja KŁOSY in Warsaw",
      "komunie-obsluga":
        "Waiter service at the communion table at Restauracja KŁOSY in Warsaw",
      "catering-caprese":
        "KŁOSY catering buffet in Warsaw with caprese appetizers, tartines and desserts",
      "catering-croissanty":
        "KŁOSY catering table in Warsaw with mini croissants and appetizers",
      "catering-desery":
        "A sweet and appetizer catering table at Restauracja KŁOSY in Warsaw",
      "catering-ciasta":
        "A sweet catering table — cakes with strawberries at Restauracja KŁOSY in Warsaw",
      "dekoracje-bankiet":
        "A banquet table set for a family reception at Restauracja KŁOSY in Warsaw",
      "dekoracje-rustykalna":
        "A rustic room for communions and receptions at Restauracja KŁOSY in Warsaw",
      "wynos-desery-taca":
        "Oat desserts with fruit for takeaway at Restauracja KŁOSY in Warsaw",
      "wynos-owsianka":
        "Oatmeal with strawberries in a cup for takeaway, Restauracja KŁOSY Warsaw",
      "wynos-czekolada":
        "A layered dessert with chocolate and cherries for takeaway, KŁOSY Warsaw",
      "wynos-dwa-kubki":
        "Oat dessert cups for takeaway in the cozy interior of Restauracja KŁOSY in Warsaw",
    },
  },

  polityka: {
    breadcrumb: {
      home: "Home",
      current: "Privacy policy",
    },

    formEmail: "marketing@restauracjadifferent.pl",

    heading: "Privacy policy",
    intro:
      "We care about your privacy. Below we explain what data we collect through the Restauracja KŁOSY website, for what purpose and on what basis, and what rights you have.",

    administrator: {
      heading: "1. Data controller",
      leadBefore:
        "The controller of personal data is the entity operating Restauracja KŁOSY, with its registered office at ",
      todo:
        "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
      foundationBefore: "The restaurant operates under ",
      foundationKrs: "KRS",
    },

    sections: [
      {
        heading: "2. What data we collect",
        paragraphs: [
          "We collect data only when you voluntarily send it through the inquiry form (or the mini reception planner). This is: your full name, phone number, e-mail address and information about the planned event that you provide yourself (type of event, date, number of guests, location, menu preferences, allergies, message content).",
        ],
      },
    ],

    purpose: {
      heading: "3. Purpose and legal basis",
      items: [
        "Handling your inquiry, getting back to you and preparing a proposal (date, menu, quote) — basis: Article 6(1)(b) and (f) GDPR (actions taken at the data subject's request and the controller's legitimate interest).",
        "The consent you've given to be contacted — Article 6(1)(a) GDPR (you may withdraw it at any time, without affecting the lawfulness of processing carried out beforehand).",
      ],
    },

    recipients: {
      heading: "4. Data recipients",
      before: "Inquiries from the form are sent to the address ",
      after:
        ". The data may be processed by trusted IT service providers supporting the operation of the form and e-mail (e.g. the form-sending service provider, e-mail hosting), solely to the extent necessary to achieve the above purposes.",
    },

    policies: [
      {
        heading: "5. Retention period",
        paragraphs: [
          "We store the data for the time necessary to handle the inquiry and any provision of the service, and then for the period required by law or until the consent is withdrawn / an effective objection is raised.",
        ],
      },
      {
        heading: "6. Your rights",
        paragraphs: [
          "You have the right to: access your data, rectify it, erase it, restrict its processing, transfer the data, object, and withdraw consent. You also have the right to lodge a complaint with the President of the Personal Data Protection Office (UODO).",
        ],
      },
      {
        heading: "7. Cookies",
        paragraphs: [
          "The website uses essential cookies and — after you give consent in the banner — analytical/marketing cookies. You can change or withdraw your consent by clearing the site's data in your browser. We collect statistics in a way consistent with your choice (Consent Mode).",
        ],
      },
    ],

    contact: {
      heading: "8. Contact regarding data",
      before: "For matters concerning personal data, write to ",
      between: " or to the general address ",
      after: ".",
    },

    back: "← Back to home",
  },
};
