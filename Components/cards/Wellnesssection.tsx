"use client";

import Image from "next/image";
import { useState } from "react";

export default function WellnessSection() {
  const [openModal, setOpenModal] = useState(false);
  const [activeCard, setActiveCard] = useState<
    "individual" | "class9_10" | "class11_12" | "ug_pg" | null
  >(null);

  const popupContent = {
    individual: {
      title: "Individual Psychometric Assessment",
      content: (
        <>
          <p>
            <strong>Career exploration:</strong> Access to well-researched content on
            careers, colleges, courses, exams, and scholarships.
          </p>
          <p className="mt-2">
            <strong>Outcome:</strong> Detailed report with top career recommendations.
          </p>
        </>
      ),
    },

    class9_10: {
      title: "Know Yourself (Class 9–10)",
      content: (
        <>
          <p>
            Career exploration followed by a{" "}
            <strong>3-dimensional assessment</strong> covering aptitude, personality,
            and interests.
          </p>
          <p className="mt-2">
            Includes <strong>one counselling session</strong> to understand yourself
            and suitable career pathways.
          </p>
        </>
      ),
    },

    class11_12: {
      title: "Career Path Program (Class 11–12)",
      content: (
        <>
          <p>
            Scientifically designed 3-dimensional career assessment evaluating
            aptitude, personality, and interests.
          </p>
          <p className="mt-2">
            Comprehensive report with{" "}
            <strong>personalized career recommendations</strong>.
          </p>
          <p className="mt-2">
            Includes <strong>one in-depth, one-hour counselling session</strong>.
          </p>
          <p className="mt-2">
            Dedicated career counselor with <strong>1-year chat support</strong>.
          </p>
        </>
      ),
    },

    ug_pg: {
      title: "Career Transition Program (UG–PG)",
      content: (
        <>
          <p>
            Comprehensive 3-dimensional career assessment across aptitude,
            personality, and interests.
          </p>
          <p className="mt-2">
            Detailed report with{" "}
            <strong>top personalized career recommendations</strong>.
          </p>
          <p className="mt-2">
            Includes <strong>two one-hour counselling sessions</strong>.
          </p>
          <p className="mt-2">
            Dedicated counselor with <strong>1-year chat assistance</strong>.
          </p>
        </>
      ),
    },
  };

  return (
    <>
      <section className="w-full bg-white py-5 md:py-10" id="services">
        <div className="max-w-7xl mx-auto  w-full">
        {/* TOP TEXT */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="uppercase tracking-wide text-[#092a51] text-sm">
            Enhancing your career potential
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#092a51] leading-tight mb-6">
            We support & nurture <br /> lasting change
          </h2>
        </div>

        {/* GRID */}
        <div className="md:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 max-w-7xl mx-auto px-4">

          {/* CARD 1 */}
          <div className="bg-[#8B4436] text-white rounded-3xl p-8 flex flex-col justify-between h-[340px]">
            <div>
              <h3 className="text-3xl sm:text-2xl  font-semibold mb-4">
                Individual psychometric assessment
              </h3>
              <p className="text-lg sm:text-base text-white/90">
                Understand strengths, interests, and career direction.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCard("individual");
                setOpenModal(true);
              }}
              className="underline font-medium self-start"
            >
              Learn More
            </button>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden h-[340px] relative">
            <Image src="/custom-img1.jpeg" alt="" fill className="object-cover" />
          </div>

          {/* CARD 2 */}
          <div className="bg-[#D28B73] text-white rounded-3xl p-8 flex flex-col justify-between h-[340px]">
            <div>
              <h3 className="text-3xl sm:text-2xl font-semibold mb-4">
                Know Yourself (Class 9–10)
              </h3>
              <p className="text-lg sm:text-base text-white/90">
                Early clarity for informed career decisions.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCard("class9_10");
                setOpenModal(true);
              }}
              className="underline font-medium self-start"
            >
              Learn More
            </button>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden h-[340px] relative">
            <Image src="/img 2.png" alt="" fill className="object-cover" />
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden h-[340px] relative">
            <Image src="/img 3.png" alt="" fill className="object-cover" />
          </div>

          {/* CARD 3 */}
          <div className="bg-[#D8B7AB] text-white rounded-3xl p-8 flex flex-col justify-between h-[340px]">
            <div>
              <h3 className="text-3xl sm:text-2xl font-semibold mb-4">
                Career Path (Class 11–12)
              </h3>
              <p className="text-lg sm:text-basetext-white/90">
                Build confidence and shortlist the right path.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCard("class11_12");
                setOpenModal(true);
              }}
              className="underline font-medium self-start"
            >
              Learn More
            </button>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden h-[340px] relative">
            <Image src="/custom-img2.jpeg" alt="" fill className="object-cover" />
          </div>

          {/* CARD 4 */}
          <div className="bg-[#C24E1C] text-white rounded-3xl p-8 flex flex-col justify-between h-[340px]">
            <div>
              <h3 className="text-3xl sm:text-2xl font-semibold mb-4">
                Career Transition (UG–PG)
              </h3>
              <p className="text-lg sm:text-base text-white/90">
                Confidently move to the next stage of your career.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCard("ug_pg");
                setOpenModal(true);
              }}
              className="underline font-medium self-start"
            >
              Learn More
            </button>
          </div>
        </div>
        </div>
      </section>

    {/* POPUP */}
{openModal && activeCard && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" style={{    zIndex: 9990}}>
    <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-12 min-h-[400px] relative flex flex-col justify-between">

      {/* Close */}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-[6px] right-[9px] md:top-6 md:right-6 text-gray-500 hover:text-black md:text-2xl"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-3xl font-bold text-[#092a51] mb-6">
        {popupContent[activeCard].title}
      </h3>

      {/* Content */}
      <div className="text-gray-700 space-y-4 leading-relaxed text-base flex-1 overflow-y-auto pr-2">
        {popupContent[activeCard].content}
      </div>

      <a href="tel:+916378907469" style={{ backgroundColor: "#8c5a31" }} className="px-4 py-2 rounded-full text-white text-sm font-medium whitespace-nowrap w-[114px] mt-[20px]" aria-label="Call Us">Consult Now</a>
      {/* Optional CTA */}
      {/* 
      <button className="mt-8 bg-[#8B4436] text-white py-3 rounded-xl font-medium">
        Get Started
      </button>
      */}
    </div>
  </div>


      )}
    </>
  );
}
