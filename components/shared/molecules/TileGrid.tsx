import { Tile } from "components/shared/atoms";

interface ITileItem {
  id: number;
  title: string;
  description: string;
}

interface ITileGridProps {
  h3: string;
  p: string;
  list: ITileItem[];
}

export default function TileGrid({ data }: { data: ITileGridProps }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-center">{data.h3}</h3>
        <p className="m-0 text-center">{data.p}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {data.list.map((datum: ITileItem) => (
          <Tile
            key={datum.id}
            title={datum.title}
            description={datum.description}
          />
        ))}
      </div>
    </div>
  );
}
