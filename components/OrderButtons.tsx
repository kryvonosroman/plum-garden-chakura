"use client";

import { orderLinks, orderPlatformMeta, trackOrderClick } from "@/lib/orderLinks";
import type { OrderPlatform } from "@/lib/orderLinks";

const platforms: OrderPlatform[] = ["uberEats", "fantuan"];

export default function OrderButtons({
  layout = "row",
}: {
  layout?: "row" | "stack";
}) {
  return (
    <div
      className={
        layout === "row"
          ? "grid gap-4 sm:grid-cols-2"
          : "flex flex-col gap-4"
      }
    >
      {platforms.map((platform) => {
        const meta = orderPlatformMeta[platform];
        return (
          <a
            key={platform}
            href={orderLinks[platform]}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOrderClick(platform)}
            className="group flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-plum/10 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex items-center gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: meta.accent }}
                aria-hidden="true"
              >
                {meta.label[0]}
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-plum">
                  Order on {meta.label}
                </span>
                <span className="block text-sm text-ink/60">
                  Opens {meta.label} in a new tab
                </span>
              </span>
            </span>
            <span
              className="text-xl text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-plum"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </a>
        );
      })}
    </div>
  );
}
