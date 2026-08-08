import Image from "next/image";
import type { MenuItem } from "@/data/menu";

const tagStyles: Record<string, string> = {
  spicy: "bg-plum/10 text-plum",
  veg: "bg-matcha/15 text-matcha-dark",
  popular: "bg-honey/20 text-honey-dark",
};

const tagLabels: Record<string, string> = {
  spicy: "Spicy",
  veg: "Veg",
  popular: "Popular",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/60 shadow-sm ring-1 ring-plum/10 transition-shadow hover:shadow-md">
      {item.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-plum">{item.name}</h3>
          {item.price && (
            <span className="whitespace-nowrap font-display text-lg font-semibold text-plum-dark">
              {item.price}
            </span>
          )}
        </div>
        <p className="text-sm text-ink/70">{item.description}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagStyles[tag]}`}
              >
                {tagLabels[tag]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
