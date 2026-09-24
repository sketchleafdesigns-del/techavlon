import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

/**
 * Slim band acknowledging the technology brands presented as
 * partners on the existing Techavlon website.
 */
export function PartnerStrip() {
  return (
    <section
      aria-label="Technology partners"
      className="border-b border-white/5 bg-navy-900"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-navy-400">
            Authorized Partner
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {site.partners.map((brand) => (
              <li
                key={brand}
                className="font-display text-sm font-semibold tracking-wide text-navy-200/85"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
