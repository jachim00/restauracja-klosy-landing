/**
 * Magyar (hu) szótár — a teljes i18n tartalom egyetlen fájlban.
 * A `Dictionary` típus a PL szótárból van levezetve, így a TypeScript
 * kikényszeríti az azonos kulcsszerkezetet. Csak a szöveges ÉRTÉKEK fordítottak.
 * A tulajdonnevek (KŁOSY, Alapítvány neve, cím, telefonszám, e-mailek),
 * href/kép útvonalak, lucide ikonnevek, id-k, térkép-kulcsok és a
 * [DO UZUPEŁNIENIA: ...] / {step} / {total} jelölők változatlanok.
 */
import type { Dictionary } from "@/content/i18n";

export const hu: Dictionary = {
  common: {
    brand: "KŁOSY",
    brandFull: "Restauracja KŁOSY",
    ogImageAlt: "A varsói KŁOSY étterem meleg, borostyánszínű lámpafénnyel megvilágított belső tere",
    skipToContent: "Ugrás a tartalomra",

    nav: {
      ariaLabel: "Főnavigáció",
      openMenu: "Menü megnyitása",
      closeMenu: "Menü bezárása",
      links: [
        { key: "home", href: "/", label: "Főoldal", short: "Kezdőlap" },
        { key: "menu", href: "/menu-dnia", label: "Napi menü", short: "Menü" },
        { key: "imprezy", href: "/imprezy-okolicznosciowe", label: "Alkalmi rendezvények", short: "Rendezvények" },
        { key: "komunie", href: "/komunie-chrzciny", label: "Elsőáldozás és keresztelő", short: "Elsőáldozás" },
        { key: "wesela", href: "/wesela-rocznice", label: "Esküvők és évfordulók", short: "Esküvők" },
        { key: "catering", href: "/catering", label: "Catering", short: "Catering" },
        { key: "galeria", href: "/galeria", label: "Galéria", short: "Galéria" },
        { key: "kontakt", href: "/kontakt", label: "Kapcsolat", short: "Kapcsolat" },
      ],
    },

    langSwitcher: {
      label: "Nyelvváltás",
      current: "Nyelv",
    },

    cta: {
      reserve: "Időpont egyeztetése",
      sendInquiry: "Üzenet küldése",
      call: "Hívás",
      write: "Írás",
      ask: "Időpont egyeztetése",
      seeOffer: "Ajánlatunk megtekintése",
      seeMenu: "Napi menü megtekintése",
      backHome: "Vissza a főoldalra",
    },

    mobileCta: {
      call: "Hívás",
      write: "Írás",
      ask: "Érdeklődés",
    },

    footer: {
      tagline: "Házias konyha, catering és meghitt családi rendezvények Varsó szívében.",
      navHeading: "Navigáció",
      contactHeading: "Kapcsolat",
      foundationNote:
        "Az éttermet a Fundacja Pomocy Rodzinie „Człowiek w Potrzebie” működteti — a bevétel az Alapítvány alapszabályi céljait támogatja.",
      copyright: "Minden jog fenntartva.",
      madeBy: "Kivitelezés:",
      privacy: "Adatvédelmi szabályzat",
    },

    cookie: {
      text:
        "Sütiket használunk statisztikai és marketing célokra. Elfogadhatja az összeset, vagy csak a szükségeseket használhatja.",
      accept: "Elfogadom",
      reject: "Csak a szükségesek",
      privacyLink: "Adatvédelmi szabályzat",
      ariaLabel: "Tájékoztató a sütikről",
    },
  },

  meta: {
    home: {
      title: "Restauracja KŁOSY Varsó | Ebédek, catering és családi rendezvények",
      description:
        "A KŁOSY étterem a varsói Al. Jerozolimskie 123a alatt — házias ebédek, catering és meghitt rendezvények: elsőáldozás, keresztelő, esküvő, évforduló és céges összejövetelek.",
      ogDescription:
        "Házias konyha és családi rendezvények Varsó szívében. Érdeklődjön elsőáldozás, keresztelő, esküvő vagy catering időpontjáról.",
    },
    menuDnia: {
      title: "Napi menü és házias ebédek Varsóban",
      description:
        "Házias ebédek és napi menü a KŁOSY étteremben a varsói Al. Jerozolimskie alatt. Lengyel konyha, vegetáriánus opciók, ebédek csoportoknak és catering házhozszállítással.",
      ogDescription: "Házias ebédek és napi menü Varsó szívében. Lengyel konyha, vegetáriánus opciók, ebédek csoportoknak.",
    },
    imprezy: {
      title: "Alkalmi rendezvények Varsóban",
      description:
        "Meghitt alkalmi rendezvények a varsói KŁOSY étteremben: születésnapok, jubileumok, évfordulók és családi összejövetelek. Egyedi menü és helyszíni kiszolgálás.",
      ogDescription: "Meghitt alkalmi rendezvények Varsó szívében — születésnapok, jubileumok, évfordulók.",
    },
    komunie: {
      title: "Elsőáldozás és keresztelő Varsóban | Meghitt családi rendezvények",
      description:
        "Elsőáldozási és keresztelői rendezvények a varsói KŁOSY étteremben. Menü gyerekeknek és felnőtteknek, helyszíni kiszolgálás, segítség a szervezésben. Érdeklődjön a szabad időpontokról.",
      ogDescription: "Elsőáldozási és keresztelői rendezvények Varsó szívében — menü gyerekeknek és felnőtteknek, helyszíni kiszolgálás.",
    },
    wesela: {
      title: "Meghitt esküvők és évfordulók Varsóban",
      description:
        "Meghitt esküvők, jubileumok és évfordulók a varsói KŁOSY étteremben. Meleg, természetes hangulat, egyedi menü és szervezési támogatás.",
      ogDescription: "Meghitt esküvők és évfordulók Varsó szívében — természetes hangulat, egyedi menü.",
    },
    catering: {
      title: "Catering Varsó — céges és magán | Restauracja KŁOSY",
      description:
        "Céges és magán catering Varsóban: kávészünetek, üzleti ebédek, magánrendezvények — helyben vagy házhozszállítással. ÁFÁ-s számla. Kérjen árajánlatot.",
      ogDescription: "Céges és magán catering Varsóban — kávészünetek, üzleti ebédek, házhozszállítással.",
    },
    galeria: {
      title: "Galéria — belső tér, ételek és rendezvények",
      description:
        "A varsói KŁOSY étterem galériája: belső tér, házias ételek, asztaldekorációk elsőáldozásra és rendezvényekre, valamint a cateringkínálat.",
      ogDescription: "Tekintse meg a varsói KŁOSY étterem belső terét, ételeit és rendezvény-dekorációit.",
    },
    kontakt: {
      title: "Kapcsolat | Restauracja KŁOSY, Al. Jerozolimskie 123a",
      description:
        "Vegye fel a kapcsolatot a varsói KŁOSY étteremmel (Al. Jerozolimskie 123a). Érdeklődjön rendezvény-időpontról, cateringről vagy csoportos ebédről űrlapon vagy telefonon.",
      ogDescription: "Vegye fel a kapcsolatot a varsói KŁOSY étteremmel — érdeklődő űrlap, telefon, megközelítés.",
    },
    polityka: {
      title: "Adatvédelmi szabályzat",
      description: "A varsói KŁOSY étterem honlapjának adatvédelmi szabályzata — az adatkezelés és a sütik használatának elvei.",
      ogDescription: "Az adatkezelés és a sütik használatának elvei a KŁOSY étterem honlapján.",
    },
  },

  home: {
    hero: {
      badge: "Varsó · Al. Jerozolimskie 123a",
      titleBefore: "Házias ",
      titleHighlight: "konyha",
      titleAfter: " és családi rendezvények Varsó szívében",
      subtitle:
        "Ebédek, catering és meghitt rendezvények — elsőáldozás, keresztelő, esküvő, évforduló és céges összejövetelek. Mondja el, mit tervez, és összeállítunk egy menüjavaslatot.",
      ctaAsk: "Időpont egyeztetése",
      ctaSeeOffer: "Ajánlatunk megtekintése",
      scrollAria: "Görgessen az ajánlathoz",
    },

    about: {
      heading: "A KŁOSY étterem néhány szóban",
      paragraph1Before:
        "Házias konyhájú étterem vagyunk a varsói Al. Jerozolimskie 123a alatt (Atlas Tower). Helyben főzünk ebédet, cateringet biztosítunk és meghitt családi rendezvényeket szervezünk. Az étterem a következő szervezet mellett működik: ",
      paragraph1After:
        ", a bevétel pedig az Alapítvány alapszabályi céljait támogatja.",
      paragraph2:
        "Nem szervezünk több száz fős, zajos rendezvényeket — a meghittségre, a jó ételre és a nyugodt kiszolgálásra helyezzük a hangsúlyt, családok, barátok és csapatok számára.",
      tiles: [
        { title: "Ebédek", desc: "napi menü és csoportoknak" },
        { title: "Catering", desc: "céges és magán" },
        { title: "Elsőáldozás", desc: "és keresztelő" },
        { title: "Esküvők", desc: "meghitt esküvők és évfordulók" },
      ],
    },

    process: {
      heading: "Hogyan zajlik egy rendezvény szervezése?",
      steps: [
        { n: "1", title: "Kapcsolatfelvétel", desc: "Üzenetet küld az űrlapon, vagy felhív minket." },
        { n: "2", title: "Időpont", desc: "Visszaigazoljuk a kiválasztott dátum elérhetőségét." },
        { n: "3", title: "Menü", desc: "A menüt a rendezvény típusához és a vendégekhez igazítjuk." },
        { n: "4", title: "Előkészítés", desc: "Előkészítjük a termet vagy a cateringet." },
        { n: "5", title: "Rendezvény", desc: "A rendezvény napján gondoskodunk a kiszolgálásról." },
      ],
      note: "Az üzenet elküldése után az étterem visszaigazolja az időpont elérhetőségét, és menüjavaslatot készít.",
    },

    finalCta: {
      heading: "Tervezze meg rendezvényét a KŁOSY-ban",
      text: "Írja meg, mit tervez — válaszolunk egy időpont- és menüjavaslattal.",
      button: "Üzenet küldése",
    },
  },

  offers: {
    heading: "Mit szervezhetünk meg Önnek?",
    intro:
      "Válassza ki a rendezvény típusát — megmutatjuk a kínálatot, az előnyöket és a következő lépést. A részleteket és a menüt az érdeklődése után egyénileg egyeztetjük.",
    tablistAria: "Ajánlat",
    tabs: [
      {
        id: "obiady",
        label: "Ebédek és napi menü",
        heading: "Házias ebédek és napi menü Varsó szívében",
        description:
          "Naponta, helyben készülő ebédek — lengyel konyha, szezonális alapanyagok, napi menü egyéni vendégeknek és csoportoknak. Jó hely az ebédhez az Al. Jerozolimskie és az Ochota környékén.",
        benefits: ["Friss napi menü", "Vegetáriánus opciók", "Ebédek csoportoknak", "Catering házhozszállítással"],
        ctaLabel: "Napi menü megtekintése",
        href: "/menu-dnia",
        image: "/assets/restauracja-klosy/food/obiad-golonka.webp",
        imageAlt: "Domowy obiad w Restauracji KŁOSY w Warszawie: pieczona golonka, zupa i deser",
      },
      {
        id: "komunie-chrzciny",
        label: "Elsőáldozás és keresztelő",
        heading: "Elsőáldozási és keresztelői rendezvények",
        description:
          "Meghitt családi rendezvények a gyerekekhez és felnőttekhez igazított menüvel és helyszíni kiszolgálással. Az időpontot és a részleteket egyénileg egyeztetjük.",
        benefits: ["Menü gyerekeknek és felnőtteknek", "Kizárólagos terem (egyeztetés alatt)", "Felszolgálás", "Segítség a szervezésben"],
        ctaLabel: "Érdeklődés elsőáldozásról / keresztelőről",
        href: "/komunie-chrzciny",
        image: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
        imageAlt: "Aranżacja stołu na komunię z przekąskami w Restauracji KŁOSY w Warszawie",
      },
      {
        id: "wesela",
        label: "Meghitt esküvők",
        heading: "Meghitt esküvők és évfordulók",
        description:
          "Szűk körű esküvő a legközelebbiek társaságában, jubileumok és évfordulók — meleg, természetes hangulatban. A menüt és a vendéglétszámot a konkrét eseményhez igazítjuk.",
        benefits: ["Meghitt hangulat", "Egyedi menü", "Természetes dekoráció", "Szervezési támogatás"],
        ctaLabel: "Érdeklődés esküvőről / évfordulóról",
        href: "/wesela-rocznice",
        image: "/assets/restauracja-klosy/events/stol-bankietowy.webp",
        imageAlt: "Stół bankietowy nakryty na kameralne przyjęcie w Restauracji KŁOSY w Warszawie",
      },
      {
        id: "rodzinne",
        label: "Évfordulók és családi összejövetelek",
        heading: "Évfordulók, születésnapok és családi összejövetelek",
        description:
          "Közös ebéd vagy vacsora a családnak, születésnapok, jubileumok — szervezési stressz nélkül, kívánság szerinti menüvel.",
        benefits: ["Kívánság szerinti menü", "Hely a családnak", "Helyszíni kiszolgálás", "Rugalmas időpontok"],
        ctaLabel: "Összejövetel megtervezése",
        href: "/imprezy-okolicznosciowe",
        image: "/assets/restauracja-klosy/interior/sala-kameralna-kwiaty.webp",
        imageAlt: "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do rodzinnego spotkania",
      },
      {
        id: "catering",
        label: "Céges és magán catering",
        heading: "Céges és magán catering Varsóban",
        description:
          "Catering céges összejövetelekre, képzésekre és magánrendezvényekre — helyben vagy házhozszállítással. A kínálatot és a formát az érdeklődés alapján egyeztetjük.",
        benefits: ["Catering házhozszállítással", "Kávészünetek", "Üzleti ebédek", "ÁFÁ-s számla"],
        ctaLabel: "Érdeklődés cateringről",
        href: "/catering",
        image: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
        imageAlt: "Bufet cateringowy KŁOSY w Warszawie z przekąskami caprese, tartinkami i deserami",
      },
      {
        id: "grupy",
        label: "Ebédek iskolai csoportoknak",
        heading: "Ebédek csoportoknak, köztük iskolai csoportoknak",
        description:
          "Ebédeket készítünk csoportoknak — kirándulóknak, iskolai és szervezett csoportoknak. Kérjük, vegye fel velünk a kapcsolatot a létszám és a menü egyeztetéséhez.",
        benefits: ["Menü csoportoknak", "Gyors kiszolgálás", "Rugalmas időpontok", "Diétához igazítás"],
        ctaLabel: "Érdeklődés csoportos ebédről",
        href: "/catering",
        image: "/assets/restauracja-klosy/food/obiad-kurczak-makaron.webp",
        imageAlt: "Obiady domowe dla grup w Restauracji KŁOSY w Warszawie — kurczak i makaron w sosie",
      },
    ],
  },

  faq: {
    heading: "Gyakori kérdések",
    items: [
      {
        q: "Lehet-e elsőáldozást szervezni a KŁOSY étteremben?",
        a: "Igen. A varsói KŁOSY étterem (Al. Jerozolimskie 123a) elsőáldozási rendezvényeket szervez — a vendégekhez igazított menüvel és helyszíni kiszolgálással. Az időpontot és a részleteket az érdeklődés után egyénileg egyeztetjük.",
      },
      {
        q: "Alkalmas-e a helyszín keresztelőre?",
        a: "Igen, meghitt keresztelői rendezvényeket szervezünk. Az üzenet elküldése után visszaigazoljuk az időpont elérhetőségét, és menüjavaslatot készítünk.",
      },
      {
        q: "Lehet-e szűk körű esküvőt szervezni?",
        a: "Igen. A KŁOSY a meghitt családi rendezvényekre specializálódott, beleértve a szűk körű esküvőket és évfordulókat is. A vendéglétszámot és a menüt egyénileg egyeztetjük.",
      },
      {
        q: "Kínál-e az étterem cateringet házhozszállítással?",
        a: "Igen, cateringet biztosítunk — céges és magán, helyben vagy házhozszállítással Varsó területén. A kínálatot és a formát az érdeklődés alapján egyeztetjük.",
      },
      {
        q: "Lehet-e ebédet rendelni iskolai csoportoknak?",
        a: "Igen, ebédeket készítünk csoportoknak, köztük iskolai csoportoknak. Kérjük, vegye fel velünk a kapcsolatot a létszám és a menü egyeztetéséhez.",
      },
      {
        q: "Hol található a KŁOSY étterem?",
        a: "A varsói Al. Jerozolimskie 123a alatt (Ochota kerület), az Atlas Tower épületében. A pontos emeletet és a megközelítést a kapcsolatfelvételkor egyeztetjük.",
      },
      {
        q: "Hogyan érdeklődhetek szabad időpontról?",
        a: "Leggyorsabban a honlapon található érdeklődő űrlapon vagy telefonon. Az üzenet elküldése után visszaigazoljuk az időpont elérhetőségét, és menüjavaslatot készítünk.",
      },
      {
        q: "Igazítható-e a menü a vendégekhez?",
        a: "Igen. A menüt a rendezvény típusához és a vendégek igényeihez állítjuk össze — figyelembe vesszük többek között a vegetáriánus fogásokat és az érdeklődésben megadott allergiákra vonatkozó információkat.",
      },
    ],
  },

  configurator: {
    heading: "Tervezze meg rendezvényét",
    intro:
      "Néhány lépésben gyűjtse össze a rendezvényével kapcsolatos legfontosabb információkat. A végén továbbítjuk azokat a kapcsolatfelvételi űrlaphoz — javaslattal jelentkezünk.",

    progress: {
      stepLabel: "{step}. lépés a(z) {total}-ból",
      barAria: "A rendezvénytervező folyamatának állapota",
    },

    stepTitles: [
      "Milyen típusú rendezvényt tervez?",
      "Hány vendégre számít?",
      "Hol legyen a rendezvény?",
      "Milyen időpontot vesz figyelembe?",
      "Összegzés",
    ],

    dateHint: "Az időpont tájékoztató jellegű — az elérhetőséget közösen visszaigazoljuk.",

    summary: {
      eventType: "Rendezvény típusa",
      guests: "Vendégek száma",
      place: "Helyszín",
      preferredDate: "Kívánt időpont",
      dateTbd: "Egyeztetés alatt",
      empty: "—",
      submit: "Érdeklődés a rendezvényről",
    },

    nav: {
      back: "Vissza",
      next: "Tovább",
    },

    footnote:
      "Az üzenet elküldése után az étterem visszaigazolja az időpont elérhetőségét, és menüjavaslatot készít.",

    eventTypes: [
      { id: "komunia", label: "Elsőáldozás", icon: "Sparkles", blurb: "Meghitt elsőáldozási rendezvény menüvel gyerekeknek és felnőtteknek." },
      { id: "chrzest", label: "Keresztelő", icon: "Baby", blurb: "Nyugodt, családi keresztelői rendezvény elegáns teremben." },
      { id: "wesele-kameralne", label: "Meghitt esküvő", icon: "Heart", blurb: "Szűk körű esküvő a legközelebbiek társaságában — pompa nélkül, mégis stílusosan." },
      { id: "rocznica", label: "Évforduló", icon: "Gift", blurb: "Jubileum, házassági vagy céges évforduló — meleg hangulatban." },
      { id: "urodziny", label: "Születésnap", icon: "Cake", blurb: "Születésnap családnak és barátoknak, kívánság szerinti menüvel." },
      { id: "spotkanie-rodzinne", label: "Családi összejövetel", icon: "Users", blurb: "Közös ebéd vagy vacsora az egész családnak." },
      { id: "spotkanie-firmowe", label: "Céges összejövetel", icon: "Briefcase", blurb: "Csapatösszejövetelek, kávészünetek, üzleti ebédek." },
      { id: "catering", label: "Catering", icon: "Truck", blurb: "Céges és magán catering — helyben vagy házhozszállítással." },
      { id: "obiad-grupa", label: "Csoportos ebéd", icon: "UtensilsCrossed", blurb: "Ebédek csoportoknak, köztük iskolai csoportoknak." },
    ],

    guestRanges: ["10–20", "21–35", "36–50", "50+", "catering — nagyobb létszám"],

    places: ["Helyben", "Catering házhozszállítással", "Egyeztetés alatt"],
  },

  forms: {
    lead: {
      ariaLabel: "Rendezvénnyel kapcsolatos érdeklődő űrlap",
      honeypotLabel: "Ezt a mezőt ne töltse ki",
      requiredMark: "*",
      optionalSuffix: "(opcionális)",
      selectPlaceholder: "Válasszon…",
      requiredHint: "kötelezőek.",
      requiredHintPrefix: "A megjelölt mezők",

      fields: {
        imieNazwisko: {
          label: "Vezeték- és keresztnév",
        },
        telefon: {
          label: "Telefon",
        },
        email: {
          label: "E-mail",
        },
        typWydarzenia: {
          label: "Rendezvény típusa",
        },
        data: {
          label: "Kívánt dátum",
        },
        liczbaGosci: {
          label: "Vendégek száma",
        },
        miejsce: {
          label: "Helyszín",
        },
        budzet: {
          label: "Hozzávetőleges költségvetés",
          placeholder: "pl. 5000 zł-ig / fő",
        },
        preferencjeMenu: {
          label: "Menüpreferenciák",
          placeholder: "pl. menü gyerekeknek, vegetáriánus fogások",
        },
        alergie: {
          label: "Allergiák / étrendi igények",
          placeholder: "pl. gluténmentes, mogyoró nélkül",
        },
        wiadomosc: {
          label: "További információk",
          placeholder: "Meséljen a rendezvényéről — mire van szüksége?",
        },
      },

      eventTypeOptions: [
        { value: "komunia", label: "Elsőáldozás" },
        { value: "chrzest", label: "Keresztelő" },
        { value: "wesele-kameralne", label: "Meghitt esküvő" },
        { value: "rocznica", label: "Évforduló" },
        { value: "urodziny", label: "Születésnap" },
        { value: "spotkanie-rodzinne", label: "Családi összejövetel" },
        { value: "spotkanie-firmowe", label: "Céges összejövetel" },
        { value: "catering", label: "Catering" },
        { value: "obiad-grupa", label: "Csoportos ebéd" },
        { value: "inne", label: "Egyéb" },
      ],

      guestRangeOptions: [
        { value: "10–20", label: "10–20" },
        { value: "21–35", label: "21–35" },
        { value: "36–50", label: "36–50" },
        { value: "50+", label: "50+" },
        {
          value: "catering — większa liczba osób",
          label: "catering — nagyobb létszám",
        },
      ],

      placeOptions: [
        { value: "W lokalu", label: "Helyben" },
        { value: "Catering z dostawą", label: "Catering házhozszállítással" },
        { value: "Do ustalenia", label: "Egyeztetés alatt" },
      ],

      consents: {
        heading: "",
        kontakt: {
          text: "Hozzájárulok ahhoz, hogy telefonon vagy e-mailben felvegyék velem a kapcsolatot az érdeklődésem megbeszélése céljából.",
        },
        rodo: {
          before: "Megismertem az",
          linkText: "adatvédelmi szabályzatot",
          after: "és elfogadom adataim kezelését az érdeklődés feldolgozása céljából.",
        },
      },

      submit: {
        idle: "Üzenet küldése",
        loading: "Küldés…",
      },

      validation: {
        imieNazwiskoRequired: "Adja meg a vezeték- és keresztnevét.",
        imieNazwiskoMin: "Adja meg a vezeték- és keresztnevét (min. 2 karakter).",
        telefonRequired: "Adja meg a telefonszámát.",
        telefonMin: "Adja meg a telefonszámát (min. 9 számjegy).",
        telefonInvalid: "Adjon meg érvényes lengyel telefonszámot.",
        emailRequired: "Adja meg az e-mail-címét.",
        emailInvalid: "Adjon meg érvényes e-mail-címet.",
        typWydarzeniaRequired: "Válasszon rendezvénytípust.",
        liczbaGosciRequired: "Válasszon hozzávetőleges vendéglétszámot.",
        miejsceRequired: "Válassza ki a rendezvény helyszínét.",
        zgodaKontaktRequired: "A kapcsolatfelvételhez való hozzájárulás kötelező.",
        zgodaRodoRequired: "Az adatkezeléshez való hozzájárulás kötelező.",
      },

      success: {
        heading: "Köszönjük érdeklődését!",
        bodyBefore:
          "A lehető leghamarabb jelentkezünk, hogy megbeszéljük a rendezvénye részleteit. Ha sürgős, kérjük, hívjon minket:",
        again: "További üzenet küldése",
      },

      errors: {
        noEndpoint:
          "Az űrlap még nincs összekötve az üzenetek fogadásával. Kérjük, vegye fel velünk a kapcsolatot telefonon vagy e-mailben. (Konfiguráció: NEXT_PUBLIC_WEB3FORMS_KEY vagy NEXT_PUBLIC_LEAD_WEBHOOK_URL)",
        http: "Az üzenetet nem sikerült elküldeni. Próbálja újra, vagy hívjon minket.",
        network: "Kapcsolódási hiba történt. Ellenőrizze az internetkapcsolatot, és próbálja újra.",
      },

      mail: {
        subjectPrefix: "Érdeklődés a KŁOSY honlapjáról —",
        fromNamePrefix: "Restauracja KŁOSY — űrlap",
      },
    },
  },

  kontakt: {
    breadcrumb: {
      home: "Főoldal",
      current: "Kapcsolat",
    },

    hero: {
      eyebrow: "Restauracja KŁOSY Varsóban",
      heading: "Kapcsolat",
      lead:
        "Szeretne rendezvény-időpontról érdeklődni, cateringet rendelni vagy csoportos ebédet szervezni? Hívjon, írjon e-mailt vagy töltse ki az űrlapot — konkrétan és kötelezettség nélkül válaszolunk. Az Al. Jerozolimskie 123a alatt vagyunk, a varsói Ochota kerületben, néhány percre a belvárostól.",
      callPrefix: "Hívás:",
      toForm: "Ugrás az űrlaphoz",
    },

    nap: {
      heading: "Elérhetőségek",
      intro:
        "Leggyorsabban telefonon vagy e-mailben éri el minket. Ha jobban szereti, írja le a rendezvényét az alábbi űrlapon — visszahívjuk vagy válaszolunk.",
      addressLabel: "Cím",
      buildingSuffix: "— egyeztetés alatt",
      districtLabel: "Kerület:",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      hoursLabel: "Nyitvatartás",
      hoursPlaceholder: "[DO UZUPEŁNIENIA: godziny otwarcia / kontaktu]",
      socialHeading: "Itt is megtalál minket",
      facebook: "Facebook",
      instagram: "Instagram",
      instagramPlaceholder: "[DO UZUPEŁNIENIA: Instagram]",
      pyszne: "Pyszne.pl",
      pysznePlaceholder: "[DO UZUPEŁNIENIA: link Pyszne.pl]",
      glovo: "Glovo",
      glovoPlaceholder: "[DO UZUPEŁNIENIA: link Glovo]",
    },

    map: {
      heading: "Megközelítés",
      intro:
        "Varsó jól megközelíthető pontján vagyunk, az Al. Jerozolimskie mentén. A pontos bejáratot és emeletet az Atlas Tower épületében a kapcsolatfelvételkor egyeztetjük.",
      imgAlt:
        "Lokalizacja Restauracji KŁOSY przy Al. Jerozolimskich 123a w Warszawie",
      placeholder:
        "[DO UZUPEŁNIENIA: mapa dojazdu (Google Maps) — wymaga linku/embedu]",
      directions: "Útvonal tervezése a Google Maps-en",
      directionsPlaceholder: "[DO UZUPEŁNIENIA: link Google Maps]",
    },

    form: {
      heading: "Érdeklődjön időpontról, cateringről vagy rendezvényről",
      intro:
        "Írja le, mit tervez — a rendezvény típusát, a hozzávetőleges dátumot és a vendéglétszámot. Minél több részletet ad meg, annál pontosabb menü- és időpontjavaslatot készítünk. Az opcionális mezők (költségvetés, menüpreferenciák, allergiák) segítenek nekünk, de nem kötelezőek.",
    },

    faq: {
      heading: "Kapcsolat és érdeklődés — gyakori kérdések",
    },

    cta: {
      heading: "Nem tudja, hol kezdje?",
      body:
        "Hívjon — mesélje el néhány mondatban, mit tervez, mi pedig javaslatot teszünk, mi válna be, és milyen információkra lesz szükségünk a javaslat elkészítéséhez.",
      callPrefix: "Hívás:",
      write: "E-mail írása",
      seeAlso: "Lásd még:",
      links: {
        menuDnia: "Napi menü",
        komunie: "Elsőáldozás és keresztelő",
        wesela: "Esküvők és évfordulók",
        imprezy: "Alkalmi rendezvények",
        catering: "Catering",
      },
    },
  },

  menuDnia: {
    hero: {
      alt: "Domowy obiad w Restauracji KŁOSY: golonka, zupa i deser",
      eyebrow: "Napi menü • Varsó, Ochota",
      title: "Napi menü és lengyel konyha Varsó szívében",
      subtitle:
        "Naponta készülő házias ebédek — levesek, főételek és vegetáriánus ajánlatok — a varsói Al. Jerozolimskie 123a alatt (Atlas Tower, Ochota). Egy munkahelyi ebédhez, baráti társaságban elköltött ebédhez és nagyobb csoportos rendelésekhez.",
      ctaLabel: "Időpont egyeztetése",
    },

    breadcrumbs: {
      ariaLabel: "Morzsamenü",
      home: "Főoldal",
      current: "Napi menü",
    },

    facts: [
      { value: "Napi menü", label: "naponta frissen" },
      { value: "Lengyel konyha", label: "házias ebédek" },
      { value: "Ebédek csoportoknak", label: "helyben vagy házhozszállítással" },
      { value: "Házhozszállítás", label: "Varsó területén" },
    ],

    about: {
      alt: "Pieczona kaczka — danie główne z domowej kuchni Restauracji KŁOSY",
      eyebrow: "Mit jelent nálunk a napi menü",
      title: "Házias ebédek mesterkéltség nélkül",
      p1: "A napi menü egy frissen, folyamatosan készülő ebédmenü — házias konyha mesterkéltség nélkül: melengető leves, laktató főétel és vegetáriánus opció. Az egyszerű, jó ételre helyezzük a hangsúlyt, arra, amit otthonról ismerünk, nyugodtan és kapkodás nélkül tálalva. A menü pontos összetétele naponta változik.",
      p2Before:
        "Az aktuális étlapot és a napi menüt telefonon vagy helyben erősítjük meg — az árakat és a konkrét fogásokat a kapcsolatfelvételkor adjuk meg, hogy az információ mindig megegyezzen azzal, amit az adott napon valóban főzünk. Az étterem a következő szervezet mellett működik: ",
      p2After: ", a bevétel pedig annak alapszabályi céljait támogatja.",
      points: [
        "Ebéd a munkahelyi szünetben (az Atlas Tower környékén)",
        "Ebéd barátokkal vagy családdal",
        "Napi meleg étkezés helyben",
        "Nagyobb ebédrendelések csoportoknak",
      ],
    },

    groups: {
      alt: "Obiad: kurczak z makaronem — propozycja dla grup w Restauracji KŁOSY",
      eyebrow: "Ebédek csoportoknak",
      title: "Ebéd csapatnak, osztálynak és családnak",
      p1: "Ebédeket készítünk csoportoknak — köztük iskolai csoportoknak, céges csapatoknak és családi összejöveteleknek. A menüt a létszámhoz és az igényekhez igazítjuk, figyelembe vesszük a vegetáriánus fogásokat és az érdeklődésben előzetesen megadott allergiákra vonatkozó információkat.",
      p2: "Az adagok számát, a kiadás formáját (helyben vagy házhozszállítással) és az időpontot egyénileg egyeztetjük. Elég megírnia, hányan lesznek és mikorra szükséges az ebéd — visszaküldünk egy menüjavaslatot és visszaigazoljuk az elérhetőséget.",
      points: [
        "• A csoporthoz igazított menü (köztük vegetáriánus opciók)",
        "• Ebédek iskolai csoportoknak és céges csapatoknak",
        "• Kiadás helyben vagy házhozszállítással Varsó területén",
      ],
      ctaLabel: "Érdeklődés csoportos ebédekről",
    },

    delivery: {
      alt: "Tagliatelle z krewetkami — danie z karty Restauracji KŁOSY",
      eyebrow: "Ebéd házhozszállítással",
      title: "Napi menüs ebéd házhozszállítással Varsóban",
      lead: "A napi menüs ebédet házhozszállítással is megrendelheti — népszerű ételfutár-platformokon keresztül. A fogások elérhetőségét, az időpontokat és a szállítási területet közvetlenül erősítjük meg; alább az online rendelési linkek.",
      pyszneLabel: "Rendelés a Pyszne.pl-en",
      pysznePlaceholder: "Pyszne.pl — [DO UZUPEŁNIENIA: link]",
      glovoLabel: "Rendelés a Glovo-n",
      glovoPlaceholder: "Glovo — [DO UZUPEŁNIENIA: link]",
      cateringBefore: "Inkább nagyobb, egyedi rendelést szeretne? Nézze meg a ",
      cateringLink: "cateringkínálatunkat",
      cateringAfter: " — a céges és magán cateringet az érdeklődés alapján készítjük el.",
    },

    menu: {
      title: "Mit talál az étlapon",
      intro:
        "Alább az étlapunk kategóriái. A konkrét fogásokat és árakat az étterem aktuális menüje alapján töltjük fel — addig telefonon vagy helyben adjuk meg őket.",
      pdfLabel: "Menü letöltése (PDF)",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do menu PDF]",
    },

    realizacje: {
      heading: "Tekintse meg munkáinkat",
      images: [
        { src: "/assets/restauracja-klosy/food/pierogi-z-jagodami.webp", alt: "Pierogi z jagodami z domowej kuchni Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/obiad-pieczen-surowki.webp", alt: "Obiad: pieczeń z surówkami w Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp", alt: "Taca deserów owsianych w Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianka-truskawki.webp", alt: "Owsianka z truskawkami w Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/deser-czekolada-wisnie.webp", alt: "Deser czekoladowy z wiśniami w Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/food/owsianki-dwa-kubki.webp", alt: "Dwa kubki owsianki w Restauracji KŁOSY" },
      ],
    },

    faq: {
      heading: "Gyakori kérdések az ebédekről",
    },

    next: {
      heading: "Lásd még",
      cards: [
        { href: "/catering", label: "Catering", desc: "Céges és magán, helyben vagy házhozszállítással." },
        { href: "/imprezy-okolicznosciowe", label: "Alkalmi rendezvények", desc: "Meghitt rendezvények és összejövetelek." },
        { href: "/kontakt", label: "Kapcsolat", desc: "Érdeklődjön időpontról, menüről és csoportos ebédekről." },
      ],
    },

    cta: {
      title: "Rendeljen ebédet vagy érdeklődjön a napi menüről",
      text: "Írja meg, hányan lesznek és mikorra — összeállítunk egy javaslatot és visszaigazoljuk az időpontot.",
      button: "Üzenet küldése",
    },

    schema: {
      serviceName: "Napi menü és házias ebédek — Varsó",
      serviceDescription:
        "Naponta készülő házias ebédek (napi menü), lengyel konyha, ebédek csoportoknak és házhozszállítás Varsóban. Restauracja KŁOSY, Al. Jerozolimskie 123a.",
    },
  },

  imprezy: {
    hero: {
      eyebrow: "Restauracja KŁOSY · Varsó, Ochota",
      title: "Alkalmi rendezvények Varsóban",
      subtitle:
        "Meghitt születésnapok, évfordulók, valamint családi és céges összejövetelek az Al. Jerozolimskie 123a alatt — házias konyhával és nyugodt kiszolgálással, több száz fős zajos rendezvények nélkül.",
      ctaLabel: "Időpont egyeztetése",
    },

    facts: [
      { value: "Családi rendezvények", label: "Születésnapok, évfordulók, összejövetelek" },
      { value: "Céges összejövetelek", label: "Ebédek és kávészünetek" },
      { value: "Kívánság szerinti menü", label: "A vendégekhez igazítva" },
      { value: "Varsó belvárosa", label: "Ochota, Al. Jerozolimskie 123a" },
    ],

    occasionsSection: {
      eyebrow: "Milyen rendezvényeket szervezünk",
      title: "Alkalmak, amelyeket a KŁOSY-ban készítünk elő",
      intro:
        "Minden rendezvényt egyénileg egyeztetünk — a vendéglétszámtól és az időponttól a menüig. Leggyakrabban a következőket szervezzük:",
      occasions: [
        {
          title: "Születésnapok",
          desc:
            "Születésnapok gyerekeknek és felnőtteknek a család és a barátok társaságában. A menüt a vendégek korához és az alkalomhoz igazítjuk — a tortás ebédtől a szeretteinknek szóló vacsoráig. A létszámot és a lefolyást az érdeklődésben egyeztetjük.",
        },
        {
          title: "Évfordulók",
          desc:
            "Házassági évfordulók, jubileumok és céges évfordulók nyugodt, meleg hangulatban. A meghittségre és a jó ételre helyezzük a hangsúlyt a zajos rendezvény helyett — az összejövetel jellegéhez igazított menüvel és kiszolgálással.",
        },
        {
          title: "Családi összejövetelek",
          desc:
            "Közös ebéd vagy vacsora az egész családnak — alkalom nélkül vagy alkalomból. Megterítjük az asztalt tucatnyi fő számára, figyelembe vesszük a vegetáriánus fogásokat és az előzetesen megadott allergiákra vonatkozó információkat.",
        },
        {
          title: "Céges összejövetelek",
          desc:
            "Csapatösszejövetelek, üzleti ebédek és kávészünetek. Helyben vagy házhozszállításos cateringként szervezzük meg őket Varsó területén. A formát és az időpontot a cég napirendjéhez igazítjuk.",
        },
      ],
    },

    ambianceSection: {
      eyebrow: "Meghitten és családiasan",
      title: "Nyugodt, családias hangulat egy nagy bankett-terem helyett",
      paragraphs: [
        "Termünk az Atlas Tower épületében található, az Al. Jerozolimskie 123a alatt. A pontos emeletet és a megközelítési útmutatót a kapcsolatfelvételkor egyeztetjük. A nyugodt, családias hangulatra helyeztük a hangsúlyt — egy nagy bankett-terem helyett olyan teret kínálunk, ahol a vendégek jól hallják egymást és otthon érzik magukat.",
        "A menüt a rendezvény típusához és a vendégek igényeihez igazítjuk — figyelembe vesszük a vegetáriánus fogásokat és az érdeklődésben megadott allergiákra vonatkozó információkat.",
        "A meghitt rendezvényekre specializálódtunk. A terem pontos befogadóképességét és a maximális vendéglétszámot a kapcsolatfelvételkor erősítjük meg, mivel ezek az asztalok elrendezésétől és a rendezvény jellegétől függnek.",
      ],
      capacityLabel: "Férőhelyek száma a teremben:",
      maxGuestsLabel: "Maximális vendéglétszám a rendezvényen:",
      largerGroupsLabel: "Nagyobb csoportok:",
      largerGroupsTextBefore: "nagyobb létszám esetén házhozszállításos cateringet javaslunk —",
      largerGroupsLink: "tekintse meg a cateringkínálatot",
    },

    processSection: {
      eyebrow: "Hogyan zajlik a szervezés",
      title: "Az érdeklődéstől a rendezvény napjáig",
      intro:
        "Egy rendezvény szervezése a KŁOSY-ban néhány egyszerű lépésben zajlik — végigvezetjük rajtuk az első kapcsolatfelvételtől egészen a rendezvény napjáig:",
      steps: [
        ["1", "Kapcsolatfelvétel", "Üzenetet küld az űrlapon, vagy felhív minket."],
        ["2", "Időpont", "Visszaigazoljuk a kiválasztott dátum elérhetőségét."],
        ["3", "Menü", "A menüt a rendezvény típusához és a vendégekhez igazítjuk."],
        ["4", "Előkészítés", "Előkészítjük a termet vagy a cateringet."],
        ["5", "Rendezvény", "A rendezvény napján gondoskodunk a kiszolgálásról."],
      ],
      note:
        "Az üzenet elküldése után az étterem visszaigazolja az időpont elérhetőségét, és menüjavaslatot készít.",
      foundationTextBefore: "Az étterem a következő szervezet mellett működik:",
      foundationTextAfter:
        ", a bevétel pedig az Alapítvány alapszabályi céljait támogatja. Ha a KŁOSY-t választja a rendezvényéhez, egyúttal ezt a tevékenységet is támogatja.",
    },

    photoStripHeading: "Tekintse meg munkáinkat",

    related: {
      heading: "Nézze meg ezt is",
      links: [
        {
          href: "/komunie-chrzciny",
          title: "Elsőáldozás és keresztelő",
          desc: "Családi elsőáldozási és keresztelői rendezvények menüvel gyerekeknek és felnőtteknek.",
        },
        {
          href: "/wesela-rocznice",
          title: "Esküvők és évfordulók",
          desc: "Meghitt esküvők és jubileumok a legközelebbiek társaságában.",
        },
        {
          href: "/catering",
          title: "Catering",
          desc: "Céges és magán catering — helyben vagy házhozszállítással Varsó területén.",
        },
      ],
    },

    faqHeading: "Gyakori kérdések",

    finalCta: {
      title: "Tervezze meg rendezvényét a KŁOSY-ban",
      text: "Írja meg, mit tervez — válaszolunk egy időpont- és menüjavaslattal.",
      button: "Üzenet küldése",
    },

    jsonLd: {
      breadcrumbHome: "Főoldal",
      breadcrumbCurrent: "Alkalmi rendezvények",
      serviceName: "Alkalmi rendezvények szervezése — Varsó",
      serviceDescription:
        "Meghitt alkalmi rendezvények a varsói KŁOSY étteremben az Al. Jerozolimskie 123a alatt: születésnapok, évfordulók, családi és céges összejövetelek, a vendégekhez igazított menüvel, helyszíni kiszolgálással vagy házhozszállításos cateringgel.",
    },
  },

  komunie: {
    hero: {
      eyebrow: "Családi rendezvények Varsóban",
      title: "Elsőáldozás és keresztelő a KŁOSY étteremben",
      subtitle:
        "Meghitt terem Ochotán, néhány percre Varsó belvárosától. Rendezvények az elsőáldozás és a keresztelő után — menüvel gyerekeknek és felnőtteknek, valamint helyszíni kiszolgálással.",
      alt: "Nakryty stół przygotowany na kameralne przyjęcie komunijne w Restauracji KŁOSY",
      ctaLabel: "Időpont egyeztetése",
    },

    facts: [
      { value: "Meghitt", label: "Meghitt rendezvények" },
      { value: "Mindenkinek", label: "Menü gyerekeknek és felnőtteknek" },
      { value: "Helyben", label: "Helyszíni kiszolgálás" },
      { value: "Ochota", label: "Varsó, Ochota" },
    ],

    charakter: {
      eyebrow: "A helyszín jellege",
      title: "Meghitt helyszín egy családi ünnepséghez",
      alt: "Stół komunijny z dekoracją balonową w Restauracji KŁOSY",
      p1: "Az elsőáldozás és a keresztelő családi ünnepség, nem nagyszabású esemény — és pontosan így is állunk hozzájuk. A KŁOSY egy nyugodt, meghitt étterem, ahol könnyű asztal mellett beszélgetni, a gyerekeknek pedig van helyük a felnőttek mellett. A házias, lengyel konyhára és az egyszerű, meleg hangulatra helyezzük a hangsúlyt egy zajos bankett-terem helyett.",
      p2Before: "Az Al. Jerozolimskie 123a alatt vagyunk, a varsói Ochota kerületben, az Atlas Tower épületében. Ez egy jól megközelíthető helyszín a belváros közelében — kényelmes a Varsó különböző részeiből és a városon kívülről érkező vendégek számára. A pontos megközelítést és emeletet a kapcsolatfelvételkor egyeztetjük (",
      p2After: ").",
      p2Fallback: "egyeztetés alatt",
      p3: "Mivel korlátozott számú rendezvényt fogadunk, minden családra odafigyelünk: a menüt a konkrét ünnepséghez igazítjuk, a rendezvény napján pedig gondoskodunk a kiszolgálásról, hogy a házigazdák saját otthonukban vendégek lehessenek. Az éttermet a Fundacja Pomocy Rodzinie „Człowiek w Potrzebie” működteti, így minden rendezvény az alapszabályi céljait is támogatja.",
    },

    uroczystosci: {
      eyebrow: "Elsőáldozás és keresztelő",
      title: "Két különböző ünnepség, egy helyszín",
      alt: "Obsługa kelnerska przy stole podczas przyjęcia w Restauracji KŁOSY",
      p1: "Az első szentáldozás a gyermek és az egész család napja. Elsőáldozási ebédet készítünk olyan menüvel, amely a gyerekeknek és a felnőtteknek egyaránt ízlik, helyet biztosítunk a tortának, a mise után pedig elég egyenesen hozzánk érkezni. Az elsőáldozási szezon (általában május) zsúfolt szokott lenni, ezért az időpontokról érdemes előre érdeklődni.",
      p2: "A keresztelőt egész évben szervezzük, általában a legközelebbiek társaságában — keresztszülők, nagyszülők, család. Ez gyakran nyugodtabb, még meghittebb összejövetel. Gondoskodunk egy csendes, kényelmes helyről, ahol a kicsi és a szülők jól érzik magukat, valamint egy nyugodt, családi ebédhez illő menüről.",
      bullets: [
        "Ebédmenü gyerekeknek és felnőtteknek, hely a tortának",
        "Meghitt asztalelrendezés a legközelebbiek számára",
        "Kiszolgálás, hogy a szülők a gyermekükkel lehessenek",
      ],
    },

    menu: {
      eyebrow: "Menü",
      title: "Menü gyerekeknek és felnőtteknek",
      alt: "Kameralna sala restauracyjna z kwiatami w Restauracji KŁOSY",
      p1: "Egy elsőáldozási vagy keresztelői rendezvényen egy asztalnál ülnek a nagyszülők és a kisgyerekek — ezért állítjuk össze a menüt kétféleképpen. A felnőtteknek házias, lengyel konyhát kínálunk ebédváltozatban; a gyerekeknek egyszerűbb és biztos fogásokat választunk, olyanokat, amelyeket valóban megesznek. Figyelembe vesszük a vegetáriánus fogásokat, valamint az érdeklődésben előzetesen jelzett allergiákat és intoleranciákat.",
      p2: "A konkrét menüpontokat és az árajánlatot egyénileg készítjük el, miután megismertük a vendéglétszámot és az ünnepség jellegét — nem teszünk közzé itt kötött árlistát vagy kész csomagokat, mert minden rendezvényt külön állítunk össze. Az aktuális étlapot alább is letöltheti.",
      seeMenu: "Napi menü megtekintése",
      pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Menü letöltése (PDF)",
      pricingNote:
        "Árak és elérhetőség: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — az érdeklődés után egyénileg egyeztetve.",
    },

    realizacje: {
      heading: "Tekintse meg munkáinkat",
      images: [
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-girlanda.webp",
          alt: "Stół komunijny z girlandą kwiatową w Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/communions/stol-komunijny-balony.webp",
          alt: "Stół komunijny z dekoracją balonową w Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/events/obsluga-kelnerska.webp",
          alt: "Obsługa kelnerska podczas przyjęcia w Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Słodki stół z ciastami na przyjęcie rodzinne",
        },
        {
          src: "/assets/restauracja-klosy/food/pieczona-kaczka.webp",
          alt: "Pieczona kaczka — danie z domowej, polskiej kuchni",
        },
      ],
    },

    checklist: {
      title: "Mit érdemes előkészíteni az érdeklődés előtt",
      intro:
        "Minél több részletet ad meg az elején, annál gyorsabban készítünk pontos menü- és időpontjavaslatot. Nem kell mindent véglegesen tudnia — elegendők a hozzávetőleges információk is.",
      items: [
        "A hozzávetőleges dátum és az az időpont, amikor a mise / templomi ünnepség véget ér.",
        "A felnőttek és a gyerekek száma (külön) — ez befolyásolja a menü és a terem elrendezését.",
        "Információk az allergiákról, intoleranciákról és a vegetáriánus fogások iránti igényről.",
        "Saját tortát biztosítanak-e, vagy az étterem gondoskodjon róla.",
        "Esetleges dekorációk vagy alkalmi elemek, amelyeket magukkal szeretnének hozni.",
        "Lesznek-e a vendégek között kisgyermekek, akiknek kényelmes, nyugodt helyre van szükségük.",
      ],
    },

    lokalizacja: {
      title: "Megközelítés és kapcsolat",
      intro:
        "A KŁOSY étterem Varsó szívében, Ochotán található — jól megközelíthető ponton az egész városból és környékéről érkező vendégek számára.",
      addressSuffix: "egyeztetés alatt",
    },

    faq: {
      title: "Elsőáldozás és keresztelő — gyakori kérdések",
    },

    cta: {
      title: "Tervezzük meg együtt az elsőáldozást vagy keresztelőt",
      text: "Írja meg, mikorra tervezik az ünnepséget és hány vendégre számítanak — jelentkezünk egy időpont- és menüjavaslattal. Kötelezettség nélkül.",
      sendLabel: "Üzenet küldése",
      callLabel: "Hívás:",
      seeAlso: "Lásd még:",
      links: {
        wesela: "Esküvők és évfordulók",
        imprezy: "Alkalmi rendezvények",
        catering: "Catering",
        menuDnia: "Napi menü",
      },
    },

    schema: {
      breadcrumbHome: "Főoldal",
      breadcrumbCurrent: "Elsőáldozás és keresztelő",
      serviceName: "Elsőáldozási és keresztelői rendezvények",
      serviceDescription:
        "Meghitt elsőáldozási és keresztelői rendezvények szervezése a varsói KŁOSY étteremben — menü gyerekeknek és felnőtteknek, terem és helyszíni kiszolgálás.",
    },
  },

  wesela: {
    hero: {
      alt: "Sala rustykalna przygotowana na kameralne przyjęcie weselne w Restauracji KŁOSY",
      eyebrow: "Esküvők és évfordulók",
      title: "Meghitt esküvők és évfordulók Varsóban",
      subtitle:
        "Szűk kör, házias konyha és nyugodt kiszolgálás — több száz fős termek zaja nélkül. Esküvői, évfordulós és jubileumi rendezvények az Al. Jerozolimskie 123a alatt, Ochotán.",
      ctaLabel: "Időpont egyeztetése",
    },

    facts: {
      weselaValue: "Meghitt esküvők",
      weselaLabel: "Szűk kör számára, egy rendezvény egy időpontban",
      roczniceValue: "Évfordulók és jubileumok",
      roczniceLabel: "Kerek évfordulók, jubileumok és találkozók évek után",
      menuValue: "Egyedi menü",
      menuLabel: "A rendezvény jellegéhez és a vendégek igényeihez igazítva",
      pakietyValueAfter: " csomagok",
      pakietyLabel: "A csomagjavaslatokat az érdeklődésre válaszolva erősítjük meg",
    },

    intro: {
      before:
        "A KŁOSY étterem az Al. Jerozolimskie 123a alatt (Ochota, Atlas Tower épület) meghitt esküvőket, valamint évfordulós és jubileumi rendezvényeket szervez. A szűk körre, a házias konyhára és a nyugodt kiszolgálásra helyezzük a hangsúlyt — több száz fős termek zaja nélkül. Az étterem a következő szervezet mellett működik: ",
      after: ", a bevétel pedig az Alapítvány alapszabályi céljait támogatja.",
    },

    wesele: {
      alt: "Nakryty stół bankietowy przygotowany na kameralne wesele w Restauracji KŁOSY",
      eyebrow: "Meghitt esküvő",
      title: "Meghitt esküvő — szűk kör számára",
      p1: "Nem minden esküvőnek kell nagyszabású rendezvénynek lennie. Egyre több pár választja a meghitt formát: a legközelebbi család és barátok, egyetlen terem, nyugodt napirend és menü, amely valóban ízlik. Ez a forma illik a KŁOSY-hoz — helyben főzünk, minden asztalt név szerint ismerünk, és nem osztjuk meg a figyelmünket több rendezvény között.",
      p2: "A meghitt esküvő jól működik a környéken tartott polgári esküvő esetén, a szertartás utáni szűk körű fogadásnál vagy egy családias hangulatú „második napon”. Merev forgatókönyv helyett Önökkel együtt egyeztetjük a menetet: köszöntő, ebéd, pohárköszöntő, desszert és annyi tér a beszélgetésekre, amennyire szükségük van.",
      p3Before:
        "A vendéglétszámot, a terem elrendezését és a rendezvény időpontját az érdeklődésük után egyénileg egyeztetjük. A maximális férőhelyek számát a kapcsolatfelvételkor erősítjük meg — ",
      p3After: ".",
      points: [
        { t: "Meghittség", d: "Egy rendezvény az adott időpontban, a kiszolgálás teljes figyelme az Önök vendégeire." },
        { t: "Házias konyha", d: "Helyben főzött fogások, az esküvői menühöz és a vendégek igényeihez igazítva." },
        { t: "Szűk kör", d: "Forma a családnak és a barátoknak, több száz fős zajos terem nélkül." },
        { t: "Nyugodt menet", d: "A nap menetét Önökkel együtt egyeztetjük — kapkodás és káosz nélkül." },
      ],
    },

    rocznice: {
      alt: "Kameralna sala z dekoracją kwiatową na przyjęcie rocznicowe w Restauracji KŁOSY",
      eyebrow: "Évfordulók és jubileumok",
      title: "Évfordulók és jubileumok",
      p1: "Kerek házassági évforduló, egy pár jubileuma, a család egyik idős tagjának születésnapja vagy egy találkozó évek után — az évfordulóknál a legfontosabb az asztalnál ülő emberek. Ezért úgy szervezzük meg őket, hogy senkinek se kelljen pultok között rohangálnia: Önök leülnek, a többiről pedig mi gondoskodunk.",
      listHeading: "Milyen évfordulókat szervezünk",
      items: [
        "házassági évfordulók és párok jubileumai",
        "kerek születésnapok és névnapok",
        "családi találkozók évek után",
        "jubileumok és céges összejövetelek szűk körben",
      ],
      p2Before:
        "Minden rendezvényt egyénileg árazunk és állítunk össze az érdeklődés után. A kész esküvői csomagok és a példa évfordulós menük: ",
      p2After: " — az Önök érdeklődésére válaszolva készítjük el őket, menü- és időpontjavaslattal együtt.",
    },

    menu: {
      alt: "Słodki stół z ciastami i deserami przygotowany na przyjęcie w Restauracji KŁOSY",
      eyebrow: "Menü és személyre szabás",
      title: "Egyedi menü esküvőre és évfordulóra",
      p1: "Nem egyetlen, kötött menüsort kínálunk. A menüt a rendezvény jellegéhez, a napszakhoz és a vendégek igényeihez igazítjuk. Elég, ha az érdeklődésben megírják, hány főt terveznek és mire vágynak — a többit közösen finomítjuk.",
      cards: [
        { t: "Igazítás a vendégekhez", d: "Figyelembe vesszük a vegetáriánus fogásokat és az érdeklődésben megadott allergiákra vonatkozó információkat." },
        { t: "A rendezvény formája", d: "Ültetett ebéd, felszolgált fogások vagy büféforma — Önökkel együtt egyeztetjük." },
        { t: "Pohárköszöntő és desszert", dBefore: "Torta, desszert és az édes asztal az étterem részéről vagy a választott formában. Részletek: ", dAfter: "." },
        { t: "Italok", dBefore: "Az italkínálatot és az esetleges felszolgálást egyénileg egyeztetjük. Részletek és árak: ", dAfter: "." },
      ],
      noteBefore: "Az aktuális menü és a példajavaslatok: ",
      noteAfter: ". A csomagok és a menü árait az érdeklődésre válaszolva erősítjük meg.",
    },

    realizacje: {
      heading: "Tekintse meg munkáinkat",
      images: [
        { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "Nakryty stół bankietowy na przyjęcie w Restauracji KŁOSY" },
        { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "Sala rustykalna przygotowana na kameralne przyjęcie" },
        { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "Sala nakryta do uroczystego przyjęcia rodzinnego" },
        { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "Słodki stół z ciastami i deserami" },
        { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle z krewetkami — danie z menu Restauracji KŁOSY" },
      ],
    },

    kroki: {
      heading: "Hogyan szervezünk meg egy rendezvényt lépésről lépésre",
      steps: [
        ["1", "Érdeklődés", "Kitölti az űrlapot vagy felhív — megadja a dátumot és a vendéglétszámot."],
        ["2", "Időpont", "Visszaigazoljuk a kiválasztott dátum elérhetőségét."],
        ["3", "Menü", "A menüt az esküvőhöz vagy évfordulóhoz és a vendégek igényeihez igazítjuk."],
        ["4", "Egyeztetés", "Pontosítjuk a termet, a nap menetét és a kiszolgálás részleteit."],
        ["5", "Rendezvény", "Az ünnepség napján gondoskodunk a kiszolgálásról."],
      ],
      note: "Az üzenet elküldése után az étterem visszaigazolja az időpont elérhetőségét, valamint menü- és árjavaslatot készít.",
    },

    lokalizacja: {
      heading: "Hol zajlik",
      p1Before: "A KŁOSY étterem a következő címen található: ",
      p1AfterBuilding: " ",
      p1Confirm: "(egyeztetés alatt)",
      p1End: ". A pontos megközelítést, parkolást és az emelet elérhetőségét a kapcsolatfelvételkor egyeztetjük.",
      districtBefore: "(",
      districtAfter: " kerület), a következő épületben: ",
    },

    faq: {
      heading: "Gyakori kérdések az esküvőkről és évfordulókról",
    },

    next: {
      heading: "Lásd még",
      cards: [
        { href: "/komunie-chrzciny", t: "Elsőáldozás és keresztelő", d: "Meghitt családi rendezvények." },
        { href: "/imprezy-okolicznosciowe", t: "Alkalmi rendezvények", d: "Születésnapok, összejövetelek, jubileumok." },
        { href: "/catering", t: "Catering", d: "Céges és magán, házhozszállítással is." },
      ],
    },

    cta: {
      title: "Meghitt esküvőt vagy évfordulót terveznek?",
      text: "Írják meg, hány főre és milyen időpontra gondolnak — válaszolunk egy menü- és árjavaslattal.",
      button: "Üzenet küldése",
    },

    schema: {
      breadcrumbHome: "Főoldal",
      breadcrumbCurrent: "Esküvők és évfordulók",
      serviceName: "Meghitt esküvők és évfordulós rendezvények",
      serviceDescription:
        "Meghitt esküvők, valamint évfordulós és jubileumi rendezvények szervezése a varsói KŁOSY étteremben (Al. Jerozolimskie 123a, Ochota). Egyedi menü és kiszolgálás szűk kör számára.",
    },
  },

  catering: {
    hero: {
      alt: "Bufet cateringowy Restauracji KŁOSY — przekąski caprese przygotowane do podania na spotkaniu firmowym",
      eyebrow: "Catering Varsóban",
      title: "Céges és magán catering — Restauracja KŁOSY",
      subtitle:
        "Házias, lengyel konyha az Ochotán található étteremből — az Önök irodájában, képzésen vagy családi összejövetelen. Helyben vagy házhozszállítással Varsó területén. A céges rendeléseket ÁFÁ-s számlával számoljuk el.",
      ctaLabel: "Időpont egyeztetése",
    },

    facts: [
      { value: "Catering házhozszállítással", label: "Varsó területén" },
      { value: "Céges és magán", label: "Iroda, képzés, családi összejövetel" },
      { value: "Kávészünetek", label: "Kávé, tea és vendéglátás" },
      { value: "ÁFÁ-s számla", label: "Kényelmes elszámolás cégeknek" },
    ],

    intro: {
      alt: "Desery i przekąski cateringowe Restauracji KŁOSY ułożone na tacy",
      eyebrow: "Catering az étteremből",
      title: "Catering étteremből, nem cateringgyárból",
      paragraphs: [
        "A KŁOSY egy működő étterem a varsói Al. Jerozolimskie 123a alatt, az Ochota kerületben, az Atlas Tower épületében. A catering a mindennapi konyhánk meghosszabbítása: azokat a fogásokat, amelyeket a vendégeknek helyben felszolgálunk, elvitelre és házhozszállításra is elkészítjük. Így egy céges vagy családi összejövetelre ugyanaz a házias, lengyel konyha kerül, nem pedig névtelen adagok egy gyártósorról.",
        "Két fő irányt szolgálunk ki. Az első a céges catering (B2B): ebédek csapatoknak, kávészünetek, képzések és konferenciák kiszolgálása, valamint rendszeres irodai szállítások — mindezt ÁFÁ-s számlával elszámolva. A második a magán catering: családi összejövetelek, születésnapok, évfordulók és meghitt ünnepségek, amelyekre kiszállítjuk az ételt vagy elkészítjük átvételre.",
        "A rendelés méretétől függetlenül a menüt egyénileg állítjuk össze — a létszámhoz, a napszakhoz és az összejövetel jellegéhez igazítva. Figyelembe vesszük a vegetáriánus fogásokat, valamint az érdeklődésben jelzett allergiákat és intoleranciákat. Nem teszünk közzé itt kötött árlistát, mert minden rendelést külön árazunk a részletek megismerése után.",
      ],
    },

    typesSection: {
      title: "Mit készítünk el a catering keretében",
      intro:
        "Egyetlen kávészünettől a csapat rendszeres ebédjéig — alább a leggyakoribb cateringformák, amelyeket Varsóban biztosítunk.",
      types: [
        {
          title: "Céges catering",
          body: "Irodai összejöveteleket és céges rendezvényeket szolgálunk ki Ochotán és környékén — a munkareggeliktől a csapatebédeken át az ügyféltalálkozók vendéglátásáig. ÁFÁ-s számlával elszámolva, egyetlen kapcsolattartóval a mi oldalunkon.",
          points: [
            "Ebédek csapatnak és ügyféltalálkozókhoz",
            "Catering konferenciákra és céges rendezvényekre",
            "Folyamatos együttműködés vagy egyszeri rendelés",
          ],
        },
        {
          title: "Magán catering",
          body: "Családi összejövetelek, születésnapok, évfordulók és meghitt ünnepségek — házias, lengyel konyhát készítünk az Önök rendezvényére. A cateringet átveheti nálunk, vagy kiszállítjuk a megadott varsói címre.",
          points: [
            "Családi összejövetelek és születésnapok",
            "Vendéglátás meghitt ünnepségekre",
            "Átvétel helyben vagy szállítás a címre",
          ],
        },
        {
          title: "Catering házhozszállítással",
          body: "Nem kell az ételért jönniük — kiszállítjuk a cateringet Varsó területén. A szállítási területet, az időpontot és a kiadás módját a rendeléskor egyeztetjük, hogy a fogások frissen és időben érkezzenek meg.",
          points: [
            "Szállítás Varsó területén",
            "Egyeztetett kiadási időpont",
            "Szállításra csomagolt fogások",
          ],
        },
        {
          title: "Kávészünetek",
          body: "Kávészünet képzéshez, workshophoz vagy vezetőségi értekezlethez — kávé, tea, víz és apró sós-édes vendéglátás. A kínálatot az összejövetel hosszához és a résztvevők számához igazítjuk.",
          points: [
            "Kávé, tea, víz",
            "Apró sós és édes vendéglátás",
            "Folyamatos coffee break vagy megadott időpontokban",
          ],
        },
        {
          title: "Üzleti ebédek",
          body: "Ebéd a csapatnak az irodából való kilépés nélkül — a napi menünkre épülő ebédmenük, kényelmesen tálalható formában. Jól beválik a munkatársak rendszeres étkeztetésénél és az egész napos összejöveteleknél.",
          points: [
            "Ebédmenük a napi menüből",
            "Vegetáriánus opciók",
            "Az irodában kényelmesen tálalható forma",
          ],
        },
        {
          title: "Catering képzésekre és csoportoknak",
          body: "Képzéseket, workshopokat és csoportos összejöveteleket szolgálunk ki — a kávészüneteket a résztvevőknek szóló ebéddel kombináljuk. Ebédeket is készítünk csoportoknak, köztük iskolai csoportoknak, az egyeztetett adagszámban.",
          points: [
            "Képzések teljes kiszolgálása (szünet + ebéd)",
            "Ebédek csoportoknak, köztük iskolaiaknak",
            "Előre egyeztetett, állandó adagszám",
          ],
        },
      ],
    },

    b2bSection: {
      alt: "Croissanty i drobne wypieki na przerwę kawową przygotowane przez Restaurację KŁOSY",
      eyebrow: "Cégeknek",
      title: "Céges catering ÁFÁ-s számlával",
      lead:
        "Cégeknek a catering legyen elsősorban kényelmes és kiszámítható. Ezért az üzleti rendeléseket egyetlen kapcsolattartóval kezeljük a mi oldalunkon, ÁFÁ-s számlával számoljuk el, és kiszolgáljuk mind az egyszeri rendezvényeket, mind a rendszeres irodai szállításokat.",
      points: [
        {
          title: "ÁFÁ-s számla",
          body: "Minden céges rendelést ÁFÁ-s számlával számolunk el — kényelmes a könyvelésnek és a rendszeres együttműködésnél.",
        },
        {
          title: "Egy kapcsolattartó",
          body: "A mi oldalunkon egyetlen személy kíséri Önöket: a menü egyeztetésétől az időponton át a rendelés kiadásáig és elszámolásáig.",
        },
        {
          title: "Rendszeres rendelések",
          body: "Kiszolgáljuk mind az egyszeri rendezvényeket, mind az állandó, rendszeres szállításokat — pl. a csapat rendszeres ebédjeit.",
        },
        {
          title: "Az Alapítvány támogatása",
          body: "Ha nálunk rendel, egyúttal a „Człowiek w Potrzebie” Alapítvány alapszabályi céljait is támogatja — ez sok cég számára fontos érv.",
        },
      ],
      note:
        "A számlázási adatokat (NIP, cégnév, cím) a rendelés visszaigazolásakor gyűjtjük be. Minimális rendelési értékek és szállítási terület: [DO UZUPEŁNIENIA: minimalne zamówienie cateringu firmowego / strefa dostawy] — az érdeklődéskor egyeztetve.",
    },

    groupsSection: {
      alt: "Słodki stół z ciastami przygotowany przez Restaurację KŁOSY",
      eyebrow: "Szervezett csoportok",
      title: "Ebédek csoportoknak, köztük iskolai csoportoknak",
      paragraphs: [
        "Ebédeket készítünk szervezett csoportoknak — kirándulóknak, iskolai csoportoknak, képzések és workshopok résztvevőinek. Az adagok számát előre egyeztetjük, így minden résztvevő meleg, laktató ételt kap sorban állás és várakozás nélkül.",
        "Az iskolai csoportoknak egyszerűbb és biztos fogásokat választunk, szükség esetén vegetáriánus változatokat készítünk és figyelembe vesszük a jelzett allergiákat. A csoportos cateringet helyben az étteremben is biztosíthatjuk, vagy kiszállíthatjuk egy egyeztetett varsói helyszínre.",
      ],
      note:
        "A csoportos menük árai: [DO UZUPEŁNIENIA: cennik obiadów dla grup / grup szkolnych] — a létszám megadása után egyénileg egyeztetve.",
    },

    menuSection: {
      title: "Cateringmenü és árajánlat",
      intro:
        "A cateringmenüt a mindennapi étlapunkra és a napi menüre építjük — az éttermen kívüli tálaláshoz igazított változatban. A konkrét menüket és az árajánlatot egyénileg készítjük el, miután megismertük a létszámot, az összejövetel jellegét és a kiadás formáját (átvétel vagy szállítás). Az aktuális étlapot alább megtekintheti és letöltheti:",
      menuDniaLink: "Napi menü megtekintése",
      pdfPlaceholder: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
      pdfDownload: "Menü letöltése (PDF)",
      note:
        "Cateringárak és csomagok: [DO UZUPEŁNIENIA: cennik / pakiety cateringu] — az érdeklődés után egyénileg egyeztetve.",
    },

    processSection: {
      title: "Hogyan rendeljen cateringet — lépésről lépésre",
      intro: "A folyamat egyszerű: négy lépés az első érdeklődéstől a rendelés kiadásáig.",
      steps: [
        {
          title: "1. Érdeklődés",
          body: "Üzenetet küld az űrlapon vagy felhív. Megadja a catering típusát (céges / magán), a dátumot, a létszámot, valamint azt, hogy az átvétel nálunk legyen-e, vagy házhozszállítással.",
        },
        {
          title: "2. Menüjavaslat és árajánlat",
          body: "Összeállítunk egy menüjavaslatot az Önök igényei szerint, és elkészítjük az árajánlatot. Figyelembe vesszük a vegetáriánus fogásokat, valamint az érdeklődésben jelzett allergiákat és intoleranciákat.",
        },
        {
          title: "3. Visszaigazolás",
          body: "Visszaigazoljuk a részleteket: a kiadás vagy szállítás időpontját, az adagok számát és az elszámolás formáját. Cégeknek alapértelmezetten ÁFÁ-s számlát állítunk ki.",
        },
        {
          title: "4. Megvalósítás",
          body: "Az egyeztetett időpontban elkészítjük a rendelést helyben átvételre, vagy kiszállítjuk a megadott varsói címre.",
        },
      ],
    },

    checklistSection: {
      title: "Mit érdemes megadni a cateringgel kapcsolatos érdeklődésben",
      intro:
        "Minél több részletet ad meg az elején, annál gyorsabban készítünk pontos menüjavaslatot és árajánlatot. Elegendők a hozzávetőleges információk is.",
      items: [
        "A catering típusa: céges vagy magán — és szükség van-e ÁFÁ-s számlára.",
        "A kiadás vagy szállítás dátuma és időpontja, esetleg a kávészünetek időpontjai.",
        "A létszám és a forma: átvétel helyben vagy szállítás a címre.",
        "Az összejövetel jellege: ebéd, kávészünet, képzés, csoportos ebéd.",
        "Információk az allergiákról, intoleranciákról és a vegetáriánus fogások iránti igényről.",
        "A rendelés egyszeri-e, vagy rendszeres legyen (pl. állandó ebédek).",
      ],
    },

    photoStrip: {
      heading: "Tekintse meg munkáinkat",
      images: [
        {
          src: "/assets/restauracja-klosy/catering/catering-bufet-caprese.webp",
          alt: "Bufet cateringowy z przekąskami caprese przygotowany przez Restaurację KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-croissanty.webp",
          alt: "Croissanty i drobne wypieki na przerwę kawową",
        },
        {
          src: "/assets/restauracja-klosy/catering/catering-desery-przekaski.webp",
          alt: "Desery i przekąski cateringowe ułożone na tacy",
        },
        {
          src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp",
          alt: "Słodki stół z ciastami od Restauracji KŁOSY",
        },
        {
          src: "/assets/restauracja-klosy/food/desery-owsiane-taca.webp",
          alt: "Desery owsiane podane na tacy",
        },
      ],
    },

    locationSection: {
      title: "Honnan szállítunk és kapcsolat",
      intro:
        "A cateringet az Ochotán található éttermünkben készítjük el és Varsó területén szállítjuk ki. Ez egy jól megközelíthető pont, közel a belvároshoz — kényelmes az irodai szállításoknál és a város különböző részein tartott összejöveteleknél.",
      buildingSuffix: "egyeztetés alatt",
      note:
        "A szállítási terület és a szállítás költsége: [DO UZUPEŁNIENIA: strefa dostawy cateringu / koszt dowozu] — a rendeléskor erősítjük meg.",
    },

    faqHeading: "Catering — gyakori kérdések",

    finalCta: {
      title: "Rendeljünk együtt cateringet",
      text:
        "Írja meg, mikorra és hány főre van szükségük cateringre, valamint hogy házhozszállítással kérik-e — jelentkezünk egy menüjavaslattal és árajánlattal. Cégeknek alapértelmezetten ÁFÁ-s számlát állítunk ki.",
      sendButton: "Üzenet küldése",
      callPrefix: "Hívás:",
      relatedLabel: "Lásd még:",
      related: [
        { href: "/menu-dnia", label: "Napi menü" },
        { href: "/imprezy-okolicznosciowe", label: "Alkalmi rendezvények" },
        { href: "/komunie-chrzciny", label: "Elsőáldozás és keresztelő" },
        { href: "/wesela-rocznice", label: "Esküvők és évfordulók" },
      ],
    },

    jsonLd: {
      breadcrumbHome: "Főoldal",
      breadcrumbCurrent: "Catering",
      serviceName: "Céges és magán catering Varsóban",
      serviceDescription:
        "Catering a varsói KŁOSY étteremben — céges és magán, helyben vagy házhozszállítással: üzleti ebédek, kávészünetek, catering képzésekre, valamint ebédek iskolai csoportoknak. Elszámolás ÁFÁ-s számlával.",
    },
  },

  galeria: {
    page: {
      eyebrow: "Restauracja KŁOSY · Varsó",
      title: "Galéria",
      intro:
        "Mielőtt asztalt, csoportos ebédet vagy családi rendezvényt foglalna, nézze meg, hogyan néz ki a helyszínünk az Al. Jerozolimskie 123a alatt, Varsó szívében. Alább megtalálja a teremről, a megterített asztalokról és a lengyel konyha példafogásairól készült fényképeket. Az anyagokat folyamatosan bővítjük — ha keres valamit, írjon vagy hívjon, és többet is küldünk.",
      ctaLabel: "Érdeklődés időpontról vagy árajánlatról",
    },

    breadcrumbs: {
      home: "Főoldal",
      current: "Galéria",
    },

    section: {
      title: "Galéria",
      intro:
        "Nézzen be hozzánk, mielőtt eljönne — terem, asztalok és példafogások. A fényképeket folyamatosan bővítjük.",
      filtersAriaLabel: "Galériaszűrők",
      all: "Összes",
      empty: "[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]",
      zoomLabel: "Fénykép nagyítása:",
      closeLabel: "Galéria bezárása",
      prevLabel: "Előző fénykép",
      nextLabel: "Következő fénykép",
    },

    categories: {
      Jedzenie: "Ételek",
      Sala: "Terem",
      Komunie: "Elsőáldozás",
      Catering: "Catering",
      Dekoracje: "Dekorációk",
      "Na wynos": "Elvitelre",
    },

    alts: {
      "jedzenie-pierogi":
        "Pierogi z jagodami ze śmietaną w Restauracji KŁOSY w Warszawie, kuchnia polska",
      "jedzenie-kaczka":
        "Pieczona kaczka z czerwoną kapustą — kuchnia polska w Restauracji KŁOSY w Warszawie",
      "jedzenie-golonka":
        "Obiad domowy w KŁOSY Warszawa: pieczona golonka, zupa i deser",
      "jedzenie-pieczen":
        "Domowy obiad — pieczeń z jajkiem, ziemniaki i surówki w Restauracji KŁOSY w Warszawie",
      "jedzenie-kurczak":
        "Obiady domowe w Restauracji KŁOSY w Warszawie — kurczak i makaron w sosie",
      "jedzenie-tagliatelle":
        "Tagliatelle z krewetkami w Restauracji KŁOSY w Warszawie, danie sezonowe",
      "sala-bufet":
        "Sala jadalna Restauracji KŁOSY w Warszawie z bufetem obiadowym i białymi stolikami",
      "sala-nakryta":
        "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do przyjęcia rodzinnego",
      "sala-kameralna":
        "Kameralna sala Restauracji KŁOSY w Warszawie nakryta do rodzinnego obiadu",
      "sala-lampy":
        "Wnętrze Restauracji KŁOSY w Warszawie — sala z bufetem i klimatycznym oświetleniem",
      "komunie-balony":
        "Stół nakryty na przyjęcie komunijne w Restauracji KŁOSY w Warszawie",
      "komunie-girlanda":
        "Aranżacja stołu na komunię z przekąskami w Restauracji KŁOSY w Warszawie",
      "komunie-obsluga":
        "Obsługa kelnerska przy stole komunijnym w Restauracji KŁOSY w Warszawie",
      "catering-caprese":
        "Bufet cateringowy KŁOSY Warszawa z przekąskami caprese, tartinkami i deserami",
      "catering-croissanty":
        "Stół cateringowy KŁOSY w Warszawie z mini croissantami i przekąskami",
      "catering-desery":
        "Słodki i przekąskowy stół cateringowy Restauracji KŁOSY w Warszawie",
      "catering-ciasta":
        "Słodki stół cateringowy — ciasta z truskawkami w Restauracji KŁOSY w Warszawie",
      "dekoracje-bankiet":
        "Stół bankietowy nakryty na przyjęcie rodzinne w Restauracji KŁOSY w Warszawie",
      "dekoracje-rustykalna":
        "Rustykalna sala na komunie i przyjęcia w Restauracji KŁOSY w Warszawie",
      "wynos-desery-taca":
        "Desery owsiane z owocami na wynos w Restauracji KŁOSY w Warszawie",
      "wynos-owsianka":
        "Owsianka z truskawkami w kubku na wynos, Restauracja KŁOSY Warszawa",
      "wynos-czekolada":
        "Deser warstwowy z czekoladą i wiśniami na wynos, KŁOSY Warszawa",
      "wynos-dwa-kubki":
        "Owsianki deserowe na wynos w przytulnym wnętrzu Restauracji KŁOSY w Warszawie",
    },
  },

  polityka: {
    breadcrumb: {
      home: "Főoldal",
      current: "Adatvédelmi szabályzat",
    },

    formEmail: "marketing@restauracjadifferent.pl",

    heading: "Adatvédelmi szabályzat",
    intro:
      "Vigyázunk az Ön magánéletére. Alább elmagyarázzuk, milyen adatokat gyűjtünk a KŁOSY étterem honlapján keresztül, milyen célból és milyen alapon, valamint hogy milyen jogai vannak.",

    administrator: {
      heading: "1. Adatkezelő",
      leadBefore:
        "A személyes adatok kezelője a KŁOSY éttermet működtető szervezet, amelynek székhelye: ",
      todo:
        "[DO UZUPEŁNIENIA: pełna nazwa prawna administratora, NIP/KRS i adres korespondencyjny — do potwierdzenia przez właściciela.]",
      foundationBefore: "Az étterem a következő szervezet mellett működik: ",
      foundationKrs: "KRS",
    },

    sections: [
      {
        heading: "2. Milyen adatokat gyűjtünk",
        paragraphs: [
          "Adatokat kizárólag akkor gyűjtünk, ha azokat önként elküldi az érdeklődő űrlapon (vagy a rendezvénytervezőn) keresztül. Ezek: vezeték- és keresztnév, telefonszám, e-mail-cím, valamint a tervezett rendezvénnyel kapcsolatos információk, amelyeket Ön ad meg (a rendezvény típusa, dátuma, vendéglétszám, helyszín, menüpreferenciák, allergiák, az üzenet tartalma).",
        ],
      },
    ],

    purpose: {
      heading: "3. Cél és jogalap",
      items: [
        "Az Ön érdeklődésének feldolgozása, a visszahívás és a javaslat (időpont, menü, árajánlat) elkészítése — jogalap: a GDPR 6. cikk (1) bekezdés b) és f) pontja (az érintett kérésére tett lépések, valamint az adatkezelő jogos érdeke).",
        "A kapcsolatfelvételhez adott hozzájárulás — a GDPR 6. cikk (1) bekezdés a) pontja (bármikor visszavonhatja, ez nem érinti a visszavonás előtti adatkezelés jogszerűségét).",
      ],
    },

    recipients: {
      heading: "4. Az adatok címzettjei",
      before: "Az űrlapról érkező érdeklődések a következő címre érkeznek: ",
      after:
        ". Az adatokat az űrlap és a levelezés kezelését támogató, megbízható IT-szolgáltatók (pl. az űrlapküldő szolgáltatás szolgáltatója, a levelezés tárhelye) kezelhetik, kizárólag a fenti célok megvalósításához szükséges mértékben.",
    },

    policies: [
      {
        heading: "5. Megőrzési idő",
        paragraphs: [
          "Az adatokat az érdeklődés feldolgozásához és a szolgáltatás esetleges teljesítéséhez szükséges ideig, majd a jogszabályokból eredő ideig, illetve a hozzájárulás visszavonásáig / az eredményes tiltakozás benyújtásáig őrizzük meg.",
        ],
      },
      {
        heading: "6. Az Ön jogai",
        paragraphs: [
          "Önnek joga van: az adatokhoz való hozzáféréshez, azok helyesbítéséhez, törléséhez, a kezelés korlátozásához, az adathordozhatósághoz, a tiltakozáshoz, valamint a hozzájárulás visszavonásához. Joga van továbbá panaszt benyújtani a Személyes Adatok Védelméért Felelős Hivatal Elnökéhez (UODO).",
        ],
      },
      {
        heading: "7. Sütik",
        paragraphs: [
          "A honlap szükséges sütiket, valamint — a bannerben adott hozzájárulás után — analitikai/marketing sütiket használ. A hozzájárulást módosíthatja vagy visszavonhatja a böngészőben tárolt honlapadatok törlésével. A statisztikákat az Ön választásával összhangban gyűjtjük (Consent Mode).",
        ],
      },
    ],

    contact: {
      heading: "8. Kapcsolat az adatokkal kapcsolatban",
      before: "A személyes adatokkal kapcsolatos ügyekben írjon a következő címre: ",
      between: " vagy az általános címre: ",
      after: ".",
    },

    back: "← Vissza a főoldalra",
  },
};
