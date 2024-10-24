import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "../icons";
import Image from "next/image";
import { Testimonial } from "../types";
import { solutionsData } from "../data";

const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-ctruh-neutral p-6 rounded-lg hidden lg:flex flex-col">
      <div className=" overflow-hidden">
        <div
          className=""
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              {/* container for the content */}
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-white text-sm mt-2 font-normal italic leading-[21px]">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div>
                      <p className="text-white text-xs font-semibold leading-[18px]">
                        {testimonial.name}
                      </p>
                      <p className="text-ctruh-light-secondary text-[10px] font-normal leading-4">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <ArrowLeftIcon
                        onClick={handlePrev}
                        className="cursor-pointer"
                      />
                      <ArrowRightIcon
                        onClick={handleNext}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/" className="flex items-center gap-2 mt-4 ">
        <span className="text-ctruh-light-primary text-xs">
          More Customer Stories
        </span>
        <ArrowRightIcon fill="#bfbfbf" />
      </Link>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="lg:p-px lg:bg-gradient-to-b lg:from-[#333333] lg:to-[#0D0D0D] lg:rounded-[20px]">
      <div className="bg-ctruh-dark-primary text-white px-8 pb-10 lg:max-w-[1000px] lg:w-full lg:px-12 lg:py-8 lg:bg-ctruh-dark-secondary lg:rounded-[20px] lg:font-metropolis">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {solutionsData?.map((item, index) => (
            <div key={item.id}>
              <p
                className={`uppercase text-sm font-semibold tracking-[1px] py-7 border-b border-davys-gray mb-[10px] lg:text-ctruh-light-secondary lg:mb-6  lg:border-none lg:py-0  ${
                  index === solutionsData.length - 1 ? "hidden lg:block" : ""
                }`}
              >
                {item.heading}
              </p>

              <div
                className={`grid grid-cols-2  lg:flex lg:flex-col ${
                  index !== 0 ? "gap-x-8 lg:gap-4 " : ""
                }`}
              >
                {item.children?.map((child, childIndex) => {
                  const ChildIcon = child.icon;

                  return (
                    <Link
                      href={child?.href}
                      className={`flex flex-col w-fit py-2 lg:py-0  lg:gap-1 group lg:items-start`}
                      key={child.id}
                    >
                      <div
                        className={`flex gap-2 items-center  ${
                          index === 0
                            ? "lg:group-hover:bg-ctruh-dark-primary p-2  lg:rounded-lg"
                            : ""
                        } lg:group-hover:text-white`}
                      >
                        <ChildIcon className="lg:group-hover:fill-white" />
                        <p
                          className={` 
                              text-sm lg:text-ctruh-light-primary lg:group-hover:text-white
                              ${
                                childIndex === 0
                                  ? "font-medium lg:font-semibold"
                                  : index === 0
                                  ? "font-medium lg:font-semibold"
                                  : "font-semibold"
                              } font-medium lg:font-semibold`}
                        >
                          {child.title}
                        </p>
                      </div>
                      {"description" in child && (
                        <p className="w-full text-xs text-white font-normal leading-5 pl-8 lg:text-ctruh-light-secondary lg:group-hover:text-white">
                          {child?.description}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>

              {item?.testimonials && (
                <TestimonialCarousel testimonials={item?.testimonials} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
