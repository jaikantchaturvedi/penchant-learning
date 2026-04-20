"use client";

import React from "react";
import { FiBookOpen, FiBriefcase, FiUser, FiInfo, FiCompass, FiEye } from "react-icons/fi";
import { CounsellingPageTemplate, CounsellingPageData } from "@/Components/CounsellingPageTemplate";

// --- Data ---
const CLASS_10_12_DATA: CounsellingPageData = {
    hero: {
        title: "Find your true calling in life and start your career journey",
        backgroundImage: "/images/class10_hero_indian.png",
        subtitle: "Identify your career goals and formulate a step-by-step plan to get there with guidance from career experts",
        ctaText: "Get Started",
        ctaLink: "#",
        features: [
            "Career & subject Assessment",
            "Personalised Guidance",
            "Profile Building",
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
            image: "/images/indian_assessment.png",
            ctaText: "Take Free Demo",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 2,
            title: "Nexus: AI-Powered Career Planning Tool",
            description: "Best-Fit Subject Combinations as per Education Board & Career Preferences. Interdisciplinary Career Suggestions. Introduction to Role Models for Each Career Pathway. Suggestion for Soft Skill Development",
            image: "/images/indian_analysis.png",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 3,
            title: "Simulated Virtual Career Internships",
            description: "Explore multiple career options through role play, simulations and experiential videos with our Virtual Internship Program.",
            image: "/images/indian_internship.png",
            ctaText: "Schedule Call",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -right-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 4,
            title: "Interactive Career & Stream Activities",
            description: "Evaluate your academics, work style, aptitude and subject compatibility to identify your perfect career.",
            image: "/images/indian_interactive.png",
            ctaText: "View Sample Report",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -right-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 5,
            title: "Career Roadmap Planner",
            description: "Plan ahead for college admissions and prepare for exams and college applications in time.",
            image: "/images/indian_roadmap.png",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 6,
            title: "Personalised Guidance from Experts",
            description: "Finalise your career path and build a customised career plan with help from our career experts.",
            image: "/images/indian_coach.png",
            ctaText: "Explore Internships",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 7,
            title: "Extensive Support & Resources",
            description: "Get detailed information on all careers with our well-researched expert written resources.",
            image: "/images/indian_resources.png",
            ctaText: "Schedule a callback",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
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
            id: "realize",
            name: "Realize",
            subtitle: "",
            price: "₹25,000 onwards",
            bestselling: false,
            icon: FiCompass,
            iconColor: "text-[#FFD700]",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Career Assessment", desc: "5-dimensional assessment with best-fit career recommendations." },
                { title: "Career Content", desc: "Well-researched information on hundreds of career options." },
                { title: "34 Page Career Report", desc: "Detailed assessment report containing top career matches and personalized development plans." },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Penchant Learning's certified and experienced coaches." },
                { title: "Dedicated Career Mentor", desc: "Personalised mentoring, goal monitoring and steady support." }
            ],
            hasSessionSelector: false,
            buttonText: "Schedule Your Free Call Now",
            linkText: "Learn more"
        },
        {
            id: "explore",
            name: "Explore",
            subtitle: "Career Assessment + Counselling",
            price: "₹11,400",
            bestselling: true,
            icon: FiCompass,
            iconColor: "text-[#a855f7]",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Career Assessment", desc: "5-dimensional assessment with best-fit career recommendations." },
                { title: "Career Content", desc: "Well-researched information on hundreds of career options." },
                { title: "34 Page Career Report", desc: "Detailed assessment report containing top career matches and personalized development plans." },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Penchant Learning's certified and experienced coaches." },
                { title: "Dedicated Career Mentor", desc: "Personalised mentoring, goal monitoring and steady support.", locked: true }
            ],
            hasSessionSelector: true,
            // sessionOptions: ["1 Session", "3 Sessions"],
            // defaultSession: "3 Sessions",
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "learn",
            name: "Learn",
            subtitle: "Career Assessment",
            price: "₹2,400",
            bestselling: false,
            icon: FiBookOpen,
            iconColor: "text-[#a3cf5d]",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Career Assessment", desc: "5-dimensional assessment with best-fit career recommendations." },
                { title: "Career Content", desc: "Well-researched information on hundreds of career options." },
                { title: "34 Page Career Report", desc: "Detailed assessment report containing top career matches and personalized development plans." },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Penchant Learning's certified and experienced coaches.", locked: true },
                { title: "Dedicated Career Mentor", desc: "Personalised mentoring, goal monitoring and steady support.", locked: true }
            ],
            hasSessionSelector: false,
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "preview",
            name: "Preview",
            subtitle: "Orientation Style Assessment",
            price: "₹0",
            bestselling: false,
            icon: FiEye,
            iconColor: "text-[#ff9800]",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Career Assessment", desc: "Part 1 of 5-dimensional assessment to assess workstyle.", limitedAccess: true },
                { title: "Career Content", desc: "Well-researched information on hundreds of career options." },
                { title: "34 Page Career Report", desc: "Detailed assessment report containing top career matches and personalized development plans.", locked: true },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Penchant Learning's certified and experienced coaches.", locked: true },
                { title: "Dedicated Career Mentor", desc: "Personalised mentoring, goal monitoring and steady support.", locked: true }
            ],
            hasSessionSelector: false,
            hasEmailInput: true,
            buttonText: "Take Free Demo",
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
            type: "quote",
            text: "Penchant Learning helped me navigate the complex college application process with ease. I am now heading to my dream university!",
            author: "Rahul Sharma",
            role: "Student",
            image: "/images/testimonials/male1.png"
        },
        {
            type: "quote",
            text: "The clarity I got after the session was amazing. I knew exactly which engineering exams to target.",
            author: "Priya",
            role: "Class 12 Student",
            image: "/images/testimonials/female1.png"
        },
        {
            type: "quote",
            text: "Penchant Learning's planning helped my daughter get into her dream college for Design.",
            author: "Mrs. Verma",
            role: "Parent",
            image: "/images/testimonials/mother1.png"
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
    ],
    contact: {
        title: "What can we help you with?",
        subtitle: "Feel free to write to us. We usually respond within 24 hours!",
        phoneNumber: "+91 94686 43369",
        availability: "Monday - Friday",
        availabilityHours: "10 am - 7 pm",
        phoneImage: "/images/ContactUs.svg",
        queryOptions: [
            "Career Counselling",
            "Pricing & Plans",
            "Technical Support",
            "Other"
        ],
        buttonText: "Submit"
    },
};

// Default export wrapper for current usage
const Class10to12Counselling = () => {
    return <CounsellingPageTemplate data={CLASS_10_12_DATA} />;
};

export default Class10to12Counselling;