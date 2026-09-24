import { Hero } from "@/components/homepage/Hero";
import { PartnerStrip } from "@/components/homepage/PartnerStrip";
import { Introduction } from "@/components/homepage/Introduction";
import { Solutions } from "@/components/homepage/Solutions";
import { Architecture } from "@/components/homepage/Architecture";
import { WhyTechavlon } from "@/components/homepage/WhyTechavlon";
import { HowWeWork } from "@/components/homepage/HowWeWork";
import { Industries } from "@/components/homepage/Industries";
import { Insights } from "@/components/homepage/Insights";
import { FAQSection } from "@/components/homepage/FAQSection";
import { FinalCTA } from "@/components/homepage/FinalCTA";

/**
 * Homepage composition. Section order:
 * hero → partners → introduction/about → solutions → architecture →
 * why → process → industries → insights → FAQ → contact CTA.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <Introduction />
      <Solutions />
      <Architecture />
      <WhyTechavlon />
      <HowWeWork />
      <Industries />
      <Insights />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
