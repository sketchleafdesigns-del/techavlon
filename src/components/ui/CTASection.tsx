import { Container } from "@/components/ui/Container";
import { ButtonLink, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface CTAAction {
  label: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface CTASectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  text: string;
  actions: CTAAction[];
  /** Dark band sits on top of a dark visual or solid navy. */
  className?: string;
}

/**
 * Reusable conversion band. The homepage final CTA composes this with
 * a contact grid; future pages can reuse it as-is.
 */
export function CTASection({
  id,
  eyebrow,
  title,
  text,
  actions,
  className,
}: CTASectionProps) {
  return (
    <div
      id={id}
      className={
        "relative isolate overflow-hidden bg-navy-950 bg-grid-dark scroll-mt-20 " +
        (className ?? "")
      }
    >
      <Container narrow className="relative">
        <Reveal className="mx-auto max-w-2xl py-20 text-center lg:py-24">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            lead={text}
            align="center"
            onDark
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {actions.map((action) => (
              <ButtonLink
                key={action.label}
                href={action.href}
                variant={action.variant ?? "primary"}
                size={action.size ?? "lg"}
                className="w-full sm:w-auto"
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
