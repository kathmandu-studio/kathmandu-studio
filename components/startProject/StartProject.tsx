"use client";

import { useEffect, useRef } from "react";

export default function StartProjectForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Wait a moment for Typeform widget to render, then fix height
    const interval = setInterval(() => {
      const widget = containerRef.current?.querySelector(
        ".tf-v1-widget"
      ) as HTMLElement;
      const iframe = containerRef.current?.querySelector(
        "iframe"
      ) as HTMLIFrameElement;

      if (widget && iframe) {
        widget.style.height = "100%";
        widget.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.width = "100%";
        clearInterval(interval);
      }
    }, 50);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-tf-widget="JWqVF5PM"
      data-tf-opacity="100"
      data-tf-iframe-props="title=My branded typeform"
      style={{ width: "100%", height: "100vh", minHeight: "100vh" }}
    />
  );
}
