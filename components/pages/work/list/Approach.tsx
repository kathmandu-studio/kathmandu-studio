import { ITextBlockProps, TextBlock } from "components/ui/molecules";

interface IApproachProps {
  data: ITextBlockProps;
}

export default function Approach({ data }: IApproachProps) {
  if (!data) return null;

  return <TextBlock data={data} />;
}
