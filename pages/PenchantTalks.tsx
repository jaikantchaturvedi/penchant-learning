"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiPhone, FiGlobe, FiTarget, FiUser, FiStar, FiUsers, FiAward, FiBookOpen, FiArrowRight, FiFileText, FiSearch, FiMonitor, FiMapPin, FiMail } from "react-icons/fi";
import FooterSection from "@/Components/cards/Footer";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperStyles = () => (
    <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
            background-color: #8c5a31;
            width: 44px !important;
            height: 44px !important;
            border-radius: 50%;
            color: white !important;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
            font-size: 18px !important;
            font-weight: bold;
        }
        .testimonial-swiper .swiper-button-next:hover,
        .testimonial-swiper .swiper-button-prev:hover {
            background-color: #8c5a31 !important;
            filter: brightness(1.1);
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            color: white !important;
        }
        .testimonial-swiper .swiper-button-next {
            right: 10px !important;
        }
        .testimonial-swiper .swiper-button-prev {
            left: 10px !important;
        }
        .swiper-pagination-bullet-active {
            background: #8c5a31 !important;
        }
    `}</style>
);

const programAreas = [
    {
        title: "Career Exploration & Awareness-Building",
        desc: "Open students' mind up to possibilities - connect them with professionals from a wide range of careers to expose them to the dynamic career options available to them.",
        icon: FiSearch,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    },
    {
        title: "Professional Insights & Inspiration",
        desc: "Those who have lived a career and scaled its heights, have invaluable insights to share. Enable students to obtain information, advice and inspiration to plan their own career journeys.",
        icon: FiStar,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    },
    {
        title: "Targeted Professional Development",
        desc: "Give students a head start for their professional lives. Empower them to learn about how skills and knowledge are translated into the professional world to prepare them for the road ahead.",
        icon: FiTarget,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    },
    {
        title: "Life Skills Development",
        desc: "Inculcate all the necessary ingredients of success - perseverance, focus, will-power and direction, through powerful, inspired guidance and hands-on reflection activities aimed at growth.",
        icon: FiAward,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    },
    {
        title: "Networking & Guidance Opportunities",
        desc: "Provide students with the opportunity to ask and resolve all kinds of questions - big and small - in their minds and help them gain a deeper understanding of their fields of interest.",
        icon: FiUsers,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    },
    {
        title: "Individualised Mentorship",
        desc: "Help students set aspirational career goals and get the support they need to achieve success, through direct mentorship opportunities for a select few students.",
        icon: FiUser,
        color: "bg-white",
        iconBorder: "border-blue-100 shadow-[0_0_20px_rgba(46,163,242,0.15)]"
    }
];

const faqs = [
    {
        question: "How long can I access my dashboard after onboarding?",
        answer: "Your student dashboard will remain active for one year from your date of onboarding. During this period, you will have full access to all resources, Penchant Learning tools, and action plans included in your program. We strongly recommend that you download or save any important resources shared by your coach before the dashboard validity ends, as access will not be available after the expiry date."
    },
    {
        question: "I have made the payment and requested to schedule my session. When will my session be scheduled?",
        answer: "Once your payment is confirmed and a scheduling request is raised, our operations team will get in touch with you to coordinate the session timing. We aim to schedule sessions at your convenience on weekdays (Monday to Saturday) between 9:00 AM and 7:00 PM. Final scheduling is subject to coach availability."
    },
    {
        question: "How will the Penchant Learning Talks program help students?",
        answer: "Penchant Learning Talks is a part of a bigger vision - to empower students to independently dream about and pursue their career aspirations. It is especially curated to motivate students when the pressure of exams, expectations and competition tears them down. With expert-led sessions, Penchant Learning Talks will cover all areas of development - personal, social, and professional."
    },
    {
        question: "Is the program accessible offline or online?",
        answer: "All Penchant Learning Talks sessions happen as in-school workshops."
    },
    {
        question: "How long do the talks last?",
        answer: "The duration of each talk varies with the audience, nature of the content, and the speaker. On average, the sessions run for 60 - 75 minutes."
    },
    {
        question: "Can a student access the program independently?",
        answer: "At the moment Penchant Learning Talks is available only for schools, not for individual students."
    },
    {
        question: "How should I proceed if I want to enroll my school/institution in the Penchant Learning Talks Program?",
        answer: "All you need to do is fill the form below or write to us at hello@mindler.com. Our team will respond to you within 2 working days."
    }
];

const schoolLogos = [
    { name: "WELHAM BOY'S", img: "/images/slogo-1.jpg" },
    { name: "HYDERABAD PUBLIC", img: "/images/slogo-2.jpg" },
    { name: "GREENWOOD HIGH", img: "/images/slogo-3.png" },
    { name: "THE SANSKAAR", img: "/images/slogo-4.png" },
    { name: "CMS", img: "/images/slogo-5.jpg" },
    { name: "JAIPURIA SCHOOLS", img: "/images/slogo-7.png" },
    { name: "LA MARTINIERE", img: "/images/slogo-8.png" },
    { name: "DPS", img: "/images/slogo-9.png" }
];

const PenchantLearningTalks = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SwiperStyles />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-32 px-6 md:px-12 bg-gradient-to-b from-white to-[#fdfaf7] flex items-center justify-center min-h-[500px]" style={{ backgroundImage: `url("/images/mindler-talks-banner.svg")`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center right', backgroundColor: '#fff' }}>
                <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 space-y-6 z-10 flex flex-col justify-center items-center text-center">
                        <div className="flex flex-col items-center gap-2 mb-4">
                            <span className="text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase">Introducing</span>
                            <div className="flex items-center gap-2">
                                <Image src="/images/pl-learning.png" alt="Penchant Learning Talks Logo" width={220} height={60} className="object-contain" />
                            </div>
                        </div>
                        <h1 className="text-xl md:text-2xl font-medium text-gray-500 leading-tight max-w-lg">
                            Thought-provoking motivational talks with professionals who have achieved success in their fields.
                        </h1>
                        <div className="pt-4">
                            <button
                                className="inline-block px-10 py-3 text-white font-bold rounded shadow-md hover:brightness-110 transition-all uppercase text-sm tracking-wider"
                                style={{ backgroundColor: "#8c5a31" }}
                            >
                                Learn More
                            </button>
                        </div>


                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-[32px] font-semibold text-[#092a51] mb-6">About the Program</h2>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl mx-auto mb-4">
                    Penchant Learning Talks is an interactive, workshop-led program aimed at driving career awareness and inspiring success in students.
                </p>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
                    The best minds from eclectic fields like Economics, Science, Culinary Arts, Music, Mentalism, and Cryptocurrency, come together to share their experiences, knowledge and insights about their respective careers. By teaching what it takes to attain success, Penchant Learning Talks makes a difference to each student's professional journey.
                </p>

                {/* Training Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-24">
                    {programAreas.map((area, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className={`w-20 h-20 rounded-full border-2 ${area.iconBorder} flex items-center justify-center mb-6 bg-white transition-transform duration-300 group-hover:scale-110`}>
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                                    <area.icon size={28} className="text-[#2ea3f2] relative z-10" />
                                    <div className="absolute inset-0 border-[6px] border-yellow-400 opacity-20 rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#333] mb-4 h-12 flex items-center justify-center">{area.title}</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs">
                                {area.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Schools We Work With */}
            <section className="py-20 px-6 bg-white border-t border-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-gray-500 mb-16 uppercase tracking-widest">Schools We Work With</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center place-items-center">
                        {schoolLogos.map((school, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 transition-all duration-300">
                                <div className="w-20 h-20 relative rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm transition-transform hover:scale-110 flex items-center justify-center p-2">
                                    <img
                                        src={school.img}
                                        alt={school.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-center">{school.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-24 bg-[#8c5a31] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{ delay: 5000 }}
                        navigation
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="rounded-xl testimonial-swiper"
                    >
                        {[
                            "/herosection.jpg",
                            "/Journey.jpeg",
                            "/therapy1.jpg",
                            "/therapy2.jpg",
                            "/therapy3.jpg"
                        ].map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-2xl group relative">
                                    <Image
                                        src={img}
                                        alt={`Penchant Learning Training Gallery ${i + 1}`}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[28px] font-semibold text-[#092a51] mb-16">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 text-left">
                        {faqs.map((faq, index) => (
                            <div key={index} className="space-y-3">
                                <h3 className="text-[15px] font-bold text-[#333]">{faq.question}</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-24 px-4 md:px-6 bg-[#8c5a31]">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row p-8 md:p-12 relative">
                    {/* Left Side - Form */}
                    <div className="w-full md:w-[60%] space-y-8">
                        <div className="space-y-2 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                                Interested in hosting a Penchant Learning Talk?
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Fill out the form below and we will get in touch with you.
                            </p>
                        </div>

                        <form className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Name" className="px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors outline-none text-sm" />
                            <input type="email" placeholder="Email" className="px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors outline-none text-sm" />
                            <input type="text" placeholder="Contact Number" className="px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors outline-none text-sm" />
                            <input type="text" placeholder="School Name" className="px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors outline-none text-sm" />
                            <textarea placeholder="Your Message (Optional)" rows={4} className="px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors outline-none text-sm resize-none"></textarea>
                            <div className="flex justify-center pt-2">
                                <button type="submit" className="bg-[#8c5a31] text-white px-12 py-3 rounded text-sm font-bold shadow-lg hover:brightness-110 transition-all">Submit Details</button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Support */}
                    <div className="w-full md:w-[40%] flex flex-col items-center justify-center text-center space-y-8 mt-12 md:mt-0 md:pl-12">
                        <div className="w-full aspect-square relative max-w-[280px]">
                            <Image src="/images/contact-us1.png" alt="Illustration" fill className="object-contain" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-400 font-medium">Have any queries?</p>
                            <h3 className="text-2xl font-bold text-gray-700 flex items-center justify-center gap-3">
                                <FiPhone className="text-[#8c5a31]" /> +91 87449 87449
                            </h3>
                            <p className="text-gray-400 text-sm">Monday - Saturday, 9:30 am - 6:30 pm</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default PenchantLearningTalks;
