"use client";

import React, { useState } from "react";
import { CtruhHorizontalLogo } from "./images";
import { navLinks } from "./navlinksData";
import Link from "next/link";
import { ChevronDownIcon } from "./icons";
import { Button } from "./childComponents";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      {/* Desktop Mode */}
      <nav className="w-full px-8 lg:px-16 py-5 hidden lg:flex items-center justify-between bg-ctruh-navbar-dark">
        <Link href="/">
          <CtruhHorizontalLogo className="w-[90px] lg:w-[118px]" />
          <p className="mt-1.5 font-light text-xs max-[1025px]:tracking-[0px] tracking-[2px]">
            Proudly Made in India
          </p>
        </Link>
        <div className="flex gap-3 font-metropolis">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-1 cursor-pointer relative group"
              onMouseEnter={() => {
                setOpenDropDown(true);
                setHoveredIndex(index);
              }}
            >
              <p className="text-ctruh-light-primary group-hover:text-white font-medium text-sm leading-[21px] whitespace-nowrap">{link}</p>
              <ChevronDownIcon
                className={`group-hover:text-white transition duration-300 ease-in-out ${
                  openDropDown && hoveredIndex === index
                    ? "rotate-180"
                    : "rotate-0 text-ctruh-light-primary"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2.5 items-center sticky bottom-0 font-metropolis">
          <div className="px-2 lg:px-5 font-semibold text-sm leading-[21px] whitespace-nowrap">
            Sign Up
          </div>
          <Button content="Book a Demo" type="primary" className="px-[15px] py-[11px] text-sm"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
