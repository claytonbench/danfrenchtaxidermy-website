import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Request a Free Taxidermy Quote",
  description:
    "Request a free quote from Dan French Taxidermy. Call (970) 218-6281 or send us a message with details about your animal, mount type, and preferences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free quote."
        description="Tell us about your animal and the look you’re after — we’ll follow up with the best options and pricing. Prefer the phone? Dan takes calls directly."
        image="/images/legacy/dan-french-taxidermy-european-with-landscape.jpg"
        imageAlt="European mount with landscape artwork"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 lg:py-24 bg-offwhite">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-forest text-ivory p-8 rounded-sm sticky top-28">
              <p className="uppercase tracking-wider2 text-xs text-bronze mb-3">Shop Info</p>
              <h2 className="font-serif text-3xl">Dan French Taxidermy</h2>
              <ul className="mt-6 space-y-4 text-ivory/90 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-bronze flex-shrink-0 mt-0.5" />
                  <span>
                    {site.address.street}<br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-bronze flex-shrink-0" />
                  <a href={site.phoneHref} className="hover:text-bronze">{site.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-bronze flex-shrink-0" />
                  <a href={`mailto:${site.email}`} className="hover:text-bronze break-all">{site.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-bronze flex-shrink-0 mt-0.5" />
                  <span>
                    By appointment — give Dan a call to arrange a drop-off or shop visit.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-ivory/15 space-y-3 text-sm text-ivory/80">
                <p>
                  <strong className="text-ivory">Drop-off locations</strong> in Colorado, Wyoming, and New Mexico.
                </p>
                <p>You can ship us your trophies from anywhere in the United States.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
