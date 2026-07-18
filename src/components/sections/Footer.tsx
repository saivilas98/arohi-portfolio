import { ArrowUp } from "lucide-react";
import { profile } from "../../data/content";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-line pt-16 pb-8 overflow-hidden">
      <p
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[18vw] leading-none tracking-tightest text-ink/[0.035] sm:text-[12vw]"
      >
        {profile.name}
      </p>

      <Container className="relative mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-ink transition-all duration-300 hover:border-accent hover:shadow-glow"
        >
          Back to top
          <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
}
