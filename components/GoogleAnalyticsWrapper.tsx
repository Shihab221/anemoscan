// app/components/GoogleAnalyticsWrapper.tsx
"use client"; // <--- important

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalyticsWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Page visited:", pathname);
    // Here you can call your GA track function
  }, [pathname]);

  return null;
}
