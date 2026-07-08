import { Sparkles } from "lucide-react";
import { achievements } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

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
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(33,29,46,0.3)]"
            >
              <Sparkles
                size={20}
                className="text-accent mb-5 transition-transform duration-500 group-hover:rotate-12"
              />
              <h3 className="font-display text-xl font-medium text-ink mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{achievement.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
