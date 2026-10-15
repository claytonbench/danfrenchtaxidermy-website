import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    href: "/services/elk",
    label: "Elk",
    image: "/images/gallery/elk/elk-taxidermy-1.jpg",
    tagline: "Bugling, hard-turn, and pedestal mounts.",
  },
  {
    href: "/services/deer",
    label: "Deer",
    image: "/images/gallery/deer/deer-taxidermy-1.jpg",
    tagline: "Muley & whitetail — upright, sneak, semi-sneak.",
  },
  {
    href: "/services/antelope",
    label: "Antelope",
    image: "/images/gallery/antelope/pronghorn-antelope-taxidermy-5.jpg",
    tagline: "Shoulder, pedestal, European, and horn mounts.",
  },
  {
    href: "/services/bear",
    label: "Bear",
    image: "/images/gallery/bear-taxidermy-2.jpg",
    tagline: "Full-size, half-size, rugs, and European.",
  },
];

export default function CategoryCards() {
  return (
    <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-forest ease-smooth"
        >
          <Image
            src={c.image}
            alt={`${c.label} taxidermy by Dan French`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-forest/0" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="font-serif text-ivory text-3xl">{c.label}</h3>
                <p className="text-ivory/80 text-sm mt-1 leading-snug">{c.tagline}</p>
              </div>
              <div className="p-2 rounded-full border border-ivory/40 group-hover:border-bronze group-hover:bg-bronze/20 transition-colors">
                <ArrowUpRight className="h-4 w-4 text-ivory group-hover:text-bronze" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
