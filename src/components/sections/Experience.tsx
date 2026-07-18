import { experience } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const thumbnails: Record<string, { src: string; alt: string }> = {
  "Adigo India": { src: "/work/adigo/beard-oil.jpg", alt: "Adigo India beard oil product shot" },
  "Stanfresh India": { src: "/work/stanfresh/washer.jpg", alt: "Stanfresh India home care product shot" },
};

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 bg-surface/60">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Two categories, one throughline"
          description="Different products, different audiences — same belief: the brand that sounds most human wins the feed."
        />

        <div className="mt-16 relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[9px]"
            aria-hidden
          />

          <ol className="flex flex-col gap-14">
            {experience.map((entry, index) => (
              <Reveal as="li" key={entry.org} delay={index * 0.1} className="relative pl-10 md:pl-12">
                <span
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-paper md:h-5 md:w-5"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-center gap-3">
                    {thumbnails[entry.org] && (
                      <span className="h-9 w-9 flex-none overflow-hidden rounded-full border-2 border-paper shadow-[0_6px_16px_-6px_rgba(33,29,46,0.4)] ring-1 ring-line">
                        <img
                          src={thumbnails[entry.org].src}
                          alt={thumbnails[entry.org].alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {entry.org}
                    </h3>
                  </div>
                  <span className="text-sm uppercase tracking-[0.15em] text-muted">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75 text-balance">
                  {entry.summary}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-olive" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
