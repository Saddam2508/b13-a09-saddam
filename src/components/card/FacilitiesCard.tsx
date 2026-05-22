"use client";

import { TFacility } from "@/types/facilityType";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const FacilitiesCard = ({ facilities }: { facilities: TFacility }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <Link href={`/facilities/${facilities._id}`}>
        <Card className=" gap-2 group h-full cursor-pointer">
          <div className="relative w-full aspect-square">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="Indie Hackers community"
              className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
              loading="lazy"
              src={facilities.image}
            />
            <Chip className="absolute top-2 right-2 text-gray-400">
              {" "}
              {facilities.facilityType}{" "}
            </Chip>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
              <Chip className="flex items-center gap-2 text-white bg-black/70 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2">
                <FaHeart className="text-red-500" />
                Favorite
              </Chip>
            </div>
            <Button
              onClick={() => redirect(`/facilities/${facilities._id}`)}
              className="hidden sm:flex absolute right-2  bottom-2 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              View Details
            </Button>
          </div>
          <h2> {facilities.facilityName} </h2>
        </Card>
      </Link>
    </motion.div>
  );
};

export default FacilitiesCard;
