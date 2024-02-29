"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navData } from "../../app/data/navData.js";

const Navbar = () => {
  const router = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === router && `text-accent`
              } relative flex items-center group hover:text-accent transition duration-300`}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex transition duration-300">
                <div className="bg-white text-primary flex relative items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] capitalize leading-none font-semibold"> {link.name} </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-r-0 absolute -right-2 border-y-[6px]"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
