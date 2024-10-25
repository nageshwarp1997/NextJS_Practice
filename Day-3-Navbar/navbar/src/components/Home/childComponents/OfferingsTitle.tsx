import React from "react";

const OfferingsTitle = ({
  horizontalLine,
  titleTexts,
  descriptionText,
  className,
}: {
  horizontalLine?: "top" | "bottom";
  titleTexts: string[];
  descriptionText?: string[] | string;
  className?: string;
}) => {
  return (
    <>
      {horizontalLine === "top" && (
        <hr className="h-px border-none bg-gradient-line" />
      )}
      <div className="{`py-[60px] px-[30px] lg:px-0 text-center max-w-screen-1270px mx-auto ${className}`}">
        {titleTexts?.map((title, index) => {
          const words = title.split(" ");
          return (
            <h1
              className="text-center text-4xl lg:text-5xl font-medium leading-[43px] lg:leading-[57px]"
              key={index}
            >
              {words?.map((word, wordIndex) => {
                return (
                  <span
                    className="inline-block bg-clip-text text-transparent bg-silver-fade font-degular"
                    key={`${index}-${wordIndex}`}
                  >
                    {word}
                    {wordIndex < words.length - 1 && "\u00A0"}{" "}
                  </span>
                );
              })}
            </h1>
          );
        })}

        {descriptionText && (
          <p className="text-silver text-center font-metropolis font-normal mt-4 lg:mt-0 leading-6 text-base">
            {Array.isArray(descriptionText)
              ? descriptionText?.map((desc, i) => (
                  <span key={i}>
                    {desc} <br />
                  </span>
                ))
              : descriptionText}
          </p>
        )}
      </div>
      {horizontalLine === "bottom" && (
        <hr className="h-px border-none bg-gradient-line" />
      )}
    </>
  );
};

export default OfferingsTitle;
