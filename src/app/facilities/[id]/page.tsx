import FacilitiesDetails from "@/components/facilities/FacilitiesDetails";
import { getfacilitiesdData } from "@/helper/fetchData";
import { TFacility } from "@/types/facilityType";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facility details page | SportNest",
};
const FacilitiesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const fetchAllFacilities = await getfacilitiesdData();

  if (!fetchAllFacilities.data) return <p>No data found</p>;

  const allFacilities: TFacility[] = fetchAllFacilities.data;

  const selectedFacility = allFacilities.find(
    (facility) => facility._id === id,
  );

  if (!selectedFacility) return null;

  return (
    <div className="mt-25 max-w-11/12 mx-auto">
      <FacilitiesDetails facility={selectedFacility} />
    </div>
  );
};

export default FacilitiesDetailsPage;
