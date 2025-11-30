import { TextBlock } from "components/shared/molecules";
import { ITextBlockProps } from "components/shared/molecules/TextBlock";

interface IApproachProps {
  data: ITextBlockProps;
}

export default function Approach({ data }: IApproachProps) {
  if (!data) return null;

  return <TextBlock data={data} />;
}
