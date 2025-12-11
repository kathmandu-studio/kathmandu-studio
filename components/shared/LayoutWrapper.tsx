"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer, Banner } from "components/shared/molecules";
import work from "data/work.json";
import services from "data/services.json";
import { toCamelCaseFromUrlExtraction } from "utils/misc";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const hideLayout = pathname === "/start-a-project";
  const segments = pathname.split("/").filter(Boolean);
  const mainRoute = segments[0];
  const nestedSegment = segments[1];

  const data = {
    ...work,
    ...services,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let banner = (data as any)[mainRoute]?.banner;

  if (mainRoute === "services") {
    const extractedPathEndPoint = toCamelCaseFromUrlExtraction(pathname);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    banner = (data as any)[extractedPathEndPoint]?.banner;
  }

  if (mainRoute === "work" && nestedSegment && !isNaN(Number(nestedSegment))) {
    const workList = data.work.list;
    const item = workList.find((w) => String(w.id) === nestedSegment);
    if (item?.banner) {
      banner = { src: item.banner, alt: item.p };
    }
  }

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
