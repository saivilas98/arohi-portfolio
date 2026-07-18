import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Marquee } from "../ui/Marquee";
import { easeOut } from "../../lib/motion";
import { useCountUp } from "../../lib/useCountUp";

const headlineLines = [
  ["I", "make", "brands"],
  ["sound", "less", "like", { text: "brands.", accent: true }],
];

const tickerWords = [
  "Brand Voice",
  "Content Strategy",
  "Social Copywriting",
  "Paid Social",
  "A/B Testing",
  "Community",
];

function StatCard({ value, label, className }: { value: string; label: string; className?: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div className={className}>
      <p ref={ref} className="text-2xl font-display font-medium text-ink">
        {display}
      </p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  function handleSpotlight(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleSpotlight}
      className="spotlight relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 18%, rgba(124,92,209,0.14), transparent 65%), radial-gradient(45% 40% at 8% 85%, rgba(107,90,148,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 top-10 h-[26rem] w-[26rem] animate-blob rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-[22rem] w-[22rem] animate-blob rounded-full bg-olive/25 blur-[100px] [animation-delay:-6s]" />
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.role} &middot; {profile.location}
          </motion.p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
            {headlineLines.map((line, lineIndex) => (
              <span key={lineIndex} className="flex flex-wrap items-baseline gap-x-[0.28em] pb-1">
                {line.map((word, wordIndex) => {
                  const isAccent = typeof word === "object";
                  const text = isAccent ? word.text : word;
                  return (
                    <span key={wordIndex} className="inline-block overflow-hidden pb-1">
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: easeOut,
                          delay: 0.3 + (lineIndex * line.length + wordIndex) * 0.06,
                        }}
                        className={`inline-block ${isAccent ? "italic gradient-text" : ""}`}
                      >
                        {text}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.7 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted text-balance"
          >
            Five years of building brand voice and content strategy that
            people actually stop for — across skincare, grooming, and home
            care. I like content that feels like it belongs in the feed,
            not like it's interrupting one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work" variant="primary">
              See the work
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-14 border-y border-line/70 py-3"
          >
            <Marquee>
              {tickerWords.map((word) => (
                <span
                  key={word}
                  className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.15em] text-muted/80"
                >
                  {word}
                  <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
                </span>
              ))}
            </Marquee>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-accent-soft via-paper to-olive/10 shadow-glow-lg"
          >
            <img
              src="/profile.png"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent" />
          </motion.div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] border border-dashed border-accent/25 animate-spin-slow" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 1.15 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-surface/90 backdrop-blur px-5 py-4 shadow-[0_20px_50px_-25px_rgba(33,29,46,0.35)] sm:block"
          >
            <StatCard value="47.6K" label="views on one giveaway post" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 1.3 }}
            className="absolute -top-6 -right-4 hidden rounded-2xl border border-line bg-surface/90 backdrop-blur px-5 py-4 shadow-[0_20px_50px_-25px_rgba(33,29,46,0.35)] sm:block"
          >
            <StatCard value="2" label="categories reimagined" />
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-ink transition-colors md:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
