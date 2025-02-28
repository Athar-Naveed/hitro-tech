import { StatType } from "@/types";

const Stats = ({ stats }: { stats: Array<StatType> }) => {
  return (
    <>
      <div className="w-full my-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-gradient text-primary font-bold text-2xl p-8 text-center border-b sm:border-b-0 relative after:absolute after:right-0 after:top-1/4 after:h-1/2 sm:after:border-r after:border-tertiary last:border-b-0 last:after:border-r-0"
            >
              <h1 className="text-2xl">{stat.number}</h1>
              <h2 className="font-bold">{stat.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Stats;
