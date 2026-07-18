import { motion } from "framer-motion";
import { useTilt } from "../../lib/useTilt";

export function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative mx-auto w-full max-w-[260px] ${className}`}
    >
      <div className="relative aspect-[9/18.5] w-full rounded-[2.2rem] border-[6px] border-ink bg-ink p-1.5 shadow-glow-lg">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" aria-hidden />
        <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-accent/10 blur-2xl" aria-hidden />
    </motion.div>
  );
}
