import { getfacilitiesdData } from "@/helper/fetchData";
import { TFacility } from "@/types/facilityType";
import FacilitiesCard from "../card/FacilitiesCard";
import Link from "next/link";

const FacilityHomePage = async () => {
  const fetchAllFacilities = await getfacilitiesdData();

  if (!fetchAllFacilities.data) return <p>No data found</p>;

  const allFacilities: TFacility[] = fetchAllFacilities.data;
  return (
    <div className="mt-20 md:mt-25 max-w-11/12 mx-auto relative">
      <h2 className="text-[1.3rem] md:text-6xl font-bold mb-6 flex justify-center">
        All Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 items-stretch">
        {allFacilities.slice(0, 6).map((facilities, i) => (
          <FacilitiesCard key={i} facilities={facilities} />
        ))}
      </div>
      <Link
        href={"/facilities"}
        className="btn mt-3 absolute -bottom-13 right-0"
      >
        View all
      </Link>
    </div>
  );
};

export default FacilityHomePage;
