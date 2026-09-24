import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/lib/icons";

const contactItems = [
  {
    label: "Visit Us",
    icon: IconMapPin,
    lines: [...site.addressLines],
    href: undefined as string | undefined,
  },
  {
    label: "Call Us",
    icon: IconPhone,
    lines: site.phones.map((phone) => phone.label),
    href: site.primaryPhone.href,
  },
  {
    label: "Email Us",
    icon: IconMail,
    lines: [site.email],
    href: site.emailHref,
  },
  {
    label: "Working Hours",
    icon: IconClock,
    lines: ["Monday – Saturday", "9:00 AM – 6:30 PM"],
    href: undefined as string | undefined,
  },
];

/**
 * Final conversion band + verified contact details. The CTA band is a
 * reusable component; the contact grid anchors the page's #contact
 * target.
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-navy-950"
    >
      {/* Background visual */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/cta-network.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
      </div>

      <CTASection
        eyebrow="Get in Touch"
        title="Let's Build the Right Technology Foundation for Your Business"
        text="Discuss your infrastructure, networking, security or technology requirements with the Techavlon team."
        actions={[
          {
            label: "Talk to an Expert",
            href: site.primaryPhone.href,
          },
          {
            label: "Email the Team",
            href: site.emailHref,
            variant: "secondaryDark",
          },
        ]}
        className="border-b border-white/10"
      />

      <Container className="relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="grid size-9 place-items-center rounded-md border border-white/15 bg-white/5">
                  <Icon className="size-4.5 text-accent-300" />
                </span>
                <span className="mt-3.5 block font-display text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-navy-200">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </>
            );
            return (
              <Reveal key={item.label} delay={index * 80} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={`Techavlon — ${item.label.toLowerCase()}`}
                    className="block h-full rounded-lg p-2 transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="rounded-lg p-2">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
