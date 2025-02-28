import { PartnerType } from "@/types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = ({ data }: { data: Array<PartnerType> }) => {
  return (
    <div className="flex justify-center gap-8 items-center p-6">
      <Marquee>
        {data.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              width={1500}
              height={1000}
              src={partner.src}
              alt={partner.title}
              className="w-40 h-32 mx-2 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
