/**
 * Słownik PL — podstrona „Wesela i rocznice" (/wesela-rocznice).
 * Kanoniczne źródło tekstów. Tłumaczenia muszą zachować ten sam kształt kluczy.
 * Nazwy własne (KŁOSY, nazwa Fundacji, adres, telefon) oraz znaczniki
 * [DO UZUPEŁNIENIA]/TODO NIE są tłumaczone. Dane kontaktowe/adresowe i znacznik
 * TODO pochodzą z content/restaurant-data.ts (struktura współdzielona) — tu
 * zostają teksty specyficzne dla tej strony.
 */
export const wesela = {
  hero: {
    alt: "Sala rustykalna przygotowana na kameralne przyjęcie weselne w Restauracji KŁOSY",
    eyebrow: "Wesela i rocznice",
    title: "Kameralne wesela i rocznice w Warszawie",
    subtitle:
      "Bliskie grono, domowa kuchnia i spokojna obsługa — bez gwaru sal na setki osób. Przyjęcia weselne, rocznicowe i jubileuszowe przy Al. Jerozolimskich 123a na Ochocie.",
    ctaLabel: "Zapytaj o termin",
  },

  facts: {
    weselaValue: "Kameralne wesela",
    weselaLabel: "Dla bliskiego grona, jedno przyjęcie w terminie",
    roczniceValue: "Rocznice i jubileusze",
    roczniceLabel: "Okrągłe rocznice, jubileusze i spotkania po latach",
    menuValue: "Indywidualne menu",
    menuLabel: "Układane pod charakter przyjęcia i preferencje gości",
    // {todo} podstawiany w komponencie znacznikiem TODO (content/restaurant-data).
    pakietyValueAfter: " pakiety",
    pakietyLabel: "Propozycje pakietów potwierdzamy w odpowiedzi na zapytanie",
  },

  intro: {
    // {foundation} podstawiany w komponencie nazwą Fundacji (nazwa własna).
    before:
      "Restauracja KŁOSY przy Al. Jerozolimskich 123a (Ochota, budynek Atlas Tower) organizuje kameralne wesela oraz przyjęcia rocznicowe i jubileuszowe. Stawiamy na bliskie grono, domową kuchnię i spokojną obsługę — bez gwaru sal na setki osób. Restauracja działa przy ",
    after: ", a zysk wspiera cele statutowe Fundacji.",
  },

  wesele: {
    alt: "Nakryty stół bankietowy przygotowany na kameralne wesele w Restauracji KŁOSY",
    eyebrow: "Wesele kameralne",
    title: "Wesele kameralne — dla bliskiego grona",
    p1: "Nie każde wesele musi być wielkim przyjęciem. Coraz więcej par wybiera kameralną formę: najbliższa rodzina i przyjaciele, jedna sala, spokojny przebieg dnia i menu, które naprawdę smakuje. Taki format pasuje do KŁOSÓW — gotujemy na miejscu, znamy każdy stół z imienia i nie rozpraszamy się na kilka imprez naraz.",
    p2: "Kameralne wesele sprawdza się przy ślubie cywilnym w okolicy, przyjęciu po ceremonii w wąskim gronie albo „drugim dniu” w rodzinnej atmosferze. Zamiast sztywnego scenariusza ustalamy z Wami przebieg: powitanie, obiad, toast, deser i tyle przestrzeni, ile potrzebujecie na rozmowy.",
    // {capacity} podstawiany w komponencie wartością restaurant.capacity.
    p3Before:
      "Liczbę gości, układ sali i godziny przyjęcia ustalamy indywidualnie po Waszym zapytaniu. Maksymalną liczbę miejsc potwierdzamy w kontakcie — ",
    p3After: ".",
    points: [
      { t: "Kameralność", d: "Jedno przyjęcie w danym terminie, pełna uwaga obsługi dla Waszych gości." },
      { t: "Domowa kuchnia", d: "Dania gotowane na miejscu, dopasowane do menu weselnego i preferencji gości." },
      { t: "Bliskie grono", d: "Format dla rodziny i przyjaciół, bez hucznej sali na setki osób." },
      { t: "Spokojny przebieg", d: "Ustalamy harmonogram dnia razem z Wami — bez pośpiechu i chaosu." },
    ],
  },

  rocznice: {
    alt: "Kameralna sala z dekoracją kwiatową na przyjęcie rocznicowe w Restauracji KŁOSY",
    eyebrow: "Rocznice i jubileusze",
    title: "Rocznice i jubileusze",
    p1: "Okrągła rocznica ślubu, jubileusz pary, urodziny seniora rodziny czy spotkanie po latach — rocznice rządzą się tym, że najważniejsi są ludzie przy stole. Dlatego organizujemy je tak, by nikt nie musiał biegać między stoiskami: siadacie, a my zajmujemy się resztą.",
    listHeading: "Jakie rocznice organizujemy",
    items: [
      "rocznice ślubu i jubileusze par",
      "okrągłe urodziny i imieniny",
      "spotkania rodzinne po latach",
      "jubileusze i spotkania firmowe w kameralnym gronie",
    ],
    // {todo} podstawiany w komponencie znacznikiem TODO.
    p2Before:
      "Każde przyjęcie wyceniamy i układamy indywidualnie po zapytaniu. Gotowe pakiety weselne oraz przykładowe menu rocznicowe: ",
    p2After: " — przygotujemy je w odpowiedzi na Wasze zapytanie, wraz z propozycją menu i terminu.",
  },

  menu: {
    alt: "Słodki stół z ciastami i deserami przygotowany na przyjęcie w Restauracji KŁOSY",
    eyebrow: "Menu i personalizacja",
    title: "Indywidualne menu na wesele i rocznicę",
    p1: "Nie podajemy jednego, sztywnego zestawu. Menu układamy pod charakter przyjęcia, porę dnia i preferencje gości. Wystarczy, że w zapytaniu napiszecie, ile osób planujecie i czego oczekujecie — resztę dopracujemy wspólnie.",
    cards: [
      { t: "Dopasowanie do gości", d: "Uwzględniamy dania wegetariańskie oraz informacje o alergiach podane w zapytaniu." },
      { t: "Forma przyjęcia", d: "Obiad zasiadany, dania serwowane lub forma bufetowa — ustalamy razem z Wami." },
      // {todo} podstawiany w komponencie znacznikiem TODO.
      { t: "Toast i deser", dBefore: "Tort, deser i oprawa słodkiego stołu po stronie restauracji lub w wybranej formie. Szczegóły: ", dAfter: "." },
      { t: "Napoje", dBefore: "Zakres napojów i ewentualny serwis ustalamy indywidualnie. Szczegóły i ceny: ", dAfter: "." },
    ],
    // {menuPdf} podstawiany w komponencie wartością restaurant.menuPdf.
    noteBefore: "Aktualne menu i przykładowe propozycje: ",
    noteAfter: ". Ceny pakietów i menu potwierdzamy w odpowiedzi na zapytanie.",
  },

  realizacje: {
    heading: "Zobacz nasze realizacje",
    images: [
      { src: "/assets/restauracja-klosy/events/stol-bankietowy.webp", alt: "Nakryty stół bankietowy na przyjęcie w Restauracji KŁOSY" },
      { src: "/assets/restauracja-klosy/events/sala-rustykalna-przyjecie.webp", alt: "Sala rustykalna przygotowana na kameralne przyjęcie" },
      { src: "/assets/restauracja-klosy/interior/sala-nakryta-przyjecie.webp", alt: "Sala nakryta do uroczystego przyjęcia rodzinnego" },
      { src: "/assets/restauracja-klosy/catering/slodki-stol-ciasta.webp", alt: "Słodki stół z ciastami i deserami" },
      { src: "/assets/restauracja-klosy/food/tagliatelle-krewetki.webp", alt: "Tagliatelle z krewetkami — danie z menu Restauracji KŁOSY" },
    ],
  },

  kroki: {
    heading: "Jak organizujemy przyjęcie krok po kroku",
    steps: [
      ["1", "Zapytanie", "Wysyłasz formularz lub dzwonisz — podajesz datę i liczbę gości."],
      ["2", "Termin", "Potwierdzamy dostępność wybranej daty."],
      ["3", "Menu", "Dobieramy menu pod wesele lub rocznicę i preferencje gości."],
      ["4", "Ustalenia", "Doprecyzowujemy salę, harmonogram dnia i szczegóły obsługi."],
      ["5", "Wydarzenie", "Obsługujemy przyjęcie w dniu uroczystości."],
    ],
    note: "Po wysłaniu zapytania restauracja potwierdzi dostępność terminu i przygotuje propozycję menu oraz wyceny.",
  },

  lokalizacja: {
    heading: "Gdzie się odbywa",
    // {street}, {postalCode}, {city}, {district}, {building} podstawiane z restaurant.address.
    p1Before: "Restauracja KŁOSY mieści się przy ",
    p1AfterBuilding: " ",
    p1Confirm: "(do potwierdzenia)",
    p1End: ". Dokładny dojazd, parking i dostępność piętra potwierdzamy w kontakcie.",
    districtBefore: "(dzielnica ",
    districtAfter: "), w budynku ",
  },

  faq: {
    heading: "Najczęstsze pytania o wesela i rocznice",
  },

  next: {
    heading: "Zobacz też",
    cards: [
      { href: "/komunie-chrzciny", t: "Komunie i chrzciny", d: "Kameralne przyjęcia rodzinne." },
      { href: "/imprezy-okolicznosciowe", t: "Imprezy okolicznościowe", d: "Urodziny, spotkania, jubileusze." },
      { href: "/catering", t: "Catering", d: "Firmowy i prywatny, także z dostawą." },
    ],
  },

  cta: {
    title: "Planujecie kameralne wesele lub rocznicę?",
    text: "Napiszcie, ile osób i jaki termin Was interesuje — odpowiemy z propozycją menu i wyceny.",
    button: "Wyślij zapytanie",
  },

  schema: {
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Wesela i rocznice",
    serviceName: "Kameralne wesela i przyjęcia rocznicowe",
    serviceDescription:
      "Organizacja kameralnych wesel oraz przyjęć rocznicowych i jubileuszowych w Restauracji KŁOSY w Warszawie (Al. Jerozolimskie 123a, Ochota). Indywidualne menu i obsługa dla bliskiego grona.",
  },
};
