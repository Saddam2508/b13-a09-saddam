import Banner from "@/components/banner";
import FacilityHomePage from "@/components/facilities/FacilityHomePage";
import LeisureActivities from "@/components/leisure";
import Trusted from "@/components/trusted";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page | SportNest",
};
export default function Home() {
  return (
    <div>
      <Banner />
      <FacilityHomePage />
      <LeisureActivities />
      <Trusted />
    </div>
  );
}
