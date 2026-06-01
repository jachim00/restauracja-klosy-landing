"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "@/content/gallery";
import { track } from "@/lib/analytics";
import { cn, assetPath } from "@/lib/utils";

export function Gallery() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<string>("Wszystko");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(
    () =>
      filter === "Wszystko"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter]
  );

  const handleFilter = (cat: string) => {
    setFilter(cat);
    setOpenIndex(null);
    track.galleryFilter(cat);
  };

  const open = (index: number) => {
    setOpenIndex(index);
    track.galleryOpen(items[index].id);
  };

  const close = useCallback(() => setOpenIndex(null), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((prev) => {
        if (prev === null) return prev;
        const next = (prev + dir + items.length) % items.length;
        track.galleryOpen(items[next].id);
        return next;
      });
    },
    [items]
  );

  // Klawiatura: Esc zamyka, strzałki nawigują. Blokada scrolla body gdy otwarty.
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, go]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section id="galeria" className="section-y bg-cream">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl">Galeria</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          Zajrzyj do nas, zanim przyjdziesz — sala, stoły i przykładowe dania.
          Zdjęcia uzupełniamy na bieżąco.
        </p>

        {/* Filtry kategorii */}
        <div
          role="tablist"
          aria-label="Filtry galerii"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => handleFilter(cat)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
                filter === cat
                  ? "border-olive bg-olive text-cream"
                  : "border-linen bg-white text-ink/80 hover:border-olive/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Siatka kart */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => open(i)}
              className="group relative block overflow-hidden rounded-card border border-linen bg-white text-left shadow-soft transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
              aria-label={`Powiększ zdjęcie: ${item.alt}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={assetPath(item.src)}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="block px-3 py-2 text-xs font-medium text-olive">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-8 text-ink/60">[DO UZUPEŁNIENIA: zdjęcia w tej kategorii]</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
            onClick={close}
          >
            {/* Zamknij */}
            <button
              type="button"
              onClick={close}
              aria-label="Zamknij galerię"
              className="absolute right-4 top-4 rounded-full bg-cream/90 p-2 text-forest transition-colors hover:bg-cream"
            >
              <X size={22} />
            </button>

            {/* Poprzednie */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-forest transition-colors hover:bg-cream sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Następne */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Następne zdjęcie"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-forest transition-colors hover:bg-cream sm:right-6"
            >
              <ChevronRight size={24} />
            </button>

            {/* Treść lightboxa — stop propagation, by klik w środek nie zamykał */}
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-ink/40">
                <Image
                  src={assetPath(current.src)}
                  alt={current.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm text-cream/85">{current.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
