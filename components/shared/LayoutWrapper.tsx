"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "components/shared/molecules";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const hideLayout = pathname === "/start-a-project";

  return (
    <>
      {!hideLayout && (
        <div className="sticky top-0 z-50 bg-secondary">
          <Navbar />
        </div>
      )}
      <main
        className={`${
          !hideLayout
            ? "w-full xl:w-container px-4 xl:px-0 mx-auto min-h-[80vh]"
            : ""
        }`}
      >
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
