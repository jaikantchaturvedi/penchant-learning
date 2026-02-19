"use client";

import React from "react";
import { FiBookOpen, FiBriefcase, FiUser, FiInfo, FiCompass, FiEye } from "react-icons/fi";
import { CounsellingPageTemplate, CounsellingPageData } from "@/Components/CounsellingPageTemplate";

// --- Data ---
const CLASS_8_9_DATA: CounsellingPageData = {
    hero: {
        title: "Discover the perfect stream and subjects for your career",
        backgroundImage: "/images/class8.svg",
        subtitle: "Get ahead of the curve and build a solid foundation for your career with the right stream and subject choices",
        ctaText: "Get Started",
        ctaLink: "#",
        features: [
            "Career & Subject Assessment",
            "Personalised Guidance",
            "Profile Building",
            "Virtual Internships",
            "Subject & Career Mapping"
        ]
    },
    features: [
        {
            icon: FiBookOpen,
            text: "Humanities, Science or Commerce - pick the right stream for you based on your interests & aptitude"
        },
        {
            icon: FiInfo,
            text: "Learn in detail about all the career options available for your chosen stream and subject combinations"
        },
        {
            icon: FiUser,
            text: "Build a holistic profile aligned to your career interests & ambitions with guidance from expert coaches"
        },
        {
            icon: FiBriefcase,
            text: "Deep dive into your preferred career domains through virtual career simulations & internships"
        }
    ],
    howItWorks: [
        {
            id: 1,
            title: "Advanced Assessment & Best-Fit Matches",
            description: "Learn about your strengths and interests with our 4-dimensional assessment and 25-page stream report.",
            image: "/gifs/assessments.gif",
            ctaText: "Take Free Demo",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -left-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 2,
            title: "Advanced Assessment & Best-Fit Matches",
            description: "Learn about your strengths and interests with our 4-dimensional assessment and 25-page stream report.",
            image: "/gifs/assessments-2.gif",
            ctaText: "Take Free Demo",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -right-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 3,
            title: "Interactive Career & Stream Activities",
            description: "Evaluate your academics, work style, aptitude and subject compatibility to identify your perfect stream.",
            image: "/gifs/personalised-guidance.gif",
            ctaText: "Schedule A Call Back",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -right-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        },
        {
            id: 4,
            title: "Simulated Virtual Career Internships",
            description: "Explore multiple career options through role play, simulations and experiential videos with our Virtual Internship Program.",
            image: "/gifs/Virtual-Internship.gif",
            ctaText: "View Program Details",
            ctaLink: "#",
            decorationClass: "absolute -bottom-4 -left-4 w-24 h-24 bg-[#092a51]/5 rounded-full blur-2xl -z-10",
            reverse: true
        },
        {
            id: 5,
            title: "Extensive Support & Resources",
            description: "Explore career options for your chosen stream with our well-researched expert written resources.",
            image: "/gifs/resources.gif",
            ctaText: "Schedule A Call Back",
            ctaLink: "#",
            decorationClass: "absolute -top-4 -right-4 w-24 h-24 bg-[#8c5a31]/5 rounded-full blur-2xl -z-10",
            reverse: false
        }
    ],
    successStory: {
        category: "SUCCESS STORY",
        title: "How Nitya Overcame her Inhibitions and Biases to Choose the Stream Best Aligned to her Career Goals",
        story: "Nitya Gupta was unsure about her streams and subjects for class 11th. Mindler career experts found her perfect fit with humanities, and helped her deal with her misconceptions about the field. She is now acing her class 11 and looks forward to a career in Psychology.",
        ctaText: "Read Full Story",
        ctaLink: "#",
        image: "/userimage3.jpeg",
        personName: "Nitya"
    },
    plans: [
        {
            id: "explore",
            name: "EXPLORE",
            subtitle: "Stream Assessment + Counselling",
            price: "₹11,400",
            bestselling: true,
            icon: FiCompass,
            iconColor: "text-[#092a51] opacity-80",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-[#8c5a31]",
            accentColor: "#8c5a31",
            features: [
                { title: "Stream Assessment", desc: "4-dimensional stream assessment with top stream recommendations." },
                { title: "Career Content", desc: "Well-researched Information on hundreds of career options." },
                { title: "25 Page Stream Report", desc: "Detailed assessment report containing best-fit stream matches and personalized development plans." },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Mindler's certified and experienced coaches." }
            ],
            hasSessionSelector: true,
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "learn",
            name: "LEARN",
            subtitle: "Stream Assessment",
            price: "₹2,400",
            bestselling: false,
            icon: FiBookOpen,
            iconColor: "text-[#a3cf5d]",
            titleColor: "text-[#ff5c5c] opacity-80",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Stream Assessment", desc: "4-dimensional stream assessment with top stream recommendations." },
                { title: "Career Content", desc: "Well-researched Information on hundreds of career options." },
                { title: "25 Page Stream Report", desc: "Detailed assessment report containing best-fit stream matches and personalized development plans." },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Mindler's certified and experienced coaches.", locked: true }
            ],
            hasSessionSelector: false,
            buttonText: "Buy Now",
            linkText: "Learn more"
        },
        {
            id: "preview",
            name: "PREVIEW",
            subtitle: "Orientation Style Assessment",
            price: "₹Free",
            bestselling: false,
            icon: FiEye,
            iconColor: "text-[#ff9800]",
            titleColor: "text-[#ff5c5c] opacity-60",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                { title: "Stream Assessment", desc: "Part 1 of 4-dimensional assessment to assess workstyle.", tag: "LIMITED ACCESS" },
                { title: "Career Content", desc: "Well-researched Information on hundreds of career options." },
                { title: "25 Page Stream Report", desc: "Detailed assessment report containing best-fit stream matches and personalized development plans.", locked: true },
                { title: "Career Counselling", desc: "Online career counselling session of up to 60 minutes with Mindler's certified and experienced coaches.", locked: true }
            ],
            hasSessionSelector: false,
            hasEmailInput: true,
            buttonText: "Take Free Demo",
            linkText: "Learn more"
        }
    ],
    comparison: {
        title: "Why Choose Mindler vs. Other Platforms?",
        description: "Compare all leading career counselling platforms in India, to see how Mindler tops the charts across all major elements of career guidance.",
        ctaText: "View Full Report",
        ctaLink: "#"
    },
    testimonials: [
        {
            type: "video",
            youtubeId: "dQw4w9WgXcQ",
            title: "Before & After Sessions - Vedant Srivastava",
            author: "Vedant Srivastava",
            overlayText: { pre: "re", main: "& After" }
        },
        {
            type: "quote",
            text: "All the things the assessment told me about myself and my interests were so true.",
            author: "Sneha",
            role: "DPS RK Puram",
            image: "/api/placeholder/100/100"
        },
        {
            type: "quote",
            text: "Mindler provided a mentored framework for my son's ambitions to achieve and succeed.",
            author: "Kavita",
            role: "Parent",
            image: "/api/placeholder/100/100"
        },
        {
            type: "quote",
            text: "Signing up for Mindler, and meeting and interacting with their experienced team was one of the decisions I made.",
            author: "Shaurya",
            role: "Aga Khan Academy",
            image: "/api/placeholder/100/100"
        },
        {
            type: "story_card",
            text: "How Nitya overcame her inhibitions and biases to choose the stream best aligned to her career goals.",
            highlightName: "Nitya",
            image: "/api/placeholder/100/100",
            linkText: "Read full story"
        },
        {
            type: "video",
            youtubeId: "dQw4w9WgXcQ",
            title: "Before & After Sessions - Arshiya Mittal",
            author: "Arshiya Mittal",
            overlayText: { pre: "re", main: "& After" }
        }
    ],
    faqs: [
        {
            question: "Tell me more about the Career Experts who will guide me through my stream choice.",
            answer: "Your career and stream choice will be in the safe hands of some of the top career coaches in India. Our team of career counsellors and experts consists of specialists from premier institutions such as Harvard University, ISB, IIT, Delhi University, and include India's leading psychologists, with 15+ years of experience in the field."
        },
        {
            question: "Do you involve parents also in the counselling process?",
            answer: "We believe that parents have an integral role to play in their child's career decision-making and future, especially at this young age. Thus, we encourage parents to be involved in the process, and take inputs from them during the counselling sessions to gain a better understanding of the child."
        },
        {
            question: "Are classes 8th and 9th too early for taking career guidance?",
            answer: "Students in Classes 8th and 9th are at the perfect stage to begin taking a planned approach towards their career. This is the stage where attitudes and beliefs about career begin to get formed. Thus, creating awareness of careers at this stage gives one enough time to explore their abilities and interests. This early exposure also helps one to avoid limiting their pool of career options, and choose from a wider range of opportunities."
        },
        {
            question: "What is the duration of the stream assessment? Do I have to take it in a single sitting?",
            answer: "The stream assessment takes about 1.5 hours in total to complete. However, you don't need to complete it in a single go. The assessment autosaves, so that you can pick up from where you last left off."
        },
        {
            question: "Do I get support after my sessions with the coach are over?",
            answer: "Yes, absolutely! After your session, you will receive a personalized Action Plan based on your discussion with the coach. In addition, you can continue to ask questions to Orion, your AI coach, directly from your dashboard. For deeper or broader discussions beyond the scope of Orion and your Action Plan, you may choose to book an additional session with a career coach for extended support."
        },
        {
            question: "Are your assessments only available online? Can I give them in a paper-pen format?",
            answer: "Our career assessments have been made completely in the online form, specifically because online assessments are more effective and superior to paper-and-pen tests. Our stream assessment provides access to your results, stream recommendations, reports, action plans, etc. through a single dashboard, which cannot happen with a pen-and-paper test. Online assessments give the added benefit of convenience, since they can be taken from the comfort of your home, further contributing to the accuracy of results."
        }
    ]
};

// Default export wrapper for current usage
const Class8to9Counselling = () => {
    return <CounsellingPageTemplate data={CLASS_8_9_DATA} />;
};

export default Class8to9Counselling;
