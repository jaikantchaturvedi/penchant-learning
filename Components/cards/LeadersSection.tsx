import Image from "next/image";

export default function LeadersSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start w-full">
          
          {/* LEFT TEXT SECTION */}
          <div className="col-span-1 text-center lg:text-left w-full">
            <p className="text-xs sm:text-sm tracking-wider text-[#003366] font-semibold mb-2 break-words">
              MEET OUR CARING TEAM
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#032e61] leading-tight mb-4 sm:mb-6 break-words">
              Our leaders
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#032e61] break-words">
              We're 120+ professionals dedicated to your well-being
            </p>
          </div>

          {/* RIGHT IMAGES SECTION */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
            
            {/* Leader 1 */}
            <div className="w-full min-w-0">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl aspect-[3/4] relative w-full">
                <Image
                  src="/leader1.jpg"
                  alt="Samanta Patel"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 text-[#032e61] text-lg sm:text-xl font-semibold break-words">
                Samanta Patel
              </h3>
              <p className="text-gray-500 text-sm sm:text-base break-words">Lead therapist</p>
            </div>

            {/* Leader 2 */}
            <div className="w-full min-w-0">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl aspect-[3/4] relative w-full">
                <Image
                  src="/leader2.jpg"
                  alt="Dr. Maya Chen"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 text-[#032e61] text-lg sm:text-xl font-semibold break-words">
                Dr. Maya Chen
              </h3>
              <p className="text-gray-500 text-sm sm:text-base break-words">Clinical director</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}