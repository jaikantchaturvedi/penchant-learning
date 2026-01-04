"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
<header className="w-full border-t border-gray-200 bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

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


        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden text-2xl text-[#092a51]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#092a51]">

          {/* Desktop Dropdown */}
          {[
            {
              label: "Home",
              links: [
                { label: "Home 1", href: "/" },
                { label: "Home 2", href: "/" },
              ],
            },
            {
              label: "Pages",
              links: [
                { label: "About", href: "/about" },
                { label: "Team", href: "/team" },
              ],
            },
            {
              label: "Services",
              links: [
                { label: "Web Dev", href: "/services/web" },
                { label: "App Dev", href: "/services/app" },
              ],
            },
            {
              label: "Courses",
              links: [
                { label: "UI/UX", href: "/courses/uiux" },
                { label: "Full Stack", href: "/courses/fullstack" },
              ],
            },
          ].map((item, i) => (
            <div className="relative group" key={i}>
              <button className="flex items-center gap-1 hover:text-gray-500">
                {item.label} <FiChevronDown size={15} />
              </button>

              {/* Dropdown */}
              <div className="absolute bg-white shadow-lg rounded-md p-3 top-7 left-0 w-40 hidden group-hover:block z-50">
                {item.links.map((lnk, j) => (
                  <Link
                    key={j}
                    href={lnk.href}
                    className="block py-1 hover:text-blue-500"
                  >
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-gray-500">
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-full text-white font-medium"
            style={{ backgroundColor: "#d69074" }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-5 shadow-inner animate-slideDown">

          {/* Collapsible Sections */}
          <div className="flex flex-col gap-4 text-[15px] text-[#092a51] font-medium">

            {/* Mobile collapsible items */}
            <MobileMenuSection
              title="Home"
              links={[
                { label: "Home 1", href: "/" },
                { label: "Home 2", href: "/" },
              ]}
            />

            <MobileMenuSection
              title="Pages"
              links={[
                { label: "About", href: "/about" },
                { label: "Team", href: "/team" },
              ]}
            />

            <MobileMenuSection
              title="Services"
              links={[
                { label: "Web Dev", href: "/services/web" },
                { label: "App Dev", href: "/services/app" },
              ]}
            />

            <MobileMenuSection
              title="Courses"
              links={[
                { label: "UI/UX", href: "/courses/uiux" },
                { label: "Full Stack", href: "/courses/fullstack" },
              ]}
            />

            <Link href="/blog" className="py-1">
              Blog
            </Link>

            <Link href="/contact" className="py-1">
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="text-center px-4 py-2 rounded-full text-white font-medium mt-2"
              style={{ backgroundColor: "#d69074" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

interface MenuLink {
  label: string;
  href: string;
}

interface MobileMenuSectionProps {
  title: string;
  links: MenuLink[];
}

function MobileMenuSection({ title, links }: MobileMenuSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full"
        onClick={() => setOpen(!open)}
      >
        {title}
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-4 mt-1 flex flex-col gap-1 text-[14px]">
          {links.map((lnk: MenuLink, idx: number) => (
            <Link
              key={idx}
              href={lnk.href}
              className="py-1 text-gray-700 hover:text-blue-500"
            >
              {lnk.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

