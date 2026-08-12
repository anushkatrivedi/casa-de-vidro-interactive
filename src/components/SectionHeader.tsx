import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  numeral: string;
  title: string;
  note: string;
};

export function SectionHeader({ numeral, title, note }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-6 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-baseline gap-5">
            <span
              aria-hidden="true"
              className="font-display text-[clamp(2rem,4.5vw,3.4rem)] italic leading-none text-terracotta"
            >
              {numeral}
            </span>
            <h2 className="font-display text-[clamp(2.1rem,4vw,3.3rem)] leading-[0.98]">
              {title}
            </h2>
          </div>
          <p className="archival text-ink-soft">{note}</p>
        </div>
      </Reveal>
    </div>
  );
}
