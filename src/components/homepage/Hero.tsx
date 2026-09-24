import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { IconArrowRight } from "@/lib/icons";

/**
 * Enterprise hero: full-bleed data-centre visual under a deep-navy
 * gradient, with the value proposition and primary actions.
 */
export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950"
      aria-labelledby="hero-heading"
    >
      {/* Visual layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-datacentre.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="h-full w-full object-cover object-[72%_center] opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        <div className="bg-grid-dark mask-fade-b absolute inset-0 opacity-60" />
      </div>

      <Container>
        <div className="flex min-h-[88svh] flex-col justify-center pb-32 pt-32 sm:pb-36 lg:pt-40">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-300 sm:text-xs">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-accent-400/70"
                />
                Enterprise IT Infrastructure &amp; Technology Solutions
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-heading"
                className="mt-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.5rem]"
              >
                Technology Infrastructure Built for{" "}
                <span className="text-accent-300">
                  Reliability, Security &amp; Scale.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/90 sm:text-lg">
                Techavlon delivers enterprise IT infrastructure, networking,
                data centre technology, security and related technology
                solutions designed to help organizations operate securely,
                reliably and efficiently.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#contact" size="lg">
                  Talk to an Expert
                  <IconArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href="#solutions"
                  size="lg"
                  variant="secondaryDark"
                >
                  Explore Solutions
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Solution breadth strip */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-950/70 backdrop-blur-sm">
        <Container>
          <ul
            aria-label="Solution areas"
            className="flex flex-wrap items-center gap-x-3 gap-y-1.5 py-4"
          >
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-navy-300"
              >
                {service.name}
                {index < services.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-accent-500/50"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
