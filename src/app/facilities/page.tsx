import AllFacility from "@/components/facilities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Facility | SportNest",
};

const AllFacilityPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const sp = await searchParams;

  return (
    <div>
      <AllFacility sp={sp} />
    </div>
  );
};

export default AllFacilityPage;
