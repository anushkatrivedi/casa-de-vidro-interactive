"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLightbox } from "@/components/Lightbox";
import { assetPath, type Plate } from "@/lib/site";

const MAP_LABEL = "The setting";
const MAP_CAPTION = "Siolim, Goa — where the house stands";

const mapPlate: Plate = {
  id: "map",
  src: "/images/site/map.png",
  alt: "Map showing the setting of Casa de Vidro in Siolim, Goa.",
  label: MAP_LABEL,
  caption: MAP_CAPTION,
  ratio: "landscape",
};

export function MapSection() {
  const { open } = useLightbox();

  return (
    <section id="location" className="bg-sand">
      <Reveal variant="scale">
        <figure>
          <button
            type="button"
            onClick={() => open([mapPlate], 0)}
            aria-label={`Open ${MAP_LABEL} — ${MAP_CAPTION}, full screen`}
            className="group relative block w-full cursor-zoom-in"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={assetPath(mapPlate.src)}
                alt={mapPlate.alt}
                fill
                sizes="100vw"
                className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </button>
          <figcaption className="mx-auto flex max-w-[1200px] flex-col gap-1 border-b border-ink/15 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-10">
            <span className="archival text-ink-soft">{MAP_LABEL}</span>
            <span className="text-ink-soft">{MAP_CAPTION}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
