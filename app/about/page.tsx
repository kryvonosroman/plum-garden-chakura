import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { placeholderImages } from "@/lib/placeholderImages";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Plum Garden & CHAKURA — a Japanese-style kitchen paired with a modern tea bar near SFU in Burnaby, BC.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow="About us" title="Our story" />

      <FadeIn className="mt-10 space-y-5 text-lg leading-relaxed text-ink/75 text-balance">
        <p>
          Plum Garden &amp; CHAKURA started with a simple idea: pair the
          comfort of a Japanese-style kitchen — crispy katsu, rice bowls,
          noodles, and hotpot — with a proper tea bar under one roof.
          CHAKURA handles the bubble tea and fresh fruit tea side of the
          house, so there&apos;s something to sip alongside every meal.
        </p>
        {/*
          Placeholder story above — swap for the client's real account of
          how Plum Garden & CHAKURA started, who's behind it, and what
          makes their approach to Asian fusion food and tea different.
        */}
        <p>
          You&apos;ll find us at Cornerstone Mews, just steps from SFU —
          dine in, grab takeout, order delivery, or swing by for curbside
          pickup.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={placeholderImages.interior.src}
              alt={placeholderImages.interior.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* TODO: swap for a real interior photo — see lib/placeholderImages.ts */}
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={placeholderImages.katsu.src}
              alt={placeholderImages.katsu.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* TODO: swap for a real food photo — see lib/placeholderImages.ts */}
        </FadeIn>
      </div>
    </div>
  );
}
