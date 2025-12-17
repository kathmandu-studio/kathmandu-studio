"use client";

import { ImageContainer } from "components/ui/molecules";
import { useRouter } from "next/navigation";
import data from "data/work.json";

export default function Thumbnails() {
  const router = useRouter();
  const workList = data.work;

  return (
    <div className="flex flex-wrap justify-between gap-6 sm:gap-12">
      {workList.list.map((work, index) => {
        const { id } = work;

        return (
          <ImageContainer
            key={id}
            data={work}
            indexes={{ current: index }}
            onClick={() => router.push(`/work/${id}`)}
          />
        );
      })}
    </div>
  );
}
