import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { environmentFactors } from "@/data/content";
import { IconArrowRight } from "@/lib/icons";

/**
 * Neutral environments section — the existing site does not name
 * specific industries, so this frames the variables that shape
 * infrastructure requirements instead.
 */
export function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
      aria-labelledby="industries-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries & Environments"
            title="Technology Solutions Across Business Environments"
            lead="Infrastructure requirements vary according to organizational size, operational model, security requirements and the technology environment already in place. No two environments are identical — which is why each engagement starts with understanding the specific demands of yours."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {environmentFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <Reveal key={factor.title} delay={index * 80} className="h-full">
                <div className="group h-full rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:border-accent-500/40 hover:bg-white hover:shadow-card">
                  <span className="grid size-10 place-items-center rounded-md border border-line bg-white text-navy-700 transition-colors group-hover:border-accent-500/40 group-hover:text-accent-700">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {factor.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-600">
            The right solution depends on your specific environment —
            capacity, connectivity, security and physical infrastructure
            needs are shaped by how the organization actually operates.
            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-1 font-semibold text-accent-700 transition-colors hover:text-ink-900"
            >
              Talk to an Expert
              <IconArrowRight className="size-3.5" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
