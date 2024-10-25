import React from "react";
import { ArrowRightIcon } from "../navbar/icons";
import TopTextDisplay from "./childComponents/TopTextDisplay";
import { CheckIcon } from "./icons";
import { Button } from "../common/Button";
import { homeHeroTopText } from "./data";

const HomeHero = () => {
  return (
    <div className="pt-24 lg:pt-32 flex flex-col relative">
      <div className="px-5 md:px-0 absolute w-full flex flex-col items-center cursor-pointer">
        <div className="border border-ctruh-dark-primary px-4 py-2 rounded-[40px] lg:px-3 w-fit flex gap-2.5 items-center mx-auto mb-6 lg:mb-2 home-hero-capsule hover:home-hero-capsule-hover cursor-pointer z-[1]">
          <span className="py-1 px-[6px] text-[10px] rounded-[10px] bg-[linear-gradient(90deg,_#259CF8_0%,_#2553F8_100%),_linear-gradient(114deg,_#00E5D1_6.19%,_#25ADF9_37.23%,_#07F_94.85%)] shadow-[0px_0px_16px_0px_rgba(37,_166,_249,_0.48)]">
            NEW
          </span>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <p className="font-metropolis text-sm font-normal leading-[21px]">
                Try
              </p>
              <p className="font-metropolis text-sm font-semibold leading-[21px]">
                CTRUH Platform
              </p>
              <p className="font-metropolis text-sm font-normal leading-[21px]">
                Now
              </p>
            </div>
            <ArrowRightIcon />
          </div>
        </div>
        <TopTextDisplay
          content={homeHeroTopText}
          className="!p-0 !h-fit lg:!text-5xl"
        />
        <p className="text-[#B3B3B3] font-metropolis text-base lg:text-lg font-normal leading-[27px] text-center mt-4 lg:mt-2">
          Transforming Human Interactions through Extended Reality (XR)
        </p>
        <div className="mt-4 mb-6 w-fit mx-auto flex gap-5 flex-wrap justify-center lg:justify-normal">
          {["No Code", "All in Browser", "Design in Minutes"].map((text) => (
            <span
              key={text}
              className="border border-[rgba(255,_255,_255,_0.06)] bg-[linear-gradient(0deg,_rgba(255,_255,_255,_0.01)_0%,_rgba(255,_255,_255,_0.01)_100%),_rgba(8,_8,_8,_0.80)] rounded-[40px] py-[6px] px-4 flex gap-2 items-center font-metropolis text-sm font-light leading-[21px]"
            >
              <CheckIcon />
              {text}
            </span>
          ))}
        </div>
        <Button
          type={"primary"}
          content={"Get Started"}
          rightIcon={<ArrowRightIcon className="w-6 h-6" />}
          className="mx-auto rounded-2xl !px-6 !py-4 normal-case gap-2.5"
        />
      </div>
      <video
        loop
        autoPlay
        playsInline
        muted
        poster=""
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
        preload="auto"
        className="mx-auto mt-[75%] md:mt-0 animate-[xFromRight_750ms_ease-in-out] md:h-[50rem] lg:h-auto w-full h-full object-cover"
        src="https://ctruhcdn.azureedge.net/public/landing-video.mp4"
      />
    </div>
  );
};

export default HomeHero;
