interface IWhatWeDidProps {
  data: string[];
}

export default function WhatWeDid({ data }: IWhatWeDidProps) {
  if (!data) return null;

  return (
    <div className="text-center sm:px-4">
      <h3 className="whitespace-nowrap">WHAT WE DID</h3>
      <div>
        {data.map((datum, index) => (
          <p key={index} className="whitespace-nowrap font-medium">
            {datum}
          </p>
        ))}
      </div>
    </div>
  );
}
