import { TileGrid } from "components/shared/molecules";
import data from "data/home.json";

export default function Solutions() {
  const solutions = data.solutions;

  if (!solutions) return null;

  return <TileGrid data={solutions} />;
}
