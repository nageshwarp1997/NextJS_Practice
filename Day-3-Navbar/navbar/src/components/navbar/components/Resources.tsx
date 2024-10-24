import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categoryLabels, resourceData } from "../data";
import { ResourceCategory } from "../types";
import { ArrowForwardIcon, ArrowRightIcon, YoutubeIcon } from "../icons";
import { Button } from "../childComponents";

const ImmersifydCard: React.FC = () => {

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-6 bg-ctruh-neutral rounded-[20px]">
      <div className="flex justify-center items-center relative">
        <div>
          <Image
            src={"/icons/immersifyd/immersifyd-logo.svg"}
            alt="Immersifyd Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="lg:w-[500px] lg:h-full object-contain w-[196px] h-[24px]"
            loading="lazy"
          />
        </div>
        <div className="hidden lg:block absolute glow"></div>
      </div>
      <div>
        {categoryLabels?.map((item, index) => (
          <Link href={"/"} key={item.name}>
            <span className="uppercase bg-gradient-to-b from-[#FFF] to-[#999] bg-clip-text text-transparent backdrop-blur-custom text-sm font-normal font-outfit">
              {item.name}
            </span>
            {index < categoryLabels?.length - 1 && (
              <span className="mx-3 border-r border-white opacity-25 h-6" />
            )}
          </Link>
        ))}
      </div>
      <p className="text-ctruh-light-secondary text-xs font-normal leading-[18px] text-center pb-4">
        From quick updates to extensive research, learn everything you need to
        know about the world's fastest-growing XR industry
      </p>

      <button className="py-2 px-5 border border-white inline-flex gap-2.5 items-center bg-white rounded-full text-black font-metropolis text-sm font-semibold">
        Explore Now
        <ArrowForwardIcon className="w-3 h-3 fill-black" />
      </button>
    </div>
  );
};

const ResourceItem: React.FC<{ item: ResourceCategory }> = ({ item }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="uppercase text-sm font-semibold tracking-[1px] py-4 border-b border-davys-gray text-white lg:py-0 lg:border-none lg:text-ctruh-light-secondary">
        {item.heading}
      </p>

      <div className="flex flex-col gap-8 lg:gap-4">
        {item?.children?.map((child) => {
          const ChildIcon = child?.icon;
          return (
            <Link href="/" className="group flex flex-col gap-1" key={child.id}>
              <div className="flex items-center gap-3">
                {ChildIcon && (
                  <ChildIcon
                    className={`w-5 h-5 ${
                      child?.disabled
                        ? "opacity-25"
                        : "text-ctruh-light-primary lg:group-hover:text-white"
                    }`}
                  />
                )}

                <p
                  className={`text-sm font-medium leading-[21px] font-metropolis ${
                    child?.disabled
                      ? "opacity-25"
                      : "text-white lg:text-ctruh-light-primary lg:group-hover:text-white"
                  }`}
                >
                  {child.title}
                </p>
              </div>
              <p
                className={`text-xs font-normal leading-[18px] pl-8 font-metropolis ${
                  child?.disabled
                    ? "opacity-25"
                    : "text-white lg:text-ctruh-light-primary lg:group-hover:text-white"
                }`}
              >
                {child.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ResourcesBottom: React.FC<{ item: ResourceCategory }> = ({ item }) => {
  return (
    <div className="bg-ctruh-dark-secondary px-12 pt-6 pb-8 rounded-b-[20px]">
      <div className="flex items-center gap-4 justify-between">
        <p className="uppercase text-ctruh-light-secondary text-sm font-semibold tracking-[1px] whitespace-nowrap">
          {item.heading}
        </p>
        <div className="flex items-center gap-2 ">
          <Link
            href="https://www.youtube.com/@Ctruh"
            className="text-ctruh-light-primary text-xs font-medium cursor-pointer"
          >
            More Informative Content
          </Link>
          <ArrowRightIcon fill="#bfbfbf" />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        {item?.children?.map((child) => (
          <div className="flex flex-1 items-center gap-3" key={child.id}>
            <Image
              src={child?.image || ""}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              className="flex-shrink-0 object-cover w-[112px] h-[63px] rounded-lg"
              loading="lazy"
            />
            <div className="flex flex-col items-start gap-1">
              <p className="text-white-color text-sm font-semibold">
                {child.title}
              </p>
              <p className="text-ctruh-light-secondary text-[11px]">
                {child.description}
              </p>
              <Button
                leftIcon={
                  child?.type === "youtube" ? (
                    <YoutubeIcon className="w-[18px] h-[18px]" />
                  ) : undefined
                }
                content={
                  child?.type === "youtube"
                    ? "Watch on Youtube"
                    : child.type === "newsletter"
                    ? "Read Newsletter"
                    : child.type === "article"
                    ? "Read Article"
                    : ""
                }
                type="outline"
                className="py-1 px-3 text-xs font-normal"
                rightIcon={
                  child?.type !== "youtube" ? <ArrowForwardIcon /> : undefined
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <>
      <div className="bg-ctruh-dark-primary text-white-color px-8 py-4 block lg:hidden overflow-hidden">
        <ImmersifydCard />

        <div className="py-4 grid grid-cols-2 gap-8">
          {resourceData.slice(0, 2).map((item) => (
            <ResourceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* desktop */}
      <div className="lg:p-px lg:bg-gradient-to-b lg:from-[#333333] lg:to-[#0D0D0D] lg:rounded-[20px]">
        <div className="max-w-[1290px] w-full bg-ctruh-background-dark rounded-[20px] font-metropolis hidden lg:block">
          <div className="grid grid-cols-3 gap-12 px-12 pt-8 pb-6">
            <ImmersifydCard />
            {resourceData.slice(0, 2).map((item: ResourceCategory) => (
              <ResourceItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            {resourceData.slice(2).map((item: ResourceCategory) => (
              <ResourcesBottom key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
