import { SITE } from "config/constants";

export const metadata = {
  title: `Studio | ${SITE.name}`,
};

export default function Studio() {
  return <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12"></div>;
}
