import { ITileGridProps, TileGrid } from "components/ui/molecules";

interface IInsightProps {
  data: ITileGridProps;
}

export default function Insights({ data }: IInsightProps) {
  if (!data) return null;

  return <TileGrid data={data} />;
}
