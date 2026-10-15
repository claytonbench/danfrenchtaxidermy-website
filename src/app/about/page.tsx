import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Dan French Taxidermy",
  description:
    "Over 40 years of taxidermy craftsmanship. Meet Dan French and the team of career artists behind the shop in Laporte, Colorado.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Shop"
        title="Four decades. One commitment to craft."
        description="Dan French has been in the taxidermy business for over 40 years. The shop is built on the work of a small team of career artists — people who treat your trophy like it belongs on their own wall."
        image="/images/legacy/dan-french-taxidermy-european-with-landscape.jpg"
        imageAlt="European mount with custom landscape artwork"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-20 lg:py-24 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Dan’s Story" title="Raised in the outdoors." />
            <div className="mt-6 prose max-w-none text-charcoal/85 space-y-5 leading-relaxed text-lg">
              <p>
                I was raised in Pennsylvania. I loved being outside — hunting, fishing, trapping, chasing rabbits with my dog, building tree-houses and playing in the woods and streams.
              </p>
              <p>
                As an adult, things haven’t changed much. I still love being outside and I still love messing with animals, alive or dead. I get to do it every day. My taxidermy shop is a serious man cave.
              </p>
              <p>
                I have been married to my wonderful wife for over 30 years and she is still my best friend. I have 3 beautiful daughters that I am very proud of. My biggest hobby over the years hasn’t been hunting or fishing. It has been being a good husband and a good dad. I have taken the hobby very seriously. I now have the privilege of being a grandpa.
              </p>
              <p>
                God has blessed my life tremendously. I have some of the things that money can buy and most of the things money can’t buy. I am a very fortunate and grateful man.
              </p>
              <p>
                The success of this business is because of the great staff of artists and talented craftsmen that deliver high end, high quality work. Without them this business would never succeed to the level that it has. I am very grateful and fortunate to have this team. They have made my life better, and I strive to make this an enjoyable, rewarding environment where work and fun kind of blend together.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/gallery/elk/elk-taxidermy-5.jpg"
                alt="Elk shoulder mount in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="bg-forest text-ivory p-7 rounded-sm">
              <p className="uppercase tracking-wider2 text-xs text-bronze mb-3">Our Promise</p>
              <h3 className="font-serif text-2xl">High-end, high-quality work — delivered on time.</h3>
              <ul className="mt-5 space-y-3 text-ivory/80 text-sm">
                <li>• 3–6 month completion on shoulder and life-size mounts</li>
                <li>• Complimentary landscape artwork included</li>
                <li>• Over 40 years of experience</li>
                <li>• Drop-off locations in CO, WY, NM</li>
                <li>• Ship your trophy from anywhere in the United States</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center bg-bronze hover:bg-bronze/90 text-forest font-semibold px-5 py-2.5 text-sm uppercase tracking-wide rounded-sm"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
