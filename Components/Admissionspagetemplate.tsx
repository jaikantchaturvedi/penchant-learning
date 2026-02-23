"use client";

import React, { useState } from "react";
import FooterSection from "@/Components/cards/Footer";
import Link from "next/link";
import Image from "next/image";

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface AdmissionsHero {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    navLinks: { label: string; href: string }[];
    backgroundImage?: string;
}

export interface AdmissionsProgramFeature {
    icon: any;
    title: string;
    description: string;
}

export interface AdmissionsHowItWorksStep {
    number: number;
    sectionLabel: string;
    title: string;
    bullets: { heading: string; desc: string }[];
    image: string;
}

export interface UniversityLogo {
    name: string;
    image: string;
}

export interface ApplicationTab {
    label: string;
}

export interface ApplicationProgram {
    type: string;       // e.g. "Undergraduate Admissions"
    region: string;     // e.g. "USA"
    title: string;
    description: string;
    features: string[];
}

export interface AdmissionsTestimonial {
    text: string;
    author: string;
    image: string;
}

export interface AdmissionsFaq {
    question: string;
    answer: string;
}

export interface AdmissionsContact {
    title: string;
    subtitle: string;
    queryOptions: string[];
    buttonText: string;
    phoneImage?: string;
}

export interface AdmissionsPageData {
    hero: AdmissionsHero;
    programSectionTitle: string;
    programFeatures: AdmissionsProgramFeature[];
    howItWorks?: AdmissionsHowItWorksStep[];
    universities?: UniversityLogo[];
    universityTitle?: string;
    applicationPrograms?: ApplicationProgram[];
    testimonials: AdmissionsTestimonial[];
    faqs: AdmissionsFaq[];
    contact: AdmissionsContact;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

interface Props {
    data: AdmissionsPageData;
}

export const AdmissionsPageTemplate: React.FC<Props> = ({ data }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeRegion, setActiveRegion] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Derive unique tab labels
    const typeLabels = data.applicationPrograms
        ? [...new Set(data.applicationPrograms.map(p => p.type))]
        : [];
    const regionLabels = data.applicationPrograms
        ? [...new Set(data.applicationPrograms.map(p => p.region))]
        : [];

    const activeProgram = data.applicationPrograms?.find(
        p => p.type === typeLabels[activeType] && p.region === regionLabels[activeRegion]
    );

    return (
        <div className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-800">

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section
                className="relative pt-16 pb-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#fdfaf7]"
                style={
                    data.hero.backgroundImage
                        ? { backgroundImage: `url("${data.hero.backgroundImage}")`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right" }
                        : undefined
                }
            >
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#333] leading-tight max-w-4xl mb-4">
                        {data.hero.title}
                    </h1>
                    <p className="text-gray-500 text-lg max-w-lg mb-8">
                        {data.hero.subtitle}
                    </p>
                    </div>
                   
                    <Link
                        href={data.hero.ctaLink}
                        className="inline-block px-10 py-3 text-white font-bold rounded shadow-md hover:brightness-110 transition-all mb-10"
                        style={{ backgroundColor: "#8c5a31" }}
                    >
                        {data.hero.ctaText}
                    </Link>

                </div>
                    {/* Nav links strip */}
                    < div className="flex flex-wrap justify-center w-full absolute bottom-[7px] gap-x-8 gap-y-2 border-t border-gray-100 pt-6">
                        {data.hero.navLinks.map((link, i) => (
                            <Link key={i} href={link.href} className="text-[#007dab] font-semibold text-sm hover:underline">
                                {link.label}
                            </Link>
                        ))}
                    </div>
            </section>

            {/* ── ABOUT THE PROGRAM ─────────────────────────────────────────── */}
            <section className="py-20 px-6 md:px-12 bg-[#8c5a31]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white text-center mb-14">
                        {data.programSectionTitle}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {data.programFeatures.map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-[#8c5a31]">
                                    <feature.icon size={30} />
                                </div>
                                <h3 className="text-white font-bold text-base">{feature.title}</h3>
                                <p className="text-white text-sm opacity-80 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS (accordion — overseas only) ──────────────────── */}
            {data.howItWorks && data.howItWorks.length > 0 && (
                <section id="how" className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#092a51] text-center mb-16">
                            How We Help You Achieve Your Overseas Education Dream
                        </h2>

                        {/* Step tabs */}
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/3 space-y-3">
                                {data.howItWorks.map((step, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all font-bold text-sm ${activeStep === i
                                            ? "border-[#8c5a31] bg-[#fdf3ea] text-[#8c5a31]"
                                            : "border-gray-100 text-gray-500 hover:border-gray-200"
                                            }`}
                                    >
                                        <span className="text-2xl font-black mr-3 opacity-30">{step.number}.</span>
                                        {step.title}
                                    </button>
                                ))}
                            </div>

                            {/* Active step content */}
                            <div className="md:w-2/3 flex flex-col md:flex-row gap-8">
                                <div className="flex-1 space-y-6">
                                    <p className="text-xs font-bold text-[#8c5a31] uppercase tracking-widest">
                                        {data.howItWorks[activeStep].sectionLabel}
                                    </p>
                                    {data.howItWorks[activeStep].bullets.map((b, i) => (
                                        <div key={i}>
                                            <h4 className="font-bold text-gray-800 mb-1">{b.heading}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                        </div>
                                    ))}
                                    <Link
                                        href={data.hero.ctaLink}
                                        className="inline-block mt-4 px-8 py-2.5 border-2 border-[#8c5a31] text-[#8c5a31] font-bold rounded hover:bg-[#8c5a31] hover:text-white transition-all text-sm"
                                    >
                                        I am Interested
                                    </Link>
                                </div>
                                <div className="md:w-48 flex-shrink-0">
                                    <Image
                                        src={data.howItWorks[activeStep].image}
                                        alt={data.howItWorks[activeStep].title}
                                        width={200}
                                        height={200}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── UNIVERSITY LOGOS ──────────────────────────────────────────── */}
            {data.universities && data.universities.length > 0 && (
                <section className="py-16 px-6 md:px-12 bg-[#f9fafb]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-semibold text-[#092a51] text-center mb-12">
                            {data.universityTitle || "Successful Applications At"}
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {data.universities.map((uni, i) => (
                                <div key={i} className="w-24 h-16 flex items-center justify-center">
                                    <Image
                                        src={uni.image}
                                        alt={uni.name}
                                        width={96}
                                        height={64}
                                        className="object-contain grayscale hover:grayscale-0 transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── APPLICATION PROGRAMS TABS ─────────────────────────────────── */}
            {data.applicationPrograms && data.applicationPrograms.length > 0 && (
                <section id="programs" className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#092a51] text-center mb-4">
                            Our Application Programs
                        </h2>
                        <p className="text-gray-500 text-center mb-12">
                            Personalised, expert services to guide you through every step in the overseas admissions process.
                        </p>

                        {/* Type tabs */}
                        <div className="flex flex-wrap gap-3 mb-6 justify-center">
                            {typeLabels.map((label, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveType(i); setActiveRegion(0); }}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${activeType === i
                                        ? "bg-[#8c5a31] text-white border-[#8c5a31]"
                                        : "border-gray-200 text-gray-500 hover:border-[#8c5a31]"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Region tabs */}
                        <div className="flex flex-wrap gap-3 mb-10 justify-center">
                            {regionLabels.map((label, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveRegion(i)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${activeRegion === i
                                        ? "border-[#8c5a31] text-[#8c5a31]"
                                        : "border-gray-200 text-gray-400 hover:border-gray-400"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Program content */}
                        {activeProgram && (
                            <div className="bg-[#fdf3ea] rounded-2xl p-8 md:p-12">
                                <h3 className="text-xl font-bold text-[#333] mb-3">{activeProgram.title}</h3>
                                <p className="text-gray-600 text-sm mb-8 leading-relaxed">{activeProgram.description}</p>
                                <div className="columns-1 md:columns-2 gap-6">
                                    {activeProgram.features.map((f, i) => (
                                        <div key={i} className="flex items-start gap-2 mb-3 break-inside-avoid">
                                            <span className="w-2 h-2 rounded-full bg-[#8c5a31] mt-1.5 flex-shrink-0"></span>
                                            <span className="text-sm text-gray-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
            <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-[#092a51] text-center mb-16">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.testimonials.map((t, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col hover:shadow-lg transition-all relative overflow-hidden">
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{t.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                                        <Image src={t.image} alt={t.author} width={48} height={48} className="object-cover w-full h-full" />
                                    </div>
                                    <p className="font-bold text-[#333] text-sm">{t.author}</p>
                                </div>
                                {/* Decorative quote mark */}
                                <div className="absolute bottom-6 right-6 text-gray-100 rotate-180">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.9 14.9 16 16 16H19C19.6 16 20 15.6 20 15V9H17C16.4 9 16 8.6 16 8V3H21V15C21 18.3 18.3 21 15 21H14.017ZM5 21L5 18C5 16.9 5.9 16 7 16H10C10.6 16 11 15.6 11 15V9H8C7.4 9 7 8.6 7 8V3H12V15C12 18.3 9.3 21 6 21H5Z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQs ─────────────────────────────────────────────────────── */}
            <section id="faqs" className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-[#092a51] text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-center mb-16">What students usually ask us.</p>

                    <div className="space-y-4">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-[#333] text-sm pr-4">{faq.question}</span>
                                    <span className="text-[#8c5a31] text-xl flex-shrink-0">
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

            {/* ── CONTACT ──────────────────────────────────────────────────── */}
            <section id="contact" className="bg-[#f0f0f0] py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-10 md:p-14">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.contact.title}</h2>
                            <p className="text-gray-500 text-sm mb-8">{data.contact.subtitle}</p>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#8c5a31] placeholder-gray-400" />
                                <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#8c5a31] placeholder-gray-400" />
                                <input type="tel" placeholder="Contact Number" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#8c5a31] placeholder-gray-400" />
                                <select defaultValue="" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-[#8c5a31] bg-white">
                                    <option value="" disabled>What is the nature of your query?</option>
                                    {data.contact.queryOptions.map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <textarea placeholder="Query/Comment" rows={4} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#8c5a31] placeholder-gray-400 resize-none" />
                                <div className="flex justify-center pt-2">
                                    <button type="submit" className="px-10 py-2.5 bg-[#e67e22] hover:bg-[#d35400] text-white text-sm font-semibold rounded transition-colors">
                                        {data.contact.buttonText}
                                    </button>
                                </div>
                            </form>
                        </div>
                        {data.contact.phoneImage && (
                            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64">
                                <Image src={data.contact.phoneImage} alt="Contact us" width={260} height={300} className="object-contain" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};