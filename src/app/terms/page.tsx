import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Dan French Taxidermy terms and conditions covering deposits, storage, timelines, and shipping.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policies"
        title="Terms & Conditions"
        description="Our commitments and the fine print — short and plain-spoken."
        image="/images/gallery/elk/elk-taxidermy-4.jpg"
        imageAlt="Elk taxidermy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 prose prose-neutral">
          <ul className="space-y-4 text-charcoal/85 leading-relaxed text-base">
            <li>Items not collected within 30 calendar days of being notified will be charged a storage fee of 3% of the total order per month.</li>
            <li>Each item in an order must be picked up or shipped promptly upon completion, regardless of the status of other items in the same order.</li>
            <li>Final payment is due when the order is completed, regardless of whether it will be shipped or picked up.</li>
            <li>A 50% deposit is required before work begins.</li>
            <li>Changes to original orders may incur additional fees. Costs will depend on the nature and extent of the modification and the timing within the process.</li>
            <li>All timelines for completion, pickup, and delivery will vary depending on the specific work order and the timing of the deposit, although we make every effort to complete orders together.</li>
            <li>Rush services are not guaranteed. If a rush fee is purchased and the expedited timeline is not fulfilled, the customer is eligible only for a refund of the rush fee.</li>
            <li>Orders related to the same animal or hunt will likely be completed at different times. Your hunting buddies’ items could be finished before yours, depending on variables such as complexity, design specifications, or the date of deposit.</li>
            <li>If it is important to receive multiple items together, a “party” fee will be implemented to help coordinate simultaneous completion.</li>
            <li>We strive to meet estimated delivery timelines but cannot guarantee exact dates.</li>
            <li>Although we take all reasonable precautions to safeguard animal trophies entrusted to us, Dan French Taxidermy is not liable for any unforeseen loss, damage, or destruction resulting from fire, theft, natural disasters, or other events beyond our control.</li>
            <li><strong>International Shipping:</strong> Hunters must provide all required documents with the deposit. Shipping will take significantly longer after completion.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
