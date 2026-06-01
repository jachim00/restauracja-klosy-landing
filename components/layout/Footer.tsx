import Link from "next/link";
import { restaurant } from "@/content/restaurant-data";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-cream">Restauracja KŁOSY</p>
          <p className="mt-3 text-sm text-cream/70">{restaurant.legalNote}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-wheat">Kontakt</h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>{restaurant.address.street}</li>
            <li>{restaurant.address.postalCode} {restaurant.address.city}</li>
            <li>{restaurant.address.building}</li>
            <li>
              <a href={`tel:+48${restaurant.contact.phone}`} className="hover:text-wheat">
                tel. {restaurant.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${restaurant.contact.email}`} className="hover:text-wheat">
                {restaurant.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-wheat">Nawigacja</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-wheat">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-wheat">Misja</h2>
          <p className="mt-3 text-sm text-cream/70">
            Restauracja działa przy {restaurant.foundation.name}. Zysk wspiera cele statutowe Fundacji.
          </p>
          <p className="mt-2 text-xs text-cream/50">KRS {restaurant.foundation.krs}</p>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Copyright by{" "}
            <a
              href="https://www.pflgroup.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 underline decoration-wheat/60 underline-offset-2 transition-colors hover:text-wheat"
            >
              PFL Group
            </a>
            . Wszelkie prawa zastrzeżone.
          </p>
          <Link href={restaurant.privacyPolicyUrl} className="hover:text-wheat">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
