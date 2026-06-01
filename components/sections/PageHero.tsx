import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

type PageHeroProps = {
  image: string; // ścieżka /assets/... (bez basePath)
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
};

/** Pełnoekranowy nagłówek podstrony: duże zdjęcie wtopione w zieleń + tytuł. */
export function PageHero({ image, alt, eyebrow, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div aria-hidden className="absolute inset-0">
        <Image src={assetPath(image)} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/45 to-forest/85" />
      </div>
      <div className="container-x relative z-10 flex min-h-[52vh] flex-col justify-end py-16 sm:min-h-[58vh]">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-wheat">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-xl text-lg text-cream/85">{subtitle}</p> : null}
        {cta ? (
          <Link
            href={cta.href}
            className="mt-7 inline-flex w-fit items-center rounded-full bg-wheat px-6 py-3 font-medium text-forest transition-transform hover:scale-[1.03]"
          >
            {cta.label}
          </Link>
        ) : null}
        {/* dla a11y: prawdziwy opis zdjęcia w ukrytym tekście */}
        <span className="sr-only">{alt}</span>
      </div>
    </section>
  );
}
