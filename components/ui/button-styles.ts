export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center rounded-pill font-display font-bold whitespace-nowrap transition-all duration-[160ms] ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-60";

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-meta",
  md: "h-11 px-5 text-body",
  lg: "h-[50px] px-7 text-note",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-button text-navy shadow-cta hover:brightness-[0.95] hover:shadow-cta-hover",
  secondary:
    "border-2 border-accent bg-white text-accent hover:bg-accent/[0.07]",
  ghost: "text-accent hover:bg-accent/[0.07]",
};

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export const buttonStyles = ({
  variant = "primary",
  size = "md",
  className = "",
}: ButtonStyleOptions = {}) =>
  [BASE, SIZES[size], VARIANTS[variant], className].filter(Boolean).join(" ");
