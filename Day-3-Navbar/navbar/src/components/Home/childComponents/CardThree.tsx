import { Button } from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cardThreeData } from "../data";

const CardThree = () => {
  return (
    <div className="content md:mb-10 w-full max-w-[1080px] flex items-center justify-center">
      <div className="rounded-[30px] w-full bg-background-color mx-5 lg:mx-0">
        <div className="p-px w-full xl:w-[1080px] md:h-[450px] rounded-[30px] bg-gradient-to-b from-davys-gray to-[#0D0D0D]">
          <div className="flex flex-col md:flex-row w-full h-full overflow-hidden rounded-[30px] sticky z-20 shadow-catalogue-card mx-auto bg-[#080808]">
            <div className="w-full h-full relative">
              <Image
                src={"/icons/home/Product-Editor-Ray.svg"}
                alt="Product Editor Ray"
                width={0}
                height={0}
                sizes="100vw"
                className="hidden md:block absolute w-full inset-0 h-auto z-30"
              />
              <div className="absolute inset-0 w-full h-full bg-catalogue-card-mobile-gradient md:bg-catalogue-card-three-gradient z-10" />
              <div className="p-6 relative md:absolute flex flex-col justify-between h-full py-[50px] pl-8 md:pl-16 z-40">
                <div className="flex flex-col gap-6 items-start">
                  <Image
                    src={"/icons/home/Logo-3DEditor.svg"}
                    alt="Logo 3D Editor"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[160px] h-auto"
                  />
                  <div className="flex flex-col">
                    <p className="text-white text-[32px] font-semibold font-degular">
                      <span>
                        No-Code/Low-Code, <br /> Web-Based
                      </span>{" "}
                      <span className="bg-ctruh-gradient-accent bg-clip-text text-transparent font-degular">
                        3D Editor
                      </span>
                    </p>
                    <p className="text-silver text-base md:text-lg font-metropolis font-normal">
                      Create 3D simulations of physical environments
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mt-6 md:mt-0 w-full">
                  <div className="w-full md:w-auto">
                    <Link href={"/"}>
                      <Button content="Open 3D Editor" className="w-full" />
                    </Link>
                  </div>
                  <div className="w-full md:w-auto">
                    <Link href={"/"}>
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
              <video
                src="/video/home/editor.mp4"
                loop
                autoPlay
                playsInline
                muted
                preload="none"
                className="w-full h-[350px] object-cover md:absolute md:right-[-100px] md:bottom-0 md:h-full md:w-[650px] md:rotate-9 md:rounded-[30px]"
              />
            </div>
            <Image
              src={"/icons/home/Product-Editor-Grid.svg"}
              alt="Product Editor Grid"
              width={0}
              height={0}
              sizes="100vw"
              className="hidden md:block absolute w-full inset-0 h-full z-20"
            />
          </div>
        </div>
        <div className="pt-12 md:pb-20 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-between w-[80%] 425px:w-[90%] mx-auto max-w-[1080px]">
          {cardThreeData?.map((item, index) => (
            <div
              className="flex items-center gap-2 md:gap-4"
              key={item + index}
            >
              <Image
                src={"/icons/home/LeafGroup.svg"}
                alt="Leaf Group Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[40px] h-[48px] md:w-[55px] md:h-[66px] object-cover"
              />
              <span className="font-metropolis font-medium text-2xl text-center">
                {item}
              </span>
              <Image
                src="/icons/home/LeafGroup.svg"
                alt="alt"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[40px] h-[48px] md:w-[55px] md:h-[66px] object-cover transform scale-x-[-1]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardThree;
