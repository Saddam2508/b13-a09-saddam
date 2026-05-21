import { TFacility } from "@/types/facilityType";
import Image from "next/image";
import BookingCard from "../card/BookingCard";


const FacilitiesDetails = ({ facility }: { facility: TFacility }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Image
          className="w-full h-100 object-cover"
          alt={facility.facilityName}
          src={facility.image}
          height={500}
          width={800}
        />

        <div className="flex justify-between gap-10">
          <div className="p-2 space-y-6">
            <div className="flex items-center gap-1">
            </div>
            <div className="flex justify-between ">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{facility.facilityName}</h2>
                <h3 className="text-gray-400 font-bold"> Type: {facility.facilityType} </h3>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Overview</h1>
              <p className="max-w-6xl"> <span className="text-gray-400 font-bold text-sm">{facility.description}</span> </p>
            </div>
            <div>
              <p className="text-2xl font-bold"> Available Time: <span className="text-gray-400 font-bold text-sm">{facility.availableTimeSlots}</span> </p>
            </div>
            <div>
              <p className="text-2xl font-bold"> Location: <span className="text-gray-400 text-sm font-bold">{facility.location}</span> </p>
            </div>
            <div>
              <p className="text-2xl font-bold"> Capacity: <span className="text-gray-400 text-sm font-bold">{facility.capacity}</span> </p>
            </div>
            <div>
              <p className="text-2xl font-bold"> Price: $ <span className="text-gray-400 text-md font-bold">{facility.pricePerHour}</span> </p>
            </div>
           
          </div>
          <BookingCard facility={facility} />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
