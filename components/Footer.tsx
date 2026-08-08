import Link from "next/link";
import Image from "next/image";
import { hours, siteConfig } from "@/lib/siteConfig";

const socialIcons: { key: keyof typeof siteConfig.social; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "tiktok", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="Plum Garden & CHAKURA logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg ring-1 ring-cream/20"
            />
            <p className="font-display text-xl font-bold">
              Plum Garden &amp; CHAKURA
            </p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/75">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            {socialIcons
              .filter(({ key }) => siteConfig.social[key])
              .map(({ key, label }) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors hover:border-honey hover:text-honey"
                >
                  <span className="text-xs font-semibold">{label[0]}</span>
                </a>
              ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-honey">
            Visit
          </p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-cream/80">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}
          </address>
          <a
            href={siteConfig.phoneHref}
            className="mt-2 inline-block text-sm font-medium text-cream underline decoration-honey/50 underline-offset-4 hover:decoration-honey"
          >
            {siteConfig.phone}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-honey">
            Hours
          </p>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream/60">{h.hours}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-medium text-honey hover:text-honey-dark"
          >
            Full location details &rarr;
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/15 px-4 py-5 text-center text-xs text-cream/60 sm:px-6">
        &copy; {new Date().getFullYear()} Plum Garden &amp; CHAKURA. All rights reserved.
      </div>
    </footer>
  );
}
