import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Taxidermy Gallery — Portfolio of Work",
  description:
    "Browse the Dan French Taxidermy portfolio: antelope, deer, elk, bear, African, exotic/Asian, North American, small game, and shop photos.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Taxidermy is an art form."
        description="A sampling of completed trophies from the shop. Filter by category, click any image to open the lightbox, and use the arrow keys to navigate."
        image="/images/gallery/elk/elk-taxidermy-3.jpg"
        imageAlt="Elk taxidermy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <Gallery />
    </>
  );
}
