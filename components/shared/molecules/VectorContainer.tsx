import Image from "next/image";

interface IVectorItem {
  id: number;
  src: string;
  title: string;
}

export interface IVectorContainerProps {
  h3: string;
  p?: string;
  list: IVectorItem[];
}

export default function VectorContainer({
  data,
}: {
  data: IVectorContainerProps;
}) {
  const { h3, p, list } = data;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className={`text-center ${!p ? "mb-0" : "mb-4"}`}>{h3}</h3>
        <p className="m-0 text-center">{p}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
        {list.map((datum: IVectorItem) => (
          <div key={datum.id} className="flex flex-col items-center gap-4">
            <Image src={datum.src} alt={datum.title} width={80} height={80} />
            <div className="flex flex-col justify-center gap-2">
              <h6 className="m-0 text-center font-semibold">{datum.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
