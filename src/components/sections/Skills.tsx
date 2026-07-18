import { skills } from "../../data/content";
import { Chip } from "../ui/Chip";
import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const half = Math.ceil(skills.length / 2);
const rowOne = skills.slice(0, half);
const rowTwo = skills.slice(half);

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/60 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the work"
          description="Less a checklist, more the habits that show up in every campaign."
        />
      </Container>

      <Reveal delay={0.1} className="mt-14 flex flex-col gap-4">
        <Marquee>
          {rowOne.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </Marquee>
        <Marquee reverse>
          {rowTwo.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
