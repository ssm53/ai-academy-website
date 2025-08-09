"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TeachingMethod = () => {
  // Hook to check if the elements are in view without 'once' to trigger on every view
  const firstSectionRef = useRef(null);
  const firstSectionInView = useInView(firstSectionRef, { triggerOnce: false });

  const secondSectionRef = useRef(null);
  const secondSectionInView = useInView(secondSectionRef, {
    triggerOnce: false,
  });

  const guaranteeRef = useRef(null);
  const guaranteeInView = useInView(guaranteeRef, { triggerOnce: false });

  // Animation variants
  const leftToRightVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightToLeftVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="our-teaching-methods"
      className="bg-white max-w-[1300px] mx-auto py-16 px-4 lg:px-0"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Upper Section - Teaching Method and Career Support */}
        <div
          ref={firstSectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between"
        >
          {/* Left Section - Our Teaching Method */}
          <motion.div
            className="space-y-6"
            variants={rightToLeftVariant}
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Projects You Will Build
            </h2>
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              AI Sales Employee
            </h2>
            <p className="text-[16px] text-gray-600">
              Build an AI system that can replace a sales development represntative
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[16px] text-gray-600">
              <li>Automatically scrapes Linkedin & Google Maps</li>
              <li>Analyses information of each client</li>
              <li>Sends PERSONALISED email / Linkedin message to client</li>
            </ul>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={leftToRightVariant}
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
          >
            <Image
              src="/outreach2.png"
              alt="Teaching Method"
              width={450}
              height={300}
              className="w-[450px] h-auto object-cover rounded-[15px]"
            />
          </motion.div>
        </div>

        {/* Career Support Section */}
        <div
          ref={secondSectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-16"
        >
          {/* Left Section - Image */}
          <motion.div
            className="flex justify-center md:justify-start order-2 md:order-1"
            variants={leftToRightVariant}
            initial="hidden"
            animate={secondSectionInView ? "visible" : "hidden"}
          >
            <Image
              src="/CustomGPT.png"
              alt="Career Support"
              width={450}
              height={300}
              className="w-[450px] h-auto object-cover rounded-[15px]"
            />
          </motion.div>

          {/* Right Section - Career Support Content */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            variants={rightToLeftVariant}
            initial="hidden"
            animate={secondSectionInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Smart AI Chatbot
            </h2>
            <p className="text-[16px] text-gray-600">
              
            </p>
            <ul className="flex gap-[2rem] list-disc ml-6 space-y-2 text-[16px] text-gray-600">
              <div>
                <li>Human-like answers</li>
                <li>Answers based on knowledge given</li>
                <li>Can actually do stuff e.g. send emails, set Google Calendar event</li>
              </div>
              {/* <div>
                <li>A great recommendation letter</li>
                <li>Real-life interview practice</li>
                <li>Step by step process of getting a job FAST.</li>
              </div> */}
            </ul>
          </motion.div>
        </div>

        {/* 3rd section */}
         <div
          ref={firstSectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between"
        >
          {/* Left Section - Our Teaching Method */}
          <motion.div
            className="space-y-6"
            variants={rightToLeftVariant}
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
          >
            {/* <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Projects You Will Build
            </h2> */}
            <h2 className="text-2xl sm:text-4xl font-bold text-primary">
              Automated Blog Writer
            </h2>
            <p className="text-[16px] text-gray-600">
              Build an AI system that can replace a SEO marketer
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[16px] text-gray-600">
              <li>Researches blog topics based on company</li>
              <li>Researches credible resources for information</li>
              <li>Craft and post SEO friendly blog posts</li>
            </ul>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={leftToRightVariant}
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
          >
            <Image
              src="/seo.png"
              alt="Teaching Method"
              width={450}
              height={300}
              className="w-[450px] h-auto object-cover rounded-[15px]"
            />
          </motion.div>
        </div>

        {/* Money Back Guarantee Section */}
        <motion.div
          ref={guaranteeRef}
          className="mt-16 bg-primary text-white rounded-[23px] p-8 relative"
          variants={rightToLeftVariant}
          initial="hidden"
          animate={guaranteeInView ? "visible" : "hidden"}
        >
          <h2 className="text-[32px] sm:text-4xl font-bold">
            100% Money-back <br /> Guarantee
          </h2>
          <p className="mt-4 text-[16px] sm:text-[#FFFFFFCC]">
            We wil only if you win
          </p>
          <ul className="w-full sm:w-1/2 text-[16px] sm:text-[#FFFFFFCC] list-disc ml-[-1px] mt-4 space-y-2 border border-[#19395F] p-8 rounded-[15px]">
            <p>
              Students must meet and maintain eligibility as outlined below:
            </p>
            <li>You graduate from the bootcamp and receive our certificate.</li>
            <li>
              You continue with your application process as set by our team.
            </li>
          </ul>
          {/* <p className="pt-[12px] text-[16px] sm:text-[#FFFFFFCC]">
            *If you follow those steps above, but still don&apos;t get a tech
            job, you get a full-refund!
          </p> */}
          <Image
            src="/Rectangle.svg"
            alt="rectangle"
            width={300}
            height={300}
            className="hidden sm:block absolute bottom-0 right-0 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingMethod;
