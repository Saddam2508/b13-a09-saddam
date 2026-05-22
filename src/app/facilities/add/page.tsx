import AddFacility from "@/components/facilities/AddFacility";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add and update Facility | SportNest",
};

const AddFacilityPage = async () => {
  return (
    <div>
      <AddFacility />
    </div>
  );
};

export default AddFacilityPage;
