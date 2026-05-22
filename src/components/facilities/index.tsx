import FacilitiesCard from "@/components/card/FacilitiesCard";
import { getfacilitiesdData } from "@/helper/fetchData";

import { TFacility } from "@/types/facilityType";
import Search from "../ui/Search";
import Filter from "../ui/Filter";

type Props = {
  sp?: {
    search?: string;
    type?: string;
  };
};

const AllFacility = async ({ sp }: Props) => {
  const fetchAllFacilities = await getfacilitiesdData(sp?.search, sp?.type);

  if (!fetchAllFacilities.data) return <p>No data found</p>;

  const allFacilities: TFacility[] = fetchAllFacilities.data;

  return (
    <div className="mt-20 md:mt-25 max-w-11/12 mx-auto">
      <div className="mt-3 mb-6 sm:flex sm:justify-center sm:items-center sm:gap-5 sm:relative space-y-4 sm:space-y-0">
        <div className="mx-auto">
          {" "}
          <Search />{" "}
        </div>
        <div className="sm:right-0 text-center sm:text-right">
          {" "}
          <Filter />{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 items-stretch">
        {allFacilities.map((facilities, i) => (
          <FacilitiesCard key={i} facilities={facilities} />
        ))}
      </div>
    </div>
  );
};

export default AllFacility;
