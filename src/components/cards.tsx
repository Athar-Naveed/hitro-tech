import { CardType } from "@/types";
import Heading from "./heading";
import Image from "next/image";
import Button from "./Button/button";

const Cards = ({ data }: { data: Array<CardType> }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((card, index) => (
          <div
            key={index}
            className="card grid border border-tertiary rounded-lg m-2 p-6 card-gradient"
          >
            <div className="heading">
              <Heading
                text={card.title}
                desc={card.description}
                title={"Services"}
              />
            </div>
            <div className="img">
              <Image
                className="grid items-center justify-center mx-auto"
                src={card.image}
                width={120}
                height={120}
                alt={card.title}
                priority={false}
              />
            </div>
            <div className="button grid justify-center items-end mt-4">
              <Button text={"Read More"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
