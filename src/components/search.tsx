import { SearchIcon, Send } from "lucide-react";

const Search = ({
  handleShowSearch,
  title,
}: {
  handleShowSearch?: any;
  title?: string;
}) => {
  return (
    <>
      <div
        className={`bg-white lg:border shadow-sm rounded-full ${
          title === "Quote" ? "flex" : "hidden md:flex"
        } gap-2 items-center p-2`}
      >
        <div className={`search-icon ${title === "Quote" ? "hidden" : "flex"}`}>
          <SearchIcon
            onClick={handleShowSearch}
            className="flex text-tertiary"
          />
        </div>
        <input
          type="text"
          placeholder={
            title === "Quote" ? "Enter Your Email..." : "Search Your Result..."
          }
          className={`outline-none text-primary p-2 placeholder:text-primary ${
            title === "Quote" ? "visible" : "hidden md:flex"
          } w-full`}
        />
        <div className={`search-icon ${title === "Quote" ? "flex" : "hidden"}`}>
          <Send
            onClick={handleShowSearch}
            className="flex text-[#F36E21] mr-2 size-5"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
