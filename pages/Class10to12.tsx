"use client";

import React from "react";
import { FiBookOpen, FiBriefcase, FiUser, FiInfo, FiCompass, FiEye } from "react-icons/fi";
import { CounsellingPageTemplate, CounsellingPageData } from "@/Components/CounsellingPageTemplate";

// --- Data ---
const CLASS_10_12_DATA: CounsellingPageData = {
    hero: {
        title: "Find your true calling in life and start your career journey",
        backgroundImage: "/images/class10.svg",
        subtitle: "Identify your career goals and formulate a step-by-step plan to get there with guidance from career experts",
        ctaText: "Get Started",
        ctaLink: "#",
        features: [
            "Career & subject Assessment",
            "Personalised",
            "Guidance",
            " Profile Building ",
            "Virtual Internships",
            "Subject & Career Mapping"
        ]
    },
    features: [
        {
            icon: FiBookOpen,
            text: "Find the ideal career options for you based on your interests and aptitude."
        },
        {
            icon: FiInfo,
            text: "Get expert guidance from our counsellors on which career path would suit you best."
        },
        {
            icon: FiUser,
            text: "Pick the right colleges and courses with help from our coaches to excel in the career of your choice."
        },
        {
            icon: FiBriefcase,
            text: "Get ahead of the competition by planning ahead for entrance exams and college applications."
        }
    ],
    howItWorks: [
        {
            id: 1,
            title: "Advanced Assessment & Best-Fit Matches",
            description: "Learn about your strengths and interests with our 5-dimensional assessment and 34-page career report.",
            image: "/gifs/assessments.gif",
            ctaText: "Take Free Demo",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 2,
            title: "Interactive Career & Stream Activities",
            description: "Evaluate your academics, work style, aptitude and subject compatibility to identify your perfect career.",
            image: "/gifs/assessments-2.gif",
            ctaText: "View Sample Report",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -right-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 3,
            title: "Simulated Virtual Career Internships",
            description: "Explore multiple career options through role play, simulations and experiential videos with our Virtual Internship Program.",
            image: "/gifs/personalised-guidance.gif",
            ctaText: "Schedule Call",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -right-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 4,
            title: "Personalised Guidance from Experts",
            description: "Finalise your career path and build a customised career plan with help from our career experts.",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "Explore Internships",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 5,
            title: "Career Roadmap Planner",
            description: "Plan ahead for college admissions and prepare for exams and college applications in time.",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 6,
            title: "Extensive Support & Resources",
            description: "Get detailed information on all careers with our well-researched expert written resources.",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 7,
            title: "Nexus: AI-Powered Career Planning Tool",
            description: "Best-Fit Subject Combinations as per Education Board & Career Preferences. Interdisciplinary Career Suggestions. Introduction to Role Models for Each Career Pathway. Suggestion for Soft Skill Development",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 8,
            title: "Orion: AI-Powered Career Mentor/Chatbot",
            description: "Personalized Interactive Advice. Real-Time Insights on Career Related Queries. Comprehensive Problem Solving",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
    ],
    successStory: {
        category: "SUCCESS STORY",
        title: "How Pranav, a Dissatisfied Engineering Student, Used Penchant Learning Career Guidance to Find His Perfect Fit with Management",
        story: "Pranav Vashishth, a 1st-year B.Tech student, was unable to cope with his academics and felt stuck in his career. Penchant Learning career experts helped him explore multiple options and zero-in on Management, which proved to be a perfect fit with his talents and interests. He is now a top ranker at his university.",
        ctaText: "Read Full Story",
        ctaLink: "#",
        image: "/userimage3.jpeg",
        personName: "Pranav"
    },
    plans: [
        {
            id: "stream-selection",
            name: "Stream Selection",
            subtitle: "Ideal for Class 10",
            price: "₹2,400",
            bestselling: false,
            icon: FiCompass,
            iconColor: "text-[#092a51] opacity-80",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-[#8c5a31]",
            accentColor: "#8c5a31",
            features: [
                { title: "Career Assessment", desc: "5-dimensional stream assessment." },
                { title: "34-Page Report", desc: "Comprehensive analysis of career matches." },
                { title: "1 Counselling Session", desc: "Expert guidance to finalize stream." }
            ],
            hasSessionSelector: false,
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "career-selection",
            name: "Career Selection",
            subtitle: "Ideal for Class 11 & 12",
            price: "₹5,900",
            bestselling: true,
            icon: FiBookOpen,
            iconColor: "text-[#a3cf5d]",
            titleColor: "text-[#ff5c5c] opacity-80",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Multi-dimensional Assessment", desc: "In-depth evaluation of strengths." },
                { title: "2 Detailed Sessions", desc: "Personalized mentoring sessions." },
                { title: "Detailed Career Roadmap", desc: "Step-by-step plan for entrance exams." }
            ],
            hasSessionSelector: false,
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "comprehensive",
            name: "Comprehensive",
            subtitle: "Complete Support",
            price: "₹12,000+",
            bestselling: false,
            icon: FiEye,
            iconColor: "text-[#ff9800]",
            titleColor: "text-[#ff5c5c] opacity-60",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Unlimited Sessions", desc: "Continuous guidance and support." },
                { title: "College Application", desc: "Support for applications in India & abroad." },
                { title: "Profile Building", desc: "Enhance your profile for top universities." },
                { title: "Exam Alerts", desc: "Stay updated on important dates." }
            ],
            hasSessionSelector: false,
            hasEmailInput: true,
            buttonText: "Get Started",
            linkText: "Learn more"
        }
    ],
    comparison: {
        title: "Why Penchant Learning is the Best Choice for Class 10-12",
        description: "See how we compare with other guidance platforms in helping you secure your ideal college and career.",
        ctaText: "View Comparison",
        ctaLink: "#"
    },
    testimonials: [
        {
            type: "video",
            youtubeId: "dQw4w9WgXcQ",
            title: "Success Story - Rahul Sharma",
            author: "Rahul Sharma",
            overlayText: { pre: "My", main: "Experience" }
        },
        {
            type: "quote",
            text: "The clarity I got after the session was amazing. I knew exactly which engineering exams to target.",
            author: "Priya",
            role: "Class 12 Student",
            image: "/api/placeholder/100/100"
        },
        {
            type: "quote",
            text: "Penchant Learning's planning helped my daughter get into her dream college for Design.",
            author: "Mrs. Verma",
            role: "Parent",
            image: "/api/placeholder/100/100"
        }
    ],
    faqs: [
        {
            question: "Is the session online or offline?",
            answer: "The sessions are conducted online via video conferencing for global accessibility, allowing you to connect with top experts from anywhere."
        },
        {
            question: "Can parents join the counselling?",
            answer: "Yes, parent involvement is encouraged during the final phase of the session to ensure alignment and address any concerns they may have."
        },
        {
            question: "How accurate is the assessment?",
            answer: "The assessment is based on globally validated psychometric principles with a high reliability score, ensuring that the recommendations are scientifically backed and personalized to your unique profile."
        }
    ]
};

// Default export wrapper for current usage
const Class10to12Counselling = () => {
    return <CounsellingPageTemplate data={CLASS_10_12_DATA} />;
};

export default Class10to12Counselling;