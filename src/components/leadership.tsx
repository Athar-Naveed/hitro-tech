"use client";
import { TechType } from "@/types";
import Heading from "./heading";
import { useState } from "react";
import Bubble2 from "./bubble2";

const Leadership = ({ tech }: { tech: Array<TechType> }) => {
  const [selected, isSelected] = useState("Real Estate");

  const selectedTech = tech.find((techs) => techs.title === selected);

  // Destructure the properties, with safety check
  const { desc = "", src = "", title = "" } = selectedTech || {};
  return (
    <>
      <div className="lead">
        <div className="heading">
          <Heading
            text={"Industry Leadership"}
            title={"Leader"}
            desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>
        <div className="tech card-gradient grid md:flex md:flex-row-reverse lg:mx-20 xl:mx-52 rounded-2xl p-2 lg:p-8">
          <div className="bubble-2">
            <Bubble2 text={title} desc={desc} img={src} />
          </div>
          <div className="md:w-[100rem] lg:w-[90rem]">
            {tech.map((techs, index) => (
              <div key={index} className="btn">
                <button
                  className={`text-left ${
                    selected === techs.title && "text-tertiary"
                  } hover:text-tertiary`}
                  onClick={() => isSelected(techs.title)}
                >
                  {techs.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
