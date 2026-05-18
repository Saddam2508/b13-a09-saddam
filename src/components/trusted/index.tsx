import { fetchTrustedData } from "@/helper/fetchData";
import { TGalleryImage } from "@/types/trustedType";
import TrustedCard from "../card/TrustedCard";


const Trusted = async() => {
    const fetchAllTrustedImage = await fetchTrustedData();
    
      if (!fetchAllTrustedImage) return <p>No data found</p>;
    
    const allTrustedImage: TGalleryImage[]= fetchAllTrustedImage
    return (
        <div>
            <h2>Trusted by organisations across the world</h2>
            <div>
                {allTrustedImage.map((trustedImg)=> <TrustedCard key={trustedImg.id} trustedImage={trustedImg}/>)}
            </div>
        </div>
    );
};

export default Trusted;