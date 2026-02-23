import { FiCompass, FiUser, FiFileText, FiBook, FiSearch, FiCheckCircle } from "react-icons/fi";
// import { AdmissionsPageTemplate, AdmissionsPageData } from "@/Components/AdmissionsPageTemplate";
import { AdmissionsPageTemplate, AdmissionsPageData } from "@/Components/Admissionspagetemplate";

const overseasData: AdmissionsPageData = {

    hero: {
        title: "Your dream university awaits. Let's build the perfect application.",
        subtitle: "End-to-end overseas guidance and application consulting.",
        ctaText: "Get in Touch",
        ctaLink: "#contact",
        navLinks: [
            { label: "How We Help", href: "#how" },
            { label: "Programs", href: "#programs" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "FAQs", href: "#faqs" },
            { label: "Contact Us", href: "#contact" },
        ],
        backgroundImage:"/images/OverseasBackground.svg"
    },

    programSectionTitle: "About the Program",
    programFeatures: [
        {
            icon: FiCompass,
            title: "College & Course Profiling",
            description: "Finalise your top career and course options and shortlist universities that fit well with your career aspirations, interests and profile.",
        },
        {
            icon: FiUser,
            title: "Profile Evaluation & Building",
            description: "Understand what your target colleges look for, identify your gap areas, and custom-build your profile with your coach.",
        },
        {
            icon: FiFileText,
            title: "Personalized Application Strategy",
            description: "Develop your application timeline, build a top-notch application, and perfect every element to present your best self.",
        },
        {
            icon: FiSearch,
            title: "University Research & Shortlisting",
            description: "Compare various countries and build your perfect target college list aligned with your career goals and preferences.",
        },
        {
            icon: FiBook,
            title: "Essays, SOP & Resume",
            description: "Craft compelling essays, statements of purpose and resumes that showcase your unique strengths and make you stand out.",
        },
        {
            icon: FiCheckCircle,
            title: "Interview Preparation",
            description: "Get expert coaching on how to ace your interviews with mock simulations, do's & don'ts, and personalized feedback.",
        },
    ],

    howItWorks: [
        {
            number: 1,
            title: "College & Course Profiling",
            sectionLabel: "Career and Course, or College and Country — Make all the right choices, in sync with your profile.",
            bullets: [
                {
                    heading: "Identify Your Best-Fit Career & Course",
                    desc: "Finalise your top career and course options through our 5-dimensional career assessment and expert guidance.",
                },
                {
                    heading: "Finalise Destinations",
                    desc: "Compare various countries to select the right one that aligns well with your course, career goals and preferences.",
                },
                {
                    heading: "Shortlist Universities",
                    desc: "Build your perfect target college list by identifying colleges that fit well with your career aspirations, interests & profile.",
                },
            ],
            image: "/images/overseas-step-1.png",
        },
        {
            number: 2,
            title: "Profile Evaluation & Profile Building",
            sectionLabel: "Evaluate your fitment with your target colleges. Strengthen your application the right way.",
            bullets: [
                {
                    heading: "Understand University Requirements",
                    desc: "Learn what your target colleges look for in candidates, and accordingly build your profile and customize your application.",
                },
                {
                    heading: "Identify Your Gap Areas",
                    desc: "Get specific insights from your coach on how your profile fits with college & program requirements and pinpoint areas you can work upon.",
                },
                {
                    heading: "Custom-Build Your Profile",
                    desc: "Work with your coach to zero-in on the right profile-building activities to strengthen your application for your target colleges.",
                },
            ],
            image: "/images/overseas-step-2.png",
        },
        {
            number: 3,
            title: "Personalized Application Strategy",
            sectionLabel: "Your application speaks volumes. Create one that presents your unique brand in the best light.",
            bullets: [
                {
                    heading: "Develop Your Application Timeline",
                    desc: "Keep track of the unique steps, requirements and deadlines of multiple colleges to ensure you execute everything in a timely manner.",
                },
                {
                    heading: "Build a Top-Notch Application",
                    desc: "Work with your coach to craft your application — from Essays to Resume — to showcase your unique strengths and stand out from the crowd.",
                },
                {
                    heading: "Perfect All Application Elements",
                    desc: "Plan, brainstorm, edit and fine-tune every single element of your application to ensure you present your best self to the admissions committee.",
                },
            ],
            image: "/images/overseas-step-3.png",
        },
    ],

    universities: [
        { name: "Oxford University", image: "/images/uni-oxford.png" },
        { name: "Harvard University", image: "/images/uni-harvard.png" },
        { name: "Yale University", image: "/images/uni-yale.png" },
        { name: "Stanford University", image: "/images/uni-stanford.png" },
        { name: "Princeton University", image: "/images/uni-princeton.png" },
        { name: "Wharton", image: "/images/uni-wharton.png" },
        { name: "INSEAD", image: "/images/uni-insead.png" },
        { name: "Columbia University", image: "/images/uni-columbia.png" },
        { name: "UC Berkeley", image: "/images/uni-berkeley.png" },
        { name: "University of Michigan", image: "/images/uni-michigan.png" },
        { name: "University of Edinburgh", image: "/images/uni-edinburgh.png" },
        { name: "New York University", image: "/images/uni-nyu.png" },
    ],
    universityTitle: "Successful Applications At",

    applicationPrograms: [
        // Undergraduate
        {
            type: "Undergraduate Admissions",
            region: "USA",
            title: "Undergraduate Application Programs in USA",
            description: "Our comprehensive application program is designed for success at undergraduate applications. You can go ahead with the program as is or customize it to suit your needs.",
            features: [
                "Course Shortlisting & Selection",
                "Major-Minor / Elective Selection",
                "College Research & Due Diligence",
                "College Shortlisting & Fitment",
                "Overall Application Strategy",
                "Application Timeline Strategy & Management",
                "Profile Evaluation & Gap Identification",
                "Profile Analysis & Profile Building",
                "Profile Monitoring & Course Correction",
                "Test Preparation Strategy (SAT/ACT/IELTS/TOEFL)",
                "Transcripts & Certificates Review",
                "Activity Profiling & Descriptors",
                "Application Storyline Building",
                "Statement of Purpose (Drafting & Review)",
                "Recommendation Letters (Drafting & Review)",
                "Interview Preparation",
            ],
        },
        {
            type: "Undergraduate Admissions",
            region: "UK / Europe",
            title: "Undergraduate Application Programs in UK / Europe",
            description: "Comprehensive guidance for undergraduate applications to top universities in the UK and Europe, tailored to the specific requirements of each institution.",
            features: [
                "University & Course Shortlisting",
                "UCAS Application Support",
                "Personal Statement (Drafting & Review)",
                "Profile Evaluation & Gap Identification",
                "Application Timeline Management",
                "Test Strategy (IELTS/TOEFL/A-levels)",
                "Interview Preparation",
                "Scholarship Guidance",
            ],
        },
        {
            type: "Undergraduate Admissions",
            region: "Canada",
            title: "Undergraduate Application Programs in Canada",
            description: "End-to-end guidance for undergraduate applications to top Canadian universities with support for all application requirements.",
            features: [
                "University & Program Shortlisting",
                "Application Essay (Drafting & Review)",
                "Profile Evaluation & Building",
                "Application Timeline Management",
                "Language Proficiency Test Strategy",
                "Scholarship & Financial Aid Guidance",
                "Study Permit Guidance",
            ],
        },
        {
            type: "Undergraduate Admissions",
            region: "Singapore / S.E. Asia",
            title: "Undergraduate Application Programs in Singapore / S.E. Asia",
            description: "Tailored support for undergraduate applications to leading universities in Singapore and Southeast Asia.",
            features: [
                "University & Course Shortlisting",
                "Personal Statement Support",
                "Profile Evaluation & Building",
                "Application Timeline Management",
                "Interview Preparation",
                "Scholarship Guidance",
            ],
        },
        {
            type: "Undergraduate Admissions",
            region: "Australia",
            title: "Undergraduate Application Programs in Australia",
            description: "Comprehensive guidance for undergraduate applications to top Australian universities.",
            features: [
                "University & Course Shortlisting",
                "Personal Statement Support",
                "Profile Evaluation & Building",
                "Application Timeline Management",
                "IELTS/TOEFL Strategy",
                "Student Visa Guidance",
                "Scholarship Guidance",
            ],
        },
        // Graduate
        {
            type: "Graduate Admissions",
            region: "USA",
            title: "Graduate Application Programs in USA",
            description: "Expert guidance for graduate admissions to top US universities, covering all elements from program selection to application submission.",
            features: [
                "Program & University Shortlisting",
                "Statement of Purpose (Drafting & Review)",
                "CV/Resume Review",
                "Recommendation Letters Guidance",
                "Profile Evaluation & Gap Identification",
                "Application Timeline Management",
                "GRE/GMAT Strategy",
                "Interview Preparation",
                "Scholarship & Funding Guidance",
            ],
        },
        {
            type: "Graduate Admissions",
            region: "UK / Europe",
            title: "Graduate Application Programs in UK / Europe",
            description: "End-to-end support for graduate applications to top UK and European universities.",
            features: [
                "Program & University Shortlisting",
                "Personal Statement (Drafting & Review)",
                "CV/Resume Review",
                "Recommendation Letters Guidance",
                "Application Timeline Management",
                "IELTS/TOEFL Strategy",
                "Interview Preparation",
            ],
        },
        {
            type: "Graduate Admissions",
            region: "Canada",
            title: "Graduate Application Programs in Canada",
            description: "Comprehensive guidance for graduate admissions to top Canadian institutions.",
            features: [
                "Program & University Shortlisting",
                "Statement of Purpose Support",
                "CV/Resume Review",
                "Application Timeline Management",
                "Language Proficiency Strategy",
                "Study Permit Guidance",
            ],
        },
        {
            type: "Graduate Admissions",
            region: "Singapore / S.E. Asia",
            title: "Graduate Application Programs in Singapore / S.E. Asia",
            description: "Tailored support for graduate applications to leading universities in Singapore and Southeast Asia.",
            features: [
                "Program & University Shortlisting",
                "Personal Statement Support",
                "CV/Resume Review",
                "Application Timeline Management",
                "Interview Preparation",
            ],
        },
        {
            type: "Graduate Admissions",
            region: "Australia",
            title: "Graduate Application Programs in Australia",
            description: "Expert guidance for graduate applications to top Australian universities.",
            features: [
                "Program & University Shortlisting",
                "Personal Statement Support",
                "CV/Resume Review",
                "Application Timeline Management",
                "Student Visa Guidance",
            ],
        },
        // B-School
        {
            type: "B-School Admissions",
            region: "USA",
            title: "MBA/B-School Application Programs in USA",
            description: "The MiM/MBA application strategy will be designed to match the applicant's profile and interests. All essential services from Program and University selection through Interview Prep are included.",
            features: [
                "Program & School Shortlisting",
                "Application Strategy",
                "Essays (Drafting & Review)",
                "CV/Resume Review",
                "Recommendation Letters Guidance",
                "GMAT/GRE Strategy",
                "Interview Preparation",
                "Scholarship & Fellowship Guidance",
                "Profile Evaluation & Gap Identification",
            ],
        },
        {
            type: "B-School Admissions",
            region: "UK / Europe",
            title: "MBA/B-School Application Programs in UK / Europe",
            description: "Comprehensive guidance for MBA and business school applications to top institutions in UK and Europe including INSEAD, LBS, and others.",
            features: [
                "School & Program Shortlisting",
                "Essays (Drafting & Review)",
                "CV/Resume Review",
                "Recommendation Letters Guidance",
                "Interview Preparation",
                "GMAT/GRE Strategy",
                "Scholarship Guidance",
            ],
        },
        {
            type: "B-School Admissions",
            region: "Canada",
            title: "MBA/B-School Application Programs in Canada",
            description: "End-to-end support for MBA applications to top Canadian business schools.",
            features: [
                "School & Program Shortlisting",
                "Essays & Personal Statement Support",
                "CV/Resume Review",
                "Interview Preparation",
                "GMAT/GRE Strategy",
                "Study Permit Guidance",
            ],
        },
        {
            type: "B-School Admissions",
            region: "Singapore / S.E. Asia",
            title: "MBA/B-School Application Programs in Singapore / S.E. Asia",
            description: "Tailored MBA application support for top business schools in Singapore and Southeast Asia.",
            features: [
                "School & Program Shortlisting",
                "Essays & Personal Statement Support",
                "CV/Resume Review",
                "Interview Preparation",
                "GMAT/GRE Strategy",
            ],
        },
        {
            type: "B-School Admissions",
            region: "Australia",
            title: "MBA/B-School Application Programs in Australia",
            description: "Comprehensive guidance for MBA applications to leading Australian business schools.",
            features: [
                "School & Program Shortlisting",
                "Essays & Personal Statement Support",
                "CV/Resume Review",
                "Interview Preparation",
                "Student Visa Guidance",
            ],
        },
    ],

    testimonials: [
        {
            text: "Panchant Learning stepped in and cleared the mental chaos. The guidance for application forms, interview and GD preparations, and SOP was very impressive. They helped my daughter realise her strengths and enabled her to work on her weaknesses.",
            author: "Rashmi, Parent",
            image: "/images/testi-rashmi.jpg",
        },
        {
            text: "Working with Panchant Learning was an amazing experience. It helped me explore and discover new avenues keeping in mind my interests and hobbies. They helped me get admission in my dream university.",
            author: "Pratham, Student",
            image: "/images/testi-pratham.jpg",
        },
        {
            text: "Panchant Learning has helped me transform as an individual. It streamlined my career path and played a pivotal role in my decision making. Every team member has been instrumental in my success.",
            author: "Manav, Student",
            image: "/images/testi-manav.jpg",
        },
    ],

    faqs: [
        {
            question: "Who will guide me through my overseas applications?",
            answer: "Our coaches are experts in overseas admissions and have helped students get into top universities worldwide including Oxford, Harvard, Yale and more. The program continues until you and your coach are satisfied with every application element.",
        },
        {
            question: "How does the program work if I am not in New Delhi?",
            answer: "We serve students across India and the world through Skype/Video Calls, Phone Calls and Emails at pre-scheduled hours. The experience fully replicates in-person counselling.",
        },
        {
            question: "When should I start the overseas application process?",
            answer: "Ideally, you should start at least 12–18 months before your target intake. Early starters have more time for profile building, test preparation and crafting strong applications.",
        },
        {
            question: "Do you help with scholarships and financial aid?",
            answer: "Yes, our coaches provide guidance on scholarships, fellowships and financial aid options at your target universities and help you build the strongest possible application for these opportunities.",
        },
        {
            question: "Can I customize the program to my specific needs?",
            answer: "Absolutely. Our programs are highly flexible and can be customized according to your specific requirements, target universities, application stage and timeline.",
        },
        {
            question: "Do you also help with visa applications?",
            answer: "We provide general guidance on student visa requirements and processes. For detailed visa support, we work alongside trusted visa consultants to ensure you have all the help you need.",
        },
    ],

    contact: {
        title: "What can we help you with?",
        subtitle: "Fill out the form below and we will get in touch with you.",
        queryOptions: [
            "About Overseas Admissions Program",
            "University & Course Shortlisting",
            "Application & Essay Support",
            "Profile Building",
            "Interview Preparation",
            "Other",
        ],
        buttonText: "Submit",
        phoneImage: "/images/ContactUs.svg",
    },
};

const OverseasCounselling = () => <AdmissionsPageTemplate data={overseasData} />;
export default OverseasCounselling;