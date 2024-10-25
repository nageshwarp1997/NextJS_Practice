import React, { FC, Fragment } from "react";
import { TopTextDisplayProps } from "../types";

const TopTextDisplay: FC<TopTextDisplayProps> = ({
  content,
  className,
  contentClassName,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full lg:h-screen py-[140px] px-[30px] max-w-screen-1270px mx-auto text-[32px] lg:text-[64px] leading-[39px] lg:leading-[77px] ${className}`}
    >
      <span
        className={`flex flex-wrap items-center justify-center text-center ${contentClassName}`}
      >
        {content?.map((item, index) => {
          if (item.type === "text") {
            const words = item.isHighlighted
              ? [item.text]
              : item.text.split(" ");
            return (
              <Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <span
                    key={`${index}-${wordIndex}`}
                    className={`mr-2 font-medium bg-clip-text text-transparent font-degular ${
                      item.isHighlighted
                        ? "bg-ctruh-gradient-accent"
                        : "bg-silver-fade"
                    }`}
                  >
                    {word}
                  </span>
                ))}
                {item.break && <div className="basis-full h-0"></div>}
              </Fragment>
            );
          }
          return null;
        })}
      </span>
    </div>
  );
};

export default TopTextDisplay;
