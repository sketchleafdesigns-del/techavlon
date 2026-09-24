import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

/**
 * Engagement process: understand, assess, design, implement, support.
 * Horizontal connector on desktop, stacked timeline on mobile.
 */
export function HowWeWork() {
  return (
    <section
      className="bg-surface py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            id="process-heading"
            eyebrow="How We Work"
            title="A Structured Approach to Every Engagement"
            lead="From the first conversation to ongoing support, the process follows a defined sequence — so you always know where a project stands and what happens next."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Desktop connector line behind the step markers */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block"
          />
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative">
                <Reveal delay={index * 80}>
                  <span className="relative z-10 grid size-12 place-items-center rounded-md border border-accent-500/35 bg-white font-display text-sm font-bold text-accent-700 shadow-card">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
