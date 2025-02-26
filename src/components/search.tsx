import { SearchIcon } from "lucide-react";

const Search = ({ handleShowSearch }: any) => {
  return (
    <>
      <div className="bg-white lg:border shadow-sm rounded-full hidden md:flex gap-2 items-center p-2">
        <div className="search-icon">
          <SearchIcon
            onClick={handleShowSearch}
            className="flex text-tertiary"
          />
        </div>
        <input
          type="text"
          placeholder="Search Your Result..."
          className="hidden lg:flex w-full"
        />
      </div>
    </>
  );
};

export default Search;
