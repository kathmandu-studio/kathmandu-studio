import Image from "next/image";

interface IBannerProps {
  src: string;
  alt?: string;
}

export default function Banner({ src, alt = "Banner" }: IBannerProps) {
  return (
    <div className="relative w-full h-[300px] lg:h-[430px]">
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
