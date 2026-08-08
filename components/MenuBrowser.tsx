"use client";

import { useMemo, useState } from "react";
import MenuCard from "@/components/MenuCard";
import type { MenuCategory } from "@/data/menu";

export default function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (item) =>
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [categories, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Menu categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-plum text-cream"
                : "bg-white text-ink/70 ring-1 ring-plum/15 hover:text-plum"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === c.id
                  ? "bg-plum text-cream"
                  : "bg-white text-ink/70 ring-1 ring-plum/15 hover:text-plum"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu…"
            className="w-full rounded-full bg-white px-4 py-2 text-sm text-ink ring-1 ring-plum/15 placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-plum"
          />
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {filtered.length === 0 && (
          <p className="text-center text-ink/60">No dishes match your search.</p>
        )}
        {filtered.map((category) => (
          <div key={category.id}>
            <h2 className="font-display text-2xl font-bold text-plum">
              {category.name}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
