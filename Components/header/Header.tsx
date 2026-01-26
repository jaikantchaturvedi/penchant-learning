"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Testimonial", id: "testimonial" },
    { label: "Contact Us", id: "contact" },
  ];

  // Smooth scroll
  const handleScroll = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Active section on scroll
  useEffect(() => {
    const onScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(item.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={80}
              className="h-30 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#092a51]">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative transition ${
                  active === item.id
                    ? "text-[#8c5a31]"
                    : "hover:text-gray-500"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#8c5a31]" />
                )}
              </button>
            ))}

            <a href="https://penchantlearnings.idreamcareer.com" target="_blank">Start Assessment Now</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Connect Us Button */}
            <button
              onClick={() => handleScroll("contact")}
              className="px-4 py-2 rounded-full text-white text-sm font-medium whitespace-nowrap"
              style={{ backgroundColor: "#8c5a31" }}
            >
              Consult Now
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden text-2xl text-[#092a51]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6 text-[#092a51] font-medium">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-left text-lg ${
                  active === item.id ? "text-[#8c5a31]" : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            <a href="https://penchantlearnings.idreamcareer.com" target="_blank">Start Assessment Now</a>
            <button
              onClick={() => handleScroll("contact")}
              className="mt-4 px-5 py-3 rounded-full text-white font-medium"
              style={{ backgroundColor: "#8c5a31" }}
            >
              Consult Now
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for sticky header */}
      {/* <div className="h-16" /> */}
    </>
  );
}
