"use client";

import { ImageContainer } from "components/shared/molecules";
import data from "data/home.json";
import { useRouter } from "next/navigation";

export default function Thumbnails() {
  const router = useRouter();
  const thumbnails = data.thumbnails;

  return (
    <div className="flex flex-wrap justify-between gap-6 sm:gap-12">
      {thumbnails.map((thumbnail, index) => (
        <ImageContainer
          key={thumbnail.id}
          data={thumbnail}
          indexes={{ current: index, fullWidth: [0] }}
          onClick={() => router.push(`/work/${thumbnail.id}`)}
        />
      ))}
    </div>
  );
}
