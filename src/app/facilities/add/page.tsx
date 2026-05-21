import AddFacility from "@/components/facilities/AddFacility";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AddFacilityPage =async () => {
  const {token} = await auth.api.getToken({
      headers: await headers()
    })
  return (
    <div>
      <AddFacility token = {token}/>
    </div>
  );
};

export default AddFacilityPage;
