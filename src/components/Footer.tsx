import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { site, mainNav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory/90 mt-24">
      <div className="max-w-content mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/dan-french-logo.png"
              alt={site.name}
              width={64}
              height={50}
              className="h-14 w-auto"
            />
            <div>
              <div className="font-serif text-2xl text-ivory">Dan French Taxidermy</div>
              <div className="text-bronze uppercase tracking-wider2 text-xs">Est. craftsmanship, honest work</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-ivory/70 leading-relaxed">
            Big game taxidermy for hunters, outfitters, and outdoor enthusiasts across Colorado, Wyoming, New Mexico — and shipped trophies from anywhere in the United States.
          </p>
          <div className="flex gap-3 mt-6">
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener" className="p-2 border border-ivory/20 hover:border-bronze hover:text-bronze rounded-sm">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener" className="p-2 border border-ivory/20 hover:border-bronze hover:text-bronze rounded-sm">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-ivory text-lg mb-5">Explore</h3>
          <ul className="space-y-2 text-sm">
            {mainNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/80 hover:text-bronze">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/terms" className="text-ivory/80 hover:text-bronze">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-ivory text-lg mb-5">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-bronze flex-shrink-0" />
              <span>
                {site.address.street}<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-bronze flex-shrink-0" />
              <a href={site.phoneHref} className="hover:text-bronze">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-bronze flex-shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-bronze break-all">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-content mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 gap-2">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Over 40 years preserving hunting memories.</span>
        </div>
      </div>
    </footer>
  );
}
