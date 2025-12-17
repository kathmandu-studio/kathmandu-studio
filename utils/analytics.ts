import { GA_TRACKING_ID } from "config/env";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

// Load GA script
export const loadGAScript = () => {
  if (!GA_TRACKING_ID) return;

  // Prevent duplicate script
  if (document.querySelector(`script[src*="${GA_TRACKING_ID}"]`)) return;

  // Load gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Inline GA init
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `;
  document.head.appendChild(inlineScript);
};

// Track SPA page view
export const trackPageView = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, { page_path: url });
  }
};
