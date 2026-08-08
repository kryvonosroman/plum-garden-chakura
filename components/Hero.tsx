import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/lib/placeholderImages";

export default function Hero() {
  const image = placeholderImages.heroRamen;

  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden sm:min-h-[92vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* TODO: swap hero photo — see lib/placeholderImages.ts (image.credit) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-plum via-plum/50 to-plum/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-honey">
          Burnaby, BC &middot; Near SFU
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-cream text-balance sm:text-6xl">
          Plum Garden &amp; CHAKURA
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/90 text-balance sm:text-xl">
          Crispy katsu, rice bowls, noodles &amp; hotpot — plus a full bubble
          tea and fresh fruit tea bar.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/order"
            className="rounded-full bg-honey px-7 py-3.5 text-base font-semibold text-plum-dark shadow-lg shadow-plum-dark/20 transition-transform hover:scale-[1.03] hover:bg-honey-dark"
          >
            Order Now
          </Link>
          <Link
            href="/menu"
            className="rounded-full border-2 border-cream/70 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
