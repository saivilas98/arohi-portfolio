import { Sparkles } from "lucide-react";
import { achievements } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useCountUp } from "../../lib/useCountUp";

const hasDigits = (title: string) => /\d/.test(title);

function AchievementTitle({ title }: { title: string }) {
  const { ref, display } = useCountUp(title, 1.3);
  return (
    <h3 ref={ref} className="font-display text-xl font-medium text-ink mb-2">
      {hasDigits(title) ? display : title}
    </h3>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Moments worth remembering"
          description="The wins that stuck — not because of the numbers alone, but what they proved."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.title}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_30px_60px_-35px_rgba(124,92,209,0.5)]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <Sparkles
                size={20}
                className="relative text-accent mb-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
              <AchievementTitle title={achievement.title} />
              <p className="relative text-sm leading-relaxed text-muted">{achievement.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
