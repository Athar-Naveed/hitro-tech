"use client";
import Link from "next/link";
import { useState } from "react";
// import { navbarLinks } from "../../../data/constants";
import { usePathname } from "next/navigation";
import { Squeeze as Hamburger, Cross } from "hamburger-react";
import { navbarLinks } from "@/data/constants";
import Button from "./Button/button";
import { SearchIcon } from "lucide-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const path = usePathname();

  if (path.includes("studio")) return null;
  const handleShowSearch = () => setShowSearch(!showSearch);
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
                <li key={index}>
                  <Link
                    href={link.href}
                    className="py-2 px-3 text-black hover:text-slate-700"
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
