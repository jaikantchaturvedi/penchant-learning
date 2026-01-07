"use client";

import { useEffect } from "react";
import Link from "next/link";


export default function ThankYouPage() {
  useEffect(() => {
    // Add class when page loads
    document.body.classList.add("thank-you-page");

    // Remove class when page unmounts
    return () => {
      document.body.classList.remove("thank-you-page");
    };
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#F7F6F2]">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg px-8 py-12 text-center">

        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#8C3A2F]/10 flex items-center justify-center">
          <span className="text-4xl">❤️</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#0A2A47] mb-4">
          Thank You for Reaching Out
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
          We truly appreciate your trust.  
          Your message has been received, and our team will connect with you
          shortly to guide you on your journey.
        </p>

        {/* Quote */}
        <p className="text-sm italic text-gray-500 mb-8">
          “Every great journey begins with a single step.”
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2 rounded-full border border-[#8C3A2F] text-[#8C3A2F] font-medium hover:bg-[#8C3A2F] hover:text-white transition"
          >
            Back to Home
          </Link>

          <a
            href="https://wa.me/916378907469"
            target="_blank"
            className="px-6 py-2 rounded-full bg-[#8C3A2F] text-white font-medium hover:bg-[#6f2f26] transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
