import { TileGrid } from "components/ui/molecules";
import data from "data/home.json";

export default function Insights() {
  const insights = data.insights;

  if (!insights) return null;

  return <TileGrid data={insights} />;
}
