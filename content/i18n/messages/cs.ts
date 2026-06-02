/**
 * Słownik CS (čeština) — tłumaczenie z kanonicznego PL.
 * Kształt identyczny jak `pl` (typ Dictionary). Tłumaczone są wyłącznie wartości
 * tekstowe; ścieżki (href/image), nazwy ikon lucide, id, klucze map, nazwy własne
 * oraz placeholdery [DO UZUPEŁNIENIA] i {step}/{total} pozostają bez zmian.
 */
import type { Dictionary } from "@/content/i18n";

export const cs: Dictionary = {
  common: {
    brand: "KŁOSY",
    brandFull: "Restauracja KŁOSY",
    ogImageAlt: "Útulný interiér Restauracji KŁOSY ve Varšavě s teplým jantarovým světlem lamp",
    skipToContent: "Přejít k obsahu",

    nav: {
      ariaLabel: "Hlavní navigace",
      openMenu: "Otevřít menu",
      closeMenu: "Zavřít menu",
      links: [
        { key: "home", href: "/", label: "Úvodní stránka", short: "Úvod" },
        { key: "menu", href: "/menu-dnia", label: "Denní menu", short: "Menu" },
        { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Příležitostné oslavy", short: "Oslavy" },
        { key: "komunie", href: "/komunie-chrzciny", label: "Svatá přijímání a křtiny", short: "Přijímání" },
        { key: "wesela", href: "/wesela-rocznice", label: "Svatby a výročí", short: "Svatby" },
        { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
        { key: "galeria", href: "/galeria", label: "Galerie", short: "Galerie" },
        { key: "kontakt", href: "/kontakt", label: "Kontakt", short: "Kontakt" },
      ],
    },

    langSwitcher: {
      label: "Změnit jazyk",
      current: "Jazyk",
    },

    cta: {
      reserve: "Zeptat se na termín",
      sendInquiry: "Odeslat poptávku",
      call: "Zavolejte",
      write: "Napište",
      ask: "Zeptat se na termín",
      seeOffer: "Zobrazit nabídku",
      seeMenu: "Zobrazit denní menu",
      backHome: "Zpět na úvodní stránku",
    },

    mobileCta: {
      call: "Zavolat",
      write: "Napsat",
      ask: "Poptávka",
    },

    footer: {
      tagline: "Domácí kuchyně, catering a komorní rodinné oslavy v centru Varšavy.",
      navHeading: "Navigace",
      contactHeading: "Kontakt",
      foundationNote:
        "Restauraci provozuje Fundacja Pomocy Rodzinie „Człowiek w Potrzebie” — zisk podporuje statutární cíle nadace.",
      copyright: "Všechna práva vyhrazena.",
      madeBy: "Realizace:",
      privacy: "Zásady ochrany osobních údajů",
    },

    cookie: {
      text:
        "Používáme soubory cookies pro statistické a marketingové účely. Můžete přijmout všechny, nebo používat pouze nezbytné.",
      accept: "Přijímám",
      reject: "Pouze nezbytné",
      privacyLink: "Zásady ochrany osobních údajů",
      ariaLabel: "Informace o souborech cookies",
    },
  },

  meta: {
    home: {
      title: "Restauracja KŁOSY Varšava | Obědy, catering a rodinné oslavy",
      description:
        "Restauracja KŁOSY na Al. Jerozolimskie 123a ve Varšavě — domácí obědy, catering a komorní oslavy: svatá přijímání, křtiny, svatby, výročí a firemní setkání.",
      ogDescription:
        "Domácí kuchyně a rodinné oslavy v centru Varšavy. Zeptejte se na termín svatého přijímání, křtin, svatby nebo cateringu.",
    },
    menuDnia: {
      title: "Denní menu a domácí obědy ve Varšavě",
      description:
        "Domácí obědy a denní menu v Restauracji KŁOSY na Al. Jerozolimskie ve Varšavě. Polská kuchyně, vegetariánské varianty, obědy pro skupiny a catering s rozvozem.",
      ogDescription: "Domácí obědy a denní menu v centru Varšavy. Polská kuchyně, vegetariánské varianty, obědy pro skupiny.",
    },
    imprezy: {
      title: "Příležitostné oslavy ve Varšavě",
      description:
        "Komorní příležitostné oslavy v Restauracji KŁOSY ve Varšavě: narozeniny, jubilea, výročí a rodinná setkání. Individuální menu a obsluha na místě.",
      ogDescription: "Komorní příležitostné oslavy v centru Varšavy — narozeniny, jubilea, výročí.",
    },
    komunie: {
      title: "Svatá přijímání a křtiny ve Varšavě | Komorní rodinné oslavy",
      description:
        "Oslavy svatého přijímání a křtin v Restauracji KŁOSY ve Varšavě. Menu pro děti i dospělé, obsluha na místě, pomoc s organizací. Zeptejte se na volný termín.",
      ogDescription: "Oslavy svatého přijímání a křtin v centru Varšavy — menu pro děti i dospělé, obsluha na místě.",
    },
    wesela: {
      title: "Komorní svatby a výročí ve Varšavě",
      description:
        "Komorní svatby, jubilea a výročí v Restauracji KŁOSY ve Varšavě. Vřelé, přirozené prostředí, individuální menu a organizační podpora.",
      ogDescription: "Komorní svatby a výročí v centru Varšavy — přirozené prostředí, individuální menu.",
    },
    catering: {
      title: "Catering Varšava — firemní i soukromý | Restauracja KŁOSY",
      description:
        "Firemní a soukromý catering ve Varšavě: coffee breaky, byznys obědy, soukromé akce — na místě nebo s rozvozem. Faktura s DPH. Vyžádejte si cenovou nabídku.",
      ogDescription: "Firemní a soukromý catering ve Varšavě — coffee breaky, byznys obědy, s rozvozem.",
    },
    galeria: {
      title: "Galerie — interiér, jídla a oslavy",
      description:
        "Galerie Restauracji KŁOSY ve Varšavě: interiér, domácí jídla, aranžmá stolů na svatá přijímání a oslavy a cateringová nabídka.",
      ogDescription: "Prohlédněte si interiér, jídla a aranžmá oslav v Restauracji KŁOSY ve Varšavě.",
    },
    kontakt: {
      title: "Kontakt | Restauracja KŁOSY, Al. Jerozolimskie 123a",
      description:
        "Spojte se s Restauracją KŁOSY ve Varšavě (Al. Jerozolimskie 123a). Zeptejte se na termín oslavy, catering nebo oběd pro skupinu přes formulář nebo telefonicky.",
      ogDescription: "Spojte se s Restauracją KŁOSY ve Varšavě — poptávkový formulář, telefon, příjezd.",
    },
    polityka: {
      title: "Zásady ochrany osobních údajů",
      description: "Zásady ochrany osobních údajů webu Restauracji KŁOSY ve Varšavě — pravidla zpracování údajů a používání souborů cookies.",
      ogDescription: "Pravidla zpracování údajů a používání souborů cookies na webu Restauracji KŁOSY.",
    },
  },

  home: {
    hero: {
      badge: "Varšava · Al. Jerozolimskie 123a",
      titleBefore: "Domácí ",
      titleHighlight: "kuchyně",
      titleAfter: " a rodinné oslavy v srdci Varšavy",
      subtitle:
        "Obědy, catering a komorní oslavy — svatá přijímání, křtiny, svatby, výročí a firemní setkání. Řekněte nám, co plánujete, a připravíme návrh menu.",
      ctaAsk: "Zeptat se na termín",
      ctaSeeOffer: "Zobrazit nabídku",
      scrollAria: "Přejít k nabídce",
    },

    about: {
      heading: "Restauracja KŁOSY v několika slovech",
      paragraph1Before:
        "Jsme restaurace s domácí kuchyní na Al. Jerozolimskie 123a ve Varšavě (Atlas Tower). Vaříme obědy na místě, zajišťujeme catering a pořádáme komorní rodinné oslavy. Restauraci provozuje ",
      paragraph1After:
        " a zisk podporuje statutární cíle nadace.",
      paragraph2:
        "Nepořádáme bujaré akce pro stovky lidí — sázíme na komorní atmosféru, dobré jídlo a klidnou obsluhu pro rodiny, přátele a týmy.",
      tiles: [
        { title: "Obědy", desc: "denní menu a pro skupiny" },
        { title: "Catering", desc: "firemní i soukromý" },
        { title: "Přijímání", desc: "a křtiny" },
        { title: "Svatby", desc: "komorní a výročí" },
      ],
    },

    process: {
      heading: "Jak probíhá organizace oslavy?",
      steps: [
        { n: "1", title: "Kontakt", desc: "Odešlete poptávku přes formulář nebo zavoláte." },
        { n: "2", title: "Termín", desc: "Potvrdíme dostupnost zvoleného data." },
        { n: "3", title: "Menu", desc: "Vybereme menu podle typu akce a hostů." },
        { n: "4", title: "Příprava", desc: "Připravíme sál nebo catering." },
        { n: "5", title: "Akce", desc: "Postaráme se o oslavu v den akce." },
      ],
      note: "Po odeslání poptávky restaurace potvrdí dostupnost termínu a připraví návrh menu.",
    },

    finalCta: {
      heading: "Naplánujte si oslavu v KŁOSACH",
      text: "Napište nám, co plánujete — odpovíme s návrhem termínu a menu.",
      button: "Odeslat poptávku",
    },
  },

  offers: {
    heading: "Co pro vás můžeme zorganizovat?",
    intro:
      "Vyberte typ akce — ukážeme rozsah, výhody a další krok. Detaily a menu domlouváme individuálně po vaší poptávce.",
    tablistAria: "Nabídka",
    tabs: [
      {
        id: "obiady",
        label: "Obědy a denní menu",
        heading: "Domácí obědy a denní menu v centru Varšavy",
        description:
          "Každodenní obědy připravované na místě — polská kuchyně, sezónní suroviny, denní menu pro jednotlivce i skupiny. Skvělé místo na oběd v okolí Al. Jerozolimskie a čtvrti Ochota.",
        benefits: ["Čerstvé denní menu", "Vegetariánské varianty", "Obědy pro skupiny", "Catering s rozvozem"],
        ctaLabel: "Zobrazit denní menu",
        href: "/menu-dnia",
        image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
        imageAlt: "Domácí oběd v Restauracji KŁOSY ve Varšavě: pečené koleno, polévka a dezert",
      },
      {
        id: "komunie-chrzciny",
        label: "Svatá přijímání a křtiny",
        heading: "Oslavy svatého přijímání a křtin",
        description:
          "Komorní rodinné oslavy s menu uzpůsobeným dětem i dospělým a s obsluhou na místě. Termín a detaily domlouváme individuálně.",
        benefits: ["Menu pro děti i dospělé", "Sál na výhradní užití (po potvrzení)", "Obsluha číšníků", "Pomoc s organizací"],
        ctaLabel: "Zeptat se na přijímání / křtiny",
        href: "/komunie-chrzciny",
        image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
        imageAlt: "Aranžmá stolu na svaté přijímání s občerstvením v Restauracji KŁOSY ve Varšavě",
      },
      {
        id: "wesela",
        label: "Komorní svatby",
        heading: "Komorní svatby a výročí",
        description:
          "Svatba v nejbližším kruhu, jubilea a výročí — ve vřelém, přirozeném prostředí. Menu a počet hostů domlouváme pro konkrétní akci.",
        benefits: ["Komorní atmosféra", "Individuální menu", "Přírodní dekorace", "Organizační podpora"],
        ctaLabel: "Zeptat se na svatbu / výročí",
        href: "/wesela-rocznice",
        image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
        imageAlt: "Banketní stůl prostřený na komorní oslavu v Restauracji KŁOSY ve Varšavě",
      },
      {
        id: "rodzinne",
        label: "Výročí a rodinná setkání",
        heading: "Výročí, narozeniny a rodinná setkání",
        description:
          "Společný oběd nebo večeře pro rodinu, narozeniny, jubilea — bez organizačního stresu, s menu na přání.",
        benefits: ["Menu na přání", "Místo pro rodinu", "Obsluha na místě", "Flexibilní časy"],
        ctaLabel: "Naplánovat setkání",
        href: "/imprezy-okolicznosciowe",
        image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
        imageAlt: "Komorní sál Restauracji KŁOSY ve Varšavě prostřený na rodinné setkání",
      },
      {
        id: "catering",
        label: "Firemní a soukromý catering",
        heading: "Firemní a soukromý catering ve Varšavě",
        description:
          "Catering na firemní setkání, školení a soukromé akce — na místě nebo s rozvozem. Rozsah a formu domlouváme na základě poptávky.",
        benefits: ["Catering s rozvozem", "Coffee breaky", "Byznys obědy", "Faktura s DPH"],
        ctaLabel: "Zeptat se na catering",
        href: "/catering",
        image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
        imageAlt: "Cateringový bufet KŁOSY ve Varšavě s občerstvením caprese, chlebíčky a dezerty",
      },
      {
        id: "grupy",
        label: "Obědy pro školní skupiny",
        heading: "Obědy pro skupiny, včetně školních",
        description:
          "Připravujeme obědy pro skupiny — výlety, školní a organizované skupiny. Kontaktujte nás prosím kvůli upřesnění počtu osob a menu.",
        benefits: ["Menu pro skupiny", "Svižná obsluha", "Flexibilní termíny", "Přizpůsobení dietám"],
        ctaLabel: "Zeptat se na oběd pro skupinu",
        href: "/catering",
        image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
        imageAlt: "Domácí obědy pro skupiny v Restauracji KŁOSY ve Varšavě — kuře a těstoviny v omáčce",
      },
    ],
  },

  faq: {
    heading: "Nejčastější dotazy",
    items: [
      {
        q: "Lze v Restauracji KŁOSY uspořádat svaté přijímání?",
        a: "Ano. Restauracja KŁOSY ve Varšavě (Al. Jerozolimskie 123a) pořádá oslavy svatého přijímání — s menu uzpůsobeným hostům a obsluhou na místě. Termín a detaily domlouváme individuálně po poptávce.",
      },
      {
        q: "Hodí se podnik na křtiny?",
        a: "Ano, pořádáme komorní oslavy křtin. Po zaslání poptávky potvrdíme dostupnost termínu a připravíme návrh menu.",
      },
      {
        q: "Lze uspořádat komorní svatbu?",
        a: "Ano. KŁOSY se specializují na komorní rodinné oslavy, včetně komorních svateb a výročí. Počet hostů a menu domlouváme individuálně.",
      },
      {
        q: "Nabízí restaurace catering s rozvozem?",
        a: "Ano, zajišťujeme catering — firemní i soukromý, na místě nebo s rozvozem po Varšavě. Rozsah a formu domlouváme na základě poptávky.",
      },
      {
        q: "Lze objednat obědy pro školní skupiny?",
        a: "Ano, připravujeme obědy pro skupiny, včetně školních. Kontaktujte nás prosím kvůli upřesnění počtu osob a menu.",
      },
      {
        q: "Kde se nachází Restauracja KŁOSY?",
        a: "Na Al. Jerozolimskie 123a ve Varšavě (čtvrť Ochota), v budově Atlas Tower. Přesné patro a příjezd potvrdíme v rámci kontaktu.",
      },
      {
        q: "Jak se zeptat na volný termín?",
        a: "Nejrychleji přes poptávkový formulář na webu nebo telefonicky. Po odeslání poptávky potvrdíme dostupnost termínu a připravíme návrh menu.",
      },
      {
        q: "Lze menu přizpůsobit hostům?",
        a: "Ano. Menu sestavujeme podle typu akce a preferencí hostů — zohledníme mj. vegetariánská jídla a informace o alergiích uvedené v poptávce.",
      },
    ],
  },

  configurator: {
    heading: "Naplánujte si oslavu",
    intro:
      "V několika krocích shromáždíme nejdůležitější informace o vaší akci. Na konci je předáme do kontaktního formuláře — ozveme se s návrhem.",

    progress: {
      stepLabel: "Krok {step} z {total}",
      barAria: "Průběh konfigurátoru oslavy",
    },

    stepTitles: [
      "Jaký druh oslavy plánujete?",
      "Kolik hostů očekáváte?",
      "Kde se má konat?",
      "Jaký termín zvažujete?",
      "Shrnutí",
    ],

    dateHint: "Termín je orientační — dostupnost potvrdíme společně.",

    summary: {
      eventType: "Druh oslavy",
      guests: "Počet hostů",
      place: "Místo",
      preferredDate: "Preferovaný termín",
      dateTbd: "Bude upřesněno",
      empty: "—",
      submit: "Odeslat poptávku oslavy",
    },

    nav: {
      back: "Zpět",
      next: "Dále",
    },

    footnote:
      "Po odeslání poptávky restaurace potvrdí dostupnost termínu a připraví návrh menu.",

    eventTypes: [
      { id: "komunia", label: "Svaté přijímání", icon: "Sparkles", blurb: "Komorní oslava svatého přijímání s menu pro děti i dospělé." },
      { id: "chrzest", label: "Křtiny", icon: "Baby", blurb: "Klidná, rodinná oslava křtin v elegantním sále." },
      { id: "wesele-kameralne", label: "Komorní svatba", icon: "Heart", blurb: "Svatba v nejbližším kruhu — bez okázalosti, se stylem." },
      { id: "rocznica", label: "Výročí", icon: "Gift", blurb: "Jubileum, výročí svatby nebo firemní výročí — ve vřelém prostředí." },
      { id: "urodziny", label: "Narozeniny", icon: "Cake", blurb: "Narozeniny pro rodinu a přátele, s menu na přání." },
      { id: "spotkanie-rodzinne", label: "Rodinné setkání", icon: "Users", blurb: "Společný oběd nebo večeře pro celou rodinu." },
      { id: "spotkanie-firmowe", label: "Firemní setkání", icon: "Briefcase", blurb: "Týmová setkání, coffee breaky, byznys obědy." },
      { id: "catering", label: "Catering", icon: "Truck", blurb: "Firemní a soukromý catering — na místě nebo s rozvozem." },
      { id: "obiad-grupa", label: "Oběd pro skupinu", icon: "UtensilsCrossed", blurb: "Obědy pro skupiny, včetně školních." },
    ],

    guestRanges: ["10–20", "21–35", "36–50", "50+", "catering — větší počet osob"],

    places: ["Na místě", "Catering s rozvozem", "Bude upřesněno"],
  },

  forms: {
    lead: {
      ariaLabel: "Poptávkový formulář k akci",
      honeypotLabel: "Toto pole nevyplňujte",
      requiredMark: "*",
      optionalSuffix: "(volitelné)",
      selectPlaceholder: "Vyberte…",
      requiredHint: "jsou povinná.",
      requiredHintPrefix: "Pole označená",

      fields: {
        imieNazwisko: {
          label: "Jméno a příjmení",
        },
        telefon: {
          label: "Telefon",
        },
        email: {
          label: "E-mail",
        },
        typWydarzenia: {
          label: "Typ akce",
        },
        data: {
          label: "Preferované datum",
        },
        liczbaGosci: {
          label: "Počet hostů",
        },
        miejsce: {
          label: "Místo",
        },
        budzet: {
          label: "Orientační rozpočet",
          placeholder: "např. do 5000 zł / na osobu",
        },
        preferencjeMenu: {
          label: "Preference menu",
          placeholder: "např. menu pro děti, vegetariánská jídla",
        },
        alergie: {
          label: "Alergie / dietní požadavky",
          placeholder: "např. bezlepkové, bez ořechů",
        },
        wiadomosc: {
          label: "Doplňující informace",
          placeholder: "Řekněte nám o své akci — co potřebujete?",
        },
      },

      eventTypeOptions: [
        { value: "komunia", label: "Svaté přijímání" },
        { value: "chrzest", label: "Křtiny" },
        { value: "wesele-kameralne", label: "Komorní svatba" },
        { value: "rocznica", label: "Výročí" },
        { value: "urodziny", label: "Narozeniny" },
        { value: "spotkanie-rodzinne", label: "Rodinné setkání" },
        { value: "spotkanie-firmowe", label: "Firemní setkání" },
        { value: "catering", label: "Catering" },
        { value: "obiad-grupa", label: "Oběd pro skupinu" },
        { value: "inne", label: "Jiné" },
      ],

      guestRangeOptions: [
        { value: "10–20", label: "10–20" },
        { value: "21–35", label: "21–35" },
        { value: "36–50", label: "36–50" },
        { value: "50+", label: "50+" },
        {
          value: "catering — większa liczba osób",
          label: "catering — větší počet osob",
        },
      ],

      placeOptions: [
        { value: "W lokalu", label: "Na místě" },
        { value: "Catering z dostawą", label: "Catering s rozvozem" },
        { value: "Do ustalenia", label: "Bude upřesněno" },
      ],

      consents: {
        heading: "",
        kontakt: {
          text: "Souhlasím s kontaktováním telefonicky nebo e-mailem za účelem projednání mé poptávky.",
        },
        rodo: {
          before: "Seznámil(a) jsem se se",
          linkText: "zásadami ochrany osobních údajů",
          after: "a souhlasím se zpracováním svých údajů za účelem vyřízení poptávky.",
        },
      },

      submit: {
        idle: "Odeslat poptávku",
        loading: "Odesílání…",
      },

      validation: {
        imieNazwiskoRequired: "Zadejte jméno a příjmení.",
        imieNazwiskoMin: "Zadejte jméno a příjmení (min. 2 znaky).",
        telefonRequired: "Zadejte telefonní číslo.",
        telefonMin: "Zadejte telefonní číslo (min. 9 číslic).",
        telefonInvalid: "Zadejte platné polské telefonní číslo.",
        emailRequired: "Zadejte e-mailovou adresu.",
        emailInvalid: "Zadejte platnou e-mailovou adresu.",
        typWydarzeniaRequired: "Vyberte typ akce.",
        liczbaGosciRequired: "Vyberte přibližný počet hostů.",
        miejsceRequired: "Vyberte místo konání akce.",
        zgodaKontaktRequired: "Souhlas s kontaktováním je povinný.",
        zgodaRodoRequired: "Souhlas se zpracováním údajů je povinný.",
      },

      success: {
        heading: "Děkujeme za poptávku!",
        bodyBefore:
          "Ozveme se vám co nejdříve, abychom probrali detaily vaší akce. Pokud je věc naléhavá, zavolejte nám prosím:",
        again: "Odeslat další poptávku",
      },

      errors: {
        noEndpoint:
          "Formulář zatím není napojen na příjem poptávek. Kontaktujte nás prosím telefonicky nebo e-mailem. (Konfigurace: NEXT_PUBLIC_WEB3FORMS_KEY nebo NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
        http: "Poptávku se nepodařilo odeslat. Zkuste to znovu nebo nám zavolejte.",
        network: "Došlo k chybě připojení. Zkontrolujte internet a zkuste to znovu.",
      },

      mail: {
        subjectPrefix: "Poptávka z webu KŁOSY —",
        fromNamePrefix: "Restauracja KŁOSY — formulář",
      },
    },
  },

  kontakt: {
    breadcrumb: {
      home: "Úvodní stránka",
      current: "Kontakt",
    },

    hero: {
      eyebrow: "Restauracja KŁOSY ve Varšavě",
      heading: "Kontakt",
      lead:
        "Chcete se zeptat na termín oslavy, objednat catering nebo uspořádat oběd pro skupinu? Zavolejte, napište e-mail nebo vyplňte formulář — odpovídáme konkrétně a nezávazně. Najdete nás na Al. Jerozolimskie 123a ve varšavské čtvrti Ochota, pár minut od centra.",
      callPrefix: "Zavolejte:",
      toForm: "Přejít k formuláři",
    },

    nap: {
      heading: "Kontaktní údaje",
      intro:
        "Nejrychleji se s námi spojíte telefonicky nebo e-mailem. Pokud chcete, popište svou akci v formuláři níže — zavoláme nebo odepíšeme zpět.",
      addressLabel: "Adresa",
      buildingSuffix: "— bude upřesněno",
      districtLabel: "Čtvrť:",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      hoursLabel: "Otevírací doba",
      hoursPlaceholder: "[DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]",
      socialHeading: "Najdete nás také zde",
      facebook: "Facebook",
      instagram: "Instagram",
      instagramPlaceholder: "[DO UZUPEŁNIENIA: Instagram]",
      pyszne: "Pyszne.pl",
      pysznePlaceholder: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
      glovo: "Glovo",
      glovoPlaceholder: "[DO UZUPEŁNIENIA: link Glovo]",
    },

    map: {
      heading: "Příjezd",
      intro:
        "Nacházíme se na dobře dostupném místě ve Varšavě, na Al. Jerozolimskie. Přesný vchod a patro v budově Atlas Tower potvrdíme v rámci kontaktu.",
      imgAlt:
        "Poloha Restauracji KŁOSY na Al. Jerozolimskie 123a ve Varšavě",
      placeholder:
        "[DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]",
      directions: "Naplánovat trasu v Google Maps",
      directionsPlaceholder: "[DO UZUPEŁNIENIA: link Google Maps]",
    },

    form: {
      heading: "Zeptejte se na termín, catering nebo oslavu",
      intro:
        "Popište, co plánujete — typ akce, přibližné datum a počet hostů. Čím více detailů uvedete, tím přesnější návrh menu a termínu připravíme. Volitelná pole (rozpočet, preference menu, alergie) nám pomáhají, ale nejsou povinná.",
    },

    faq: {
      heading: "Kontakt a poptávky — nejčastější dotazy",
    },

    cta: {
      heading: "Nevíte, kde začít?",
      body:
        "Zavolejte — v pár větách nám řekněte, co plánujete, a my poradíme, co se osvědčí a jaké informace budeme potřebovat, abychom připravili návrh.",
      callPrefix: "Zavolejte:",
      write: "Napsat e-mail",
      seeAlso: "Podívejte se také na:",
      links: {
        menuDnia: "Denní menu",
        komunie: "Svatá přijímání a křtiny",
        wesela: "Svatby a výročí",
        imprezy: "Příležitostné oslavy",
        catering: "Catering",
      },
    },
  },

  menuDnia: {
    hero: {
      alt: "Domácí oběd v Restauracji KŁOSY: koleno, polévka a dezert",
      eyebrow: "Denní menu • Varšava, Ochota",
      title: "Denní menu a polská kuchyně v centru Varšavy",
      subtitle:
        "Každodenní domácí obědy — polévky, hlavní jídla a vegetariánské nabídky — na Al. Jerozolimskie 123a ve Varšavě (Atlas Tower, Ochota). Na běžný oběd v práci, lunch s přáteli i větší objednávky pro skupiny.",
      ctaLabel: "Zeptat se na termín",
    },

    breadcrumbs: {
      ariaLabel: "Drobečková navigace",
      home: "Úvodní stránka",
      current: "Denní menu",
    },

    facts: [
      { value: "Denní menu", label: "denně čerstvé" },
      { value: "Polská kuchyně", label: "domácí obědy" },
      { value: "Obědy pro skupiny", label: "na místě nebo s rozvozem" },
      { value: "Rozvoz", label: "po Varšavě" },
    ],

    about: {
      alt: "Pečená kachna — hlavní jídlo z domácí kuchyně Restauracji KŁOSY",
      eyebrow: "Co je u nás denní menu",
      title: "Domácí obědy bez zbytečností",
      p1: "Denní menu je obědové menu připravované čerstvě a průběžně — domácí kuchyně bez zbytečností: hřejivá polévka, sytné hlavní jídlo a vegetariánská varianta. Sázíme na jednoduché, dobré jídlo, jaké znáte z domova, podávané v klidu a beze spěchu. Přesné složení menu se každý den mění.",
      p2Before:
        "Aktuální jídelní lístek a denní menu potvrzujeme telefonicky nebo na místě — ceny i konkrétní položky sdělujeme v rámci kontaktu, aby informace vždy odpovídala tomu, co daný den skutečně vaříme. Restauraci provozuje ",
      p2After: " a zisk podporuje její statutární cíle.",
      points: [
        "Oběd v pracovní přestávce (okolí Atlas Tower)",
        "Lunch s přáteli nebo rodinou",
        "Každodenní teplé jídlo na místě",
        "Větší obědové objednávky pro skupiny",
      ],
    },

    groups: {
      alt: "Oběd: kuře s těstovinami — nabídka pro skupiny v Restauracji KŁOSY",
      eyebrow: "Obědy pro skupiny",
      title: "Oběd pro tým, třídu i rodinu",
      p1: "Připravujeme obědy pro skupiny — také pro školní skupiny, firemní týmy a rodinná setkání. Menu volíme podle počtu osob a preferencí, zohledňujeme vegetariánská jídla i informace o alergiích uvedené předem v poptávce.",
      p2: "Počet porcí, formu výdeje (na místě nebo s rozvozem) a termín domlouváme individuálně. Stačí napsat, kolik je hostů a na kdy oběd potřebujete — pošleme návrh menu a potvrdíme dostupnost.",
      points: [
        "• Menu uzpůsobené skupině (včetně vegetariánských variant)",
        "• Obědy pro školní skupiny a firemní týmy",
        "• Výdej na místě nebo s rozvozem po Varšavě",
      ],
      ctaLabel: "Zeptat se na obědy pro skupinu",
    },

    delivery: {
      alt: "Tagliatelle s krevetami — jídlo z jídelního lístku Restauracji KŁOSY",
      eyebrow: "Oběd s rozvozem",
      title: "Oběd z denního menu s rozvozem ve Varšavě",
      lead: "Oběd z denního menu si můžete objednat s rozvozem — přes oblíbené rozvozové platformy. Dostupnost jídel, časy a oblast rozvozu potvrzujeme přímo; níže najdete odkazy pro objednání online.",
      pyszneLabel: "Objednat na Pyszne.pl",
      pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
      glovoLabel: "Objednat na Glovo",
      glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
      cateringBefore: "Chcete větší, individuální objednávku? Podívejte se na ",
      cateringLink: "cateringovou nabídku",
      cateringAfter: " — firemní a soukromý catering připravujeme na základě poptávky.",
    },

    menu: {
      title: "Co najdete na jídelním lístku",
      intro:
        "Níže najdete kategorie našeho jídelního lístku. Konkrétní položky a ceny doplňujeme podle aktuálního menu restaurace — do té doby je sdělujeme telefonicky nebo na místě.",
      pdfLabel: "Stáhnout menu (PDF)",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
    },

    realizacje: {
      heading: "Podívejte se na naše realizace",
      images: [
        { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Pirohy s borůvkami z domácí kuchyně Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Oběd: pečeně se zeleninovými saláty v Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "Tác ovesných dezertů v Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Ovesná kaše s jahodami v Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Čokoládový dezert s višněmi v Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Dva kelímky ovesné kaše v Restauracji KŁOSY" },
      ],
    },

    faq: {
      heading: "Nejčastější dotazy k obědům",
    },

    next: {
      heading: "Podívejte se také",
      cards: [
        { href: "/catering", label: "Catering", desc: "Firemní a soukromý, na místě nebo s rozvozem." },
        { href: "/imprezy-okolicznosciowe", label: "Příležitostné oslavy", desc: "Komorní oslavy a setkání." },
        { href: "/kontakt", label: "Kontakt", desc: "Zeptejte se na termín, menu a obědy pro skupiny." },
      ],
    },

    cta: {
      title: "Objednejte obědy nebo se zeptejte na denní menu",
      text: "Napište, kolik je hostů a na kdy — připravíme návrh a potvrdíme termín.",
      button: "Odeslat poptávku",
    },

    schema: {
      serviceName: "Denní menu a domácí obědy — Varšava",
      serviceDescription:
        "Každodenní domácí obědy (denní menu), polská kuchyně, obědy pro skupiny a rozvoz ve Varšavě. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
    },
  },

  imprezy: {
    hero: {
      eyebrow: "Restauracja KŁOSY · Varšava, Ochota",
      title: "Příležitostné oslavy ve Varšavě",
      subtitle:
        "Komorní narozeniny, výročí a rodinná i firemní setkání na Al. Jerozolimskie 123a — s domácí kuchyní a klidnou obsluhou, bez bujarých akcí pro stovky lidí.",
      ctaLabel: "Zeptat se na termín",
    },

    facts: [
      { value: "Rodinné oslavy", label: "Narozeniny, výročí, setkání" },
      { value: "Firemní setkání", label: "Obědy a coffee breaky" },
      { value: "Menu na přání", label: "Uzpůsobené hostům" },
      { value: "Centrum Varšavy", label: "Ochota, Al. Jerozolimskie 123a" },
    ],

    occasionsSection: {
      eyebrow: "Jaké oslavy pořádáme",
      title: "Příležitosti, které připravujeme v KŁOSACH",
      intro:
        "Každou oslavu domlouváme individuálně — od počtu hostů a termínu po menu. Nejčastěji pořádáme:",
      occasions: [
        {
          title: "Narozeniny",
          desc:
            "Narozeniny pro děti i dospělé v kruhu rodiny a přátel. Menu sestavujeme podle věku hostů a příležitosti — od oběda s dortem po večeři pro blízké. Počet osob a průběh domlouváme v poptávce.",
        },
        {
          title: "Výročí",
          desc:
            "Výročí svatby, jubilea a firemní výročí v klidném, vřelém prostředí. Sázíme na komorní atmosféru a dobré jídlo místo bujaré akce — s menu a obsluhou uzpůsobenou charakteru setkání.",
        },
        {
          title: "Rodinná setkání",
          desc:
            "Společný oběd nebo večeře pro celou rodinu — bez příležitosti nebo u příležitosti. Připravíme stůl pro několik desítek osob, zohledníme vegetariánská jídla a informace o alergiích uvedené předem.",
        },
        {
          title: "Firemní setkání",
          desc:
            "Týmová setkání, byznys obědy a coffee breaky. Pořádáme je na místě nebo jako catering s rozvozem po Varšavě. Formu a čas domlouváme podle denního plánu firmy.",
        },
      ],
    },

    ambianceSection: {
      eyebrow: "Komorně a rodinně",
      title: "Klidná, rodinná atmosféra místo velkého banketního sálu",
      paragraphs: [
        "Náš sál se nachází v budově Atlas Tower na Al. Jerozolimskie 123a. Přesné patro a pokyny k příjezdu potvrzujeme v rámci kontaktu. Vsadili jsme na klidnou, rodinnou atmosféru — místo velkého banketního sálu nabízíme prostor, kde se hosté dobře slyší a cítí se jako doma.",
        "Menu sestavujeme podle typu akce a preferencí hostů — zohledňujeme vegetariánská jídla a informace o alergiích uvedené v poptávce.",
        "Specializujeme se na komorní oslavy. Přesnou kapacitu sálu a maximální počet hostů potvrzujeme v rámci kontaktu, protože závisí na uspořádání stolů a charakteru akce.",
      ],
      capacityLabel: "Počet míst v sále:",
      maxGuestsLabel: "Maximální počet hostů na oslavě:",
      largerGroupsLabel: "Větší skupiny:",
      largerGroupsTextBefore: "pro větší počet osob nabízíme catering s rozvozem —",
      largerGroupsLink: "zobrazit nabídku cateringu",
    },

    processSection: {
      eyebrow: "Jak probíhá organizace",
      title: "Od poptávky po den akce",
      intro:
        "Organizace oslavy v KŁOSACH probíhá v několika jednoduchých krocích — provedeme vás jimi od prvního kontaktu až po den akce:",
      steps: [
        ["1", "Kontakt", "Odešlete poptávku přes formulář nebo zavoláte."],
        ["2", "Termín", "Potvrdíme dostupnost zvoleného data."],
        ["3", "Menu", "Vybereme menu podle typu akce a hostů."],
        ["4", "Příprava", "Připravíme sál nebo catering."],
        ["5", "Akce", "Postaráme se o oslavu v den akce."],
      ],
      note:
        "Po odeslání poptávky restaurace potvrdí dostupnost termínu a připraví návrh menu.",
      foundationTextBefore: "Restauraci provozuje",
      foundationTextAfter:
        " a zisk podporuje statutární cíle nadace. Volbou KŁOSY pro svou oslavu zároveň podporujete tuto činnost.",
    },

    photoStripHeading: "Podívejte se na naše realizace",

    related: {
      heading: "Podívejte se také",
      links: [
        {
          href: "/komunie-chrzciny",
          title: "Svatá přijímání a křtiny",
          desc: "Rodinné oslavy svatého přijímání a křtin s menu pro děti i dospělé.",
        },
        {
          href: "/wesela-rocznice",
          title: "Svatby a výročí",
          desc: "Komorní svatby a jubilea v nejbližším kruhu.",
        },
        {
          href: "/catering",
          title: "Catering",
          desc: "Firemní a soukromý catering — na místě nebo s rozvozem po Varšavě.",
        },
      ],
    },

    faqHeading: "Nejčastější dotazy",

    finalCta: {
      title: "Naplánujte si svou oslavu v KŁOSACH",
      text: "Napište nám, co plánujete — odpovíme s návrhem termínu a menu.",
      button: "Odeslat poptávku",
    },

    jsonLd: {
      breadcrumbHome: "Úvodní stránka",
      breadcrumbCurrent: "Příležitostné oslavy",
      serviceName: "Organizace příležitostných oslav — Varšava",
      serviceDescription:
        "Komorní příležitostné oslavy v Restauracji KŁOSY na Al. Jerozolimskie 123a ve Varšavě: narozeniny, výročí, rodinná a firemní setkání, s menu uzpůsobeným hostům a obsluhou na místě nebo cateringem s rozvozem.",
    },
  },

  komunie: {
    hero: {
      eyebrow: "Rodinné oslavy ve Varšavě",
      title: "Svatá přijímání a křtiny v Restauracji KŁOSY",
      subtitle:
        "Komorní sál na Ochotě, pár minut od centra Varšavy. Oslavy po prvním svatém přijímání a po křtu — s menu pro děti i dospělé a obsluhou na místě.",
      alt: "Prostřený stůl připravený na komorní oslavu svatého přijímání v Restauracji KŁOSY",
      ctaLabel: "Zeptat se na termín",
    },

    facts: [
      { value: "Komorní", label: "Komorní oslavy" },
      { value: "Pro všechny", label: "Menu pro děti i dospělé" },
      { value: "Na místě", label: "Obsluha na místě" },
      { value: "Ochota", label: "Varšava, Ochota" },
    ],

    charakter: {
      eyebrow: "Charakter místa",
      title: "Komorní místo pro rodinnou slavnost",
      alt: "Stůl k svatému přijímání s balonkovou dekorací v Restauracji KŁOSY",
      p1: "Svaté přijímání a křtiny jsou rodinné slavnosti, ne velké akce — a přesně tak k nim přistupujeme. KŁOSY jsou klidná, komorní restaurace, kde se snadno povídá u stolu a děti mají místo, aby mohly být vedle dospělých. Sázíme na domácí, polskou kuchyni a jednoduché, vřelé prostředí místo hlučného banketního sálu.",
      p2Before: "Najdete nás na Al. Jerozolimskie 123a ve varšavské čtvrti Ochota, v budově Atlas Tower. Je to dobře dostupná lokalita blízko centra — pohodlná pro hosty přijíždějící z různých částí Varšavy i odjinud. Přesný příjezd a patro potvrzujeme v rámci kontaktu (",
      p2After: ").",
      p2Fallback: "bude upřesněno",
      p3: "Protože přijímáme omezený počet oslav, věnujeme každé rodině pozornost: menu sestavujeme pro konkrétní slavnost a v den oslavy dbáme na obsluhu, aby hostitelé mohli být hosty u sebe. Restauraci provozuje Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”, takže každá oslava podporuje i její statutární cíle.",
    },

    uroczystosci: {
      eyebrow: "Svatá přijímání a křtiny",
      title: "Dvě různé slavnosti, jedno místo",
      alt: "Obsluha číšníků u stolu během oslavy v Restauracji KŁOSY",
      p1: "První svaté přijímání je dnem dítěte i celé rodiny. Připravíme oběd k přijímání s menu, které chutná dětem i dospělým, najdeme místo na dort a po mši stačí přijít rovnou k nám. Sezona svatých přijímání (obvykle květen) bývá náročná, proto je nejlepší ptát se na termíny s předstihem.",
      p2: "Křtiny pořádáme po celý rok a obvykle v nejbližším kruhu — kmotři, prarodiče, rodina. Bývá to klidnější, ještě komornější setkání. Postaráme se o tiché, pohodlné místo, kde se miminko i rodiče cítí dobře, a o menu na klidný, rodinný oběd.",
      bullets: [
        "Obědové menu pro děti i dospělé, místo na dort",
        "Komorní uspořádání stolu pro nejbližší",
        "Obsluha, aby rodiče mohli být s dítětem",
      ],
    },

    menu: {
      eyebrow: "Menu",
      title: "Menu pro děti i pro dospělé",
      alt: "Komorní restaurační sál s květinami v Restauracji KŁOSY",
      p1: "Na oslavě svatého přijímání či křtin sedí u jednoho stolu prarodiče i pár let staré děti — proto menu sestavujeme dvoukolejně. Dospělým nabízíme domácí, polskou kuchyni v obědové verzi; pro děti vybíráme jednodušší a osvědčená jídla, taková, která opravdu snědí. Zohledňujeme vegetariánská jídla i alergie a intolerance nahlášené předem v poptávce.",
      p2: "Konkrétní položky menu a cenovou nabídku připravujeme individuálně po zjištění počtu hostů a charakteru slavnosti — nezveřejňujeme zde pevný ceník ani hotové sety, protože každou oslavu sestavujeme zvlášť. Aktuální jídelní lístek si také můžete stáhnout níže.",
      seeMenu: "Zobrazit denní menu",
      pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Stáhnout menu (PDF)",
      pricingNote:
        "Ceny a dostupnost: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — domlouvané individuálně po poptávce.",
    },

    realizacje: {
      heading: "Podívejte se na naše realizace",
      images: [
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
          alt: "Stůl k svatému přijímání s květinovou girlandou v Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
          alt: "Stůl k svatému přijímání s balonkovou dekorací v Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
          alt: "Obsluha číšníků během oslavy v Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Sladký stůl s koláči na rodinnou oslavu",
        },
        {
          src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
          alt: "Pečená kachna — jídlo z domácí, polské kuchyně",
        },
      ],
    },

    checklist: {
      title: "Co se vyplatí připravit před poptávkou",
      intro:
        "Čím více detailů uvedete na začátku, tím rychleji připravíme přesný návrh menu a termínu. Nemusíte mít vše domyšlené — stačí přibližné informace.",
      items: [
        "Přibližné datum a hodina, kdy skončí mše / slavnost v kostele.",
        "Počet dospělých a počet dětí (zvlášť) — to ovlivňuje sestavení menu i sálu.",
        "Informace o alergiích, intolerancích a potřebě vegetariánských jídel.",
        "Zda zajišťujete vlastní dort, nebo se o něj má postarat restaurace.",
        "Případné dekorace nebo slavnostní prvky, které chcete přinést.",
        "Zda budou mezi hosty malé děti vyžadující pohodlné, klidné místo.",
      ],
    },

    lokalizacja: {
      title: "Příjezd a kontakt",
      intro:
        "Restauracja KŁOSY se nachází v centru Varšavy, na Ochotě — na dobře dostupném místě pro hosty z celého města i okolí.",
      addressSuffix: "bude upřesněno",
    },

    faq: {
      title: "Svatá přijímání a křtiny — nejčastější dotazy",
    },

    cta: {
      title: "Naplánujme společně svaté přijímání nebo křtiny",
      text: "Napište, kdy slavnost plánujete a kolik hostů očekáváte — ozveme se s návrhem termínu a menu. Nezávazně.",
      sendLabel: "Odeslat poptávku",
      callLabel: "Zavolejte:",
      seeAlso: "Podívejte se také na:",
      links: {
        wesela: "Svatby a výročí",
        imprezy: "Příležitostné oslavy",
        catering: "Catering",
        menuDnia: "Denní menu",
      },
    },

    schema: {
      breadcrumbHome: "Úvodní stránka",
      breadcrumbCurrent: "Svatá přijímání a křtiny",
      serviceName: "Oslavy svatého přijímání a křtin",
      serviceDescription:
        "Organizace komorních oslav svatého přijímání a křtin v Restauracji KŁOSY ve Varšavě — menu pro děti i dospělé, sál a obsluha na místě.",
    },
  },

  wesela: {
    hero: {
      alt: "Rustikální sál připravený na komorní svatební oslavu v Restauracji KŁOSY",
      eyebrow: "Svatby a výročí",
      title: "Komorní svatby a výročí ve Varšavě",
      subtitle:
        "Blízký kruh, domácí kuchyně a klidná obsluha — bez hluku sálů pro stovky lidí. Svatební, výroční a jubilejní oslavy na Al. Jerozolimskie 123a na Ochotě.",
      ctaLabel: "Zeptat se na termín",
    },

    facts: {
      weselaValue: "Komorní svatby",
      weselaLabel: "Pro blízký kruh, jedna oslava v termínu",
      roczniceValue: "Výročí a jubilea",
      roczniceLabel: "Kulatá výročí, jubilea a setkání po letech",
      menuValue: "Individuální menu",
      menuLabel: "Sestavené podle charakteru oslavy a preferencí hostů",
      pakietyValueAfter: " balíčky",
      pakietyLabel: "Návrhy balíčků potvrzujeme v reakci na poptávku",
    },

    intro: {
      before:
        "Restauracja KŁOSY na Al. Jerozolimskie 123a (Ochota, budova Atlas Tower) pořádá komorní svatby a výroční i jubilejní oslavy. Sázíme na blízký kruh, domácí kuchyni a klidnou obsluhu — bez hluku sálů pro stovky lidí. Restauraci provozuje ",
      after: " a zisk podporuje statutární cíle nadace.",
    },

    wesele: {
      alt: "Prostřený banketní stůl připravený na komorní svatbu v Restauracji KŁOSY",
      eyebrow: "Komorní svatba",
      title: "Komorní svatba — pro blízký kruh",
      p1: "Ne každá svatba musí být velkou akcí. Stále více párů volí komorní formu: nejbližší rodina a přátelé, jeden sál, klidný průběh dne a menu, které opravdu chutná. Takový formát se hodí ke KŁOSŮM — vaříme na místě, známe každý stůl jménem a nerozptylujeme se na několik akcí najednou.",
      p2: "Komorní svatba se osvědčí při civilním obřadu v okolí, oslavě po obřadu v úzkém kruhu nebo „druhém dni“ v rodinné atmosféře. Místo strnulého scénáře s vámi domluvíme průběh: přivítání, oběd, přípitek, dezert a tolik prostoru, kolik potřebujete na rozhovory.",
      p3Before:
        "Počet hostů, uspořádání sálu a časy oslavy domlouváme individuálně po vaší poptávce. Maximální počet míst potvrzujeme v rámci kontaktu — ",
      p3After: ".",
      points: [
        { t: "Komorní atmosféra", d: "Jedna oslava v daném termínu, plná pozornost obsluhy pro vaše hosty." },
        { t: "Domácí kuchyně", d: "Jídla vařená na místě, uzpůsobená svatebnímu menu a preferencím hostů." },
        { t: "Blízký kruh", d: "Formát pro rodinu a přátele, bez bujarého sálu pro stovky lidí." },
        { t: "Klidný průběh", d: "Harmonogram dne ladíme společně s vámi — beze spěchu a chaosu." },
      ],
    },

    rocznice: {
      alt: "Komorní sál s květinovou dekorací na výroční oslavu v Restauracji KŁOSY",
      eyebrow: "Výročí a jubilea",
      title: "Výročí a jubilea",
      p1: "Kulaté výročí svatby, jubileum páru, narozeniny seniora rodiny nebo setkání po letech — výročí mají společné to, že nejdůležitější jsou lidé u stolu. Proto je pořádáme tak, aby nikdo nemusel pobíhat mezi stánky: usednete a my se postaráme o zbytek.",
      listHeading: "Jaká výročí pořádáme",
      items: [
        "výročí svatby a jubilea párů",
        "kulaté narozeniny a svátky",
        "rodinná setkání po letech",
        "jubilea a firemní setkání v komorním kruhu",
      ],
      p2Before:
        "Každou oslavu oceňujeme a sestavujeme individuálně po poptávce. Hotové svatební balíčky a ukázková výroční menu: ",
      p2After: " — připravíme je v reakci na vaši poptávku, spolu s návrhem menu a termínu.",
    },

    menu: {
      alt: "Sladký stůl s koláči a dezerty připravený na oslavu v Restauracji KŁOSY",
      eyebrow: "Menu a personalizace",
      title: "Individuální menu na svatbu a výročí",
      p1: "Nepodáváme jeden pevný set. Menu sestavujeme podle charakteru oslavy, denní doby a preferencí hostů. Stačí, když v poptávce napíšete, kolik osob plánujete a co očekáváte — zbytek doladíme společně.",
      cards: [
        { t: "Přizpůsobení hostům", d: "Zohledňujeme vegetariánská jídla a informace o alergiích uvedené v poptávce." },
        { t: "Forma oslavy", d: "Zasedaný oběd, servírovaná jídla nebo bufetová forma — domlouváme společně s vámi." },
        { t: "Přípitek a dezert", dBefore: "Dort, dezert a sladký stůl v režii restaurace nebo ve zvolené formě. Detaily: ", dAfter: "." },
        { t: "Nápoje", dBefore: "Rozsah nápojů a případný servis domlouváme individuálně. Detaily a ceny: ", dAfter: "." },
      ],
      noteBefore: "Aktuální menu a ukázkové návrhy: ",
      noteAfter: ". Ceny balíčků a menu potvrzujeme v reakci na poptávku.",
    },

    realizacje: {
      heading: "Podívejte se na naše realizace",
      images: [
        { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "Prostřený banketní stůl na oslavu v Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "Rustikální sál připravený na komorní oslavu" },
        { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "Sál prostřený na slavnostní rodinnou oslavu" },
        { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "Sladký stůl s koláči a dezerty" },
        { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle s krevetami — jídlo z menu Restauracji KŁOSY" },
      ],
    },

    kroki: {
      heading: "Jak pořádáme oslavu krok za krokem",
      steps: [
        ["1", "Poptávka", "Odešlete formulář nebo zavoláte — uvedete datum a počet hostů."],
        ["2", "Termín", "Potvrdíme dostupnost zvoleného data."],
        ["3", "Menu", "Vybereme menu na svatbu nebo výročí a preference hostů."],
        ["4", "Domluva", "Upřesníme sál, harmonogram dne a detaily obsluhy."],
        ["5", "Akce", "Postaráme se o oslavu v den slavnosti."],
      ],
      note: "Po odeslání poptávky restaurace potvrdí dostupnost termínu a připraví návrh menu i cenové nabídky.",
    },

    lokalizacja: {
      heading: "Kde se koná",
      p1Before: "Restauracja KŁOSY se nachází na ",
      p1AfterBuilding: " ",
      p1Confirm: "(bude upřesněno)",
      p1End: ". Přesný příjezd, parkování a dostupnost patra potvrzujeme v rámci kontaktu.",
      districtBefore: "(čtvrť ",
      districtAfter: "), v budově ",
    },

    faq: {
      heading: "Nejčastější dotazy ke svatbám a výročím",
    },

    next: {
      heading: "Podívejte se také",
      cards: [
        { href: "/komunie-chrzciny", t: "Svatá přijímání a křtiny", d: "Komorní rodinné oslavy." },
        { href: "/imprezy-okolicznosciowe", t: "Příležitostné oslavy", d: "Narozeniny, setkání, jubilea." },
        { href: "/catering", t: "Catering", d: "Firemní a soukromý, také s rozvozem." },
      ],
    },

    cta: {
      title: "Plánujete komorní svatbu nebo výročí?",
      text: "Napište, kolik osob a jaký termín vás zajímá — odpovíme s návrhem menu a cenové nabídky.",
      button: "Odeslat poptávku",
    },

    schema: {
      breadcrumbHome: "Úvodní stránka",
      breadcrumbCurrent: "Svatby a výročí",
      serviceName: "Komorní svatby a výroční oslavy",
      serviceDescription:
        "Organizace komorních svateb a výročních i jubilejních oslav v Restauracji KŁOSY ve Varšavě (Al. Jerozolimskie 123a, Ochota). Individuální menu a obsluha pro blízký kruh.",
    },
  },

  catering: {
    hero: {
      alt: "Cateringový bufet Restauracji KŁOSY — občerstvení caprese připravené k podávání na firemním setkání",
      eyebrow: "Catering ve Varšavě",
      title: "Firemní a soukromý catering — Restauracja KŁOSY",
      subtitle:
        "Domácí, polská kuchyně z restaurace na Ochotě — ve vaší kanceláři, na školení nebo na rodinném setkání. Na místě nebo s rozvozem po Varšavě. Firemní objednávky účtujeme fakturou s DPH.",
      ctaLabel: "Zeptat se na termín",
    },

    facts: [
      { value: "Catering s rozvozem", label: "Po Varšavě" },
      { value: "Firemní a soukromý", label: "Kancelář, školení, rodinné setkání" },
      { value: "Coffee breaky", label: "Káva, čaj a občerstvení" },
      { value: "Faktura s DPH", label: "Pohodlné vyúčtování pro firmy" },
    ],

    intro: {
      alt: "Dezerty a cateringové občerstvení Restauracji KŁOSY naaranžované na tácu",
      eyebrow: "Catering z restaurace",
      title: "Catering z restaurace, ne z cateringové továrny",
      paragraphs: [
        "KŁOSY jsou fungující restaurace na Al. Jerozolimskie 123a ve Varšavě, ve čtvrti Ochota, v budově Atlas Tower. Catering je prodloužením naší každodenní kuchyně: jídla, která servírujeme hostům na místě, připravujeme také s sebou a s rozvozem. Díky tomu se na firemní nebo rodinné setkání dostane stejná domácí, polská kuchyně, a ne anonymní porce z výrobní linky.",
        "Obsluhujeme dva hlavní směry. Prvním je firemní catering (B2B): obědy pro týmy, coffee breaky, obsluha školení a konferencí a pravidelné rozvozy do kanceláří — vše s vyúčtováním na fakturu s DPH. Druhým je soukromý catering: rodinná setkání, narozeniny, výročí a komorní slavnosti, na které jídlo dovezeme nebo připravíme k odběru.",
        "Bez ohledu na rozsah objednávky sestavujeme menu individuálně — podle počtu osob, denní doby a charakteru setkání. Zohledňujeme vegetariánská jídla i alergie a intolerance nahlášené v poptávce. Nezveřejňujeme zde pevný ceník, protože každou objednávku oceňujeme zvlášť po zjištění detailů.",
      ],
    },

    typesSection: {
      title: "Co připravíme v rámci cateringu",
      intro:
        "Od jednotlivého coffee breaku po pravidelné obědy pro tým — níže najdete nejčastější formy cateringu, které ve Varšavě realizujeme.",
      types: [
        {
          title: "Firemní catering",
          body: "Obsluhujeme setkání v kancelářích a firemní akce na Ochotě a v okolí — od pracovních snídaní přes obědy pro tým po občerstvení na setkání s klientem. Vyúčtování na fakturu s DPH, s jedním kontaktem na naší straně.",
          points: [
            "Obědy pro tým a setkání s klientem",
            "Catering na konference a firemní akce",
            "Stálá spolupráce nebo jednorázová objednávka",
          ],
        },
        {
          title: "Soukromý catering",
          body: "Rodinná setkání, narozeniny, výročí a komorní slavnosti — připravíme domácí, polskou kuchyni na vaši oslavu. Catering si vyzvednete u nás nebo jej dovezeme na uvedenou adresu ve Varšavě.",
          points: [
            "Rodinná setkání a narozeniny",
            "Občerstvení na komorní slavnosti",
            "Odběr na místě nebo doručení na adresu",
          ],
        },
        {
          title: "Catering s rozvozem",
          body: "Nemusíte pro jídlo jezdit — catering rozvážíme po Varšavě. Oblast rozvozu, čas a způsob výdeje domlouváme při objednávce, aby jídla dorazila čerstvá a včas.",
          points: [
            "Rozvoz po Varšavě",
            "Domluvený čas výdeje",
            "Jídla balená k přepravě",
          ],
        },
        {
          title: "Coffee breaky",
          body: "Coffee break na školení, workshop nebo zasedání vedení — káva, čaj, voda a drobné slané i sladké občerstvení. Rozsah přizpůsobujeme délce setkání a počtu účastníků.",
          points: [
            "Káva, čaj, voda",
            "Drobné slané a sladké občerstvení",
            "Průběžný coffee break nebo ve vyhrazených časech",
          ],
        },
        {
          title: "Byznys obědy",
          body: "Oběd pro tým bez vyjití z kanceláře — obědové sety založené na našem denním menu, v praktické formě k podávání. Osvědčí se při pravidelném stravování zaměstnanců i při celodenních setkáních.",
          points: [
            "Obědové sety z denního menu",
            "Vegetariánské varianty",
            "Forma vhodná k podávání v kanceláři",
          ],
        },
        {
          title: "Catering na školení a skupiny",
          body: "Obsluhujeme školení, workshopy a skupinová setkání — kombinujeme coffee breaky s obědem pro účastníky. Připravujeme také obědy pro skupiny, včetně školních, v domluveném počtu porcí.",
          points: [
            "Plná obsluha školení (přestávka + oběd)",
            "Obědy pro skupiny, včetně školních",
            "Pevný počet porcí domluvený předem",
          ],
        },
      ],
    },

    b2bSection: {
      alt: "Croissanty a drobné pečivo na coffee break připravené Restauracją KŁOSY",
      eyebrow: "Pro firmy",
      title: "Firemní catering s fakturou s DPH",
      lead:
        "Pro firmy má být catering především pohodlný a předvídatelný. Proto byznys objednávky vedeme s jedním kontaktem na naší straně, účtujeme fakturou s DPH a obsluhujeme jak jednorázové akce, tak opakované rozvozy do kanceláře.",
      points: [
        {
          title: "Faktura s DPH",
          body: "Každou firemní objednávku účtujeme fakturou s DPH — pohodlně pro účetnictví i při pravidelné spolupráci.",
        },
        {
          title: "Jeden kontakt",
          body: "Na naší straně vás vede jedna osoba: od domluvy menu přes termín po výdej a vyúčtování objednávky.",
        },
        {
          title: "Pravidelné objednávky",
          body: "Obsluhujeme jak jednorázové akce, tak stálé, opakované rozvozy — např. pravidelné obědy pro tým.",
        },
        {
          title: "Podpora nadace",
          body: "Objednávkou u nás podpoříte také statutární cíle nadace „Człowiek w Potrzebie” — argument důležitý pro mnoho firem.",
        },
      ],
      note:
        "Fakturační údaje (DIČ, název firmy, adresa) sbíráme při potvrzení objednávky. Minimální hodnoty objednávky a oblast rozvozu: [DO UZUPEŁNIENIA: minimalne zamówienie cateringu firmowego / strefa dostawy] — domlouvané při poptávce.",
    },

    groupsSection: {
      alt: "Sladký stůl s koláči připravený Restauracją KŁOSY",
      eyebrow: "Organizované skupiny",
      title: "Obědy pro skupiny, včetně školních",
      paragraphs: [
        "Připravujeme obědy pro organizované skupiny — výlety, školní skupiny, účastníky školení a workshopů. Počet porcí domlouváme předem, díky čemuž každý účastník dostane teplé, sytné jídlo bez front a čekání.",
        "Pro školní skupiny vybíráme jednodušší a osvědčená jídla, v případě potřeby připravíme vegetariánské varianty a zohledníme nahlášené alergie. Catering pro skupiny můžeme realizovat na místě v restauraci nebo dovézt na domluvené místo ve Varšavě.",
      ],
      note:
        "Ceny setů pro skupiny: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] — domlouvané individuálně po uvedení počtu osob.",
    },

    menuSection: {
      title: "Cateringové menu a cenová nabídka",
      intro:
        "Cateringové menu stavíme na našem každodenním jídelním lístku a denním menu — ve verzi uzpůsobené k podávání mimo restauraci. Konkrétní sety a cenovou nabídku připravujeme individuálně, po zjištění počtu osob, charakteru setkání a formy výdeje (odběr nebo rozvoz). Aktuální jídelní lístek si můžete prohlédnout a stáhnout níže:",
      menuDniaLink: "Zobrazit denní menu",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Stáhnout menu (PDF)",
      note:
        "Ceny a cateringové balíčky: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — domlouvané individuálně po poptávce.",
    },

    processSection: {
      title: "Jak objednat catering — krok za krokem",
      intro: "Proces je jednoduchý: čtyři kroky od první poptávky po výdej objednávky.",
      steps: [
        {
          title: "1. Poptávka",
          body: "Odešlete poptávku přes formulář nebo zavoláte. Uvedete typ cateringu (firemní / soukromý), datum, počet osob a zda má být odběr u nás, nebo s rozvozem.",
        },
        {
          title: "2. Návrh menu a cenová nabídka",
          body: "Sestavíme návrh menu podle vašich potřeb a připravíme cenovou nabídku. Zohledníme vegetariánská jídla i alergie a intolerance nahlášené v poptávce.",
        },
        {
          title: "3. Potvrzení",
          body: "Potvrdíme detaily: čas výdeje nebo rozvozu, počet porcí a formu vyúčtování. Pro firmy standardně vystavujeme fakturu s DPH.",
        },
        {
          title: "4. Realizace",
          body: "V domluveném termínu připravíme objednávku k odběru na místě nebo ji dovezeme na uvedenou adresu ve Varšavě.",
        },
      ],
    },

    checklistSection: {
      title: "Co se vyplatí uvést v poptávce cateringu",
      intro:
        "Čím více detailů uvedete na začátku, tím rychleji připravíme přesný návrh menu a cenovou nabídku. Stačí přibližné informace.",
      items: [
        "Typ cateringu: firemní nebo soukromý — a zda je potřeba faktura s DPH.",
        "Datum a čas výdeje nebo rozvozu, případně časy coffee breaků.",
        "Počet osob a forma: odběr na místě nebo rozvoz na adresu.",
        "Charakter setkání: oběd, coffee break, školení, oběd pro skupinu.",
        "Informace o alergiích, intolerancích a potřebě vegetariánských jídel.",
        "Zda je objednávka jednorázová, nebo má být opakovaná (např. stálé obědy).",
      ],
    },

    photoStrip: {
      heading: "Podívejte se na naše realizace",
      images: [
        {
          src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
          alt: "Cateringový bufet s občerstvením caprese připravený Restauracją KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-croissanty.webp",
          alt: "Croissanty a drobné pečivo na coffee break",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.webp",
          alt: "Dezerty a cateringové občerstvení naaranžované na tácu",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Sladký stůl s koláči od Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp",
          alt: "Ovesné dezerty podávané na tácu",
        },
      ],
    },

    locationSection: {
      title: "Odkud rozvážíme a kontakt",
      intro:
        "Catering připravujeme v naší restauraci na Ochotě a rozvážíme po Varšavě. Je to dobře dostupné místo, blízko centra — pohodlné při rozvozech do kanceláří a na setkání v různých částech města.",
      buildingSuffix: "bude upřesněno",
      note:
        "Oblast a cena rozvozu: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] — potvrzujeme při objednávce.",
    },

    faqHeading: "Catering — nejčastější dotazy",

    finalCta: {
      title: "Objednejme catering společně",
      text:
        "Napište, na kdy a pro kolik osob catering potřebujete a zda má být s rozvozem — ozveme se s návrhem menu a cenovou nabídkou. Pro firmy standardně vystavujeme fakturu s DPH.",
      sendButton: "Odeslat poptávku",
      callPrefix: "Zavolejte:",
      relatedLabel: "Podívejte se také na:",
      related: [
        { href: "/menu-dnia", label: "Denní menu" },
        { href: "/imprezy-okolicznosciowe", label: "Příležitostné oslavy" },
        { href: "/komunie-chrzciny", label: "Svatá přijímání a křtiny" },
        { href: "/wesela-rocznice", label: "Svatby a výročí" },
      ],
    },

    jsonLd: {
      breadcrumbHome: "Úvodní stránka",
      breadcrumbCurrent: "Catering",
      serviceName: "Firemní a soukromý catering ve Varšavě",
      serviceDescription:
        "Catering v Restauracji KŁOSY ve Varšavě — firemní i soukromý, na místě nebo s rozvozem: byznys obědy, coffee breaky, catering na školení a obědy pro školní skupiny. Vyúčtování fakturou s DPH.",
    },
  },

  galeria: {
    page: {
      eyebrow: "Restauracja KŁOSY · Varšava",
      title: "Galerie",
      intro:
        "Než si zarezervujete stůl, oběd pro skupinu nebo rodinnou oslavu, podívejte se, jak naše místo na Al. Jerozolimskie 123a v centru Varšavy vypadá. Níže najdete fotografie sálu, prostřených stolů a ukázkových jídel z polské kuchyně. Materiály průběžně doplňujeme — pokud něco hledáte, napište nebo zavolejte a pošleme více.",
      ctaLabel: "Zeptat se na termín nebo cenovou nabídku",
    },

    breadcrumbs: {
      home: "Úvodní stránka",
      current: "Galerie",
    },

    section: {
      title: "Galerie",
      intro:
        "Nahlédněte k nám, než přijdete — sál, stoly a ukázková jídla. Fotografie průběžně doplňujeme.",
      filtersAriaLabel: "Filtry galerie",
      all: "Vše",
      empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
      zoomLabel: "Zvětšit fotografii:",
      closeLabel: "Zavřít galerii",
      prevLabel: "Předchozí fotografie",
      nextLabel: "Další fotografie",
    },

    categories: {
      Jedzenie: "Jídlo",
      Sala: "Sál",
      Komunie: "Svatá přijímání",
      Catering: "Catering",
      Dekoracje: "Dekorace",
      "Na wynos": "S sebou",
    },

    alts: {
      "jedzenie-pierogi":
        "Pirohy s borůvkami a smetanou v Restauracji KŁOSY ve Varšavě, polská kuchyně",
      "jedzenie-kaczka":
        "Pečená kachna s červeným zelím — polská kuchyně v Restauracji KŁOSY ve Varšavě",
      "jedzenie-golonka":
        "Domácí oběd v KŁOSY Varšava: pečené koleno, polévka a dezert",
      "jedzenie-pieczen":
        "Domácí oběd — pečeně s vejcem, brambory a zeleninové saláty v Restauracji KŁOSY ve Varšavě",
      "jedzenie-kurczak":
        "Domácí obědy v Restauracji KŁOSY ve Varšavě — kuře a těstoviny v omáčce",
      "jedzenie-tagliatelle":
        "Tagliatelle s krevetami v Restauracji KŁOSY ve Varšavě, sezónní jídlo",
      "sala-bufet":
        "Jídelní sál Restauracji KŁOSY ve Varšavě s obědovým bufetem a bílými stolky",
      "sala-nakryta":
        "Komorní sál Restauracji KŁOSY ve Varšavě prostřený na rodinnou oslavu",
      "sala-kameralna":
        "Komorní sál Restauracji KŁOSY ve Varšavě prostřený na rodinný oběd",
      "sala-lampy":
        "Interiér Restauracji KŁOSY ve Varšavě — sál s bufetem a atmosférickým osvětlením",
      "komunie-balony":
        "Stůl prostřený na oslavu svatého přijímání v Restauracji KŁOSY ve Varšavě",
      "komunie-girlanda":
        "Aranžmá stolu na svaté přijímání s občerstvením v Restauracji KŁOSY ve Varšavě",
      "komunie-obsluga":
        "Obsluha číšníků u stolu k svatému přijímání v Restauracji KŁOSY ve Varšavě",
      "catering-caprese":
        "Cateringový bufet KŁOSY Varšava s občerstvením caprese, chlebíčky a dezerty",
      "catering-croissanty":
        "Cateringový stůl KŁOSY ve Varšavě s mini croissanty a občerstvením",
      "catering-desery":
        "Sladký a předkrmový cateringový stůl Restauracji KŁOSY ve Varšavě",
      "catering-ciasta":
        "Sladký cateringový stůl — koláče s jahodami v Restauracji KŁOSY ve Varšavě",
      "dekoracje-bankiet":
        "Banketní stůl prostřený na rodinnou oslavu v Restauracji KŁOSY ve Varšavě",
      "dekoracje-rustykalna":
        "Rustikální sál na svatá přijímání a oslavy v Restauracji KŁOSY ve Varšavě",
      "wynos-desery-taca":
        "Ovesné dezerty s ovocem s sebou v Restauracji KŁOSY ve Varšavě",
      "wynos-owsianka":
        "Ovesná kaše s jahodami v kelímku s sebou, Restauracja KŁOSY Varšava",
      "wynos-czekolada":
        "Vrstvený dezert s čokoládou a višněmi s sebou, KŁOSY Varšava",
      "wynos-dwa-kubki":
        "Ovesné dezerty s sebou v útulném interiéru Restauracji KŁOSY ve Varšavě",
    },
  },

  polityka: {
    breadcrumb: {
      home: "Úvodní stránka",
      current: "Zásady ochrany osobních údajů",
    },

    formEmail: "marketing@restauracjadifferent.pl",

    heading: "Zásady ochrany osobních údajů",
    intro:
      "Záleží nám na vašem soukromí. Níže vysvětlujeme, jaké údaje shromažďujeme prostřednictvím webu Restauracji KŁOSY, za jakým účelem a na jakém základě, a jaká máte práva.",

    administrator: {
      heading: "1. Správce údajů",
      leadBefore:
        "Správcem osobních údajů je subjekt provozující Restauraci KŁOSY, se sídlem na ",
      todo:
        "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
      foundationBefore: "Restauraci provozuje ",
      foundationKrs: "KRS",
    },

    sections: [
      {
        heading: "2. Jaké údaje shromažďujeme",
        paragraphs: [
          "Údaje shromažďujeme výhradně tehdy, když je dobrovolně odešlete přes poptávkový formulář (nebo mini-konfigurátor oslavy). Jsou to: jméno a příjmení, telefonní číslo, e-mailová adresa a informace o plánované akci, které sami uvedete (typ akce, datum, počet hostů, místo, preference menu, alergie, text zprávy).",
        ],
      },
    ],

    purpose: {
      heading: "3. Účel a právní základ",
      items: [
        "Vyřízení vaší poptávky, zpětný kontakt a příprava návrhu (termínu, menu, cenové nabídky) — základ: čl. 6 odst. 1 písm. b a písm. f GDPR (úkony na žádost subjektu a oprávněný zájem správce).",
        "Udělený souhlas s kontaktováním — čl. 6 odst. 1 písm. a GDPR (můžete jej kdykoli odvolat, bez vlivu na zákonnost dřívějšího zpracování).",
      ],
    },

    recipients: {
      heading: "4. Příjemci údajů",
      before: "Poptávky z formuláře přicházejí na adresu ",
      after:
        ". Údaje mohou zpracovávat důvěryhodní poskytovatelé IT služeb podporujících provoz formuláře a pošty (např. poskytovatel služby odesílání formuláře, hosting pošty), výhradně v rozsahu nezbytném k naplnění výše uvedených účelů.",
    },

    policies: [
      {
        heading: "5. Doba uchovávání",
        paragraphs: [
          "Údaje uchováváme po dobu nezbytnou k vyřízení poptávky a případné realizaci služby a následně po dobu vyplývající z právních předpisů nebo do odvolání souhlasu / vznesení účinné námitky.",
        ],
      },
      {
        heading: "6. Vaše práva",
        paragraphs: [
          "Máte právo na: přístup k údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost údajů, vznesení námitky a odvolání souhlasu. Máte rovněž právo podat stížnost u dozorového úřadu pro ochranu osobních údajů.",
        ],
      },
      {
        heading: "7. Soubory cookies",
        paragraphs: [
          "Web používá nezbytné soubory cookies a — po udělení souhlasu v banneru — analytické/marketingové cookies. Souhlas můžete změnit nebo odvolat vymazáním dat webu v prohlížeči. Statistiky shromažďujeme v souladu s vaší volbou (Consent Mode).",
        ],
      },
    ],

    contact: {
      heading: "8. Kontakt ve věci údajů",
      before: "Ve věcech týkajících se osobních údajů pište na ",
      between: " nebo na obecnou adresu ",
      after: ".",
    },

    back: "← Zpět na úvodní stránku",
  },
};
