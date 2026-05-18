import Banner from "@/components/banner";
import AllFacility from "@/components/facilities";
import LeisureActivities from "@/components/leisure";
import Trusted from "@/components/trusted";

export default function Home() {
  return (
    <div>
      <Banner />
      <AllFacility/>
      <LeisureActivities/>
      <Trusted/>
    </div>
  );
}
