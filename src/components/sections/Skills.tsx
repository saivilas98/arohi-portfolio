import { motion } from "framer-motion";
import { skills } from "../../data/content";
import { stagger } from "../../lib/motion";
import { Chip } from "../ui/Chip";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const chipVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/60">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the work"
          description="Less a checklist, more the habits that show up in every campaign."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={chipVariants}>
              <Chip>{skill}</Chip>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
