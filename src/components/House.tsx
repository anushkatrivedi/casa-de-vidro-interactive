import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { housePlates } from "@/lib/site";

export function House() {
  const plate = housePlates[0];

  return (
    <section id="house" className="pb-24 pt-16 sm:pt-20">
      <SectionHeader
        numeral="II"
        title="The House"
        note="Phase II — The exterior"
      />

      <div className="mx-auto mt-10 max-w-[1200px] px-0 sm:px-10">
        <Reveal variant="scale">
          <figure className="relative aspect-[2600/1626] overflow-hidden">
            <Image
              src={plate.src}
              alt={plate.alt}
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-contain object-center"
            />
          </figure>
          <figcaption className="flex flex-col gap-1 border-b border-ink/15 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-1">
            <span className="archival text-ink-soft">{plate.label}</span>
            <span className="text-ink-soft">{plate.caption}</span>
          </figcaption>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-[100rem] px-5 text-center sm:px-0">
          <p className="text-[clamp(1.1rem,1.8vw,1.35rem)] leading-relaxed text-ink-soft">
            At Casa de Vidro, your home is as expansive as your mind. Origami roofs encompass you, yet the inside of the house remains minimal and functional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
