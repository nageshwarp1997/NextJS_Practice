import React from "react";
import { productData } from "../data";
import { ThickChevronDownIcon } from "../icons";
import { splitTitle } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../common/Button";

const Products = () => {
  return (
    <div className="lg:p-px lg:bg-gradient-to-b lg:from-[#333333] lg:to-[#0D0D0D] lg:rounded-[20px]">
      <div className="bg-ctruh-dark-primary text-white px-8 pb-10 lg:max-w-[1150px] lg:w-full lg:px-12 lg:py-8 lg:bg-ctruh-dark-secondary lg:rounded-[20px] lg:font-metropolis">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {productData.map((item, index) => (
            <div key={item.id}>
              {index < productData.length - 1 ? (
                <p className="uppercase text-sm font-semibold tracking-[1px] py-7 border-b border-davys-gray lg:text-ctruh-light-secondary lg:mb-6 lg:border-none lg:py-0">
                  {item.heading}
                </p>
              ) : (
                <p className="hidden lg:block text-ctruh-light-secondary mb-6 uppercase text-sm font-semibold tracking-[1px]">
                  {item.heading}
                </p>
              )}
              <div className="flex flex-col gap-5 pt-5 lg:gap-0">
                {item.children?.map((child) => {
                  const { firstWord, restWords } = splitTitle(
                    child.title,
                    item.heading === "FOR INDIVIDUALS"
                  );
                  const isAITitle = /versa ai/i.test(child.title);
                  const GradientIcon = child?.icon;
                  return (
                    <Link
                      href={"/"}
                      className={`flex items-center gap-1 justify-between lg:gap-4 group  p-0 lg:p-4 ${
                        isAITitle
                          ? " border border-transparent lg:hover:border lg:hover:border-[--ctruh-accent]"
                          : "hover:bg-ctruh-dark-primary"
                      }  rounded-[14px]`}
                      key={child.title}
                    >
                      <div className="flex gap-2">
                        <div
                          className={`${
                            isAITitle
                              ? "bg-ctruh-gradient-accent lg:group-hover:shadow-versa-ai-hover"
                              : "bg-[--ctruh-dark-primary]  border border-transparent lg:group-hover:border lg:group-hover:border-[--ctruh-stroke-menu]"
                          }  self-start p-3.5 rounded-[10px]`}
                        >
                          <GradientIcon className="opacity-70  lg:group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-sm leading-[21px] lg:text-[--ctruh-light-primary] lg:group-hover:text-[--white-color]">
                            <span className="font-semibold">{firstWord}</span>{" "}
                            <span className="font-normal">{restWords}</span>
                          </div>
                          <p className="text-xs pt-1 leading-[18px] lg:text-[--ctruh-light-secondary] lg:group-hover:text-[--ctruh-light-primary]">
                            {child.description}
                          </p>
                        </div>
                      </div>
                      <ThickChevronDownIcon className="-rotate-90 lg:hidden" />
                    </Link>
                  );
                })}
              </div>
              {item?.image && (
                <div className="relative mt-5 lg:mt-0 cursor-pointer">
                  <Image
                    src={item?.image}
                    alt={item?.heading}
                    width={275}
                    height={276}
                    loading="lazy"
                    className="object-cover w-full max-h-[150px] h-full rounded-xl lg:max-h-[276px] object-top-quarter"
                  />
                  <div className="absolute left-0 bottom-0 p-4 flex flex-col items-start justify-between w-full lg:px-7 py-1 lg:py-6 lg:text-base">
                    <div>
                      <span className="text-ctruh-background-dark bg-white text-[10px] px-2 py-1 rounded-md font-bold lg:text-base">
                        MaaS
                      </span>
                      <p className="mt-2 text-[16px] leading-4 font-semibold text-white lg:mt-3 mb-2 lg:mb-4 lg:text-[27px] lg:leading-7">
                        Metaverse <br className="hidden lg:block" />
                        as a Service
                      </p>
                    </div>
                    <Button
                      content="Know More"
                      type="outline"
                      className="px-4 py-2"
                      disabled={true}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="border border-[#333333] rounded-[20px] my-4 hidden lg:block" />
        <div className="hidden lg:flex items-center justify-between">
          <div>
            <p className="text-white font-normal text-base leading-5">
              Need different solutions?
            </p>
            <p className="mt-1 font-normal text-xs text-ctruh-light-secondary">
              Set up a meeting with our team to discuss your specific objectives
            </p>
          </div>
          <Link href={"/"}>
            <Button
              content="Talk to Us"
              type="outline"
              className="py-2 px-[18px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
