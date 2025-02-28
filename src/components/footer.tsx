import Image from "next/image";
import Heading from "./heading";
import Search from "./search";
import { footer2, quickLinks, socials } from "@/data/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="card-gradient">
      <div className="grid md:flex p-4">
        <div className="text text-left p-2">
          <Heading
            text={"Want to Know The Latest News"}
            title={"Subscribe"}
            desc={"Subscribe"}
          />
        </div>
        <div className="input md:ml-auto md:mt-3 lg:w-1/2 xl:w-1/3">
          <Search title={"Quote"} />
        </div>
      </div>
      {/* 
              // -----------------------
              // Company details end
              // -----------------------
              */}
      <div className="main-footer border-t border-secondary">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="company mb-2">
            <div className="logo">
              <Image
                className="lg:w-[300px] lg:h-[300px]"
                src={"/Logo/HitroTECH_LOGO.png"}
                alt={"HitroTech Logo"}
                width={500}
                height={500}
                priority={false}
              />
            </div>

            <div className="slogan flex lg:grid gap-2 lg:gap-0 p-2 text-center lg:text-left -mt-24 lg:ml-6 text-[#F36E21] font-extrabold text-2xl">
              <span>STAY</span>
              <span>ONE</span>
              <span>STEP</span>
              <span>AHEAD</span>
            </div>

            <div className="desc text-[#F36E21] p-2 font-semibold lg:mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
              aut facere sed blanditiis quia sunt magni veniam inventore
              pariatur fuga!
            </div>
            <div className="follow uppercase text-[#F36E21] p-2 font-semibold text-2xl text-center">
              <p>follow us on</p>
            </div>
            <div className="flex justify-center gap-2">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="icon p-2 bg-[#F36E21] rounded-full text-white"
                >
                  <Link href={social.href}>{<social.icon />}</Link>
                </div>
              ))}
            </div>
          </div>
          {/* 
        // -----------------------
        // Company details end
        // -----------------------
        */}
          <div className="links lg:w-[80rem] xl:w-[100rem]">
            <div className="grid sm:grid-cols-3 lg:items-center lg:h-full mt-5 lg:ml-10 xl:mx-40">
              {quickLinks.map((quickLink, index) => (
                <div key={index} className="grid p-2">
                  <h1 className="text-[#F36E21] font-semibold text-2xl">
                    {quickLink.title}
                  </h1>
                  <ul className="">
                    {quickLink.subList.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-[#F36E21]">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2 button-gradient">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {footer2.map((footer, index) => (
            <div
              key={index}
              className="text-white font-semibold p-8 text-sm text-center border-b sm:border-b-0 relative after:absolute after:right-0 after:top-1/4 after:h-1/2 sm:after:border-r after:border-white last:border-b-0 last:after:border-r-0"
            >
              <Link href={footer.href ? footer.href : ""}>
                <h1 className="">{footer.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
