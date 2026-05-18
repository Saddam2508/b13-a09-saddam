import { fetchTrustedData } from "@/helper/fetchData";
import { TGalleryImage } from "@/types/trustedType";
import TrustedCard from "../card/TrustedCard";
import Marquee from "react-fast-marquee";


const Trusted = async() => {
    const fetchAllTrustedImage = await fetchTrustedData();
    
      if (!fetchAllTrustedImage) return <p>No data found</p>;
    
    const allTrustedImage: TGalleryImage[]= fetchAllTrustedImage
    return (
        <div className="mt-25 max-w-11/12 mx-auto overflow-hidden bg-gray-50 p-5">
            <h2 className="text-center text-6xl font-bold py-5 mb-10">Trusted by organisations across the world</h2>
         <Marquee speed={90}>
               <div className="flex gap-6">
                {allTrustedImage.map((trustedImg)=> <TrustedCard key={trustedImg.id} trustedImage={trustedImg}/>)}
            </div>
         </Marquee>
        </div>
    );
};

export default Trusted;