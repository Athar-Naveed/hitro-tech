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
            className={`${
              title === "Services"
                ? "text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary"
                : "gradient-heading"
            }`}
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
