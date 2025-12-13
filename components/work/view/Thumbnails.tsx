"use client";

import { ImageContainer } from "components/shared/molecules";

interface IThumbnail {
  id: number;
  src: string;
  p?: string;
}

interface IThumbnailsProps {
  data: IThumbnail[];
}

export default function Thumbnails({ data }: IThumbnailsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-6 sm:gap-12">
      {data.map((datum, index) => {
        const { id } = datum;

        return (
          <ImageContainer
            key={id}
            data={datum}
            indexes={{ current: index, fullWidth: [0, 3] }}
          />
        );
      })}
    </div>
  );
}
