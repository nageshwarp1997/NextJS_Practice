import Link from "next/link";
import { aboutData } from "../data";
import { Button } from "../childComponents";

const About = () => {
  const firstGroup = aboutData.slice(0, 3);
  const secondGroup = aboutData.slice(3);

  return (
    <>
      {/* Mobile View */}
      <div className="bg-ctruh-dark-primary text-white px-8 py-4 font-metropolis block lg:hidden">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex flex-col gap-1 items-start">
            <p className="uppercase text-ctruh-light-secondary text-sm font-semibold tracking-[1px]">
              PARTNER WITH US
            </p>
            <span className="bg-ctruh-gradient-accent bg-clip-text text-transparent italic text-sm font-medium leading-[21px]">
              Together, we’re Unstoppable!
            </span>
          </div>
          <Button
            content="Team Up"
            type="outline"
            className="whitespace-nowrap py-2 px-[18px]"
          />
        </div>
        <div className="mt-5 mb-8">
          {aboutData.slice(0, 1).map((item) => (
            <div key={item.id}>
              <p className="uppercase text-sm font-semibold tracking-[1px] pb-6 border-b border-davys-gray mb-4">
                {item.heading}
              </p>
              <div className="grid grid-cols-2">
                {item.children?.map((child, index) => {
                  const ChildIcon = child.icon;
                  return (
                    <div className="p-2 w-fit" key={child.id}>
                      <div className="flex gap-2 items-start">
                        <ChildIcon />
                        <p
                          className={`text-sm ${
                            index === 0 ? "font-medium" : "font-semibold"
                          }`}
                        >
                          {child.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8">
          {aboutData
            .filter((item) => item.heading !== "PARTNER WITH US")
            .slice(1)
            .map((item) => (
              <div key={item.id}>
                <p className="uppercase text-sm font-semibold tracking-[1px] pb-6 border-b border-davys-gray mb-4">
                  {item.heading}
                </p>
                <div>
                  {item.children?.map((child, index) => {
                    const ChildIcon = child.icon;
                    return (
                      <div className="p-2 w-fit" key={child.id}>
                        <div className="flex gap-2 items-start">
                          <ChildIcon />
                          <p
                            className={`text-sm ${
                              index === 0 ? "font-medium" : "font-semibold"
                            }`}
                          >
                            {child.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="lg:p-px lg:bg-gradient-to-b lg:from-[#333333] lg:to-[#0D0D0D] lg:rounded-[20px] hidden lg:block">
        <div className="max-w-[1290px] px-12 py-8 bg-ctruh-dark-secondary rounded-[20px] font-metropolis ">
          <div className="grid grid-cols-3 gap-8">
            {firstGroup.map((item) => (
              <div key={item.id}>
                <p className="uppercase text-ctruh-light-secondary text-sm font-semibold tracking-[1px] mb-6">
                  {item.heading}
                </p>
                {item.children?.map((child) => {
                  const ChildIcon = child.icon;
                  return (
                    <Link
                      href={child.link}
                      className="group flex gap-2 p-2 hover:bg-ctruh-dark-primary justify-start items-center max-w-fit rounded-lg"
                      key={child.id}
                    >
                      <ChildIcon className="group-hover:fill-white" />
                      <p
                        className={`text-sm font-medium leading-[21px] ${
                          child.disabled
                            ? "text-ctruh-light-primary opacity-25"
                            : "text-ctruh-light-primary group-hover:text-white"
                        }`}
                      >
                        {child.title}
                      </p>
                    </Link>
                  );
                })}
                {item.gradientText && item.buttonText && (
                  <div className="flex flex-col gap-4 items-start">
                    <span className="bg-ctruh-gradient-accent bg-clip-text text-transparent italic text-sm font-medium leading-[21px]">
                      {item.gradientText}
                    </span>
                    <Button
                      content={item.buttonText}
                      type="outline"
                      className="py-2 px-[18px]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border border-[#333] rounded-[20px] my-6" />
          <div className="grid grid-cols-3 gap-8">
            {secondGroup.map((item) => (
              <div key={item.id}>
                <p className="uppercase text-ctruh-light-secondary text-sm font-semibold tracking-[1px] mb-6">
                  {item.heading}
                </p>
                {item.children?.map((child) => {
                  const ChildIcon = child.icon;
                  return (
                    <Link
                      href={child.link}
                      className="group flex gap-2 p-2 hover:bg-ctruh-dark-primary justify-start max-w-fit rounded-lg items-center"
                      key={child.id}
                    >
                      <ChildIcon
                        className={
                          child.disabled
                            ? "opacity-25"
                            : "group-hover:text-white"
                        }
                      />
                      <p
                        className={`text-sm font-medium leading-[21px] ${
                          child.disabled
                            ? "text-ctruh-light-primary opacity-25"
                            : "text-ctruh-light-primary group-hover:text-white"
                        }`}
                      >
                        {child.title}
                      </p>
                    </Link>
                  );
                })}
                {item.gradientText && item.buttonText && (
                  <div className="flex flex-col gap-4 items-start">
                    <span className="bg-gradient-to-r from-[#00E5D1] via-[#25ADF9] to-[#2553F8] bg-clip-text text-transparent italic text-sm font-medium leading-[21px]">
                      {item.gradientText}
                    </span>
                    <Button content={item.buttonText} type="outline" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
