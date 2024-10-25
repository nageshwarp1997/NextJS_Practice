import React from "react";
import { ArrowRightIcon } from "../Navbars/icons";

const HomeHero = () => {
  return (
    <div className="pt-24 lg:pt-32 flex flex-col relative">
      <div className="px-5 md:px-0 absolute w-full flex flex-col items-center cursor-pointer">
        <div className="border border-ctruh-dark-primary px-4 py-2 rounded-[40px] lg:px-3 w-fit flex gap-2.5 items-center mx-auto mb-6 lg:mb-2 home-hero-capsule hover:home-hero-capsule-hover cursor-pointer z-[1]">
          <span className="py-1 px-1.5 text-[10px] rounded-[10px]">NEW</span>
          <div className="">
            <div className="">
              <p className="">Try</p>
              <p className="">CTRUH Platform</p>
              <p className="">Now</p>
            </div>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
