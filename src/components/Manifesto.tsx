import { Reveal } from "@/components/Reveal";
import { manifesto } from "@/lib/site";

export function Manifesto() {
  return (
    <section className="border-t border-cream/15 bg-leaf-deep text-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-10 sm:py-28 lg:py-36">
        <Reveal variant="scale">
          <p className="mx-auto max-w-[52rem] text-center font-brand text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.12] tracking-[-0.01em] text-cream">
            “{manifesto.line}”
          </p>
          <p className="archival mt-10 text-center text-cream/65">
            {manifesto.author}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
