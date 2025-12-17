"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsSmallScreen } from "utils/misc";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "styles/Carousel.css";

interface ICarousel {
  id: number;
  src: string;
  p?: string;
}

interface ICarouselProps {
  data: ICarousel[];
  delay?: number;
}

export default function Carousel({ data, delay }: ICarouselProps) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={!isSmallScreen ? 3 : 1}
      navigation
      autoplay={{ delay: delay ?? 3000 }}
      loop
      className="w-full"
    >
      {data.map((datum, index) => (
        <SwiperSlide key={datum.id}>
          <div className="relative w-full h-[500px]">
            <Image
              src={datum.src}
              alt={datum.p ?? `carousel-image-${index}`}
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
