import { fetchLeisureData } from "@/helper/fetchData";
import { TLeisure } from "@/types/leisureType";
import LeisureCard from "../card/LeisureCard";



const LeisureActivities = async () => {
  const fetchAllLeisure = await fetchLeisureData();

  if (!fetchAllLeisure) return <p>No data found</p>;

  const allLeisure: TLeisure[] = fetchAllLeisure;
  return (
    <div className="mt-25 max-w-11/12 mx-auto overflow-hidden">
      <div className=" flex flex-col items-center justify-center gap-5 my-5 text-center">
        {" "}
        <p className=" text-[1rem] md:text-2xl text-gray-400">What can you do at the Leisure Template?</p>
        <h2 className="text-[1.3rem] md:text-6xl font-bold">LEISURE CLUB ACTIVITIES</h2>
     <hr className="w-25 h-1 bg-amber-600 border-0 rounded" />
      </div>
    
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {allLeisure.map((leisure)=><LeisureCard key={leisure.id} leisure= {leisure} />)}
      </div>
    </div>
  );
};

export default LeisureActivities;
