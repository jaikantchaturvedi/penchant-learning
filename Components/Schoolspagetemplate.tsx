"use client";

import React, { useState } from "react";
import Link from "next/link";
import FooterSection from "@/Components/cards/Footer";

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface SchoolStat {
    icon: string;
    number: string;
    label: string;
}

export interface SchoolAward {
    label: string;
}

export interface SchoolNavLink {
    label: string;
    href: string;
}

export interface PartnerLogo {
    category: "school" | "university";
    name: string;
    image: string;
}

export interface GuideStep {
    icon: string;
    title: string;
    featureImage: string;
    bullets: string[];
}

export interface ICCCLevel {
    level: string;
    icon: string;
    title: string;
    credits: string;
    duration: string;
    description: string;
    bullets: string[];
}

export interface SchoolTestimonial {
    type: "quote" | "story";
    text: string;
    name: string;
    school: string;
    image: string;
    storyLink?: string;
}

export interface CompanyLogo {
    name: string;
    image: string;
}

export interface SchoolFaq {
    question: string;
    answer: string;
}

export interface SchoolsPageData {
    heroBg: string;
    heroTitle: string;
    heroCtaText: string;
    heroCtaLink: string;
    stats: SchoolStat[];
    awards: SchoolAward[];
    navLinks: SchoolNavLink[];
    partnerLogos: PartnerLogo[];
    guideTitle: string;
    guideSteps: GuideStep[];
    icccTitle ?: string;
    icccSubtitle ?: string;
    icccLevels ?: ICCCLevel[];
    icccCoachImage ?: string;
    icccUpcomingCohort ?: string;
    testimonials: SchoolTestimonial[];
    companyLogos: CompanyLogo[];
    faqs: SchoolFaq[];
    contactTitle: string;
    contactSubtitle: string;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const SchoolsPageTemplate: React.FC<{ data: SchoolsPageData }> = ({ data }) => {
    const [activePartnerTab, setActivePartnerTab] = useState<"school" | "university">("school");
    const [openGuideStep, setOpenGuideStep] = useState<number>(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredPartners = data.partnerLogos.filter(p => p.category === activePartnerTab);
    const activeStep = data.guideSteps[openGuideStep];

    return (
        <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>

            {/* ─── HERO — full background image ──────────────────────────── */}
            <section
                className="relative min-h-[520px] flex items-center"
                style={{
                    backgroundImage: `url('${data.heroBg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* dark overlay */}
                <div className="absolute inset-0 opacity-100" />
                <div className="relative z-10 w-full mx-auto px-6 md:px-16 py-24 text-#333">
                    <h1 className="text-5xl md:text-5xl font-bold max-w-4xl md:w-xl leading-tight mb-8">
                        {data.heroTitle}
                    </h1>
                    <Link
                        href={data.heroCtaLink}
                        className="inline-block px-10 py-3.5 text-white font-semibold rounded text-sm transition-all"
                        style={{ backgroundColor: "#8c5a31" }}
                    >
                        {data.heroCtaText}
                    </Link>
                </div>
            </section>

            {/* ─── STATS STRIP ───────────────────────────────────────────── */}
            <section className="bg-white py-12 ">
                <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-2">
                            <img src={s.icon} alt={s.label} className="h-12 w-auto object-contain" />
                            <p className="text-3xl font-bold text-[#092a51]">{s.number}</p>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── AWARDS ────────────────────────────────────────────────── */}
            <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-base font-bold text-gray-800 mb-8">
                Awards and Recognition
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {data.awards.map((a, i) => (
            <div key={i} className="flex items-center gap-1 text-center" style={{ maxWidth: 160 }}>
                    {/* Left laurel */}
            <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#E8B84B">
            <ellipse cx="10" cy="8" rx="4" ry="6" transform="rotate(-30 10 8)"/>
            <ellipse cx="6" cy="16" rx="4" ry="6" transform="rotate(-15 6 16)"/>
            <ellipse cx="5" cy="25" rx="4" ry="6" transform="rotate(0 5 25)"/>
            <ellipse cx="7" cy="34" rx="4" ry="6" transform="rotate(15 7 34)"/>
            <ellipse cx="13" cy="41" rx="4" ry="6" transform="rotate(30 13 41)"/>
            <rect x="14" y="44" width="6" height="3" rx="1.5"/>
            </g>
            </svg>
            <p className="text-xs text-gray-500 leading-snug flex-1">{a.label}</p>
                    {/* Right laurel (mirrored) */}
            <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
            <g fill="#E8B84B">
            <ellipse cx="10" cy="8" rx="4" ry="6" transform="rotate(-30 10 8)"/>
            <ellipse cx="6" cy="16" rx="4" ry="6" transform="rotate(-15 6 16)"/>
            <ellipse cx="5" cy="25" rx="4" ry="6" transform="rotate(0 5 25)"/>
            <ellipse cx="7" cy="34" rx="4" ry="6" transform="rotate(15 7 34)"/>
            <ellipse cx="13" cy="41" rx="4" ry="6" transform="rotate(30 13 41)"/>
            <rect x="14" y="44" width="6" height="3" rx="1.5"/>
            </g>
            </svg>
            </div>
                ))}
            </div>
            </div>
            
            </section>

            {/* ─── STICKY SECTION NAV ─────────────────────────────────────── */}
            <div className="sticky top-0 z-40 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    {/* <div className="flex overflow-x-auto gap-8 py-3.5" style={{ scrollbarWidth: "none" }}>
                        {data.navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-sm font-semibold text-[#092a51] hover:text-[#e67e22] whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#e67e22] pb-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* ─── PARTNER INSTITUTIONS ───────────────────────────────────── */}
            <section id="partners" className="py-20 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] mb-10 text-center">
                        Our Partner Institutions
                    </h2>

                    {/* Tab switcher */}
                    <div className="flex justify-center gap-4 mb-10">
                        <button
                            onClick={() => setActivePartnerTab("school")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${activePartnerTab === "school"
                                ? "bg-[#8c5a31] text-white border-[#8c5a31]"
                                : "border-gray-300 text-gray-600 hover:border-[#8c5a31] hover:text-[#8c5a31]"
                                }`}
                        >
                            250+ Partner Schools
                        </button>
                        <button
                            onClick={() => setActivePartnerTab("university")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${activePartnerTab === "university"
                                ? "bg-[#8c5a31] text-white border-[#8c5a31]"
                                : "border-gray-300 text-gray-600 hover:border-[#8c5a31] hover:text-[#8c5a31]"
                                }`}
                        >
                            50+ Partner Universities
                        </button>
                    </div>

                    {/* Logos grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {filteredPartners.map((logo, i) => (
                            <div
                                key={i}
                                title={logo.name}
                                className="flex flex-col items-center justify-center gap-2 border border-gray-100 rounded-lg p-3 hover:shadow-md hover:border-[#092a51] transition-all"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="h-12 w-full object-contain grayscale hover:grayscale-0 transition-all"
                                />
                                <p className="text-[9px] text-gray-400 text-center leading-tight hidden md:block">{logo.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 12 STEP GUIDE ──────────────────────────────────────────── */}
            <section id="guide" className="py-20 px-6 md:px-16 bg-[#f7f9fc]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] mb-14 text-center">
                        {data.guideTitle}
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left: icon list */}
                        <div className="lg:w-5/12 space-y-1">
                            {data.guideSteps.map((step, i) => (
                                <div key={i}>
                                    <button
                                        onClick={() => setOpenGuideStep(openGuideStep === i ? i : i)}
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-lg text-left transition-all ${openGuideStep === i
                                            ? "bg-white shadow-md border-l-4 border-[#e67e22]"
                                            : "bg-transparent hover:bg-white"
                                            }`}
                                    >
                                        <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain flex-shrink-0" />
                                        <span className={`text-sm font-semibold ${openGuideStep === i ? "text-[#e67e22]" : "text-[#092a51]"}`}>
                                            {step.title}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Right: active step detail */}
                        <div className="lg:w-7/12 bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={activeStep.featureImage}
                                alt={activeStep.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#092a51] mb-5">{activeStep.title}</h3>
                                <ul className="space-y-3 mb-8">
                                    {activeStep.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#8c5a31] flex-shrink-0 mt-2" />
                                            <span className="text-gray-600 text-sm">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={data.heroCtaLink}
                                    className="inline-block px-8 py-3 text-white text-sm font-semibold rounded transition-all"
                                    style={{ backgroundColor: "#8c5a31" }}
                                >
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ICCC / EDUCATOR CERTIFICATION ─────────────────────────── */}
{data.icccLevels && (
    <section id="iccc" className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] text-center mb-3">
                {data.icccTitle}
            </h2>
            <p className="text-gray-500 text-center text-sm mb-14 max-w-2xl mx-auto">
                {data.icccSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.icccLevels.map((level, i) => (
                    <div
                        key={i}
                        className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all relative"
                    >
                        <div className="absolute top-0 left-0 bg-[#8c5a31] text-white text-[10px] font-bold px-4 py-1.5 rounded-tl-2xl rounded-br-xl tracking-widest">
                            {level.level}
                        </div>
                        <div className="flex flex-col items-center text-center mt-6 mb-6">
                            <img src={level.icon} alt={level.title} className="w-12 h-12 object-contain mb-4" />
                            <h3 className="text-lg font-bold text-[#092a51] mb-3">{level.title}</h3>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                <span className="flex items-center gap-1">
                                    <img src="https://mindlerimages.imgix.net/tinyimg/credits-school.svg?w=16" alt="" className="w-3.5 h-3.5" />
                                    {level.credits}
                                </span>
                                <span className="flex items-center gap-1">
                                    <img src="https://mindlerimages.imgix.net/tinyimg/union-school.svg?w=16" alt="" className="w-3.5 h-3.5" />
                                    {level.duration}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mb-5">{level.description}</p>
                        </div>
                        <ul className="space-y-2">
                            {level.bullets.map((b, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e67e22] flex-shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
)}

{/* ICCC Coach promo banner — separate section */}
{data.icccUpcomingCohort && (
    <section className="px-6 md:px-16 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
            <div
                className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center min-h-[180px]"
                style={{ backgroundColor: "#8c5a31" }}
            >
                {/* Left content */}
                <div className="relative z-10 flex-1 px-10 py-10">
                    {/* Logo / badge */}
                    {/* <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-[#8c5a31] flex items-center justify-center text-white font-black text-sm">
                            iCc
                        </div>
                        <div className="text-white text-sm font-semibold leading-tight">
                            International Certified<br />Career Coach
                        </div>
                    </div> */}
                    <div className="flex items-center gap-3 mb-5">
                        <img
                            src="https://mindlerimages.imgix.net/tinyimg/iccc-coach.png"
                            alt="ICCC Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    <h3 className="font-bold text-white text-xl md:text-2xl mb-3 max-w-lg leading-snug">
                        Certification & Credentialing Program for Educators to become Internationally Certified Career Coach
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                        Upcoming Cohort:{" "}
                        <span className="text-white font-semibold">{data.icccUpcomingCohort}</span>
                    </p>
                    <Link
                        href="/iccc"
                        className="inline-block px-8 py-3 text-white text-sm font-semibold rounded transition-all"
                        style={{ backgroundColor: "#8c5a31" }}
                    >
                        Know More
                    </Link>
                </div>

                {/* Right — coach image flush to right edge */}
                <div className="md:absolute md:right-0 md:bottom-0 md:h-full h-full w-full flex items-end md:items-end">
                    <img
                        src={data.icccCoachImage}
                        alt="ICCC Coach"
                        className="h-full w-full md:h-full"
                    />
                </div>
            </div>
        </div>
    </section>
)}

            {/* ─── TESTIMONIALS ───────────────────────────────────────────── */}
            <section id="testimonials" className="py-20 px-6 md:px-16 bg-[#f7f9fc]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] text-center mb-14">
                        Testimonials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                {t.type === "quote" ? (
                                    <>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                        <div className="flex items-center gap-3">
                                            <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#8c5a31]" />
                                            <div>
                                                <p className="font-bold text-sm text-[#092a51]">{t.name}</p>
                                                <p className="text-xs text-gray-400">{t.school}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.text}</p>
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#8c5a31]" />
                                            <div>
                                                <p className="font-bold text-sm text-[#092a51]">{t.name}</p>
                                            </div>
                                        </div>
                                        {t.storyLink && (
                                            <Link href={t.storyLink} className="text-[#8c5a31] text-xs font-semibold hover:underline">
                                                Read full story →
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BROUGHT TO YOU BY ──────────────────────────────────────── */}
            <section className="py-14 px-6 md:px-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                        Brought to you by the People From
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {data.companyLogos.map((c, i) => (
                            <img key={i} src={c.image} alt={c.name} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQs ───────────────────────────────────────────────────── */}
            <section id="faqs" className="py-20 px-6 md:px-16 bg-[#f7f9fc]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-[#092a51] text-sm pr-4">{faq.question}</span>
                                    <span className="text-[#8c5a31] text-lg font-bold flex-shrink-0">
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CONTACT FORM ───────────────────────────────────────────── */}
            <section id="contact" className="py-20 px-6 md:px-16 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] mb-3">{data.contactTitle}</h2>
                    <p className="text-gray-500 text-sm mb-10">{data.contactSubtitle}</p>
                    <form className="text-left space-y-4 bg-[#f7f9fc] p-8 rounded-2xl border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="School / Institution Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#092a51] bg-white" />
                            <input type="text" placeholder="Contact Person Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#092a51] bg-white" />
                            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#092a51] bg-white" />
                            <input type="tel" placeholder="Contact Number" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#092a51] bg-white" />
                        </div>
                        <textarea rows={4} placeholder="Your message..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#092a51] bg-white resize-none" />
                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                className="px-14 py-3.5 text-white text-sm font-semibold rounded-lg transition-all"
                                style={{ backgroundColor: "#8c5a31" }}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};