/**
 * Słownik PL — podstrona „Komunie i chrzciny" (/komunie-chrzciny).
 * Wyodrębniony cały widoczny tekst. Tłumaczenia muszą zachować ten sam zestaw kluczy.
 */
export const komunie = {
  hero: {
    eyebrow: "Przyjęcia rodzinne w Warszawie",
    title: "Komunie i chrzciny w Restauracji KŁOSY",
    subtitle:
      "Kameralna sala na Ochocie, kilka minut od centrum Warszawy. Przyjęcia po Pierwszej Komunii i po chrzcie — z menu dla dzieci i dorosłych oraz obsługą na miejscu.",
    alt: "Nakryty stół przygotowany na kameralne przyjęcie komunijne w Restauracji KŁOSY",
    ctaLabel: "Zapytaj o termin",
  },

  facts: [
    { value: "Kameralne", label: "Kameralne przyjęcia" },
    { value: "Dla wszystkich", label: "Menu dla dzieci i dorosłych" },
    { value: "Na miejscu", label: "Obsługa na miejscu" },
    { value: "Ochota", label: "Warszawa, Ochota" },
  ],

  charakter: {
    eyebrow: "Charakter miejsca",
    title: "Kameralne miejsce na rodzinną uroczystość",
    alt: "Stół komunijny z dekoracją balonową w Restauracji KŁOSY",
    p1: "Komunia i chrzciny to uroczystości rodzinne, a nie wielkie eventy — i tak właśnie do nich podchodzimy. KŁOSY to spokojna, kameralna restauracja, w której łatwo porozmawiać przy stole, a dzieci mają miejsce, żeby pobyć obok dorosłych. Stawiamy na domową, polską kuchnię i prostą, ciepłą oprawę zamiast hałaśliwej sali bankietowej.",
    p2Before: "Mieścimy się przy Al. Jerozolimskich 123a w warszawskiej dzielnicy Ochota, w budynku Atlas Tower. To dobrze skomunikowana lokalizacja blisko centrum — wygodna dla gości przyjeżdżających z różnych części Warszawy oraz spoza miasta. Dokładny dojazd i piętro potwierdzamy w kontakcie (",
    p2After: ").",
    p2Fallback: "do potwierdzenia",
    p3: "Ponieważ przyjmujemy ograniczoną liczbę przyjęć, każdej rodzinie poświęcamy uwagę: menu układamy pod konkretną uroczystość, a w dniu przyjęcia dbamy o obsługę, żeby gospodarze mogli być gośćmi u siebie. Restaurację prowadzi Fundacja Pomocy Rodzinie „Człowiek w Potrzebie”, więc każde przyjęcie wspiera też jej cele statutowe.",
  },

  uroczystosci: {
    eyebrow: "Komunie i chrzciny",
    title: "Dwie różne uroczystości, jedno miejsce",
    alt: "Obsługa kelnerska przy stole podczas przyjęcia w Restauracji KŁOSY",
    p1: "Pierwsza Komunia Święta to dzień dziecka i całej rodziny. Przygotujemy obiad komunijny z menu, które smakuje zarówno dzieciom, jak i dorosłym, znajdziemy miejsce na tort, a po mszy wystarczy przyjść prosto do nas. Sezon komunijny (zwykle maj) bywa intensywny, dlatego o terminy najlepiej pytać z wyprzedzeniem.",
    p2: "Chrzciny organizujemy przez cały rok i zwykle w gronie najbliższych — chrzestni, dziadkowie, rodzina. To często spokojniejsze, jeszcze bardziej kameralne spotkanie. Zadbamy o ciche, wygodne miejsce, w którym maluch i rodzice czują się dobrze, oraz o menu na spokojny, rodzinny obiad.",
    bullets: [
      "Menu obiadowe dla dzieci i dorosłych, miejsce na tort",
      "Kameralny układ stołu dla najbliższych",
      "Obsługa, by rodzice mogli być z dzieckiem",
    ],
  },

  menu: {
    eyebrow: "Menu",
    title: "Menu dla dzieci i dla dorosłych",
    alt: "Kameralna sala restauracyjna z kwiatami w Restauracji KŁOSY",
    p1: "Na przyjęciu komunijnym czy chrzcinowym przy jednym stole siedzą dziadkowie i kilkulatki — dlatego menu układamy dwutorowo. Dla dorosłych proponujemy domową, polską kuchnię w wersji obiadowej; dla dzieci dobieramy dania prostsze i pewne, takie, które faktycznie zjedzą. Uwzględniamy dania wegetariańskie oraz alergie i nietolerancje zgłoszone wcześniej w zapytaniu.",
    p2: "Konkretne pozycje menu i wycenę przygotowujemy indywidualnie po poznaniu liczby gości i charakteru uroczystości — nie publikujemy tu sztywnego cennika ani gotowych zestawów, bo każde przyjęcie układamy osobno. Aktualną kartę dań możesz też pobrać poniżej.",
    seeMenu: "Zobacz menu dnia",
    pdfTodo: "[DO UZUPEŁNIENIA: link do aktualnego menu PDF]",
    pdfDownload: "Pobierz menu (PDF)",
    pricingNote:
      "Ceny i dostępność: [DO UZUPEŁNIENIA: pakiety / ceny przyjęć komunijnych i chrzcinowych] — ustalane indywidualnie po zapytaniu.",
  },

  realizacje: {
    heading: "Zobacz nasze realizacje",
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
    title: "Co warto przygotować przed zapytaniem",
    intro:
      "Im więcej szczegółów podasz na starcie, tym szybciej przygotujemy trafną propozycję menu i terminu. Nie musisz mieć wszystkiego dopięte — wystarczą przybliżone informacje.",
    items: [
      "Przybliżona data oraz godzina, o której skończy się msza / uroczystość w kościele.",
      "Liczba dorosłych i liczba dzieci (osobno) — to wpływa na układ menu i sali.",
      "Informacje o alergiach, nietolerancjach oraz potrzebie dań wegetariańskich.",
      "Czy zapewniacie własny tort, czy ma się nim zająć restauracja.",
      "Ewentualne dekoracje lub elementy okolicznościowe, które chcecie przynieść.",
      "Czy wśród gości będą małe dzieci wymagające wygodnego, spokojnego miejsca.",
    ],
  },

  lokalizacja: {
    title: "Dojazd i kontakt",
    intro:
      "Restauracja KŁOSY mieści się w centrum Warszawy, na Ochocie — dobrze skomunikowanym punkcie dla gości z całego miasta i okolic.",
    addressSuffix: "do potwierdzenia",
  },

  faq: {
    title: "Komunie i chrzciny — najczęstsze pytania",
  },

  cta: {
    title: "Zaplanujmy razem komunię lub chrzciny",
    text: "Napisz, kiedy planujecie uroczystość i ilu spodziewacie się gości — odezwiemy się z propozycją terminu i menu. Bez zobowiązań.",
    sendLabel: "Wyślij zapytanie",
    callLabel: "Zadzwoń:",
    seeAlso: "Zobacz też:",
    links: {
      wesela: "Wesela i rocznice",
      imprezy: "Imprezy okolicznościowe",
      catering: "Catering",
      menuDnia: "Menu dnia",
    },
  },

  schema: {
    breadcrumbHome: "Strona główna",
    breadcrumbCurrent: "Komunie i chrzciny",
    serviceName: "Przyjęcia komunijne i chrzcinowe",
    serviceDescription:
      "Organizacja kameralnych przyjęć komunijnych i chrzcinowych w Restauracji KŁOSY w Warszawie — menu dla dzieci i dorosłych, sala i obsługa na miejscu.",
  },
};
