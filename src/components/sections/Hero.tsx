import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { easeOut } from "../../lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 18%, rgba(184,80,47,0.10), transparent 65%), radial-gradient(45% 40% at 8% 85%, rgba(86,82,50,0.08), transparent 60%)",
        }}
        aria-hidden
      />

      <Container className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-6"
          >
            {profile.role} &middot; {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.08 }}
            className="font-display text-[2.6rem] leading-[1.08] tracking-tightest text-ink sm:text-6xl lg:text-7xl text-balance"
          >
            I make brands
            <br />
            sound less like <span className="italic text-accent">brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.18 }}
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
            transition={{ duration: 0.75, ease: easeOut, delay: 0.28 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-accent-soft via-paper to-olive/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 20% 0%, rgba(184,80,47,0.28), transparent 55%), radial-gradient(90% 70% at 90% 100%, rgba(86,82,50,0.25), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[7rem] font-medium text-ink/90 select-none">
                AS
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_20px_50px_-25px_rgba(27,24,18,0.35)] sm:block"
          >
            <p className="text-2xl font-display font-medium text-ink">47.6K</p>
            <p className="text-xs text-muted">views on one giveaway post</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.75 }}
            className="absolute -top-6 -right-4 hidden rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_20px_50px_-25px_rgba(27,24,18,0.35)] sm:block"
          >
            <p className="text-2xl font-display font-medium text-ink">2</p>
            <p className="text-xs text-muted">categories reimagined</p>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
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
