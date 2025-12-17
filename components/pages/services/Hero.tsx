import { ITextBlockProps, TextBlock } from "components/ui/molecules";

interface IHeroProps {
  data: ITextBlockProps;
}

export default function Hero({ data }: IHeroProps) {
  if (!data) return null;

  return <TextBlock data={data} />;
}
