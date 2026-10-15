import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { speciesMeta, speciesOrder, type Species } from "@/data/services";

type Params = { params: Promise<{ species: string }> };

export function generateStaticParams() {
  return speciesOrder.map((s) => ({ species: s }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { species } = await params;
  if (!(species in speciesMeta)) return {};
  const s = speciesMeta[species as Species];
  return {
    title: `${s.label} Taxidermy Options`,
    description: s.intro.slice(0, 160),
    alternates: { canonical: `/services/${species}` },
    openGraph: { images: [s.hero] },
  };
}

export default async function SpeciesPage({ params }: Params) {
  const { species } = await params;
  if (!(species in speciesMeta)) notFound();
  const s = speciesMeta[species as Species];

  return (
    <>
      <PageHeader
        eyebrow={`${s.label} Taxidermy`}
        title={`${s.label} Mounts & Options`}
        description={s.tagline}
        image={s.hero}
        imageAlt={`${s.label} taxidermy by Dan French`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: s.label },
        ]}
      />

      <section className="py-16 lg:py-24 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-charcoal/80 leading-relaxed">{s.intro}</p>
          </div>

          <h2 className="mt-16 font-serif text-3xl md:text-4xl text-forest">
            Options to personalize your {s.label.toLowerCase()} mount
          </h2>
          <p className="text-charcoal/70 mt-3 max-w-2xl">
            These are some of the more popular options. If you have something unique in mind, just ask — we’re happy to discuss additional options.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {s.options.map((o, i) => (
              <article key={i} className="bg-white rounded-sm overflow-hidden border border-charcoal/10">
                <div className="relative aspect-[4/5] bg-ivory">
                  <Image
                    src={o.img}
                    alt={o.alt || o.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-forest leading-tight">{o.title}</h3>
                  {o.description && (
                    <p className="text-charcoal/70 mt-2 text-sm leading-relaxed">{o.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 bg-forest text-ivory rounded-sm p-10 md:p-14 text-center">
            <h3 className="font-serif text-3xl md:text-4xl">Ready to plan your {s.label.toLowerCase()} mount?</h3>
            <p className="mt-3 text-ivory/80 max-w-xl mx-auto">
              Tell us about your animal and the look you’re after — we’ll walk through poses, plaques, and landscape options.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bg-bronze hover:bg-bronze/90 text-forest font-semibold px-6 py-3 uppercase tracking-wide text-sm rounded-sm">
                Request a Quote
              </Link>
              <Link href="/gallery" className="border border-ivory/40 hover:border-bronze hover:text-bronze px-6 py-3 uppercase tracking-wide text-sm rounded-sm">
                See More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
