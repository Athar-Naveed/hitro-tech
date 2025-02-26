import { navbarLinks } from "@/data/constants";
import { DropdownType } from "@/types";
import Link from "next/link";

const DropDown = ({ title }: any) => {
  const navbar = navbarLinks.filter((data: any) => data.title == title);
  return (
    <>
      <div className="absolute mx-auto left-0 right-0 top-[85px] z-50 mt-2 w-[700px] lg:w-[900px] xl:w-[1100px] border border-tertiary rounded-b-2xl origin-top-left bg-white">
        <div className="p-6 lg:mx-10 xl:mx-20">
          {navbar.map((column: any, columnIndex: number) => (
            <div
              key={columnIndex}
              className="grid grid-cols-3 gap-x-20 gap-y-3"
            >
              {column.subList.map((category: any) => (
                <div key={category.title}>
                  <h3 className="text-[#FF7F50] font-medium">
                    {category.title}
                  </h3>
                  <ul className="">
                    {category.subList2.map((item: any) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
