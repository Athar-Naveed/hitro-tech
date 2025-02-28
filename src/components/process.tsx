import Image from "next/image";
import Heading from "./heading";
import Button from "./Button/button";

const Process = () => {
  return (
    <>
      <section className="mt-20 md:mt-40 mb-5">
        <div className="heading absolute left-auto w-full pt-2">
          <Heading text={"Professional Work Process"} title={"Process"} />
        </div>
        <div className="image">
          <Image
            src={"/assets/images/process/process.svg"}
            width={1500}
            height={1000}
            className="w-full h-full mx-auto"
            alt={"Professional Work Process"}
          />
        </div>
        <div className="btn flex justify-center mt-0 sm:-mt-10 md:-mt-20 lg:-mt-32">
          <Button text={"Transform Your Business"} title={"Process"} />
        </div>
      </section>
    </>
  );
};

export default Process;
