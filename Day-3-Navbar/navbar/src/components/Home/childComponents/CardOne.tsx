import Image from "next/image";
import React from "react";
import { SearchLineIcon } from "../icons";
import { cardOneData } from "../data";

const CardOne = () => {
  return (
    <div className="content flex items-center justify-start flex-col md:w-full px-5 lg:px-0 md:pb-10 bg-background-color rounded-[30px] max-w-[1080px]">
      <div className="w-full relative">
        <div className="hidden md:block absolute inset-0 bg-[#07F] blur-[62px] h-20" />
        <div className="p-[0.5px] rounded-[30px] overflow-hidden relative before:absolute before:content-[''] before:bg-home-card-one-btn before:h-[350%] before:w-[350%] before:-top-[125%] before:-left-[125%] before:animate-border-spin w-full min-h-[650px] md:min-h-[450px]">
          <div className="absolute top-[0.5px] left-[0.5px] w-[calc(100%-1px)] h-[calc(100% - 1px)] flex justify-center items-center gap-2.5">
            <div className="text-white font-metropolis text-base font-semibold w-full h-full">
              <div className="w-full relative">
                <div className="p-px w-full h-auto md:h-[450px] rounded-[30px] bg-gradient-to-b from-davys-gray to-[#0D0D0D] md:bg-none">
                  <div className="flex w-full h-full overflow-hidden rounded-[30px] sticky z-20 shadow-catalogue-card">
                    <div className="w-full h-full relative flex flex-col">
                      <Image
                        src="/images/home/hero.webp"
                        alt="Platform Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="hidden md:block md:absolute md:right-0 md:top-0 md:bottom-0 h-full object-cover w-full md:w-2/3"
                      />
                      <div className="absolute inset-0 w-full h-full z-10 bg-catalogue-card-mobile-gradient md:bg-catalogue-card-gradient" />
                      <div className="w-full md:w-3/4 p-7 md:py-[50px] md:px-16 z-10 md:absolute flex flex-col gap-6 md:gap-0 justify-between h-full">
                        <div className="flex flex-col gap-6 items-start">
                          <div className="rounded-full">
                            <div className="bg-ctruh-stroke-card p-[0.5px] rounded-full overflow-hidden relative before:absolute before:content-[''] before:bg-home-card-one-btn before:h-[350%] before:w-[350%] before:-top-[125%] before:-left-[125%] before:animate-border-spin w-[93px] h-[42px]">
                              <div className="absolute top-[0.5px] left-[0.5px] w-[calc(100%-1px)] h-[calc(100%-1px)] px-6 py-5 flex justify-center items-center gap-2.5 rounded-full card-one-data-bg cursor-pointer z-10">
                                <div className="text-white font-metropolis text-base not-italic font-semibold leading-normal">
                                  NEW
                                </div>
                              </div>
                            </div>
                          </div>
                          <Image
                            src="/icons/home/Logo-Platform.svg"
                            alt="alt"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[160px] h-auto"
                          />
                          <div className="flex flex-col">
                            <p className="text-3xl md:text-[32px] font-semibold text-white flex md:block flex-col font-degular">
                              <span className="w-full">India's First</span>{" "}
                              <span className="bg-ctruh-gradient-accent bg-clip-text text-transparent">
                                Community-Driven
                              </span>{" "}
                              <span>3D Platform</span>
                            </p>
                            <p className="text-[--silver] text-base md:text-lg font-metropolis font-normal leading-6">
                              Sign Up. Upload. Monetize.
                            </p>
                          </div>
                        </div>
                        <div className="lg:h-16 flex items-center gap-3 justify-between font-metropolis border-[6px] border-white border-opacity-[0.02] rounded-2xl relative overflow-hidden backdrop-blur-md">
                          <input
                            type="text"
                            className="bg-white bg-opacity-5 text-xs md:text-base font-normal w-full h-full outline-none py-2.5 px-4 md:px-6  placeholder-[#999999]"
                            placeholder="Search among the finest 3D artwork on the web"
                          />
                          <SearchLineIcon className="w-5 h-5 absolute pointer-events-none right-4" />
                        </div>
                      </div>
                      <Image
                        src="/images/home/Platform.webp"
                        alt="Platform Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="md:hidden object-cover w-full h-2/3 -translate-x-0 scale-150"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-5 md:mt-12 max-w-[1080px]">
        {cardOneData.map((item) => (
          <div
            className="p-px min-h-full bg-gradient-to-b from-davys-gray to-[#0D0D0D] rounded-[24px] font-degular"
            key={item.title}
          >
            <div className="h-full shadow-stats-card-glow card-one-data-bg  flex flex-row 738px:flex-col lg:flex-row gap-6 rounded-[24px] max-h-[350px] p-6">
              <Image
                src={item.icon}
                alt="alt"
                width={0}
                height={0}
                sizes="100vw"
                className="w-12 h-12 object-cover self-center"
              />
              <div className="flex flex-col justify-around gap-2">
                <h5 className="font-degular font-medium text-lg leading-[22px]">
                  {item.title}
                </h5>
                <p className="text-xs leading-[18px] font-metropolis font-normal text-silver">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOne;
