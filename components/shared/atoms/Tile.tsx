interface ITileProps {
  title: string;
  description: string;
}

export default function Button({ title, description }: ITileProps) {
  return (
    <div className="border-2 flex flex-col p-4 min-h-[150px] sm:min-h-[230px] justify-end">
      <div className="flex flex-col justify-center gap-2">
        <h6 className="m-0 text-center font-semibold">{title}</h6>
        <p className="m-0 text-center mt-auto">{description}</p>
      </div>
    </div>
  );
}
