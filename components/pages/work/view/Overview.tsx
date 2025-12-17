import { ITextBlockProps, TextBlock } from "components/ui/molecules";

interface IOverviewProps {
  data: ITextBlockProps;
}

export default function Overview({ data }: IOverviewProps) {
  if (!data) return null;

  return <TextBlock data={data} className="text-start" />;
}
