import Image from "next/image";
import { assetPath, cn } from "@/lib/utils";

type EditorialSplitProps = {
  image: string; // /assets/...
  alt: string;
  eyebrow?: string;
  title: string;
  reverse?: boolean; // zamienia kolumny (naprzemienność)
  children: React.ReactNode; // treść (akapity, listy)
};

/** Naprzemienny blok zdjęcie + tekst z subtelnym akcentem botanicznym. */
export function EditorialSplit({ image, alt, eyebrow, title, reverse, children }: EditorialSplitProps) {
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div className={cn("relative", reverse && "lg:order-2")}>
          {/* passe-partout: offsetowy podkład w kolorze pszenicy */}
          <span aria-hidden className="absolute -inset-2 -z-10 rounded-[1.6rem] bg-wheat/15" />
          <div className="tint-frame relative aspect-[4/3] overflow-hidden rounded-card shadow-soft ring-1 ring-linen">
            <Image
              src={assetPath(image)}
              alt={alt}
              fill
              loading="lazy"
              sizes="(max-width:1024px) 100vw, 50vw"
              className="img-warm object-cover"
            />
          </div>
        </div>
        <div className={cn(reverse && "lg:order-1")}>
          {eyebrow ? (
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-olive">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl text-forest sm:text-4xl">{title}</h2>
          <div className="mt-4 space-y-4 text-ink/80">{children}</div>
        </div>
      </div>
    </section>
  );
}
