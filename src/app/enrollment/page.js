"use client";
import React, { useState } from "react";
import Image from "next/image";
import LowerHeader from "../components/layout/enrollement-header";
import CurriculumTable from "../components/sections/curriculum-table";
import WatchMore from "../components/sections/watch-more";

const EnrollmentSection = () => {
  const [selectedTuitionOption, setSelectedTuitionOption] =
    useState("Up-Front");
  const [selectedMBGOption, setSelectedMBGOption] = useState("MBG");

  return (
    <div id="get-free-access" className="bg-primary min-h-screen">
      <LowerHeader />
      <div className="max-w-[1300px] mx-auto py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="sm:mx-0 mx-1 text-[23px] sm:text-[2.5rem] leading-[1.5rem] sm:leading-10 font-bold text-white">
            Let’s Get Started.
            <span className="text-secondary"> We Don’t Get</span>
            <br />
            Paid If You Don’t Get A Job
          </h1>
        </div>

        {/* Enrollment Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="sm:p-0 p-4">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white">
                Choose Program Type
              </label>
              <select className="outline-none w-full p-3 mt-2 rounded bg-gray-200 text-gray-900">
                <option>Self Paced Bootcamp</option>
                <option>Online Bootcamp (Fulltime)</option>
                <option>Onsite Bootcamp (Fulltime)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-white">
                Choose Tuition Options
              </label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Up-Front", "3  Installment", "12  Installment"].map(
                  (option) => (
                    <button
                      key={option}
                      className={` flex justify-center text-center items-center px-6  rounded-lg transition border sm:w-[250px] w-[121px] h-[45px]  whitespace-nowrap ${
                        selectedTuitionOption === option
                          ? "bg-blue-600 text-white"
                          : "bg-transparent text-white border-gray-500"
                      }`}
                      onClick={() => setSelectedTuitionOption(option)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className=" block text-lg font-semibold text-white">
                Money Back Guarantee
              </label>
              <div className="flex  flex-wrap gap-4 mt-2">
                {["MBG", "No MBG"].map((option) => (
                  <button
                    key={option}
                    className={`flex justify-center items-center  w-[129px] h-[44px] px-6 py-3 rounded-lg border-gray-500 border transition text-center whitespace-nowrap ${
                      selectedMBGOption === option
                        ? "bg-blue-600 text-white"
                        : "bg-primary text-white"
                    }`}
                    onClick={() => setSelectedMBGOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-white ">
                Registration Fees
              </label>
              <input
                type="text"
                className="w-full p-3 mt-2 rounded bg-[#8B8B8B40] text-white outline-none"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md sm:mx-2 mx-4 border-solid border-[6px] border-[#3C82F6]">
            <span className="bg-secondary relative bottom-8 text-white px-3 py-1 rounded-bl-lg rounded-br-lg text-sm">
              Most Popular
            </span>
            <div className="flex justify-between items-center">
              <span className=" text-primary text-xl font-semibold">
                Self Paced, Online
              </span>
            </div>
            <div className="mt-8 flex space-x-2">
              <span>RM</span>
              <h2 className="sm:text-5xl text-[25px] font-bold text-primary">
                12,432
              </h2>
              <div className="">
                <span className="block text-gray-500 sm:text-[16px] text-[13px]">
                  USD 250
                </span>
                <span className="block text-gray-500 sm:text-[16px] text-[13px]">
                  Up-Front
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Image src="/activedot.svg" alt="active" width={15} height={15} />
              <span className="">3 Slots Left</span>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#F4F4F4]">
              <h3 className="text-lg font-semibold text-primary">
                Visa / Credit Card
              </h3>
              <div className="flex  space-x-4 mt-4">
                <Image src="/visa.svg" alt="Visa" width={50} height={30} />
                <Image
                  src="/mastercard.svg"
                  alt="Mastercard"
                  width={50}
                  height={30}
                />
                <Image
                  src="/activedot.svg"
                  alt="active"
                  width={15}
                  height={15}
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-[#4F5051] sm:text-2xl text-15px">
                  I have read and agreed to the{" "}
                  <a href="#" className="text-blue-400 underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            <button className="mt-6 bg-blue-600 text-white w-full py-3 rounded-lg">
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <CurriculumTable />
      <WatchMore />
    </div>
  );
};

export default EnrollmentSection;
