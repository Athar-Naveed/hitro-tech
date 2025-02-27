const Heading = ({
  text,
  desc,
  title,
}: {
  text: string;
  title: string;
  desc?: string;
}) => {
  return (
    <>
      <div className="grid">
        <div className={`heading `}>
          <h1
            className={`${title === "Services" ? "text-xl" : "text-6xl"}
            font-bold text-center text-primary
            `}
          >
            {text}
          </h1>
        </div>
        <div className="data-desc">{desc}</div>
      </div>
    </>
  );
};

export default Heading;
