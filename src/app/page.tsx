import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Palette, MapPin, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturedWork from "@/components/FeaturedWork";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Promise strip */}
      <section className="bg-forest text-ivory border-y border-ivory/10">
        <div className="max-w-content mx-auto px-5 lg:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div className="flex gap-4 items-start">
            <Clock className="h-6 w-6 text-bronze flex-shrink-0" />
            <div>
              <p className="font-serif text-xl text-ivory">3–6 Month Completion</p>
              <p className="text-ivory/70">
                Applies to shoulder mounts and life-size mounts. Buffalo may take slightly longer than 6 months.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Palette className="h-6 w-6 text-bronze flex-shrink-0" />
            <div>
              <p className="font-serif text-xl text-ivory">Complimentary Landscape Art</p>
              <p className="text-ivory/70">
                Included at no additional cost on the 3–6 month option.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <MapPin className="h-6 w-6 text-bronze flex-shrink-0" />
            <div>
              <p className="font-serif text-xl text-ivory">Drop Off &amp; Shipped Trophies</p>
              <p className="text-ivory/70">
                Drop locations in Colorado, Wyoming, and New Mexico. Ship from anywhere in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big game categories */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Taxidermy Services"
              title="Big game, done right."
              description="Deer, elk, antelope, bear — and everything from African plains game to small game and exotics. Choose a species to see the full menu of mount styles and customization."
            />
            <Link href="/services" className="group inline-flex items-center gap-1 text-forest font-semibold uppercase tracking-wide text-sm">
              All Services
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <CategoryCards />
        </div>
      </section>

      {/* About Dan — editorial */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-last lg:order-first">
            <Image
              src="/images/legacy/dan-french-taxidermy-european-with-landscape.jpg"
              alt="European mount with landscape artwork"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About the Shop"
              title="Craftsmanship built over four decades."
              description="Dan French has been in the taxidermy business for over 40 years. The success of the shop comes from a team of career artists and talented craftsmen committed to high-quality work — and to making the shop a rewarding place to spend a day."
            />
            <p className="mt-6 text-charcoal/80 leading-relaxed">
              Every mount is customized. We work with you to pick the pose, the plaque, the landscape — details that turn your trophy into a true piece of wildlife art you’ll live with for a lifetime.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-forest font-semibold uppercase tracking-wide text-sm border-b border-forest/40 hover:border-bronze hover:text-bronze pb-1"
            >
              Read Dan’s Story
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected recent work."
              description="A small sample from the gallery — browse all 100+ mounts and filter by species."
            />
            <Link href="/gallery" className="group inline-flex items-center gap-1 text-forest font-semibold uppercase tracking-wide text-sm">
              Full Gallery
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <FeaturedWork />
        </div>
      </section>

      {/* Outfitters strip */}
      <section className="relative py-24 bg-forest text-ivory overflow-hidden">
        <Image
          src="/images/slider3/antelope-backpack-taxidermy.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
        <div className="relative max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Outfitter Relationships"
              title="Trusted by outfitters across the Rockies."
              description="We work with respected outfitters throughout Colorado, Wyoming, New Mexico, and South Dakota. If you’re an outfitter looking to partner with a shop your clients will thank you for, let’s talk."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/outfitters"
                className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/90 text-forest font-semibold px-6 py-3 uppercase tracking-wide text-sm rounded-sm"
              >
                View Outfitters
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 border border-ivory/50 hover:border-bronze hover:text-bronze px-6 py-3 uppercase tracking-wide text-sm rounded-sm"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-ivory/80">
            {[
              "Table Mountain Outfitters",
              "Vermejo Park Ranch",
              "Trinchera Ranch",
              "Bar NI Ranch",
              "Fishtail Ranch",
              "Trophy Creek Outfitters",
              "Bear Mountain Outfitters",
              "Buffalo Creek Outfitters",
              "Rockin’ 7 Ranch",
            ].map((o) => (
              <div
                key={o}
                className="border border-ivory/15 px-3 py-3 rounded-sm bg-black/20"
              >
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-ivory">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="Start Your Mount"
            title="Let’s preserve the memory."
            description="Tell us about your animal, pick a mount style, and we’ll help you plan a trophy you’ll be proud of for decades. Free quote — no pressure."
          />
          <div className="mt-10 inline-flex flex-wrap items-center gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-ivory font-semibold px-7 py-3.5 uppercase tracking-wide text-sm rounded-sm"
            >
              Request a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 border border-forest/40 hover:border-forest text-forest px-7 py-3.5 uppercase tracking-wide text-sm rounded-sm"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
