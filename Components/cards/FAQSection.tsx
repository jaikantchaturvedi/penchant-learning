"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
  id: "01",
  question: "How we support your journey?",
  answer:
    "3 Steps to Boost Your Career:\n\n" +
    "STEP 1 – Assess: Discover your strengths with a psychometric test\n" +
    "STEP 2 – Explore: Get expert guidance online or in-person\n" +
    "STEP 3 – Act: Turn your career plan into action",
},

  {
    id: "02",
    question: "How can I contact?",
    answer: "For any queries, please contact us through email or phone, or connect with us on LinkedIn or Instagram ",
  },
  {
    id: "03",
    question: "Our approach?",
    answer:
      "We take tailored approach to career counselling, ensuring that guidance is aligned with your individual goals and life stage. ",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden" id="faq">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        {/* <h1 className="text-sm sm:text-base text-[#032e61] mb-3 sm:mb-5 uppercase tracking-wider break-words">
          Your Questions, Answered
        </h1> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#032e61] break-words leading-tight">
          Frequently asked questions
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-12 border-t-2 border-[#032e61] w-full">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className="border-b border-gray-200 w-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 sm:py-8 md:py-10 flex items-start justify-between text-left gap-3 sm:gap-4 min-w-0"
                >
                  <div className="flex items-start gap-3 sm:gap-6 md:gap-10 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#032e61] opacity-60 flex-shrink-0">
                      {item.id}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#032e61] break-words pr-2">
                        {item.question}
                      </h3>

                      {/* Animated Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-500`}
                        style={{
                          maxHeight: isOpen ? "300px" : "0px",
                        }}
                      >
                        <p
                          className={`mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg leading-relaxed transition-opacity duration-500 break-words pr-2 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#8c5a31] text-white flex-shrink-0">
                    {isOpen ? (
                      <Minus size={18} className="sm:w-[22px] sm:h-[22px]" />
                    ) : (
                      <Plus size={18} className="sm:w-[22px] sm:h-[22px]" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}