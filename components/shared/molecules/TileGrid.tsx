import { Tile } from "components/shared/atoms";

interface ITileItem {
  id: number;
  src: string;
  title: string;
  description: string;
}

export interface ITileGridProps {
  h3: string;
  p: string;
  list: ITileItem[];
}

export default function TileGrid({ data }: { data: ITileGridProps }) {
  const { h3, p, list } = data;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className={`text-center ${!p ? "mb-0" : "mb-4"}`}>{h3}</h3>
        <p className="m-0 text-center">{p}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {list.map((datum: ITileItem) => (
          <Tile key={datum.id} data={datum} />
        ))}
      </div>
    </div>
  );
}
