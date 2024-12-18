"use client";

import React, { useEffect, useState } from "react";
import OfferingsTitle from "./childComponents/OfferingsTitle";
import { tabs } from "./data";
import CardOne from "./childComponents/CardOne";
import CardTwo from "./childComponents/CardTwo";
import CardThree from "./childComponents/CardThree";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProductCatalogues = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contents = gsap.utils.toArray(".content") as HTMLElement[];
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      contents.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 158px",
          end: "top bottom",
          pin: true,
          scrub: 0.5,
          pinSpacing: false,
          endTrigger: ".final",
          id: `${i + 1}`,
        });
      });
    });

    mm.add("(min-width: 1280px)", () => {
      ScrollTrigger.create({
        scrub: 0.5,
        trigger: ".pin_container",
        start: "top 84px",
        end: "top bottom",
        pin: true,
        endTrigger: ".final",
        onUpdate: (data: { progress: number }) => {
          const progress = data.progress * 100;
          if (progress >= 0 && progress < 40) {
            setActiveId(1);
          } else if (progress >= 40 && progress < 80) {
            setActiveId(2);
          } else if (progress >= 80) {
            setActiveId(3);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: { kill: () => any }) =>
        trigger.kill()
      );
    };
  }, []);
  return (
    <section className="flex flex-col gap-16 md:gap-0 justify-center items-center pt-[120px]">
      <div className="text-center px-7 md:px-0">
        <OfferingsTitle
          titleTexts={["Products Shaping the Future"]}
          className="!py-0 !text-4xl md:!text-5xl !font-degular !font-medium"
        />
        <p className="text-silver text-base font-metropolis font-normal">
          Bringing back in-person experiences to the web
        </p>
      </div>

      <div className="pin-container relative hidden md:flex mt-20 mb-6 gap-20 items-center justify-center px-8 border border-translucent-white rounded-full product-catalogue-tabs-gradient">
        {tabs?.map((tab, index) => {
          return (
            <div
              className={`${
                index + 1 === activeId &&
                "product-active before:absolute before:w-28 before:bottom-0 before:left-0 before:border-none before:bg-gradient-line before:h-px"
              } relative flex items-center justify-center min-w-28 h-full py-3`}
              key={index}
            >
              <p className="text-white text-base font-metropolis font-medium hover:font-semibold cursor-pointer whitespace-nowrap">
                {tab}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-24 xl:gap-60 justify-center items-center">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
      <section className="final"></section>
    </section>
  );
};

export default ProductCatalogues;



