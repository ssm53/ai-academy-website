// import React from "react";

// const Pricing = () => {
//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             How Much does it cost?
//           </h2>
//           <ul className="mt-4 space-y-4 text-gray-700">
//             <li className="text-base sm:text-lg leading-relaxed">
//               • RM 1000/month for 7 months
//             </li>
//             <li className="text-base sm:text-lg leading-relaxed">
//               • RM 5000 (one-time payment)
//             </li>
//           </ul>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <h3 className="text-[22px] font-bold text-primary mb-2">
//             Friends & Family Discount
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">
//             If you are seeing this, you are probably either my family or friend,
//             or a friend of a friend.
//           </p>
//           <div className="bg-primary shadow-sm rounded-lg p-6 relative">
//             {/* Discount Badge */}
//             <div className="absolute top-0 right-0 bg-[#F5BB42] text-darkBlue text-xs font-bold rounded-full px-4 py-1 -mt-4 -mr-4">
//               100% OFF
//             </div>
//             {/* Pricing Box */}
//             {/* <h4 className="text-4xl font-extrabold text-white">
//               $500USD /
//               <span className="text-3xl text-gray-400 line-through ml-2">
//                 $5,000USD
//               </span>
//             </h4> */}
//             <h4 className="text-4xl font-extrabold text-white">
//               RM 0
//               <span className="text-3xl text-gray-400 line-through ml-2">
//                 RM 5000
//               </span>
//             </h4>
//             <p className="mt-2 text-sm text-white">
//               • Only for the first 10 family or friends.
//             </p>

//             {/* Apply Now Button */}
//             <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSdZbUvC0vVXuVLHg5UxAQ11wJSJeVoxtWP_EoIsfZRRUNMo5w/viewform?usp=sf_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Pricing = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };
//   // State for selected payment option
//   const [paymentPlan, setPaymentPlan] = useState("one-time");

//   // Function to handle payment plan change
//   const handlePaymentChange = (e) => {
//     setPaymentPlan(e.target.value);
//   };

//   // Pricing logic based on selected plan
//   const getPriceDetails = () => {
//     switch (paymentPlan) {
//       case "one-time":
//         return {
//           price: "RM 7000",
//           description: "One-time payment",
//         };
//       case "6-months":
//         return {
//           price: "RM 1500/month for 6 months",
//           description: "6-month payment plan",
//         };
//       case "12-months":
//         return {
//           price: "RM 1000/month for 12 months",
//           description: "12-month payment plan",
//         };
//       default:
//         return {
//           price: "RM 7000",
//           description: "One-time payment",
//         };
//     }
//   };

//   const { price, description } = getPriceDetails();

//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             Choose how you want to pay
//           </h2>
//           {/* Payment Plan Options */}
//           <div className="mt-4">
//             <label className="block text-gray-700 mb-2">
//               Select a payment plan:
//             </label>
//             <select
//               value={paymentPlan}
//               onChange={handlePaymentChange}
//               className="w-full p-2 bg-white border border-gray-300 rounded-lg"
//             >
//               <option value="one-time">One-time payment</option>
//               <option value="6-months">Over 6 months</option>
//               <option value="12-months">Over 12 months</option>
//             </select>
//           </div>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <h3 className="text-[22px] font-bold text-primary mb-2">Pricing</h3>
//           <h3 className="text-[22px] font-bold text-red-700 mb-2">
//             These pricings are only for 2024, and it will increase in 2025
//           </h3>
//           <div className="bg-primary shadow-sm rounded-lg p-6 relative">
//             {/* Pricing Box */}
//             <h4 className="text-4xl font-extrabold text-white">{price}</h4>
//             <p className="mt-2 text-sm text-white">{description}</p>

//             {/* Apply Now Button */}
//             <a
//               href="/apply-now"
//               target="_blank"
//               className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
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

// export default Pricing;

// simpler one

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Pricing = () => {
//   // const [showPopup, setShowPopup] = useState(false);
//   const [paymentPlan, setPaymentPlan] = useState("one-time");
//   const [moneyBackGuarantee, setMoneyBackGuarantee] = useState(false); // New state for money-back guarantee

//   // const togglePopup = () => {
//   //   setShowPopup(!showPopup);
//   // };

//   const handlePaymentChange = (e) => {
//     setPaymentPlan(e.target.value);
//   };

//   const handleGuaranteeChange = (e) => {
//     setMoneyBackGuarantee(e.target.checked);
//   };

//   const getPriceDetails = () => {
//     if (!moneyBackGuarantee) {
//       // Prices with money-back guarantee
//       switch (paymentPlan) {
//         case "one-time":
//           return {
//             price: "RM 7000",
//             description: "One-time payment with money-back guarantee",
//           };
//         case "6-months":
//           return {
//             price: "RM 1500/month for 6 months",
//             description: "9-month payment plan with money-back guarantee",
//           };
//         case "12-months":
//           return {
//             price: "RM 1000/month for 12 months",
//             description: "12-month payment plan with money-back guarantee",
//           };
//         default:
//           return {
//             price: "RM 7000",
//             description: "One-time payment with money-back guarantee",
//           };
//       }
//     } else {
//       // Original prices without money-back guarantee
//       switch (paymentPlan) {
//         case "one-time":
//           return {
//             price: "RM 4000",
//             description: "One-time payment",
//           };
//         case "6-months":
//           return {
//             price: "RM 1000/month for 6 months",
//             description: "6-month payment plan",
//           };
//         case "12-months":
//           return {
//             price: "RM 750/month for 12 months",
//             description: "12-month payment plan",
//           };
//         default:
//           return {
//             price: "RM 4000",
//             description: "One-time payment",
//           };
//       }
//     }
//   };

//   const { price, description } = getPriceDetails();

//   return (
//     <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[32px] sm:text-[40px] font-bold text-primary leading-tight">
//             Choose how you want to pay
//           </h2>
//           {/* Payment Plan Options */}
//           <div className="mt-4">
//             <label className="block text-gray-700 mb-2">
//               Select a payment plan:
//             </label>
//             <select
//               value={paymentPlan}
//               onChange={handlePaymentChange}
//               className="w-full p-2 bg-gray-700 text-white border border-gray-300 rounded-lg"
//             >
//               <option value="one-time">One-time payment</option>
//               <option value="6-months">Over 6 months</option>
//               {/* <option value="12-months">Over 12 months</option> */}
//             </select>
//           </div>

//           {/* Money-back Guarantee Option */}
//           <div className="mt-4 flex items-center">
//             <label className="text-blue-700 mr-2 font-bold ">
//               Dont need a job? You want to go down the startup founder/freelance
//               route?
//             </label>

//             <input
//               type="checkbox"
//               checked={moneyBackGuarantee}
//               onChange={handleGuaranteeChange}
//               className="w-4 h-4"
//             />
//           </div>
//         </div>

//         {/* Right Section (Pricing Card) */}
//         <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md">
//           <h3 className="text-[22px] font-bold text-primary mb-2">Pricing</h3>
//           <h3 className="text-[22px] font-bold text-red-700 mb-2">
//             These pricings are only in 2024 for you early birds. It will
//             increase in 2025
//           </h3>
//           <div className="bg-primary shadow-sm rounded-lg p-6 relative">
//             {/* Pricing Box */}
//             <h4 className="text-4xl font-extrabold text-white">{price}</h4>
//             <p className="mt-2 text-sm text-white">{description}</p>

//             {/* Apply Now Button */}
//             <a
//               href="/apply-now"
//               target="_blank"
//               className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* <AnimatePresence>
//         {showPopup && <Popup togglePopup={togglePopup} />}
//       </AnimatePresence> */}
//     </section>
//   );
// };

// export default Pricing;

"use client";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md max-w-md mx-auto">
        <h3 className="text-[22px] font-bold text-primary mb-2">Tuition Fees</h3>
        <h3 className="text-[22px] font-bold text-red-700 mb-4">
          Price will increase every cohort
        </h3>

        <div className="bg-primary shadow-sm rounded-lg p-6">
          {/* Price */}
          <h4 className="text-4xl font-extrabold text-white">RM 1000</h4>
          {/* <p className="mt-2 text-sm text-white">
            One-time payment — lifetime access
          </p> */}

          {/* Apply Now Button */}
          <a
            href="/apply-now"
            target="_blank"
            className="inline-block mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

