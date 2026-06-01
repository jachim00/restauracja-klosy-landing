import Image from "next/image";
import { assetPath } from "@/lib/utils";

/** Pozioma „taśma" zdjęć z przewijaniem i snapem (bez JS). */
export function PhotoStrip({
  images,
  heading,
}: {
  images: { src: string; alt: string }[];
  heading?: string;
}) {
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        {heading ? <h2 className="mb-6 text-3xl text-forest sm:text-4xl">{heading}</h2> : null}
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:thin]">
        {images.map((img) => (
          <div
            key={img.src}
            className="tint-frame relative aspect-[3/4] w-56 shrink-0 snap-start overflow-hidden rounded-card shadow-soft ring-1 ring-linen sm:w-64"
          >
            <Image
              src={assetPath(img.src)}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="256px"
              className="img-warm object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
