import { serviceButtons, serviceCards } from "@/data/constants";
import Heading from "../heading";
import Button from "../Button/button";
import Cards from "../cards";

export default function Services() {
  return (
    <>
      <section className="mt-10">
        <Heading
          text={"Our Services"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat laboriosam quaerat mollitia dolor? Eos assumenda esse error eveniet sunt ratione ipsam."
          }
          title={""}
        />
        {/* Service Buttons */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex justify-center min-w-max gap-4 px-4">
            {serviceButtons.map((service, index) => (
              <Button key={index} text={service.title} title={"Services"} />
            ))}
          </div>
        </div>
        {/* Service Cards */}
        <div className="cards my-10">
          <Cards data={serviceCards} />
        </div>
      </section>
    </>
  );
}
