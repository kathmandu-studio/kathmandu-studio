"use client";

import Image from "next/image";

export interface IImageContainerProps {
  id: number;
  src: string;
  name?: string;
  p?: string;
}

interface IIndexes {
  current: number;
  fullWidth?: number[];
}

interface ImageContainerProps {
  data: IImageContainerProps;
  indexes: IIndexes;
  onClick?: () => void;
}

export default function ImageContainer({
  data,
  indexes,
  onClick,
}: ImageContainerProps) {
  const isFullWidth = indexes.fullWidth?.includes(indexes.current);

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col ${onClick ? "cursor-pointer" : ""} 
    ${isFullWidth ? "w-full" : "w-[calc(50%-16px)] sm:w-fit"}
  `}
    >
      <div className={"relative w-full aspect-[2/1]"}>
        {isFullWidth ? (
          <div
            className={`relative w-full aspect-[2/1] overflow-hidden ${
              onClick ? "group cursor-pointer" : ""
            }`}
          >
            <Image
              src={data.src}
              alt={data.p ?? "thumbnail-image"}
              fill
              className="object-cover max-h-[600px] transition-transform duration-200 group-hover:scale-105"
            />

            {onClick && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 pointer-events-none"></div>
            )}
          </div>
        ) : (
          <div
            className={`relative w-full sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto overflow-hidden ${
              onClick ? "group cursor-pointer" : ""
            }`}
          >
            <Image
              src={data.src}
              alt={data.p ?? "thumbnail-image"}
              width={200}
              height={180}
              className="h-[180px] w-full sm:h-full object-cover transition-transform duration-200 group-hover:scale-105"
            />

            {onClick && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 pointer-events-none"></div>
            )}
          </div>
        )}
      </div>

      <div className="py-2">
        <small className="m-0 text-gray-500">{data.name}</small>
        <p className="m-0 font-medium">{data.p}</p>
      </div>
    </div>
  );
}
