import { ArrowUpRight, AtSign, Link2, Mail } from "lucide-react";
import { profile } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

const links = [
  {
    label: "Email",
    value: "hello@arohishukla.com",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/arohishukla",
    href: profile.linkedin,
    icon: Link2,
  },
  {
    label: "Instagram",
    value: "@arohishukla",
    href: profile.instagram,
    icon: AtSign,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        <div className="rounded-[2rem] border border-line bg-ink px-8 py-16 sm:px-16 md:py-20 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, rgba(184,80,47,0.22), transparent 65%)",
            }}
            aria-hidden
          />

          <Reveal className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-paper text-balance max-w-2xl mx-auto leading-[1.15]">
              Have a brand that needs a voice?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-paper/70 text-base md:text-lg leading-relaxed text-balance">
              I'm always open to a conversation about content, strategy, or
              the next campaign worth building. Say hello — I read every
              message myself.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href={`mailto:${profile.email}`}
                variant="secondary"
                className="!bg-paper !text-ink !border-transparent hover:!bg-accent-soft"
              >
                Email me
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton
                href={profile.resumeUrl}
                variant="secondary"
                className="!border-paper/25 !text-paper hover:!border-paper"
              >
                Download resume
              </MagneticButton>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-paper/70 hover:text-paper transition-colors"
                >
                  <Icon size={16} />
                  {value}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
