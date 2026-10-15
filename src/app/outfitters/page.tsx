import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { outfitters } from "@/data/outfitters";
import { Phone, MapPin, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Outfitters We Work With",
  description:
    "Dan French Taxidermy works with respected outfitters across Colorado, Wyoming, New Mexico, and South Dakota. Browse our outfitter directory.",
  alternates: { canonical: "/outfitters" },
};

export default function OutfittersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outfitter Info"
        title="Outfitters we work with."
        description="Over 40 years in the taxidermy business — and a long list of outfitters who’ve trusted us with their clients’ trophies. Feel free to reach out to any of them."
        image="/images/gallery/elk/elk-taxidermy-2.jpg"
        imageAlt="Elk taxidermy mount"
        crumbs={[{ label: "Home", href: "/" }, { label: "Outfitters" }]}
      />

      <section className="py-16 lg:py-24 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outfitters.map((o) => (
              <article
                key={o.name}
                className="bg-white border border-charcoal/10 rounded-sm p-6 flex flex-col hover:border-bronze transition-colors"
              >
                <h3 className="font-serif text-xl text-forest leading-tight">{o.name}</h3>
                <div className="mt-4 space-y-2 text-sm text-charcoal/80">
                  {o.contact && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-bronze flex-shrink-0" />
                      <span>{o.contact}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-bronze flex-shrink-0" />
                    <span>{o.location}</span>
                  </div>
                  {o.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-bronze flex-shrink-0" />
                      <a href={`tel:${o.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-forest">
                        {o.phone}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 bg-forest text-ivory p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl">Outfitter looking for a shop?</h2>
            <p className="mt-3 text-ivory/80 max-w-xl mx-auto">
              You are welcome to be a part of this great organization. Let’s talk about how we can help your clients
              take their trophies home.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center bg-bronze hover:bg-bronze/90 text-forest font-semibold px-6 py-3 uppercase tracking-wide text-sm rounded-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
