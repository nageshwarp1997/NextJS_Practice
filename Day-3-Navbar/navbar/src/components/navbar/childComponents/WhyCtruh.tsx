import React from "react";
import { socialCommunity, whyCtruhData } from "../data";
import Link from "next/link";
import { ThickChevronDownIcon } from "../icons";
import Image from "next/image";
import { Button } from "../../common/Button";

const WhyCtruh = () => {
  return (
    <div className="lg:p-px lg:bg-gradient-to-b lg:from-[#333333] lg:to-[#0D0D0D] lg:rounded-[20px]">
      <div className="bg-ctruh-dark-primary text-white px-8 pb-10 lg:max-w-[1290px] lg:w-full lg:px-12 lg:py-8 lg:bg-ctruh-dark-secondary lg:rounded-[20px] lg:font-metropolis">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
          {whyCtruhData?.map((item) => (
            <div key={item.id}>
              {/* Mobile view */}
              <div className="lg:hidden">
                <p className="uppercase text-sm font-semibold tracking-[1px] py-7 border-b-davys-gray">
                  {item.heading}
                </p>
                <Link
                  href={"/"}
                  className="flex gap-4 rounded-[140px] cursor-pointer justify-between items-center pt-3"
                >
                  <div className="flex gap-1 flex-col items-start">
                    <span className="text-sm leading-[21px] font-semibold">
                      {item.title}
                    </span>
                    <p className="tet-xs text-ctruh-light-primary pt-1 leading-[18px]">
                      {item.description}
                    </p>
                  </div>
                  <ThickChevronDownIcon className="-rotate-90" />
                </Link>
              </div>

              {/* Desktop view */}
              <div className="hidden lg:flex flex-col gap-6">
                <div className="uppercase text-ctruh-light-secondary text-sm font-semibold tracking-[1px] leading-5">
                  {item.heading}
                </div>
                <Link
                  href={"/"}
                  className="flex flex-col gap-1 p-4 hover:bg-ctruh-dark-primary rounded-2xl cursor-pointer group relative"
                >
                  <p className="text-ctruh-light-primary text-sm font-semibold leading-5 group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="group-hover:text-ctruh-light-primary text-ctruh-light-secondary text-xs font-normal leading-5">
                    {item.description}.
                  </p>
                  <div className="relative max-w-[250px] h-[150px] lg:mt-1 overflow-hidden rounded-xl group-hover:why-ctruh-gradient-hover">
                    <Image
                      src="/icons/navbar/Dots.svg"
                      alt="alt"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover absolute top-10 left-10 rounded-lg  transform group-hover:translate-x-[-20px] group-hover:translate-y-[-20px] transition-transform duration-[0.65s]"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Only show the section below on desktop */}
        <div className="hidden lg:block">
          <hr className="border border-[#333333] rounded-[20px] my-4" />
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex gap-6 items-center text-ctruh-light-primary font-normal text-sm">
              {socialCommunity.map((data) => {
                const Icon = data.icon;
                return (
                  <div
                    key={data.id}
                    className="flex gap-2 items-center group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 group-hover:fill-white" />
                    <span className="text-sm font-normal leading-[21px] group-hover:text-white">
                      {data.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-white text-sm font-normal">
                Ready to get started?
              </span>
              <Link href={"/"}>
                <Button
                  content="Sign Up"
                  type="outline"
                  className="py-2 px-[18px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCtruh;
