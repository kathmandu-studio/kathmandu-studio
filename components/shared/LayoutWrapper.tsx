"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer, Banner } from "components/shared/molecules";
import work from "data/work.json";
import services from "data/services.json";
import { toCamelCaseFromUrlExtraction } from "utils/misc";
import Navigation from "./molecules/Navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const hideLayout = pathname === "/start-a-project";
  const segments = pathname.split("/").filter(Boolean);
  const mainRoute = segments[0];
  const nestedSegment = Number(segments[1]);

  const navigation = {
    length: 0,
    previous: {
      href: `/${mainRoute}/${nestedSegment - 1}`,
      name: "",
    },
    next: {
      href: `/${mainRoute}/${nestedSegment + 1}`,
      name: "",
    },
  };

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

  if (mainRoute === "work" && nestedSegment && !isNaN(nestedSegment)) {
    const workList = data.work.list;

    navigation.length = workList.length;
    navigation.previous.name = workList[nestedSegment - 2]?.name ?? "";
    navigation.next.name = workList[nestedSegment]?.name ?? "";

    if (workList) {
      const item = workList.find((w) => w.id === nestedSegment);

      if (item?.banner) {
        banner = { src: item.banner, alt: item.p };
      }
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
        {mainRoute === "work" && nestedSegment && (
          <Navigation
            previous={{
              href: navigation.previous.href,
              name: navigation.previous.name,
            }}
            next={{ href: navigation.next.href, name: navigation.next.name }}
            isFirstNavigation={nestedSegment === 1}
            isLastNavigation={nestedSegment === navigation.length}
          />
        )}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
