import TextBlock, {
  ITextBlockProps,
} from "components/shared/molecules/TextBlock";

interface IOverviewProps {
  data: ITextBlockProps;
}

export default function Overview({ data }: IOverviewProps) {
  if (!data) return null;

  return <TextBlock data={data} className="text-start" />;
}
