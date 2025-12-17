import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Carousel,
  Overview,
  StartProject,
  Thumbnails,
  WhatWeDid,
} from "components/pages/work/view";
import { SITE } from "config/constants";
import data from "data/work.json";

interface WorkDetailProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: WorkDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const item = data.work.list.find((t) => t.id === id);

  if (!item) {
    notFound();
  }

  return {
    title: `Work - ${item.name} | ${SITE.name}`,
  };
}

export default async function WorkDetail({ params }: WorkDetailProps) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const item = data.work.list.find((t) => t.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
        <Overview data={item.overview} />
        <WhatWeDid data={item.whatWeDid} />
      </div>

      {item.thumbnails && <Thumbnails data={item.thumbnails} />}

      {item.carousel && (
        <>
          <Carousel delay={1500} data={item.carousel[1]} />
          <Carousel data={item.carousel[2]} />
        </>
      )}

      <StartProject data={item.startProject} />
    </div>
  );
}
