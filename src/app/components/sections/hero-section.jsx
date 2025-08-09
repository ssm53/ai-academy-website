// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { CardStackDemo } from "../card-stackdemo";
// import { useRouter } from "next/navigation";
// import Typical from "react-typical";
// const Hero = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   // Define animation variants
//   const textVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.3, yoyo: Infinity }, // Infinite scaling on hover
//     },
//   };
//   return (
//     <section
//       id="home"
//       className="bg-[#0F243D] py-12 pb-16 px-6 w-auto sm:w-full sm:h-[40rem] h-auto flex items-center"
//     >
//       <div className="w-full sm:max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center md:gap-[14rem]">
//         {/* Left Side - Heading and Text */}
//         <div className="w-full">
//           {/* <motion.h1
//             className="text-2xl sm:text-6xl font-bold text-white text-center md:text-left"
//             initial="hidden"
//             animate="visible"
//             variants={textVariants}
//           > */}

//           {/* <Typical
//               className="inline-block"
//               steps={["Z", 1000, "Ze", 1000, "Zez", 1000]}
//               loop={Infinity}
//               wrapper="span"
//             /> */}
//           {/* <span className="text-secondary">Zez </span>
//             <span>Academy&lsquo;s </span>
//             <br className="hidden md:block" />
//             Full Stack <span className="text-secondary">
//               Coding
//             </span> <br /> Program
//           </motion.h1> */}

//           <motion.h1
//             className="text-2xl sm:text-6xl font-bold text-white text-center md:text-left"
//             initial="hidden"
//             animate="visible"
//             variants={textVariants}
//           >
//             {/* <Typical
//               className="inline-block"
//               steps={["Z", 1000, "Ze", 1000, "Zez", 1000]}
//               loop={Infinity}
//               wrapper="span"
//             /> */}
//             <span>Be a</span>{" "}
//             <span className="text-secondary">Full-Stack Developer</span>{" "}
//             <span>in 4 months</span> <br className="hidden md:block" />
//             Get a tech job or its{" "}
//             <span className="text-secondary">100% FREE</span>
//           </motion.h1>

//           {/* <motion.p
//             className="mt-6 text-sm md:text-lg text-gray-300 text-center md:text-left"
//             initial="hidden"
//             animate="visible"
//             variants={textVariants}
//           >
//             Become a Full-Stack Developer in 4 Months and get a developer job.
//             If not, it is 100% FREE.
//           </motion.p> */}
//           <motion.div className="flex items-center mt-6 justify-center md:justify-start">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-green-500 flex-shrink-0"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <motion.p
//               className="ml-2 text-sm md:text-lg text-gray-300 text-center md:text-left"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               For complete beginners
//             </motion.p>
//           </motion.div>
//           <motion.div className="flex items-center mt-6 justify-center md:justify-start">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-green-500 flex-shrink-0"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <motion.p
//               className="ml-2 text-sm md:text-lg text-gray-300 text-center md:text-left"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               Fully remote & need to quit your job
//             </motion.p>
//           </motion.div>
//           <motion.div className="flex items-center mt-6 justify-center md:justify-start">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-green-500 flex-shrink-0"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <motion.p
//               className="ml-2 text-sm md:text-lg text-gray-300 text-center md:text-left"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               Malaysian friendly pricing
//             </motion.p>
//           </motion.div>

//           <motion.div className="flex items-center mt-6 justify-center md:justify-start">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-green-500 flex-shrink-0"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <motion.p
//               className="ml-2 text-sm md:text-lg text-gray-300 text-center md:text-left"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               Career support after graduation
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="mt-6 flex justify-center md:justify-start space-x-4"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.3 }}
//           >
//             {/* <motion.button
//               className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px]"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               Apply Now
//             </motion.button> */}
//             <motion.a
//               href="/apply-now"
//               target="_blank"
//               className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px] text-center"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               Apply Now
//             </motion.a>
//             {/* <motion.button
//               onClick={togglePopup}
//               className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px] text-center"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               Apply Now
//             </motion.button> */}

//             {/* <motion.button
//               onClick={togglePopup}
//               className="w-[150px] sm:w-[193px] h-[50px] bg-white text-sm hover:bg-blue-100 px-6 py-3 rounded-[5px] whitespace-nowrap flex justify-center text-center"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               Get Free Access
//             </motion.button> */}
//           </motion.div>

//           {/* <motion.p
//             className="mt-4 text-xs text-white text-center md:text-left"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             ONLY FOR THOSE WHO GRADUATED LESS THAN 6 YEARS AGO
//           </motion.p> */}

//           {/* Animating the Info Boxes */}
//           {/* <motion.div
//             className="w-auto sm:w-[571px] wh-auto"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-4 mt-6 text-sm text-white sm:divide-y-0 sm:divide-x border border-[#1D436F] rounded-[8px] lg:py-4">
//               <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
//                 Get a developer job or it’s 100% free
//               </div>
//               <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
//                 Remote/on-site options
//               </div>
//               <div className="relative p-[20px] lg:py-0 text-start border-r border-[#1D436F] border-t text-[14px] lg:text-[12px] font-[400] leading-[18px]">
//                 No need to quit your job
//               </div>
//               <div className="relative p-[20px] lg:py-0 text-start border-t border-[#1D436F] text-[14px] lg:text-[12px] font-[400] leading-[18px]">
//                 Flexible payment methods
//               </div>
//             </div>
//           </motion.div> */}
//         </div>
//         {/* Animating the Card Stack */}
//         {/* <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.8, duration: 1 }}
//         >
//           <CardStackDemo />
//         </motion.div> */}
//       </div>

//       <AnimatePresence>
//         {showPopup && <Popup togglePopup={togglePopup} />}
//       </AnimatePresence>
//     </section>
//   );
// };

// const Popup = ({ togglePopup }) => {
//   const router = useRouter();

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     whatsapp: "",
//     reason: "",
//     codingexperience: "I have not written a single line of code",
//     stageofcareer: "I am still in school/college/university",
//     fullorpart: "Self-Paced",
//     remoteoronsite: "Remote",
//   });
//   const [thankYouMessage, setThankYouMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Make sure all required fields are filled
//     if (
//       formData.fullname &&
//       formData.email &&
//       formData.whatsapp &&
//       formData.reason
//     ) {
//       try {
//         const response = await fetch("/api/new-applicant", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           // Set the thank-you message
//           setThankYouMessage(
//             "Thanks for your application. We will notify you within 5 days if you made it to the next stage."
//           );
//         } else {
//           alert("Error submitting the form. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Error submitting the form. Please try again.");
//       }
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({ ...prevData, [name]: value }));
//   // };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
//       <motion.div
//         className="bg-white rounded-lg p-6 w-full max-w-md md:max-w-4xl relative mx-4 md:mx-auto"
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         variants={modalVariants}
//       >
//         <button
//           className="absolute top-3 right-3 text-black font-bold text-2xl"
//           onClick={togglePopup}
//         >
//           &times;
//         </button>

//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 p-6 bg-gray-100 rounded-l-lg">
//             <h2 className="text-2xl font-bold mb-6">We win only if you win</h2>
//             {/* <ul className="list-disc list-inside space-y-4 text-gray-700">
//               <li>
//                 <strong>Job Guarantee</strong> or you get your money-back
//               </li>
//               <li>
//                 <strong>Engaging Video Tutorials:</strong> Easy-to-follow
//                 explainer videos that make coding fun and accessible. Perfect
//                 for beginners!
//               </li>
//               <li>
//                 <strong>Supportive Learning Community:</strong> Connect with
//                 peers, join discussions, and learn together with like-minded
//                 individuals.
//               </li>
//             </ul> */}
//           </div>

//           <div className="md:w-1/2 p-6 bg-white rounded-r-lg">
//             <h2 className="text-2xl font-bold mb-6">
//               Start your coding journey
//             </h2>
//             {thankYouMessage !== "" ? (
//               <div className="p-4 text-center">
//                 <p>{thankYouMessage}</p>
//                 {/* <button
//       onClick={() => {
//         setThankYouMessage(""); // Reset the message when closing
//         // Close the modal here if you have a modal close handler
//       }}
//       className="mt-4 bg-blue-600 text-white p-2 rounded-lg"
//     >
//       Close
//     </button> */}
//               </div>
//             ) : (
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="fullname"
//                   placeholder="Full Name"
//                   className="p-3 border rounded-lg w-full"
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your email"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="whatsapp"
//                   placeholder="Whatsapp Number"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                   required
//                 />
//                 <textarea
//                   name="reason"
//                   placeholder="Why do you want to learn to code?"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                   required
//                 />
//                 <select
//                   name="codingexperience"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                 >
//                   <option value="I have not written a single line of code">
//                     I have not written a single line of code
//                   </option>
//                   <option value="I have done a little bit of coding (Youtube videos/short online course)">
//                     I have done a little bit of coding (Youtube videos/short
//                     online course)
//                   </option>
//                 </select>
//                 <select
//                   name="stageofcareer"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                 >
//                   <option value="I am still in school/college/university">
//                     I am still in school/college/university
//                   </option>
//                   <option value="I have been working for 1-3 years already">
//                     I have been working for 1-3 years already
//                   </option>
//                   <option value="I have been working for 4-10 years already">
//                     I have been working for 4-10 years already
//                   </option>
//                   <option value="I have been working for more than 10 years already">
//                     I have been working for more than 10 years already
//                   </option>
//                   <option value="I am an entrepreneur">
//                     I am an entrepreneur
//                   </option>
//                   <option value="I am currently unemployed">
//                     I am currently unemployed
//                   </option>
//                 </select>
//                 <select
//                   name="fullorpart"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                 >
//                   <option value="Self-Paced">Self-Paced</option>
//                   <option value="Full-Time">Full-Time</option>
//                   <option value="I am not sure yet">I am not sure yet</option>
//                 </select>
//                 <select
//                   name="remoteoronsite"
//                   className="w-full p-3 border rounded-lg"
//                   onChange={handleChange}
//                 >
//                   <option value="Remote">Remote</option>
//                   <option value="On-site">On-site</option>
//                   <option value="I am not sure yet">I am not sure yet</option>
//                 </select>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
//                 >
//                   Apply Now
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { CardStackDemo } from "../card-stackdemo";
import { useRouter } from "next/navigation";
// import Typical from "react-typical";
const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, yoyo: Infinity }, // Infinite scaling on hover
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
  {/* New line - appears above main title on both mobile & desktop */}
  <span className="block text-sm sm:text-xl font-medium text-blue-200 mb-2">
    Only For Malaysian College &amp; Uni Students
  </span>

  {/* For mobile - block layout */}
  <span className="block md:hidden">
    Learn & Build{" "}
    <span className="text-secondary whitespace-nowrap">
      AI Systems in
    </span>
  </span>
  <span className="block md:hidden">in 1 Month</span>

  {/* For desktop - inline layout */}
  <span className="hidden md:inline">Learn & Build</span>{" "}
  <span className="hidden md:inline text-secondary">AI Systems</span>{" "}
  <span className="hidden md:inline">in 1 Month</span>
</motion.h1>



        <motion.div className="flex items-center mt-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            For complete beginners
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            4 Live Remote Classes a Week
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Only 5 students per cohort
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <motion.p
            className="ml-2 text-sm md:text-lg text-gray-300 text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Career support after graduation
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.a
            href="/apply-now"
            target="_blank"
            className="w-[150px] sm:w-[193px] h-[50px] text-sm bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-[5px] text-center"
            variants={buttonVariants}
            whileHover="hover"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Popup = ({ togglePopup }) => {
  const router = useRouter();

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp: "",
    reason: "",
    codingexperience: "I have not written a single line of code",
    stageofcareer: "I am still in school/college/university",
    fullorpart: "Self-Paced",
    remoteoronsite: "Remote",
  });
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure all required fields are filled
    if (
      formData.fullname &&
      formData.email &&
      formData.whatsapp &&
      formData.reason
    ) {
      try {
        const response = await fetch("/api/new-applicant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Set the thank-you message
          setThankYouMessage(
            "Thanks for your application. We will notify you within 5 days if you made it to the next stage."
          );
        } else {
          alert("Error submitting the form. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md md:max-w-4xl relative mx-4 md:mx-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <button
          className="absolute top-3 right-3 text-black font-bold text-2xl"
          onClick={togglePopup}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 bg-gray-100 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-6">We win only if you win</h2>
            {/* <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Job Guarantee</strong> or you get your money-back
              </li>
              <li>
                <strong>Engaging Video Tutorials:</strong> Easy-to-follow
                explainer videos that make coding fun and accessible. Perfect
                for beginners!
              </li>
              <li>
                <strong>Supportive Learning Community:</strong> Connect with
                peers, join discussions, and learn together with like-minded
                individuals.
              </li>
            </ul> */}
          </div>

          <div className="md:w-1/2 p-6 bg-white rounded-r-lg">
            <h2 className="text-2xl font-bold mb-6">
              Start your coding journey
            </h2>
            {thankYouMessage !== "" ? (
              <div className="p-4 text-center">
                <p>{thankYouMessage}</p>
                {/* <button 
      onClick={() => {
        setThankYouMessage(""); // Reset the message when closing
        // Close the modal here if you have a modal close handler
      }} 
      className="mt-4 bg-blue-600 text-white p-2 rounded-lg"
    >
      Close
    </button> */}
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="p-3 border rounded-lg w-full"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Whatsapp Number"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="reason"
                  placeholder="Why do you want to learn to code?"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                  required
                />
                <select
                  name="codingexperience"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="I have not written a single line of code">
                    I have not written a single line of code
                  </option>
                  <option value="I have done a little bit of coding (Youtube videos/short online course)">
                    I have done a little bit of coding (Youtube videos/short
                    online course)
                  </option>
                </select>
                <select
                  name="stageofcareer"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="I am still in school/college/university">
                    I am still in school/college/university
                  </option>
                  <option value="I have been working for 1-3 years already">
                    I have been working for 1-3 years already
                  </option>
                  <option value="I have been working for 4-10 years already">
                    I have been working for 4-10 years already
                  </option>
                  <option value="I have been working for more than 10 years already">
                    I have been working for more than 10 years already
                  </option>
                  <option value="I am an entrepreneur">
                    I am an entrepreneur
                  </option>
                  <option value="I am currently unemployed">
                    I am currently unemployed
                  </option>
                </select>
                <select
                  name="fullorpart"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="I am not sure yet">I am not sure yet</option>
                </select>
                <select
                  name="remoteoronsite"
                  className="w-full p-3 border rounded-lg"
                  onChange={handleChange}
                >
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="I am not sure yet">I am not sure yet</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
