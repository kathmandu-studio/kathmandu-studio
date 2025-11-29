import Image from "next/image";

export interface IImageContainerProps {
  id: number;
  src: string;
  p: string;
}

interface IIndexes {
  current: number;
  fullWidth: number[];
}

export default function ImageContainer({
  data,
  indexes,
}: {
  data: IImageContainerProps;
  indexes: IIndexes;
}) {
  const isFullWidth = indexes.fullWidth.includes(indexes.current);

  return (
    <div
      className=" flex flex-col"
      style={{
        width: isFullWidth ? "100%" : "calc(50% - 8px)",
      }}
    >
      <div className="relative w-full aspect-[2/1]">
        <Image
          src={data.src}
          alt={data.p}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="mt-2">{data.p}</p>
    </div>
  );
}
