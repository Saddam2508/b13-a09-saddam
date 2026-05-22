import AllFacility from "@/components/facilities";

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
