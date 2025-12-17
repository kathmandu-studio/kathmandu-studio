import { Approach, Thumbnails } from "components/pages/work/list";
import { SITE } from "config/constants";
import data from "data/work.json";

export const metadata = {
  title: `Work | ${SITE.name}`,
};

export default function Work() {
  const { approach } = data.work;

  return (
    <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
      <Approach data={approach} />
      <Thumbnails />
    </div>
  );
}
