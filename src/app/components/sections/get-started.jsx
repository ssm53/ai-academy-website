// // before modal
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";


// const GetStarted = () => {
//   const stepsRef = useRef(null);
//   const stepsInView = useInView(stepsRef, { once: false });

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
//   };

//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <section id="how-to-get-started" className="bg-[#F7F8F9]">
//       <div className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <div className="text-center md:text-left">
//             <h2 className="sm:text-4xl text-2xl font-bold text-primary">
//               Application Process
//             </h2>
//             {/* <p className="text-gray-600 mt-2">
//               Start Your Coding Journey in 1 simple step
//             </p> */}
//           </div>
//           <div className="mt-4 md:mt-0">
//             <a
//               className="bg-secondary sm:w-[190px] w-[160px] h-[50px] text-white font-semibold px-6 py-3 rounded-[5px] hover:bg-secondary"
//               href="/apply-now"
//               target="_blank"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>

//         <motion.div
//           ref={stepsRef}
//           initial="hidden"
//           animate={stepsInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           <motion.div
//             className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
//             variants={fadeInUp}
//           >
//             <div className="flex items-center mb-4">
//               <div className="m:text-[25px] text-auto w-12 h-12 bg-[#F5BB42] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
//                 01
//               </div>
//             </div>
//             <h4 className=" text-xl font-semibold text-gray-700">
//               Fill out the application form{" "}
//               <a
//                 className="underline text-xl font-semibold text-gray-700"
//                 href="/apply-now"
//                 target="_blank"
//               >
//                 HERE
//               </a>
//             </h4>
//             {/* <p className="text-gray-600">
//               It should take you less than 10 minutes. We will get back to you
//               within 3 days if you qualify for the final interview
//             </p> */}
//           </motion.div>

//           <motion.div
//             className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
//             variants={fadeInUp}
//           >
//             <div className="flex items-center mb-4">
//               <div className="sm:text-[25px] text-auto w-12 h-12 bg-[#5BF542] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
//                 02
//               </div>
//             </div>
//             <h4 className=" text-xl font-semibold text-gray-700">Interview</h4>
//             <p className="text-gray-600">
//               A 20-minute interview
//             </p>
//           </motion.div>

//           <motion.div
//             className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
//             variants={fadeInUp}
//           >
//             <div className="flex items-center mb-4">
//               <div className="sm:text-[25px] text-auto w-12 h-12 bg-[#4183F5] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
//                 03
//               </div>
//             </div>
//             <h4 className=" text-xl font-semibold text-gray-700">Acceptance</h4>
//             <p className="text-gray-600">
//               3-5 days after interview
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//       <AnimatePresence>
//         {showPopup && <Popup togglePopup={togglePopup} />}
//       </AnimatePresence>
//     </section>
//   );
// };

// const Popup = ({ togglePopup }) => {
//   // const router = useRouter();

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

// export default GetStarted;

"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ApplyNowModal from "./apply-now-modal"; // adjust path if needed

const GetStarted = () => {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: false });

  const [openApply, setOpenApply] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section id="how-to-get-started" className="bg-[#F7F8F9]">
      <div className="max-w-[1300px] mx-auto py-16 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h2 className="sm:text-4xl text-2xl font-bold text-primary">
              Application Process
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              className="bg-secondary sm:w-[190px] w-[160px] h-[50px] text-white font-semibold px-6 py-3 rounded-[5px] hover:bg-secondary"
              onClick={() => setOpenApply(true)}
              type="button"
            >
              Apply Now
            </button>
          </div>
        </div>

        <motion.div
          ref={stepsRef}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Step 01 */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <div className="sm:text-[25px] text-auto w-12 h-12 bg-[#F5BB42] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                01
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-700">
              Fill out the application form{" "}
              <button
                type="button"
                className="underline text-xl font-semibold text-gray-700"
                onClick={() => setOpenApply(true)}
              >
                HERE
              </button>
            </h4>
          </motion.div>

          {/* Step 02 */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <div className="sm:text-[25px] text-auto w-12 h-12 bg-[#5BF542] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                02
              </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-700">Interview</h4>
            <p className="text-gray-600">A 20-minute interview</p>
          </motion.div>

          {/* Step 03 */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-none sm:shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <div className="sm:text-[25px] text-auto w-12 h-12 bg-[#4183F5] text-white rounded-[8px] flex items-center justify-center font-bold text-lg">
                03
              </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-700">Acceptance</h4>
            <p className="text-gray-600">3–5 days after interview</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Reusable modal */}
      <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
    </section>
  );
};

export default GetStarted;

