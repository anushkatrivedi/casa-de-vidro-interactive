import Image from "next/image";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { brand, heroLabel } from "@/lib/site";

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[100svh] grid-cols-1 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)]"
    >
      <div className="relative flex flex-col justify-between gap-10 bg-sand px-5 pb-8 pt-28 text-ink sm:px-10 lg:pb-10 lg:pt-32 lg:pr-12">
        <div>
          <Reveal delay={140}>
            <h1 className="font-brand text-[clamp(3.4rem,10vw,7.8rem)] leading-[0.9] tracking-[-0.02em] text-ink">
              Casa
              <br />
              de Vidro
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-[24rem] text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-ink-soft">
              {brand.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={420} className="flex flex-col gap-8">
          <a
            href="#viewing"
            className="archival inline-flex w-fit min-h-11 items-center gap-2.5 bg-terracotta-deep px-5 text-sand transition-colors hover:bg-leaf-deep"
          >
            {brand.cta}
            <Arrow />
          </a>
          <p className="archival text-ink-soft">{heroLabel}</p>
        </Reveal>
      </div>

      <div className="relative min-h-[42svh] overflow-hidden border-t border-ink/10 lg:min-h-0 lg:border-l lg:border-t-0">
        <Parallax
          className="absolute -inset-[12%]"
          speed={0.14}
        >
          <Image
            src="/images/exterior/exterior-hero.jpg"
            alt="Casa de Vidro — the exterior, glass volume set in a bright terracotta shell."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
        </Parallax>
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 font-display text-2xl italic text-cream/70 sm:right-6 sm:top-6 sm:text-3xl"
        >
          I
        </span>
      </div>
    </section>
  );
}
