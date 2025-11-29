import data from "data/home.json";
import Image from "next/image";

export default function CertifiedPartners() {
  const partners = data.certifiedPartners;

  if (!partners) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 sm:gap-20">
      <h5 className="m-0 sm:w-[100px] text-start">{partners.h5}</h5>
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
        {partners.list.map((partner) => (
          <div key={partner.id}>
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={60}
              style={{ maxHeight: 92, objectFit: "contain" }}
              className="w-[74px] sm:w-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
