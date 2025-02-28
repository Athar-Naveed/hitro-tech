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
            className={`gradient-heading ${
              title === "Services" || title === "Bubble2"
                ? "text-xl"
                : title === "Process"
                ? "sm:text-xl lg:text-2xl xl:text-4xl"
                : title === "Subscribe"
                ? "text-xl mx-5"
                : "text-6xl"
            }
            font-bold text-center text-primary
            `}
          >
            {text}
          </h1>
        </div>
        <div
          className={`
          ${
            title === "Subscribe"
              ? "gradient-heading text-4xl font-semibold text-center"
              : "data-desc"
          }
          `}
        >
          {desc}
        </div>
      </div>
    </>
  );
};

export default Heading;
