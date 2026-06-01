/** Typy wydarzeń — używane w mini-konfiguratorze i formularzu. */
export type EventType = {
  id: string;
  label: string;
  icon: string; // nazwa ikony lucide-react
  blurb: string;
};

export const eventTypes: EventType[] = [
  { id: "komunia", label: "Komunia", icon: "Sparkles", blurb: "Kameralne przyjęcie komunijne z menu dla dzieci i dorosłych." },
  { id: "chrzest", label: "Chrzest", icon: "Baby", blurb: "Spokojne, rodzinne przyjęcie chrzcinowe w eleganckiej sali." },
  { id: "wesele-kameralne", label: "Wesele kameralne", icon: "Heart", blurb: "Wesele w gronie najbliższych — bez przepychu, z klasą." },
  { id: "rocznica", label: "Rocznica", icon: "Gift", blurb: "Jubileusz, rocznica ślubu lub firmowa — w ciepłej oprawie." },
  { id: "urodziny", label: "Urodziny", icon: "Cake", blurb: "Urodziny dla rodziny i przyjaciół, z menu na życzenie." },
  { id: "spotkanie-rodzinne", label: "Spotkanie rodzinne", icon: "Users", blurb: "Wspólny obiad lub kolacja dla całej rodziny." },
  { id: "spotkanie-firmowe", label: "Spotkanie firmowe", icon: "Briefcase", blurb: "Spotkania zespołów, przerwy kawowe, lunche biznesowe." },
  { id: "catering", label: "Catering", icon: "Truck", blurb: "Catering firmowy i prywatny — w lokalu lub z dostawą." },
  { id: "obiad-grupa", label: "Obiad dla grupy", icon: "UtensilsCrossed", blurb: "Obiady dla grup, w tym grup szkolnych." },
];

export const guestRanges = ["10–20", "21–35", "36–50", "50+", "catering — większa liczba osób"] as const;
export const eventPlaces = ["W lokalu", "Catering z dostawą", "Do ustalenia"] as const;
