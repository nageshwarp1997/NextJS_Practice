import React, { Fragment, useState } from "react";
import { cardTwoData } from "../data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";

const CardTwo = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <>
      <div className="content flex items-center justify-start flex-col md:w-full px-5 md:pb-10 bg-background-color rounded-[30px] max-w-[1080px]">
        <div className="p-[0.5px] md:w-full xl:w-[1080px] md:h-[450px] rounded-[30px] overflow-hidden relative before:absolute before:content-[''] before:bg-home-card-one-btn before:h-[350%] before:w-[350%] before:-top-[125%] before:-left-[125%] before:animate-border-spin">
          <div className="flex w-full h-full md:overflow-hidden rounded-[30px] sticky z-20 shadow-catalogue-card overflow-hidden">
            <div className="w-full h-full relative flex flex-col md:flex-row">
              <video
                loop
                autoPlay
                playsInline
                muted
                preload="none"
                className="md:absolute md:right-0 md:top-0 md:bottom-0 w-full sm:w-[385px] h-80 md:h-full object-cover z-10 mix-blend-lighten md:mr-10 order-1 self-center"
                src="/video/home/application.mp4"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-catalogue-card-mobile-gradient  md:catalogue-card-gradient-two  z-2  " />
              <div className="p-6 md:py-[50px] md:px-16 z-10 md:absolute flex flex-col gap-6 md:gap-0 justify-between h-full">
                <div className="flex flex-col gap-6 items-start">
                  <Image
                    src="/icons/home/Logo-Application.svg"
                    alt="alt"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[160px] h-auto"
                  />
                  <div className="flex flex-col">
                    <p className="text-3xl md:text-[32px] font-semibold text-white font-degular">
                      <span>
                        Create <br className="sm:hidden" /> Virtual Storefront{" "}
                        <br className="hidden sm:block" /> in{" "}
                        <br className="sm:hidden" />
                      </span>{" "}
                      <span className="bg-ctruh-gradient-accent bg-clip-text text-transparent">
                        6 Steps, 30 minutes
                      </span>
                    </p>
                    <p className="text-silver text-base md:text-lg font-metropolis font-normal">
                      Shaping the future of retail & e-commerce
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-auto">
                    <Link href="/">
                      <Button content="Open Application" className="w-full" />
                    </Link>
                  </div>
                  <div className="w-full md:w-auto">
                    <Link href="/">
                      <Button
                        content="Learn More"
                        type="outline"
                        className="w-full"
                        wrapperClassName="bg-opacity-20"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap gap-y-6 lg:gap-0 flex-row mt-12 mx-auto items-start justify-center max-w-[860px] w-full">
          {cardTwoData.map((data, index) => (
            <Fragment key={index}>
              <div
                className="flex flex-col gap-4 items-center group cursor-pointer"
                onMouseEnter={() => setHoveredIcon(data.hoverIcon)}
                onMouseLeave={() => setHoveredIcon("")}
              >
                <Image
                  src={hoveredIcon === data.hoverIcon ? hoveredIcon : data.icon}
                  alt={data.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[60px] w-[60px] object-contain"
                  loading="lazy"
                />
                <p
                  className={`text-base font-metropolis font-normal leading-6 ${
                    data.default ? "text-transparent" : "text-[var(--silver)]"
                  } bg-clip-text group-hover:text-transparent bg-ctruh-gradient-accent transition-all duration-150 whitespace-nowrap`}
                >
                  {data.title}
                </p>
              </div>
              {index !== cardTwoData.length - 1 && (
                <div className="h-[60px] min-w-16 max-w-16 md:w-fit rotate-0 flex-1 flex items-center">
                  <hr className="h-px w-full border-none bg-gradient-line" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardTwo;
