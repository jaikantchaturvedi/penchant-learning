// import {
//     FiBookOpen,
//     FiSearch,
//     FiUser,
//     FiFileText,
//     FiEye,
//     FiMic,
// } from "react-icons/fi";
// import { CounsellingPageTemplate, CounsellingPageData } from "@/Components/CounsellingPageTemplate";

// const liberalArtsPageData: CounsellingPageData = {

//     // ─── HERO ────────────────────────────────────────────────────────────────
//     hero: {
//         title: "Pave Your Path to a Liberal Arts Education",
//         subtitle: "Exhaustive guidance for applications to Liberal Arts universities.",
//         ctaText: "Get in Touch",
//         ctaLink: "#contact",
//         features: [
//             "About the Program",
//             "Testimonials",
//             "FAQs",
//             "Contact Us",
//         ],
//         backgroundImage: "/images/liberal_arts_hero.png",
//     },

//     // ─── FEATURE ICONS (About the Program) ───────────────────────────────────
//     features: [
//         {
//             icon: FiBookOpen,
//             text: "Understanding the Curriculum — Comprehend the specific nuances of the liberal arts curriculum and understand how it could be a game-changer for your career.",
//         },
//         {
//             icon: FiSearch,
//             text: "Course Selection — Identify subjects that fit with your profile and ambitions. Choose your major and minor subject combination.",
//         },
//         {
//             icon: FiUser,
//             text: "Profile Evaluation & Profile Building — Work with your coach to zero-in on the right profile-building activities to strengthen your application.",
//         },
//         {
//             icon: FiFileText,
//             text: "Personalized Application Development — Plan, edit & fine-tune your application elements to present your unique personal brand and stand out from the crowd.",
//         },
//         {
//             icon: FiEye,
//             text: "In-Depth Personal Insights — Gain unparalleled personal insights about yourself which will guide you as you go forward in your academic pursuits.",
//         },
//         {
//             icon: FiMic,
//             text: "Interview Preparation — Get specific insights from your coach on how to ace an interview, including do's & don'ts, code of conduct and mock simulations.",
//         },
//     ],

//     // ─── HOW IT WORKS — not needed for this page ─────────────────────────────
//     // howItWorks: omitted

//     // ─── SUCCESS STORY — not needed for this page ────────────────────────────
//     // successStory: omitted

//     // ─── PLANS — not needed for this page ────────────────────────────────────
//     // plans: [],

//     // ─── COMPARISON — not needed for this page ───────────────────────────────
//     // comparison: {
//     //     title: "Why Choose Penchant Learning vs. Other Platforms?",
//     //     description:
//     //         "Compare all leading career counselling platforms in India to see how Penchant Learning tops the charts across all major elements of career guidance.",
//     //     ctaText: "View Full Report",
//     //     ctaLink: "/top-career-guidance-platforms-in-india",
//     // },

//     // ─── TESTIMONIALS ────────────────────────────────────────────────────────
//     testimonials: [
//         {
//             type: "quote",
//             text: "Penchant Learning stepped in and cleared the mental chaos and brought my daughter's mind on the right track. The guidance for application forms, interview and GD preparations, and SOP was very impressive. They got her to realise her strengths and interests and enabled her to work on her weaknesses.",
//             author: "Rashmi",
//             role: "Parent",
//             image: "/images/testi-rashmi.jpg",
//         },
//         {
//             type: "quote",
//             text: "Working with Penchant Learning was an amazing experience. It helped me explore and discover new avenues, keeping in mind my interests and hobbies. The team is very supportive and understanding. They helped me with my admissions and enabled me to get admission in my dream university.",
//             author: "Pratham",
//             role: "Student",
//             image: "/images/testi-pratham.jpg",
//         },
//         {
//             type: "quote",
//             text: "Penchant Learning has helped me transform as an individual. It has helped me streamline my career path and played a pivotal role in my decision making. The entire team is extremely helpful and every member has been instrumental in my success.",
//             author: "Manav",
//             role: "Student",
//             image: "/images/testi-manav.jpg",
//         },
//     ],

//     // ─── FAQs ────────────────────────────────────────────────────────────────
//     faqs: [
//         {
//             question: "Who will guide me in my applications to liberal arts programs?",
//             answer:
//                 "The coaches for our Liberal Arts program are experts at their work and have helped many students get into top Liberal Arts programs in India. The program is not limited to fixed hours and edits — it continues until you and your coach are happy with the application you'll be submitting.",
//         },
//         {
//             question: "Your office is in New Delhi — how will the program function if I reside in another city?",
//             answer:
//                 "We aim to provide you the best guidance, irrespective of where you live. We connect with our clients through Skype/Video Calls, Phone Calls and Emails at pre-scheduled hours, which replicate the in-person counselling experience.",
//         },
//         {
//             question: "When is the right time to enroll for such a program?",
//             answer:
//                 "Your timeline depends on your level of preparation. If you're just starting with no preparation, you should begin in Class XI. If you have a strong profile, Class XII is fine. Generally, approach an application at least 4–5 months before the application round.",
//         },
//         {
//             question: "How will you help me build my profile?",
//             answer:
//                 "Profile building is one of the most important application elements. The right profile is a mix of three key factors — you, your course, and your target college. Our coaches will help you identify the right activities that play to your strengths and present a well-rounded application.",
//         },
//         {
//             question: "Will you prepare me for interviews too?",
//             answer:
//                 "Absolutely! The second round for many Liberal Arts programs involves on-the-spot essays, group tasks and a personal interview. If you are invited for a second round, our counsellors will go all-in to help you ace it.",
//         },
//         {
//             question: "What will the program include?",
//             answer:
//                 "The program is designed to help you succeed in your applications to Liberal Arts programs. We lay extensive emphasis on each step — selecting the right activities, identifying the right course, and getting the storyline for your essay and letter correct. We help you develop an application from start to finish that helps you truly stand out.",
//         },
//     ],

//     // ─── CONTACT ─────────────────────────────────────────────────────────────
//     contact: {
//         title: "What can we help you with?",
//         subtitle: "Fill out the form below and we will get in touch with you.",
//         phoneNumber: "+91 87449 87449",
//         availability: "Monday - Friday",
//         availabilityHours: "10 am - 7 pm",
//         phoneImage: "/images/contact-phone.png",
//         queryOptions: [
//             "About the Liberal Arts Program",
//             "Profile Building & Evaluation",
//             "Application Support",
//             "Interview Preparation",
//             "Other",
//         ],
//         buttonText: "Submit",
//     },
// };

// // ─── Page wrapper ─────────────────────────────────────────────────────────────
// const LiberalArtsCounselling = () => {
//     return <CounsellingPageTemplate data={liberalArtsPageData} />;
// };

// export default LiberalArtsCounselling;

import { FiBookOpen, FiSearch, FiUser, FiFileText, FiEye, FiMic } from "react-icons/fi";
import { AdmissionsPageTemplate, AdmissionsPageData } from "@/Components/Admissionspagetemplate";
const liberalArtsData: AdmissionsPageData = {

    hero: {
        title: "Pave Your Path to a Liberal Arts Education",
        subtitle: "Exhaustive guidance for applications to Liberal Arts universities.",
        ctaText: "Get in Touch",
        ctaLink: "#contact",
        navLinks: [
            { label: "About the Program", href: "#program" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "FAQs", href: "#faqs" },
            { label: "Contact Us", href: "#contact" },
        ],
        backgroundImage: "/images/liberal_arts_hero.png",
    },

    programSectionTitle: "About the Program",
    programFeatures: [
        {
            icon: FiBookOpen,
            title: "Understanding the Curriculum",
            description: "Comprehend the specific nuances of the liberal arts curriculum and understand how it could be a game-changer for your career.",
        },
        {
            icon: FiSearch,
            title: "Course Selection",
            description: "Identify subjects that fit with your profile and ambitions. Choose your major and minor subject combination.",
        },
        {
            icon: FiUser,
            title: "Profile Evaluation & Profile Building",
            description: "Work with your coach to zero-in on the right profile-building activities to strengthen your application.",
        },
        {
            icon: FiFileText,
            title: "Personalized Application Development",
            description: "Plan, edit & fine-tune your application elements to present your unique personal brand and stand out from the crowd.",
        },
        {
            icon: FiEye,
            title: "In-Depth Personal Insights",
            description: "Gain unparalleled personal insights about yourself which will guide you as you go forward in your academic pursuits.",
        },
        {
            icon: FiMic,
            title: "Interview Preparation",
            description: "Get specific insights from your coach on how to ace an interview, including do's & don'ts, code of conduct and mock simulations.",
        },
    ],

    // No howItWorks, universities, or applicationPrograms for liberal arts
    
    testimonials: [
        {
            text: "Penchant Learning stepped in and cleared the mental chaos and brought my daughter's mind on the right track. The guidance for application forms, interview and GD preparations, and SOP was very impressive. They helped her realise her strengths and enabled her to work on her weaknesses.",
            author: "Rashmi",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        },
        {
            text: "Working with Penchant Learning was an amazing experience. It helped me explore and discover new avenues keeping in mind my interests and hobbies. They helped me with my admissions and enabled me to get into my dream university.",
            author: "Pratham",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
        },
        {
            text: "Penchant Learning has helped me transform as an individual. It streamlined my career path and played a pivotal role in my decision making. The entire team is extremely helpful and every member has been instrumental in my success.",
            author: "Manav",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        },
    ],

    faqs: [
        {
            question: "Who will guide me in my applications to liberal arts programs?",
            answer: "The coaches for our Liberal Arts program are experts at their work and have helped many students get into top Liberal Arts programs in India. The program is not limited to fixed hours and edits — it continues until you and your coach are happy with the application you'll be submitting.",
        },
        {
            question: "Your office is in New Delhi — how will the program function if I reside in another city?",
            answer: "We aim to provide the best guidance irrespective of where you live. We connect with clients through Skype/Video Calls, Phone Calls and Emails at pre-scheduled hours, which replicate the in-person counselling experience.",
        },
        {
            question: "When is the right time to enroll for such a program?",
            answer: "Your timeline depends on your level of preparation. If you're just starting, begin in Class XI. If you have a strong profile, Class XII is fine. Generally, approach an application at least 4–5 months before the application round.",
        },
        {
            question: "How will you help me build my profile?",
            answer: "Profile building is one of the most important application elements. The right profile is a mix of three key factors — you, your course, and your target college. Our coaches identify activities that play to your strengths and help present a well-rounded application.",
        },
        {
            question: "Will you prepare me for interviews too?",
            answer: "Absolutely! The second round for many Liberal Arts programs involves on-the-spot essays, group tasks and a personal interview. If invited for a second round, our counsellors will go all-in to help you ace it.",
        },
        {
            question: "What will the program include?",
            answer: "The program covers every step — selecting the right activities, identifying the right course, and crafting the storyline for your essay and letter. We help you develop a complete application that helps you truly stand out.",
        },
    ],

    contact: {
        title: "What can we help you with?",
        subtitle: "Fill out the form below and we will get in touch with you.",
        queryOptions: [
            "About the Liberal Arts Program",
            "Profile Building & Evaluation",
            "Application Support",
            "Interview Preparation",
            "Other",
        ],
        buttonText: "Submit",
        phoneImage: "/images/ContactUs.svg",
    },
};

const LiberalArtsCounselling = () => <AdmissionsPageTemplate data={liberalArtsData} />;
export default LiberalArtsCounselling;