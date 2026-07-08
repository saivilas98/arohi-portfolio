import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 md:p-12 transition-shadow duration-500 hover:shadow-[0_40px_80px_-45px_rgba(33,29,46,0.25)]"
    >
      <div className={`lg:col-span-5 flex flex-col gap-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {study.category}
          </span>
          <h3 className="mt-3 font-display text-3xl md:text-[2.1rem] font-medium leading-tight text-ink text-balance">
            {study.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-muted">{study.brand}</p>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {study.images.map((image) => (
            <div
              key={image.src}
              className="aspect-square overflow-hidden rounded-xl border border-line bg-paper"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-line bg-paper px-2.5 py-4 text-center"
            >
              <p className="font-display text-base md:text-lg font-medium text-ink leading-snug break-words">
                {metric.value}
              </p>
              <p className="mt-1 text-[11px] leading-tight text-muted break-words">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`lg:col-span-7 flex flex-col gap-7 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-2">
            The challenge
          </h4>
          <p className="text-base leading-relaxed text-ink/80 text-balance">{study.challenge}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
            The approach
          </h4>
          <ul className="flex flex-col gap-2.5">
            {study.approach.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-2">
            Execution
          </h4>
          <p className="text-base leading-relaxed text-ink/80 text-balance">{study.execution}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-accent-soft/50 border border-accent/15 px-6 py-5"
        >
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep mb-2">
            Outcome
          </h4>
          <p className="text-base leading-relaxed text-ink/85 text-balance">{study.outcome}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}
