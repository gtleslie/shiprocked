import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "gold";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent-red text-text-primary hover:bg-[#a81818]",
  outline: "border-[1.5px] border-text-primary text-text-primary hover:bg-white/5",
  gold: "bg-accent-gold text-bg-primary hover:bg-[#c49234]",
};

type SiteButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function SiteButton({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled = false,
}: SiteButtonProps) {
  const classes = `inline-flex h-[52px] items-center justify-center rounded-[2px] px-6 text-[13px] font-bold tracking-[0.26px] transition-colors ${variantClasses[variant]} ${className} ${disabled ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
