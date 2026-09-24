import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondaryDark"
  | "secondaryLight"
  | "ghostDark";

export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  /** Electric cyan — the primary action color. */
  primary:
    "bg-accent-500 text-navy-950 shadow-[0_8px_20px_-8px_rgb(6_182_212/0.55)] hover:bg-accent-400",
  /** Outlined for use on dark surfaces. */
  secondaryDark:
    "border border-white/25 text-white hover:border-accent-400/70 hover:text-accent-300",
  /** Outlined for use on light surfaces. */
  secondaryLight:
    "border border-navy-200 bg-white text-ink-900 hover:border-navy-500 hover:text-navy-700",
  /** Text-only action on light surfaces. */
  ghostDark: "text-navy-700 hover:text-ink-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
): string {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}
