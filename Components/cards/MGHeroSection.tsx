"use client";

import Image from "next/image";

export default function MentalHealthHero() {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80; // height of sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-6 py-12 px-6 lg:px-16 rounded-3xl">

      {/* LEFT SIDE */}
      <div className="flex-1 bg-[#F7F6F2] rounded-3xl flex flex-col justify-center p-5 md:p-10 text-center">
        
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#0A2A47]">
          We guide &  support your career growth
        </h1>

        {/* Centered Button */}
        <button onClick={handleClick} className="mt-5 mx-auto bg-[#8C3A2F] text-white px-8 py-2 rounded-full text-lg font-medium transition hover:bg-[#6f2f26]">
          Book a Session
        </button>

        {/* Centered + Smaller Text */}
        <p className="mt-10 text-xs tracking-widest text-gray-500 text-center">
          EMPOWERING LIVES AND ELEVATING YOUR CAREER
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1">
        <div className="w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/guide.png"
            alt="Therapy Session"
            width={800}
            height={900}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

    </section>
  );
}
