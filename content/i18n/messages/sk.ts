/**
 * Slovník SK (Slovenčina) — preklad kanonického PL slovníka.
 * Štruktúra je 1:1 voči messages/pl/*; prekladajú sa iba textové hodnoty.
 * Vlastné mená (KŁOSY, názov Nadácie, adresa, telefón, e-maily, KRS), cesty href,
 * cesty obrázkov, názvy ikon lucide, technické id a kľúče máp zostávajú nezmenené.
 */
import type { Dictionary } from "@/content/i18n";

export const sk: Dictionary = {
  common: {
    brand: "KŁOSY",
    brandFull: "Restauracja KŁOSY",
    ogImageAlt: "Útulný interiér Restauracja KŁOSY vo Varšave s teplým jantárovým svetlom lámp",
    skipToContent: "Prejsť na obsah",

    nav: {
      ariaLabel: "Hlavná navigácia",
      openMenu: "Otvoriť menu",
      closeMenu: "Zavrieť menu",
      links: [
        { key: "home", href: "/", label: "Domov", short: "Domov" },
        { key: "menu", href: "/menu-dnia", label: "Denné menu", short: "Menu" },
        { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Slávnostné podujatia", short: "Podujatia" },
        { key: "komunie", href: "/komunie-chrzciny", label: "Prijímania a krstiny", short: "Prijímania" },
        { key: "wesela", href: "/wesela-rocznice", label: "Svadby a výročia", short: "Svadby" },
        { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
        { key: "galeria", href: "/galeria", label: "Galéria", short: "Galéria" },
        { key: "kontakt", href: "/kontakt", label: "Kontakt", short: "Kontakt" },
      ],
    },

    langSwitcher: {
      label: "Zmeniť jazyk",
      current: "Jazyk",
    },

    cta: {
      reserve: "Opýtať sa na termín",
      sendInquiry: "Odoslať dopyt",
      call: "Zavolať",
      write: "Napísať",
      ask: "Opýtať sa na termín",
      seeOffer: "Pozrieť ponuku",
      seeMenu: "Pozrieť denné menu",
      backHome: "Späť na domovskú stránku",
    },

    mobileCta: {
      call: "Zavolať",
      write: "Napísať",
      ask: "Opýtať sa",
    },

    footer: {
      tagline: "Domáca kuchyňa, catering a komorné rodinné oslavy v centre Varšavy.",
      navHeading: "Navigácia",
      contactHeading: "Kontakt",
      foundationNote:
        "Reštauráciu prevádzkuje Fundacja Pomocy Rodzinie „Człowiek w Potrzebie” — zisk podporuje štatutárne ciele Nadácie.",
      copyright: "Všetky práva vyhradené.",
      madeBy: "Realizácia:",
      privacy: "Zásady ochrany osobných údajov",
    },

    cookie: {
      text:
        "Používame súbory cookie na štatistické a marketingové účely. Môžete prijať všetky alebo používať iba nevyhnutné.",
      accept: "Prijímam",
      reject: "Iba nevyhnutné",
      privacyLink: "Zásady ochrany osobných údajov",
      ariaLabel: "Informácie o súboroch cookie",
    },
  },

  meta: {
    home: {
      title: "Restauracja KŁOSY Varšava | Obedy, catering a rodinné oslavy",
      description:
        "Restauracja KŁOSY na Al. Jerozolimskie 123a vo Varšave — domáce obedy, catering a komorné oslavy: prvé sväté prijímania, krstiny, svadby, výročia a firemné stretnutia.",
      ogDescription:
        "Domáca kuchyňa a rodinné oslavy v centre Varšavy. Opýtajte sa na termín prijímania, krstín, svadby alebo cateringu.",
    },
    menuDnia: {
      title: "Denné menu a domáce obedy vo Varšave",
      description:
        "Domáce obedy a denné menu v Restauracja KŁOSY na Al. Jerozolimskie vo Varšave. Poľská kuchyňa, vegetariánske možnosti, obedy pre skupiny a catering s rozvozom.",
      ogDescription: "Domáce obedy a denné menu v centre Varšavy. Poľská kuchyňa, vegetariánske možnosti, obedy pre skupiny.",
    },
    imprezy: {
      title: "Slávnostné podujatia vo Varšave",
      description:
        "Komorné slávnostné podujatia v Restauracja KŁOSY vo Varšave: narodeniny, jubileá, výročia a rodinné stretnutia. Individuálne menu a obsluha na mieste.",
      ogDescription: "Komorné slávnostné oslavy v centre Varšavy — narodeniny, jubileá, výročia.",
    },
    komunie: {
      title: "Prijímania a krstiny vo Varšave | Komorné rodinné oslavy",
      description:
        "Oslavy prvého svätého prijímania a krstín v Restauracja KŁOSY vo Varšave. Menu pre deti aj dospelých, obsluha na mieste, pomoc s organizáciou. Opýtajte sa na voľný termín.",
      ogDescription: "Oslavy prijímania a krstín v centre Varšavy — menu pre deti aj dospelých, obsluha na mieste.",
    },
    wesela: {
      title: "Komorné svadby a výročia vo Varšave",
      description:
        "Komorné svadby, jubileá a výročia v Restauracja KŁOSY vo Varšave. Teplá, prirodzená atmosféra, individuálne menu a organizačná podpora.",
      ogDescription: "Komorné svadby a výročia v centre Varšavy — prirodzená atmosféra, individuálne menu.",
    },
    catering: {
      title: "Catering Varšava — firemný a súkromný | Restauracja KŁOSY",
      description:
        "Firemný a súkromný catering vo Varšave: coffee breaky, biznis obedy, súkromné podujatia — v prevádzke alebo s rozvozom. Faktúra s DPH. Opýtajte sa na cenovú ponuku.",
      ogDescription: "Firemný a súkromný catering vo Varšave — coffee breaky, biznis obedy, s rozvozom.",
    },
    galeria: {
      title: "Galéria — interiér, jedlá a oslavy",
      description:
        "Galéria Restauracja KŁOSY vo Varšave: interiér, domáce jedlá, prestieranie stolov na prijímania a oslavy a cateringová ponuka.",
      ogDescription: "Pozrite si interiér, jedlá a aranžmán osláv v Restauracja KŁOSY vo Varšave.",
    },
    kontakt: {
      title: "Kontakt | Restauracja KŁOSY, Al. Jerozolimskie 123a",
      description:
        "Kontaktujte Restauracja KŁOSY vo Varšave (Al. Jerozolimskie 123a). Opýtajte sa na termín oslavy, catering alebo obed pre skupinu cez formulár alebo telefonicky.",
      ogDescription: "Kontaktujte Restauracja KŁOSY vo Varšave — kontaktný formulár, telefón, dostupnosť.",
    },
    polityka: {
      title: "Zásady ochrany osobných údajov",
      description: "Zásady ochrany osobných údajov webu Restauracja KŁOSY vo Varšave — pravidlá spracúvania údajov a používania súborov cookie.",
      ogDescription: "Pravidlá spracúvania údajov a používania súborov cookie na webe Restauracja KŁOSY.",
    },
  },

  home: {
    hero: {
      badge: "Varšava · Al. Jerozolimskie 123a",
      titleBefore: "Domáca ",
      titleHighlight: "kuchyňa",
      titleAfter: " a rodinné oslavy v srdci Varšavy",
      subtitle:
        "Obedy, catering a komorné oslavy — prvé sväté prijímania, krstiny, svadby, výročia a firemné stretnutia. Povedzte nám, čo plánujete, a pripravíme návrh menu.",
      ctaAsk: "Opýtať sa na termín",
      ctaSeeOffer: "Pozrieť ponuku",
      scrollAria: "Posunúť k ponuke",
    },

    about: {
      heading: "Restauracja KŁOSY v skratke",
      paragraph1Before:
        "Sme reštaurácia s domácou kuchyňou na Al. Jerozolimskie 123a vo Varšave (Atlas Tower). Varíme obedy na mieste, robíme catering a organizujeme komorné rodinné oslavy. Reštaurácia funguje pri ",
      paragraph1After:
        " a zisk podporuje štatutárne ciele Nadácie.",
      paragraph2:
        "Neorganizujeme hlučné podujatia pre stovky ľudí — staviame na komornosť, dobré jedlo a pokojnú obsluhu pre rodiny, priateľov a tímy.",
      tiles: [
        { title: "Obedy", desc: "denné menu a pre skupiny" },
        { title: "Catering", desc: "firemný a súkromný" },
        { title: "Prijímania", desc: "a krstiny" },
        { title: "Svadby", desc: "komorné a výročia" },
      ],
    },

    process: {
      heading: "Ako prebieha organizácia oslavy?",
      steps: [
        { n: "1", title: "Kontakt", desc: "Pošlete dopyt cez formulár alebo zavoláte." },
        { n: "2", title: "Termín", desc: "Potvrdíme dostupnosť vybraného dátumu." },
        { n: "3", title: "Menu", desc: "Vyberieme menu podľa typu podujatia a hostí." },
        { n: "4", title: "Príprava", desc: "Pripravíme sálu alebo catering." },
        { n: "5", title: "Podujatie", desc: "Obslúžime oslavu v deň podujatia." },
      ],
      note: "Po odoslaní dopytu reštaurácia potvrdí dostupnosť termínu a pripraví návrh menu.",
    },

    finalCta: {
      heading: "Naplánujte si oslavu v KŁOSY",
      text: "Napíšte nám, čo plánujete — odpovieme s návrhom termínu a menu.",
      button: "Odoslať dopyt",
    },
  },

  offers: {
    heading: "Čo pre vás dokážeme zorganizovať?",
    intro:
      "Vyberte si typ podujatia — ukážeme rozsah, výhody a ďalší krok. Detaily a menu dolaďujeme individuálne po vašom dopyte.",
    tablistAria: "Ponuka",
    tabs: [
      {
        id: "obiady",
        label: "Obedy a denné menu",
        heading: "Domáce obedy a denné menu v centre Varšavy",
        description:
          "Každodenné obedy pripravované na mieste — poľská kuchyňa, sezónne suroviny, denné menu pre individuálnych hostí aj skupiny. Skvelé miesto na obed v okolí Al. Jerozolimskie a Ochoty.",
        benefits: ["Čerstvé denné menu", "Vegetariánske možnosti", "Obedy pre skupiny", "Catering s rozvozom"],
        ctaLabel: "Pozrieť denné menu",
        href: "/menu-dnia",
        image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
        imageAlt: "Domáci obed v Restauracja KŁOSY vo Varšave: pečené koleno, polievka a dezert",
      },
      {
        id: "komunie-chrzciny",
        label: "Prijímania a krstiny",
        heading: "Oslavy prvého svätého prijímania a krstín",
        description:
          "Komorné rodinné oslavy s menu prispôsobeným deťom aj dospelým a s obsluhou na mieste. Termín a detaily dolaďujeme individuálne.",
        benefits: ["Menu pre deti aj dospelých", "Sála na výhradné použitie (po potvrdení)", "Obsluha čašníkom", "Pomoc s organizáciou"],
        ctaLabel: "Opýtať sa na prijímanie / krstiny",
        href: "/komunie-chrzciny",
        image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
        imageAlt: "Prestretý stôl na prvé sväté prijímanie s pochutinami v Restauracja KŁOSY vo Varšave",
      },
      {
        id: "wesela",
        label: "Komorné svadby",
        heading: "Komorné svadby a výročia",
        description:
          "Svadba v kruhu najbližších, jubileá a výročia — v teplej, prirodzenej atmosfére. Menu a počet hostí dolaďujeme podľa konkrétneho podujatia.",
        benefits: ["Komorná atmosféra", "Individuálne menu", "Prírodná výzdoba", "Organizačná podpora"],
        ctaLabel: "Opýtať sa na svadbu / výročie",
        href: "/wesela-rocznice",
        image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
        imageAlt: "Banketový stôl prestretý na komornú oslavu v Restauracja KŁOSY vo Varšave",
      },
      {
        id: "rodzinne",
        label: "Výročia a rodinné stretnutia",
        heading: "Výročia, narodeniny a rodinné stretnutia",
        description:
          "Spoločný obed alebo večera pre rodinu, narodeniny, jubileá — bez organizačného stresu, s menu na želanie.",
        benefits: ["Menu na želanie", "Miesto pre rodinu", "Obsluha na mieste", "Flexibilné časy"],
        ctaLabel: "Naplánovať stretnutie",
        href: "/imprezy-okolicznosciowe",
        image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
        imageAlt: "Komorná sála Restauracja KŁOSY vo Varšave prestretá na rodinné stretnutie",
      },
      {
        id: "catering",
        label: "Firemný a súkromný catering",
        heading: "Firemný a súkromný catering vo Varšave",
        description:
          "Catering na firemné stretnutia, školenia a súkromné podujatia — v prevádzke alebo s rozvozom. Rozsah a formu dolaďujeme na základe dopytu.",
        benefits: ["Catering s rozvozom", "Coffee breaky", "Biznis obedy", "Faktúra s DPH"],
        ctaLabel: "Opýtať sa na catering",
        href: "/catering",
        image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
        imageAlt: "Cateringový bufet KŁOSY vo Varšave s pochutinami caprese, chlebíčkami a dezertmi",
      },
      {
        id: "grupy",
        label: "Obedy pre školské skupiny",
        heading: "Obedy pre skupiny vrátane školských",
        description:
          "Pripravujeme obedy pre skupiny — výlety, školské a organizované skupiny. Prosíme o kontakt na dohodnutie počtu osôb a menu.",
        benefits: ["Menu pre skupiny", "Rýchla obsluha", "Flexibilné termíny", "Prispôsobenie diétam"],
        ctaLabel: "Opýtať sa na obed pre skupinu",
        href: "/catering",
        image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
        imageAlt: "Domáce obedy pre skupiny v Restauracja KŁOSY vo Varšave — kuracie mäso a cestoviny v omáčke",
      },
    ],
  },

  faq: {
    heading: "Najčastejšie otázky",
    items: [
      {
        q: "Dá sa v Restauracja KŁOSY zorganizovať prvé sväté prijímanie?",
        a: "Áno. Restauracja KŁOSY vo Varšave (Al. Jerozolimskie 123a) organizuje oslavy prvého svätého prijímania — s menu prispôsobeným hosťom a obsluhou na mieste. Termín a detaily dolaďujeme individuálne po dopyte.",
      },
      {
        q: "Hodí sa prevádzka na krstiny?",
        a: "Áno, organizujeme komorné oslavy krstín. Po zaslaní dopytu potvrdíme dostupnosť termínu a pripravíme návrh menu.",
      },
      {
        q: "Dá sa zorganizovať komorná svadba?",
        a: "Áno. KŁOSY sa špecializujú na komorné rodinné oslavy vrátane komorných svadieb a výročí. Počet hostí a menu dolaďujeme individuálne.",
      },
      {
        q: "Ponúka reštaurácia catering s rozvozom?",
        a: "Áno, robíme catering — firemný aj súkromný, v prevádzke alebo s rozvozom v rámci Varšavy. Rozsah a formu dolaďujeme na základe dopytu.",
      },
      {
        q: "Dajú sa objednať obedy pre školské skupiny?",
        a: "Áno, pripravujeme obedy pre skupiny vrátane školských. Prosíme o kontakt na dohodnutie počtu osôb a menu.",
      },
      {
        q: "Kde sa nachádza Restauracja KŁOSY?",
        a: "Na Al. Jerozolimskie 123a vo Varšave (mestská časť Ochota), v budove Atlas Tower. Presné poschodie a dostupnosť potvrdíme pri kontakte.",
      },
      {
        q: "Ako sa opýtať na voľný termín?",
        a: "Najrýchlejšie cez kontaktný formulár na stránke alebo telefonicky. Po odoslaní dopytu potvrdíme dostupnosť termínu a pripravíme návrh menu.",
      },
      {
        q: "Dá sa menu prispôsobiť hosťom?",
        a: "Áno. Menu zostavujeme podľa typu podujatia a preferencií hostí — zohľadňujeme okrem iného vegetariánske jedlá a informácie o alergiách uvedené v dopyte.",
      },
    ],
  },

  configurator: {
    heading: "Naplánujte si oslavu",
    intro:
      "V niekoľkých krokoch zhromaždíme najdôležitejšie informácie o vašom podujatí. Na konci ich odovzdáme do kontaktného formulára — ozveme sa s návrhom.",

    progress: {
      stepLabel: "Krok {step} z {total}",
      barAria: "Priebeh konfigurátora oslavy",
    },

    stepTitles: [
      "Aký typ oslavy plánujete?",
      "Koľko hostí očakávate?",
      "Kde sa má konať?",
      "Aký termín zvažujete?",
      "Zhrnutie",
    ],

    dateHint: "Termín je orientačný — dostupnosť spoločne potvrdíme.",

    summary: {
      eventType: "Typ oslavy",
      guests: "Počet hostí",
      place: "Miesto",
      preferredDate: "Preferovaný termín",
      dateTbd: "Bude dohodnuté",
      empty: "—",
      submit: "Odoslať dopyt na oslavu",
    },

    nav: {
      back: "Späť",
      next: "Ďalej",
    },

    footnote:
      "Po odoslaní dopytu reštaurácia potvrdí dostupnosť termínu a pripraví návrh menu.",

    eventTypes: [
      { id: "komunia", label: "Prvé sväté prijímanie", icon: "Sparkles", blurb: "Komorná oslava prvého svätého prijímania s menu pre deti aj dospelých." },
      { id: "chrzest", label: "Krstiny", icon: "Baby", blurb: "Pokojná, rodinná oslava krstín v elegantnej sále." },
      { id: "wesele-kameralne", label: "Komorná svadba", icon: "Heart", blurb: "Svadba v kruhu najbližších — bez prepychu, so štýlom." },
      { id: "rocznica", label: "Výročie", icon: "Gift", blurb: "Jubileum, svadobné alebo firemné výročie — v teplej atmosfére." },
      { id: "urodziny", label: "Narodeniny", icon: "Cake", blurb: "Narodeniny pre rodinu a priateľov, s menu na želanie." },
      { id: "spotkanie-rodzinne", label: "Rodinné stretnutie", icon: "Users", blurb: "Spoločný obed alebo večera pre celú rodinu." },
      { id: "spotkanie-firmowe", label: "Firemné stretnutie", icon: "Briefcase", blurb: "Tímové stretnutia, coffee breaky, biznis obedy." },
      { id: "catering", label: "Catering", icon: "Truck", blurb: "Firemný a súkromný catering — v prevádzke alebo s rozvozom." },
      { id: "obiad-grupa", label: "Obed pre skupinu", icon: "UtensilsCrossed", blurb: "Obedy pre skupiny vrátane školských." },
    ],

    guestRanges: ["10–20", "21–35", "36–50", "50+", "catering — väčší počet osôb"],

    places: ["V prevádzke", "Catering s rozvozom", "Bude dohodnuté"],
  },

  forms: {
    lead: {
      ariaLabel: "Formulár dopytu na podujatie",
      honeypotLabel: "Toto pole nevypĺňajte",
      requiredMark: "*",
      optionalSuffix: "(nepovinné)",
      selectPlaceholder: "Vyberte…",
      requiredHint: "sú povinné.",
      requiredHintPrefix: "Polia označené",

      fields: {
        imieNazwisko: {
          label: "Meno a priezvisko",
        },
        telefon: {
          label: "Telefón",
        },
        email: {
          label: "E-mail",
        },
        typWydarzenia: {
          label: "Typ podujatia",
        },
        data: {
          label: "Preferovaný dátum",
        },
        liczbaGosci: {
          label: "Počet hostí",
        },
        miejsce: {
          label: "Miesto",
        },
        budzet: {
          label: "Orientačný rozpočet",
          placeholder: "napr. do 5000 zł / na osobu",
        },
        preferencjeMenu: {
          label: "Preferencie menu",
          placeholder: "napr. menu pre deti, vegetariánske jedlá",
        },
        alergie: {
          label: "Alergie / diétne požiadavky",
          placeholder: "napr. bezlepkové, bez orechov",
        },
        wiadomosc: {
          label: "Doplňujúce informácie",
          placeholder: "Povedzte nám o svojom podujatí — čo potrebujete?",
        },
      },

      eventTypeOptions: [
        { value: "komunia", label: "Prvé sväté prijímanie" },
        { value: "chrzest", label: "Krstiny" },
        { value: "wesele-kameralne", label: "Komorná svadba" },
        { value: "rocznica", label: "Výročie" },
        { value: "urodziny", label: "Narodeniny" },
        { value: "spotkanie-rodzinne", label: "Rodinné stretnutie" },
        { value: "spotkanie-firmowe", label: "Firemné stretnutie" },
        { value: "catering", label: "Catering" },
        { value: "obiad-grupa", label: "Obed pre skupinu" },
        { value: "inne", label: "Iné" },
      ],

      guestRangeOptions: [
        { value: "10–20", label: "10–20" },
        { value: "21–35", label: "21–35" },
        { value: "36–50", label: "36–50" },
        { value: "50+", label: "50+" },
        {
          value: "catering — większa liczba osób",
          label: "catering — väčší počet osôb",
        },
      ],

      placeOptions: [
        { value: "W lokalu", label: "V prevádzke" },
        { value: "Catering z dostawą", label: "Catering s rozvozom" },
        { value: "Do ustalenia", label: "Bude dohodnuté" },
      ],

      consents: {
        heading: "",
        kontakt: {
          text: "Súhlasím s telefonickým alebo e-mailovým kontaktom na prerokovanie môjho dopytu.",
        },
        rodo: {
          before: "Oboznámil(a) som sa so",
          linkText: "zásadami ochrany osobných údajov",
          after: "a súhlasím so spracúvaním mojich údajov na účely vybavenia dopytu.",
        },
      },

      submit: {
        idle: "Odoslať dopyt",
        loading: "Odosiela sa…",
      },

      validation: {
        imieNazwiskoRequired: "Zadajte meno a priezvisko.",
        imieNazwiskoMin: "Zadajte meno a priezvisko (min. 2 znaky).",
        telefonRequired: "Zadajte telefónne číslo.",
        telefonMin: "Zadajte telefónne číslo (min. 9 číslic).",
        telefonInvalid: "Zadajte platné poľské telefónne číslo.",
        emailRequired: "Zadajte e-mailovú adresu.",
        emailInvalid: "Zadajte platnú e-mailovú adresu.",
        typWydarzeniaRequired: "Vyberte typ podujatia.",
        liczbaGosciRequired: "Vyberte približný počet hostí.",
        miejsceRequired: "Vyberte miesto podujatia.",
        zgodaKontaktRequired: "Súhlas s kontaktom je povinný.",
        zgodaRodoRequired: "Súhlas so spracúvaním údajov je povinný.",
      },

      success: {
        heading: "Ďakujeme za dopyt!",
        bodyBefore:
          "Ozveme sa čo najskôr, aby sme prerokovali detaily vášho podujatia. Ak je vec naliehavá, prosíme, zavolajte:",
        again: "Odoslať ďalší dopyt",
      },

      errors: {
        noEndpoint:
          "Formulár ešte nie je pripojený na prijímanie dopytov. Prosíme, kontaktujte nás telefonicky alebo e-mailom. (Konfigurácia: NEXT_PUBLIC_WEB3FORMS_KEY alebo NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
        http: "Dopyt sa nepodarilo odoslať. Skúste to znova alebo nám zavolajte.",
        network: "Vyskytla sa chyba pripojenia. Skontrolujte internet a skúste to znova.",
      },

      mail: {
        subjectPrefix: "Dopyt zo stránky KŁOSY —",
        fromNamePrefix: "Restauracja KŁOSY — formulár",
      },
    },
  },

  kontakt: {
    breadcrumb: {
      home: "Domov",
      current: "Kontakt",
    },

    hero: {
      eyebrow: "Restauracja KŁOSY vo Varšave",
      heading: "Kontakt",
      lead:
        "Chcete sa opýtať na termín oslavy, objednať catering alebo zorganizovať obed pre skupinu? Zavolajte, napíšte e-mail alebo vyplňte formulár — odpovedáme konkrétne a nezáväzne. Nájdete nás na Al. Jerozolimskie 123a vo varšavskej Ochote, pár minút od centra.",
      callPrefix: "Zavolajte:",
      toForm: "Prejsť na formulár",
    },

    nap: {
      heading: "Kontaktné údaje",
      intro:
        "Najrýchlejšie sa s nami spojíte telefonicky alebo e-mailom. Ak chcete, opíšte svoje podujatie vo formulári nižšie — zavoláme alebo odpíšeme.",
      addressLabel: "Adresa",
      buildingSuffix: "— bude potvrdené",
      districtLabel: "Mestská časť:",
      phoneLabel: "Telefón",
      emailLabel: "E-mail",
      hoursLabel: "Otváracie hodiny",
      hoursPlaceholder: "[DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]",
      socialHeading: "Nájdete nás aj tu",
      facebook: "Facebook",
      instagram: "Instagram",
      instagramPlaceholder: "[DO UZUPEŁNIENIA: Instagram]",
      pyszne: "Pyszne.pl",
      pysznePlaceholder: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
      glovo: "Glovo",
      glovoPlaceholder: "[DO UZUPEŁNIENIA: link Glovo]",
    },

    map: {
      heading: "Dostupnosť",
      intro:
        "Sme na dobre dostupnom mieste vo Varšave, na Al. Jerozolimskie. Presný vchod a poschodie v budove Atlas Tower potvrdíme pri kontakte.",
      imgAlt:
        "Poloha Restauracja KŁOSY na Al. Jerozolimskie 123a vo Varšave",
      placeholder:
        "[DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]",
      directions: "Navigovať v Google Maps",
      directionsPlaceholder: "[DO UZUPEŁNIENIA: link Google Maps]",
    },

    form: {
      heading: "Opýtajte sa na termín, catering alebo oslavu",
      intro:
        "Opíšte, čo plánujete — typ podujatia, približný dátum a počet hostí. Čím viac detailov uvediete, tým presnejší návrh menu a termínu pripravíme. Nepovinné polia (rozpočet, preferencie menu, alergie) nám pomáhajú, ale nie sú povinné.",
    },

    faq: {
      heading: "Kontakt a dopyty — najčastejšie otázky",
    },

    cta: {
      heading: "Neviete, kde začať?",
      body:
        "Zavolajte — povedzte v pár vetách, čo plánujete, a my poradíme, čo sa osvedčí a aké informácie budeme potrebovať, aby sme pripravili návrh.",
      callPrefix: "Zavolajte:",
      write: "Napísať e-mail",
      seeAlso: "Pozrite aj:",
      links: {
        menuDnia: "Denné menu",
        komunie: "Prijímania a krstiny",
        wesela: "Svadby a výročia",
        imprezy: "Slávnostné podujatia",
        catering: "Catering",
      },
    },
  },

  menuDnia: {
    hero: {
      alt: "Domáci obed v Restauracja KŁOSY: koleno, polievka a dezert",
      eyebrow: "Denné menu • Varšava, Ochota",
      title: "Denné menu a poľská kuchyňa v centre Varšavy",
      subtitle:
        "Každodenné domáce obedy — polievky, hlavné jedlá a vegetariánske možnosti — na Al. Jerozolimskie 123a vo Varšave (Atlas Tower, Ochota). Na bežný obed v práci, obed s priateľmi aj väčšie objednávky pre skupiny.",
      ctaLabel: "Opýtať sa na termín",
    },

    breadcrumbs: {
      ariaLabel: "Omrvinky",
      home: "Domov",
      current: "Denné menu",
    },

    facts: [
      { value: "Denné menu", label: "každý deň čerstvo" },
      { value: "Poľská kuchyňa", label: "domáce obedy" },
      { value: "Obedy pre skupiny", label: "na mieste alebo s rozvozom" },
      { value: "Rozvoz", label: "v rámci Varšavy" },
    ],

    about: {
      alt: "Pečená kačica — hlavné jedlo z domácej kuchyne Restauracja KŁOSY",
      eyebrow: "Čo je u nás denné menu",
      title: "Domáce obedy bez zbytočností",
      p1: "Denné menu je obedové menu pripravované čerstvo priebežne — domáca kuchyňa bez zbytočností: zahrievajúca polievka, sýte hlavné jedlo a vegetariánska možnosť. Staviame na jednoduché, dobré jedlo, aké poznáte z domu, podané pokojne a bez zhonu. Presné zloženie menu sa každý deň mení.",
      p2Before:
        "Aktuálny jedálny lístok a denné menu potvrdíme telefonicky alebo v prevádzke — ceny a konkrétne položky uvádzame pri kontakte, aby informácia vždy zodpovedala tomu, čo v daný deň reálne varíme. Reštaurácia funguje pri ",
      p2After: " a zisk podporuje jej štatutárne ciele.",
      points: [
        "Obed počas prestávky v práci (okolie Atlas Tower)",
        "Obed s priateľmi alebo rodinou",
        "Každodenné teplé jedlo na mieste",
        "Väčšie obedové objednávky pre skupiny",
      ],
    },

    groups: {
      alt: "Obed: kuracie mäso s cestovinami — návrh pre skupiny v Restauracja KŁOSY",
      eyebrow: "Obedy pre skupiny",
      title: "Obed pre tím, triedu a rodinu",
      p1: "Pripravujeme obedy pre skupiny — aj školské skupiny, firemné tímy a rodinné stretnutia. Menu vyberáme podľa počtu osôb a preferencií, zohľadňujeme vegetariánske jedlá a informácie o alergiách uvedené vopred v dopyte.",
      p2: "Počet porcií, formu výdaja (na mieste alebo s rozvozom) a termín dolaďujeme individuálne. Stačí napísať, koľko je hostí a na kedy je obed potrebný — pošleme návrh menu a potvrdíme dostupnosť.",
      points: [
        "• Menu prispôsobené skupine (vrátane vegetariánskych možností)",
        "• Obedy pre školské skupiny a firemné tímy",
        "• Výdaj na mieste alebo s rozvozom v rámci Varšavy",
      ],
      ctaLabel: "Opýtať sa na obedy pre skupinu",
    },

    delivery: {
      alt: "Tagliatelle s krevetami — jedlo z jedálneho lístka Restauracja KŁOSY",
      eyebrow: "Obed s rozvozom",
      title: "Obed z denného menu s rozvozom vo Varšave",
      lead: "Obed z denného menu si môžete objednať s rozvozom — cez populárne rozvozné platformy. Dostupnosť jedál, časy a oblasť rozvozu potvrdíme priamo; nižšie nájdete odkazy na objednanie online.",
      pyszneLabel: "Objednať na Pyszne.pl",
      pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
      glovoLabel: "Objednať na Glovo",
      glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
      cateringBefore: "Preferujete väčšiu, individuálnu objednávku? Pozrite si ",
      cateringLink: "cateringovú ponuku",
      cateringAfter: " — firemný a súkromný catering pripravujeme na základe dopytu.",
    },

    menu: {
      title: "Čo nájdete na jedálnom lístku",
      intro:
        "Nižšie nájdete kategórie nášho jedálneho lístka. Konkrétne položky a ceny dopĺňame na základe aktuálneho menu reštaurácie — dovtedy ich uvádzame telefonicky alebo v prevádzke.",
      pdfLabel: "Stiahnuť menu (PDF)",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
    },

    realizacje: {
      heading: "Pozrite si naše realizácie",
      images: [
        { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Pirohy s čučoriedkami z domácej kuchyne Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Obed: pečené mäso so šalátmi v Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "Podnos ovsených dezertov v Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Ovsená kaša s jahodami v Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Čokoládový dezert s višňami v Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Dva poháriky ovsenej kaše v Restauracja KŁOSY" },
      ],
    },

    faq: {
      heading: "Najčastejšie otázky o obedoch",
    },

    next: {
      heading: "Pozrite aj",
      cards: [
        { href: "/catering", label: "Catering", desc: "Firemný a súkromný, v prevádzke alebo s rozvozom." },
        { href: "/imprezy-okolicznosciowe", label: "Slávnostné podujatia", desc: "Komorné oslavy a stretnutia." },
        { href: "/kontakt", label: "Kontakt", desc: "Opýtajte sa na termín, menu a obedy pre skupiny." },
      ],
    },

    cta: {
      title: "Objednajte obedy alebo sa opýtajte na denné menu",
      text: "Napíšte, koľko je hostí a na kedy — pripravíme návrh a potvrdíme termín.",
      button: "Odoslať dopyt",
    },

    schema: {
      serviceName: "Denné menu a domáce obedy — Varšava",
      serviceDescription:
        "Každodenné domáce obedy (denné menu), poľská kuchyňa, obedy pre skupiny a rozvoz vo Varšave. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
    },
  },

  imprezy: {
    hero: {
      eyebrow: "Restauracja KŁOSY · Varšava, Ochota",
      title: "Slávnostné podujatia vo Varšave",
      subtitle:
        "Komorné narodeniny, výročia a rodinné aj firemné stretnutia na Al. Jerozolimskie 123a — s domácou kuchyňou a pokojnou obsluhou, bez hlučných podujatí pre stovky ľudí.",
      ctaLabel: "Opýtať sa na termín",
    },

    facts: [
      { value: "Rodinné oslavy", label: "Narodeniny, výročia, stretnutia" },
      { value: "Firemné stretnutia", label: "Obedy a coffee breaky" },
      { value: "Menu na želanie", label: "Prispôsobené hosťom" },
      { value: "Centrum Varšavy", label: "Ochota, Al. Jerozolimskie 123a" },
    ],

    occasionsSection: {
      eyebrow: "Aké podujatia organizujeme",
      title: "Príležitosti, ktoré pripravujeme v KŁOSY",
      intro:
        "Každú oslavu dolaďujeme individuálne — od počtu hostí a termínu až po menu. Najčastejšie organizujeme:",
      occasions: [
        {
          title: "Narodeniny",
          desc:
            "Narodeniny pre deti aj dospelých v kruhu rodiny a priateľov. Menu zostavujeme podľa veku hostí a príležitosti — od obeda s tortou po večeru pre blízkych. Počet osôb a priebeh dolaďujeme v dopyte.",
        },
        {
          title: "Výročia",
          desc:
            "Svadobné výročia, jubileá a firemné výročia v pokojnej, teplej atmosfére. Staviame na komornosť a dobré jedlo namiesto hlučnej oslavy — s menu a obsluhou prispôsobenou charakteru stretnutia.",
        },
        {
          title: "Rodinné stretnutia",
          desc:
            "Spoločný obed alebo večera pre celú rodinu — bez príležitosti alebo pri príležitosti. Pripravíme stôl pre niekoľko desiatok osôb, zohľadníme vegetariánske jedlá a informácie o alergiách uvedené vopred.",
        },
        {
          title: "Firemné stretnutia",
          desc:
            "Tímové stretnutia, biznis obedy a coffee breaky. Organizujeme ich v prevádzke alebo ako catering s rozvozom v rámci Varšavy. Formu a čas dolaďujeme podľa denného plánu firmy.",
        },
      ],
    },

    ambianceSection: {
      eyebrow: "Komorne a rodinne",
      title: "Pokojná, rodinná atmosféra namiesto veľkej banketovej sály",
      paragraphs: [
        "Naša sála sa nachádza v budove Atlas Tower na Al. Jerozolimskie 123a. Presné poschodie a pokyny na cestu potvrdíme pri kontakte. Stavili sme na pokojnú, rodinnú atmosféru — namiesto veľkej banketovej sály ponúkame priestor, v ktorom sa hostia dobre počujú a cítia sa ako doma.",
        "Menu zostavujeme podľa typu podujatia a preferencií hostí — zohľadňujeme vegetariánske jedlá a informácie o alergiách uvedené v dopyte.",
        "Špecializujeme sa na komorné oslavy. Presnú kapacitu sály a maximálny počet hostí potvrdíme pri kontakte, pretože závisia od usporiadania stolov a charakteru podujatia.",
      ],
      capacityLabel: "Počet miest v sále:",
      maxGuestsLabel: "Maximálny počet hostí na oslave:",
      largerGroupsLabel: "Väčšie skupiny:",
      largerGroupsTextBefore: "pre väčší počet osôb ponúkame catering s rozvozom —",
      largerGroupsLink: "pozrite cateringovú ponuku",
    },

    processSection: {
      eyebrow: "Ako prebieha organizácia",
      title: "Od dopytu po deň podujatia",
      intro:
        "Organizácia oslavy v KŁOSY prebieha v niekoľkých jednoduchých krokoch — prevedieme vás nimi od prvého kontaktu až po deň podujatia:",
      steps: [
        ["1", "Kontakt", "Pošlete dopyt cez formulár alebo zavoláte."],
        ["2", "Termín", "Potvrdíme dostupnosť vybraného dátumu."],
        ["3", "Menu", "Vyberieme menu podľa typu podujatia a hostí."],
        ["4", "Príprava", "Pripravíme sálu alebo catering."],
        ["5", "Podujatie", "Obslúžime oslavu v deň podujatia."],
      ],
      note:
        "Po odoslaní dopytu reštaurácia potvrdí dostupnosť termínu a pripraví návrh menu.",
      foundationTextBefore: "Reštaurácia funguje pri",
      foundationTextAfter:
        " a zisk podporuje štatutárne ciele Nadácie. Výberom KŁOSY na svoju oslavu zároveň podporujete túto činnosť.",
    },

    photoStripHeading: "Pozrite si naše realizácie",

    related: {
      heading: "Pozrite aj",
      links: [
        {
          href: "/komunie-chrzciny",
          title: "Prijímania a krstiny",
          desc: "Rodinné oslavy prijímania a krstín s menu pre deti aj dospelých.",
        },
        {
          href: "/wesela-rocznice",
          title: "Svadby a výročia",
          desc: "Komorné svadby a jubileá v kruhu najbližších.",
        },
        {
          href: "/catering",
          title: "Catering",
          desc: "Firemný a súkromný catering — v prevádzke alebo s rozvozom v rámci Varšavy.",
        },
      ],
    },

    faqHeading: "Najčastejšie otázky",

    finalCta: {
      title: "Naplánujte si svoju oslavu v KŁOSY",
      text: "Napíšte nám, čo plánujete — odpovieme s návrhom termínu a menu.",
      button: "Odoslať dopyt",
    },

    jsonLd: {
      breadcrumbHome: "Domov",
      breadcrumbCurrent: "Slávnostné podujatia",
      serviceName: "Organizácia slávnostných podujatí — Varšava",
      serviceDescription:
        "Komorné slávnostné podujatia v Restauracja KŁOSY na Al. Jerozolimskie 123a vo Varšave: narodeniny, výročia, rodinné a firemné stretnutia, s menu prispôsobeným hosťom a obsluhou na mieste alebo cateringom s rozvozom.",
    },
  },

  komunie: {
    hero: {
      eyebrow: "Rodinné oslavy vo Varšave",
      title: "Prijímania a krstiny v Restauracja KŁOSY",
      subtitle:
        "Komorná sála v Ochote, pár minút od centra Varšavy. Oslavy po prvom svätom prijímaní a po krste — s menu pre deti aj dospelých a obsluhou na mieste.",
      alt: "Prestretý stôl pripravený na komornú oslavu prvého svätého prijímania v Restauracja KŁOSY",
      ctaLabel: "Opýtať sa na termín",
    },

    facts: [
      { value: "Komorné", label: "Komorné oslavy" },
      { value: "Pre všetkých", label: "Menu pre deti aj dospelých" },
      { value: "Na mieste", label: "Obsluha na mieste" },
      { value: "Ochota", label: "Varšava, Ochota" },
    ],

    charakter: {
      eyebrow: "Charakter miesta",
      title: "Komorné miesto na rodinnú slávnosť",
      alt: "Stôl na prvé sväté prijímanie s balónovou výzdobou v Restauracja KŁOSY",
      p1: "Prvé sväté prijímanie a krstiny sú rodinné slávnosti, nie veľké eventy — a presne tak k nim pristupujeme. KŁOSY sú pokojná, komorná reštaurácia, v ktorej sa pri stole ľahko rozpráva a deti majú miesto byť pri dospelých. Staviame na domácu, poľskú kuchyňu a jednoduchú, teplú atmosféru namiesto hlučnej banketovej sály.",
      p2Before: "Nájdete nás na Al. Jerozolimskie 123a vo varšavskej mestskej časti Ochota, v budove Atlas Tower. Je to dobre dostupná lokalita blízko centra — pohodlná pre hostí prichádzajúcich z rôznych častí Varšavy aj mimo mesta. Presnú cestu a poschodie potvrdíme pri kontakte (",
      p2After: ").",
      p2Fallback: "bude potvrdené",
      p3: "Keďže prijímame obmedzený počet osláv, každej rodine venujeme pozornosť: menu zostavujeme podľa konkrétnej slávnosti a v deň oslavy sa staráme o obsluhu, aby hostitelia mohli byť hosťami u seba. Reštauráciu prevádzkuje Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”, takže každá oslava podporuje aj jej štatutárne ciele.",
    },

    uroczystosci: {
      eyebrow: "Prijímania a krstiny",
      title: "Dve rôzne slávnosti, jedno miesto",
      alt: "Obsluha čašníkom pri stole počas oslavy v Restauracja KŁOSY",
      p1: "Prvé sväté prijímanie je dňom dieťaťa a celej rodiny. Pripravíme obed pri príležitosti prijímania s menu, ktoré chutí deťom aj dospelým, nájdeme miesto na tortu a po omši stačí prísť rovno k nám. Sezóna prijímaní (zvyčajne máj) býva intenzívna, preto je najlepšie pýtať sa na termíny s predstihom.",
      p2: "Krstiny organizujeme po celý rok a zvyčajne v kruhu najbližších — krstní rodičia, starí rodičia, rodina. Často je to pokojnejšie, ešte komornejšie stretnutie. Postaráme sa o tiché, pohodlné miesto, v ktorom sa bábätko aj rodičia cítia dobre, a o menu na pokojný, rodinný obed.",
      bullets: [
        "Obedové menu pre deti aj dospelých, miesto na tortu",
        "Komorné usporiadanie stola pre najbližších",
        "Obsluha, aby rodičia mohli byť s dieťaťom",
      ],
    },

    menu: {
      eyebrow: "Menu",
      title: "Menu pre deti aj dospelých",
      alt: "Komorná reštauračná sála s kvetmi v Restauracja KŁOSY",
      p1: "Na oslave prijímania či krstín sedia pri jednom stole starí rodičia aj malé deti — preto menu zostavujeme dvojkoľajne. Pre dospelých ponúkame domácu, poľskú kuchyňu v obedovej verzii; pre deti vyberáme jednoduchšie a osvedčené jedlá, také, ktoré naozaj zjedia. Zohľadňujeme vegetariánske jedlá aj alergie a neznášanlivosti nahlásené vopred v dopyte.",
      p2: "Konkrétne položky menu a cenovú ponuku pripravujeme individuálne po zistení počtu hostí a charakteru slávnosti — neuvádzame tu pevný cenník ani hotové zostavy, pretože každú oslavu zostavujeme zvlášť. Aktuálny jedálny lístok si môžete stiahnuť aj nižšie.",
      seeMenu: "Pozrieť denné menu",
      pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Stiahnuť menu (PDF)",
      pricingNote:
        "Ceny a dostupnosť: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — určujeme individuálne po dopyte.",
    },

    realizacje: {
      heading: "Pozrite si naše realizácie",
      images: [
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
          alt: "Stôl na prvé sväté prijímanie s kvetinovou girlandou v Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
          alt: "Stôl na prvé sväté prijímanie s balónovou výzdobou v Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
          alt: "Obsluha čašníkom počas oslavy v Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Sladký stôl s koláčmi na rodinnú oslavu",
        },
        {
          src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
          alt: "Pečená kačica — jedlo z domácej, poľskej kuchyne",
        },
      ],
    },

    checklist: {
      title: "Čo sa oplatí pripraviť pred dopytom",
      intro:
        "Čím viac detailov uvediete na začiatku, tým rýchlejšie pripravíme presný návrh menu a termínu. Nemusíte mať všetko dohodnuté — stačia približné informácie.",
      items: [
        "Približný dátum a hodina, kedy sa skončí omša / slávnosť v kostole.",
        "Počet dospelých a počet detí (zvlášť) — ovplyvňuje to usporiadanie menu a sály.",
        "Informácie o alergiách, neznášanlivostiach a potrebe vegetariánskych jedál.",
        "Či zabezpečujete vlastnú tortu, alebo sa o ňu má postarať reštaurácia.",
        "Prípadná výzdoba alebo slávnostné prvky, ktoré chcete priniesť.",
        "Či budú medzi hosťami malé deti vyžadujúce pohodlné, pokojné miesto.",
      ],
    },

    lokalizacja: {
      title: "Dostupnosť a kontakt",
      intro:
        "Restauracja KŁOSY sa nachádza v centre Varšavy, v Ochote — na dobre dostupnom mieste pre hostí z celého mesta a okolia.",
      addressSuffix: "bude potvrdené",
    },

    faq: {
      title: "Prijímania a krstiny — najčastejšie otázky",
    },

    cta: {
      title: "Naplánujme spolu prijímanie alebo krstiny",
      text: "Napíšte, kedy plánujete slávnosť a koľko hostí očakávate — ozveme sa s návrhom termínu a menu. Nezáväzne.",
      sendLabel: "Odoslať dopyt",
      callLabel: "Zavolajte:",
      seeAlso: "Pozrite aj:",
      links: {
        wesela: "Svadby a výročia",
        imprezy: "Slávnostné podujatia",
        catering: "Catering",
        menuDnia: "Denné menu",
      },
    },

    schema: {
      breadcrumbHome: "Domov",
      breadcrumbCurrent: "Prijímania a krstiny",
      serviceName: "Oslavy prvého svätého prijímania a krstín",
      serviceDescription:
        "Organizácia komorných osláv prvého svätého prijímania a krstín v Restauracja KŁOSY vo Varšave — menu pre deti aj dospelých, sála a obsluha na mieste.",
    },
  },

  wesela: {
    hero: {
      alt: "Rustikálna sála pripravená na komornú svadobnú oslavu v Restauracja KŁOSY",
      eyebrow: "Svadby a výročia",
      title: "Komorné svadby a výročia vo Varšave",
      subtitle:
        "Blízky kruh, domáca kuchyňa a pokojná obsluha — bez ruchu sál pre stovky ľudí. Svadobné, výročné a jubilejné oslavy na Al. Jerozolimskie 123a v Ochote.",
      ctaLabel: "Opýtať sa na termín",
    },

    facts: {
      weselaValue: "Komorné svadby",
      weselaLabel: "Pre blízky kruh, jedna oslava v termíne",
      roczniceValue: "Výročia a jubileá",
      roczniceLabel: "Okrúhle výročia, jubileá a stretnutia po rokoch",
      menuValue: "Individuálne menu",
      menuLabel: "Zostavené podľa charakteru oslavy a preferencií hostí",
      pakietyValueAfter: " balíky",
      pakietyLabel: "Návrhy balíkov potvrdíme v odpovedi na dopyt",
    },

    intro: {
      before:
        "Restauracja KŁOSY na Al. Jerozolimskie 123a (Ochota, budova Atlas Tower) organizuje komorné svadby a výročné aj jubilejné oslavy. Staviame na blízky kruh, domácu kuchyňu a pokojnú obsluhu — bez ruchu sál pre stovky ľudí. Reštaurácia funguje pri ",
      after: " a zisk podporuje štatutárne ciele Nadácie.",
    },

    wesele: {
      alt: "Prestretý banketový stôl pripravený na komornú svadbu v Restauracja KŁOSY",
      eyebrow: "Komorná svadba",
      title: "Komorná svadba — pre blízky kruh",
      p1: "Nie každá svadba musí byť veľká oslava. Čoraz viac párov si vyberá komornú formu: najbližšia rodina a priatelia, jedna sála, pokojný priebeh dňa a menu, ktoré naozaj chutí. Takýto formát sadne KŁOSY — varíme na mieste, poznáme každý stôl po mene a nerozptyľujeme sa medzi viacero podujatí naraz.",
      p2: "Komorná svadba sa osvedčí pri civilnom sobáši v okolí, oslave po obrade v úzkom kruhu alebo „druhom dni” v rodinnej atmosfére. Namiesto strnulého scenára si s vami dohodneme priebeh: privítanie, obed, prípitok, dezert a toľko priestoru, koľko potrebujete na rozhovory.",
      p3Before:
        "Počet hostí, usporiadanie sály a hodiny oslavy dolaďujeme individuálne po vašom dopyte. Maximálny počet miest potvrdíme pri kontakte — ",
      p3After: ".",
      points: [
        { t: "Komornosť", d: "Jedna oslava v danom termíne, plná pozornosť obsluhy pre vašich hostí." },
        { t: "Domáca kuchyňa", d: "Jedlá varené na mieste, prispôsobené svadobnému menu a preferenciám hostí." },
        { t: "Blízky kruh", d: "Formát pre rodinu a priateľov, bez hlučnej sály pre stovky ľudí." },
        { t: "Pokojný priebeh", d: "Harmonogram dňa dohodneme spolu s vami — bez zhonu a chaosu." },
      ],
    },

    rocznice: {
      alt: "Komorná sála s kvetinovou výzdobou na výročnú oslavu v Restauracja KŁOSY",
      eyebrow: "Výročia a jubileá",
      title: "Výročia a jubileá",
      p1: "Okrúhle svadobné výročie, jubileum páru, narodeniny seniora rodiny či stretnutie po rokoch — pri výročiach platí, že najdôležitejší sú ľudia pri stole. Preto ich organizujeme tak, aby nikto nemusel pobehovať medzi stánkami: sadnete si a my sa postaráme o zvyšok.",
      listHeading: "Aké výročia organizujeme",
      items: [
        "svadobné výročia a jubileá párov",
        "okrúhle narodeniny a meniny",
        "rodinné stretnutia po rokoch",
        "jubileá a firemné stretnutia v komornom kruhu",
      ],
      p2Before:
        "Každú oslavu oceňujeme a zostavujeme individuálne po dopyte. Hotové svadobné balíky a ukážkové výročné menu: ",
      p2After: " — pripravíme ich v odpovedi na váš dopyt, spolu s návrhom menu a termínu.",
    },

    menu: {
      alt: "Sladký stôl s koláčmi a dezertmi pripravený na oslavu v Restauracja KŁOSY",
      eyebrow: "Menu a personalizácia",
      title: "Individuálne menu na svadbu a výročie",
      p1: "Neponúkame jednu pevnú zostavu. Menu zostavujeme podľa charakteru oslavy, dennej doby a preferencií hostí. Stačí, ak v dopyte napíšete, koľko osôb plánujete a čo očakávate — zvyšok doladíme spoločne.",
      cards: [
        { t: "Prispôsobenie hosťom", d: "Zohľadňujeme vegetariánske jedlá a informácie o alergiách uvedené v dopyte." },
        { t: "Forma oslavy", d: "Sedený obed, servírované jedlá alebo bufetová forma — dohodneme spolu s vami." },
        { t: "Prípitok a dezert", dBefore: "Torta, dezert a sladký stôl na strane reštaurácie alebo vo zvolenej forme. Detaily: ", dAfter: "." },
        { t: "Nápoje", dBefore: "Rozsah nápojov a prípadný servis dolaďujeme individuálne. Detaily a ceny: ", dAfter: "." },
      ],
      noteBefore: "Aktuálne menu a ukážkové návrhy: ",
      noteAfter: ". Ceny balíkov a menu potvrdíme v odpovedi na dopyt.",
    },

    realizacje: {
      heading: "Pozrite si naše realizácie",
      images: [
        { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "Prestretý banketový stôl na oslavu v Restauracja KŁOSY" },
        { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "Rustikálna sála pripravená na komornú oslavu" },
        { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "Sála prestretá na slávnostnú rodinnú oslavu" },
        { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "Sladký stôl s koláčmi a dezertmi" },
        { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle s krevetami — jedlo z menu Restauracja KŁOSY" },
      ],
    },

    kroki: {
      heading: "Ako organizujeme oslavu krok za krokom",
      steps: [
        ["1", "Dopyt", "Pošlete formulár alebo zavoláte — uvediete dátum a počet hostí."],
        ["2", "Termín", "Potvrdíme dostupnosť vybraného dátumu."],
        ["3", "Menu", "Vyberieme menu pre svadbu alebo výročie a preferencie hostí."],
        ["4", "Dohoda", "Spresníme sálu, harmonogram dňa a detaily obsluhy."],
        ["5", "Podujatie", "Obslúžime oslavu v deň slávnosti."],
      ],
      note: "Po odoslaní dopytu reštaurácia potvrdí dostupnosť termínu a pripraví návrh menu a cenovej ponuky.",
    },

    lokalizacja: {
      heading: "Kde sa koná",
      p1Before: "Restauracja KŁOSY sa nachádza na ",
      p1AfterBuilding: " ",
      p1Confirm: "(bude potvrdené)",
      p1End: ". Presnú cestu, parkovanie a dostupnosť poschodia potvrdíme pri kontakte.",
      districtBefore: "(mestská časť ",
      districtAfter: "), v budove ",
    },

    faq: {
      heading: "Najčastejšie otázky o svadbách a výročiach",
    },

    next: {
      heading: "Pozrite aj",
      cards: [
        { href: "/komunie-chrzciny", t: "Prijímania a krstiny", d: "Komorné rodinné oslavy." },
        { href: "/imprezy-okolicznosciowe", t: "Slávnostné podujatia", d: "Narodeniny, stretnutia, jubileá." },
        { href: "/catering", t: "Catering", d: "Firemný a súkromný, aj s rozvozom." },
      ],
    },

    cta: {
      title: "Plánujete komornú svadbu alebo výročie?",
      text: "Napíšte, koľko osôb a aký termín vás zaujíma — odpovieme s návrhom menu a cenovej ponuky.",
      button: "Odoslať dopyt",
    },

    schema: {
      breadcrumbHome: "Domov",
      breadcrumbCurrent: "Svadby a výročia",
      serviceName: "Komorné svadby a výročné oslavy",
      serviceDescription:
        "Organizácia komorných svadieb a výročných aj jubilejných osláv v Restauracja KŁOSY vo Varšave (Al. Jerozolimskie 123a, Ochota). Individuálne menu a obsluha pre blízky kruh.",
    },
  },

  catering: {
    hero: {
      alt: "Cateringový bufet Restauracja KŁOSY — pochutiny caprese pripravené na podanie na firemnom stretnutí",
      eyebrow: "Catering vo Varšave",
      title: "Firemný a súkromný catering — Restauracja KŁOSY",
      subtitle:
        "Domáca, poľská kuchyňa z reštaurácie v Ochote — vo vašej kancelárii, na školení alebo na rodinnom stretnutí. V prevádzke alebo s rozvozom v rámci Varšavy. Firemné objednávky účtujeme faktúrou s DPH.",
      ctaLabel: "Opýtať sa na termín",
    },

    facts: [
      { value: "Catering s rozvozom", label: "V rámci Varšavy" },
      { value: "Firemný a súkromný", label: "Kancelária, školenie, rodinné stretnutie" },
      { value: "Coffee breaky", label: "Káva, čaj a pohostenie" },
      { value: "Faktúra s DPH", label: "Pohodlné účtovanie pre firmy" },
    ],

    intro: {
      alt: "Dezerty a cateringové pochutiny Restauracja KŁOSY naaranžované na podnose",
      eyebrow: "Catering z reštaurácie",
      title: "Catering z reštaurácie, nie z cateringovej fabriky",
      paragraphs: [
        "KŁOSY je fungujúca reštaurácia na Al. Jerozolimskie 123a vo Varšave, v mestskej časti Ochota, v budove Atlas Tower. Catering je predĺžením našej každodennej kuchyne: jedlá, ktoré servírujeme hosťom v prevádzke, pripravujeme aj so sebou a s rozvozom. Vďaka tomu sa na firemné či rodinné stretnutie dostane tá istá domáca, poľská kuchyňa, a nie anonymné porcie z výrobnej linky.",
        "Pokrývame dva hlavné smery. Prvým je firemný catering (B2B): obedy pre tímy, coffee breaky, obsluha školení a konferencií a pravidelné dodávky do kancelárií — všetko s účtovaním na faktúru s DPH. Druhým je súkromný catering: rodinné stretnutia, narodeniny, výročia a komorné slávnosti, na ktoré jedlo dovezieme alebo pripravíme na odber.",
        "Bez ohľadu na rozsah objednávky zostavujeme menu individuálne — podľa počtu osôb, dennej doby a charakteru stretnutia. Zohľadňujeme vegetariánske jedlá a alergie aj neznášanlivosti nahlásené v dopyte. Neuvádzame tu pevný cenník, pretože každú objednávku oceňujeme zvlášť po zistení detailov.",
      ],
    },

    typesSection: {
      title: "Čo pripravíme v rámci cateringu",
      intro:
        "Od jediného coffee breaku po pravidelné obedy pre tím — nižšie nájdete najčastejšie formy cateringu, ktoré realizujeme vo Varšave.",
      types: [
        {
          title: "Firemný catering",
          body: "Pokrývame stretnutia v kanceláriách a firemné podujatia v Ochote a okolí — od pracovných raňajok cez obedy pre tím až po pohostenie na stretnutie s klientom. Účtovanie na faktúru s DPH, s jedným kontaktom na našej strane.",
          points: [
            "Obedy pre tím a stretnutia s klientom",
            "Catering na konferencie a firemné podujatia",
            "Stála spolupráca alebo jednorazová objednávka",
          ],
        },
        {
          title: "Súkromný catering",
          body: "Rodinné stretnutia, narodeniny, výročia a komorné slávnosti — pripravíme domácu, poľskú kuchyňu na vašu oslavu. Catering si vyzdvihnete u nás alebo ho dovezieme na uvedenú adresu vo Varšave.",
          points: [
            "Rodinné stretnutia a narodeniny",
            "Pohostenie na komorné slávnosti",
            "Odber v prevádzke alebo rozvoz na adresu",
          ],
        },
        {
          title: "Catering s rozvozom",
          body: "Nemusíte chodiť po jedlo — catering dovezieme v rámci Varšavy. Oblasť rozvozu, hodinu a spôsob výdaja dolaďujeme pri objednávke, aby jedlá dorazili čerstvé a načas.",
          points: [
            "Rozvoz v rámci Varšavy",
            "Dohodnutá hodina výdaja",
            "Jedlá balené na prepravu",
          ],
        },
        {
          title: "Coffee breaky",
          body: "Coffee break na školenie, workshop alebo zasadnutie vedenia — káva, čaj, voda a drobné pohostenie na slano aj sladko. Rozsah prispôsobíme dĺžke stretnutia a počtu účastníkov.",
          points: [
            "Káva, čaj, voda",
            "Drobné slané a sladké pohostenie",
            "Priebežný coffee break alebo vo vyhradených časoch",
          ],
        },
        {
          title: "Biznis obedy",
          body: "Obed pre tím bez vychádzania z kancelárie — obedové zostavy založené na našom dennom menu, vo forme pohodlnej na podanie. Osvedčí sa pri pravidelnom stravovaní zamestnancov a pri celodenných stretnutiach.",
          points: [
            "Obedové zostavy z denného menu",
            "Vegetariánske možnosti",
            "Forma pohodlná na podanie v kancelárii",
          ],
        },
        {
          title: "Catering na školenia a skupiny",
          body: "Pokrývame školenia, workshopy a skupinové stretnutia — kombinujeme coffee breaky s obedom pre účastníkov. Pripravujeme aj obedy pre skupiny vrátane školských, v dohodnutom počte porcií.",
          points: [
            "Kompletná obsluha školení (prestávka + obed)",
            "Obedy pre skupiny vrátane školských",
            "Pevný počet porcií dohodnutý vopred",
          ],
        },
      ],
    },

    b2bSection: {
      alt: "Croissanty a drobné pečivo na coffee break pripravené Restauracja KŁOSY",
      eyebrow: "Pre firmy",
      title: "Firemný catering s faktúrou s DPH",
      lead:
        "Pre firmy má byť catering predovšetkým pohodlný a predvídateľný. Preto biznis objednávky vedieme s jedným kontaktom na našej strane, účtujeme faktúrou s DPH a pokrývame jednorazové podujatia aj opakované dodávky do kancelárie.",
      points: [
        {
          title: "Faktúra s DPH",
          body: "Každú firemnú objednávku účtujeme faktúrou s DPH — pohodlne pre účtovníctvo a pri pravidelnej spolupráci.",
        },
        {
          title: "Jeden kontakt",
          body: "Na našej strane vás vedie jedna osoba: od dohodnutia menu cez termín až po výdaj a vyúčtovanie objednávky.",
        },
        {
          title: "Pravidelné objednávky",
          body: "Pokrývame jednorazové podujatia aj stále, opakované dodávky — napr. pravidelné obedy pre tím.",
        },
        {
          title: "Podpora Nadácie",
          body: "Objednávkou u nás podporujete aj štatutárne ciele Nadácie „Człowiek w Potrzebie” — argument dôležitý pre mnohé firmy.",
        },
      ],
      note:
        "Údaje na faktúru (IČ DPH, názov firmy, adresa) získavame pri potvrdení objednávky. Minimálne hodnoty objednávky a oblasť rozvozu: [DO UZUPEŁNIENIA: minimalne zamówienie cateringu firmowego / strefa dostawy] — určujeme pri dopyte.",
    },

    groupsSection: {
      alt: "Sladký stôl s koláčmi pripravený Restauracja KŁOSY",
      eyebrow: "Organizované skupiny",
      title: "Obedy pre skupiny vrátane školských",
      paragraphs: [
        "Pripravujeme obedy pre organizované skupiny — výlety, školské skupiny, účastníkov školení a workshopov. Počet porcií dohodneme vopred, takže každý účastník dostane teplé, sýte jedlo bez radov a čakania.",
        "Pre školské skupiny vyberáme jednoduchšie a osvedčené jedlá a v prípade potreby pripravíme vegetariánske verzie a zohľadníme nahlásené alergie. Catering pre skupiny môžeme realizovať na mieste v reštaurácii alebo doviezť na dohodnuté miesto v rámci Varšavy.",
      ],
      note:
        "Ceny zostáv pre skupiny: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] — určujeme individuálne po uvedení počtu osôb.",
    },

    menuSection: {
      title: "Cateringové menu a cenová ponuka",
      intro:
        "Cateringové menu staviame na našom každodennom jedálnom lístku a na dennom menu — vo verzii prispôsobenej na podanie mimo reštaurácie. Konkrétne zostavy a cenovú ponuku pripravujeme individuálne, po zistení počtu osôb, charakteru stretnutia a formy výdaja (odber alebo rozvoz). Aktuálny jedálny lístok si môžete pozrieť a stiahnuť nižšie:",
      menuDniaLink: "Pozrieť denné menu",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Stiahnuť menu (PDF)",
      note:
        "Ceny a cateringové balíky: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — určujeme individuálne po dopyte.",
    },

    processSection: {
      title: "Ako objednať catering — krok za krokom",
      intro: "Proces je jednoduchý: štyri kroky od prvého dopytu po výdaj objednávky.",
      steps: [
        {
          title: "1. Dopyt",
          body: "Pošlete dopyt cez formulár alebo zavoláte. Uvediete typ cateringu (firemný / súkromný), dátum, počet osôb a to, či má byť odber u nás, alebo s rozvozom.",
        },
        {
          title: "2. Návrh menu a cenová ponuka",
          body: "Zostavíme návrh menu podľa vašich potrieb a pripravíme cenovú ponuku. Zohľadňujeme vegetariánske jedlá a alergie aj neznášanlivosti nahlásené v dopyte.",
        },
        {
          title: "3. Potvrdenie",
          body: "Potvrdíme detaily: hodinu výdaja alebo rozvozu, počet porcií a formu účtovania. Pre firmy štandardne vystavujeme faktúru s DPH.",
        },
        {
          title: "4. Realizácia",
          body: "V dohodnutom termíne pripravíme objednávku na odber v prevádzke alebo ju dovezieme na uvedenú adresu vo Varšave.",
        },
      ],
    },

    checklistSection: {
      title: "Čo sa oplatí uviesť v dopyte na catering",
      intro:
        "Čím viac detailov uvediete na začiatku, tým rýchlejšie pripravíme presný návrh menu a cenovú ponuku. Stačia približné informácie.",
      items: [
        "Typ cateringu: firemný či súkromný — a či je potrebná faktúra s DPH.",
        "Dátum a hodina výdaja alebo rozvozu, prípadne časy coffee breakov.",
        "Počet osôb a forma: odber v prevádzke či rozvoz na adresu.",
        "Charakter stretnutia: obed, coffee break, školenie, obed pre skupinu.",
        "Informácie o alergiách, neznášanlivostiach a potrebe vegetariánskych jedál.",
        "Či je objednávka jednorazová, alebo má byť opakovaná (napr. pravidelné obedy).",
      ],
    },

    photoStrip: {
      heading: "Pozrite si naše realizácie",
      images: [
        {
          src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
          alt: "Cateringový bufet s pochutinami caprese pripravený Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-croissanty.webp",
          alt: "Croissanty a drobné pečivo na coffee break",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.webp",
          alt: "Dezerty a cateringové pochutiny naaranžované na podnose",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Sladký stôl s koláčmi od Restauracja KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp",
          alt: "Ovsené dezerty podané na podnose",
        },
      ],
    },

    locationSection: {
      title: "Odkiaľ rozvážame a kontakt",
      intro:
        "Catering pripravujeme v našej reštaurácii v Ochote a rozvážame v rámci Varšavy. Je to dobre dostupné miesto, blízko centra — pohodlné pri dodávkach do kancelárií a na stretnutia v rôznych častiach mesta.",
      buildingSuffix: "bude potvrdené",
      note:
        "Oblasť a cena rozvozu: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] — potvrdíme pri objednávke.",
    },

    faqHeading: "Catering — najčastejšie otázky",

    finalCta: {
      title: "Objednajme spolu catering",
      text:
        "Napíšte, na kedy a pre koľko osôb potrebujete catering a či má byť s rozvozom — ozveme sa s návrhom menu a cenovou ponukou. Pre firmy štandardne vystavujeme faktúru s DPH.",
      sendButton: "Odoslať dopyt",
      callPrefix: "Zavolajte:",
      relatedLabel: "Pozrite aj:",
      related: [
        { href: "/menu-dnia", label: "Denné menu" },
        { href: "/imprezy-okolicznosciowe", label: "Slávnostné podujatia" },
        { href: "/komunie-chrzciny", label: "Prijímania a krstiny" },
        { href: "/wesela-rocznice", label: "Svadby a výročia" },
      ],
    },

    jsonLd: {
      breadcrumbHome: "Domov",
      breadcrumbCurrent: "Catering",
      serviceName: "Firemný a súkromný catering vo Varšave",
      serviceDescription:
        "Catering v Restauracja KŁOSY vo Varšave — firemný a súkromný, v prevádzke alebo s rozvozom: biznis obedy, coffee breaky, catering na školenia a obedy pre školské skupiny. Účtovanie faktúrou s DPH.",
    },
  },

  galeria: {
    page: {
      eyebrow: "Restauracja KŁOSY · Varšava",
      title: "Galéria",
      intro:
        "Skôr než si rezervujete stôl, obed pre skupinu alebo rodinnú oslavu, pozrite si, ako vyzerá naše miesto na Al. Jerozolimskie 123a v centre Varšavy. Nižšie nájdete fotografie sály, prestretých stolov a ukážkových jedál z poľskej kuchyne. Materiály priebežne dopĺňame — ak niečo hľadáte, napíšte alebo zavolajte a pošleme viac.",
      ctaLabel: "Opýtať sa na termín alebo cenu",
    },

    breadcrumbs: {
      home: "Domov",
      current: "Galéria",
    },

    section: {
      title: "Galéria",
      intro:
        "Nahliadnite k nám skôr, než prídete — sála, stoly a ukážkové jedlá. Fotografie priebežne dopĺňame.",
      filtersAriaLabel: "Filtre galérie",
      all: "Všetko",
      empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
      zoomLabel: "Zväčšiť fotografiu:",
      closeLabel: "Zavrieť galériu",
      prevLabel: "Predchádzajúca fotografia",
      nextLabel: "Nasledujúca fotografia",
    },

    categories: {
      Jedzenie: "Jedlo",
      Sala: "Sála",
      Komunie: "Prijímania",
      Catering: "Catering",
      Dekoracje: "Dekorácie",
      "Na wynos": "So sebou",
    },

    alts: {
      "jedzenie-pierogi":
        "Pirohy s čučoriedkami a smotanou v Restauracja KŁOSY vo Varšave, poľská kuchyňa",
      "jedzenie-kaczka":
        "Pečená kačica s červenou kapustou — poľská kuchyňa v Restauracja KŁOSY vo Varšave",
      "jedzenie-golonka":
        "Domáci obed v KŁOSY Varšava: pečené koleno, polievka a dezert",
      "jedzenie-pieczen":
        "Domáci obed — pečené mäso s vajcom, zemiakmi a šalátmi v Restauracja KŁOSY vo Varšave",
      "jedzenie-kurczak":
        "Domáce obedy v Restauracja KŁOSY vo Varšave — kuracie mäso a cestoviny v omáčke",
      "jedzenie-tagliatelle":
        "Tagliatelle s krevetami v Restauracja KŁOSY vo Varšave, sezónne jedlo",
      "sala-bufet":
        "Jedáleň Restauracja KŁOSY vo Varšave s obedovým bufetom a bielymi stolíkmi",
      "sala-nakryta":
        "Komorná sála Restauracja KŁOSY vo Varšave prestretá na rodinnú oslavu",
      "sala-kameralna":
        "Komorná sála Restauracja KŁOSY vo Varšave prestretá na rodinný obed",
      "sala-lampy":
        "Interiér Restauracja KŁOSY vo Varšave — sála s bufetom a atmosférickým osvetlením",
      "komunie-balony":
        "Stôl prestretý na oslavu prvého svätého prijímania v Restauracja KŁOSY vo Varšave",
      "komunie-girlanda":
        "Prestretý stôl na prvé sväté prijímanie s pochutinami v Restauracja KŁOSY vo Varšave",
      "komunie-obsluga":
        "Obsluha čašníkom pri stole na prvé sväté prijímanie v Restauracja KŁOSY vo Varšave",
      "catering-caprese":
        "Cateringový bufet KŁOSY Varšava s pochutinami caprese, chlebíčkami a dezertmi",
      "catering-croissanty":
        "Cateringový stôl KŁOSY vo Varšave s mini croissantmi a pochutinami",
      "catering-desery":
        "Sladký a chuťovkový cateringový stôl Restauracja KŁOSY vo Varšave",
      "catering-ciasta":
        "Sladký cateringový stôl — koláče s jahodami v Restauracja KŁOSY vo Varšave",
      "dekoracje-bankiet":
        "Banketový stôl prestretý na rodinnú oslavu v Restauracja KŁOSY vo Varšave",
      "dekoracje-rustykalna":
        "Rustikálna sála na prijímania a oslavy v Restauracja KŁOSY vo Varšave",
      "wynos-desery-taca":
        "Ovsené dezerty s ovocím so sebou v Restauracja KŁOSY vo Varšave",
      "wynos-owsianka":
        "Ovsená kaša s jahodami v pohári so sebou, Restauracja KŁOSY Varšava",
      "wynos-czekolada":
        "Vrstvený dezert s čokoládou a višňami so sebou, KŁOSY Varšava",
      "wynos-dwa-kubki":
        "Dezertné ovsené kaše so sebou v útulnom interiéri Restauracja KŁOSY vo Varšave",
    },
  },

  polityka: {
    breadcrumb: {
      home: "Domov",
      current: "Zásady ochrany osobných údajov",
    },

    formEmail: "marketing@restauracjadifferent.pl",

    heading: "Zásady ochrany osobných údajov",
    intro:
      "Záleží nám na vašom súkromí. Nižšie vysvetľujeme, aké údaje zhromažďujeme prostredníctvom stránky Restauracja KŁOSY, na aký účel a na akom základe, a aké máte práva.",

    administrator: {
      heading: "1. Správca údajov",
      leadBefore:
        "Správcom osobných údajov je subjekt prevádzkujúci Restauracja KŁOSY, so sídlom na ",
      todo:
        "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
      foundationBefore: "Reštaurácia funguje pri ",
      foundationKrs: "KRS",
    },

    sections: [
      {
        heading: "2. Aké údaje zhromažďujeme",
        paragraphs: [
          "Údaje zhromažďujeme výlučne vtedy, keď nám ich dobrovoľne pošlete cez kontaktný formulár (alebo mini-konfigurátor oslavy). Sú to: meno a priezvisko, telefónne číslo, e-mailová adresa a informácie o plánovanom podujatí, ktoré sami uvediete (typ podujatia, dátum, počet hostí, miesto, preferencie menu, alergie, obsah správy).",
        ],
      },
    ],

    purpose: {
      heading: "3. Účel a právny základ",
      items: [
        "Vybavenie vášho dopytu, spätný kontakt a príprava návrhu (termínu, menu, cenovej ponuky) — základ: čl. 6 ods. 1 písm. b a písm. f GDPR (úkony na žiadosť osoby a oprávnený záujem správcu).",
        "Udelený súhlas s kontaktom — čl. 6 ods. 1 písm. a GDPR (môžete ho kedykoľvek odvolať bez vplyvu na zákonnosť skoršieho spracúvania).",
      ],
    },

    recipients: {
      heading: "4. Príjemcovia údajov",
      before: "Dopyty z formulára prichádzajú na adresu ",
      after:
        ". Údaje môžu spracúvať dôveryhodní poskytovatelia IT služieb podporujúci obsluhu formulára a pošty (napr. poskytovateľ služby odosielania formulára, hosting pošty), výlučne v rozsahu nevyhnutnom na dosiahnutie uvedených účelov.",
    },

    policies: [
      {
        heading: "5. Doba uchovávania",
        paragraphs: [
          "Údaje uchovávame po dobu nevyhnutnú na vybavenie dopytu a prípadnú realizáciu služby a následne po dobu vyplývajúcu z právnych predpisov alebo do odvolania súhlasu / podania účinnej námietky.",
        ],
      },
      {
        heading: "6. Vaše práva",
        paragraphs: [
          "Máte právo na: prístup k údajom, ich opravu, vymazanie, obmedzenie spracúvania, prenosnosť údajov, podanie námietky a odvolanie súhlasu. Máte tiež právo podať sťažnosť dozornému úradu na ochranu osobných údajov.",
        ],
      },
      {
        heading: "7. Súbory cookie",
        paragraphs: [
          "Stránka používa nevyhnutné súbory cookie a — po udelení súhlasu v banneri — analytické/marketingové cookie. Súhlas môžete zmeniť alebo odvolať vymazaním údajov stránky v prehliadači. Štatistiky zbierame v súlade s vaším výberom (Consent Mode).",
        ],
      },
    ],

    contact: {
      heading: "8. Kontakt vo veci údajov",
      before: "Vo veciach týkajúcich sa osobných údajov píšte na ",
      between: " alebo na všeobecnú adresu ",
      after: ".",
    },

    back: "← Späť na domovskú stránku",
  },
};
