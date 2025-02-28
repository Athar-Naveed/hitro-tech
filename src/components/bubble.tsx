import Button from "./Button/button";

const Bubble = ({
  title,
  heading,
  desc,
}: {
  title: string;
  heading: string;
  desc: string;
}) => {
  return (
    <>
      <div className="bubble card-gradient grid justify-center mx-auto w-fit p-6 rounded-full my-20">
        <div className="title text-center font-bold text-lg sm:text-2xl xl:text-4xl px-8">
          <h1>{title}</h1>
        </div>
        <div className="heading text-center font-semibold text-sm lg:text-xl xl:text-2xl sm:my-2 text-secondary">
          <h2>{heading}</h2>
        </div>
        <div className="desc text-center lg:w-2/3 lg:mx-auto ">
          <p>{desc}</p>
        </div>
        <div className="btn mx-auto sm:mt-4">
          <Button text={"Transform Your Business"} title={"Bubble"} />
        </div>
      </div>
    </>
  );
};

export default Bubble;
