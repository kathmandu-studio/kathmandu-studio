import Image from "next/image";

interface ITileProps {
  src: string;
  title: string;
  description: string;
}

export default function Tile({ data }: { data: ITileProps }) {
  const { src, title, description } = data;

  return (
    <div className="border-2 flex flex-col p-4 min-h-[150px] sm:min-h-[230px] justify-end">
      <div className="flex flex-col items-center gap-4">
        {src && <Image src={src} alt={title} width={100} height={100} />}
        <div className="flex flex-col justify-center gap-2">
          <h6 className="m-0 text-center font-semibold">{title}</h6>
          <p className="m-0 text-center mt-auto">{description}</p>
        </div>
      </div>
    </div>
  );
}
