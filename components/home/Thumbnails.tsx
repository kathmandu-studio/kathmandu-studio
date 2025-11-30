import { ImageContainer } from "components/shared/molecules";
import data from "data/home.json";

export default function Thumbnails() {
  const thumbnails = data.thumbnails;

  return (
    <div className="flex flex-wrap gap-4">
      {thumbnails.map((thumbnail, index) => (
        <ImageContainer
          key={thumbnail.id}
          data={thumbnail}
          indexes={{ current: index, fullWidth: [0] }}
        />
      ))}
    </div>
  );
}
