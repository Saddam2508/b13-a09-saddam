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
    url: "https://i.ibb.co.com/Ndx92Zn8/01.png",
  },
  {
    name: "banner2",
    url: "https://i.ibb.co.com/4RD6jQDR/02.png",
  },
  {
    name: "banner3",
    url: "https://i.ibb.co.com/QFdFyV7F/03.png",
  },
  {
    name: "banner4",
    url: "https://i.ibb.co.com/My2thyp9/04.png",
  },
  {
    name: "banner5",
    url: "https://i.ibb.co.com/PGrrNbFg/05.png",
  },
  {
    name: "banner6",
    url: "https://i.ibb.co.com/zVWCN3RH/06.png",
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
      className="mt-15"
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
             {/* <h2 className=" text-sm sm:text-6xl font-bold text-white w-full">
              Book Your Perfect Sports Arena Anytime, Anywhere
            </h2>

            <p className="text-2xl">
              Discover top-rated football turfs, badminton courts, tennis
              arenas, and swimming facilities near you. Reserve your preferred
              slot in seconds with SportNest.
            </p> */}
            <Link
              href={"/facilities"}
              className=" px-2 py-2 md:px-7 md:py-6 bg-amber-500 rounded-2xl text-white font-bold md:text-2xl"
            >
              Explore
            </Link>
           </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
