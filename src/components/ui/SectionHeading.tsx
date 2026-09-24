import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** onDark: heading sits on a dark background. */
  onDark?: boolean;
  /** Id applied to the h2 (for aria-labelledby on the section). */
  id?: string;
  className?: string;
}

/**
 * Standard section heading block: eyebrow label, display heading and
 * optional lead paragraph. Keeps the content hierarchy consistent
 * across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
  id,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]",
            centered && "justify-center",
            onDark ? "text-accent-300" : "text-accent-700"
          )}
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-current opacity-70"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          onDark ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            onDark ? "text-navy-200" : "text-ink-600"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
