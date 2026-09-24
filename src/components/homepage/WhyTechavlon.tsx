import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { valuePoints } from "@/data/content";

/**
 * Practical value of working with an enterprise technology
 * solutions provider — factual, non-exaggerated points.
 */
export function WhyTechavlon() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="why-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why Techavlon"
              title="Technology Designed Around Business Requirements"
              lead="Working with an enterprise technology solutions provider is about more than buying equipment. It is about getting the right foundation, built properly, and supported over time."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {valuePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={(index % 2) * 80}>
                  <div className="group h-full rounded-lg border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lift">
                    <span className="grid size-10 place-items-center rounded-md border border-line bg-surface text-navy-700 transition-colors group-hover:border-accent-500/40 group-hover:bg-accent-500/10 group-hover:text-accent-700">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
