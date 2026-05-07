"use client";

import React, { useState, useEffect, useRef } from "react";
import FooterSection from "@/Components/cards/Footer";
import Link from "next/link";
import Image from "next/image";
import { FiStar, FiClock, FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface VCSHighlight {
    icon: string;
    text: string;
}

export interface VCSCareer {
    id: string;
    title: string;
    by: string;
    minutes: number;
    rating: number;
    image: string;
    tag: string;
    skills: string[];
    href: string;
}

export interface VCSFeatureBlock {
    icon: string;
    label: string;
}

export interface VCSInternshipReason {
    title: string;
    image: string;
    points: string[];
}

export interface VCSTestimonial {
    text: string;
    author: string;
    role: string;
    image: string;
}

export interface VCSPricingPlan {
    tier: string;
    name: string;
    pack: string;
    duration: string;
    price: string;
    highlight?: boolean;
}

export interface VCSPackInclusion {
    icon: string;
    text: string;
}

export interface VCSFaq {
    question: string;
    answer: string;
}

export interface VCSPageData {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    backgroundImage: string;
    // heroImage?: string;      
    // heroImageAlt?: string;
    highlights: VCSHighlight[];
    careersSectionTitle: string;
    careersSectionSubtitle: string;
    careers: VCSCareer[];
    viewAllLink: string;
    experienceSectionTitle: string;
    experienceSectionSubtitle: string;
    featureBlocks: VCSFeatureBlock[];
    internshipReasons: VCSInternshipReason[];
    testimonials: VCSTestimonial[];
    pricingTitle: string;
    plans: VCSPricingPlan[];
    packInclusions: VCSPackInclusion[];
    faqs: VCSFaq[];
    ctaLink: string;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export const VCSPageTemplate: React.FC<{ data: VCSPageData }> = ({ data }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeReason, setActiveReason] = useState(0);
    const testimonialRef = useRef<HTMLDivElement>(null);

    // Auto scroll testimonials
    useEffect(() => {
        const el = testimonialRef.current;
        if (!el) return;
        const interval = setInterval(() => {
            el.scrollBy({ left: 320, behavior: "smooth" });
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* ── NAV ──────────────────────────────────────────────────────── */}
            {/* <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
                    <div className="font-black text-2xl text-[#8c5a31] tracking-tight">
                        Panchant<span className="text-[#092a51]">Immrse</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
                        <a href="#program" className="hover:text-[#8c5a31] transition-colors">About the Program</a>
                        <a href="#careers" className="hover:text-[#8c5a31] transition-colors">Internships</a>
                        <a href="#testimonials" className="hover:text-[#8c5a31] transition-colors">Testimonials</a>
                        <a href="#pricing" className="hover:text-[#8c5a31] transition-colors">Pricing</a>
                        <a href="#faqs" className="hover:text-[#8c5a31] transition-colors">FAQs</a>
                    </div>
                    <Link
                        href={data.ctaLink}
                        className="px-6 py-2.5 text-white text-sm font-bold rounded-lg shadow hover:brightness-110 transition-all"
                        style={{ backgroundColor: "#8c5a31" }}
                    >
                        {data.heroCta}
                    </Link>
                </div>
            </nav> */}

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section

                className="relative overflow-hidden bg-gradient-to-br from-[#fdfaf7] via-white to-[#f0f4ff] py-24 px-6 md:px-12"
                style={
                    data.backgroundImage
                        ? {
                            backgroundImage: `url("${data.backgroundImage}")`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }
                        : undefined
                }
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#8c5a31] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#092a51] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10 ">
                    <div >
                        <div className="max-w-3xl mx-auto flex flex-col items-center ">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#fdf3ea] text-[#8c5a31] text-xs font-bold px-4 py-2 rounded-full mb-6 border border-[#e8d5c0]">
                                <span className="w-2 h-2 bg-[#8c5a31] rounded-full animate-pulse" />
                                Virtual Career Simulator
                            </div>

                            <h1 className="text-5xl md:text-5xl font-black text-[#092a51] leading-tight mb-6">
                                {data.heroTitle}
                            </h1>
                            <p className="text-[#092a51] text-xl leading-relaxed mb-10 max-w-xl">
                                {data.heroSubtitle}
                            </p>
                            <Link
                                href={data.ctaLink}
                                className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all text-base"
                                style={{ backgroundColor: "#8c5a31" }}
                            >
                                {data.heroCta}
                                <FiArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Highlights strip */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {data.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                <Image src={h.icon} alt="" width={36} height={36} className="flex-shrink-0" />
                                <p className="text-sm text-gray-600 font-medium leading-snug">{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAREERS GRID ─────────────────────────────────────────────── */}
            <section id="careers" className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#092a51] text-center mb-4">
                        {data.careersSectionTitle}
                    </h2>
                    <p className="text-gray-500 text-center mb-14">{data.careersSectionSubtitle}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.careers.map((career, i) => (
                            <Link
                                key={i}
                                href={career.href}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Career image */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={career.image}
                                        alt={career.title}
                                        fill
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-[#092a51] text-base mb-1">{career.title}</h3>
                                    <p className="text-xs text-gray-400 mb-3">By <span className="font-semibold text-gray-600">{career.by}</span></p>

                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                            <FiClock size={12} />
                                            <span>{career.minutes} mins</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#f59e0b] text-xs font-bold">
                                            <FiStar size={12} />
                                            {career.rating.toFixed(1)}/5
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 pt-3">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1.5">Be an expert in</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {career.skills.map((skill, j) => (
                                                <span key={j} className="bg-[#fdf3ea] text-[#8c5a31] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href={data.viewAllLink}
                            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#8c5a31] text-[#8c5a31] font-bold rounded-xl hover:bg-[#8c5a31] hover:text-white transition-all text-sm"
                        >
                            View All Careers <FiArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE SECTION ───────────────────────────────────────── */}
            <section id="program" className="py-24 px-6 md:px-12 bg-[#092a51]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        {data.experienceSectionTitle}
                    </h2>
                    <p className="text-white opacity-70 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
                        {data.experienceSectionSubtitle}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
                        {data.featureBlocks.map((f, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/10 rounded-2xl p-6 border border-white/10">
                                <Image src={f.icon} alt="" width={40} height={40} />
                                <p className="text-white text-sm font-semibold">{f.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href={data.ctaLink}
                            className="inline-flex items-center gap-2 px-10 py-4 bg-[#8c5a31] text-white font-bold rounded-xl hover:brightness-110 transition-all"
                        >
                            Start Free Trial <FiArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── INTERNSHIP REASONS ───────────────────────────────────────── */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Tab buttons */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {data.internshipReasons.map((r, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveReason(i)}
                                className={`px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all ${activeReason === i
                                    ? "bg-[#8c5a31] text-white border-[#8c5a31]"
                                    : "border-gray-200 text-gray-500 hover:border-[#8c5a31] hover:text-[#8c5a31]"
                                    }`}
                            >
                                {data.internshipReasons[i].title}
                            </button>
                        ))}
                    </div>

                    {/* Active reason content */}
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
                        <div className="md:w-1/2">
                            <Image
                                src={data.internshipReasons[activeReason].image}
                                alt={data.internshipReasons[activeReason].title}
                                width={400}
                                height={300}
                                className="object-contain w-full"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <h3 className="text-2xl font-bold text-[#092a51] mb-6">
                                {data.internshipReasons[activeReason].title}
                            </h3>
                            {data.internshipReasons[activeReason].points.map((p, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#8c5a31] rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-gray-600 text-sm leading-relaxed">{p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
            <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#fdfaf7]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#092a51] text-center mb-14">
                        What Students Say About Our Program
                    </h2>
                    {/* Scrollable row */}
                    <div
                        ref={testimonialRef}
                        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {[...data.testimonials, ...data.testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-72 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all"
                            >
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                        <Image src={t.image} alt={t.author} width={40} height={40} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#333] text-sm">{t.author}</p>
                                        <p className="text-xs text-gray-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRICING ──────────────────────────────────────────────────── */}
            <section id="pricing" className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#092a51] text-center mb-4">{data.pricingTitle}</h2>
                    <p className="text-gray-400 text-center mb-14">Choose the plan that suits your exploration needs</p>

                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                        {data.plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl p-8 border-2 flex flex-col items-center text-center transition-all hover:shadow-xl ${plan.highlight
                                    ? "border-[#8c5a31] bg-[#fdf3ea] scale-105 shadow-lg"
                                    : "border-gray-100 bg-white hover:border-[#8c5a31]"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8c5a31] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest">
                                        POPULAR
                                    </div>
                                )}
                                <p className="text-xs font-bold text-[#8c5a31] uppercase tracking-widest mb-2">{plan.tier}</p>
                                <h3 className="text-2xl font-black text-[#092a51] mb-1">{plan.name}</h3>
                                <p className="text-sm text-gray-500 mb-1">{plan.pack}</p>
                                <p className="text-xs text-gray-400 mb-6">{plan.duration}</p>
                                <div className="text-4xl font-black text-[#8c5a31] mb-8">{plan.price}</div>
                                <Link
                                    href={data.ctaLink}
                                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight
                                        ? "bg-[#8c5a31] text-white hover:brightness-110"
                                        : "border-2 border-[#8c5a31] text-[#8c5a31] hover:bg-[#8c5a31] hover:text-white"
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div> */}

                    {/* Pack inclusions */}
                    <div className="bg-[#092a51] rounded-2xl p-10">
                        <h3 className="text-white font-bold text-center mb-8 text-lg">All Plans Include</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {data.packInclusions.map((inc, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-3">
                                    <Image src={inc.icon} alt="" width={36} height={36} />
                                    <p className="text-white text-xs leading-relaxed opacity-80">{inc.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-10">
                            <Link
                                href={data.ctaLink}
                                className="px-10 py-3 bg-[#8c5a31] text-white font-bold rounded-xl hover:brightness-110 transition-all"
                            >
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQs ─────────────────────────────────────────────────────── */}
            <section id="faqs" className="py-24 px-6 md:px-12 bg-[#fdfaf7]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#092a51] text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 text-center mb-14">What students usually ask us</p>

                    <div className="space-y-4">
                        {data.faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#8c5a31] transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                                >
                                    <span className="font-bold text-[#333] text-sm pr-4">{faq.question}</span>
                                    {openFaq === i
                                        ? <FiChevronUp className="text-[#8c5a31] flex-shrink-0" size={18} />
                                        : <FiChevronDown className="text-gray-400 flex-shrink-0" size={18} />
                                    }
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

            <FooterSection />
        </div>
    );
};