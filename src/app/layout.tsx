import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Trophy Game Taxidermy in Colorado & Wyoming`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Trophy Game Taxidermy`,
    description: site.shortDescription,
    locale: "en_US",
    images: ["/images/slider3/elk-taxidermy-bull-cow.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Trophy Game Taxidermy`,
    description: site.shortDescription,
    images: ["/images/slider3/elk-taxidermy-bull-cow.jpeg"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/brand/dan-french-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.siteUrl}/brand/dan-french-logo.png`,
    telephone: site.phone,
    email: site.email,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: site.serviceAreas,
    sameAs: [site.social.facebook, site.social.instagram],
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-offwhite text-charcoal">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:bg-forest focus:text-ivory focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
