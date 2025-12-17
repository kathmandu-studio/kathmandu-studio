import { PageTitle } from "components/layout";
import { Approach, Thumbnails } from "components/pages/work/list";
import data from "data/work.json";

export default function Work() {
  const { approach } = data.work;

  return (
    <>
      <PageTitle title="Work" />
      <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
        <Approach data={approach} />
        <Thumbnails />
      </div>
    </>
  );
}
