import { useEffect } from "react";

export default function usePageVisitTracker(path?: string) {
  useEffect(() => {
    const track = async () => {
      await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: path || window.location.pathname, type: "page" }),
      });
    };
    track();
  }, [path]);
}
