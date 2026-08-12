import { PlateFigure } from "@/components/PlateFigure";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { sitePlates } from "@/lib/site";

const aspects: Record<string, string> = {
  "site-1": "aspect-[3/4]",
  "site-2": "aspect-[3/4]",
  "site-3": "aspect-[3/4]",
  "site-4": "aspect-[4/3]",
  "site-5": "aspect-[3/4]",
};

export function SiteStrip() {
  return (
    <section
      id="site"
      className="border-t border-ink/10 bg-sand-deep pb-24 pt-16 sm:pt-20"
    >
      <SectionHeader
        numeral="V"
        title="The site"
        note="Plate V — the house as it stands"
      />

      <div className="mx-auto mt-10 max-w-[1200px] px-5 sm:px-10">
        <Reveal>
          <div className="columns-2 gap-2 md:columns-3 md:gap-3">
            {sitePlates.map((plate, i) => (
              <div
                key={plate.id}
                className="mb-2 break-inside-avoid md:mb-3"
              >
                <PlateFigure
                  plate={plate}
                  list={sitePlates}
                  index={i}
                  className={aspects[plate.id]}
                  sizes="(min-width: 1024px) 33vw, 48vw"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 px-1">
          <p className="archival text-ink-soft">
            Photographs from the site — the house as it stands today.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
