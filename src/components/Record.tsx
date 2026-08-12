import { Reveal } from "@/components/Reveal";
import { record } from "@/lib/site";

export function Record() {
  return (
    <section id="record" className="pb-24 pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-ink/15 pb-6 pt-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-[clamp(2.1rem,4vw,3.3rem)] leading-[0.98]">
              The record
            </h2>
            <p className="archival text-ink-soft">
              The figures below are to be confirmed by the owner
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-8">
            {record.map((row) => (
              <div
                key={row.term}
                className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-4"
              >
                <dt className="archival text-ink-soft">{row.term}</dt>
                <dd className="font-display text-[clamp(1.15rem,2vw,1.5rem)] italic text-terracotta-deep">
                  {row.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
