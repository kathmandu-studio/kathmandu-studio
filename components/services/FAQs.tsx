import { Panel } from "components/shared/molecules";
import { IPanelProps } from "components/shared/molecules/Panel";

interface IFAQsProps {
  data: IPanelProps;
}

export default function FAQs({ data }: IFAQsProps) {
  if (!data) return null;

  return <Panel data={data} />;
}
