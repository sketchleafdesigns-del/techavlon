import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  /** Hide the small legal subline (e.g. compact contexts). */
  compact?: boolean;
}

/**
 * Techavlon wordmark: hexagonal node mark + TECHAVLON / Info Solutions.
 */
export function Logo({ className, compact = false }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Techavlon — back to top"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-white/15 bg-navy-800/70 transition-colors group-hover:border-accent-400/50">
        <svg
          viewBox="0 0 32 32"
          className="size-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16 3.5 27 10v12L16 28.5 5 22V10L16 3.5Z"
            stroke="#22d3ee"
            strokeWidth="1.6"
          />
          <path d="M16 10.5 21.5 21h-11L16 10.5Z" fill="#eaf7fc" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-[0.2em] text-white">
          TECHAVLON
        </span>
        {!compact ? (
          <span className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.34em] text-navy-300">
            Info Solutions
          </span>
        ) : null}
      </span>
    </a>
  );
}
