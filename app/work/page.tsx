import PageTitle from "components/shared/PageTitle";
import { Approach, Thumbnails } from "components/work/list";
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
