import FacilitiesDetails from "@/components/facilities/FacilitiesDetails";
import { getfacilitiesdData } from "@/helper/fetchData";
import { auth } from "@/lib/auth";
import { TFacility } from "@/types/facilityType";
import { headers } from "next/headers";

const FacilitiesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
      headers: await headers()
    })
 const fetchAllFacilities = await getfacilitiesdData(token);

  if (!fetchAllFacilities.data) return <p>No data found</p>;

const allFacilities: TFacility[]= fetchAllFacilities.data

const selectedFacility = allFacilities.find((facility)=>facility._id === id)

if(!selectedFacility) return null

  return (
    <div className="mt-25 max-w-11/12 mx-auto">
      <FacilitiesDetails facility = {selectedFacility}/>
    </div>
  );
};

export default FacilitiesDetailsPage;
