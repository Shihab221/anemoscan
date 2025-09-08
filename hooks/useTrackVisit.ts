"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useTrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: pathname }),
      }).catch((err) => console.error("Failed to track visit:", err));
    }
  }, [pathname]);
}
