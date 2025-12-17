"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LayoutWrapper } from "components/layout";
import { WhatsAppButton } from "components/ui/atoms/button";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
      <WhatsAppButton />
    </>
  );
}
