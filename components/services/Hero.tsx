import { TextBlock } from "components/shared/molecules";
import { ITextBlockProps } from "components/shared/molecules/TextBlock";

interface IHeroProps {
  data: ITextBlockProps;
}

export default function Hero({ data }: IHeroProps) {
  if (!data) return null;

  return <TextBlock data={data} />;
}
