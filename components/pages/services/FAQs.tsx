import { IPanelProps, Panel } from "components/ui/molecules";

interface IFAQsProps {
  data: IPanelProps;
}

export default function FAQs({ data }: IFAQsProps) {
  if (!data) return null;

  return <Panel data={data} />;
}
