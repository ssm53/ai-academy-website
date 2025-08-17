"use client";
import {
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="max-w-[1300px] mx-auto py-10 px-6 text-white">
        {/* single centered column on all breakpoints */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Brand */}
          <h2 className="text-2xl font-bold">
            <span className="text-secondary">Zez </span>
            <span className="text-white">Academy</span>
          </h2>

          {/* Contact */}
          <a
            href="https://wa.me/60123397028"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3"
          >
            <FaWhatsapp className="text-xl" />
            <span>+6 012 339 7028</span>
          </a>

          <a
            href="mailto:shaun@zezacademy.com"
            className="flex items-center justify-center gap-3"
          >
            <FaEnvelope className="text-xl" />
            <span>shaun@zezacademy.com</span>
          </a>

          {/* Divider (optional) */}
          {/* <div className="h-px w-24 bg-white/10 my-2" /> */}

          {/* Copyright */}
          <p className="text-sm text-gray-300 mt-2">
            © 2025 Zez Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
