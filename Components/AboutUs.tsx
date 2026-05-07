import AboutUsTemplate, { AboutUsData } from "@/Components/AboutUsTemplate";
import FooterSection from "@/Components/cards/Footer";
import Link from "next/link";
// import Header from "@/Components/header/Header";

const aboutUsData = {
    title: "About Us",
    subtitle: "Learn more about what makes Penchant Learning different.",
    cards: [
        {
            title: "Who We Are",
            description: "Penchant Learning is a platform focused on empowering individuals with practical skills and real-world knowledge.",
        },
        {
            title: "Our Mission",
            description: "Our mission is to make quality education accessible and help learners grow in their careers with confidence.",
        },
        {
            title: "What We Offer",
            description: "We provide industry-relevant courses, expert mentorship, and hands-on learning experiences.",
        },
        {
            title: "Why Choose Us",
            description: "We focus on practical learning, personalized guidance, and real results that help you succeed.",
        },
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact",
};

const AboutPage = () => {

    return <>


        <AboutUsTemplate data={aboutUsData} />;
        <section className="w-full bg-white py-12 px-6 md:px-16">
            <h1 className="text-5xl font-bold text-[#092a51] mb-8 text-center">
                ABOUT FOUNDER
            </h1>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Column */}
                <div className="flex flex-col items-center text-center md:text-left">
                    <img
                        src="/about-2.jpeg" // <-- put your image in public/images
                        alt="Dr. Adya Chaturvedi"
                        className="w-65 h-65 object-cover rounded-md shadow-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-[#092a51]">
                        Dr.Adya Chaturvedi(Scientist)
                    </h3>
                </div>

                {/* Right Column */}
                <div className="text-gray-700 text-[15px] leading-relaxed">
                    <h1 className="text-2xl font-bold text-[#092a51] mb-4">About Scientist</h1>
                    <p>“At Penchant Learning, we started with a simple vision — to help students and professionals make career decisions with confidence and clarity. Today, in a world full of endless options and growing competition, many individuals struggle to identify the right path for themselves. Our goal has always been to provide the right guidance, personalized support, and expert mentorship that helps every individual discover their true potential.
                        Over the years, we have had the privilege of guiding hundreds of students and working professionals in shaping successful academic and career journeys. From helping students choose the right stream, college, or course to supporting professionals in career transitions and growth, every success story inspires us to continue our mission with dedication and passion.
                        What makes us proud is not just the number of students we have guided, but the confidence, clarity, and transformation they achieve throughout their journey with us. We believe that success is not only about securing admissions or jobs — it is about helping individuals build a future they truly believe in.
                        At Penchant Learning, every student’s dream matters to us, and we remain committed to creating more success stories, one career at a time.”</p>

                </div>

            </div>
        </section>
        <section className="w-full bg-white py-12 px-6 md:px-16">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                <div className="text-gray-700 text-[15px] leading-relaxed">
                    <h1 className="text-2xl font-bold text-[#092a51] mb-4">About Professor</h1>
                    <p>
                        At Penchant Learning, we are committed to helping individuals find clarity and confidence in their career journey. Choosing the right career path can be overwhelming, especially with so many options and limited guidance.
                    </p>
                    <p className="mt-4">
                        We provide expert career counseling for students, graduates, and working professionals who want to make informed and confident decisions about their future.
                    </p>
                    <p className="mt-4">
                        Through a combination of personalized mentoring, career assessments, and practical strategies, we help individuals understand their strengths, explore the right opportunities, and take meaningful steps toward their goals.
                    </p>
                    <p className="mt-4 font-medium text-[#092a51]">
                        Our mission is simple — to eliminate confusion and empower every individual with the right direction.
                    </p>
                </div>
                {/* Left Column */}
                <div className="flex flex-col items-center text-center md:text-left">
                    <img
                        src="/about-1.jpeg" // <-- put your image in public/images
                        alt="Dr. Ruchi Vyas"
                        className="w-65 h-65 object-cover rounded-md shadow-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-[#092a51]">
                        Dr. Ruchi Vyas(College Professor)
                    </h3>
                </div>

                {/* Right Column */}


            </div>
        </section>

        <h2 className="text-5xl font-bold text-[#092a51] mb-6 mt-8 text-center">
            Our Story
        </h2>
        <section className="w-full bg-[#f9fafb] py-16 px-6 md:px-16">

            <div className="max-w-5xl mx-auto text-center">

                {/* Subheading */}
                <h3 className=" text-2xl  font-semibold text-[#8c5a31]">
                    Why We Started
                </h3>

                {/* Paragraph */}
                <p className="mt-6 text-gray-600 leading-relaxed text-[15px] md:text-base max-w-3xl mx-auto">
                    Many students and professionals struggle with confusion, pressure, and lack of proper guidance when making career decisions.
                    <br /><br />
                    Penchant Learning was created to bridge this gap.
                    <br /><br />
                    We believe that the right guidance at the right time can completely transform a person’s life. Our goal is to ensure that no one feels lost when it comes to their future.
                </p>

                {/* Highlight Quote */}
                <div className="mt-10">
                    <div className="inline-block px-6 py-4 bg-[#092a51] text-white rounded-xl shadow-md">
                        <p className="text-lg md:text-xl font-medium italic">
                            “Right guidance at the right time changes life”
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section className="w-full bg-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#092a51]">
                    Our Approach
                </h2>
                <p>We follow a simple and effective 3-step process:
                </p>
                {/* Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="bg-[#8c5a31] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-white">
                            Assess
                        </h3>
                        <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                            We evaluate your personality, interests, and strengths using proven tools.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#8c5a31] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-white">
                            Explore
                        </h3>
                        <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                            We help you discover suitable career paths based on your profile.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#8c5a31] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-white">
                            Act
                        </h3>
                        <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                            We provide a clear roadmap so you can confidently move forward.
                        </p>
                    </div>

                </div>

            </div>
        </section>
        <section
            className="w-full py-20 px-6 md:px-16 bg-contain bg-center relative mb-8 "

        >
            {/* Overlay */}

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center text-black">

                <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                    Still unsure about your career path?
                </h2>

                <p className="mt-4 text-sm md:text-lg text-gray-900">
                    Let’s work together to bring clarity and direction to your journey.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <button className="bg-[#8c5a31] hover:bg-[#6e4626] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
                        Book your first session today
                    </button>
                </div>

            </div>
        </section>

        <section className="w-full grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="bg-[#f8f8f8] py-16 px-6 md:px-16">

                <p className="text-md tracking-widest text-[#8c5a31] font-bold">
                    WHY CHOOSE US
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#092a51] mt-2">
                    What Sets Us <span className="text-[#8c5a31] italic">Apart</span>
                </h2>

                <div className="mt-10 space-y-5">
                    {[
                        "Personalized One-on-One Guidance",
                        "Expert-Backed Career Assessments",
                        "Practical & Actionable Career Plans",
                        "Continuous Support & Mentorship",
                        "Focus on Long-Term Career Clarity"
                    ].map((title, i) => (
                        <div
                            key={i}
                            className="border border-[#e5e5e5] p-5 rounded-lg flex gap-4 items-start hover:shadow-md transition"
                        >
                            {/* Tick Icon */}
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#8c5a31] flex-shrink-0">
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            {/* Text */}
                            <h4 className="font-semibold text-[#092a51]">
                                {title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full h-[500px] md:h-auto">

                <img
                    src="/career-4.jpg"
                    alt="Career"
                    className="w-full h-full object-cover"
                />

            </div>

        </section>
        <section className="w-full bg-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#092a51]">
                    Our Impact
                </h2>

                {/* Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-[#092a51]">
                            100+
                        </h3>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            Students
                        </p>
                        <p className=" text-gray-600 text-sm leading-relaxed">
                            Guided
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-[#092a51]">
                            15+
                        </h3>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            Career

                        </p>
                        <p className=" text-gray-600 text-sm leading-relaxed">
                            Transformations
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-[#092a51]">
                            2+
                        </h3>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            Years


                        </p>
                        <p className=" text-gray-600 text-sm leading-relaxed">
                            Experience
                        </p>
                    </div>

                </div>

            </div>
        </section>

        <FooterSection />
    </>
};

export default AboutPage;