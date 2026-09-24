import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { IconArrowRight } from "@/lib/icons";

/**
 * Primary solutions section — eight service cards covering the full
 * enterprise technology stack.
 */
export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-24 bg-surface py-20 lg:py-28"
      aria-labelledby="solutions-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our Solutions"
            title="Enterprise Technology Solutions"
            lead="Eight specialized practice areas covering the full enterprise technology stack — from compute and storage to security and assessment. Each can be delivered independently or combined into an integrated solution."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={(index % 4) * 70}
              className="h-full"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-sm text-ink-600">
            Every solution is scoped to your existing environment and
            objectives.
            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-1 font-semibold text-accent-700 transition-colors hover:text-ink-900"
            >
              Discuss your requirements
              <IconArrowRight className="size-3.5" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
