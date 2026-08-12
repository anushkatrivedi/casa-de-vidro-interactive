"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/site";

function Mark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="4.5" y="4.5" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M8.5 12h7M12 8.5v7" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-40 ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <Mark />
          <span className="font-brand text-lg leading-none tracking-tight">
            {brand.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="archival link-line text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#viewing"
          className="archival inline-flex min-h-11 items-center gap-2 bg-terracotta-deep px-4 text-sand transition-colors hover:bg-leaf-deep sm:px-5"
        >
          Viewing
        </a>
      </div>
    </header>
  );
}
