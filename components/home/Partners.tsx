import data from "data/home.json";
import Image from "next/image";

export default function Partners() {
  const partners = data.partners;

  if (!partners) return null;

  return (
    <div className="flex flex-col gap-8">
      <h3 className="m-0 text-center">{partners.h3}</h3>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {partners.list.map((partner) => (
          <div
            key={partner.id}
            className="p-4 w-1/4 flex justify-center border-2 flex-[0_0_calc(50%-0.5rem)] sm:flex-[0_0_calc(33.33%-0.7rem)] lg:flex-[0_0_calc(25%-1.5rem)]"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={60}
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
