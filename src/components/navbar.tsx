"use client";
import Link from "next/link";
import { useState } from "react";
// import { navbarLinks } from "../../../data/constants";
import { usePathname } from "next/navigation";
import { Squeeze as Hamburger, Cross } from "hamburger-react";
import { navbarLinks } from "@/data/constants";
import Button from "./Button/button";
import { ChevronDown, SearchIcon } from "lucide-react";
import Search from "./search";
import DropDown from "./dropdown";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const path = usePathname();

  if (path.includes("studio")) return null;

  const handleShowSearch = () => setShowSearch(!showSearch);
  const handleDropdown = (title: string) => {
    setShowDropdown(!showDropdown);
    setTitle(title);
  };
  return (
    <>
      <nav className="bg-white border-gradient-b p-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="flex font-poppins text-black text-xl">
              Hitrotech
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-auto md:ml-0 items-center justify-end">
            <Button text={"Get Started"} />

            <div className="flex justify-end md:hidden text-black">
              <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
            </div>
          </div>
          {/* 
// -------------------
// Mobile NavList
// -------------------
*/}
          {isOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-80 z-50 md:hidden">
              <div className="flex items-center justify-center h-full">
                <div
                  className="items-center justify-between flex w-full h-full md:hidden"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 font-medium rounded-lg bg-white w-full max-w-sm mx-auto">
                    <Cross
                      toggle={setOpen}
                      color="black"
                      toggled={isOpen}
                      size={22}
                    />
                    {navbarLinks.map((link, index) => (
                      <li key={index} className="mb-2 last:mb-0">
                        <Link
                          href={link.href}
                          className="block px-3 text-black text-left text-lg "
                          aria-label={link.title}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}

                    <div className="bg-white border shadow-sm rounded-full flex gap-2 items-center p-2">
                      <div className="search-icon">
                        <SearchIcon
                          onClick={handleShowSearch}
                          className="flex text-tertiary"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Search Your Result..."
                        className="flex w-full"
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* 
  // -------------------
  // Desktop NavList
  // -------------------
  */}
          <div className="search">
            <Search handleShowSearch={handleShowSearch} />

            {showSearch && (
              <div className="absolute top-28 visible lg:hidden">
                <div className="bg-white border shadow-sm rounded-full flex gap-2 items-center p-2">
                  <div className="search-icon">
                    <SearchIcon
                      onClick={handleShowSearch}
                      className="flex text-tertiary"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Your Result..."
                    className="flex w-full"
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex items-end">
              {navbarLinks.map((link, index) => (
                <li key={index} className="flex items-center lg:mx-1 xl:mx-5">
                  <Link
                    href={link.href}
                    className={`py-2 ${
                      link.title === "Services" || link.title === "Resources"
                        ? "px-0"
                        : "px-3"
                    } text-black hover:underline hover:underline-offset-8 decoration-2 decoration-tertiary`}
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                  {link.title === "Services" && (
                    <ChevronDown
                      onClick={() => handleDropdown(link.title)}
                      className="text-sm w-4 h-4 cursor-pointer mr-2"
                    />
                  )}
                  {link.title === "Resources" && (
                    <ChevronDown
                      onClick={() => handleDropdown(link.title)}
                      className="text-sm w-4 h-4 cursor-pointer"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {showDropdown && <DropDown title={title} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
