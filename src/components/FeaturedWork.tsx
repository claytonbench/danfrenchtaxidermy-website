import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";

const featuredIds = [
  "elk-taxidermy-3",
  "pronghorn-antelope-taxidermy-5",
  "deer-taxidermy-6",
  "bear-taxidermy-4",
  "asian-taxidermy-2",
  "african-taxidermy-3",
];

export default function FeaturedWork() {
  const featured = featuredIds
    .map((id) => galleryItems.find((g) => g.id === id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <div className="grid gap-3 md:gap-5 grid-cols-2 lg:grid-cols-3">
      {featured.map((g, idx) => (
        <Link
          key={g.id}
          href="/gallery"
          className={`group relative overflow-hidden rounded-sm bg-ivory ${
            idx === 0 ? "col-span-2 row-span-2 aspect-[4/5]" : "aspect-[3/4]"
          }`}
        >
          <Image
            src={g.src}
            alt={g.alt}
            fill
            sizes={idx === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
}
