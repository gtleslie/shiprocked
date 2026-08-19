import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "gold" | "dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent-red text-white hover:bg-[#b81818]",
  outline: "border border-white text-white hover:bg-white/5",
  gold: "bg-accent-gold text-black hover:bg-[#c49234]",
  dark: "bg-black text-white hover:bg-[#111]",
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
  const classes = `inline-flex h-[48px] items-center justify-center px-7 text-[12px] font-bold tracking-[0.32px] uppercase transition-colors ${variantClasses[variant]} ${className} ${disabled ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`;

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
