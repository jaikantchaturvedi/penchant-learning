"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

interface ProgramItem {
  title: string;
  subtitle?: string;
  desc: string;
  link: string;
}

interface ProgramCategory {
  category: string;
  isNew?: boolean;
  items: ProgramItem[];
  secondaryCategory?: string;
  secondaryItems?: ProgramItem[];
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  const [megamenuType, setMegamenuType] = useState<"students" | "institutions" | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const router = useRouter();
  const pathname = usePathname();

  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "For Students", id: "students", hasSubmenu: true },
    { label: "For Institutions", id: "institutions", hasSubmenu: true },
    { label: "Services", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Testimonial", id: "testimonial" },
    { label: "Contact Us", id: "contact" },
  ];

  const studentPrograms: ProgramCategory[] = [
    {
      category: "CAREER COUNSELLING PROGRAMS",
      items: [
        {
          title: "Class 8-9",
          subtitle: "Stream & Subject Selection",
          desc: "Advanced assessment & personalised guidance to help you select the perfect stream and subjects that align you to the right careers.",
          link: "/class-8-9"
        },
        {
          title: "Class 10-12",
          subtitle: "Career Selection & Planning",
          desc: "Expert guidance & 5-dimensional assessment to help you discover your perfect career and choose the right course and college.",
          link: "/class-10-12"
        },
        {
          title: "College and Graduates",
          subtitle: "Career Selection & Development",
          desc: "5-dimensional assessment & superior guidance to help you discover your perfect career and choose the best next step.",
          link: "/career-counselling-for-graduates-and-college-students"
        }
      ]
    },
    {
      category: "EXPERIENTIAL CAREER PROGRAMS",
      isNew: true,
      items: [
        {
          title: "Virtual Career Internship",
          desc: "Experiential, immersive self-paced program that helps students experience different careers and gives them practical exposure to these careers.",
          link: "/virtual-career-internships"
        }
      ]
      // secondaryCategory: "COLLEGE APPLICATION PROGRAMS",
      // secondaryItems: [
      //   {
      //     title: "Overseas Application",
      //     desc: "End-to-end overseas admissions guidance to help you build the perfect applications for your target universities.",
      //     link: "/overseas-admissions-counselling"
      //   },
      //   {
      //     title: "Liberal Arts Application",
      //     desc: "Comprehensive guidance and personalised application development for admissions to Liberal Arts programs.",
      //     link: "/liberal-arts-admissions-counselling"
      //   }
      // ]
    }
  ];
  const institutionPrograms: ProgramCategory[] = [
    {
      category: "CAREER DEVELOPMENT PROGRAMS",
      items: [
        {
          title: "In School Career Guidance",
          desc: "State-of-the-art assessment & end-to-end career guidance to help students discover their perfect career.",
          link: "/schools"
        }
      ]
    },
    {
      category: "CAREER ADVANCEMENT PROGRAMS",
      items: [
        // {
        //   title: "Penchant Learning Training Program",
        //   desc: "Expert-led training and comprehensive guidance sessions to help students excel at Penchant Learning conferences.",
        //   link: "/penchant-learning-training"
        // },
        {
          title: "Penchant Learning Talks",
          desc: "Career awareness and inspirational talks for students with professionals who have achieved success in their fields.",
          link: "/penchant-talks"
        }
      ]
    }
  ];

  // Smooth scroll
  const handleScroll = (id: string) => {
    setMobileOpen(false);
    setIsMegamenuOpen(false);

    if (id === "home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  // Active section on scroll — only on homepage where section IDs match nav items
  useEffect(() => {
    if (pathname !== "/") return;

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
  }, [pathname]);

  // Click outside to close contact dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactDropdown(false);
      }
    };
    if (showContactDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showContactDropdown]);

  // Update underline position
  useEffect(() => {
    const updateUnderline = () => {
      // Find the active element
      const activeId = isMegamenuOpen && megamenuType ? megamenuType : active;
      if (!activeId) {
        setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
        return;
      }

      const activeEl = document.getElementById(`nav-${activeId}`);
      if (activeEl) {
        const { offsetLeft, offsetWidth } = activeEl as HTMLElement;
        setUnderlineStyle({
          left: offsetLeft,
          width: offsetWidth,
          opacity: 1
        });
      } else {
        setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateUnderline();
    // Re-run on resize or menu change
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active, isMegamenuOpen, megamenuType]);

  // Update active state based on pathname
  useEffect(() => {
    if (!pathname) return;

    if (pathname === "/") {
      return;
    }

    const isStudentRoute = studentPrograms.some(cat =>
      cat.items.some(item => item.link === pathname) ||
      (cat.secondaryItems && cat.secondaryItems.some(item => item.link === pathname))
    );

    if (isStudentRoute) {
      setActive("students");
      return;
    }

    const isInstitutionRoute = institutionPrograms.some(cat =>
      cat.items.some(item => item.link === pathname)
    );

    if (isInstitutionRoute) {
      setActive("institutions");
      return;
    }

    // Handle other static routes if any
    const menuMatch = menuItems.find(item => item.id !== "home" && !item.hasSubmenu && pathname?.includes(item.id));
    if (menuMatch) {
      setActive(menuMatch.id);
    } else {
      setActive("");
    }
  }, [pathname]);

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center relative">

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
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#333] h-full relative"
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                ref={item.id === "contact" ? dropdownRef : null}
                className="h-full flex items-center"
                onMouseEnter={() => {
                  if (item.hasSubmenu) {
                    setIsMegamenuOpen(true);
                    setMegamenuType(item.id as "students" | "institutions");
                  }
                }}
                onMouseLeave={() => item.hasSubmenu && setIsMegamenuOpen(false)}
              >
                <button
                  id={`nav-${item.id}`}
                  onClick={() => {
                    if (item.id === "contact") {
                      setShowContactDropdown(!showContactDropdown);
                    } else if (!item.hasSubmenu) {
                      handleScroll(item.id);
                    }
                  }}
                  className={`relative transition flex items-center gap-1 h-full ${active === item.id && item.id !== "contact" || (item.hasSubmenu && isMegamenuOpen && megamenuType === item.id)
                    ? "text-[#8c5a31]"
                    : "hover:text-gray-500"
                    }`}
                >
                  {item.label}
                  {item.hasSubmenu && <FiChevronDown className={`transition-transform ${isMegamenuOpen && megamenuType === item.id ? "rotate-180" : ""}`} />}
                  {active === item.id && !item.hasSubmenu && item.id !== "contact" && (
                    <span className="absolute bottom-5 left-0 w-full h-[2.5px] bg-[#8c5a31]" />
                  )}
                </button>
                {item.id === "contact" && showContactDropdown && (
                  <div className="absolute top-full mt-2 w-52 bg-white  shadow-lg overflow-hidden z-50">

                    <a
                      href="https://wa.me/919468643369"
                      target="_blank"
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                      onClick={() => setShowContactDropdown(false)}
                    >
                      WhatsApp
                    </a>

                    <a
                      href="https://www.instagram.com/penchantlearnings/"
                      target="_blank"
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                      onClick={() => setShowContactDropdown(false)}
                    >
                      Instagram
                    </a>

                  </div>
                )}
              </div>
            ))}

            {/* Sliding Underline Indicator */}
            <div
              className="absolute bottom-5 h-[2.5px] bg-[#8c5a31] transition-all duration-300 pointer-events-none"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                opacity: underlineStyle.opacity
              }}
            />

            <a href="https://penchantlearnings.idreamcareer.com" target="_blank" className="hover:text-[#8c5a31] transition-colors ml-4">Start Assessment Now</a>
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
              className="md:hidden text-2xl text-[#333]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Full-Width Megamenu Content */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 origin-top z-50 max-h-[85vh] overflow-y-auto ${isMegamenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"}`}
          onMouseEnter={() => setIsMegamenuOpen(true)}
          onMouseLeave={() => setIsMegamenuOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsMegamenuOpen(false)}
              className="absolute top-4 right-6 text-gray-400 hover:text-[#8c5a31] transition-colors p-2 z-10"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>

            <div className="flex">
              {/* Left Side Content */}
              <div className="flex-[2.5] py-6 pr-10 grid grid-cols-2 gap-12">
                {/* Column 1 */}
                <div className="space-y-6">
                  <h3 className="text-[#ff5c5c] text-[11px] font-bold tracking-wider uppercase border-b border-gray-50 pb-1">
                    {megamenuType === "students" ? studentPrograms[0].category : institutionPrograms[0].category}
                  </h3>
                  <div className="space-y-5">
                    {(megamenuType === "students" ? studentPrograms[0].items : institutionPrograms[0].items).map((prog, idx) => (
                      <div key={idx} className="group/item">
                        <Link href={prog.link} onClick={() => setIsMegamenuOpen(false)}>
                          <h4 className="font-bold text-[#1a1a1a] text-[15px] mb-0.5 group-hover/item:text-[#8c5a31] transition-colors">
                            {prog.title} {prog.subtitle && (
                              <span className="font-normal text-gray-400 text-xs ml-1">{prog.subtitle}</span>
                            )}
                          </h4>
                        </Link>
                        <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                          {prog.desc}
                        </p>
                        <Link
                          href={prog.link}
                          className="text-[#8c5a31] text-[11px] font-bold flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4"
                          onClick={() => setIsMegamenuOpen(false)}
                        >
                          View Program Details <FiArrowRight size={13} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-1">
                      <h3 className="text-[#ff5c5c] text-[11px] font-bold tracking-wider uppercase">
                        {megamenuType === "students" ? studentPrograms[1].category : institutionPrograms[1].category}
                      </h3>
                      {megamenuType === "students" && <span className="bg-[#44cc44] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">NEW!</span>}
                    </div>
                    {(megamenuType === "students" ? studentPrograms[1].items : institutionPrograms[1].items).map((prog, idx) => (
                      <div key={idx} className="group/item">
                        <Link href={prog.link} onClick={() => setIsMegamenuOpen(false)}>
                          <h4 className="font-bold text-[#1a1a1a] text-[15px] mb-0.5 group-hover/item:text-[#8c5a31] transition-colors">{prog.title}</h4>
                        </Link>
                        <p className="text-gray-500 text-[13px] mb-1 leading-relaxed">
                          {prog.desc}
                        </p>
                        <Link
                          href={prog.link}
                          className="text-[#8c5a31] text-[11px] font-bold flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4"
                          onClick={() => setIsMegamenuOpen(false)}
                        >
                          View Program Details <FiArrowRight size={13} />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* {megamenuType === "students" && studentPrograms[1].secondaryCategory && (
                    <div className="mt-2">
                      <h3 className="text-[#ff5c5c] text-[11px] font-bold tracking-wider uppercase border-b border-gray-50 pb-1 mb-4">
                        {studentPrograms[1].secondaryCategory}
                      </h3>
                      <div className="grid grid-cols-1 gap-6">
                        {studentPrograms[1].secondaryItems?.map((prog, idx) => (
                          <div key={idx} className="group/item">
                            <Link href={prog.link} onClick={() => setIsMegamenuOpen(false)}>
                              <h4 className="font-bold text-[#1a1a1a] text-[15px] mb-0.5 group-hover/item:text-[#8c5a31] transition-colors">{prog.title}</h4>
                            </Link>
                            <p className="text-gray-500 text-[13px] mb-1 leading-relaxed">
                              {prog.desc}
                            </p>
                            <Link
                              href={prog.link}
                              className="text-[#8c5a31] text-[11px] font-bold flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4"
                              onClick={() => setIsMegamenuOpen(false)}
                            >
                              View Program Details <FiArrowRight size={13} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}
                </div>
              </div>

              {/* Right Sidebar Content */}
              <div className="flex-1 bg-gray-50/70 border-l border-gray-100 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* WhatsApp redirect on number click */}
                  <Link
                    href="https://wa.me/919468643369"
                    target="_blank"
                    className="flex items-center gap-4 text-[#092a51] hover:text-[#8c5a31] font-bold text-sm transition-colors group/label"
                    onClick={() => setIsMegamenuOpen(false)}
                  >
                    <div className="bg-white p-2.5 rounded-lg group-hover/label:bg-[#8c5a31] group-hover/label:text-white transition-all">
                      <FiPhone size={16} />
                    </div>
                    <span>+91 94686 43369</span>
                  </Link>

                  {/* Email redirect */}
                  <div className="flex items-center gap-4 text-[#092a51] hover:text-[#8c5a31] font-bold text-sm transition-colors group/label">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=penchantlearnings@gmail.com&su=Inquiry&body=Hello%20I%20want%20to%20know%20more"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-[#092a51] hover:text-[#8c5a31] font-bold text-sm transition-colors group/label"
                      onClick={() => setIsMegamenuOpen(false)}
                    >
                      <div className="bg-white p-2.5 rounded-lg group-hover/label:bg-[#8c5a31] group-hover/label:text-white transition-all">
                        <FiMail size={16} />
                      </div>
                      <span>Send a Message</span>
                    </a>
                  </div>
                  <div className="pt-8 border-t border-gray-200/60 space-y-6">
                    <Link
                      href="/success-stories"
                      className="block text-[#092a51] font-bold text-[15px] hover:text-[#8c5a31] flex items-center justify-between group/link"
                      onClick={() => setIsMegamenuOpen(false)}
                    >
                      Success Stories
                      <FiArrowRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#8c5a31]"
                      />
                    </Link>

                    <Link
                      href="/AboutUs"   // 👈 THIS IS THE IMPORTANT CHANGE
                      className="block text-[#092a51] font-bold text-[15px] hover:text-[#8c5a31] flex items-center justify-between group/link"
                      onClick={() => setIsMegamenuOpen(false)}
                    >
                      About Us
                      <FiArrowRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#8c5a31]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-6 flex flex-col gap-6 text-[#333] font-medium">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-left text-lg ${active === item.id ? "text-[#8c5a31]" : ""
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
