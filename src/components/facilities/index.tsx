import FacilitiesCard from "@/components/card/FacilitiesCard";
import { getfacilitiesdData } from "@/helper/fetchData";
import { TFacility } from "@/types/facilityType";

const AllFacility = async () => {
  const fetchAllFacilities = await getfacilitiesdData();

  if (!fetchAllFacilities.data) return <p>No data found</p>;

const allFacilities: TFacility[]= fetchAllFacilities.data

  return (
    <div className="mt-25 max-w-11/12 mx-auto">
      <h2>All Facilities</h2>
      <div className="grid grid-cols-6 gap-6">
        {allFacilities.map((facilities, i)=><FacilitiesCard key={i} facilities={facilities} />)}
      </div>
    </div>
  );
};

export default AllFacility;
