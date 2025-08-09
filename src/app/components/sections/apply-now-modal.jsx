"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyNowModal({ open, onClose }) {
  const backdropRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    study: "college",          // "college" | "university"
    institution: "",
    reason: "",
  });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // basic required fields check
    if (!form.firstName || !form.lastName || !form.email || !form.institution || !form.reason) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/new-applicant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: `${form.firstName} ${form.lastName}`,
          email: form.email,
          whatsapp: "", // optional/not collected here
          reason: form.reason,
          codingexperience: "I have not written a single line of code",
          stageofcareer: form.study === "college" ? "I am still in school/college/university" : "I am still in school/college/university",
          fullorpart: "Self-Paced",
          remoteoronsite: "Remote",
          study: form.study,
          institution: form.institution,
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      alert("Thanks for your application! We’ll get back within 5 days.");
      onClose?.();
    } catch (err) {
      console.error(err);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onMouseDown={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="w-full max-w-lg rounded-2xl bg-white p-6 relative"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Apply Now</h2>

            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="firstName"
                  placeholder="First name *"
                  className="w-full p-3 border rounded-lg"
                  value={form.firstName}
                  onChange={onChange}
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last name *"
                  className="w-full p-3 border rounded-lg"
                  value={form.lastName}
                  onChange={onChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full p-3 border rounded-lg"
                value={form.email}
                onChange={onChange}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  name="study"
                  className="w-full p-3 border rounded-lg"
                  value={form.study}
                  onChange={onChange}
                >
                  <option value="college">College</option>
                  <option value="university">University</option>
                </select>

                <input
                  name="institution"
                  placeholder="College/University name *"
                  className="w-full p-3 border rounded-lg"
                  value={form.institution}
                  onChange={onChange}
                  required
                />
              </div>

              <textarea
                name="reason"
                placeholder="Why do you want to join? *"
                className="w-full p-3 border rounded-lg"
                value={form.reason}
                onChange={onChange}
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
