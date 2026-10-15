import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-forest hero-grain">
      <Image
        src="/images/slider3/elk-taxidermy-bull-cow.jpeg"
        alt="Bull and cow elk shoulder mounts by Dan French Taxidermy"
        fill
        sizes="100vw"
        className="object-cover opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/40 to-forest/95" />
      <div className="relative z-10 w-full">
        <div className="max-w-content mx-auto px-5 lg:px-8 pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="text-bronze uppercase tracking-wider2 text-xs mb-4">
              Trophy Game Taxidermy · Colorado · Wyoming · New Mexico
            </p>
            <h1 className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Your hunt,
              <br />
              <span className="text-bronze italic">preserved</span> for a lifetime.
            </h1>
            <p className="mt-6 text-ivory/85 text-lg md:text-xl max-w-xl leading-relaxed">
              High-end big game taxidermy for hunters, outfitters, and outdoor enthusiasts.
              Shoulder mounts, pedestals, Europeans, rugs, and custom landscape artwork —
              crafted by Dan French and his team of career artists.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/90 text-forest font-semibold px-6 py-3.5 uppercase tracking-wide text-sm rounded-sm transition-colors"
              >
                View Our Work
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-ivory/60 hover:border-bronze hover:text-bronze text-ivory font-semibold px-6 py-3.5 uppercase tracking-wide text-sm rounded-sm transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-ivory/40 text-xs uppercase tracking-wider2">
        Scroll
      </div>
    </section>
  );
}
