// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion"; // Optional for more complex animations

// const OurFounder = () => {
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef(null);

//   // Using Intersection Observer to detect when the section is in view
//   useEffect(() => {
//     const currentSectionRef = sectionRef.current; // Store the current ref value

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true); // Trigger animation
//         } else {
//           setIsInView(false); // Optionally remove animation when out of view
//         }
//       },
//       { threshold: 0.3 } // Adjust threshold for when the animation should trigger
//     );

//     if (currentSectionRef) {
//       observer.observe(currentSectionRef);
//     }

//     return () => {
//       if (currentSectionRef) {
//         observer.unobserve(currentSectionRef); // Use the stored ref value
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="our-founder"
//       ref={sectionRef}
//       className="bg-primary py-16 px-4 lg:px-0"
//     >
//       <div className="max-w-[1300px] mx-auto lg:flex lg:items-center">
//         <motion.div
//           className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 ${
//             isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
//           }`}
//         >
//           <div className="relative rounded-lg overflow-hidden shadow-lg">
//             {/* <Image
//               src="/founder.svg"
//               alt="Founder presenting"
//               width={800}
//               height={450}
//               className="object-cover w-full h-full"
//               priority
//             /> */}
//             <img
//               src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1729196914/bootcamp-website/images/g1rounbqbfvvxil84ec0.jpg"
//               alt="Founder presenting"
//               width={800}
//               height={450}
//               className="object-cover w-full h-full"
//               priority
//             />
//             {/* <a
//               href="https://www.youtube.com/watch?v=HF0iqQ2ZzFU&t=2s"
//               className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
//               aria-label="Play video"
//             >
//               <svg
//                 className="w-16 h-16 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M8 5v14l11-7L8 5z" />
//               </svg>
//             </a> */}
//           </div>
//         </motion.div>

//         <motion.div
//           className={`lg:w-1/2 lg:pl-12 text-white transform transition-all duration-1000 ${
//             isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
//           }`}
//         >
//           {/* <h4 className="text-[15px] sm:text-[25px] font-semibold text-white uppercase mb-1">
//             About Founder
//           </h4>
//           <h2 className="text-[25px] sm:text-[48px] font-bold">Our Founder</h2> */}
//           <p className="text-lg font-medium mb-4">
//             Hey peeps, I&apos;m Shaun, founder of{" "}
//             <span className="font-bold">Zez Academy</span>
//           </p>
//           <p className="mb-4 text-[#E9EAEB]">
//             <p className="mb-4 text-[#E9EAEB]">
//               Learning to code and being in tech industry sounds real nice BUT{" "}
//               <ul className="mb-4 text-[#E9EAEB] list-disc pl-5">
//                 <li>
//                   A degree or masters is too expensive and too long for most.
//                 </li>
//                 <li>
//                   Most proper coding programs are expensive (above RM30,000).
//                 </li>
//                 <li>Most free tutorials don’t guide you when you are stuck.</li>
//                 <li>
//                   Most people can’t commit to learning something new full-time
//                   as they are studying or working.
//                 </li>
//               </ul>
//               At Zez Academy, my aim is to guarantee that you learn how to code,
//               and get a tech job or its 100% free, without those annoying pain
//               points above, cause Ive gone through them myself, and it is not
//               fun.
//             </p>
//             I was an accountant working at Deloitte, UK and it was great, but I
//             was bored and unsatisfied. So, I left my job to start a crypto
//             startup which did 7-figure profits in 2021, but it ultimately failed
//             in 2022/2023. I was abit lost and I did not want to go back to
//             accounting, but that was the only skill I had!
//           </p>
//           <p className="mb-4 text-[#E9EAEB]">
//             So, in Aug 2023, I picked up coding seriously, and by Dec 2023, I
//             had 4 software developer job offers. This was done without a Degree
//             or a Master&lsquo;s. Its not as hard as you think. You just need
//             structure.
//           </p>

//           <p className="mb-6 text-[#E9EAEB]">
//             I currently run a tech agency focusing on the medical insustry in
//             Malaysia. We built softwares for various clinic, and now, we are the
//             tech partner of all 37 branches of Permai Polyclinics, one of the
//             largest franchise clinics in Malaysia.
//           </p>
//           <p className="mb-6 text-[#E9EAEB]">
//             Im also building EZLA (funding secured), an AI powered software that
//             generates personalised job specific cover letters and resumes under
//             1 minute. It is in beta mode and is launching in Q4 2024.
//           </p>
//           {/* <p className="mb-6 text-[#E9EAEB]">
//             You can find more of what I do{" "}
//             <a
//               href="https://www.ravewavedigital.com/personal-page"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline"
//             >
//               here
//             </a>
//             .
//           </p> */}
//           <div className="flex space-x-4">
//             <a
//               href="https://www.linkedin.com/in/shaun"
//               className="bg-white text-primary font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M22.23 0H1.77C.792 0 0 .774 0 1.733v20.534C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.733V1.733C24 .774 23.208 0 22.23 0zM7.09 20.452H3.557V9.036H7.09v11.416zM5.324 7.732a2.04 2.04 0 01-2.05-2.05 2.047 2.047 0 012.05-2.049 2.05 2.05 0 010 4.099zm15.129 12.72h-3.533v-5.564c0-1.329-.024-3.04-1.855-3.04-1.858 0-2.143 1.45-2.143 2.947v5.657H9.388V9.036h3.39v1.563h.048c.472-.894 1.625-1.835 3.345-1.835 3.575 0 4.233 2.352 4.233 5.41v6.278z" />
//               </svg>
//               <span>LinkedIn</span>
//             </a>
//             {/* <a
//               href="/founder-details"
//               className="text-secondary border border-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition"
//             >
//               Learn More
//             </a> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurFounder;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Optional for more complex animations

const OurFounder = () => {
  const [isInView, setIsInView] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const sectionRef = useRef(null);

  // Using Intersection Observer to detect when the section is in view
  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation
        } else {
          setIsInView(false); // Optionally remove animation when out of view
        }
      },
      { threshold: 0.3 } // Adjust threshold for when the animation should trigger
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Use the stored ref value
      }
    };
  }, []);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <section
      id="our-founder"
      ref={sectionRef}
      className="bg-primary py-16 px-4 lg:px-0"
    >
      <div className="max-w-[1300px] mx-auto lg:flex lg:items-center">
        <motion.div
          className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1729196914/bootcamp-website/images/g1rounbqbfvvxil84ec0.jpg"
              alt="Founder presenting"
              width={800}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className={`lg:w-1/2 lg:pl-12 text-white transform transition-all duration-1000 ${
            isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <p className="text-lg font-medium mb-4">
            Hey, I&apos;m Shaun, founder of{" "}
            <span className="font-bold">Zez Academy</span>
          </p>
          <p className="mb-4 text-[#E9EAEB]">
            I was not a tech guy at all. I was an auditor at Deloitte, UK before learning tech and building software{" "}
          </p>
          <ul className="mb-4 text-[#E9EAEB] list-disc pl-5">
            <li>Co-founded a 7-figure crypto startup</li>
            <li>Currently building AI automations for a VC-backed Singaporen start-up</li>
            <li>
              Built & sold software to 40+ clinics
            </li>
          </ul>
          <p className="mb-4 text-[#E9EAEB] underline font-bold text-lg">
            My Aim For You
          </p>
          <p className="mb-4 text-[#E9EAEB]">
            Actually learn and build AI systems that work. Impress universities/recruiters or start your entrepreneurial journey This is done through live classes as learning solo is very difficult.
          </p>
          {/* {showFullText ? (
            <>
              <p className="mb-4 text-[#E9EAEB] underline font-bold text-lg">
                My Story
              </p>
              <p className="mb-4 text-[#E9EAEB]">
                I was an accountant working at Deloitte, UK and it was great,
                but I was bored and unsatisfied. So, I left my job to start a
                crypto startup which had a 7-figure profit in 2021, but it
                ultimately failed in 2022/2023. I was a bit lost and I did not
                want to go back to accounting, but that was the only skill I
                had!
              </p>
              <p className="mb-6 text-[#E9EAEB]">
                So, in Aug 2023, I picked up coding seriously, and by Dec 2023,
                I had 4 software developer job offers. This was done without a
                Degree or a Master’s. It&lsquo;s not as hard as you think. You
                just need structure.
              </p>
              <p className="mb-6 text-[#E9EAEB]">
                I currently run a tech agency focusing on the medical industry
                in Malaysia. We built software for various clinics, and now, we
                are the tech partner of all 37 branches of Permai Polyclinics,
                one of the largest franchise clinics in Malaysia.
              </p>
              <p className="mb-6 text-[#E9EAEB]">
                I&lsquo;m also building EZLA (funding secured), an AI-powered
                software that generates personalized job-specific cover letters
                and resumes in under 1 minute. It is in beta mode and is
                launching in Q4 2024.
              </p>
              <a
                href="https://www.linkedin.com/in/shaun"
                target="_blank"
                className="bg-white text-primary font-medium py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition w-max" // Add w-max to limit width to content
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.733v20.534C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.733V1.733C24 .774 23.208 0 22.23 0zM7.09 20.452H3.557V9.036H7.09v11.416zM5.324 7.732a2.04 2.04 0 01-2.05-2.05 2.047 2.047 0 012.05-2.049 2.05 2.05 0 010 4.099zm15.129 12.72h-3.533v-5.564c0-1.329-.024-3.04-1.855-3.04-1.858 0-2.143 1.45-2.143 2.947v5.657H9.388V9.036h3.39v1.563h.048c.472-.894 1.625-1.835 3.345-1.835 3.575 0 4.233 2.352 4.233 5.41v6.278z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <button
                onClick={toggleText}
                className="text-blue-500 hover:underline"
              >
                See Less ▲
              </button>
            </>
          ) : (
            <button
              onClick={toggleText}
              className="text-blue-500 hover:underline"
            >
              See My Story ▼
            </button>
          )} */}
        </motion.div>
      </div>
    </section>
  );
};

export default OurFounder;
