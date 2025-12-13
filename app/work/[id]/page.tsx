import { Overview, StartProject, Thumbnails } from "components/work/view";
import WhatWeDid from "components/work/view/WhatWeDid";
import data from "data/work.json";
import { notFound } from "next/navigation";

interface WorkDetailProps {
  params: { id: string };
}

export default async function WorkDetail({ params }: WorkDetailProps) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const item = data.work.list.find((t) => t.id === id);

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
        <Overview data={item.overview} />
        <WhatWeDid data={item.whatWeDid} />
      </div>
      <Thumbnails data={item.thumbnails} />
      <StartProject data={item.startProject} />
    </div>
  );
}
