"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLightbox } from "@/components/Lightbox";
import { assetPath, livingPlates } from "@/lib/site";

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "prev" ? (
        <path d="M15 5 8 12l7 7" />
      ) : (
        <path d="m9 5 7 7-7 7" />
      )}
    </svg>
  );
}

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { open } = useLightbox();
  const regionRef = useRef<HTMLElement>(null);

  const count = livingPlates.length;
  const plate = livingPlates[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => window.clearInterval(t);
  }, [paused, count]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  return (
    <section
      id="gallery"
      ref={regionRef}
      className="bg-sand-deep pb-24 pt-16 sm:pt-20"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      aria-roledescription="carousel"
      aria-label="Plate III — The living room"
    >
      <SectionHeader
        numeral="III"
        title="The Living Space"
        note="The four views"
      />

      <div
        className="mx-auto mt-10 max-w-[1200px] px-0 sm:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Reveal variant="scale">
          <div className="relative h-[clamp(24rem,68vh,44rem)] overflow-hidden bg-ink/5">
            <button
              type="button"
              onClick={() => open(livingPlates, index)}
              aria-label={`Open ${plate.label}, ${plate.caption ?? ""}, full screen`}
              className="plate-img group relative block h-full w-full cursor-zoom-in"
            >
              <Image
                src={assetPath(plate.src)}
                alt={plate.alt}
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </button>

            <span
              aria-hidden="true"
              className="absolute right-4 top-4 bg-sand/85 px-2.5 py-1.5 font-sans text-xs font-semibold tracking-[0.18em] text-ink"
            >
              {index + 1} / {count}
            </span>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous view"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ink/15 bg-sand/85 text-ink transition hover:bg-sand sm:left-4"
            >
              <Arrow dir="prev" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next view"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ink/15 bg-sand/85 text-ink transition hover:bg-sand sm:right-4"
            >
              <Arrow dir="next" />
            </button>
          </div>
        </Reveal>

        <figcaption className="flex flex-col gap-1 border-b border-ink/15 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-1">
          <span className="archival text-ink-soft">{plate.label}</span>
          <span className="text-ink-soft">{plate.caption}</span>
        </figcaption>

        <div className="mt-5 flex items-center gap-3 px-5 sm:px-1">
          {livingPlates.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show view ${i + 1}: ${p.caption}`}
              aria-current={i === index}
              className={`relative h-14 w-16 shrink-0 overflow-hidden border transition sm:h-16 sm:w-20 ${
                i === index
                  ? "border-leaf"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={assetPath(p.src)}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
