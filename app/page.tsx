import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import MenuCard from "@/components/MenuCard";
import OrderButtons from "@/components/OrderButtons";
import MapEmbed from "@/components/MapEmbed";
import HoursTable from "@/components/HoursTable";
import FadeIn from "@/components/FadeIn";
import { featuredItems } from "@/data/menu";
import { siteConfig, orderNote } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* About teaser */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Our story"
            title="A Japanese-style kitchen, paired with a tea bar"
          />
          {/* Placeholder copy — swap for the client's real story of how the two concepts came together. */}
          <p className="mt-5 text-lg text-ink/70 text-balance">
            Plum Garden brings crispy katsu, rice bowls, noodles, and hotpot
            to Cornerstone Mews, while CHAKURA — our in-house tea bar — pours
            bubble tea and fresh fruit tea alongside every meal.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-plum underline decoration-honey underline-offset-4 hover:text-plum-dark"
          >
            Read our story &rarr;
          </Link>
        </FadeIn>
      </section>

      {/* Featured dishes */}
      <section className="bg-cream-dark/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Fan favorites"
              title="Popular dishes & drinks"
              subtitle="A taste of what people order most — see the full menu for everything we make."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <MenuCard item={item} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-full border-2 border-plum px-7 py-3 text-sm font-semibold text-plum transition-colors hover:bg-plum hover:text-cream"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Order platforms */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Get it delivered"
            title="Order Online"
            subtitle={orderNote}
          />
          <div className="mt-10">
            <OrderButtons />
          </div>
          <p className="mt-6 text-center text-sm text-ink/60">
            Prefer pickup?{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-plum underline underline-offset-4">
              Call {siteConfig.phone}
            </a>
          </p>
        </FadeIn>
      </section>

      {/*
        Testimonials section is hidden until we have real customer reviews
        to show — data/testimonials.ts and components/Testimonial.tsx are
        still here, just wire this section back up once the client
        provides quotes they're OK publishing.
      */}

      {/* Location + hours */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading eyebrow="Visit us" title="Location & Hours" />
        </FadeIn>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <MapEmbed />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="font-display text-xl font-semibold text-plum">
                  {siteConfig.address.full}
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 inline-block text-lg font-medium text-plum-dark underline underline-offset-4"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-3 text-sm text-ink/60">{siteConfig.accessibility}</p>
              </div>
              <HoursTable />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
