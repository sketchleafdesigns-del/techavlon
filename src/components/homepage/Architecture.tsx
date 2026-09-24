import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { architectureLayers } from "@/data/content";
import { cn } from "@/lib/cn";
import { IconCheck } from "@/lib/icons";

const practicalPoints = [
  "Failures rarely stay in one layer — a network issue often surfaces as an application problem.",
  "Security must be present at every layer, not only at the perimeter.",
  "Planning across layers avoids gaps and unnecessary duplication when scaling.",
];

/**
 * Conceptual architecture: how the layers of enterprise technology
 * relate to each other. Presented explicitly as a conceptual view —
 * not as a proprietary Techavlon architecture.
 */
export function Architecture() {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-28"
      aria-labelledby="architecture-heading"
    >
      <div
        aria-hidden="true"
        className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
      />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Narrative */}
          <Reveal>
            <SectionHeading
              id="architecture-heading"
              eyebrow="How It All Fits Together"
              title="An Integrated View of Enterprise Technology"
              lead="Enterprise technology is a stack of interdependent layers. Understanding how they relate — and where they need reinforcement — is the first step toward a reliable, secure and scalable environment."
              onDark
            />
            <ul className="mt-8 space-y-4">
              {practicalPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-navy-100"
                >
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full border border-accent-500/40 bg-accent-500/10">
                    <IconCheck className="size-3 text-accent-300" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-navy-400">
              Techavlon's solution areas map directly onto these layers,
              which is why they are planned together rather than in
              isolation.
            </p>
          </Reveal>

          {/* Layer diagram */}
          <div>
            <ol className="relative" aria-label="Conceptual technology layers">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <li key={layer.index} className="relative">
                    <Reveal delay={index * 70}>
                      <div
                        className={cn(
                          "flex items-center gap-4 rounded-md border p-4 transition-colors sm:gap-5 sm:p-5",
                          layer.accent
                            ? "border-accent-500/45 bg-accent-500/[0.08]"
                            : "border-white/10 bg-navy-900/75"
                        )}
                      >
                        <span
                          className={cn(
                            "font-display text-xs font-semibold tracking-[0.2em]",
                            layer.accent
                              ? "text-accent-300"
                              : "text-navy-400"
                          )}
                        >
                          {layer.index}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-sm font-semibold text-white sm:text-base">
                            {layer.name}
                          </h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-navy-300">
                            {layer.description}
                          </p>
                        </div>
                        <Icon
                          className={cn(
                            "size-5.5 shrink-0 sm:size-6",
                            layer.accent
                              ? "text-accent-300"
                              : "text-accent-400/60"
                          )}
                        />
                      </div>
                    </Reveal>
                    {index < architectureLayers.length - 1 ? (
                      <div
                        aria-hidden="true"
                        className="flex justify-center py-1.5"
                      >
                        <span className="h-4 w-px bg-gradient-to-b from-accent-500/50 to-accent-500/10" />
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-navy-500">
              A conceptual view of enterprise technology infrastructure,
              shown to illustrate how the different solution areas
              interconnect.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
