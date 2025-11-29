import { TileGrid } from "components/shared/molecules";
import { ITileGridProps } from "components/shared/molecules/TileGrid";

interface IInsightProps {
  data: ITileGridProps;
}

export default function Insights({ data }: IInsightProps) {
  if (!data) return null;

  return <TileGrid data={data} />;
}
