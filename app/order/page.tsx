import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import OrderButtons from "@/components/OrderButtons";
import { siteConfig, orderNote } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Order Online",
  description:
    "Order Plum Garden & CHAKURA for delivery or pickup through Uber Eats, or call ahead for pickup.",
};

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Get it delivered"
        title="Order Online"
        subtitle="Skip the line — order for delivery or pickup through our delivery partners."
      />

      <div className="mt-12">
        <OrderButtons />
      </div>

      <p className="mt-8 text-center text-sm text-ink/60">{orderNote}</p>

      <div className="mt-12 rounded-2xl bg-cream-dark/40 p-6 text-center">
        <p className="font-display text-lg font-semibold text-plum">
          Prefer to order by phone?
        </p>
        <p className="mt-2 text-sm text-ink/70">
          Call ahead and we&apos;ll have it ready for pickup.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-4 inline-block rounded-full bg-plum px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-plum-dark"
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
