import { TGalleryImage } from '@/types/trustedType';
import { Card } from '@heroui/react';
import Image from 'next/image';


const TrustedCard = ({trustedImage}:{trustedImage: TGalleryImage}) => {
    return (
         <Card className=" w-[320px] shrink-0 p-3 gap-2 group cursor-pointer">
                <div className="relative w-full aspect-square">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt="Indie Hackers community"
                    className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                    loading="lazy"
                    src={trustedImage.image}
                  />
                </div>
              </Card>
    );
};

export default TrustedCard;