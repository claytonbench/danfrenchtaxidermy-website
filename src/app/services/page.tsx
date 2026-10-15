import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { speciesMeta, speciesOrder } from "@/data/services";

export const metadata: Metadata = {
  title: "Taxidermy Services — Antelope, Elk, Deer, Bear",
  description:
    "Shoulder mounts, pedestals, Europeans, rugs, and full landscapes. Explore mount styles for antelope, elk, deer, and bear — fully customized for your trophy room.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Taxidermy Services"
        title="Mounts built around your trophy room."
        description="Every mount is customized. Choose a species to see the full menu of mount styles, poses, plaques, and custom landscape options."
        image="/images/slider3/elk-taxidermy-bull-cow.jpeg"
        imageAlt="Bull elk shoulder mount"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-16 lg:py-24 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid gap-6 md:grid-cols-2">
          {speciesOrder.map((sp) => {
            const s = speciesMeta[sp];
            return (
              <Link
                key={sp}
                href={`/services/${sp}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-forest ease-smooth"
              >
                <Image
                  src={s.hero}
                  alt={`${s.label} taxidermy by Dan French`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <p className="text-bronze uppercase tracking-wider2 text-xs">{sp === "bear" ? "Bear" : s.label} Taxidermy</p>
                  <h3 className="font-serif text-4xl md:text-5xl text-ivory mt-1">{s.label}</h3>
                  <p className="text-ivory/80 mt-2 max-w-md">{s.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-ivory group-hover:text-bronze text-sm uppercase tracking-wide">
                    See mount styles <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="max-w-content mx-auto px-5 lg:px-8 mt-16 text-center">
          <p className="font-serif text-2xl md:text-3xl text-forest max-w-2xl mx-auto">
            Hunting something that’s not on this page? We work with African plains game, exotics, small game, and more.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-forest text-ivory px-6 py-3 uppercase tracking-wide text-sm rounded-sm hover:bg-forest/90"
          >
            Ask About Your Species
          </Link>
        </div>
      </section>
    </>
  );
}
