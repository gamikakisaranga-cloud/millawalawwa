"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/rooms", label: "Rooms" },
  { href: "/packages", label: "Travel Packages" },
  { href: "/reservation", label: "Reserve" },
  { href: "/login", label: "Guest Login" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        dark ? "bg-ivory/95 backdrop-blur-sm border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none group" onClick={() => setOpen(false)}>
          <span
            className={`font-display text-lg md:text-xl tracking-wide transition-colors ${
              dark ? "text-ink" : "text-ivory"
            }`}
          >
            Milla Walawwa
          </span>
          <span
            className={`eyebrow mt-1 transition-colors ${dark ? "text-terracotta" : "text-ochre-light"}`}
            style={{ fontSize: "0.6rem" }}
          >
            Retreat by Maara
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-underline eyebrow ${dark ? "text-ink" : "text-ivory"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className={`md:hidden ${dark ? "text-ink" : "text-ivory"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-ink/10 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
