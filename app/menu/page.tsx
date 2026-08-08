import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import OrderButtons from "@/components/OrderButtons";
import MenuBrowser from "@/components/MenuBrowser";
import { menu } from "@/data/menu";
import { orderNote } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse rice bowls, noodles, katsu, hotpot, and our bubble tea & fruit tea bar. Order online through Uber Eats or Fantuan.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Full menu"
        title="What we're serving"
        subtitle="Browse by category or search for a dish. Ready to order? Use the buttons below or up top."
      />

      <div className="mt-10 rounded-2xl bg-cream-dark/40 p-5 sm:p-6">
        <p className="text-center text-sm text-ink/70">{orderNote}</p>
        <div className="mx-auto mt-4 max-w-xl">
          <OrderButtons />
        </div>
      </div>

      <div className="mt-14">
        <MenuBrowser categories={menu} />
      </div>
    </div>
  );
}
