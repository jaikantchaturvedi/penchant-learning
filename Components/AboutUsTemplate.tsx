"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Header from "@/Components/header/Header";
export interface AboutCard {
    title: string;
    description: string;
}

export interface AboutUsData {
    title: string;
    subtitle: string;
    cards: AboutCard[];
    ctaText: string;
    ctaLink: string;
}

interface Props {
    data: AboutUsData;
}

const AboutUsTemplate: React.FC<Props> = ({ data }) => {
    return (
        <>

            {/* Hero Banner Section */}
            <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Black Blurred Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                        From Confusion to <span className="text-[#8c5a31]">Career Clarity</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Helping students & professionals choose the right path with confidence
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/ContactSection">
                            <button className="px-8 py-3 bg-[#8c5a31] text-white rounded-full hover:bg-[#6e4626] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                                Book a Free Session
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-[#8c5a31] transition-all duration-300 font-semibold">
                                Explore Services
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Us Section */}


            {/* Add animation styles */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>

        </>
    );
};

export default AboutUsTemplate;