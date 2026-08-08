import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import MapEmbed from "@/components/MapEmbed";
import HoursTable from "@/components/HoursTable";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Plum Garden & CHAKURA at Cornerstone Mews, Burnaby, BC near SFU. Hours, phone number, parking tips, and accessibility info.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow="Get in touch" title="Contact & Location" />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <FadeIn className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-matcha-dark">
              Address
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-plum">
              {siteConfig.address.full}
            </p>
            <a
              href={siteConfig.mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-medium text-plum underline underline-offset-4 hover:text-plum-dark"
            >
              Get directions &rarr;
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-matcha-dark">
              Phone
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-2 inline-block text-xl font-semibold text-plum-dark"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-matcha-dark">
              Hours
            </p>
            <div className="mt-3">
              <HoursTable />
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-cream-dark/40 p-5 text-sm text-ink/70">
            <p>
              <span className="font-semibold text-plum">Accessibility: </span>
              {siteConfig.accessibility}
            </p>
            <p>
              <span className="font-semibold text-plum">Parking tip: </span>
              {siteConfig.parkingNote}
            </p>
            <p>
              <span className="font-semibold text-plum">Service options: </span>
              {siteConfig.serviceOptions.join(", ")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <MapEmbed />
        </FadeIn>
      </div>
    </div>
  );
}
