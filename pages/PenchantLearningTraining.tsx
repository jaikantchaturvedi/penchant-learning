"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiPhone, FiGlobe, FiSearch, FiFileText, FiTarget, FiUser, FiStar, FiUsers, FiAward, FiMonitor, FiArrowRight, FiBookOpen } from "react-icons/fi";
import FooterSection from "@/Components/cards/Footer";
import { toast } from "react-hot-toast";

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
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            top: 50% !important;
            margin: 0 !important;
            transform: translateY(-50%) !important;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
            content: '' !important;
            display: block !important;
            width: 10px !important;
            height: 10px !important;
            border-top: 2.5px solid #fff !important;
            border-right: 2.5px solid #fff !important;
            position: relative !important;
        }
        .testimonial-swiper .swiper-button-next:after {
            transform: rotate(45deg) !important;
            left: -6px !important;
        }
        .testimonial-swiper .swiper-button-prev:after {
            transform: rotate(-135deg) !important;
            left: -3px !important;
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

const trainingAreas = [
    {
        title: "Penchant Learning Fundamentals",
        desc: "A comprehensive overview of the United Nations - its aims, objectives, components and functions to acquaint students with the fundamentals of the Penchant Learning.",
        icon: FiGlobe,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Research",
        desc: "Expert guidance on the art of constructive research - knowing where to look, filtering out relevant information and organizing it into clear, logical and compelling arguments.",
        icon: FiSearch,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Resolution Drafting",
        desc: "Rigorous training on the science of building UN legal documents, with a focus on structuring, writing and editing effective clauses, position papers, resolutions, and amendments.",
        icon: FiFileText,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Debate and Delegation",
        desc: "Strategic guidance to build and perfect delegates' debating skills, covering effective debating techniques, debate direction, argument defense, interjections and diplomacy.",
        icon: FiTarget,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Speech Writing and Public Speaking",
        desc: "Thorough grounding in one of the most essential aspects of Penchant Learnings - speech writing and delivery, with an emphasis on tonality, body language, content presentation and improvisation.",
        icon: FiUser,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Self-Presentation",
        desc: "Expert recommendations on dressing, grooming and personality building, to ensure that delegates make the right impression as suitable country representatives at the UN.",
        icon: FiStar,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Debate Conduct",
        desc: "Fostering of leadership skills and teamwork through training on using Rules of Procedure in advance, addressing fellow delegates, and appropriate debate conduct.",
        icon: FiUsers,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Chairing",
        desc: "Extensive grooming to help committee chairs master their roles - conducting debates, steering and moderating committees, choosing awards and developing the committee charter.",
        icon: FiAward,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    },
    {
        title: "Mock Penchant Learnings",
        desc: "Mock Penchant Learning simulations and drills to get hands-on experience of the Penchant Learning setup, along with real-time guidance and precise feedback to translate training into tangible learning.",
        icon: FiMonitor,
        color: "bg-white",
        iconBorder: "border-yellow-100 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
    }
];

const faqs = [
    {
        question: "What is Model United Nations (Penchant Learning)?",
        answer: "Model United Nations, also known as Model UN or Penchant Learning, is an extra-curricular activity in which students typically role-play delegates to the United Nations and simulate UN committees."
    },
    {
        question: "How can this program help my students?",
        answer: "Our program helps students develop critical thinking, public speaking, research, and diplomatic skills. It provides a platform to understand global issues and improve communication through expert-led simulations."
    },
    {
        question: "Is the training suitable for beginners?",
        answer: "Yes, our program starts from Penchant Learning Fundamentals and gradually builds up to advanced topics like Resolution Drafting and Chairing, making it perfect for both beginners and experienced delegates."
    },
    {
        question: "Do you provide mock simulations?",
        answer: "Absolutely! Mock Penchant Learnings are a core part of our training, providing hands-on experience and real-time feedback."
    }
];

const PenchantLearningTraining = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        schoolName: "",
        studentCount: "Number of Students?",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(`/api/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    telephone: formData.phone,
                    schoolName: formData.schoolName,
                    message: `Students: ${formData.studentCount}\n${formData.message}`,
                    source: "Penchant Learning Training Page Form"
                }),
            });

            if (res.status === 409) {
                toast.error("You have already submitted an enquiry with this email.");
                return;
            }

            if (res.ok) {
                toast.success("Enquiry sent successfully!");
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", schoolName: "", studentCount: "Number of Students?", message: "" });
            } else {
                toast.error("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen bg-white font-sans">
            <SwiperStyles />


            <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-white to-[#fdfaf7]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#8c5a31] leading-tight">
                            Guide and Inspire the next generation of Penchant Learning Leaders
                        </h1>
                        <p className="text-gray-500 text-lg max-w-md">
                            Expert-led Training Program for Schools. Empowering students with critical thinking and diplomatic skills.
                        </p>
                        <div className="pt-2">
                            <button
                                className="inline-block px-10 py-3 text-white font-bold rounded shadow-md hover:brightness-110 transition-all"
                                style={{ backgroundColor: "#8c5a31" }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center items-center">
                        <Image
                            src="/images/mun_hero.png"
                            alt="Penchant Learning Training"
                            width={600}
                            height={500}
                            className="w-full h-auto object-contain max-h-[550px]"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#8c5a31] mb-6">About Penchant Learning Training Program</h2>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl mx-auto px-4 md:px-0">
                    Model United Nations (Penchant Learning) conferences have become a significant part of the co-curricular world at schools and colleges today.
                    An activity driven by extensive knowledge and preparation, Penchant Learnings sit at the intersection of professional skills, communication skills and global know-how.
                    With our dedicated Penchant Learning training program, students can develop all the skills they need to excel in this domain.
                </p>

                <div className="mt-20">
                    <p className="text-[#8c5a31] font-medium text-sm border-b border-gray-100 inline-block pb-2 mb-16">
                        The Penchant Learning Training Program trains students in the following areas:
                    </p>

                    {/* Training Areas Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-8">
                        {trainingAreas.map((area, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className={`w-20 h-20 rounded-full border-2 ${area.iconBorder} flex items-center justify-center mb-6 bg-white transition-transform duration-300 group-hover:scale-110`}>
                                    {/* Icon simulation using yellow circle and blue icon as in the image */}
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                                        <area.icon size={28} className="text-[#8c5a31] relative z-10" />
                                        {/* Suggestion of yellow outer ring from images */}
                                        <div className="absolute inset-0 border-[6px] border-yellow-400 opacity-20 rounded-full"></div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#333] mb-3">{area.title}</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schools We Work With */}
            {/* <section className="py-20 px-6 bg-white border-t border-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-[#8c5a31] mb-16">Schools We Work With</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center place-items-center">
                        {[
                            { name: "WELHAM BOY'S", img: "/images/slogo-1.jpg" },
                            { name: "HYDERABAD PUBLIC", img: "/images/slogo-2.jpg" },
                            { name: "GREENWOOD HIGH", img: "/images/slogo-3.png" },
                            { name: "THE SANSKAAR", img: "/images/slogo-4.png" },
                            { name: "CMS", img: "/images/slogo-5.jpg" },
                            { name: "JAIPURIA SCHOOLS", img: "/images/slogo-7.png" },
                            { name: "LA MARTINIERE", img: "/images/slogo-8.png" },
                            { name: "DPS", img: "/images/slogo-9.png" }
                        ].map((school, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 transition-all duration-300">
                                <div className="w-20 h-20 relative rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm transition-transform hover:scale-110 flex items-center justify-center p-2">
                                    <img
                                        src={school.img}
                                        alt={school.name}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${school.name}&background=random&color=fff`;
                                        }}
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter text-center">{school.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-gray-400 italic text-sm">and many more...</div>
                </div>
            </section> */}

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
                            "/images/mun-gallery-1.png",
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
                    <h2 className="text-3xl font-bold text-[#8c5a31] mb-16">Frequently Asked Questions</h2>
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
            <section id="contact" className="py-20 px-4 md:px-6 bg-[#8c5a31]">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row p-8 md:p-12 relative">

                    {/* Left Side - Form */}
                    <div className="w-full md:w-[60%] space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#8c5a31]">
                                Ready to develop Penchant Learning leaders at your school?
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Fill out the form below and we will get in touch with you.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-12 space-y-4 animate-in fade-in duration-500 bg-[#f7f9fc] rounded-xl border border-[#a3cf5d]">
                                <div className="w-16 h-16 bg-[#a3cf5d] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#8c5a31]">Thank You!</h3>
                                <p className="text-gray-600 text-sm">Our team will get in touch with you shortly.</p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-xs font-semibold text-[#8c5a31] hover:underline pt-2"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-700 outline-none"
                                />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-700 outline-none"
                                />
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Contact Number"
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-700 outline-none"
                                />
                                <input
                                    required
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    placeholder="School Name"
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-700 outline-none"
                                />
                                <div className="relative">
                                    <select 
                                        name="studentCount"
                                        value={formData.studentCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-400 outline-none appearance-none"
                                    >
                                        <option>Number of Students?</option>
                                        <option>Less than 100</option>
                                        <option>100 - 500</option>
                                        <option>More than 500</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Query/ Comment (Optional)"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:border-[#8c5a31] transition-colors text-sm text-gray-700 outline-none resize-none"
                                ></textarea>

                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#8c5a31] text-white px-12 py-2 rounded text-sm font-bold shadow-lg hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Side - Info & Illustration */}
                    <div className="w-full md:w-[40%] flex flex-col items-center justify-center text-center space-y-8 mt-12 md:mt-0 px-4">
                        {/* Simulation of the illustration in the image */}
                        < div className="w-full aspect-square relative max-w-[280px]">
                            <Image src="/images/contact-us1.png" alt="Illustration" fill className="object-contain" />
                        </div>


                        <div className="space-y-2">
                            <p className="text-gray-400 text-lg">Need to speak to us now?</p>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-700">
                                Call us at +91 94686 43369
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Monday - Friday, 10 am - 7 pm
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default PenchantLearningTraining;
