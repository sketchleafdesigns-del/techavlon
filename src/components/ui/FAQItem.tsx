import { cn } from "@/lib/cn";
import { IconChevronDown } from "@/lib/icons";

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  /** Ids keep the button and panel linked for screen readers. */
  id: string;
}

/**
 * Accessible accordion item: a button controlling a smoothly
 * expanding panel (no jump, no fixed heights).
 */
export function FAQItem({
  question,
  answer,
  open,
  onToggle,
  id,
}: FAQItemProps) {
  const panelId = `${id}-panel`;
  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          type="button"
          id={id}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        >
          <span className="font-display text-[15px] font-semibold text-ink-900 sm:text-base">
            {question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink-500 transition-transform duration-300",
              open && "rotate-180 border-accent-500/50 text-accent-700"
            )}
          >
            <IconChevronDown className="size-3.5" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 pr-10 text-[15px] leading-relaxed text-ink-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
