import { about } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24">
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

          <div className="flex flex-col gap-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-lg leading-relaxed text-ink/80 text-balance">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
