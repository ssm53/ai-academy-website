"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import the icons

const faqs = [
  {
    question: "Do I need any coding experience  bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "How long is the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "What do I need to bring to the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "Is the bootcamp remote or in-person?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "What projects will I build during the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "Are there any prerequisites to join?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
  {
    question: "What happens after completing the bootcamp?",
    answer:
      "Lorem ipsum dolor sit amet lorem consectetur pretium neque lorem ipsum dolor sit amet consectetur pretium neque.",
  },
];

export default function FaqAccordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-[#F7F8F9]">
      <section className=" max-w-[1300px] mx-auto px-6 md:px-16 lg:px-32 py-16">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Got questions? We&rsquo;ve got answers! Here&apos;s everything you
          need to know <br />
          before joining.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border shadow-md bg-white rounded-lg pb-4"
              style={{ borderRadius: "10px" }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left flex justify-between items-center py-4 px-6 focus:outline-none"
              >
                <span className=" font-semibold text-[15px] sm:text-lg text-lightGray">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-secondary" /> // Use arrow up for expanded
                  ) : (
                    <FaChevronDown className="text-secondary" /> // Use arrow down for collapsed
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden  transition-all duration-100 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 pt-2 px-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
