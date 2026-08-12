import { PlateFigure } from "@/components/PlateFigure";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { spacePlates } from "@/lib/site";

const layout: Record<string, { span: string; aspect: string }> = {
  "family-living": { span: "lg:col-span-4", aspect: "aspect-[2000/2222]" },
  bath: { span: "lg:col-span-4", aspect: "aspect-[2000/2500]" },
  terrace: { span: "lg:col-span-4", aspect: "aspect-[2000/1379]" },
  den: { span: "lg:col-span-6", aspect: "aspect-[2000/1538]" },
  "master-1": { span: "lg:col-span-3", aspect: "aspect-[2000/1250]" },
  "master-2": { span: "lg:col-span-3", aspect: "aspect-[2000/1250]" },
};

export function Spaces() {
  return (
    <section id="spaces" className="pb-24 pt-16 sm:pt-20">
      <SectionHeader
        numeral="IV"
        title="The rooms"
        note="Plate IV — six rooms"
      />

      <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-x-4 gap-y-12 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-12 lg:gap-6">
        {spacePlates.map((plate, i) => {
          const { span, aspect } = layout[plate.id] ?? {
            span: "lg:col-span-4",
            aspect: "aspect-[4/3]",
          };
          return (
            <Reveal
              key={plate.id}
              delay={Math.min(i, 5) * 70}
              className={span}
            >
              <figure>
                <PlateFigure
                  plate={plate}
                  list={spacePlates}
                  index={i}
                  className={aspect}
                  sizes="(min-width: 1024px) 30vw, 48vw"
                />
                <figcaption className="flex items-baseline justify-between gap-3 border-b border-ink/15 py-3">
                  <span className="archival text-ink-soft">{plate.label}</span>
                  <span className="text-right text-sm text-ink-soft">
                    {plate.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
