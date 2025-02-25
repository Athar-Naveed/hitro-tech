"use client";
const Button = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => (window.location.href = "#")}
      className="bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full px-4 sm:px-6 py-2 flex items-center text-white"
    >
      {text}{" "}
      <span style={{ fontSize: "2rem" }} className="-mt-3">
        &rarr;
      </span>
    </button>
  );
};

export default Button;
