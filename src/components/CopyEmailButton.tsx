"use client";

import { useRef, useState } from "react";
import { copyText } from "@/lib/copyText";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
  /** Footer-style line above the address. */
  label?: string;
  labelClassName?: string;
  emailClassName?: string;
  /** Break the address at @ on viewports below sm (contact cards). */
  breakOnMobile?: boolean;
};

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CopyEmailFeedback({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold text-accent-red ${className}`}
    >
      <CheckIcon className="h-[15px] w-[15px] shrink-0" />
      Copied
    </span>
  );
}

function EmailDisplay({
  email,
  breakOnMobile,
}: {
  email: string;
  breakOnMobile?: boolean;
}) {
  if (!breakOnMobile) {
    return email;
  }

  const at = email.indexOf("@");
  const local = at >= 0 ? email.slice(0, at + 1) : email;
  const domain = at >= 0 ? email.slice(at + 1) : "";

  return (
    <>
      <span className="hidden sm:inline">{email}</span>
      {domain ? (
        <span className="sm:hidden">
          {local}
          <wbr />
          {domain}
        </span>
      ) : (
        <span className="sm:hidden">{email}</span>
      )}
    </>
  );
}

/** Copies the address on click and briefly shows copied feedback. */
export function CopyEmailButton({
  email,
  className = "",
  label,
  labelClassName = "",
  emailClassName = "",
  breakOnMobile = false,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const copiedTimeout = useRef<number | null>(null);

  const onClick = async () => {
    try {
      await copyText(email);
      setCopied(true);
      if (copiedTimeout.current) {
        window.clearTimeout(copiedTimeout.current);
      }
      copiedTimeout.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Ignore — clipboard may be blocked.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer border-0 bg-transparent p-0 font-inherit ${className}`}
        aria-label={copied ? `${email} copied to clipboard` : `Copy ${email} to clipboard`}
      >
        {label ? (
          <span className={labelClassName || "block"}>{label}</span>
        ) : null}
        <span
          className={
            emailClassName ||
            (label ? "mt-0.5 inline-flex min-h-[1.25rem] items-center gap-2" : "inline-flex items-center")
          }
        >
          {copied ? <CopyEmailFeedback /> : <EmailDisplay email={email} breakOnMobile={breakOnMobile} />}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </>
  );
}
