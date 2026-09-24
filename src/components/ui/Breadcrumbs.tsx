import { cn } from "@/lib/cn";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  /** Breadcrumbs are typically used on dark page heroes. */
  onDark?: boolean;
}

/**
 * Breadcrumbs for internal pages (home, solution pages, etc.).
 * Renders a semantic nav with proper aria-current for the last item.
 */
export function Breadcrumbs({
  items,
  className,
  onDark = true,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm", className)}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-x-2">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className={onDark ? "text-navy-500" : "text-navy-300"}
                >
                  /
                </span>
              ) : null}
              {isLast || !crumb.href ? (
                <span
                  aria-current="page"
                  className={
                    onDark ? "text-navy-200" : "text-ink-700"
                  }
                >
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className={cn(
                    "transition-colors",
                    onDark
                      ? "text-navy-400 hover:text-white"
                      : "text-ink-500 hover:text-ink-900"
                  )}
                >
                  {crumb.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
