import React from "react";

const WhatLearn = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0"
    id="technical-skills-learnt">
      {/* Heading Section */}
      <div className="text-start mb-8">
        <h2 className="text-4xl font-bold text-primary">
          What You will Learn In
        </h2>
        <h3 className="text-4xl font-bold text-secondary">This Course?</h3>
        {/* <p className="text-[#0F243DCC] mt-4">
          Learn the tech-stack by used by most companies
        </p> */}

        {/* Apply Now Button */}
        {/* <div className="flex text-center mt-4">
          <button className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark">
            Apply Now
          </button>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="p-6 border border-gray-200 rounded-2xl bg-white ">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Technical Skills
          </h4>
          <ul className="list-disc list-inside text-[#0F243DCC] space-y-2">
            <li>Automation Tools (N8N, OpenAI, Perplexity)</li>
            <li>APIs</li>
            <li>Databases (Google Sheets API & AirTable)</li>
            <li>Live Deployment</li>
          </ul>
        </div>

        {/* Course Breakdown */}
        <div className="p-6 border border-gray-200 rounded-2xl bg-white ">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Course Breakdown
          </h4>
          <ul className="list-disc list-inside text-[#0F243DCC] space-y-2">
            <li>Weeks 1: Fundamentals</li>
            <li>Weeks 2: Project 1</li>
            <li>Weeks 3: Project 2</li>
            <li>Weeks 4: Project 3</li>
          </ul>
        </div>
      </div>

      {/* Admission Requirements Section */}
      <div
        className="px-6 mt-6 bg-secondary text-white py-8 rounded-2xl"
        id="admission-requirements"
      >
         <h3 className="sm:text-4xl text-2xl font-semibold mb-4 text-center lg:text-start">
    Admission Requirements
  </h3>
  <p className="max-w-3xl text-center lg:text-start text-lg leading-relaxed">
    <strong>1. A strong drive to learn and apply AI</strong> <br />
    <span className="opacity-90">
      We’re looking for students who are curious, committed, and ready to put in the work.
    </span>
    <br /><br />
    <strong>2. No prior experience required</strong> <br />
    <span className="opacity-90">
      Whether you’re a complete beginner or have some background, we’ll guide you step by step.
    </span>
  </p>
        {/* <h3 className="sm:text-4xl text-2xl font-semibold mb-4 text-center lg:text-start">
          Admission Requirements
        </h3>
        <p className="max-w-3xl text-center lg:text-start text-lg">
          <strong>
            1. Proven Motivation to Learn AI <br />
          </strong>{" "}
           <strong>
            2. Complete beginners are welcomed <br />
          </strong>
        </p> */}
        {/* <p className="max-w-3xl text-center lg:text-start text-lg">
          Complete beginners are welcome
        </p> */}
      </div>
    </section>
  );
};

export default WhatLearn;
