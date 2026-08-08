"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-plum/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-bold text-plum sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          Plum Garden <span className="text-matcha-dark">&amp;</span> CHAKURA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-plum ${
                  active ? "text-plum" : "text-ink/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/order"
            className="rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-plum-dark shadow-sm transition-colors hover:bg-honey-dark"
          >
            Order Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-plum md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-plum/10 bg-cream px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-plum/5 hover:text-plum"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/order"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-honey px-5 py-2.5 text-center text-sm font-semibold text-plum-dark hover:bg-honey-dark"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
