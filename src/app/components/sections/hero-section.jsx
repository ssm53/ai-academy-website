"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ApplyNowModal from "./apply-now-modal"; // adjust path if needed (e.g. "@/app/components/sections/apply-now-modal")

const Hero = () => {
  const [openApply, setOpenApply] = useState(false);

  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // const buttonVariants = {
  //   hover: {
  //     scale: 1.1,
  //     transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
  //   },
  // };
  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="bg-[#0F243D] py-12 pb-16 px-6 w-auto sm:w-full sm:h-[50rem] h-auto flex items-center justify-center"
    >
      <div className="pt-[40px] sm:pt-[60px] w-full sm:max-w-[1300px] mx-auto flex flex-col items-center">
        <motion.h1
  className="text-2xl sm:text-6xl font-bold text-white text-center"
  initial="hidden"
  animate="visible"
  variants={textVariants}
>
  {/* Badge line */}
  <span className="block text-sm sm:text-xl font-medium text-blue-200 mb-2">
    Only For Malaysian College &amp; Uni Students
  </span>

  {/* Mobile headline */}
  <div className="md:hidden">
    <span className="block">
      Build{" "}
      <span className="text-secondary whitespace-nowrap">AI Automations</span>{""}
    </span>
    <span className="block">In 1 Month</span>
    {/* <span className="block text-secondary whitespace-nowrap">Live Classes</span> */}
  </div>

  {/* Desktop headline */}
  <div className="hidden md:block">
    <span>Build </span>
    <span className="text-secondary">AI Automations</span>{""}
    <span> in 1 Month</span>
    {/* <span> in Just 1 Month - </span> */}
    {/* <span>Live Beginner Friendly Classes</span> */}
  </div>
</motion.h1>


        {/* Points */}
        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            For complete tech beginners
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Live Remote Classes Monday - Thursday
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            5 students per cohort
          </motion.p>
        </motion.div>

          {/* Start date pill */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mt-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
            <span className="text-white text-sm sm:text-base">
              Next cohort starts Oct 6
            </span>
          </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
        <motion.button
  onClick={() => setOpenApply(true)}
  className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px] text-center"
  variants={buttonVariants}
  whileHover="hover"
  type="button"
>
  Apply Now
</motion.button>

        </motion.div>
      </div>

      {/* Reusable Modal */}
      <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
    </section>
  );
};

export default Hero;
