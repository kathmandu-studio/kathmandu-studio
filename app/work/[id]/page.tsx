import { Overview, StartProject, Thumbnails } from "components/work/view";
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
      <Overview data={item.overview} />
      <Thumbnails data={item.thumbnails} />
      <StartProject data={item.startProject} />
    </div>
  );
}
