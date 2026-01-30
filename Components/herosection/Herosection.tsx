"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { API_URL } from "@/app/constant";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [location, setLocation] = useState("");
  // const [agree, setAgree] = useState(false);
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

    // if (!agree) {
    //   toast.error("Please accept terms");
    //   return false;
    // }

    return true;
  };
  const router = useRouter();

  // -------- SUBMIT -------- //
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const res =await fetch(`/api/leads`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, telephone, location }),
});

      if (res.status === 409) {
        toast.error("You have already submitted your details.");
        return;
      }


      if (res.ok) {
        toast.success("Message sent successfully! 🎉");

        setName("");
        setEmail("");
        setTelephone("");
        setLocation("");
        setTimeout(() => {
          router.push("/thank-you");
        }, 100);
        // setAgree(false);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <section className="w-full bg-white py-8" id="home">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-start px-6">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-semibold text-[#092a51] leading-tight text-left mt-0">
              Start your journey <br /> from learning to leading
            </h1>

            <p className="mt-2 md:mt-4 text-gray-500 text-lg font-medium max-w-full">
              A welcoming space where expert guidance supports your career journey and personal growth.
            </p>
          </div>

          <div className="relative w-full hidden md:block">
            <Image
              src="/Journey.jpeg"
              alt="Therapy Session"
              width={1200}
              height={1200}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="relative w-full h-[500px] md:h-[640px] rounded-[40px] shadow-lg overflow-hidden">
          <Image
            src="/custom-img-106.jpg"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Centered Form */}
          <div className="absolute inset-0 flex justify-center items-center px-4">
            <div className="bg-[#f7f5ef]/90 rounded-[40px] p-6 w-full max-w-sm flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#092a51] mb-7 text-center">
                You deserve support. First session free!
              </h2>

              {/* Name */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-2 rounded-full px-3 py-2 bg-white border border-gray-200 text-sm text-gray-500"
                placeholder="Name"
              />

              {/* Email */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-2 rounded-full px-3 py-2 bg-white border border-gray-200 text-sm text-gray-500"
                placeholder="Email"
              />

              {/* Telephone */}
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="w-full mb-2 rounded-full px-3 py-2 bg-white border border-gray-200 text-sm text-gray-500"
                placeholder="Telephone"
              />

              {/* Location */}
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full mb-2 rounded-full px-3 py-2 bg-white border border-gray-200 text-sm text-gray-500"
                placeholder="City"
              />

              {/* Agreement */}
              {/* <label className="flex items-start text-xs text-gray-600 mt-1">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mr-2 mt-1"
                />
                I agree that my data is{" "}
                <span className="text-red-700 ml-1">collected and stored.</span>
              </label> */}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full mt-4 py-2 rounded-full bg-[#904437] text-white font-semibold text-base"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full block md:hidden">
          <Image
            src="/Journey.jpeg"
            alt="Therapy Session"
            width={1200}
            height={1200}
            className="rounded-3xl w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}
