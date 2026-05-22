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
    <div className="mt-5 md:mt-25 max-w-11/12 mx-auto">
      <div className="mt-3 mb-6 flex justify-center items-center gap-5 relative">
        <div className="mx-auto">
          {" "}
          <Search />{" "}
        </div>
        <div className="right-0">
          {" "}
          <Filter />{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {allFacilities.map((facilities, i) => (
          <FacilitiesCard key={i} facilities={facilities} />
        ))}
      </div>
    </div>
  );
};

export default AllFacility;
