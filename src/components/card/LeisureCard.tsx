import { TLeisure } from "@/types/leisureType";
import { Card } from "@heroui/react";
import Image from "next/image";


const LeisureCard = ({ leisure }: { leisure: TLeisure }) => {
  return (
    <div>
      <Card className=" w-[320px] shrink-0 p-3 gap-2 group cursor-pointer">
        <div className="relative w-full aspect-square">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="Indie Hackers community"
            className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
            loading="lazy"
            src={leisure.image}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100"></div>
        </div>
      </Card>
    </div>
  );
};

export default LeisureCard;
