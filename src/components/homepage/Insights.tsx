import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { insightTopics } from "@/data/content";
import { IconArrowRight } from "@/lib/icons";

/**
 * Future-ready insights structure: topic areas only — no invented
 * articles, dates or metrics. Content will be published here over
 * time.
 */
export function Insights() {
  return (
    <section
      id="insights"
      className="scroll-mt-24 bg-surface py-20 lg:py-28"
      aria-labelledby="insights-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            id="insights-heading"
            eyebrow="Insights"
            title="Insights & Topics"
            lead="A growing library of practical guides and technical topics for enterprise technology teams — covering infrastructure, security, data centres and IT best practices."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {insightTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Reveal key={topic.title} delay={index * 70} className="h-full">
                <div className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lift">
                  <span className="grid size-10 place-items-center rounded-md border border-line bg-surface text-navy-700 transition-colors group-hover:border-accent-500/40 group-hover:bg-accent-500/10 group-hover:text-accent-700">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-ink-900">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-600">
                    {topic.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-line bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-ink-600">
              Detailed guides and technical briefings on these topics will be
              published here.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-ink-900"
            >
              Discuss a topic with our team
              <IconArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
