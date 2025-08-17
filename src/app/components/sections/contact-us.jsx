"use client";
import {
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ContactUs = () => {
  return (
   <section
  id="contact-us"
  className="max-w-[1300px] mx-auto py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
>
  {/* single-column, centered on all screens */}
  <div className="grid grid-cols-1 place-items-center">
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between h-full w-full max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#0F243DCC]">Contact Us</h2>

      <p className="text-[#0F243DCC] mb-6">
        Hey, Shaun here. Best to contact me on Whatsapp
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/60123397028"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <svg className="text-xl mr-3" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M. . ." /></svg>
            <p className="text-lg font-medium text-[#0F243DCC]">+6 012 339 7028</p>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <a href="mailto:shaun@zezacademy.com" className="flex items-center">
            <svg className="text-xl mr-3" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M. . ." /></svg>
            <p className="text-lg font-medium text-[#0F243DCC]">shaun@zezacademy.com</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactUs;
