/**
 * FAQ — answer-friendly (AI SEO/AEO). Odpowiedzi krótkie, konkretne, oparte na faktach.
 * Tam gdzie brak potwierdzonych danych — formułujemy bez zmyślania (kierujemy do kontaktu).
 */
export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Czy w Restauracji KŁOSY można zorganizować komunię?",
    a: "Tak. Restauracja KŁOSY w Warszawie (Al. Jerozolimskie 123a) organizuje przyjęcia komunijne — z menu dopasowanym do gości i obsługą na miejscu. Termin i szczegóły ustalamy indywidualnie po zapytaniu.",
  },
  {
    q: "Czy lokal nadaje się na chrzciny?",
    a: "Tak, organizujemy kameralne przyjęcia chrzcinowe. Po przesłaniu zapytania potwierdzamy dostępność terminu i przygotowujemy propozycję menu.",
  },
  {
    q: "Czy można zorganizować kameralne wesele?",
    a: "Tak. KŁOSY specjalizują się w kameralnych przyjęciach rodzinnych, w tym kameralnych weselach i rocznicach. Liczbę gości i menu ustalamy indywidualnie.",
  },
  {
    q: "Czy restauracja oferuje catering z dostawą?",
    a: "Tak, prowadzimy catering — firmowy i prywatny, w lokalu lub z dostawą na terenie Warszawy. Zakres i formę ustalamy na podstawie zapytania.",
  },
  {
    q: "Czy można zamówić obiady dla grup szkolnych?",
    a: "Tak, przygotowujemy obiady dla grup, w tym grup szkolnych. Prosimy o kontakt w celu ustalenia liczby osób i menu.",
  },
  {
    q: "Gdzie znajduje się Restauracja KŁOSY?",
    a: "Przy Al. Jerozolimskich 123a w Warszawie (dzielnica Ochota), w budynku Atlas Tower. Dokładne piętro i dojazd potwierdzamy w kontakcie.",
  },
  {
    q: "Jak zapytać o dostępny termin?",
    a: "Najszybciej przez formularz zapytania na stronie lub telefonicznie. Po wysłaniu zapytania potwierdzamy dostępność terminu i przygotowujemy propozycję menu.",
  },
  {
    q: "Czy menu można dostosować do gości?",
    a: "Tak. Menu układamy pod typ wydarzenia i preferencje gości — uwzględniamy m.in. dania wegetariańskie oraz informacje o alergiach podane w zapytaniu.",
  },
];
