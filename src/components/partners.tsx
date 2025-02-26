import { PartnerType } from "@/types";
import Image from "next/image";

const Partners = ({ data }: { data: Array<PartnerType> }) => {
  return (
    <div className="flex justify-center gap-8 items-center p-6">
      {data.map((partner, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image
            width={1000}
            height={1000}
            src={partner.src}
            alt={partner.title}
            className="w-32 h-32"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
