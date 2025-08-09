"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import clock from "/public/clock.svg";
import idea from "/public/idea.svg";
import search from "/public/search.svg";
import { useRef } from "react";

export default function BootcampSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false }); // Ensure it animates every time in view

  // Variants for container to control the stagger and transition
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between the animations of each card
      },
    },
  };

  // Variants for each card, animating from bottom to top
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the viewport
    visible: {
      opacity: 1,
      y: 0, // Move to natural position
      transition: { duration: 0.8, ease: "easeInOut" }, // Smooth transition
    },
  };

  return (
    <section
      className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0"
      ref={sectionRef}
    >
      <div className="text-start mb-8">
        <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
          Who Is This <br className="hidden sm:block" />
          <span className="text-secondary">For?</span>
        </h2>

        {/* <p className="mt-4 text-gray-600">
          Feeling stuck in your current career? Whether you’re new to coding{" "}
          <br /> or just need a real-world project push, this bootcamp is for
          you. With <br /> personalized support and a community of learners,
          you’ll reach your <br /> goals faster than you think.
        </p> */}
        {/* <p className="mt-4 text-lg sm:text-xl font-semibold text-primary">
          Only for those who are motivated to build tech products and:
        </p> */}
        <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-4">
          <li className="text-base sm:text-lg leading-relaxed">
            dont know how to code (or beginner)
          </li>
          <li className="text-base sm:text-lg leading-relaxed">
            in college/university
          </li>
            <li className="text-base sm:text-lg leading-relaxed">
            willing to commit minimum 8 hours a week for 1-2 months
          </li>
        </ul>
      </div>
      <h2 className="leading-[30px] sm:leading-[50px] text-[20px] sm:text-[48px] font-bold text-primary">
        What Can You Do <br className="hidden sm:block" />
        <span className="text-secondary">After?</span>
      </h2>

      {/* Animated Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      >
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              <Image
                src={clock}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Impress Universities & Recruiters
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            You will graduate with your own portfolio website, showing the AI systems you built. Put it on your resume.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              <Image
                src={idea}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Sell AI Systems to Businesses
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            You can install AI systems you learnt into local businesses and get paid.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg w-full h-[252px] sm:w-auto sm:h-auto"
          variants={cardVariants}
        >
          <div className="flex justify-start mb-4">
            <div className="h-[50px] w-[50px] sm:h-16 sm:w-16 flex items-center justify-center">
              <Image
                src={search}
                alt="Icon"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          <h3 className="text-[18px] sm:text-lg font-semibold text-primary mb-2">
            Learn Full-Stack Development
          </h3>
          <p className="text-[16px] sm:text-gray-600">
            This is an excellent base to go deep into full-stack development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
