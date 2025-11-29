"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LayoutWrapper from "components/shared/LayoutWrapper";
import WhatsAppButton from "components/shared/atoms/button/WhatsAppButton";

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
