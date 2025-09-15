"use client";

import { useEffect } from "react";
import * as gtag from "@/utils/gtag";

export default function DownloadTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.href || "";
      if (href.toLowerCase().endsWith(".apk")) {
        gtag.event({
        action: "file_download",
        params: {
            file_name: href.split("/").pop(),
            file_url: href,
        },
        });
        e.preventDefault();
        setTimeout(() => {
          window.location.href = href;
        }, 150);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return null;
}
