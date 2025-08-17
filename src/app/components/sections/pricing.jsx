"use client";
import React, { useState } from "react";
import ApplyNowModal from "./apply-now-modal"; // adjust path if needed

const Pricing = () => {
  const [openApply, setOpenApply] = useState(false);

  return (
    <section id="tuition-fees" className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
      <div className="bg-[#F7F8F9] rounded-[15px] p-8 shadow-md max-w-md mx-auto">
        <h3 className="text-[22px] font-bold text-primary mb-2 text-center">Tuition Fees</h3>
        <h3 className="text-[22px] font-bold text-red-700 mb-4 text-center">
          Price will increase every cohort
        </h3>

        <div className="bg-primary shadow-sm rounded-lg p-6">
          {/* Price */}
          <h4 className="text-4xl font-extrabold text-white text-center">RM 1000</h4>

          {/* Apply Now Button (centered) */}
          <div className="flex justify-center">
            <button
              onClick={() => setOpenApply(true)}
              className="mt-4 bg-secondary hover:bg-primary-dark text-white font-semibold text-center rounded-lg px-6 py-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
    </section>
  );
};

export default Pricing;
