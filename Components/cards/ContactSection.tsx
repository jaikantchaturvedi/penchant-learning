"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { API_URL } from "@/app/constant";


const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [location, setLocation] = useState("");
  const [agree, setAgree] = useState(false);
  // -------- VALIDATION -------- //
  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!email.trim() || !email.includes("@")) {
      toast.error("Valid email is required");
      return false;
    }

    if (!telephone.trim()) {
      toast.error("Telephone is required");
      return false;
    }

    if (!agree) {
      toast.error("Please accept terms");
      return false;
    }

    return true;
  };

  // -------- SUBMIT -------- //
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const res = await fetch(`${API_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, telephone, location }),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🎉");

        setName("");
        setEmail("");
        setTelephone("");
        setLocation("");
        setAgree(false);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F7F6F0] px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-[#904437] font-medium mb-3">
            CONTACT US
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#092a51] leading-tight">
            Let’s talk about <br /> your needs
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Have questions or need guidance? Fill out the form and our team will
            connect with you shortly to assist you with the right solutions.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">

          {/* Name */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 rounded-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#904437]"
            placeholder="Name"
          />

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 rounded-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#904437]"
            placeholder="Email"
          />

          {/* Telephone */}
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full mb-3 rounded-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#904437]"
            placeholder="Telephone"
          />

          {/* Location */}
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mb-3 rounded-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#904437]"
            placeholder="Location"
          />

          {/* Agreement */}
          <label className="flex items-start text-xs text-gray-600 mt-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mr-2 mt-1 accent-[#904437]"
            />
            I agree that my data is
            <span className="text-red-700 ml-1">
              collected and stored.
            </span>
          </label>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 py-3 rounded-full bg-[#904437] text-white font-semibold text-base hover:bg-[#7b382d] transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
