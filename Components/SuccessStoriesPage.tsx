"use client";

import FooterSection from "@/Components/cards/Footer";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { toast } from "react-hot-toast";

interface Story {
    image: string;
    name: string;
    stars: number;
    story: string;
}

const StoryCard = ({ story }: { story: Story }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            {/* image — contain so full photo is visible */}
            <div className="relative w-full h-64 bg-gray-50 flex-shrink-0">
                <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-contain"
                />
            </div>

            {/* body */}
            <div className="p-5 flex flex-col flex-1">
                {/* stars */}
                <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: story.stars }).map((_, i) => (
                        <span key={i} className="text-[#ED8A19] text-base">★</span>
                    ))}
                </div>

                {/* text + toggle */}
                <p className={`text-[#032e61] text-sm leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
                    {story.story}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-xs font-semibold text-[#8c5a31] hover:underline self-start"
                >
                    {expanded ? "View Less" : "View More"}
                </button>

                {/* divider + name */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="font-bold text-[#092a51] text-sm">{story.name}</p>
                </div>
            </div>
        </div>
    );
};

const successStories = [
    {
        image: "/success-1.jpg",
        name: "Aarav Sharma",
        stars: 5,
        story: "Before connecting with Penchant Learning, I was unsure about which career path would truly suit my interests and skills. Their counseling sessions helped me gain clarity, confidence, and a proper roadmap for my future. Today, I feel much more focused and motivated toward my goals.",
    },
    {
        image: "/success-2.jpg",
        name: "Muskan Jain",
        stars: 5,
        story: "The team at Penchant Learning not only helped me select the right career path but also motivated me to believe in myself. Their personalized guidance and mentorship made a huge difference in my confidence level and decision-making.",
    },
    {
        image: "/success-6.jpg",
        name: "Aditya Singh",
        stars: 5,
        story: "Thanks to Penchant Learning, I successfully secured admission into my preferred college and course. Their guidance throughout the application and counseling process was extremely valuable. I truly appreciate their constant support and encouragement.",
    },
    {
        image: "/success-4.jpg",
        name: "Sneha Kapoor",
        stars: 5,
        story: "The counseling sessions at Penchant Learning completely changed my perspective toward career planning. I learned how important it is to choose a career based on passion, skills, and future opportunities. I now feel confident about my future.",
    },
    {
        image: "/success-5.jpg",
        name: "Kunal Verma",
        stars: 5,
        story: "I was struggling to choose between different career opportunities, and the pressure of making the wrong decision was overwhelming. Penchant Learning helped me understand my abilities through proper assessments and guidance. Their mentorship made my journey stress-free and clear.",
    },
    {
        image: "/success-7.jpg",
        name: "Riya Mehta",
        stars: 5,
        story: "Penchant Learning guided me at a time when I was completely confused about my higher education options. The mentors patiently understood my strengths and suggested the right direction for me. Their support gave me confidence to make better career decisions.",
    },
];

const SuccessStoriesPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        queryType: "",
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
                    queryType: formData.queryType,
                    message: formData.message,
                    source: "Success Stories Page Form"
                }),
            });

            if (res.status === 409) {
                toast.error("You have already submitted an enquiry with this email.");
                return;
            }

            if (res.ok) {
                toast.success("Enquiry sent successfully!");
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", queryType: "", message: "" });
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
        <>
            {/* ── HERO SECTION ── */}
            <section
                className="w-full min-h-[480px] py-24 px-6 md:px-16 text-white relative overflow-hidden flex items-center"
                style={{
                    backgroundImage: "url('/success-stories.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-[#092a51]/70 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
                        Real Success Stories
                    </h1>
                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                        See how students and professionals achieved career clarity with our guidance.
                    </p>
                    <a
                        href="https://wa.me/919468643369"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#8c5a31] hover:bg-[#7a4e2a] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
                    >
                        Book a Session
                    </a>
                </div>
            </section>

            {/* ── SUCCESS STORIES CARDS ── */}
            <section className="w-full bg-[#F7F6F0] py-16 px-6 md:px-16">
                <div className="max-w-[1800px] mx-auto">
                    {/* section label */}
                    <p className="text-[#ff5c5c] font-semibold tracking-widest uppercase text-sm text-center mb-2">
                        Our Students &amp; Alumni
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#092a51] text-center mb-12">
                        Stories That Inspire
                    </h2>

                    {/* slider */}
                    <div className="relative">
                        {/* prev button */}
                        <button className="swiper-ss-prev absolute -left-5 sm:-left-10 top-1/2 z-10 -translate-y-1/2 bg-[#8c5a31] hover:bg-[#7a4e2a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors text-xl leading-none">
                            ‹
                        </button>
                        {/* next button */}
                        <button className="swiper-ss-next absolute -right-5 sm:-right-10 top-1/2 z-10 -translate-y-1/2 bg-[#8c5a31] hover:bg-[#7a4e2a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors text-xl leading-none">
                            ›
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".swiper-ss-next",
                                prevEl: ".swiper-ss-prev",
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640:  { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                        >
                            {successStories.map((story, index) => (
                                <SwiperSlide key={index} className="!h-auto">
                                    <StoryCard story={story} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* ── SUCCESS NUMBERS STRIP ── */}
            <section className="w-full bg-[#092a51] py-12 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "1000+", label: "Students Guided" },
                        { number: "120+", label: "Admissions" },
                        { number: "80+", label: "Career Switches" },
                        { number: "95%", label: "Success Rate" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center py-6 px-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <span className="text-4xl sm:text-5xl font-bold text-white">
                                {stat.number}
                            </span>
                            <span className="mt-2 text-sm sm:text-base font-medium text-[#8c5a31] tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BEFORE vs AFTER ── */}
            <section className="w-full bg-[#F7F6F0] py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#ff5c5c] font-semibold tracking-widest uppercase text-sm text-center mb-2">
                        The Transformation
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#092a51] text-center mb-12">
                        Before &amp; After Counseling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* BEFORE card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                            <div className="relative w-full h-64">
                                <Image
                                    src="/left.png"
                                    alt="Before counseling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#092a51] mb-4">
                                    Before Counseling
                                </h3>
                                <ul className="space-y-3">
                                    {["Confused", "No Direction"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#032e61] font-medium">
                                            <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AFTER card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                            <div className="relative w-full h-64">
                                <Image
                                    src="/right.png"
                                    alt="After counseling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#092a51] mb-4">
                                    After Counseling
                                </h3>
                                <ul className="space-y-3">
                                    {["Clear Goals", "Career Roadmap"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#032e61] font-medium">
                                            <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="w-full bg-[#092a51] py-16 px-6 md:px-16 text-center text-white mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Ready to Write Your Own Success Story?
                </h2>
                <p className="text-white/70 max-w-xl mx-auto mb-8 text-base">
                    Book a free consultation and take the first step towards the career you deserve.
                </p>
                <a
                    href="https://wa.me/9468643369"
                    className="inline-block bg-[#8c5a31] hover:bg-[#7a4e2a] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
                >
                    Start Your Journey
                </a>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="bg-[#f0f0f0] py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-10 md:p-14">
                    <div className="flex flex-col md:flex-row gap-12 items-start">

                        {/* Left: Form */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">What can we help you with?</h2>
                            <p className="text-gray-500 text-sm mb-8">Feel free to write to us. We usually respond within 24 hours!</p>

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
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Contact Number"
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400"
                                    />
                                    <select
                                        required
                                        name="queryType"
                                        value={formData.queryType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-[#8c5a31] bg-white"
                                    >
                                        <option value="" disabled>What is the nature of your query?</option>
                                        {["Career Counselling", "Pricing & Plans", "Technical Support", "Other"].map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Query/Comment"
                                        rows={4}
                                        className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#8c5a31] placeholder-gray-400 resize-none"
                                    />
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-10 py-2.5 bg-[#8c5a31] hover:brightness-110 text-white text-sm font-semibold rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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

            <FooterSection />
        </>
    );
};

export default SuccessStoriesPage;
