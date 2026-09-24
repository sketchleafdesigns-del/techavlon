import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQItem } from "@/components/ui/FAQItem";
import { ButtonLink } from "@/components/ui/Button";
import { faqs } from "@/data/content";

/**
 * Homepage FAQ — enterprise infrastructure questions with
 * informative answers and no unsupported claims.
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="faq-heading"
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              lead="Practical answers about enterprise infrastructure, security and how technology projects are approached."
            />
            <div className="mt-8 rounded-lg border border-line bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink-900">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Our team can discuss your environment, requirements and
                options in detail.
              </p>
              <ButtonLink
                href="#contact"
                variant="secondaryLight"
                className="mt-4"
              >
                Talk to an Expert
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg border border-line bg-white px-6 shadow-card sm:px-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  id={`faq-item-${index + 1}`}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index
                    )
                  }
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
