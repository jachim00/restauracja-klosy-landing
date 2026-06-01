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
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
            <Image
              src={assetPath(image)}
              alt={alt}
              fill
              loading="lazy"
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* dekoracyjny akcent w rogu */}
          <span aria-hidden className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full border-2 border-wheat/50 lg:h-20 lg:w-20" />
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
