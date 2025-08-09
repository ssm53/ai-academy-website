"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import ApplyNowModal from "../sections/apply-now-modal"; // <-- reuse the same modal

// Hook to detect screen size
const useMediaQuery = (width) => {
  const [isScreenSize, setIsScreenSize] = useState(false);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsScreenSize(window.innerWidth >= width);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [width]);
  return isScreenSize;
};

const handleOutsideClick = (e, setIsOpen) => {
  if (!e.target.closest(".drawer-content")) {
    setIsOpen(false);
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [openApply, setOpenApply] = useState(false); // modal state
  const isDesktop = useMediaQuery(1024);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const clickHandler = (e) => handleOutsideClick(e, setIsOpen);
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    }
  }, [isOpen]);

  if (!isHydrated) return null;

  return (
    <div className="relative border-b border-[#243548]">
      <nav className="bg-primary fixed top-0 w-full z-10">
        <div className="max-w-[1300px] h-[80px] flex flex-wrap items-center justify-between mx-auto p-6 lg:p-0">
          <Link href="/" passHref>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-secondary">Zez</span> Academy
            </h1>
          </Link>

          <div className="flex items-center space-x-3">
            {/* Apply Now button for desktop */}
            <button
              onClick={() => setOpenApply(true)}
              type="button"
              className="text-[#FFFFFF] bg-secondary focus:ring-4 font-medium rounded-[3px] text-sm px-4 py-2 text-center hidden md:block"
            >
              Apply Now
            </button>

            {/* Hamburger Icon */}
            <button
              type="button"
              onClick={toggleDrawer}
              className="bg-lightGray text-[#FFFFFF] inline-flex items-center p-2 w-10 h-10 justify-center"
            >
              <FiMenu className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={toggleDrawer}
            />

            {/* Drawer */}
            <div
              className={`fixed ${
                isDesktop ? "right-0 top-0" : "bottom-0 left-0"
              } w-full ${
                isDesktop ? "sm:w-2/5 lg:w-1/2" : "h-[90%]"
              } h-full bg-[#FFFFFF] rounded-[12px] shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
                isOpen
                  ? isDesktop
                    ? "translate-x-0"
                    : "translate-y-0"
                  : isDesktop
                  ? "translate-x-full"
                  : "translate-y-full"
              } drawer-content`}
            >
              {/* Drawer Close Button */}
              <button
                className="absolute top-5 right-5 text-2xl font-bold hover:text-secondary transition-all duration-300"
                onClick={toggleDrawer}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(34, 34, 34, 0.1)",
                }}
              >
                &times;
              </button>

              {/* Drawer Links */}
              <div className="p-8 mt-12">
                <ul
                  className={`flex flex-col ${
                    isDesktop ? "space-y-1" : "space-y-3"
                  } text-xl`}
                >
                  {[
                    "Home",
                    "Our Founder",
                    "Our Classes",
                    "Contact Us",
                    "Zez Academy vs University",
                    "Fixed vs Flexible Option",
                    "Why Us",
                    "Admission Requirements",
                    "How to Get Started",
                    "Pricing",
                    "FAQs",
                  ].map((link, index) => (
                    <li key={index} className="border-b border-gray-200 pb-3">
                      <Link
                        href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                        onClick={toggleDrawer}
                      >
                        <span className="flex justify-between items-center text-gray-800 hover:text-secondary">
                          {link}
                          <Image
                            src="/arrrow.svg"
                            alt="arrow"
                            width={20}
                            height={20}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}

                  {/* Apply Now inside Drawer */}
                  <li className="pt-4">
                    <button
                      onClick={() => {
                        toggleDrawer();
                        setOpenApply(true);
                      }}
                      type="button"
                      className="w-full bg-secondary text-white py-2 px-4 rounded-md"
                    >
                      Apply Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Reusable Modal */}
      <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
    </div>
  );
};

export default Header;
