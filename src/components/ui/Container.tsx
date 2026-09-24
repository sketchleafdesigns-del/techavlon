import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Tighter gutter for edge-to-edge decorative sections. */
  narrow?: boolean;
}

/**
 * Page container — the standard content width used across all sections.
 */
export function Container({
  narrow = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        narrow ? "max-w-[1080px]" : "max-w-[1200px]",
        className
      )}
      {...props}
    />
  );
}
