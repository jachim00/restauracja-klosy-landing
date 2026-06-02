/**
 * Wörterbuch DE (Deutsch). Übersetzung von messages/pl/* (kanonische Quelle).
 * Struktur 1:1 zu PL — TypeScript erzwingt die Form über den Typ Dictionary.
 * Eigennamen, Pfade, Icon-Namen, IDs, Map-Schlüssel und [DO UZUPEŁNIENIA]-Platzhalter
 * bleiben unverändert.
 */
import type { Dictionary } from "@/content/i18n";

export const de: Dictionary = {
  common: {
    brand: "KŁOSY",
    brandFull: "Restauracja KŁOSY",
    ogImageAlt: "Warmes Interieur der Restauracja KŁOSY in Warschau mit bernsteinfarbenem Lampenlicht",
    skipToContent: "Zum Inhalt springen",

    nav: {
      ariaLabel: "Hauptnavigation",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      links: [
        { key: "home", href: "/", label: "Startseite", short: "Start" },
        { key: "menu", href: "/menu-dnia", label: "Tagesmenü", short: "Menü" },
        { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Familienfeiern", short: "Feiern" },
        { key: "komunie", href: "/komunie-chrzciny", label: "Erstkommunion & Taufe", short: "Kommunion" },
        { key: "wesela", href: "/wesela-rocznice", label: "Hochzeiten & Jubiläen", short: "Hochzeiten" },
        { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
        { key: "galeria", href: "/galeria", label: "Galerie", short: "Galerie" },
        { key: "kontakt", href: "/kontakt", label: "Kontakt", short: "Kontakt" },
      ],
    },

    langSwitcher: {
      label: "Sprache wechseln",
      current: "Sprache",
    },

    cta: {
      reserve: "Nach einem Termin fragen",
      sendInquiry: "Anfrage senden",
      call: "Anrufen",
      write: "Schreiben",
      ask: "Nach einem Termin fragen",
      seeOffer: "Angebot ansehen",
      seeMenu: "Tagesmenü ansehen",
      backHome: "Zurück zur Startseite",
    },

    mobileCta: {
      call: "Anrufen",
      write: "Schreiben",
      ask: "Anfragen",
    },

    footer: {
      tagline: "Hausgemachte Küche, Catering und kleine Familienfeiern im Zentrum von Warschau.",
      navHeading: "Navigation",
      contactHeading: "Kontakt",
      foundationNote:
        "Das Restaurant wird von der Stiftung „Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”“ geführt — der Gewinn unterstützt die satzungsmäßigen Ziele der Stiftung.",
      copyright: "Alle Rechte vorbehalten.",
      madeBy: "Umsetzung:",
      privacy: "Datenschutzerklärung",
    },

    cookie: {
      text:
        "Wir verwenden Cookies zu Statistik- und Marketingzwecken. Sie können alle akzeptieren oder nur die notwendigen nutzen.",
      accept: "Akzeptieren",
      reject: "Nur notwendige",
      privacyLink: "Datenschutzerklärung",
      ariaLabel: "Hinweis zu Cookies",
    },
  },

  meta: {
    home: {
      title: "Restauracja KŁOSY Warschau | Mittagstisch, Catering und Familienfeiern",
      description:
        "Restauracja KŁOSY an der Al. Jerozolimskie 123a in Warschau — hausgemachte Mittagsgerichte, Catering sowie kleine Feiern: Erstkommunion, Taufe, Hochzeiten, Jubiläen und Firmenveranstaltungen.",
      ogDescription:
        "Hausgemachte Küche und Familienfeiern im Zentrum von Warschau. Fragen Sie nach einem Termin für Erstkommunion, Taufe, Hochzeit oder Catering.",
    },
    menuDnia: {
      title: "Tagesmenü und hausgemachter Mittagstisch in Warschau",
      description:
        "Hausgemachter Mittagstisch und Tagesmenü in der Restauracja KŁOSY an der Al. Jerozolimskie in Warschau. Polnische Küche, vegetarische Optionen, Mittagessen für Gruppen und Catering mit Lieferung.",
      ogDescription: "Hausgemachter Mittagstisch und Tagesmenü im Zentrum von Warschau. Polnische Küche, vegetarische Optionen, Mittagessen für Gruppen.",
    },
    imprezy: {
      title: "Familienfeiern in Warschau",
      description:
        "Kleine Familienfeiern in der Restauracja KŁOSY in Warschau: Geburtstage, Jubiläen und Familientreffen. Individuelles Menü und Service vor Ort.",
      ogDescription: "Kleine Familienfeiern im Zentrum von Warschau — Geburtstage, Jubiläen, Jahrestage.",
    },
    komunie: {
      title: "Erstkommunion & Taufe in Warschau | Kleine Familienfeiern",
      description:
        "Kommunion- und Tauffeiern in der Restauracja KŁOSY in Warschau. Menü für Kinder und Erwachsene, Service vor Ort, Unterstützung bei der Organisation. Fragen Sie nach einem freien Termin.",
      ogDescription: "Kommunion- und Tauffeiern im Zentrum von Warschau — Menü für Kinder und Erwachsene, Service vor Ort.",
    },
    wesela: {
      title: "Hochzeiten im kleinen Kreis und Jubiläen in Warschau",
      description:
        "Hochzeiten im kleinen Kreis, Jubiläen und Jahrestage in der Restauracja KŁOSY in Warschau. Warmer, natürlicher Rahmen, individuelles Menü und organisatorische Unterstützung.",
      ogDescription: "Hochzeiten im kleinen Kreis und Jubiläen im Zentrum von Warschau — natürlicher Rahmen, individuelles Menü.",
    },
    catering: {
      title: "Catering Warschau — geschäftlich und privat | Restauracja KŁOSY",
      description:
        "Catering für Firmen und Privatpersonen in Warschau: Kaffeepausen, Business-Lunches, private Veranstaltungen — vor Ort oder mit Lieferung. Mit Rechnung (USt.). Fragen Sie nach einem Angebot.",
      ogDescription: "Catering für Firmen und Privatpersonen in Warschau — Kaffeepausen, Business-Lunches, mit Lieferung.",
    },
    galeria: {
      title: "Galerie — Interieur, Gerichte und Feiern",
      description:
        "Galerie der Restauracja KŁOSY in Warschau: Interieur, hausgemachte Gerichte, Tischdekoration für Kommunion und Feiern sowie das Catering-Angebot.",
      ogDescription: "Sehen Sie das Interieur, die Gerichte und die Feierarrangements in der Restauracja KŁOSY in Warschau.",
    },
    kontakt: {
      title: "Kontakt | Restauracja KŁOSY, Al. Jerozolimskie 123a",
      description:
        "Nehmen Sie Kontakt mit der Restauracja KŁOSY in Warschau (Al. Jerozolimskie 123a) auf. Fragen Sie nach einem Termin für eine Feier, Catering oder ein Mittagessen für eine Gruppe — per Formular oder telefonisch.",
      ogDescription: "Nehmen Sie Kontakt mit der Restauracja KŁOSY in Warschau auf — Anfrageformular, Telefon, Anfahrt.",
    },
    polityka: {
      title: "Datenschutzerklärung",
      description: "Datenschutzerklärung der Website der Restauracja KŁOSY in Warschau — Grundsätze der Datenverarbeitung und Cookie-Nutzung.",
      ogDescription: "Grundsätze der Datenverarbeitung und Cookie-Nutzung auf der Website der Restauracja KŁOSY.",
    },
  },

  home: {
    hero: {
      badge: "Warschau · Al. Jerozolimskie 123a",
      titleBefore: "Hausgemachte ",
      titleHighlight: "Küche",
      titleAfter: " und Familienfeiern im Herzen von Warschau",
      subtitle:
        "Mittagstisch, Catering und kleine Feiern — Erstkommunion, Taufe, Hochzeiten, Jubiläen und Firmenveranstaltungen. Sagen Sie uns, was Sie planen, und wir erstellen einen Menüvorschlag.",
      ctaAsk: "Nach einem Termin fragen",
      ctaSeeOffer: "Angebot ansehen",
      scrollAria: "Zum Angebot scrollen",
    },

    about: {
      heading: "Die Restauracja KŁOSY in wenigen Worten",
      paragraph1Before:
        "Wir sind ein Restaurant mit hausgemachter Küche an der Al. Jerozolimskie 123a in Warschau (Atlas Tower). Wir kochen unseren Mittagstisch vor Ort, bieten Catering an und organisieren kleine Familienfeiern. Das Restaurant wird betrieben von der ",
      paragraph1After:
        ", und der Gewinn unterstützt die satzungsmäßigen Ziele der Stiftung.",
      paragraph2:
        "Wir veranstalten keine großen Feiern für Hunderte von Gästen — wir setzen auf eine intime Atmosphäre, gutes Essen und ruhigen Service für Familien, Freunde und Teams.",
      tiles: [
        { title: "Mittagstisch", desc: "Tagesmenü und für Gruppen" },
        { title: "Catering", desc: "geschäftlich und privat" },
        { title: "Erstkommunion", desc: "und Taufe" },
        { title: "Hochzeiten", desc: "im kleinen Kreis und Jubiläen" },
      ],
    },

    process: {
      heading: "Wie läuft die Organisation einer Feier ab?",
      steps: [
        { n: "1", title: "Kontakt", desc: "Sie senden eine Anfrage über das Formular oder rufen an." },
        { n: "2", title: "Termin", desc: "Wir bestätigen die Verfügbarkeit des gewünschten Datums." },
        { n: "3", title: "Menü", desc: "Wir stimmen das Menü auf die Art der Veranstaltung und die Gäste ab." },
        { n: "4", title: "Vorbereitung", desc: "Wir bereiten den Saal oder das Catering vor." },
        { n: "5", title: "Veranstaltung", desc: "Wir betreuen die Feier am Tag der Veranstaltung." },
      ],
      note: "Nach dem Absenden der Anfrage bestätigt das Restaurant die Verfügbarkeit des Termins und erstellt einen Menüvorschlag.",
    },

    finalCta: {
      heading: "Planen Sie Ihre Feier im KŁOSY",
      text: "Schreiben Sie uns, was Sie planen — wir antworten mit einem Termin- und Menüvorschlag.",
      button: "Anfrage senden",
    },
  },

  offers: {
    heading: "Was können wir für Sie organisieren?",
    intro:
      "Wählen Sie die Art der Veranstaltung — wir zeigen Ihnen den Umfang, die Vorteile und den nächsten Schritt. Details und Menü stimmen wir nach Ihrer Anfrage individuell ab.",
    tablistAria: "Angebot",
    tabs: [
      {
        id: "obiady",
        label: "Mittagstisch & Tagesmenü",
        heading: "Hausgemachter Mittagstisch und Tagesmenü im Zentrum von Warschau",
        description:
          "Täglich frisch vor Ort zubereiteter Mittagstisch — polnische Küche, saisonale Zutaten, Tagesmenü für Einzelgäste und Gruppen. Ein guter Ort zum Mittagessen in der Nähe der Al. Jerozolimskie und im Stadtteil Ochota.",
        benefits: ["Frisches Tagesmenü", "Vegetarische Optionen", "Mittagessen für Gruppen", "Catering mit Lieferung"],
        ctaLabel: "Tagesmenü ansehen",
        href: "/menu-dnia",
        image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
        imageAlt: "Hausgemachtes Mittagessen in der Restauracja KŁOSY in Warschau: gebratene Eisbein, Suppe und Dessert",
      },
      {
        id: "komunie-chrzciny",
        label: "Erstkommunion & Taufe",
        heading: "Kommunion- und Tauffeiern",
        description:
          "Kleine Familienfeiern mit einem auf Kinder und Erwachsene abgestimmten Menü und Service vor Ort. Termin und Details stimmen wir individuell ab.",
        benefits: ["Menü für Kinder und Erwachsene", "Saal exklusiv (auf Anfrage)", "Kellnerservice", "Hilfe bei der Organisation"],
        ctaLabel: "Nach Kommunion / Taufe fragen",
        href: "/komunie-chrzciny",
        image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
        imageAlt: "Tischarrangement für die Kommunion mit Snacks in der Restauracja KŁOSY in Warschau",
      },
      {
        id: "wesela",
        label: "Hochzeiten im kleinen Kreis",
        heading: "Hochzeiten im kleinen Kreis und Jubiläen",
        description:
          "Hochzeit im engsten Kreis, Jubiläen und Jahrestage — in einem warmen, natürlichen Rahmen. Menü und Gästezahl stimmen wir auf die jeweilige Veranstaltung ab.",
        benefits: ["Intime Atmosphäre", "Individuelles Menü", "Natürliche Dekoration", "Organisatorische Unterstützung"],
        ctaLabel: "Nach Hochzeit / Jubiläum fragen",
        href: "/wesela-rocznice",
        image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
        imageAlt: "Festlich gedeckter Tisch für eine Feier im kleinen Kreis in der Restauracja KŁOSY in Warschau",
      },
      {
        id: "rodzinne",
        label: "Jubiläen & Familientreffen",
        heading: "Jubiläen, Geburtstage und Familientreffen",
        description:
          "Ein gemeinsames Mittag- oder Abendessen für die Familie, Geburtstage, Jubiläen — ohne organisatorischen Stress, mit Menü nach Wunsch.",
        benefits: ["Menü nach Wunsch", "Platz für die Familie", "Service vor Ort", "Flexible Zeiten"],
        ctaLabel: "Treffen planen",
        href: "/imprezy-okolicznosciowe",
        image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
        imageAlt: "Gemütlicher Saal der Restauracja KŁOSY in Warschau, gedeckt für ein Familientreffen",
      },
      {
        id: "catering",
        label: "Catering geschäftlich & privat",
        heading: "Catering für Firmen und Privatpersonen in Warschau",
        description:
          "Catering für Firmenveranstaltungen, Schulungen und private Anlässe — vor Ort oder mit Lieferung. Umfang und Form stimmen wir auf Basis Ihrer Anfrage ab.",
        benefits: ["Catering mit Lieferung", "Kaffeepausen", "Business-Lunches", "Mit Rechnung (USt.)"],
        ctaLabel: "Nach Catering fragen",
        href: "/catering",
        image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
        imageAlt: "Catering-Buffet KŁOSY in Warschau mit Caprese-Snacks, Tartines und Desserts",
      },
      {
        id: "grupy",
        label: "Mittagessen für Schulgruppen",
        heading: "Mittagessen für Gruppen, auch für Schulgruppen",
        description:
          "Wir bereiten Mittagessen für Gruppen zu — für Ausflüge, Schulgruppen und organisierte Gruppen. Bitte kontaktieren Sie uns, um die Personenzahl und das Menü abzustimmen.",
        benefits: ["Menü für Gruppen", "Zügiger Service", "Flexible Termine", "Anpassung an Ernährungsweisen"],
        ctaLabel: "Nach Mittagessen für die Gruppe fragen",
        href: "/catering",
        image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
        imageAlt: "Hausgemachtes Mittagessen für Gruppen in der Restauracja KŁOSY in Warschau — Hähnchen und Nudeln in Soße",
      },
    ],
  },

  faq: {
    heading: "Häufige Fragen",
    items: [
      {
        q: "Kann man in der Restauracja KŁOSY eine Kommunionfeier organisieren?",
        a: "Ja. Die Restauracja KŁOSY in Warschau (Al. Jerozolimskie 123a) organisiert Kommunionfeiern — mit einem auf die Gäste abgestimmten Menü und Service vor Ort. Termin und Details stimmen wir nach Ihrer Anfrage individuell ab.",
      },
      {
        q: "Eignet sich das Lokal für eine Taufe?",
        a: "Ja, wir organisieren kleine Tauffeiern. Nach Eingang Ihrer Anfrage bestätigen wir die Verfügbarkeit des Termins und erstellen einen Menüvorschlag.",
      },
      {
        q: "Kann man eine Hochzeit im kleinen Kreis organisieren?",
        a: "Ja. KŁOSY ist auf kleine Familienfeiern spezialisiert, darunter Hochzeiten im kleinen Kreis und Jubiläen. Gästezahl und Menü stimmen wir individuell ab.",
      },
      {
        q: "Bietet das Restaurant Catering mit Lieferung an?",
        a: "Ja, wir bieten Catering an — geschäftlich und privat, vor Ort oder mit Lieferung im Raum Warschau. Umfang und Form stimmen wir auf Basis Ihrer Anfrage ab.",
      },
      {
        q: "Kann man Mittagessen für Schulgruppen bestellen?",
        a: "Ja, wir bereiten Mittagessen für Gruppen zu, auch für Schulgruppen. Bitte kontaktieren Sie uns, um die Personenzahl und das Menü abzustimmen.",
      },
      {
        q: "Wo befindet sich die Restauracja KŁOSY?",
        a: "An der Al. Jerozolimskie 123a in Warschau (Stadtteil Ochota), im Gebäude Atlas Tower. Die genaue Etage und Anfahrt bestätigen wir im Kontakt.",
      },
      {
        q: "Wie frage ich nach einem freien Termin?",
        a: "Am schnellsten über das Anfrageformular auf der Website oder telefonisch. Nach dem Absenden der Anfrage bestätigen wir die Verfügbarkeit des Termins und erstellen einen Menüvorschlag.",
      },
      {
        q: "Kann das Menü an die Gäste angepasst werden?",
        a: "Ja. Wir stellen das Menü nach Art der Veranstaltung und den Vorlieben der Gäste zusammen — wir berücksichtigen u. a. vegetarische Gerichte sowie Hinweise zu Allergien, die in der Anfrage angegeben werden.",
      },
    ],
  },

  configurator: {
    heading: "Planen Sie Ihre Feier",
    intro:
      "Sammeln Sie in wenigen Schritten die wichtigsten Informationen zu Ihrer Veranstaltung. Am Ende übergeben wir sie an das Kontaktformular — wir melden uns mit einem Vorschlag.",

    progress: {
      stepLabel: "Schritt {step} von {total}",
      barAria: "Fortschritt des Feier-Konfigurators",
    },

    stepTitles: [
      "Welche Art von Feier planen Sie?",
      "Mit wie vielen Gästen rechnen Sie?",
      "Wo soll sie stattfinden?",
      "Welchen Termin ziehen Sie in Betracht?",
      "Zusammenfassung",
    ],

    dateHint: "Der Termin ist unverbindlich — wir bestätigen die Verfügbarkeit gemeinsam.",

    summary: {
      eventType: "Art der Feier",
      guests: "Gästezahl",
      place: "Ort",
      preferredDate: "Wunschtermin",
      dateTbd: "Noch festzulegen",
      empty: "—",
      submit: "Anfrage zur Feier senden",
    },

    nav: {
      back: "Zurück",
      next: "Weiter",
    },

    footnote:
      "Nach dem Absenden der Anfrage bestätigt das Restaurant die Verfügbarkeit des Termins und erstellt einen Menüvorschlag.",

    eventTypes: [
      { id: "komunia", label: "Erstkommunion", icon: "Sparkles", blurb: "Kleine Kommunionfeier mit einem Menü für Kinder und Erwachsene." },
      { id: "chrzest", label: "Taufe", icon: "Baby", blurb: "Ruhige Tauffeier im Familienkreis in einem eleganten Saal." },
      { id: "wesele-kameralne", label: "Hochzeit im kleinen Kreis", icon: "Heart", blurb: "Hochzeit im engsten Kreis — ohne Prunk, mit Stil." },
      { id: "rocznica", label: "Jubiläum", icon: "Gift", blurb: "Jubiläum, Hochzeitstag oder Firmenjubiläum — in warmem Rahmen." },
      { id: "urodziny", label: "Geburtstag", icon: "Cake", blurb: "Geburtstag für Familie und Freunde, mit Menü nach Wunsch." },
      { id: "spotkanie-rodzinne", label: "Familientreffen", icon: "Users", blurb: "Ein gemeinsames Mittag- oder Abendessen für die ganze Familie." },
      { id: "spotkanie-firmowe", label: "Firmenveranstaltung", icon: "Briefcase", blurb: "Teamtreffen, Kaffeepausen, Business-Lunches." },
      { id: "catering", label: "Catering", icon: "Truck", blurb: "Catering geschäftlich und privat — vor Ort oder mit Lieferung." },
      { id: "obiad-grupa", label: "Mittagessen für eine Gruppe", icon: "UtensilsCrossed", blurb: "Mittagessen für Gruppen, auch für Schulgruppen." },
    ],

    guestRanges: ["10–20", "21–35", "36–50", "50+", "Catering — größere Personenzahl"],

    places: ["Vor Ort", "Catering mit Lieferung", "Noch festzulegen"],
  },

  forms: {
    lead: {
      ariaLabel: "Anfrageformular für eine Veranstaltung",
      honeypotLabel: "Dieses Feld nicht ausfüllen",
      requiredMark: "*",
      optionalSuffix: "(optional)",
      selectPlaceholder: "Wählen…",
      requiredHint: "sind Pflichtfelder.",
      requiredHintPrefix: "Mit gekennzeichnete Felder",

      fields: {
        imieNazwisko: {
          label: "Vor- und Nachname",
        },
        telefon: {
          label: "Telefon",
        },
        email: {
          label: "E-Mail",
        },
        typWydarzenia: {
          label: "Art der Veranstaltung",
        },
        data: {
          label: "Wunschtermin",
        },
        liczbaGosci: {
          label: "Gästezahl",
        },
        miejsce: {
          label: "Ort",
        },
        budzet: {
          label: "Ungefähres Budget",
          placeholder: "z. B. bis 5000 zł / pro Person",
        },
        preferencjeMenu: {
          label: "Menüwünsche",
          placeholder: "z. B. Menü für Kinder, vegetarische Gerichte",
        },
        alergie: {
          label: "Allergien / Ernährungsanforderungen",
          placeholder: "z. B. glutenfrei, ohne Nüsse",
        },
        wiadomosc: {
          label: "Zusätzliche Informationen",
          placeholder: "Erzählen Sie uns von Ihrer Veranstaltung — was benötigen Sie?",
        },
      },

      eventTypeOptions: [
        { value: "komunia", label: "Erstkommunion" },
        { value: "chrzest", label: "Taufe" },
        { value: "wesele-kameralne", label: "Hochzeit im kleinen Kreis" },
        { value: "rocznica", label: "Jubiläum" },
        { value: "urodziny", label: "Geburtstag" },
        { value: "spotkanie-rodzinne", label: "Familientreffen" },
        { value: "spotkanie-firmowe", label: "Firmenveranstaltung" },
        { value: "catering", label: "Catering" },
        { value: "obiad-grupa", label: "Mittagessen für eine Gruppe" },
        { value: "inne", label: "Sonstiges" },
      ],

      guestRangeOptions: [
        { value: "10–20", label: "10–20" },
        { value: "21–35", label: "21–35" },
        { value: "36–50", label: "36–50" },
        { value: "50+", label: "50+" },
        {
          value: "catering — większa liczba osób",
          label: "Catering — größere Personenzahl",
        },
      ],

      placeOptions: [
        { value: "W lokalu", label: "Vor Ort" },
        { value: "Catering z dostawą", label: "Catering mit Lieferung" },
        { value: "Do ustalenia", label: "Noch festzulegen" },
      ],

      consents: {
        heading: "",
        kontakt: {
          text: "Ich willige in eine telefonische oder E-Mail-Kontaktaufnahme zur Besprechung meiner Anfrage ein.",
        },
        rodo: {
          before: "Ich habe die",
          linkText: "Datenschutzerklärung",
          after: "zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.",
        },
      },

      submit: {
        idle: "Anfrage senden",
        loading: "Wird gesendet…",
      },

      validation: {
        imieNazwiskoRequired: "Bitte geben Sie Ihren Vor- und Nachnamen an.",
        imieNazwiskoMin: "Bitte geben Sie Ihren Vor- und Nachnamen an (mind. 2 Zeichen).",
        telefonRequired: "Bitte geben Sie eine Telefonnummer an.",
        telefonMin: "Bitte geben Sie eine Telefonnummer an (mind. 9 Ziffern).",
        telefonInvalid: "Bitte geben Sie eine gültige polnische Telefonnummer an.",
        emailRequired: "Bitte geben Sie eine E-Mail-Adresse an.",
        emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        typWydarzeniaRequired: "Bitte wählen Sie die Art der Veranstaltung.",
        liczbaGosciRequired: "Bitte wählen Sie die ungefähre Gästezahl.",
        miejsceRequired: "Bitte wählen Sie den Ort der Veranstaltung.",
        zgodaKontaktRequired: "Die Einwilligung zur Kontaktaufnahme ist erforderlich.",
        zgodaRodoRequired: "Die Einwilligung zur Datenverarbeitung ist erforderlich.",
      },

      success: {
        heading: "Vielen Dank für Ihre Anfrage!",
        bodyBefore:
          "Wir melden uns so schnell wie möglich, um die Details Ihrer Veranstaltung zu besprechen. Falls es dringend ist, rufen Sie uns bitte an:",
        again: "Weitere Anfrage senden",
      },

      errors: {
        noEndpoint:
          "Das Formular ist noch nicht an den Empfang von Anfragen angebunden. Bitte kontaktieren Sie uns telefonisch oder per E-Mail. (Konfiguration: NEXT_PUBLIC_WEB3FORMS_KEY oder NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
        http: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
        network: "Es ist ein Verbindungsfehler aufgetreten. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      },

      mail: {
        subjectPrefix: "Anfrage über die Website KŁOSY —",
        fromNamePrefix: "Restauracja KŁOSY — Formular",
      },
    },
  },

  kontakt: {
    breadcrumb: {
      home: "Startseite",
      current: "Kontakt",
    },

    hero: {
      eyebrow: "Restauracja KŁOSY in Warschau",
      heading: "Kontakt",
      lead:
        "Möchten Sie nach einem Termin für eine Feier fragen, Catering bestellen oder ein Mittagessen für eine Gruppe organisieren? Rufen Sie an, schreiben Sie eine E-Mail oder füllen Sie das Formular aus — wir antworten konkret und unverbindlich. Wir befinden uns an der Al. Jerozolimskie 123a im Warschauer Stadtteil Ochota, wenige Minuten vom Zentrum entfernt.",
      callPrefix: "Anrufen:",
      toForm: "Zum Formular",
    },

    nap: {
      heading: "Kontaktdaten",
      intro:
        "Am schnellsten erreichen Sie uns telefonisch oder per E-Mail. Wenn Sie möchten, beschreiben Sie Ihre Veranstaltung im Formular unten — wir rufen zurück oder antworten schriftlich.",
      addressLabel: "Adresse",
      buildingSuffix: "— auf Anfrage",
      districtLabel: "Stadtteil:",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      hoursLabel: "Öffnungszeiten",
      hoursPlaceholder: "[DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]",
      socialHeading: "Hier finden Sie uns auch",
      facebook: "Facebook",
      instagram: "Instagram",
      instagramPlaceholder: "[DO UZUPEŁNIENIA: Instagram]",
      pyszne: "Pyszne.pl",
      pysznePlaceholder: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
      glovo: "Glovo",
      glovoPlaceholder: "[DO UZUPEŁNIENIA: link Glovo]",
    },

    map: {
      heading: "Anfahrt",
      intro:
        "Wir befinden uns an einem gut angebundenen Punkt in Warschau, an der Al. Jerozolimskie. Den genauen Eingang und die Etage im Gebäude Atlas Tower bestätigen wir im Kontakt.",
      imgAlt:
        "Lage der Restauracja KŁOSY an der Al. Jerozolimskie 123a in Warschau",
      placeholder:
        "[DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]",
      directions: "Route in Google Maps planen",
      directionsPlaceholder: "[DO UZUPEŁNIENIA: link Google Maps]",
    },

    form: {
      heading: "Fragen Sie nach einem Termin, Catering oder einer Feier",
      intro:
        "Beschreiben Sie, was Sie planen — Art der Veranstaltung, ungefähres Datum und Gästezahl. Je mehr Details Sie angeben, desto treffender wird unser Vorschlag für Menü und Termin. Optionale Felder (Budget, Menüwünsche, Allergien) helfen uns, sind aber nicht erforderlich.",
    },

    faq: {
      heading: "Kontakt und Anfragen — häufige Fragen",
    },

    cta: {
      heading: "Sie wissen nicht, wo Sie anfangen sollen?",
      body:
        "Rufen Sie an — erzählen Sie uns in wenigen Sätzen, was Sie planen, und wir empfehlen Ihnen, was sich bewährt und welche Informationen wir benötigen, um einen Vorschlag zu erstellen.",
      callPrefix: "Anrufen:",
      write: "E-Mail schreiben",
      seeAlso: "Siehe auch:",
      links: {
        menuDnia: "Tagesmenü",
        komunie: "Erstkommunion & Taufe",
        wesela: "Hochzeiten & Jubiläen",
        imprezy: "Familienfeiern",
        catering: "Catering",
      },
    },
  },

  menuDnia: {
    hero: {
      alt: "Hausgemachtes Mittagessen in der Restauracja KŁOSY: Eisbein, Suppe und Dessert",
      eyebrow: "Tagesmenü • Warschau, Ochota",
      title: "Tagesmenü und polnische Küche im Zentrum von Warschau",
      subtitle:
        "Täglich hausgemachter Mittagstisch — Suppen, Hauptgerichte und vegetarische Vorschläge — an der Al. Jerozolimskie 123a in Warschau (Atlas Tower, Ochota). Für das alltägliche Mittagessen bei der Arbeit, ein Mittagessen mit Freunden und größere Bestellungen für Gruppen.",
      ctaLabel: "Nach einem Termin fragen",
    },

    breadcrumbs: {
      ariaLabel: "Brotkrümel",
      home: "Startseite",
      current: "Tagesmenü",
    },

    facts: [
      { value: "Tagesmenü", label: "täglich frisch" },
      { value: "Polnische Küche", label: "hausgemachter Mittagstisch" },
      { value: "Mittagessen für Gruppen", label: "vor Ort oder mit Lieferung" },
      { value: "Lieferung", label: "im Raum Warschau" },
    ],

    about: {
      alt: "Gebratene Ente — Hauptgericht aus der hausgemachten Küche der Restauracja KŁOSY",
      eyebrow: "Was bei uns das Tagesmenü ausmacht",
      title: "Hausgemachter Mittagstisch ohne Schnörkel",
      p1: "Das Tagesmenü ist ein frisch zubereitetes Mittagsgericht — hausgemachte Küche ohne Schnörkel: eine wärmende Suppe, ein sättigendes Hauptgericht und eine vegetarische Option. Wir setzen auf einfaches, gutes Essen, wie man es von zu Hause kennt, in Ruhe und ohne Hektik serviert. Die genaue Zusammenstellung des Menüs wechselt täglich.",
      p2Before:
        "Die aktuelle Karte und das tägliche Menü bestätigen wir telefonisch oder im Lokal — Preise und konkrete Positionen nennen wir im Kontakt, damit die Information stets dem entspricht, was wir an dem jeweiligen Tag tatsächlich kochen. Das Restaurant wird betrieben von der ",
      p2After: ", und der Gewinn unterstützt ihre satzungsmäßigen Ziele.",
      points: [
        "Mittagessen in der Arbeitspause (in der Nähe des Atlas Tower)",
        "Mittagessen mit Freunden oder Familie",
        "Tägliche warme Mahlzeit vor Ort",
        "Größere Mittagsbestellungen für Gruppen",
      ],
    },

    groups: {
      alt: "Mittagessen: Hähnchen mit Nudeln — Vorschlag für Gruppen in der Restauracja KŁOSY",
      eyebrow: "Mittagessen für Gruppen",
      title: "Mittagessen für Team, Klasse und Familie",
      p1: "Wir bereiten Mittagessen für Gruppen zu — auch für Schulgruppen, Firmenteams und Familientreffen. Das Menü stimmen wir auf die Personenzahl und die Vorlieben ab, berücksichtigen vegetarische Gerichte sowie Hinweise zu Allergien, die zuvor in der Anfrage angegeben wurden.",
      p2: "Die Anzahl der Portionen, die Form der Ausgabe (vor Ort oder mit Lieferung) und den Termin stimmen wir individuell ab. Schreiben Sie uns einfach, wie viele Gäste es sind und für wann das Mittagessen benötigt wird — wir senden einen Menüvorschlag und bestätigen die Verfügbarkeit.",
      points: [
        "• Auf die Gruppe abgestimmtes Menü (inkl. vegetarischer Optionen)",
        "• Mittagessen für Schulgruppen und Firmenteams",
        "• Ausgabe vor Ort oder mit Lieferung im Raum Warschau",
      ],
      ctaLabel: "Nach Mittagessen für die Gruppe fragen",
    },

    delivery: {
      alt: "Tagliatelle mit Garnelen — Gericht aus der Karte der Restauracja KŁOSY",
      eyebrow: "Mittagessen mit Lieferung",
      title: "Mittagessen aus dem Tagesmenü mit Lieferung in Warschau",
      lead: "Das Mittagessen aus dem Tagesmenü können Sie mit Lieferung bestellen — über beliebte Lieferplattformen. Die Verfügbarkeit der Gerichte, die Zeiten und das Liefergebiet bestätigen wir direkt; unten finden Sie die Links zur Online-Bestellung.",
      pyszneLabel: "Bei Pyszne.pl bestellen",
      pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
      glovoLabel: "Bei Glovo bestellen",
      glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
      cateringBefore: "Sie bevorzugen eine größere, individuelle Bestellung? Sehen Sie sich das ",
      cateringLink: "Catering-Angebot",
      cateringAfter: " an — Catering für Firmen und Privatpersonen bereiten wir auf Basis Ihrer Anfrage vor.",
    },

    menu: {
      title: "Was Sie auf der Karte finden",
      intro:
        "Unten finden Sie die Kategorien unserer Karte. Konkrete Positionen und Preise ergänzen wir auf Basis des aktuellen Restaurantmenüs — bis dahin nennen wir sie telefonisch oder im Lokal.",
      pdfLabel: "Menü herunterladen (PDF)",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
    },

    realizacje: {
      heading: "Sehen Sie unsere Umsetzungen",
      images: [
        { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Pierogi mit Heidelbeeren aus der hausgemachten Küche der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Mittagessen: Braten mit Rohkostsalaten in der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "Tablett mit Haferdesserts in der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Haferbrei mit Erdbeeren in der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Schokoladendessert mit Kirschen in der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Zwei Becher Haferbrei in der Restauracja KŁOSY" },
      ],
    },

    faq: {
      heading: "Häufige Fragen zum Mittagessen",
    },

    next: {
      heading: "Siehe auch",
      cards: [
        { href: "/catering", label: "Catering", desc: "Geschäftlich und privat, vor Ort oder mit Lieferung." },
        { href: "/imprezy-okolicznosciowe", label: "Familienfeiern", desc: "Kleine Feiern und Treffen." },
        { href: "/kontakt", label: "Kontakt", desc: "Fragen Sie nach Termin, Menü und Mittagessen für Gruppen." },
      ],
    },

    cta: {
      title: "Bestellen Sie Mittagessen oder fragen Sie nach dem Tagesmenü",
      text: "Schreiben Sie uns, wie viele Gäste es sind und für wann — wir erstellen einen Vorschlag und bestätigen den Termin.",
      button: "Anfrage senden",
    },

    schema: {
      serviceName: "Tagesmenü und hausgemachter Mittagstisch — Warschau",
      serviceDescription:
        "Täglich hausgemachter Mittagstisch (Tagesmenü), polnische Küche, Mittagessen für Gruppen sowie Lieferung in Warschau. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
    },
  },

  imprezy: {
    hero: {
      eyebrow: "Restauracja KŁOSY · Warschau, Ochota",
      title: "Familienfeiern in Warschau",
      subtitle:
        "Geburtstage im kleinen Kreis, Jubiläen sowie Familien- und Firmentreffen an der Al. Jerozolimskie 123a — mit hausgemachter Küche und ruhigem Service, ohne große Feiern für Hunderte von Gästen.",
      ctaLabel: "Nach einem Termin fragen",
    },

    facts: [
      { value: "Familienfeiern", label: "Geburtstage, Jubiläen, Treffen" },
      { value: "Firmentreffen", label: "Lunches und Kaffeepausen" },
      { value: "Menü nach Wunsch", label: "An die Gäste angepasst" },
      { value: "Zentrum von Warschau", label: "Ochota, Al. Jerozolimskie 123a" },
    ],

    occasionsSection: {
      eyebrow: "Welche Feiern wir organisieren",
      title: "Anlässe, die wir im KŁOSY vorbereiten",
      intro:
        "Jede Feier stimmen wir individuell ab — von der Gästezahl und dem Termin bis zum Menü. Am häufigsten organisieren wir:",
      occasions: [
        {
          title: "Geburtstage",
          desc:
            "Geburtstage für Kinder und Erwachsene im Kreis von Familie und Freunden. Das Menü stellen wir nach dem Alter der Gäste und dem Anlass zusammen — vom Mittagessen mit Torte bis zum Abendessen für die Liebsten. Personenzahl und Ablauf stimmen wir in der Anfrage ab.",
        },
        {
          title: "Jubiläen",
          desc:
            "Hochzeitstage, Jubiläen und Firmenjubiläen in einem ruhigen, warmen Rahmen. Wir setzen auf eine intime Atmosphäre und gutes Essen statt auf eine große Feier — mit einem Menü und Service, der auf den Charakter des Treffens abgestimmt ist.",
        },
        {
          title: "Familientreffen",
          desc:
            "Ein gemeinsames Mittag- oder Abendessen für die ganze Familie — mit oder ohne Anlass. Wir decken einen Tisch für ein gutes Dutzend Personen, berücksichtigen vegetarische Gerichte und zuvor angegebene Hinweise zu Allergien.",
        },
        {
          title: "Firmentreffen",
          desc:
            "Teamtreffen, Business-Lunches und Kaffeepausen. Wir richten sie vor Ort oder als Catering mit Lieferung im Raum Warschau aus. Form und Uhrzeit stimmen wir auf den Tagesablauf der Firma ab.",
        },
      ],
    },

    ambianceSection: {
      eyebrow: "Im kleinen Kreis und familiär",
      title: "Ruhige, familiäre Atmosphäre statt eines großen Bankettsaals",
      paragraphs: [
        "Unser Saal befindet sich im Gebäude Atlas Tower an der Al. Jerozolimskie 123a. Die genaue Etage und Hinweise zur Anfahrt bestätigen wir im Kontakt. Wir setzen auf eine ruhige, familiäre Atmosphäre — statt eines großen Bankettsaals bieten wir einen Raum, in dem sich die Gäste gut hören und wie zu Hause fühlen.",
        "Das Menü stellen wir nach Art der Veranstaltung und den Vorlieben der Gäste zusammen — wir berücksichtigen vegetarische Gerichte sowie Hinweise zu Allergien, die in der Anfrage angegeben werden.",
        "Wir sind auf Feiern im kleinen Kreis spezialisiert. Die genaue Saalkapazität und die maximale Gästezahl bestätigen wir im Kontakt, da sie von der Tischanordnung und dem Charakter der Veranstaltung abhängen.",
      ],
      capacityLabel: "Anzahl der Plätze im Saal:",
      maxGuestsLabel: "Maximale Gästezahl bei einer Feier:",
      largerGroupsLabel: "Größere Gruppen:",
      largerGroupsTextBefore: "für eine größere Personenzahl bieten wir Catering mit Lieferung an —",
      largerGroupsLink: "Catering-Angebot ansehen",
    },

    processSection: {
      eyebrow: "Wie die Organisation abläuft",
      title: "Von der Anfrage bis zum Tag der Veranstaltung",
      intro:
        "Die Organisation einer Feier im KŁOSY läuft in wenigen einfachen Schritten ab — wir begleiten Sie vom ersten Kontakt bis zum Tag der Veranstaltung:",
      steps: [
        ["1", "Kontakt", "Sie senden eine Anfrage über das Formular oder rufen an."],
        ["2", "Termin", "Wir bestätigen die Verfügbarkeit des gewünschten Datums."],
        ["3", "Menü", "Wir stimmen das Menü auf die Art der Veranstaltung und die Gäste ab."],
        ["4", "Vorbereitung", "Wir bereiten den Saal oder das Catering vor."],
        ["5", "Veranstaltung", "Wir betreuen die Feier am Tag der Veranstaltung."],
      ],
      note:
        "Nach dem Absenden der Anfrage bestätigt das Restaurant die Verfügbarkeit des Termins und erstellt einen Menüvorschlag.",
      foundationTextBefore: "Das Restaurant wird betrieben von der",
      foundationTextAfter:
        ", und der Gewinn unterstützt die satzungsmäßigen Ziele der Stiftung. Wenn Sie KŁOSY für Ihre Feier wählen, unterstützen Sie zugleich diese Tätigkeit.",
    },

    photoStripHeading: "Sehen Sie unsere Umsetzungen",

    related: {
      heading: "Sehen Sie auch",
      links: [
        {
          href: "/komunie-chrzciny",
          title: "Erstkommunion & Taufe",
          desc: "Familiäre Kommunion- und Tauffeiern mit einem Menü für Kinder und Erwachsene.",
        },
        {
          href: "/wesela-rocznice",
          title: "Hochzeiten & Jubiläen",
          desc: "Hochzeiten im kleinen Kreis sowie Jubiläen im engsten Kreis.",
        },
        {
          href: "/catering",
          title: "Catering",
          desc: "Catering für Firmen und Privatpersonen — vor Ort oder mit Lieferung im Raum Warschau.",
        },
      ],
    },

    faqHeading: "Häufige Fragen",

    finalCta: {
      title: "Planen Sie Ihre Feier im KŁOSY",
      text: "Schreiben Sie uns, was Sie planen — wir antworten mit einem Termin- und Menüvorschlag.",
      button: "Anfrage senden",
    },

    jsonLd: {
      breadcrumbHome: "Startseite",
      breadcrumbCurrent: "Familienfeiern",
      serviceName: "Organisation von Familienfeiern — Warschau",
      serviceDescription:
        "Kleine Familienfeiern in der Restauracja KŁOSY an der Al. Jerozolimskie 123a in Warschau: Geburtstage, Jubiläen, Familien- und Firmentreffen, mit einem auf die Gäste abgestimmten Menü und Service vor Ort oder Catering mit Lieferung.",
    },
  },

  komunie: {
    hero: {
      eyebrow: "Familienfeiern in Warschau",
      title: "Erstkommunion & Taufe in der Restauracja KŁOSY",
      subtitle:
        "Ein gemütlicher Saal in Ochota, wenige Minuten vom Zentrum Warschaus entfernt. Feiern nach der Erstkommunion und nach der Taufe — mit einem Menü für Kinder und Erwachsene sowie Service vor Ort.",
      alt: "Gedeckter Tisch, vorbereitet für eine kleine Kommunionfeier in der Restauracja KŁOSY",
      ctaLabel: "Nach einem Termin fragen",
    },

    facts: [
      { value: "Im kleinen Kreis", label: "Feiern im kleinen Kreis" },
      { value: "Für alle", label: "Menü für Kinder und Erwachsene" },
      { value: "Vor Ort", label: "Service vor Ort" },
      { value: "Ochota", label: "Warschau, Ochota" },
    ],

    charakter: {
      eyebrow: "Charakter des Ortes",
      title: "Ein gemütlicher Ort für eine Familienfeier",
      alt: "Kommuniontisch mit Ballondekoration in der Restauracja KŁOSY",
      p1: "Erstkommunion und Taufe sind Familienfeiern und keine großen Events — und genau so gehen wir sie an. KŁOSY ist ein ruhiges, gemütliches Restaurant, in dem man sich leicht am Tisch unterhalten kann und die Kinder Platz haben, um bei den Erwachsenen zu sein. Wir setzen auf hausgemachte, polnische Küche und einen einfachen, warmen Rahmen statt auf einen lauten Bankettsaal.",
      p2Before: "Wir befinden uns an der Al. Jerozolimskie 123a im Warschauer Stadtteil Ochota, im Gebäude Atlas Tower. Es ist eine gut angebundene Lage in der Nähe des Zentrums — bequem für Gäste, die aus verschiedenen Teilen Warschaus und von außerhalb anreisen. Die genaue Anfahrt und Etage bestätigen wir im Kontakt (",
      p2After: ").",
      p2Fallback: "auf Anfrage",
      p3: "Da wir nur eine begrenzte Anzahl von Feiern annehmen, widmen wir jeder Familie unsere Aufmerksamkeit: Das Menü stellen wir für die konkrete Feier zusammen, und am Tag der Feier kümmern wir uns um den Service, damit die Gastgeber bei sich zu Hause Gäste sein können. Das Restaurant wird von der Stiftung „Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”“ geführt, sodass jede Feier auch ihre satzungsmäßigen Ziele unterstützt.",
    },

    uroczystosci: {
      eyebrow: "Erstkommunion & Taufe",
      title: "Zwei verschiedene Feiern, ein Ort",
      alt: "Kellnerservice am Tisch während einer Feier in der Restauracja KŁOSY",
      p1: "Die Erste Heilige Kommunion ist ein Tag für das Kind und die ganze Familie. Wir bereiten ein Kommunionessen mit einem Menü vor, das sowohl Kindern als auch Erwachsenen schmeckt, finden Platz für die Torte, und nach der Messe können Sie direkt zu uns kommen. Die Kommunionsaison (meist im Mai) kann intensiv sein, daher fragen Sie am besten frühzeitig nach Terminen.",
      p2: "Taufen organisieren wir das ganze Jahr über und meist im engsten Kreis — Paten, Großeltern, Familie. Es ist oft ein ruhigeres, noch intimeres Treffen. Wir sorgen für einen ruhigen, bequemen Platz, an dem sich das Baby und die Eltern wohlfühlen, sowie für ein Menü für ein entspanntes Familienessen.",
      bullets: [
        "Mittagsmenü für Kinder und Erwachsene, Platz für die Torte",
        "Gemütliche Tischanordnung für die engsten Angehörigen",
        "Service, damit die Eltern beim Kind sein können",
      ],
    },

    menu: {
      eyebrow: "Menü",
      title: "Menü für Kinder und für Erwachsene",
      alt: "Gemütlicher Restaurantsaal mit Blumen in der Restauracja KŁOSY",
      p1: "Bei einer Kommunion- oder Tauffeier sitzen Großeltern und kleine Kinder an einem Tisch — deshalb stellen wir das Menü zweigleisig zusammen. Für Erwachsene bieten wir hausgemachte, polnische Küche in der Mittagsvariante; für Kinder wählen wir einfachere, bewährte Gerichte, die sie auch wirklich essen. Wir berücksichtigen vegetarische Gerichte sowie Allergien und Unverträglichkeiten, die zuvor in der Anfrage angegeben wurden.",
      p2: "Konkrete Menüpositionen und das Angebot erstellen wir individuell, nachdem wir die Gästezahl und den Charakter der Feier kennen — wir veröffentlichen hier keine starre Preisliste und keine fertigen Sets, da wir jede Feier einzeln zusammenstellen. Die aktuelle Speisekarte können Sie auch unten herunterladen.",
      seeMenu: "Tagesmenü ansehen",
      pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Menü herunterladen (PDF)",
      pricingNote:
        "Preise und Verfügbarkeit: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — individuell nach Anfrage festgelegt.",
    },

    realizacje: {
      heading: "Sehen Sie unsere Umsetzungen",
      images: [
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
          alt: "Kommuniontisch mit Blumengirlande in der Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
          alt: "Kommuniontisch mit Ballondekoration in der Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
          alt: "Kellnerservice während einer Feier in der Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Süßer Tisch mit Kuchen für eine Familienfeier",
        },
        {
          src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
          alt: "Gebratene Ente — Gericht aus der hausgemachten, polnischen Küche",
        },
      ],
    },

    checklist: {
      title: "Was Sie vor der Anfrage bereithalten sollten",
      intro:
        "Je mehr Details Sie zu Beginn angeben, desto schneller erstellen wir einen treffenden Vorschlag für Menü und Termin. Sie müssen nicht alles bis ins Detail geklärt haben — ungefähre Angaben genügen.",
      items: [
        "Ungefähres Datum und die Uhrzeit, zu der die Messe / Feier in der Kirche endet.",
        "Anzahl der Erwachsenen und der Kinder (getrennt) — das beeinflusst die Zusammenstellung von Menü und Saal.",
        "Hinweise zu Allergien, Unverträglichkeiten und dem Bedarf an vegetarischen Gerichten.",
        "Ob Sie eine eigene Torte mitbringen oder sich das Restaurant darum kümmern soll.",
        "Eventuelle Dekorationen oder festliche Elemente, die Sie mitbringen möchten.",
        "Ob sich unter den Gästen kleine Kinder befinden, die einen bequemen, ruhigen Platz benötigen.",
      ],
    },

    lokalizacja: {
      title: "Anfahrt und Kontakt",
      intro:
        "Die Restauracja KŁOSY befindet sich im Zentrum von Warschau, in Ochota — an einem gut angebundenen Punkt für Gäste aus der ganzen Stadt und der Umgebung.",
      addressSuffix: "auf Anfrage",
    },

    faq: {
      title: "Erstkommunion & Taufe — häufige Fragen",
    },

    cta: {
      title: "Planen wir gemeinsam die Kommunion oder Taufe",
      text: "Schreiben Sie uns, wann Sie die Feier planen und mit wie vielen Gästen Sie rechnen — wir melden uns mit einem Termin- und Menüvorschlag. Unverbindlich.",
      sendLabel: "Anfrage senden",
      callLabel: "Anrufen:",
      seeAlso: "Siehe auch:",
      links: {
        wesela: "Hochzeiten & Jubiläen",
        imprezy: "Familienfeiern",
        catering: "Catering",
        menuDnia: "Tagesmenü",
      },
    },

    schema: {
      breadcrumbHome: "Startseite",
      breadcrumbCurrent: "Erstkommunion & Taufe",
      serviceName: "Kommunion- und Tauffeiern",
      serviceDescription:
        "Organisation kleiner Kommunion- und Tauffeiern in der Restauracja KŁOSY in Warschau — Menü für Kinder und Erwachsene, Saal und Service vor Ort.",
    },
  },

  wesela: {
    hero: {
      alt: "Rustikaler Saal, vorbereitet für eine Hochzeit im kleinen Kreis in der Restauracja KŁOSY",
      eyebrow: "Hochzeiten & Jubiläen",
      title: "Hochzeiten im kleinen Kreis und Jubiläen in Warschau",
      subtitle:
        "Enger Kreis, hausgemachte Küche und ruhiger Service — ohne den Trubel von Sälen für Hunderte von Gästen. Hochzeits-, Jubiläums- und Jahrestagsfeiern an der Al. Jerozolimskie 123a in Ochota.",
      ctaLabel: "Nach einem Termin fragen",
    },

    facts: {
      weselaValue: "Hochzeiten im kleinen Kreis",
      weselaLabel: "Für den engen Kreis, eine Feier pro Termin",
      roczniceValue: "Jubiläen und Jahrestage",
      roczniceLabel: "Runde Jubiläen, Jahrestage und Treffen nach Jahren",
      menuValue: "Individuelles Menü",
      menuLabel: "Abgestimmt auf den Charakter der Feier und die Vorlieben der Gäste",
      pakietyValueAfter: " Pakete",
      pakietyLabel: "Paketvorschläge bestätigen wir in der Antwort auf Ihre Anfrage",
    },

    intro: {
      before:
        "Die Restauracja KŁOSY an der Al. Jerozolimskie 123a (Ochota, Gebäude Atlas Tower) organisiert Hochzeiten im kleinen Kreis sowie Jubiläums- und Jahrestagsfeiern. Wir setzen auf den engen Kreis, hausgemachte Küche und ruhigen Service — ohne den Trubel von Sälen für Hunderte von Gästen. Das Restaurant wird betrieben von der ",
      after: ", und der Gewinn unterstützt die satzungsmäßigen Ziele der Stiftung.",
    },

    wesele: {
      alt: "Gedeckter Banketttisch, vorbereitet für eine Hochzeit im kleinen Kreis in der Restauracja KŁOSY",
      eyebrow: "Hochzeit im kleinen Kreis",
      title: "Hochzeit im kleinen Kreis — für den engen Kreis",
      p1: "Nicht jede Hochzeit muss eine große Feier sein. Immer mehr Paare wählen die intime Form: die engste Familie und Freunde, ein Saal, ein ruhiger Tagesablauf und ein Menü, das wirklich schmeckt. Dieses Format passt zu KŁOSY — wir kochen vor Ort, kennen jeden Tisch beim Namen und lassen uns nicht auf mehrere Feiern gleichzeitig zerstreuen.",
      p2: "Eine Hochzeit im kleinen Kreis eignet sich für eine standesamtliche Trauung in der Nähe, eine Feier nach der Zeremonie im engen Kreis oder den „zweiten Tag“ in familiärer Atmosphäre. Statt eines starren Drehbuchs stimmen wir mit Ihnen den Ablauf ab: Empfang, Mittagessen, Toast, Dessert und so viel Raum, wie Sie für Gespräche brauchen.",
      p3Before:
        "Die Gästezahl, die Saalanordnung und die Zeiten der Feier stimmen wir individuell nach Ihrer Anfrage ab. Die maximale Platzzahl bestätigen wir im Kontakt — ",
      p3After: ".",
      points: [
        { t: "Im kleinen Kreis", d: "Eine Feier pro Termin, die volle Aufmerksamkeit des Service für Ihre Gäste." },
        { t: "Hausgemachte Küche", d: "Vor Ort gekochte Gerichte, abgestimmt auf das Hochzeitsmenü und die Vorlieben der Gäste." },
        { t: "Enger Kreis", d: "Ein Format für Familie und Freunde, ohne lauten Saal für Hunderte von Gästen." },
        { t: "Ruhiger Ablauf", d: "Wir legen den Tagesablauf gemeinsam mit Ihnen fest — ohne Hektik und Chaos." },
      ],
    },

    rocznice: {
      alt: "Gemütlicher Saal mit Blumendekoration für eine Jubiläumsfeier in der Restauracja KŁOSY",
      eyebrow: "Jubiläen und Jahrestage",
      title: "Jubiläen und Jahrestage",
      p1: "Ein runder Hochzeitstag, ein Paarjubiläum, der Geburtstag des Seniors der Familie oder ein Treffen nach Jahren — bei Jubiläen sind die Menschen am Tisch das Wichtigste. Deshalb organisieren wir sie so, dass niemand zwischen den Ständen herumlaufen muss: Sie setzen sich hin, und wir kümmern uns um den Rest.",
      listHeading: "Welche Jubiläen wir organisieren",
      items: [
        "Hochzeitstage und Paarjubiläen",
        "runde Geburtstage und Namenstage",
        "Familientreffen nach Jahren",
        "Jubiläen und Firmentreffen im kleinen Kreis",
      ],
      p2Before:
        "Jede Feier kalkulieren und stellen wir individuell nach Anfrage zusammen. Fertige Hochzeitspakete sowie beispielhafte Jubiläumsmenüs: ",
      p2After: " — wir bereiten sie in der Antwort auf Ihre Anfrage vor, samt einem Vorschlag für Menü und Termin.",
    },

    menu: {
      alt: "Süßer Tisch mit Kuchen und Desserts, vorbereitet für eine Feier in der Restauracja KŁOSY",
      eyebrow: "Menü und Personalisierung",
      title: "Individuelles Menü für Hochzeit und Jubiläum",
      p1: "Wir bieten kein einzelnes, starres Set. Das Menü stellen wir nach dem Charakter der Feier, der Tageszeit und den Vorlieben der Gäste zusammen. Schreiben Sie uns in der Anfrage einfach, wie viele Personen Sie planen und was Sie erwarten — den Rest erarbeiten wir gemeinsam.",
      cards: [
        { t: "Anpassung an die Gäste", d: "Wir berücksichtigen vegetarische Gerichte sowie Hinweise zu Allergien, die in der Anfrage angegeben werden." },
        { t: "Form der Feier", d: "Mittagessen am gedeckten Tisch, servierte Gerichte oder Buffetform — wir stimmen es gemeinsam mit Ihnen ab." },
        { t: "Toast und Dessert", dBefore: "Torte, Dessert und die Gestaltung des süßen Tisches durch das Restaurant oder in der gewünschten Form. Details: ", dAfter: "." },
        { t: "Getränke", dBefore: "Den Getränkeumfang und einen eventuellen Service stimmen wir individuell ab. Details und Preise: ", dAfter: "." },
      ],
      noteBefore: "Aktuelles Menü und beispielhafte Vorschläge: ",
      noteAfter: ". Die Preise für Pakete und Menü bestätigen wir in der Antwort auf Ihre Anfrage.",
    },

    realizacje: {
      heading: "Sehen Sie unsere Umsetzungen",
      images: [
        { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "Gedeckter Banketttisch für eine Feier in der Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "Rustikaler Saal, vorbereitet für eine Feier im kleinen Kreis" },
        { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "Saal, gedeckt für eine festliche Familienfeier" },
        { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "Süßer Tisch mit Kuchen und Desserts" },
        { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle mit Garnelen — Gericht aus dem Menü der Restauracja KŁOSY" },
      ],
    },

    kroki: {
      heading: "Wie wir eine Feier Schritt für Schritt organisieren",
      steps: [
        ["1", "Anfrage", "Sie senden das Formular oder rufen an — Sie nennen Datum und Gästezahl."],
        ["2", "Termin", "Wir bestätigen die Verfügbarkeit des gewünschten Datums."],
        ["3", "Menü", "Wir stimmen das Menü auf Hochzeit oder Jubiläum und die Vorlieben der Gäste ab."],
        ["4", "Absprachen", "Wir präzisieren Saal, Tagesablauf und Details des Service."],
        ["5", "Veranstaltung", "Wir betreuen die Feier am Tag der Feier."],
      ],
      note: "Nach dem Absenden der Anfrage bestätigt das Restaurant die Verfügbarkeit des Termins und erstellt einen Vorschlag für Menü und Angebot.",
    },

    lokalizacja: {
      heading: "Wo sie stattfindet",
      p1Before: "Die Restauracja KŁOSY befindet sich an der ",
      p1AfterBuilding: " ",
      p1Confirm: "(auf Anfrage)",
      p1End: ". Die genaue Anfahrt, Parkmöglichkeiten und die Erreichbarkeit der Etage bestätigen wir im Kontakt.",
      districtBefore: "(Stadtteil ",
      districtAfter: "), im Gebäude ",
    },

    faq: {
      heading: "Häufige Fragen zu Hochzeiten und Jubiläen",
    },

    next: {
      heading: "Siehe auch",
      cards: [
        { href: "/komunie-chrzciny", t: "Erstkommunion & Taufe", d: "Familienfeiern im kleinen Kreis." },
        { href: "/imprezy-okolicznosciowe", t: "Familienfeiern", d: "Geburtstage, Treffen, Jubiläen." },
        { href: "/catering", t: "Catering", d: "Geschäftlich und privat, auch mit Lieferung." },
      ],
    },

    cta: {
      title: "Planen Sie eine Hochzeit im kleinen Kreis oder ein Jubiläum?",
      text: "Schreiben Sie uns, wie viele Personen und welcher Termin Sie interessieren — wir antworten mit einem Vorschlag für Menü und Angebot.",
      button: "Anfrage senden",
    },

    schema: {
      breadcrumbHome: "Startseite",
      breadcrumbCurrent: "Hochzeiten & Jubiläen",
      serviceName: "Hochzeiten im kleinen Kreis und Jubiläumsfeiern",
      serviceDescription:
        "Organisation von Hochzeiten im kleinen Kreis sowie Jubiläums- und Jahrestagsfeiern in der Restauracja KŁOSY in Warschau (Al. Jerozolimskie 123a, Ochota). Individuelles Menü und Service für den engen Kreis.",
    },
  },

  catering: {
    hero: {
      alt: "Catering-Buffet der Restauracja KŁOSY — Caprese-Snacks, vorbereitet zum Servieren bei einer Firmenveranstaltung",
      eyebrow: "Catering in Warschau",
      title: "Catering geschäftlich und privat — Restauracja KŁOSY",
      subtitle:
        "Hausgemachte, polnische Küche aus dem Restaurant in Ochota — in Ihrem Büro, bei einer Schulung oder bei einem Familientreffen. Vor Ort oder mit Lieferung im Raum Warschau. Firmenbestellungen rechnen wir mit Rechnung (USt.) ab.",
      ctaLabel: "Nach einem Termin fragen",
    },

    facts: [
      { value: "Catering mit Lieferung", label: "Im Raum Warschau" },
      { value: "Geschäftlich und privat", label: "Büro, Schulung, Familientreffen" },
      { value: "Kaffeepausen", label: "Kaffee, Tee und kleine Verpflegung" },
      { value: "Mit Rechnung (USt.)", label: "Bequeme Abrechnung für Firmen" },
    ],

    intro: {
      alt: "Desserts und Catering-Snacks der Restauracja KŁOSY auf einem Tablett angerichtet",
      eyebrow: "Catering aus dem Restaurant",
      title: "Catering aus dem Restaurant, nicht aus der Catering-Fabrik",
      paragraphs: [
        "KŁOSY ist ein laufendes Restaurant an der Al. Jerozolimskie 123a in Warschau, im Stadtteil Ochota, im Gebäude Atlas Tower. Catering ist die Verlängerung unserer täglichen Küche: Die Gerichte, die wir den Gästen im Lokal servieren, bereiten wir auch zum Mitnehmen und mit Lieferung zu. So kommt zu einer Firmen- oder Familienveranstaltung dieselbe hausgemachte, polnische Küche und keine anonymen Portionen vom Fließband.",
        "Wir bedienen zwei Hauptrichtungen. Die erste ist Catering für Firmen (B2B): Lunches für Teams, Kaffeepausen, Betreuung von Schulungen und Konferenzen sowie regelmäßige Lieferungen ins Büro — alles mit Abrechnung per Rechnung (USt.). Die zweite ist privates Catering: Familientreffen, Geburtstage, Jubiläen und Feiern im kleinen Kreis, zu denen wir das Essen liefern oder zur Abholung vorbereiten.",
        "Unabhängig vom Umfang der Bestellung stellen wir das Menü individuell zusammen — nach Personenzahl, Tageszeit und Charakter des Treffens. Wir berücksichtigen vegetarische Gerichte sowie Allergien und Unverträglichkeiten, die in der Anfrage angegeben werden. Wir veröffentlichen hier keine starre Preisliste, da wir jede Bestellung einzeln kalkulieren, nachdem wir die Details kennen.",
      ],
    },

    typesSection: {
      title: "Was wir im Rahmen des Caterings vorbereiten",
      intro:
        "Von einer einzelnen Kaffeepause bis zu festen Lunches für das Team — unten finden Sie die häufigsten Catering-Formen, die wir in Warschau umsetzen.",
      types: [
        {
          title: "Catering für Firmen",
          body: "Wir betreuen Treffen in Büros und Firmenveranstaltungen in Ochota und Umgebung — vom Arbeitsfrühstück über Lunches für das Team bis zur Verpflegung bei einem Kundentermin. Abrechnung per Rechnung (USt.), mit einem Ansprechpartner auf unserer Seite.",
          points: [
            "Lunches für Team und Kundentermine",
            "Catering für Konferenzen und Firmenveranstaltungen",
            "Dauerhafte Zusammenarbeit oder einmalige Bestellung",
          ],
        },
        {
          title: "Privates Catering",
          body: "Familientreffen, Geburtstage, Jubiläen und Feiern im kleinen Kreis — wir bereiten hausgemachte, polnische Küche für Ihre Feier vor. Das Catering holen Sie bei uns ab oder wir liefern es an die angegebene Adresse in Warschau.",
          points: [
            "Familientreffen und Geburtstage",
            "Verpflegung für Feiern im kleinen Kreis",
            "Abholung vor Ort oder Lieferung an die Adresse",
          ],
        },
        {
          title: "Catering mit Lieferung",
          body: "Sie müssen das Essen nicht abholen — wir liefern das Catering im Raum Warschau. Liefergebiet, Uhrzeit und Art der Ausgabe stimmen wir bei der Bestellung ab, damit die Gerichte frisch und pünktlich ankommen.",
          points: [
            "Lieferung im Raum Warschau",
            "Festgelegte Ausgabezeit",
            "Für den Transport verpackte Gerichte",
          ],
        },
        {
          title: "Kaffeepausen",
          body: "Eine Kaffeepause für Schulung, Workshop oder Vorstandssitzung — Kaffee, Tee, Wasser sowie eine kleine herzhafte und süße Verpflegung. Den Umfang passen wir an die Dauer des Treffens und die Teilnehmerzahl an.",
          points: [
            "Kaffee, Tee, Wasser",
            "Kleine herzhafte und süße Verpflegung",
            "Durchgehender Coffee-Break oder zu festgelegten Zeiten",
          ],
        },
        {
          title: "Business-Lunches",
          body: "Lunch für das Team, ohne das Büro zu verlassen — Mittagsmenüs auf Basis unseres Tagesmenüs, in einer bequem servierbaren Form. Bewährt bei der regelmäßigen Verpflegung von Mitarbeitenden und bei ganztägigen Treffen.",
          points: [
            "Mittagsmenüs aus dem Tagesmenü",
            "Vegetarische Optionen",
            "Im Büro bequem servierbare Form",
          ],
        },
        {
          title: "Catering für Schulungen und Gruppen",
          body: "Wir betreuen Schulungen, Workshops und Gruppentreffen — wir verbinden Kaffeepausen mit einem Lunch für die Teilnehmenden. Wir bereiten auch Mittagessen für Gruppen zu, darunter Schulgruppen, in einer festgelegten Anzahl von Portionen.",
          points: [
            "Vollständige Betreuung von Schulungen (Pause + Lunch)",
            "Mittagessen für Gruppen, auch für Schulgruppen",
            "Feste, im Voraus festgelegte Portionszahl",
          ],
        },
      ],
    },

    b2bSection: {
      alt: "Croissants und kleines Gebäck für eine Kaffeepause, zubereitet von der Restauracja KŁOSY",
      eyebrow: "Für Firmen",
      title: "Catering für Firmen mit Rechnung (USt.)",
      lead:
        "Für Firmen soll Catering vor allem bequem und planbar sein. Deshalb führen wir Geschäftsbestellungen mit einem Ansprechpartner auf unserer Seite, rechnen per Rechnung (USt.) ab und betreuen sowohl einmalige Veranstaltungen als auch wiederkehrende Lieferungen ins Büro.",
      points: [
        {
          title: "Rechnung (USt.)",
          body: "Jede Firmenbestellung rechnen wir per Rechnung (USt.) ab — bequem für die Buchhaltung und bei regelmäßiger Zusammenarbeit.",
        },
        {
          title: "Ein Ansprechpartner",
          body: "Auf unserer Seite begleitet Sie eine Person: von der Menüabstimmung über den Termin bis zur Ausgabe und Abrechnung der Bestellung.",
        },
        {
          title: "Wiederkehrende Bestellungen",
          body: "Wir betreuen sowohl einmalige Veranstaltungen als auch feste, wiederkehrende Lieferungen — z. B. regelmäßige Lunches für das Team.",
        },
        {
          title: "Unterstützung der Stiftung",
          body: "Wenn Sie bei uns bestellen, unterstützen Sie auch die satzungsmäßigen Ziele der Stiftung „Człowiek w Potrzebie“ — ein für viele Firmen wichtiges Argument.",
        },
      ],
      note:
        "Die Rechnungsdaten (NIP, Firmenname, Adresse) erfassen wir bei der Bestätigung der Bestellung. Mindestbestellwerte und Liefergebiet: [DO UZUPEŁNIENIA: minimalne zamówienie cateringu firmowego / strefa dostawy] — auf Anfrage festgelegt.",
    },

    groupsSection: {
      alt: "Süßer Tisch mit Kuchen, zubereitet von der Restauracja KŁOSY",
      eyebrow: "Organisierte Gruppen",
      title: "Mittagessen für Gruppen, auch für Schulgruppen",
      paragraphs: [
        "Wir bereiten Mittagessen für organisierte Gruppen zu — für Ausflüge, Schulgruppen, Schulungs- und Workshop-Teilnehmende. Die Portionszahl legen wir im Voraus fest, sodass jeder Teilnehmer eine warme, sättigende Mahlzeit ohne Schlangen und Wartezeiten erhält.",
        "Für Schulgruppen wählen wir einfachere, bewährte Gerichte und bereiten bei Bedarf vegetarische Varianten zu sowie berücksichtigen angegebene Allergien. Das Catering für Gruppen können wir vor Ort im Restaurant umsetzen oder an einen festgelegten Ort im Raum Warschau liefern.",
      ],
      note:
        "Preise für Gruppen-Sets: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] — individuell nach Angabe der Personenzahl festgelegt.",
    },

    menuSection: {
      title: "Catering-Menü und Angebot",
      intro:
        "Das Catering-Menü basiert auf unserer täglichen Karte und auf dem Tagesmenü — in einer für die Ausgabe außerhalb des Restaurants angepassten Form. Konkrete Sets und das Angebot erstellen wir individuell, nachdem wir die Personenzahl, den Charakter des Treffens und die Form der Ausgabe (Abholung oder Lieferung) kennen. Die aktuelle Speisekarte können Sie unten ansehen und herunterladen:",
      menuDniaLink: "Tagesmenü ansehen",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Menü herunterladen (PDF)",
      note:
        "Catering-Preise und -Pakete: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — individuell nach Anfrage festgelegt.",
    },

    processSection: {
      title: "Wie man Catering bestellt — Schritt für Schritt",
      intro: "Der Ablauf ist einfach: vier Schritte von der ersten Anfrage bis zur Ausgabe der Bestellung.",
      steps: [
        {
          title: "1. Anfrage",
          body: "Sie senden eine Anfrage über das Formular oder rufen an. Sie nennen die Art des Caterings (geschäftlich / privat), das Datum, die Personenzahl sowie, ob die Abholung bei uns oder mit Lieferung erfolgen soll.",
        },
        {
          title: "2. Menüvorschlag und Angebot",
          body: "Wir stellen einen Menüvorschlag nach Ihren Bedürfnissen zusammen und erstellen ein Angebot. Wir berücksichtigen vegetarische Gerichte sowie Allergien und Unverträglichkeiten, die in der Anfrage angegeben werden.",
        },
        {
          title: "3. Bestätigung",
          body: "Wir bestätigen die Details: die Ausgabe- oder Lieferzeit, die Portionszahl und die Form der Abrechnung. Für Firmen stellen wir standardmäßig eine Rechnung (USt.) aus.",
        },
        {
          title: "4. Umsetzung",
          body: "Zum vereinbarten Termin bereiten wir die Bestellung zur Abholung im Lokal vor oder liefern sie an die angegebene Adresse in Warschau.",
        },
      ],
    },

    checklistSection: {
      title: "Was Sie in der Catering-Anfrage angeben sollten",
      intro:
        "Je mehr Details Sie zu Beginn angeben, desto schneller erstellen wir einen treffenden Menüvorschlag und ein Angebot. Ungefähre Angaben genügen.",
      items: [
        "Art des Caterings: geschäftlich oder privat — und ob eine Rechnung (USt.) benötigt wird.",
        "Datum und Uhrzeit der Ausgabe oder Lieferung, gegebenenfalls die Zeiten der Kaffeepausen.",
        "Personenzahl sowie Form: Abholung vor Ort oder Lieferung an die Adresse.",
        "Charakter des Treffens: Lunch, Kaffeepause, Schulung, Mittagessen für eine Gruppe.",
        "Hinweise zu Allergien, Unverträglichkeiten und dem Bedarf an vegetarischen Gerichten.",
        "Ob die Bestellung einmalig ist oder wiederkehrend sein soll (z. B. feste Lunches).",
      ],
    },

    photoStrip: {
      heading: "Sehen Sie unsere Umsetzungen",
      images: [
        {
          src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
          alt: "Catering-Buffet mit Caprese-Snacks, zubereitet von der Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-croissanty.webp",
          alt: "Croissants und kleines Gebäck für eine Kaffeepause",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.webp",
          alt: "Desserts und Catering-Snacks auf einem Tablett angerichtet",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Süßer Tisch mit Kuchen von der Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp",
          alt: "Haferdesserts auf einem Tablett serviert",
        },
      ],
    },

    locationSection: {
      title: "Von wo wir liefern und Kontakt",
      intro:
        "Das Catering bereiten wir in unserem Restaurant in Ochota zu und liefern im Raum Warschau. Es ist ein gut angebundener Punkt nahe dem Zentrum — bequem für Lieferungen in Büros und zu Treffen in verschiedenen Teilen der Stadt.",
      buildingSuffix: "auf Anfrage",
      note:
        "Liefergebiet und Lieferkosten: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] — bestätigen wir bei der Bestellung.",
    },

    faqHeading: "Catering — häufige Fragen",

    finalCta: {
      title: "Bestellen wir gemeinsam Catering",
      text:
        "Schreiben Sie uns, für wann und für wie viele Personen Sie Catering benötigen und ob es mit Lieferung sein soll — wir melden uns mit einem Menüvorschlag und einem Angebot. Für Firmen stellen wir standardmäßig eine Rechnung (USt.) aus.",
      sendButton: "Anfrage senden",
      callPrefix: "Anrufen:",
      relatedLabel: "Siehe auch:",
      related: [
        { href: "/menu-dnia", label: "Tagesmenü" },
        { href: "/imprezy-okolicznosciowe", label: "Familienfeiern" },
        { href: "/komunie-chrzciny", label: "Erstkommunion & Taufe" },
        { href: "/wesela-rocznice", label: "Hochzeiten & Jubiläen" },
      ],
    },

    jsonLd: {
      breadcrumbHome: "Startseite",
      breadcrumbCurrent: "Catering",
      serviceName: "Catering für Firmen und Privatpersonen in Warschau",
      serviceDescription:
        "Catering in der Restauracja KŁOSY in Warschau — geschäftlich und privat, vor Ort oder mit Lieferung: Business-Lunches, Kaffeepausen, Catering für Schulungen sowie Mittagessen für Schulgruppen. Abrechnung per Rechnung (USt.).",
    },
  },

  galeria: {
    page: {
      eyebrow: "Restauracja KŁOSY · Warschau",
      title: "Galerie",
      intro:
        "Bevor Sie einen Tisch, ein Mittagessen für eine Gruppe oder eine Familienfeier reservieren, sehen Sie sich an, wie unser Ort an der Al. Jerozolimskie 123a im Zentrum von Warschau aussieht. Unten finden Sie Bilder vom Saal, von gedeckten Tischen und von beispielhaften Gerichten der polnischen Küche. Die Materialien ergänzen wir laufend — wenn Sie etwas suchen, schreiben oder rufen Sie an, und wir senden Ihnen mehr.",
      ctaLabel: "Nach einem Termin oder Angebot fragen",
    },

    breadcrumbs: {
      home: "Startseite",
      current: "Galerie",
    },

    section: {
      title: "Galerie",
      intro:
        "Schauen Sie bei uns vorbei, bevor Sie kommen — Saal, Tische und beispielhafte Gerichte. Die Bilder ergänzen wir laufend.",
      filtersAriaLabel: "Galeriefilter",
      all: "Alles",
      empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
      zoomLabel: "Bild vergrößern:",
      closeLabel: "Galerie schließen",
      prevLabel: "Vorheriges Bild",
      nextLabel: "Nächstes Bild",
    },

    categories: {
      Jedzenie: "Essen",
      Sala: "Saal",
      Komunie: "Kommunion",
      Catering: "Catering",
      Dekoracje: "Dekoration",
      "Na wynos": "Zum Mitnehmen",
    },

    alts: {
      "jedzenie-pierogi":
        "Pierogi mit Heidelbeeren und saurer Sahne in der Restauracja KŁOSY in Warschau, polnische Küche",
      "jedzenie-kaczka":
        "Gebratene Ente mit Rotkohl — polnische Küche in der Restauracja KŁOSY in Warschau",
      "jedzenie-golonka":
        "Hausgemachtes Mittagessen im KŁOSY Warschau: gebratenes Eisbein, Suppe und Dessert",
      "jedzenie-pieczen":
        "Hausgemachtes Mittagessen — Braten mit Ei, Kartoffeln und Rohkostsalaten in der Restauracja KŁOSY in Warschau",
      "jedzenie-kurczak":
        "Hausgemachter Mittagstisch in der Restauracja KŁOSY in Warschau — Hähnchen und Nudeln in Soße",
      "jedzenie-tagliatelle":
        "Tagliatelle mit Garnelen in der Restauracja KŁOSY in Warschau, saisonales Gericht",
      "sala-bufet":
        "Speisesaal der Restauracja KŁOSY in Warschau mit Mittagsbuffet und weißen Tischen",
      "sala-nakryta":
        "Gemütlicher Saal der Restauracja KŁOSY in Warschau, gedeckt für eine Familienfeier",
      "sala-kameralna":
        "Gemütlicher Saal der Restauracja KŁOSY in Warschau, gedeckt für ein Familienessen",
      "sala-lampy":
        "Interieur der Restauracja KŁOSY in Warschau — Saal mit Buffet und stimmungsvoller Beleuchtung",
      "komunie-balony":
        "Gedeckter Tisch für eine Kommunionfeier in der Restauracja KŁOSY in Warschau",
      "komunie-girlanda":
        "Tischarrangement für die Kommunion mit Snacks in der Restauracja KŁOSY in Warschau",
      "komunie-obsluga":
        "Kellnerservice am Kommuniontisch in der Restauracja KŁOSY in Warschau",
      "catering-caprese":
        "Catering-Buffet KŁOSY Warschau mit Caprese-Snacks, Tartines und Desserts",
      "catering-croissanty":
        "Catering-Tisch KŁOSY in Warschau mit Mini-Croissants und Snacks",
      "catering-desery":
        "Süßer und herzhafter Catering-Tisch der Restauracja KŁOSY in Warschau",
      "catering-ciasta":
        "Süßer Catering-Tisch — Kuchen mit Erdbeeren in der Restauracja KŁOSY in Warschau",
      "dekoracje-bankiet":
        "Banketttisch, gedeckt für eine Familienfeier in der Restauracja KŁOSY in Warschau",
      "dekoracje-rustykalna":
        "Rustikaler Saal für Kommunion und Feiern in der Restauracja KŁOSY in Warschau",
      "wynos-desery-taca":
        "Haferdesserts mit Früchten zum Mitnehmen in der Restauracja KŁOSY in Warschau",
      "wynos-owsianka":
        "Haferbrei mit Erdbeeren im Becher zum Mitnehmen, Restauracja KŁOSY Warschau",
      "wynos-czekolada":
        "Schichtdessert mit Schokolade und Kirschen zum Mitnehmen, KŁOSY Warschau",
      "wynos-dwa-kubki":
        "Dessert-Haferbrei zum Mitnehmen im gemütlichen Interieur der Restauracja KŁOSY in Warschau",
    },
  },

  polityka: {
    breadcrumb: {
      home: "Startseite",
      current: "Datenschutzerklärung",
    },

    formEmail: "marketing@restauracjadifferent.pl",

    heading: "Datenschutzerklärung",
    intro:
      "Wir achten auf Ihre Privatsphäre. Im Folgenden erläutern wir, welche Daten wir über die Website der Restauracja KŁOSY erheben, zu welchem Zweck und auf welcher Grundlage, sowie welche Rechte Sie haben.",

    administrator: {
      heading: "1. Verantwortlicher",
      leadBefore:
        "Verantwortlicher für die personenbezogenen Daten ist der Betreiber der Restauracja KŁOSY mit Sitz in der ",
      todo:
        "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
      foundationBefore: "Das Restaurant wird betrieben von der ",
      foundationKrs: "KRS",
    },

    sections: [
      {
        heading: "2. Welche Daten wir erheben",
        paragraphs: [
          "Wir erheben Daten ausschließlich dann, wenn Sie sie freiwillig über das Anfrageformular (oder den Mini-Konfigurator der Feier) übermitteln. Das sind: Vor- und Nachname, Telefonnummer, E-Mail-Adresse sowie Angaben zur geplanten Veranstaltung, die Sie selbst machen (Art der Veranstaltung, Datum, Gästezahl, Ort, Menüwünsche, Allergien, Inhalt der Nachricht).",
        ],
      },
    ],

    purpose: {
      heading: "3. Zweck und Rechtsgrundlage",
      items: [
        "Bearbeitung Ihrer Anfrage, Rückkontakt und Erstellung eines Vorschlags (Termin, Menü, Angebot) — Grundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO (Maßnahmen auf Wunsch der Person sowie berechtigtes Interesse des Verantwortlichen).",
        "Erteilte Einwilligung zur Kontaktaufnahme — Art. 6 Abs. 1 lit. a DSGVO (Sie können sie jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird).",
      ],
    },

    recipients: {
      heading: "4. Empfänger der Daten",
      before: "Anfragen aus dem Formular gehen an die Adresse ",
      after:
        ". Die Daten können von vertrauenswürdigen IT-Dienstleistern verarbeitet werden, die die Bearbeitung des Formulars und der E-Mails unterstützen (z. B. Anbieter des Formularversands, E-Mail-Hosting), ausschließlich im Umfang, der zur Erfüllung der oben genannten Zwecke erforderlich ist.",
    },

    policies: [
      {
        heading: "5. Speicherdauer",
        paragraphs: [
          "Die Daten speichern wir für die zur Bearbeitung der Anfrage und einer eventuellen Erbringung der Leistung erforderliche Zeit und anschließend für den sich aus gesetzlichen Vorschriften ergebenden Zeitraum oder bis zum Widerruf der Einwilligung / der Erhebung eines wirksamen Widerspruchs.",
        ],
      },
      {
        heading: "6. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf: Auskunft über die Daten, deren Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Widerruf der Einwilligung. Ihnen steht außerdem das Recht zu, eine Beschwerde beim Präsidenten des polnischen Datenschutzamtes (UODO) einzulegen.",
        ],
      },
      {
        heading: "7. Cookies",
        paragraphs: [
          "Die Website verwendet notwendige Cookies sowie — nach Einwilligung im Banner — Analyse-/Marketing-Cookies. Die Einwilligung können Sie ändern oder widerrufen, indem Sie die Websitedaten im Browser löschen. Statistiken erheben wir in einer Ihrer Wahl entsprechenden Weise (Consent Mode).",
        ],
      },
    ],

    contact: {
      heading: "8. Kontakt in Datenangelegenheiten",
      before: "In Angelegenheiten, die personenbezogene Daten betreffen, schreiben Sie an ",
      between: " oder an die allgemeine Adresse ",
      after: ".",
    },

    back: "← Zurück zur Startseite",
  },
};
