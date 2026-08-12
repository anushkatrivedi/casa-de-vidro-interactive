"use client";

import Image from "next/image";
import { useLightbox } from "@/components/Lightbox";
import type { Plate } from "@/lib/site";

type PlateFigureProps = {
  plate: Plate;
  list: Plate[];
  index: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function PlateFigure({
  plate,
  list,
  index,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: PlateFigureProps) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(list, index)}
      aria-label={`Open ${plate.label} — ${plate.caption ?? ""}`}
      className={`group plate-img relative block w-full cursor-zoom-in text-left ${className}`}
    >
      <Image
        src={plate.src}
        alt={plate.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </button>
  );
}
