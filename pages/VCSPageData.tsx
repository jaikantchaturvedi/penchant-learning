// import { VCSPageTemplate, VCSPageData } from "@/Components/VCSPageTemplate";
import { VCSPageTemplate,VCSPageData } from "@/Components/VCSPageTemplate";

const vcsData: VCSPageData = {

    heroTitle: "Experience career paths from the comfort of your home",
    heroSubtitle: "Take multiple careers for a test-drive and understand the inner workings of each profession with our Virtual Career Simulator.",
    heroCta: "Start Free Trial",
    ctaLink: "#",
    backgroundImage:"/images/vcs_hero.png",

    highlights: [
        {
            icon: "/images/vcs-students.svg",
            text: "10,000+ students enrolled and believe the Virtual Career Simulator helped them",
        },
        {
            icon: "/images/vcs-certificate.svg",
            text: "A Certificate of Experience to ensure your resume showcases your interests",
        },
        {
            icon: "/images/vcs-report.svg",
            text: "Insightful 15-page career report to help identify your strengths and weaknesses",
        },
        {
            icon: "/images/vcs-clock.svg",
            text: "Spend just 30 minutes each day and get the benefits of a real-world internship",
        },
    ],

    careersSectionTitle: "Virtual Careers Offered",
    careersSectionSubtitle: "Please select a career below to start",
    viewAllLink: "/virtual-careers",

    careers: [
        {
            id: "risk-management",
            title: "Enterprise Risk Management (ERM)",
            by: "Mr. Rajeev Tanna",
            minutes: 160,
            rating: 4.5,
            image: "/images/career-erm.png",
            tag: "ERM",
            skills: ["360° Risk Management", "Risk Consulting", "+2 more"],
            href: "/virtual-careers/risk-management",
        },
        {
            id: "hospitality",
            title: "Hospitality",
            by: "Roshan Shetty",
            minutes: 145,
            rating: 4.5,
            image: "/images/career-hospitality.png",
            tag: "Hospitality",
            skills: ["Hotel Management", "Restaurateur", "+2 more"],
            href: "/virtual-careers/hospitality",
        },
        {
            id: "law",
            title: "Law",
            by: "Prem Rajani",
            minutes: 125,
            rating: 5.0,
            image: "/images/career-law.png",
            tag: "Law",
            skills: ["Corporate Law", "Criminal Law", "+2 more"],
            href: "/virtual-careers/law",
        },
        {
            id: "film-making",
            title: "Film Making",
            by: "Howard Rosemeyer",
            minutes: 135,
            rating: 5.0,
            image: "/images/career-film.png",
            tag: "Film Making",
            skills: ["Direction", "Cinematography", "+5 more"],
            href: "/virtual-careers/film-making",
        },
        {
            id: "dentistry",
            title: "Dentistry",
            by: "Dr. Rajiv Verma",
            minutes: 130,
            rating: 5.0,
            image: "/images/career-dentistry.png",
            tag: "Dentistry",
            skills: ["Medicine", "Endodontist", "+1 more"],
            href: "/virtual-careers/dentistry",
        },
        {
            id: "architecture",
            title: "Architecture",
            by: "Arjun Rathi",
            minutes: 120,
            rating: 5.0,
            image: "/images/career-architecture.png",
            tag: "Architecture",
            skills: ["Construction", "Blueprint", "+1 more"],
            href: "/virtual-careers/architecture",
        },
        {
            id: "fund-management",
            title: "Fund Management",
            by: "Dhruvesh Sanghvi",
            minutes: 140,
            rating: 4.5,
            image: "/images/career-fund.png",
            tag: "Fund Management",
            skills: ["Investing", "Stock Market", "+3 more"],
            href: "/virtual-careers/fund-management",
        },
        {
            id: "marketing",
            title: "Marketing",
            by: "Ronak Sheth",
            minutes: 130,
            rating: 5.0,
            image: "/images/career-marketing.png",
            tag: "Marketing",
            skills: ["Digital Marketing", "Advertising", "+2 more"],
            href: "/virtual-careers/marketing",
        },
    ],

    experienceSectionTitle: "Experience careers before taking a decision",
    experienceSectionSubtitle: "Virtual Career Simulator (VCS) allows you to explore up to 46 careers through an experiential, immersive, self-paced career discovery program.",

    featureBlocks: [
        { icon: "/images/vcs-book.svg", label: "Simulated Educational Course" },
        { icon: "/images/vcs-game.svg", label: "Role Playing Game" },
        { icon: "/images/vcs-briefcase.svg", label: "Practical Work Experience" },
        { icon: "/images/vcs-laptop.svg", label: "Completely Online" },
    ],

    internshipReasons: [
        {
            title: "Why do an internship as a student?",
            image: "/images/vcs-intern.svg",
            points: [
                "Improve your CV with real experience",
                "Learn directly from industry experts",
                "Expedite your career discovery process",
                "Increase self-confidence through hands-on exposure",
            ],
        },
        {
            title: "Key benefits of an internship",
            image: "/images/vcs-benefits.svg",
            points: [
                "Get a Certificate of Experience",
                "Learn from top industry professionals",
                "Work on real practical assignments",
                "Get first-hand career experience",
            ],
        },
        {
            title: "Why do an internship online?",
            image: "/images/vcs-wfh.svg",
            points: [
                "Work and learn at your own pace",
                "Learn from anywhere in the world",
                "Get practical exposure to multiple careers",
                "Try multiple career internships easily",
            ],
        },
        {
            title: "How to choose the perfect internship?",
            image: "/images/vcs-choose.svg",
            points: [
                "Identify your target careers first",
                "Discover your best-fit careers",
                "Explore the internship layout before committing",
                "Talk to our career experts for guidance",
            ],
        },
    ],

    testimonials: [
        {
            text: "The most attractive and impressive part was the gamified version. I must say this is the best thing which I've ever experienced till now.",
            author: "Smriti Ruparel",
            role: "Student",
            image: "/images/testi-smriti.png",
        },
        {
            text: "The simulations were really helpful. I did the architecture one, so it helped me to understand architecture better, the different types of architecture.",
            author: "Shania Serao",
            role: "Student",
            image: "/images/testi-shania.png",
        },
        {
            text: "The professional who was talking about the career, I lived his life. The experience was very good and the way he explained about the career, that was amazing.",
            author: "Shubham",
            role: "Student",
            image: "/images/testi-shubham.png",
        },
        {
            text: "After watching all the videos and doing the tasks, it has given me a clearer vision. I'll recommend everyone to do this course.",
            author: "Sanaya Sabharwal",
            role: "Student",
            image: "/images/testi-sanaya.png",
        },
        {
            text: "It was a very good experience, different from other forms of career counseling as this was more student-friendly and audio-visual, making it more appealing to our senses.",
            author: "Pearl Pandya",
            role: "Student",
            image: "/images/testi-pearl.png",
        },
        {
            text: "Immrse has been a wonderful experience, and a very hands-on and experimental way of testing aptitude in comparison to the other tests I've been through.",
            author: "Vrushali Mehta",
            role: "Student",
            image: "/images/testi-vrushali.png",
        },
    ],

    pricingTitle: "Finding the right career is priceless",

    plans: [
        {
            tier: "Career Inspector",
            name: "Inspector",
            pack: "Pack of 1 career",
            duration: "1 week (30 mins daily)",
            price: "₹1,999",
            highlight: false,
        },
        {
            tier: "Career Seeker",
            name: "Seeker",
            pack: "Pack of 3 careers",
            duration: "2.5 weeks (30 mins daily)",
            price: "₹3,999",
            highlight: true,
        },
        {
            tier: "Career Explorer",
            name: "Explorer",
            pack: "Pack of 5 careers",
            duration: "4 weeks (30 mins daily)",
            price: "₹5,999",
            highlight: false,
        },
    ],

    packInclusions: [
        { icon: "/images/vcs-file.svg", text: "15 pages in-depth career report" },
        { icon: "/images/vcs-cert.svg", text: "Certificate of completion" },
        { icon: "/images/vcs-globe.svg", text: "In-depth hands-on experience from anywhere, anytime" },
        { icon: "/images/vcs-video.svg", text: "Guided videos by industry experts with live projects" },
    ],

    faqs: [
        {
            question: "What is the Virtual Career Simulator (VCS)?",
            answer: "Virtual Career Simulator™ (VCS) provides students with a hands-on practical experience of an occupation in real life-like situations. In a completely online mode, students can deep dive into their preferred careers and learn through real life simulations, role playing games and experiential videos.",
        },
        {
            question: "Which age group does the VCS cater to?",
            answer: "Virtual Career Simulator™ (VCS) is designed for school and college students from Grade 8 and above.",
        },
        {
            question: "What is the science behind the Virtual Career Simulator?",
            answer: "The VCS is an intensively researched, developed and tested program. It integrates simulations (tasks or activities a professional does on a daily basis) with an in-depth orientation of the industry. These simulations tap practical skills and are designed and tested by experienced psychologists.",
        },
        {
            question: "How is the VCS useful for students?",
            answer: "The VCS gives users a platform to understand a profession directly from an expert professional through videos, as well as gives an opportunity to practically experience a profession through activities before choosing a particular career.",
        },
        {
            question: "Can users take the VCS in multiple careers?",
            answer: "Yes, they can. It is advisable to take the VCS in multiple careers so that students don't make the vital career decision with limited knowledge. The more VCS's explored, the better the decision that can be made.",
        },
        {
            question: "How long will each Virtual Career Simulator take?",
            answer: "Each VCS takes a minimum of 1 hour to a maximum of 2.5 hours depending on individual factors like number of breaks taken, times videos are replayed, time taken to solve simulations, and individual note-taking habits.",
        },
        {
            question: "Will the VCS benefit students who are sure of their career choice?",
            answer: "Yes! It gives the student a hands-on practical exposure to the careers they're sure about — providing a golden chance to gain in-depth knowledge about that particular field ranging from every minute detail to the holistic picture.",
        },
        {
            question: "How is VCS different from Penchant Learning's Career Assessment?",
            answer: "Career Assessments help students get a comprehensive analysis of their profile and discover best-fit careers based on multiple dimensions. The VCS allows students to deep-dive into those best-fit careers to gain real-life experience in those career domains.",
        },
    ],
};

const VCSPage = () => <VCSPageTemplate data={vcsData} />;
export default VCSPage;