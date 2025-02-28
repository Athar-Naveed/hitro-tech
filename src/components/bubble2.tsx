import Image from "next/image";
import Heading from "./heading";
import Button from "./Button/button";

const Bubble2 = ({
  text,
  desc,
  img,
}: {
  text: string;
  desc: string;
  img: string;
}) => {
  return (
    <>
      <div className="my-5">
        <div className="grid md:flex shadow-md p-5 card-gradient rounded-2xl">
          <div className="heading">
            <Heading text={text} title={"Bubble2"} />
          </div>
          <div className="img md:flex md:grow md:justify-end">
            <Image
              src={img}
              width={120}
              height={120}
              alt={text}
              priority={false}
              className="mx-auto md:mx-0 lg:w-2/3"
            />
          </div>
        </div>
        <div className="desc md:my-2">{desc}</div>
        <div className="query md:my-5 md:flex md:justify-end">
          <Button text={"Send Query"} title={"Query"} />
        </div>
      </div>
    </>
  );
};
export default Bubble2;
