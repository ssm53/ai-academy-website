"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyNowModal({ open, onClose }) {
  const backdropRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    email: "",
    study: "college", // "college" | "university"
    institution: "",
    reason: "",
  });

  // status: "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onKey = (e) => {
      // Disable ESC close when showing the success screen
      if (e.key === "Escape" && status !== "success") onClose?.();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, status]);

  const handleBackdropClick = (e) => {
    // Disable backdrop click-to-close when success is shown
    if (status === "success") return;
    if (e.target === backdropRef.current) onClose?.();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.institution || !form.reason) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/new-applicant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: `${form.firstName} ${form.lastName}`,
          whatsapp: form.whatsapp,
          email: form.email,
          study: form.study,
          institution: form.institution,
          reason: form.reason,
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      // Show success screen in the same modal
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
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

            {/* CONTENT: form or success */}
            {status !== "success" ? (
              <>
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

                  <input
                    name="whatsapp"
                    placeholder="WhatsApp"
                    className="w-full p-3 border rounded-lg"
                    value={form.whatsapp}
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
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Submitting…" : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              // Success screen
              <div className="text-center py-6">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Application received</h2>
                <p className="text-gray-700">
                  We will contact you for an interview.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  You can close this window using the <strong>×</strong> button.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
