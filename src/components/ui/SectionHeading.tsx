import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-ink text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-muted text-base md:text-lg leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
