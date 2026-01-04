 import Image from "next/image";

interface TestimonialCardProps {
  stars?: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({
  stars = 5,
  text,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 rounded-2xl sm:rounded-3xl w-full min-w-0">
      {/* Stars */}
      <div className="flex gap-1 mb-4 sm:mb-5">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-[#ED8A19] text-lg sm:text-xl">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-base sm:text-lg font-semibold text-[#032e61] mb-6 sm:mb-8 break-words leading-relaxed">
        {text}
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[#032e61] font-semibold text-base sm:text-lg break-words">{name}</p>
          <p className="text-gray-500 text-xs sm:text-sm break-words">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 flex justify-center px-4 sm:px-6 overflow-x-hidden">
      {/* Yellow rounded container */}
      <div className="bg-[#F7F6F0] max-w-7xl w-full rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
        
        {/* Heading Row */}
<div className="flex flex-col lg:flex-row justify-between items-start w-full mb-10 sm:mb-12 md:mb-16 gap-4">
  
  <p className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] text-[#0A2A54] font-medium">
    EXPLORE LISTENER TODAY
  </p>

  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0A2A54] 
                 leading-tight break-words 
                 text-left lg:text-right 
                 max-w-3xl">
    <span className="block">Honest words from</span>
    <span className="block">happy clients</span>
  </h1>

</div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          <TestimonialCard
            text="I had a very good experience with the counseling. The counselor was supportive, patient, and explained everything clearly. Proper guidance was given according to my goals, and all my doubts were addressed honestly.Something like this really need in the field,with expertise in science and the art of living ,the founder and group is actually changing life of people.The session helped me gain clarity and confidence in my decisions. I would definitely recommend this counseling to others seeking genuine and reliable guidance.  "
            name="Devesh Gupta"
            role="Community Advocate"
            avatar="/userimge.jpeg"
          />

          <TestimonialCard
            text="The career counseling sessions were an absolute excellent. I went in feeling completely lost, but the counselor's insights provided a clear roadmap for my future career. I now feel confident and motivated about my path.The counselors were supportive and patient, and they answered all my questions properly. Overall, this program helped me make better decisions about my future, and I’m really grateful for it."
            name="Anushka Jain"
            role="Healthcare Director"
            avatar="/userimage1.jpg"
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
