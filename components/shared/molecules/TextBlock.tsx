export interface ITextBlockProps {
  h1?: string;
  h3?: string;
  p: string;
}

export default function TextBlock({ data }: { data: ITextBlockProps }) {
  const HeadingTag = data.h1 ? "h1" : "h3";

  return (
    <div className="">
      <HeadingTag className={data.h1 ? "text-start" : "text-center"}>
        {data.h1 || data.h3}
      </HeadingTag>
      <p className="whitespace-pre-line">{data.p}</p>
    </div>
  );
}
