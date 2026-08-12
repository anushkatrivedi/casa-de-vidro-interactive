import { Reveal } from "@/components/Reveal";
import { brand, nav } from "@/lib/site";

export function Viewing() {
  return (
    <section
      id="viewing"
      className="relative border-t border-ink/10 bg-terracotta-deep text-cream"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-10 sm:py-32 lg:py-40">
        <Reveal>
          <p className="archival text-cream/70">The viewing</p>
          <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.015em]">
            Arrange a private viewing.
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[26rem] leading-relaxed text-cream/80">
            This page is a first record. The full dossier — drawings, the site,
            and the house in plan and section — is available on request.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="link-line inline-flex w-fit items-center gap-3 text-lg font-semibold"
          >
            {brand.email}
          </a>
        </Reveal>
      </div>

      <footer className="border-t border-cream/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="font-brand text-xl">{brand.name}</p>
          <p className="max-w-[26rem] text-sm text-cream/65">{brand.tagline}</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="archival text-cream/65 transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="archival text-cream/50">
              {brand.latin}
            </p>
            <p className="archival text-cream/50">
              © {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
