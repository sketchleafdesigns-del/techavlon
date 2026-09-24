import { cn } from "@/lib/cn";
import { IconArrowRight, IconCheck } from "@/lib/icons";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

/**
 * Premium service card. Structured so `service.href` can be swapped
 * to a dedicated page route later without touching markup.
 */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-lift",
        className
      )}
    >
      {/* Top accent hairline, revealed on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="grid size-11 place-items-center rounded-md border border-line bg-surface text-navy-700 transition-colors duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500/10 group-hover:text-accent-700">
        <Icon className="size-5.5" />
      </span>

      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
        {service.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2 border-t border-line pt-4">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-700"
          >
            <IconCheck className="mt-0.5 size-3.5 shrink-0 text-accent-600" />
            {point}
          </li>
        ))}
      </ul>

      <a
        href={service.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        aria-label={`Discuss ${service.name} with the Techavlon team`}
      >
        Explore Solution
        <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
