export interface ITextBlockProps {
  h1?: string;
  h3?: string;
  p: string;
}

export default function TextBlock({ data }: { data: ITextBlockProps }) {
  const { h1, h3, p } = data;
  const HeadingTag = h1 ? "h1" : "h3";

  return (
    <div className="">
      <HeadingTag className={h1 ? "text-start" : "text-center"}>
        {h1 || h3}
      </HeadingTag>
      <p className="whitespace-pre-line">{p}</p>
    </div>
  );
}
