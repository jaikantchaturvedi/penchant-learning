import {
    FiSearch,
    FiMap,
    FiBriefcase,
    FiArrowRight,
    FiCompass,
    FiBookOpen,
    FiEye,
    FiLock,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
// import { CounsellingPageData } from "@/Components/templates/CounsellingPageTemplate"; // adjust path as needed
import { CounsellingPageTemplate, CounsellingPageData } from "@/Components/CounsellingPageTemplate";

const graduatesPageData: CounsellingPageData = {

    // ─── HERO ────────────────────────────────────────────────────────────────
    hero: {
        title: "Explore your career prospects and create your strategy towards success",
        subtitle:
            "Get a comprehensive understanding of skills and qualifications required to pursue your dream career.",
        ctaText: "Get Started",
        ctaLink: "https://dashboard.Panchant Learning.com/onboarding",
        features: [
            "Career Assessment",
            "Personalized Guidance",
            "Internships & Job Search Strategy",
            "Resume Review",
            "Interview Training",
            "University Application Support",
        ],
        backgroundImage: "/images/graduates-hero-bg.svg",
    },

    // ─── FEATURE ICONS ───────────────────────────────────────────────────────
    features: [
        {
            icon: FiSearch,
            text: "Find the best fit career option based on your interests, aptitude, academic history & future prospects",
        },
        {
            icon: FiMap,
            text: "Get expert guidance from our coaches to create a career roadmap strategy",
        },
        {
            icon: FiBriefcase,
            text: "Understand the career landscape of your chosen domain, and future prospects associated with the same",
        },
        {
            icon: FiArrowRight,
            text: "Plan the ideal next step in your academic or professional journey with our expert coaches",
        },
    ],
    services: {
        title: "Our Services",
        subtitle: "Select the services you are interested in and we will create a customised plan just for you.",
        services: [
            { id: "assessment", name: "Career Assessment", price: 2400, description: "5-dimensional career assessment" },
            { id: "counselling-1", name: "1 Counselling Session", price: 3000, description: "60-min session with expert coach" },
            { id: "counselling-3", name: "3 Counselling Sessions", price: 7500, description: "3x 60-min sessions with expert coach" },
            { id: "resume", name: "Resume Review", price: 1500, description: "Expert feedback on your resume" },
            { id: "interview", name: "Interview Training", price: 2000, description: "Mock interviews with feedback" },
            { id: "internship", name: "Internship & Job Search Strategy", price: 2500, description: "Guided job search planning" },
        ]
    },

    specialPackages: {
        title: "Special Services and Packages",
        packages: [
            {
                icon: "/images/essay-icon.svg",
                title: "Essay/SOP Review",
                description: "With our experts learn how to translate personal and professional experiences into impactful narratives while also connecting with the unique ethos of each university.",
                ctaText: "Inquire Now",
                ctaLink: "https://wa.me/919468643369"
            },
            {
                icon: "/images/masters-icon.svg",
                title: "Comprehensive Package - Master's Degree (Overseas)",
                description: "The comprehensive package includes all essential services from Program and University selection, CV/Resume reviews, SoP/Essay reviews, and Interview Prep with unlimited sessions.",
                ctaText: "Inquire Now",
                ctaLink: "https://wa.me/919468643369"
            },
            {
                icon: "/images/mba-icon.svg",
                title: "Premium Package MiM/MBA (Overseas/India)",
                description: "The MiM/MBA application strategy will be designed to match the applicant's profile. All essential services from Program and University selection, CV/Resume reviews, SoP/Essay reviews, and Interview Prep are included.",
                ctaText: "Inquire Now",
                ctaLink: "https://wa.me/919468643369"
            },
        ]
    },

    // ─── HOW IT WORKS ────────────────────────────────────────────────────────
    // howItWorks: [
    //     {
    //         id: 1,
    //         title: "5-Dimensional Career Assessment",
    //         description:
    //             "Evaluate yourself on 5 dimensions important for career success: Orientation Style, Interest, Personality, Aptitude and Emotional Intelligence through our advanced career assessment. Identify top careers from hundreds of options to find out what suits you best.",
    //         image: "/images/graduates-assessment.png", // replace with your asset
    //         ctaText: "Take Free Demo",
    //         ctaLink: "#",
    //         decorationClass:
    //             "absolute -bottom-4 -right-4 w-24 h-24 bg-[#fdf3ea] rounded-full -z-10",
    //         reverse: false,
    //     },
    //     {
    //         id: 2,
    //         title: "34-Page Career Report",
    //         description:
    //             "Get a detailed understanding of your results, best-fit careers and areas of improvement through our comprehensive assessment report. Your report contains top career matches and personalized development plans.",
    //         image: "/images/graduates-report.png",
    //         ctaText: "See Sample Report",
    //         ctaLink: "#",
    //         decorationClass:
    //             "absolute -bottom-4 -left-4 w-24 h-24 bg-[#fdf3ea] rounded-full -z-10",
    //         reverse: true,
    //     },
    //     {
    //         id: 3,
    //         title: "Expert Career Counselling",
    //         description:
    //             "Get direct guidance from Panchant Learning experts through online counselling sessions to create a career plan. Select your best-fit career, choose the right course and college, and make a step-by-step plan for your career goals.",
    //         image: "/images/graduates-counselling.png",
    //         ctaText: "Book a Session",
    //         ctaLink: "#",
    //         decorationClass:
    //             "absolute -bottom-4 -right-4 w-24 h-24 bg-[#fdf3ea] rounded-full -z-10",
    //         reverse: false,
    //     },
    // ],

    // ─── SUCCESS STORY ───────────────────────────────────────────────────────
    successStory: {
        category: "Success Story",
        title: "How Tarun Got his Career and Confidence on Track with the Help of Panchant Learning Experts",
        story:
            "Tarun Bhardwaj, a 25-year-old student, had dropped out of Engineering because it didn't excite him. Panchant Learning career experts helped him choose the perfect career and course to utilise his skill-set, and make up for his gap years through the right opportunities. He is now on the path to achieving his new-found goals.",
        ctaText: "Read Full Story",
        ctaLink: "https://www.Panchant Learning.com/success-stories",
        image: "/images/tarun-bhardwaj.png",
        personName: "Tarun Bhardwaj",
    },

    // ─── PLANS & PRICING ─────────────────────────────────────────────────────
    plans: [
        {
            id: "realize",
            name: "Realize",
            subtitle: "",
            price: "₹25,000 onwards",
            bestselling: false,
            icon: FaStar,
            iconColor: "text-[#FFD700]",
            titleColor: "text-[#ff5c5c]",
            borderColor: "border-gray-100",
            accentColor: "#8c5a31",
            features: [
                {
                    title: "Career Assessment",
                    desc: "5-dimensional assessment with best-fit career recommendations.",
                },
                {
                    title: "Career Content",
                    desc: "Well-researched information on hundreds of career options.",
                },
                {
                    title: "34 Page Career Report",
                    desc: "Detailed assessment report containing top career matches and personalized development plans.",
                },
                {
                    title: "Career Counselling",
                    desc: "Online career counselling session of up to 60 minutes with Panchant Learning's certified and experienced coaches.",
                },
                {
                    title: "Dedicated Career Mentor",
                    desc: "Personalised mentoring, goal monitoring and steady support.",
                },
            ],
            hasSessionSelector: false,
            buttonText: "Schedule Your Free Call Now",
            linkText: "Learn more",
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
            borderColor: "border-[#8c5a31]",
            accentColor: "#8c5a31",
            features: [
                {
                    title: "Career Assessment",
                    desc: "5-dimensional assessment with best-fit career recommendations.",
                },
                {
                    title: "Career Content",
                    desc: "Well-researched information on hundreds of career options.",
                },
                {
                    title: "34 Page Career Report",
                    desc: "Detailed assessment report containing top career matches and personalized development plans.",
                },
                {
                    title: "Career Counselling",
                    desc: "Online career counselling session of up to 60 minutes with Panchant Learning's certified and experienced coaches.",
                },
                {
                    title: "Dedicated Career Mentor",
                    desc: "Personalised mentoring, goal monitoring and steady support.",
                    locked: true,
                },
            ],
            hasSessionSelector: true,
            buttonText: "Buy Now",
            linkText: "Learn more",
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
                {
                    title: "Career Assessment",
                    desc: "5-dimensional assessment with best-fit career recommendations.",
                },
                {
                    title: "Career Content",
                    desc: "Well-researched information on hundreds of career options.",
                },
                {
                    title: "34 Page Career Report",
                    desc: "Detailed assessment report containing top career matches and personalized development plans.",
                },
                {
                    title: "Career Counselling",
                    desc: "Online career counselling session of up to 60 minutes with Panchant Learning's certified and experienced coaches.",
                    locked: true,
                },
                {
                    title: "Dedicated Career Mentor",
                    desc: "Personalised mentoring, goal monitoring and steady support.",
                    locked: true,
                },
            ],
            hasSessionSelector: false,
            buttonText: "Buy Now",
            linkText: "Learn more",
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
                {
                    title: "Career Assessment",
                    desc: "Part 1 of 5-dimensional assessment to assess workstyle.",
                    tag: "Limited\nAccess",
                },
                {
                    title: "Career Content",
                    desc: "Well-researched information on hundreds of career options.",
                },
                {
                    title: "34 Page Career Report",
                    desc: "Detailed assessment report containing top career matches and personalized development plans.",
                    locked: true,
                },
                {
                    title: "Career Counselling",
                    desc: "Online career counselling session of up to 60 minutes with Panchant Learning's certified and experienced coaches.",
                    locked: true,
                },
                {
                    title: "Dedicated Career Mentor",
                    desc: "Personalised mentoring, goal monitoring and steady support.",
                    locked: true,
                },
            ],
            hasSessionSelector: false,
            hasEmailInput: true,
            buttonText: "Take Free Demo",
            linkText: "Learn more",
        },
    ],

    // ─── COMPARISON ──────────────────────────────────────────────────────────
    comparison: {
        title: "Why Choose Panchant Learning vs. Other Platforms?",
        description:
            "Compare all leading career counselling platforms in India, to see how Panchant Learning tops the charts across all major elements of career guidance.",
        ctaText: "View Full Report",
        ctaLink: "#contact",
    },

    // ─── TESTIMONIALS ────────────────────────────────────────────────────────
    testimonials: [
        {
            type: "quote",
            text: "All the things the assessment told me about myself and my interests were so true.",
            author: "Sneha",
            role: "DPS RK Puram",
            image: "/images/testi-sneha.jpg", // replace with your asset
        },
        {
            type: "quote",
            text: "Panchant Learning provided a mentored framework for my son's ambitions to achieve and succeed.",
            author: "Kavita",
            role: "Parent",
            image: "/images/testi-kavita.jpg",
        },
        {
            type: "quote",
            text: "Signing up for Panchant Learning, and meeting and interacting with their experienced team was one of the best decisions I made.",
            author: "Shaurya",
            role: "Aga Khan Academy",
            image: "/images/testi-shaurya.jpg",
        },
        // {
        //     type: "story_card",
        //     text: "How Nitya overcame her inhibitions and biases to choose the stream best aligned to her career goals.",
        //     highlightName: "Nitya",
        //     image: "/images/nitya.png",
        //     linkText: "Read full story",
        // },
    ],

    // ─── FAQs ────────────────────────────────────────────────────────────────
    faqs: [
        {
            question:
                "Tell me more about the Career Experts who will guide me through my career choice.",
            answer:
                "Your career choice will be in the safe hands of some of the top career counselors for college students in India. Our team consists of specialists from premier institutions such as Harvard University, ISB, IIT, and Delhi University, including India's leading psychologists with 15+ years of experience in the field.",
        },
        {
            question:
                "I am a working professional. Will this program be able to help me?",
            answer:
                "Our career counselling for college students and graduates programs are suited for individuals in the age range of 18–26, typically with work experience between 0–6 years. We currently do not have programs available for people with work experience of 6+ years.",
        },
        {
            question:
                "Will you also be able to help me with details on overseas colleges and courses?",
            answer:
                "Yes, we provide information for overseas programs and colleges for your target careers and help you shortlist them. This is included in our Explore program. For more extensive guidance on the application process, we also have a comprehensive Overseas Coach program. Get in touch at hello@Panchant Learning.com or +91 94686 43369.",
        },
        {
            question: "Do I get support after my sessions with the coach are over?",
            answer:
                "Yes! After your session you will receive a personalized Action Plan. You can also continue asking questions to Orion, your AI coach, from your dashboard. For deeper discussions, you may book additional sessions with a career coach for extended support.",
        },
        {
            question:
                "How much time does the entire career guidance process take?",
            answer:
                "The career guidance process is divided into two parts — career assessment and counselling. The online assessment takes about 2.5 hours to complete. Each counselling session typically lasts 1 to 1.5 hours. The gap between sessions is flexible based on your requirement and availability.",
        },
        {
            question:
                "I do not require the career assessment. Can I just avail the counselling sessions?",
            answer:
                "We do not recommend counselling without the assessment as it gives the counsellor key insights about you. However, in certain cases we offer counselling-only sessions at ₹5,000, which includes all Explore features minus the assessment. This is offered on a case-by-case basis. Contact us at hello@Panchant Learning.com or +91 94686 43369.",
        },
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
const GraduateCounselling = () => {
    return <CounsellingPageTemplate data={graduatesPageData} />;
};

export default GraduateCounselling;