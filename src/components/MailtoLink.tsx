"use client";

import type { ReactNode, MouseEvent } from "react";
import { mailtoHref } from "@/lib/mailto";

type MailtoLinkProps = {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children: ReactNode;
};

/** Opens the visitor’s mail client; uses a new tab so the click feels like other external links. */
export function MailtoLink({ email, subject, body, className, children }: MailtoLinkProps) {
  const href = mailtoHref(email, { subject, body });

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    const tab = window.open("about:blank", "_blank", "noopener,noreferrer");
    if (tab) {
      tab.opener = null;
      tab.location.href = href;
      return;
    }
    window.location.href = href;
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
