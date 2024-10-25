"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CtruhHorizontalLogo } from "./images";
import { navLinks } from "./data";
import Link from "next/link";
import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  ThickChevronDownIcon,
} from "./icons";
import { Button } from "./childComponents";
import { HoveredContentProps } from "./types";

const Navbar: React.FC = () => {
  // States
  const [isContainerHovered, setIsContainerHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileNavbarOpened, setIsMobileNavbarOpened] =
    useState<boolean>(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // Event Handlers
  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleContainerMouseEnter = () => setIsContainerHovered(true);
  const handleMouseLeave = () => {
    setIsContainerHovered(false);
    setHoveredIndex(null);
  };

  // Hovered Content
  const HoveredContent: React.FC<HoveredContentProps> = ({ hoveredIndex }) => {
    if (hoveredIndex === null || hoveredIndex >= navLinks.length) {
      return null;
    }

    const Component = navLinks[hoveredIndex].component;
    return <Component />;
  };

  // Event Listeners for the close dropdown container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleMouseLeave();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Effects for the close dropdown container
  useEffect(() => {
    if (isMobileNavbarOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileNavbarOpened]);

  const toggleAccordionIndex = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Mobile view */}
      <nav className="fixed left-0 right-0 top-0 z-40 w-full font-metropolis lg:hidden">
        <div
          className={`flex justify-between px-8 py-7 ${
            isMobileNavbarOpened
              ? "bg-ctruh-background-dark border-b border-davys-gray"
              : "bg-ctruh-navbar-dark"
          }`}
        >
          <Link href="/">
            <CtruhHorizontalLogo className="w-[118px] cursor-pointer" />
          </Link>
          {isMobileNavbarOpened ? (
            <CloseIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setIsMobileNavbarOpened(false);
                setActiveIndices([]);
              }}
            />
          ) : (
            <HamburgerIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsMobileNavbarOpened(true)}
            />
          )}
        </div>

        {isMobileNavbarOpened && (
          <div className="bg-ctruh-background-dark flex flex-col h-screen-minus-86">
            <div className="overflow-y-auto flex-grow">
              {navLinks.map((item, index) => {
                const AccordionContentComponent = item.component;
                const isActive = activeIndices.includes(index);
                const isLastItem = index === navLinks.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`relative ${isLastItem && "mb-[180px]"}`}
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer sticky -top-1 z-20 bg-ctruh-background-dark border-b border-davys-gray px-8 py-4"
                      onClick={() => toggleAccordionIndex(index)}
                    >
                      <p className="text-white">{item.name}</p>
                      <ThickChevronDownIcon
                        className={isActive ? "rotate-180" : ""}
                      />
                    </div>
                    {isActive && AccordionContentComponent && (
                      <div className="overflow-y-scroll">
                        <AccordionContentComponent />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 justify-around items-end px-8 py-4 fixed bottom-0 bg-ctruh-navbar-dark-reverse h-[180px] w-full z-40 whitespace-nowrap">
              <Link
                href="/"
                className="px-3 py-[12px] font-semibold text-sm leading-[21px] whitespace-nowrap"
              >
                Sign Up
              </Link>
              <Button
                content="Book a Demo"
                type="solid"
                className="px-3 py-[12px]"
              />
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Mode */}
      <nav className="fixed left-0 right-0 w-full top-0 z-40 px-8 lg:px-16 py-5 hidden lg:flex items-center justify-between bg-ctruh-navbar-dark">
        <Link href="/">
          <CtruhHorizontalLogo className="w-[90px] lg:w-[118px]" />
          <p className="mt-1.5 font-light text-xs max-[1025px]:tracking-[0px] tracking-[2px]">
            Proudly Made in India
          </p>
        </Link>
        <div className="flex gap-3 font-metropolis">
          {navLinks.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-1 cursor-pointer relative group"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <p className="text-[--ctruh-light-primary] group-hover:text-[--white-color] font-medium text-sm leading-[21px] whitespace-nowrap">
                {item.name}
              </p>
              <ChevronDownIcon
                className={`group-hover:text-[--white-color] ${
                  hoveredIndex === index
                    ? "rotate-180"
                    : "text-[--ctruh-light-primary]"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2.5 items-center sticky bottom-0 font-metropolis">
          <Link
            href="/"
            className="px-2 lg:px-5 py-2 font-semibold text-sm leading-[21px] whitespace-nowrap"
          >
            Sign Up
          </Link>
          <Button
            content="Book a Demo"
            type="primary"
            className="px-[15px] py-[11px] text-sm"
          />
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {(hoveredIndex !== null || isContainerHovered) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 pt-[100px] flex justify-center items-start">
          <div
            className="flex justify-center items-start"
            onMouseEnter={handleContainerMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <HoveredContent hoveredIndex={hoveredIndex} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
