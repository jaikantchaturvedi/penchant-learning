"use client";

import Image from "next/image";
import { useState } from "react";

// ✅ Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface TestimonialCardProps {
  stars?: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({
  stars = 5,
  text,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 rounded-2xl sm:rounded-3xl w-full h-full flex flex-col">

      {/* Stars */}
      <div className="flex gap-1 mb-4 sm:mb-5">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-[#ED8A19] text-lg sm:text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p
          className={`text-base sm:text-lg font-semibold text-[#032e61] break-words leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-4"
            }`}
        >
          {text}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm font-medium text-[#8c5a31] hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[#032e61] font-semibold text-base sm:text-lg break-words">
            {name}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm break-words">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      stars: 5,
      text: "I had a very good experience with the counseling. The counselor was supportive, patient, and explained everything clearly. Proper guidance was given according to my goals, and all my doubts were addressed honestly. The session helped me gain clarity and confidence in my decisions.",
      name: "Devesh Gupta",
      role: "Student",
      avatar: "/userimge.jpeg",
    },
    {
      stars: 5,
      text: "The career counseling sessions were absolutely excellent. I went in feeling completely lost, but the counselor's insights provided a clear roadmap for my future career. I now feel confident and motivated about my path.",
      name: "Anushka Jain",
      role: "Student",
      avatar: "/userimage1.jpg",
    },
    {
      stars: 5,
      text: "An excellent experience. The counselor was professional, patient, and provided practical, tailored advice that made navigating my career transition so much smoother.",
      name: "Syed amil ali",
      role: "Professional",
      avatar: "/userimage2.jpeg",
    },
    {
      stars: 5,
      text: "Career counselling provides the process and structure, while the counsellor ensures personalized attention and practical implementation.",
      name: "Akshita Khandelwal",
      role: "Student",
      avatar: "/userimage3.jpeg",
    },
  ];

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 flex justify-center px-4 sm:px-6 overflow-visible"
      id="testimonial"
    >
      {/* Yellow container */}
      <div className="bg-[#F7F6F0] max-w-7xl w-full rounded-2xl px-6 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-end items-start w-full mb-10 sm:mb-12 md:mb-16 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#0A2A54] text-left lg:text-right max-w-3xl">
            <span className="block">Real Stories. Real Success.</span>
            <span className="block">Discover Listener Today</span>
          </h1>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button className="swiper-button-prev-custom absolute -left-15 top-1/2 z-10 -translate-y-1/2 bg-[#8c5a31] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button className="swiper-button-next-custom absolute -right-15 top-1/2 z-10 -translate-y-1/2 bg-[#8c5a31] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            ›
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;