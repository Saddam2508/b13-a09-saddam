import { TFacility } from "@/types/facilityType";
import Image from "next/image";
import BookingCard from "../card/BookingCard";
import { FaRegCalendar } from "react-icons/fa";

const FacilitiesDetails = ({ facility }: { facility: TFacility }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center gap-3 justify-end mt-5 mb-3"></div>
        <Image
          className="w-full h-100 object-cover"
          alt={facility.facilityName}
          src={facility.image}
          height={500}
          width={800}
        />

        <div className="flex justify-between gap-10">
          <div className="p-2">
            <div className="flex items-center gap-1">
              {/* <LuMapPin /> <span>{country}</span> */}
            </div>
            <div className="flex justify-between ">
              <div>
                <div>
                  <h2 className="text-xl font-bold">{facility.facilityName}</h2>
                </div>
                <div className="flex gap-1 items-center">
                  <FaRegCalendar /> {facility.availableTimeSlots}
                </div>
              </div>
            </div>

            <h1 className="mt-10 text-2xl font-bold">Overview</h1>

            <p className="max-w-6xl">{facility.description}</p>
          </div>

          <BookingCard facility={facility} />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
