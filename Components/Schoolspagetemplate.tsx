"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    icccTitle?: string;
    icccSubtitle?: string;
    icccLevels?: ICCCLevel[];
    icccCoachImage?: string;
    icccUpcomingCohort?: string;
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
            {/* ─── HERO — side-by-side layout ──────────────────────────── */}
            <section
                className="relative min-h-[550px] flex items-center pt-12 pb-16 bg-gradient-to-b from-white to-[#fdfaf7]"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 w-full">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-5xl md:text-5xl font-bold text-[#8c5a31] leading-tight">
                            {data.heroTitle}
                        </h1>
                        <p className="text-gray-500 text-lg max-w-md">
                            Equip your students for the future with our comprehensive career guidance ecosystem.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href={data.heroCtaLink}
                                className="inline-block px-10 py-3.5 text-white font-semibold rounded text-sm transition-all"
                                style={{ backgroundColor: "#8c5a31" }}
                            >
                                {data.heroCtaText}
                            </Link>
                        </div>
                    </div>

                    {data.heroBg && (
                        <div className="md:w-1/2 flex justify-center items-center">
                            <Image
                                src={data.heroBg}
                                alt={data.heroTitle}
                                width={600}
                                height={500}
                                className="w-full h-auto object-contain max-h-[550px]"
                                priority
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* ─── STATS STRIP ───────────────────────────────────────────── */}
            <section className="bg-white py-12 ">
                <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-2">
                            <img src={s.icon} alt={s.label} className="h-12 w-auto object-contain" />
                            <p className="text-3xl font-bold text-[#8c5a31]">{s.number}</p>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── AWARDS ────────────────────────────────────────────────── */}
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092a51] text-center mb-8">
                        Awards and Recognition
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {data.awards.map((a, i) => (
                            <div key={i} className="flex items-center gap-1 text-center" style={{ maxWidth: 160 }}>
                                {/* Left laurel */}
                                <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#E8B84B">
                                        <ellipse cx="10" cy="8" rx="4" ry="6" transform="rotate(-30 10 8)" />
                                        <ellipse cx="6" cy="16" rx="4" ry="6" transform="rotate(-15 6 16)" />
                                        <ellipse cx="5" cy="25" rx="4" ry="6" transform="rotate(0 5 25)" />
                                        <ellipse cx="7" cy="34" rx="4" ry="6" transform="rotate(15 7 34)" />
                                        <ellipse cx="13" cy="41" rx="4" ry="6" transform="rotate(30 13 41)" />
                                        <rect x="14" y="44" width="6" height="3" rx="1.5" />
                                    </g>
                                </svg>
                                <p className="text-xs text-gray-500 leading-snug flex-1">{a.label}</p>
                                {/* Right laurel (mirrored) */}
                                <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                                    <g fill="#E8B84B">
                                        <ellipse cx="10" cy="8" rx="4" ry="6" transform="rotate(-30 10 8)" />
                                        <ellipse cx="6" cy="16" rx="4" ry="6" transform="rotate(-15 6 16)" />
                                        <ellipse cx="5" cy="25" rx="4" ry="6" transform="rotate(0 5 25)" />
                                        <ellipse cx="7" cy="34" rx="4" ry="6" transform="rotate(15 7 34)" />
                                        <ellipse cx="13" cy="41" rx="4" ry="6" transform="rotate(30 13 41)" />
                                        <rect x="14" y="44" width="6" height="3" rx="1.5" />
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
                                className="text-sm font-semibold text-[#8c5a31] hover:text-[#8c5a31] whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#8c5a31] pb-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* ─── PARTNER INSTITUTIONS ───────────────────────────────────── */}


            {/* ─── ICCC / EDUCATOR CERTIFICATION ─────────────────────────── */}


            {/* ICCC Coach promo banner — separate section */}


            {/* ─── TESTIMONIALS ───────────────────────────────────────────── */}
            <section id="testimonials" className="py-20 px-6 md:px-16 bg-[#f7f9fc]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8c5a31] text-center mb-14">
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
                                                <p className="font-bold text-sm text-[#8c5a31]">{t.name}</p>
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
                                                <p className="font-bold text-sm text-[#8c5a31]">{t.name}</p>
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
                    <p className="text-2xl md:text-3xl font-bold text-[#092a51] text-center  mb-8">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8c5a31] text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-[#8c5a31] text-sm pr-4">{faq.question}</span>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8c5a31] mb-3">{data.contactTitle}</h2>
                    <p className="text-gray-500 text-sm mb-10">{data.contactSubtitle}</p>
                    <form className="text-left space-y-4 bg-[#f7f9fc] p-8 rounded-2xl border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="School / Institution Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c5a31] bg-white" />
                            <input type="text" placeholder="Contact Person Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c5a31] bg-white" />
                            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c5a31] bg-white" />
                            <input type="tel" placeholder="Contact Number" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c5a31] bg-white" />
                        </div>
                        <textarea rows={4} placeholder="Your message..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c5a31] bg-white resize-none" />
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