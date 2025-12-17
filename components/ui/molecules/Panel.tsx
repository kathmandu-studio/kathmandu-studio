import { Accordion } from "components/ui/atoms";

export interface IAccordionContent {
  title: string;
  content: string;
}

export interface IPanelProps {
  h3: string;
  list: IAccordionContent[];
}

export default function Panel({ data }: { data: IPanelProps }) {
  const { h3, list } = data;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="m-0 text-center">{h3}</h3>
      <Accordion items={list} />
    </div>
  );
}
