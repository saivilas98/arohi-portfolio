import { caseStudies } from "../../data/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CaseStudyCard } from "./CaseStudyCard";

export function FeaturedWork() {
  return (
    <section id="work" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Two brands, two problems worth solving"
          description="A closer look at how the thinking behind the content turned into results people actually engaged with."
        />

        <div className="mt-16 flex flex-col gap-10">
          {caseStudies.map((study, index) => (
            <CaseStudyCard study={study} index={index} key={study.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
