"use client";

import React from "react";
import FooterSection from "@/Components/cards/Footer";
import Link from "next/link";
import { FiArrowRight, FiPhone, FiBookOpen, FiBriefcase, FiUser, FiInfo, FiCompass, FiEye, FiLock } from "react-icons/fi";
import Image from "next/image";

// --- Types ---

export interface HeroData {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    features?: string[];
    backgroundImage?: string;
}

export interface FeatureItem {
    icon?: any;
    text?: string;
}

export interface HowItWorksItem {
    id: number;
    title: string;
    description: string;
    image: string;
    ctaText: string;
    ctaLink: string;
    decorationClass: string;
    reverse: boolean;
}

export interface SuccessStoryData {
    category: string;
    title: string;
    story: string;
    ctaText: string;
    ctaLink: string;
    image: string;
    personName: string;
}

export interface PlanFeature {
    title: string;
    desc: string;
    locked?: boolean;
    tag?: string;
    limitedAccess?: boolean;
}

export interface Plan {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    bestselling: boolean;
    icon: any;
    iconColor: string;
    titleColor: string;
    borderColor: string;
    accentColor: string;
    features?: PlanFeature[];
    hasSessionSelector?: boolean;
    hasEmailInput?: boolean;
    buttonText: string;
    linkText: string;
}

export interface ComparisonData {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    featureTitle?: string;
}

export interface TestimonialItem {
    type: 'video' | 'quote' | 'story_card';
    youtubeId?: string;
    title?: string;
    author?: string;
    overlayText?: { pre: string; main: string; };
    text?: string;
    role?: string;
    image?: string;
    highlightName?: string;
    linkText?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ContactData {
    title: string;
    subtitle: string;
    phoneNumber: string;
    availability: string;
    availabilityHours: string;
    phoneImage: string;
    queryOptions: string[];
    buttonText: string;
}
export interface ServiceItem {
    id: string;
    name: string;
    price: number;
    description: string;
}

export interface SpecialPackage {
    icon: string;           // image path
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

export interface ServicesData {
    title: string;
    subtitle: string;
    services: ServiceItem[];
}

export interface SpecialPackagesData {
    title: string;
    packages: SpecialPackage[];
}

export interface CounsellingPageData {
    hero?: HeroData;
    features?: FeatureItem[];
    howItWorks?: HowItWorksItem[];
    successStory?: SuccessStoryData;
    plans?: Plan[];
    comparison?: ComparisonData;
    testimonials?: TestimonialItem[];
    faqs?: FaqItem[];
    contact?: ContactData;
    services?: ServicesData;
    specialPackages?: SpecialPackagesData;
}

// --- Component ---

interface CounsellingPageTemplateProps {
    data: CounsellingPageData;
}

export const CounsellingPageTemplate: React.FC<CounsellingPageTemplateProps> = ({ data }) => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* Side Sticky Call Button */}
            {/* <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
                <div className="bg-[#8c5a31] p-3 rounded-r-lg text-white cursor-pointer hover:brightness-110 transition-colors shadow-lg">
                    <FiPhone size={24} />
                </div>
            </div> */}

            {/* Hero Section */}
            {data.hero && (
                <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-white to-[#fdfaf7]">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6 z-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#333] leading-tight">
                                {data.hero.title}
                            </h1>
                            <p className="text-gray-500 text-lg max-w-md">
                                {data.hero.subtitle}
                            </p>
                            <div className="pt-2">
                                <Link
                                    href={data.hero.ctaLink}
                                    className="inline-block px-10 py-3 text-white font-bold rounded shadow-md hover:brightness-110 transition-all"
                                    style={{ backgroundColor: "#8c5a31" }}
                                >
                                    {data.hero.ctaText}
                                </Link>
                            </div>
                            <div className="text-[#8c5a31] font-medium text-sm pt-4 flex flex-wrap gap-x-2">
                                {data.hero.features?.map((feature, index) => (
                                    <React.Fragment key={index}>
                                        <span>{feature}</span>
                                        {data.hero?.features?.length && index < data.hero.features?.length - 1 && <span>|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {data.hero.backgroundImage && (
                            <div className="md:w-1/2 flex justify-center items-center">
                                <Image
                                    src={data.hero.backgroundImage}
                                    alt={data.hero.title}
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-contain max-h-[550px]"
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Feature Icons Grid */}
            {data.features && (
                <section className="py-16 px-6 md:px-12 bg-[#8c5a31]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {data.features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center space-y-4">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-[#8c5a31]">
                                    <feature.icon size={36} />
                                </div>
                                <p className="text-sm font-medium text-white leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {/* Our Services — Interactive Selector */}
            {data.services && (
                <section className="py-24 px-6 md:px-12 bg-[#f9fafb]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#8c5a31] text-center mb-4">{data.services.title}</h2>
                        <p className="text-gray-500 text-center mb-12">{data.services.subtitle}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {data.services.services.map((service) => (
                                <label key={service.id} className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl bg-white cursor-pointer hover:border-[#8c5a31] transition-all group">
                                    <input
                                        type="checkbox"
                                        className="mt-1 accent-[#8c5a31] w-4 h-4"
                                        onChange={(e) => {
                                            // handle selection — use useState in a client component
                                        }}
                                    />
                                    <div>
                                        <p className="font-bold text-sm text-gray-800">{service.name}</p>
                                        <p className="text-xs text-gray-500">{service.description}</p>
                                    </div>
                                    <span className="ml-auto font-bold text-[#8c5a31] text-sm whitespace-nowrap">₹{service.price.toLocaleString()}</span>
                                </label>
                            ))}
                        </div>

                        <div className="border-t pt-6 flex items-center justify-between">
                            {/* <div>
                                <p className="text-sm text-gray-500">Total Amount Payable</p>
                                <p className="text-3xl font-bold text-[#333]">₹{total.toLocaleString()}</p>
                            </div> */}
                            <button className="px-10 py-3 text-white font-bold rounded hover:brightness-110 transition-all" style={{ backgroundColor: "#8c5a31" }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {/* Special Services & Packages */}
            {data.specialPackages && (
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#8c5a31] text-center mb-16">{data.specialPackages.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {data.specialPackages.packages.map((pkg, i) => (
                                <div key={i} className="border border-gray-100 rounded-xl p-8 flex flex-col hover:shadow-xl transition-all">
                                    <Image src={pkg.icon} alt={pkg.title} width={56} height={56} className="mb-6" />
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">{pkg.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{pkg.description}</p>
                                    <hr className="my-6" />
                                    <Link href={pkg.ctaLink} className="text-[#8c5a31] font-bold text-sm hover:underline">
                                        {pkg.ctaText}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* How it Works Section */}
            {data.howItWorks && data.howItWorks.length > 0 && (
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#8c5a31] text-center mb-24">How it Works</h2>

                        {data.howItWorks.map((step) => (
                            <div key={step.id} className={`flex flex-col ${step.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 mb-32`}>
                                <div className="md:w-[55%] relative group">
                                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={500}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className={step.decorationClass}></div>
                                </div>
                                <div className="md:w-[45%] space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#333]">{step.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                    <div className="pt-4">
                                        <Link
                                            href={step.ctaLink}
                                            className="inline-block px-8 py-2.5 border-2 text-[#8c5a31] font-bold rounded shadow-sm hover:bg-[#8c5a31] hover:text-white transition-all"
                                            style={{ borderColor: "#8c5a31" }}
                                        >
                                            {step.ctaText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Success Story Section */}
            {data.successStory && (
                <section className="bg-[#8c5a31] overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
                        <div className="md:w-2/3 py-8 space-y-2">
                            <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                                {data.successStory.category}
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight max-w-4xl">
                                {data.successStory.title}
                            </h2>
                            <p className="text-white text-[13px] leading-relaxed max-w-3xl">
                                {data.successStory.story}
                            </p>
                            <div className="pt-2">
                                <Link href={data.successStory.ctaLink} className="inline-block px-5 py-1 text-white text-xs font-semibold border border-white rounded hover:bg-white hover:text-[#8c5a31] transition-all">
                                    {data.successStory.ctaText}
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-end items-end h-[240px]">
                            <Image src={data.successStory.image} alt={data.successStory.personName} width={240} height={240} className="object-contain object-bottom h-full w-auto" />
                        </div>
                    </div>
                </section>
            )}

            {/* Plans and Pricing Section */}
            {data.plans && (
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#8c5a31] text-center mb-16 underline-offset-8">Plans and Pricing</h2>

                        <div className={`grid grid-cols-1 gap-8 ${data.plans.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
                            {data.plans.map((plan) => (
                                <div key={plan.id} className={`relative bg-white rounded-xl ${plan.borderColor} ${plan.bestselling ? 'border-2' : 'border'} p-8 flex flex-col hover:shadow-2xl transition-all h-full`}>
                                    {plan.bestselling && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8c5a31] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest">
                                            BESTSELLING
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className={`text-2xl font-bold ${plan.titleColor}`}>{plan.name}</h3>
                                            <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                                        </div>
                                        <div className={plan.iconColor}>
                                            <plan.icon size={40} />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-[#333] mb-8">{plan.price}</div>

                                    <div className="space-y-6 flex-grow">
                                        {plan?.features?.map((feature, featureIndex) => (
                                            <div key={featureIndex} className={feature.locked ? "opacity-40 flex gap-2" : ""}>
                                                {feature.locked && <FiLock className="mt-1 flex-shrink-0" />}
                                                <div className={feature.locked ? "" : ""}>
                                                    <div className="flex justify-between items-start">
                                                        <p className={`font-bold text-sm mb-1 uppercase ${plan.titleColor.includes('text-') ? 'text-inherit' : 'text-[#ff5c5c]'}`}>{feature.title}</p>
                                                        {feature.tag && (
                                                            <span className="bg-[#b3e5fc] text-[#0288d1] text-[8px] font-bold px-2 py-0.5 rounded tracking-tighter">{feature.tag}</span>
                                                        )}
                                                    </div>
                                                    <p className={`text-gray-500 text-xs leading-relaxed`}>{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}

                                        {plan.hasSessionSelector && (
                                            <div className="pt-4">
                                                <p className="text-xs font-semibold text-gray-400 mb-2">Number of counselling sessions:</p>
                                                <div className="flex gap-4">
                                                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                                                        <input type="radio" name="sessions" className="accent-[#ff5c5c]" defaultChecked /> 1 Session
                                                    </label>
                                                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                                                        <input type="radio" name="sessions" className="accent-[#ff5c5c]" /> 3 Sessions
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        {plan.hasEmailInput && (
                                            <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#8c5a31]" />
                                        )}
                                        <button
                                            className="w-full text-white font-bold py-3 rounded text-sm hover:brightness-110 transition-all"
                                            style={{ backgroundColor: plan.accentColor }}
                                        >
                                            {plan.buttonText}
                                        </button>
                                        <button className="w-full text-[#8c5a31] font-bold text-xs hover:underline">
                                            {plan.linkText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Comparison/Why Mindler Section */}
            {data.comparison && (
                <section className="bg-[#8c5a31] overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
                        <div className="md:w-[55rem] py-8 space-y-2 flex flex-col items-center justify-center text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight ">
                                {data.comparison.title}
                            </h2>
                            <p className="text-white text-[16px] leading-relaxed max-w-lg">
                                {data.comparison.description}
                            </p>
                            <div className="pt-2">
                                <Link
                                    href={data.comparison.ctaLink}
                                    className="inline-block px-5 py-3 text-white text-xs font-semibold border border-white rounded hover:bg-white hover:text-[#8c5a31] transition-all"
                                >
                                    {data.comparison.ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials Section */}
            {data.testimonials && (
                <section className="py-24 px-6 md:px-12 bg-[#f9fafb]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#8c5a31] text-center mb-16">Testimonials</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.testimonials.map((item, index) => {
                                if (item.type === 'video') {
                                    return (
                                        <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                className="absolute inset-0"
                                            ></iframe>
                                        </div>
                                    );
                                } else if (item.type === 'quote') {
                                    return (
                                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden h-full">
                                            <div className="relative z-10 flex flex-col h-full justify-between">
                                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-medium">
                                                    {item.text}
                                                </p>
                                                <div className="flex items-center gap-4 mt-auto">
                                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                                                        <Image src={item.image!} alt={item.author!} width={48} height={48} className="object-cover w-full h-full" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#333] text-sm leading-tight">{item.author},</h4>
                                                        <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-6 right-6 text-gray-100 transform rotate-180">
                                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9H17.017C16.4647 9 16.017 8.55228 16.017 8V3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9H8.0166C7.46432 9 7.0166 8.55228 7.0166 8V3H12.0166V15C12.0166 18.3137 9.33031 21 6.0166 21H5.0166Z" /></svg>
                                            </div>
                                        </div>
                                    );
                                } else if (item.type === 'story_card') {
                                    return (
                                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col justify-center hover:shadow-lg transition-all relative overflow-hidden h-full">
                                            <div className="flex justify-between items-center h-full">
                                                <div className="w-[60%]">
                                                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                                                        {item.text?.split(item.highlightName!).map((part, i, arr) => (
                                                            <React.Fragment key={i}>
                                                                {part}
                                                                {i < arr.length - 1 && <span className="text-black font-semibold">{item.highlightName}</span>}
                                                            </React.Fragment>
                                                        ))}
                                                    </p>
                                                    <Link href="#" className="text-[#8c5a31] font-bold text-sm hover:underline flex items-center gap-1">
                                                        {item.linkText} <FiArrowRight size={14} />
                                                    </Link>
                                                </div>
                                                <div className="w-[35%] flex justify-center relative">
                                                    <div className="absolute -top-1 right-0 text-yellow-400">
                                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                                    </div>
                                                    <div className="absolute top-10 -left-2 text-[#8c5a31]/30">
                                                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                                    </div>

                                                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                                                        <Image src={item.image!} alt={item.highlightName!} width={80} height={80} className="object-cover w-full h-full" />
                                                    </div>

                                                    <div className="absolute bottom-0 right-2 text-[#8c5a31]/30">
                                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {data.faqs && (
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#8c5a31] mb-2">Frequently Asked Questions</h2>
                            <p className="text-gray-500 text-lg">What students usually ask us.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {/* Split FAQs into two columns */}
                            <div className="space-y-12">
                                {data.faqs.slice(0, Math.ceil(data.faqs.length / 2)).map((faq, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-bold text-[#333] mb-3">{faq.question}</h3>
                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                {data.faqs.slice(Math.ceil(data.faqs.length / 2)).map((faq, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-bold text-[#333] mb-3">{faq.question}</h3>
                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Contact Section */}
            {data.contact && (
                <section className="bg-[#f0f0f0] py-16 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-10 md:p-14">
                        <div className="flex flex-col md:flex-row gap-12 items-start">

                            {/* Left: Form */}
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.contact.title}</h2>
                                <p className="text-gray-500 text-sm mb-8">{data.contact.subtitle}</p>

                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Contact Number"
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <select
                                        defaultValue=""
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-[#8c5a31] bg-white"
                                    >
                                        <option value="" disabled>What is the nature of your query?</option>
                                        {data.contact.queryOptions.map((option, i) => (
                                            <option key={i} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <textarea
                                        placeholder="Query/Comment"
                                        rows={4}
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400 resize-none"
                                    />
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="submit"
                                            className="px-10 py-2.5 bg-[#8c5a31] hover:brightness-110 text-white text-sm font-semibold rounded transition-colors"
                                        >
                                            {data.contact.buttonText}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right: Image */}
                            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-72">
                                <Image
                                    src="/images/ContactUs.svg"
                                    alt="Contact us"
                                    width={280}
                                    height={320}
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </section>
            )}

            <FooterSection />
        </div>
    );
};
