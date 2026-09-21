"use client";

import { useEffect, type RefObject } from "react";

/** Keep horizontal carousels from eating vertical wheel — scroll the page instead. */
export function useForwardVerticalWheelToPage(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      const absY = Math.abs(event.deltaY);
      const absX = Math.abs(event.deltaX);
      if (absY <= absX) return;

      event.preventDefault();
      window.scrollBy({ top: event.deltaY, left: 0, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ref]);
}
