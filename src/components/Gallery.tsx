"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import clsx from "clsx";

type Filter = "all" | GalleryCategory;

export default function Gallery({ initial = "all" as Filter }: { initial?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initial);
  const [idx, setIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  const current = idx !== null ? items[idx] : null;

  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, next, prev]);

  // Reset lightbox index if filter changes
  useEffect(() => setIdx(null), [filter]);

  return (
    <section className="py-14 lg:py-20 bg-offwhite">
      <div className="max-w-content mx-auto px-5 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All ({galleryItems.length})
          </FilterButton>
          {galleryCategories.map((c) => {
            const count = galleryItems.filter((g) => g.category === c.id).length;
            if (count === 0) return null;
            return (
              <FilterButton key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
                {c.label} ({count})
              </FilterButton>
            );
          })}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {items.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setIdx(i)}
              className="group block w-full mb-4 overflow-hidden rounded-sm bg-ivory ease-smooth"
              aria-label={`View ${g.alt}`}
            >
              <div className="relative" style={{ aspectRatio: `${g.width} / ${g.height}` }}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={i < 8 ? "eager" : "lazy"}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-ivory text-sm font-medium">{g.alt}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-charcoal/70 py-16">No images in this category yet.</p>
        )}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setIdx(null)}
        >
          <button
            onClick={() => setIdx(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-ivory p-2 hover:text-bronze"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory p-2 bg-black/30 hover:bg-black/60 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory p-2 bg-black/30 hover:bg-black/60 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            className="relative max-w-[92vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="object-contain max-h-[85vh] w-auto"
              sizes="92vw"
              priority
            />
            <div className="mt-3 text-center text-ivory/80 text-sm">
              {current.alt} · {idx !== null && `${idx + 1} / ${items.length}`}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 text-xs uppercase tracking-wider2 rounded-sm border transition-colors",
        active
          ? "bg-forest text-ivory border-forest"
          : "border-charcoal/20 text-charcoal/80 hover:border-forest hover:text-forest",
      )}
    >
      {children}
    </button>
  );
}
