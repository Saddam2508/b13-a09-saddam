import FacilitiesDetails from "@/components/facilities/FacilitiesDetails";
import { getfacilitiesdData } from "@/helper/fetchData";
import { TFacility } from "@/types/facilityType";

const FacilitiesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  
 const fetchAllFacilities = await getfacilitiesdData();

  if (!fetchAllFacilities.data) return <p>No data found</p>;

const allFacilities: TFacility[]= fetchAllFacilities.data

const selectedFacility = allFacilities.find((facility)=>facility._id === id)
console.log(selectedFacility)
  return (
    <div>
      <FacilitiesDetails />
    </div>
  );
};

export default FacilitiesDetailsPage;
