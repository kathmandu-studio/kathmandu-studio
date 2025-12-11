"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { loadGAScript, trackPageView } from "./analytics";

export default function AnalyticsProvider() {
  const pathname = usePathname();

  // Load GA once on mount
  useEffect(() => {
    loadGAScript();
  }, []);

  // Track page views on SPA navigation
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
