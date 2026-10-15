import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({ eyebrow, title, description, image, imageAlt = "", crumbs }: Props) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-forest hero-grain">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest" />
      <div className="relative max-w-content mx-auto px-5 lg:px-8">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="text-ivory/70 text-xs uppercase tracking-wider2 mb-4 flex flex-wrap items-center gap-1">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-bronze">{c.label}</Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="uppercase tracking-wider2 text-xs text-bronze mb-3">{eyebrow}</p>}
        <h1 className="font-serif text-ivory text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-ivory/80 text-lg leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
