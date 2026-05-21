import FacilitiesCard from "@/components/card/FacilitiesCard";
import { getfacilitiesdData } from "@/helper/fetchData";
import { auth } from "@/lib/auth";
import { TFacility } from "@/types/facilityType";
import { headers } from "next/headers";

const AllFacility = async () => {
  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const fetchAllFacilities = await getfacilitiesdData(token);

  if (!fetchAllFacilities.data) return <p>No data found</p>;

const allFacilities: TFacility[]= fetchAllFacilities.data

  return (
    <div className="mt-5 md:mt-25 max-w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {allFacilities.map((facilities, i)=><FacilitiesCard key={i} facilities={facilities} />)}
      </div>
    </div>
  );
};

export default AllFacility;
