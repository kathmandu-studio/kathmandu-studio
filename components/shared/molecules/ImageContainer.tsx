import Image from "next/image";

export interface IImageContainerProps {
  id: number;
  src: string;
  p: string;
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
      className={`flex flex-col ${onClick ? "cursor-pointer" : ""}`}
      style={{
        width: isFullWidth ? "100%" : "calc(50% - 8px)",
      }}
    >
      <div className="relative w-full aspect-[2/1]">
        <Image
          src={data.src}
          alt={data.p}
          fill
          style={{ objectFit: "cover", maxHeight: "600px" }}
        />
      </div>
      <p className="mt-2">{data.p}</p>
    </div>
  );
}
