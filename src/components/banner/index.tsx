"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const bannersData = [
  {
    name: "banner1",
    url: "https://www.kajariaceramics.com/storage/banner/desktop-banner.webp",
  },
  {
    name: "banner2",
    url: "https://www.kajariaceramics.com/storage/banner/kajaria-living-desktop-2.webp",
  },
  {
    name: "banner3",
    url: "https://www.kajariaceramics.com/storage/banner/kajaria-kitchen-dektop.webp",
  },
  {
    name: "banner4",
    url: "https://www.kajariaceramics.com/storage/banner/kajaria-bathroom-desktop.webp",
  },
  {
    name: "banner5",
    url: "https://www.kajariaceramics.com/storage/banner/kajaria-outdoor-dektop1.webp",
  },
];
const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {bannersData.map((b, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative">
            <Image
              src={b.url}
              alt="image"
              width={1000}
              height={800}
              className="w-full"
            />
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-12">
             <h2 className=" text-sm sm:text-6xl font-bold text-white w-full">
              Book Your Perfect Sports Arena Anytime, Anywhere
            </h2>

            <p className="text-2xl">
              Discover top-rated football turfs, badminton courts, tennis
              arenas, and swimming facilities near you. Reserve your preferred
              slot in seconds with SportNest.
            </p>
            <Link
              href={"/all-tiles"}
              className="px-7 py-6 bg-amber-500 rounded-2xl text-white font-bold text-2xl"
            >
              Explore Facilities
            </Link>
           </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
