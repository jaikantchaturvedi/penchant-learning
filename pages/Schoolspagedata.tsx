// import { SchoolsPageTemplate, SchoolsPageData } from "@/Components/SchoolsPageTemplate";
import { SchoolsPageTemplate, SchoolsPageData } from "@/Components/Schoolspagetemplate";

const schoolsData: SchoolsPageData = {

    // ── HERO ─────────────────────────────────────────────────────────────────
    // Replace this with your own hero background image
    heroBg: "/images/schools-hero.png",
    heroTitle: "Creating a Career Guidance Ecosystem in Sync with the Vision of NEP",
    heroCtaText: "Enquire Now",
    heroCtaLink: "#contact",

    // ── STATS — real Mindler CDN icons ────────────────────────────────────────
    stats: [
        { icon: "https://mindlerimages.imgix.net/tinyimg/Group%201310.svg", number: "3 Million", label: "Students Impacted" },
        { icon: "https://mindlerimages.imgix.net/tinyimg/Group%201311.svg", number: "70,000", label: "Educators Certified" },
        { icon: "https://mindlerimages.imgix.net/tinyimg/Group%201312.svg", number: "250+", label: "Partner Schools" },
        { icon: "https://mindlerimages.imgix.net/tinyimg/Group%201313.svg", number: "50+", label: "University Partners" },
    ],

    // ── AWARDS ───────────────────────────────────────────────────────────────
    awards: [
        { label: "Department of Science & Technology, Government of India" },
        { label: "Minister of State, UAE Government" },
        { label: "Ministry of Commerce & Industry, DPIIT" },
        { label: "Indian School of Business, Hyderabad & US Consulate" },
        { label: "The Power of Ideas; Economic Times IIM-A, CIIE" },
        { label: "HolonIQ; Top 100 Ed-Tech India & South Asia" },
    ],

    // ── STICKY NAV ───────────────────────────────────────────────────────────
    navLinks: [
        { label: "Our Partners", href: "#partners" },
        { label: "About the Program", href: "#guide" },
        { label: "Why Panchant Learning", href: "#iccc" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact Us", href: "#contact" },
    ],

    // ── PARTNER LOGOS — all real Mindler CDN URLs ─────────────────────────────
    partnerLogos: [
        // ── Schools ──
        { category: "school", name: "Welham Girls' School, Dehradun", image: "https://mindlerimages.imgix.net/tinyimg/Welham_Girls'_School_logo.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Hyderabad Public School, Begumpet", image: "https://mindlerimages.imgix.net/tinyimg/The%20hyderabad%20public%20school.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Mayo Girls College, Ajmer", image: "https://mindlerimages.imgix.net/tinyimg/MayoGirlsCollege_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Punjab Public School, Nabha", image: "https://mindlerimages.imgix.net/tinyimg/Punjab%20public%20school.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "GEMS Modern Academy, Kochi", image: "https://mindlerimages.imgix.net/tinyimg/Gems_Academy.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Greenwood High School, Bengaluru", image: "https://mindlerimages.imgix.net/tinyimg/Greenwood%20High%20school_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "La Martiniere Girls College, Lucknow", image: "https://mindlerimages.imgix.net/tinyimg/La%20Martiniere%20Lucknow_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "Scindia Kanya Vidyalaya, Gwalior", image: "https://mindlerimages.imgix.net/tinyimg/Scindia.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "St George's College, Mussoorie", image: "https://mindlerimages.imgix.net/tinyimg/St.%20George's%20college_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "The Doon School, Dehradun", image: "https://mindlerimages.imgix.net/tinyimg/The_Doon_School,_Dehradun_-_logo_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Oxford International School, Punjab", image: "https://mindlerimages.imgix.net/tinyimg/oxford_international.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "GEMS Our Own English High School, Dubai", image: "https://mindlerimages.imgix.net/tinyimg/GIIS%20Dubai.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Welham Boys' School, Dehradun", image: "https://mindlerimages.imgix.net/tinyimg/Welham%20boys%20school.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "Yadavindra Public School, Patiala", image: "https://mindlerimages.imgix.net/tinyimg/oeau89l__400x400_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Jamnabai Narsee School, Mumbai", image: "https://mindlerimages.imgix.net/tinyimg/Jamnabai%20narsee%20International_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Presidency Group, Bengaluru", image: "https://mindlerimages.imgix.net/tinyimg/Presidency.webp" },
        { category: "school", name: "Lodha Group, Mumbai", image: "https://mindlerimages.imgix.net/tinyimg/Lodha%20World%20school.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Suncity School, Gurugram", image: "https://mindlerimages.imgix.net/tinyimg/Suncity%20School.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Don Bosco International School, Mumbai", image: "https://mindlerimages.imgix.net/tinyimg/Don%20Bosco.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "Global Indian International School", image: "https://mindlerimages.imgix.net/tinyimg/GIIS%20Singapore.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Velammal International School, Chennai", image: "https://mindlerimages.imgix.net/tinyimg/Velammal%20international%20school.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Gyanshree School, Noida", image: "https://mindlerimages.imgix.net/tinyimg/Gyanshree-School-Sector-127-Noida_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Edubridge International School, Mumbai", image: "https://mindlerimages.imgix.net/tinyimg/Edubridge%20international%20school.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "The Modern School, Kundli", image: "https://mindlerimages.imgix.net/tinyimg/Modern%20school.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "SelaQui International School, Dehradun", image: "https://mindlerimages.imgix.net/tinyimg/SelaQui.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "Heritage Girls School, Udaipur", image: "https://mindlerimages.imgix.net/tinyimg/Heritage%20girls%20school_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "Army Public School, New Delhi", image: "https://mindlerimages.imgix.net/tinyimg/Army%20public%20school_new_new.webp" },
        { category: "school", name: "Rockwell International School, Hyderabad", image: "https://mindlerimages.imgix.net/tinyimg/Rockwell%20International.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Deccan International School, Bengaluru", image: "https://mindlerimages.imgix.net/tinyimg/Deccan%20international%20school.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "St Columba's School, New Delhi", image: "https://mindlerimages.imgix.net/tinyimg/St._Columba's_new.webp" },
        { category: "school", name: "Sanskriti School, Delhi", image: "https://mindlerimages.imgix.net/tinyimg/SanskritiSchool_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Bodhi International School, Jodhpur", image: "https://mindlerimages.imgix.net/tinyimg/Bodhi%20international_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "The Asian School, Dehradun", image: "https://mindlerimages.imgix.net/tinyimg/The-Asian-school-logo_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "school", name: "DPS Rajnagar Extension, Ghaziabad", image: "https://mindlerimages.imgix.net/tinyimg/DPS%20-%20Raj%20nagar%20ext_new.png?fm=png&auto=format&lossless=1" },
        { category: "school", name: "Pacific World School, Greater Noida", image: "https://mindlerimages.imgix.net/tinyimg/Pacific%20world%20school.png?fm=png&auto=format&lossless=1" },

        // ── Universities ──
        { category: "university", name: "Acharya Institutes, Bengaluru", image: "https://mindlerimages.imgix.net/tinyimg/Acharya_Logo1.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Ahmedabad University", image: "https://mindlerimages.imgix.net/tinyimg/Ahmedabad%20University%20.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Alliance University, Bengaluru", image: "https://mindlerimages.imgix.net/tinyimg/Alliance%20University_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Amity University", image: "https://mindlerimages.imgix.net/tinyimg/Amity%20University.jpeg?fm=jpeg&auto=format&lossless=1" },
        { category: "university", name: "Amrita Vishwa Vidyapeetham", image: "https://mindlerimages.imgix.net/tinyimg/Amrita.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Atria University, Bangalore", image: "https://mindlerimages.imgix.net/tinyimg/Atria%20University.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Auro University", image: "https://mindlerimages.imgix.net/tinyimg/AURO-Surat-Gujarat_LOGO_Aug2023.webp" },
        { category: "university", name: "Bennett University, Greater Noida", image: "https://mindlerimages.imgix.net/tinyimg/Bennet_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "BML Munjal University, Gurgaon", image: "https://mindlerimages.imgix.net/tinyimg/BMLMunjal_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "FLAME University, Pune", image: "https://mindlerimages.imgix.net/tinyimg/FLAME%20logo_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "GD Goenka University, Gurugram", image: "https://mindlerimages.imgix.net/tinyimg/GD%20Goenka_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "ICFAI Group", image: "https://mindlerimages.imgix.net/tinyimg/ICFAI%20Group%20Logo%20with%20R%20mark_new.webp" },
        { category: "university", name: "IIHM, Delhi", image: "https://mindlerimages.imgix.net/tinyimg/IIHM.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Istituto Marangoni, Mumbai", image: "https://mindlerimages.imgix.net/tinyimg/Instituto%20Morangoni.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Jagran Lakecity University, Bhopal", image: "https://mindlerimages.imgix.net/tinyimg/Jagran%20Lake%20University_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "university", name: "JK Lakshmipat University, Jaipur", image: "https://mindlerimages.imgix.net/tinyimg/JKLULogoColor.webp" },
        { category: "university", name: "Karnavati University, Ahmedabad", image: "https://mindlerimages.imgix.net/tinyimg/KarnavatiUniversityLogo_new.webp" },
        { category: "university", name: "KIIT University", image: "https://mindlerimages.imgix.net/tinyimg/Kit.webp" },
        { category: "university", name: "KREA University, Chennai", image: "https://mindlerimages.imgix.net/tinyimg/KREA%20Univ_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "university", name: "Mahindra University, Hyderabad", image: "https://mindlerimages.imgix.net/tinyimg/Mahindra_University.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Manipal Academy of Higher Education (MAHE)", image: "https://mindlerimages.imgix.net/tinyimg/MAHE%20logo_new.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "university", name: "McMaster University, Canada", image: "https://mindlerimages.imgix.net/tinyimg/McMaster%20University.svg" },
        { category: "university", name: "Monash University, Australia", image: "https://mindlerimages.imgix.net/tinyimg/Monash_University_logo.webp" },
        { category: "university", name: "OP Jindal Global University", image: "https://mindlerimages.imgix.net/tinyimg/OP%20Jindal.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "university", name: "Queen's University Canada", image: "https://mindlerimages.imgix.net/tinyimg/QueensLogo_colour.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Shiv Nadar University, Greater Noida", image: "https://mindlerimages.imgix.net/tinyimg/ShivNadarUniv_new.webp" },
        { category: "university", name: "SRM University, Chennai", image: "https://mindlerimages.imgix.net/tinyimg/SRM%20Chennai.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "Trinity College Dublin, Ireland", image: "https://mindlerimages.imgix.net/tinyimg/Trinity%20College%20Dublin_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "University of Bristol, UK", image: "https://mindlerimages.imgix.net/tinyimg/University_of_Bristol_logo_Aug2023.webp" },
        { category: "university", name: "University of Exeter, UK", image: "https://mindlerimages.imgix.net/tinyimg/Uni-Exeter-Logo.jpg?fm=jpg&auto=format&lossless=1" },
        { category: "university", name: "University of Queensland, Australia", image: "https://mindlerimages.imgix.net/tinyimg/Univ%20of%20Queensland_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "University of Sydney, Australia", image: "https://mindlerimages.imgix.net/tinyimg/University%20of%20Sydney_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "VIT, Multiple Campus", image: "https://mindlerimages.imgix.net/tinyimg/VIT_new.png?fm=png&auto=format&lossless=1" },
        { category: "university", name: "York University, Canada", image: "https://mindlerimages.imgix.net/tinyimg/York.png?fm=png&auto=format&lossless=1" },
    ],

    // ── 12 STEP GUIDE — all real Mindler CDN images ───────────────────────────
    guideTitle: "12 Step Guide to a Comprehensive Career Guidance Ecosystem",
    guideSteps: [
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-002-books.png",
            title: "Comprehensive Career Guidance Curriculum",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/feature-img-1_Aug2023.png",
            bullets: [
                "Class Wise Career Guidance Curriculum",
                "Series of In-Person & Virtual Webinars by Expert Career Coaches",
                "Webinars on Profile Building",
                "Study Abroad Modules & Readiness Program",
                "Training on Skill Development",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-001-search.png",
            title: "World's Most Advanced Career Assessments",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-2.png",
            bullets: [
                "5 Dimensional Assessment",
                "Evaluation on 56 Holistic Parameters",
                "Comprehensive Career Report",
                "Best Fit Career & Stream Recommendations",
                "Developmental Plans & Analysis",
                "Highest Reliability & Validity with Cronbach Alpha Scores of 0.89+",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-003-work-from-home.png",
            title: "Immersive Virtual Career Simulators",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-3.png",
            bullets: [
                "Experience Careers through Virtual Internships",
                "Real Time Simulations & Experiential Interviews",
                "Comprehensive Internship Report & Analysis",
                "Certificate of Internship post Completion",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-004-search-1.png",
            title: "Career Discovery & Exploratory Platform",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-4_Aug2023.png",
            bullets: [
                "Exhaustive Career Library & Database",
                "Blogs & Curated Career Information",
                "Video Logs by Career Experts",
                "Career Activities led Exploration",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-005-strategy.png",
            title: "Automated Career Pathway & Planning Tools",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-5.png",
            bullets: [
                "Automated Roadmap Planning & Profile Building",
                "Repository of Entrance Exams (India & Abroad)",
                "College Library (India & Abroad)",
                "Live SMS & Email for Exam Notifications",
                "Scholarship Repository (India & Abroad)",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-006-leadership.png",
            title: "Personalised Career Guidance by Certified Career Coaches",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/feature-img-6_Aug2023.png",
            bullets: [
                "1-1 Personalised Career Guidance & Mentoring",
                "Sessions by Internationally Certified Career Coaches",
                "Documented Personalised Action Plans",
                "Dedicated Mentoring Support for Handholding",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-007-check.png",
            title: "Profile Evaluation & Building for College Readiness",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-7.png",
            bullets: [
                "In-Depth Profile Evaluation",
                "Emphasis on Skills of the Future",
                "Course Profiling and College Mapping",
                "Profile Positioning and Tracking",
                "Domain Specific Profile Building",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-008-degree.png",
            title: "Alumni Tracking & Engagement",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-8.png",
            bullets: [
                "Alumni Mapping to College admissions",
                "Alumni Discovery for Current Students",
                "Analytical Insights for School Management",
                "Alumni Engagement & Connect",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/Nexus_icon.png",
            title: "Nexus: AI-Powered Career Planning Tool",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/nexus-new.png",
            bullets: [
                "Best-Fit Subject Combinations as per Education Board & Career Preferences",
                "Interdisciplinary Career Suggestions",
                "Introduction to Role Models for Each Career Pathway",
                "Suggestion for Soft Skill Development",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/Orion_icon.png",
            title: "Orion: AI-Powered Career Mentor/Chatbot",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/Mindler Orion.jpeg",
            bullets: [
                "Personalized Interactive Advice",
                "Real-Time Insights on Career Related Queries",
                "Comprehensive Problem Solving",
                "Bespoke Responses Based on Inputs",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-011-decision.png",
            title: "Analytics Led Decision Making for School Management",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/new-feature-img-11_Aug2023.png",
            bullets: [
                "Analytics & Insights on Student Profile",
                "School/Counselor Dashboard for Real Time Tracking",
                "Insights into Student Preferences across Classes",
                "Mapping the Strengths & Areas of Improvement for Students",
                "Platform integration with School Website/Systems",
            ],
        },
        {
            icon: "https://mindlerimages.imgix.net/tinyimg/school-014-certificate-1.png",
            title: "International Certified Career Coach Program for Educators",
            featureImage: "https://mindlerimages.imgix.net/tinyimg/iccc-coach.png",
            bullets: [
                "In-Person Training for School Counsellors",
                "ICCC Foundation, Advanced & Master Certification",
                "Live Projects & Case Assignments",
                "Expert Webinars & Credentialing",
            ],
        },
    ],

    // ── ICCC SECTION ─────────────────────────────────────────────────────────
    // icccTitle: "International Certified Career Coach Program for Educators",
    // icccSubtitle: "A multi-level credentialing program to become an Internationally Certified Career Coach",
    // icccLevels: [
    //     {
    //         level: "Level 1",
    //         icon: "https://mindlerimages.imgix.net/tinyimg/iccc-basic-school.svg?w=32",
    //         title: "ICCC Foundation",
    //         credits: "15 Credits",
    //         duration: "2 Days (Virtual/In-person)",
    //         description: "Offers a hands-on approach to expand your horizons in career guidance & coaching.",
    //         bullets: ["In-person Training", "Global, 21st Century Skills", "Experiential Learning", "Training Materials"],
    //     },
    //     {
    //         level: "Level 2",
    //         icon: "https://mindlerimages.imgix.net/tinyimg/iccc-advance-school.svg?w=32",
    //         title: "ICCC Advanced",
    //         credits: "65 Credits",
    //         duration: "3 Months (Online)",
    //         description: "Expand & enhance your newly-acquired skills to solve real-life problems.",
    //         bullets: ["Live Project", "ICCC Credentialing", "Expert Webinars", "Case Assignments"],
    //     },
    //     {
    //         level: "Level 3",
    //         icon: "https://mindlerimages.imgix.net/tinyimg/iccc-master-school.svg?w=32",
    //         title: "ICCC Master",
    //         credits: "50 Credits",
    //         duration: "3 Months (Online)",
    //         description: "Get credentialing from the world's apex body & attain true mastery in career coaching.",
    //         bullets: ["Competency-Driven Learning", "Case Studies & Continuous Evaluation", "Expert Webinars", "CCSP Credentialing"],
    //     },
    // ],
    icccCoachImage: "https://mindlerimages.imgix.net/tinyimg/ICCC-new-banner.png",
    icccUpcomingCohort: "13 Mar - 14 Mar, 2026 (Virtual Conference)",

    // ── TESTIMONIALS ─────────────────────────────────────────────────────────
    testimonials: [
        {
            type: "quote",
            text: "All the things the assessment told me about myself and my interests were so true.",
            name: "Sneha",
            school: "DPS RK Puram",
            image: "https://mindlerimages.imgix.net/tinyimg/testi-6.jpg",
        },
        {
            type: "quote",
            text: "Panchant Learning provided a mentored framework for my son's ambitions to achieve and succeed.",
            name: "Kavita",
            school: "Parent",
            image: "https://mindlerimages.imgix.net/tinyimg/testi-5.jpg",
        },
        {
            type: "quote",
            text: "Signing up for Panchant Learning, and meeting and interacting with their experienced team was one of the best decisions I made.",
            name: "Shaurya",
            school: "Aga Khan Academy",
            image: "https://mindlerimages.imgix.net/tinyimg/testi-7.jpg",
        },
        {
            type: "story",
            text: "How Nitya overcame her inhibitions and biases to choose the stream best aligned to her career goals.",
            name: "Nitya",
            school: "",
            image: "https://mindlerimages.imgix.net/tinyimg/new-nitya_new.webp",
            storyLink: "/success-stories/confused-class-10-student-found-her-perfect-stream",
        },
    ],

    // ── COMPANY LOGOS ─────────────────────────────────────────────────────────
    companyLogos: [
        { name: "Company 1", image: "https://mindlerimages.imgix.net/tinyimg/bp-1.png?fm=png&auto=format&lossless=1" },
        { name: "Company 2", image: "https://mindlerimages.imgix.net/tinyimg/bp-2.png?fm=png&auto=format&lossless=1" },
        { name: "Company 3", image: "https://mindlerimages.imgix.net/tinyimg/bp-3.png?fm=png&auto=format&lossless=1" },
        { name: "Company 4", image: "https://mindlerimages.imgix.net/tinyimg/bp-4.png?fm=png&auto=format&lossless=1" },
        { name: "Company 5", image: "https://mindlerimages.imgix.net/tinyimg/bp-5.png?fm=png&auto=format&lossless=1" },
    ],

    // ── FAQs ─────────────────────────────────────────────────────────────────
    faqs: [
        {
            question: "How does the Panchant Learning school program work?",
            answer: "We partner with schools to provide a complete career guidance ecosystem — 5-dimensional assessments, personalized counselling, counsellor training, and access to our career content platform. The program is fully customized based on the school's needs and student grades.",
        },
        {
            question: "Which grades does the program cover?",
            answer: "Our programs are designed for Grade 8 through Grade 12 with age-appropriate assessments and counselling frameworks aligned to key decision points like stream selection (Class 10) and career/college selection (Class 11-12).",
        },
        {
            question: "How long does implementation take?",
            answer: "The program can typically be launched within 2–4 weeks of signing the partnership agreement. Our team handles all onboarding, training, and setup.",
        },
        {
            question: "Can the program be customized for our school?",
            answer: "Absolutely. We offer flexible program structures tailored to your school's student population, existing counselling infrastructure, and specific goals.",
        },
        {
            question: "Do you train our school counsellors?",
            answer: "Yes. Training and certifying school counsellors is a core part of our partnership through the ICCC program, with ongoing support and workshops.",
        },
        {
            question: "How do we measure the impact of the program?",
            answer: "Schools get a dedicated administrator dashboard tracking assessment completion, counselling progress, student career clarity scores and other key metrics with periodic review sessions.",
        },
    ],

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contactTitle: "Partner With Panchant Learning",
    contactSubtitle: "Leave your details below and our schools team will get in touch within 2 working days.",
};

const SchoolsPage = () => <SchoolsPageTemplate data={schoolsData} />;
export default SchoolsPage;