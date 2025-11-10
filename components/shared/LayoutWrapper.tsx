"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "components/shared/molecules";
import { Banner } from "components/services";
import data from "data/services.json";
import { toCamelCaseFromUrlExtraction } from "utils";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const hideLayout = pathname === "/start-a-project";

  const extractedPathEndPoint = toCamelCaseFromUrlExtraction(pathname);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const banner = (data as any)[extractedPathEndPoint]?.banner;

  return (
    <>
      {!hideLayout && (
        <div className="sticky top-0 z-50 bg-secondary">
          <Navbar />
        </div>
      )}
      <main>
        {banner && <Banner src={banner.src} alt={banner.alt} />}
        <div
          className={`${
            !hideLayout
              ? "w-full xl:w-container px-4 xl:px-0 mx-auto min-h-[80vh]"
              : ""
          }`}
        >
          {children}
        </div>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
