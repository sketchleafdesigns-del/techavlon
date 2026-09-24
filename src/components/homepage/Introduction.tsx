import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { companyProfile, domains } from "@/data/content";

/**
 * "Who we are" section: explains the relationship between
 * infrastructure, reliability, security and business operations,
 * with the verified company profile and the eight technology
 * domains Techavlon works across.
 */
export function Introduction() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Technology That Supports the Way Your Business Operates"
            />
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-600 sm:text-base">
              <p>
                Modern organizations run on infrastructure. Every
                application, transaction, collaboration tool and operational
                system depends on a foundation of compute, storage,
                networking, power, cooling and security working together.
                When that foundation is well designed, operations feel
                effortless — when it is not, performance, availability and
                security all suffer.
              </p>
              <p>
                Techavlon works across that entire foundation: from servers
                and storage to networking and data-centre infrastructure,
                and from IT security to cybersecurity and electronic
                security systems. The role is straightforward — helping
                organizations build, protect and scale the technology
                environments their business depends on.
              </p>
              <p>
                Reliable infrastructure is not just an IT concern. It
                determines how quickly teams can work, how safely data is
                handled, how well systems perform under load and how easily
                an organization can grow. Getting the foundation right is a
                business decision — and it starts with understanding how
                each layer of technology supports the others.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-accent-500 pl-5">
              <p className="text-[15px] font-medium leading-relaxed text-ink-900">
                “{companyProfile.vision}”
              </p>
              <cite className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 not-italic">
                Our Vision
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <figure className="overflow-hidden rounded-lg border border-line shadow-card">
              <img
                src="/images/intro-technician.jpg"
                alt="A technician inspecting a server rack in a data centre"
                loading="lazy"
                width="1472"
                height="1008"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-line bg-surface px-5 py-3 text-xs text-ink-500">
                Enterprise infrastructure is a discipline — planned, deployed
                and maintained with the same rigour.
              </figcaption>
            </figure>

            <div className="mt-6 rounded-lg border border-line bg-surface p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-900">
                Company Profile
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {companyProfile.narrative}
              </p>
              <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 font-medium text-ink-500">
                    Founded
                  </dt>
                  <dd className="text-ink-700">{companyProfile.founded}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 font-medium text-ink-500">
                    Incorporated
                  </dt>
                  <dd className="text-ink-700">
                    {companyProfile.incorporated}
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 font-medium text-ink-500">
                    Head Office
                  </dt>
                  <dd className="text-ink-700">
                    {companyProfile.headOffice}
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 font-medium text-ink-500">
                    Focus
                  </dt>
                  <dd className="text-ink-700">{companyProfile.focus}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Technology domains */}
        <Reveal delay={80}>
          <div className="mt-16 lg:mt-20">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-ink-500">
              The Domains We Work Across
            </h3>
            <div className="mt-6 grid overflow-hidden rounded-lg border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-4">
              {domains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.name}
                    className="group bg-white p-6 transition-colors duration-300 hover:bg-surface"
                  >
                    <span className="grid size-9 place-items-center rounded-md border border-line bg-surface text-navy-700 transition-colors group-hover:border-accent-500/40 group-hover:text-accent-700">
                      <Icon className="size-4.5" />
                    </span>
                    <h4 className="mt-4 font-display text-[15px] font-semibold text-ink-900">
                      {domain.name}
                    </h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">
                      {domain.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
