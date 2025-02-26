"use client";

import { useState } from "react";

const Button = ({ text, title }: { text: string; title?: string }) => {
  const [selected, setSelected] = useState("MarCom");
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        title === "Services"
          ? "bg-transparent border border-primary text-primary hover:bg-gradient-to-r from-primary to-tertiary hover:text-white"
          : text === selected
          ? "button-gradient"
          : "button-gradient"
      } rounded-full px-4 sm:px-6 py-2 flex items-center`}
    >
      {text}{" "}
      <span
        style={{ fontSize: "2rem" }}
        className={`-mt-3 ${title === "Services" ? "hidden" : "flex"}`}
      >
        &rarr;
      </span>
    </button>
  );
};

export default Button;
