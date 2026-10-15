"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { mainNav, site } from "@/data/site";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled || open ? "bg-forest/95 backdrop-blur border-b border-black/20" : "bg-gradient-to-b from-black/60 to-transparent",
      )}
    >
      <div className="max-w-content mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/brand/dan-french-logo.png"
            alt={`${site.name} logo`}
            width={56}
            height={44}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden sm:block font-serif text-ivory text-lg leading-tight">
            Dan French<br />
            <span className="text-bronze tracking-wider2 text-[11px] uppercase">Taxidermy</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenSub(item.href)}
              onMouseLeave={() => item.children && setOpenSub(null)}
            >
              <Link
                href={item.href}
                className="group inline-flex items-center gap-1 text-ivory/90 hover:text-bronze font-medium text-sm tracking-wide uppercase"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />}
              </Link>
              {item.children && openSub === item.href && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="min-w-[200px] bg-forest border border-bronze/30 shadow-xl rounded-sm py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2 text-sm text-ivory hover:bg-black/30 hover:text-bronze transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden md:inline-flex items-center gap-2 text-ivory hover:text-bronze"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">{site.phone}</span>
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-bronze hover:bg-bronze/90 text-forest font-semibold px-4 py-2 text-sm uppercase tracking-wide rounded-sm transition-colors"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden text-ivory p-2 -mr-2"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-5 pb-8 pt-2 border-t border-ivory/10 bg-forest">
          <nav className="flex flex-col divide-y divide-ivory/10" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  onClick={() => !item.children && setOpen(false)}
                  href={item.href}
                  className="flex justify-between items-center py-4 text-ivory text-lg font-serif"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-3 flex flex-col gap-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-ivory/80 text-sm"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="mt-6 flex items-center gap-3 text-ivory"
          >
            <Phone className="h-5 w-5 text-bronze" />
            <span className="text-base">{site.phone}</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full justify-center bg-bronze text-forest font-semibold py-3 uppercase tracking-wide rounded-sm"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
