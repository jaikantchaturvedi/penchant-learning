import React from "react";

const FooterSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0D0C21] text-white px-6 sm:px-10 md:px-16 lg:px-[70px] py-24 md:py-32  relative">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        
        {/* LEFT + MENU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* ADDRESS + CONTACT */}
          <div className="text-gray-300 text-sm sm:text-base">
            <p className="leading-relaxed">
              39, Pankaj Singhvi Marg, Everest Colony, Jaipur 302004
            </p>

            <div className="mt-4 space-y-1">
              <p className="flex items-center gap-2 flex-wrap">
                
                <svg className="w-4 h-4 text-[#fcfcfc]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                </svg>

                <a href="mailto:penchantlearnings@gmail.com" className="break-words break-all sm:break-words">
                  penchantlearnings@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <svg className="w-4 h-4 text-[#fcfcfc]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.72 2.88a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.86-.45l2.88.72A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/>
                </svg>

                <a href="tel:+919468643369">+91 94686 43369</a>
              </p>
              <p className="flex items-center gap-2 flex-wrap">
                <svg className="w-4 h-4 text-[#fcfcfc]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.72 2.88a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.86-.45l2.88.72A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/>
                </svg>
                <a href="tel:+916378907469">+91 63789 07469</a>
              </p>

              {/* <p><a href="mailto:penchantlearnings@gmail.com">penchantlearnings@gmail.com</a></p>
              <p><a href="tel:+919468643369">+9468643369</a><a href="tel:+916378907469">+6378907469</a></p> */}
            </div>
          </div>

          {/* MENU */}
          <div className="space-y-4 text-gray-300 text-sm sm:text-base">
            {["Home", "Services", "About Us", "Gallery", "Contact Us"].map(
              (item) => (
                <p
                  key={item}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="
          flex flex-col
          text-left
          lg:text-right
          items-start
          lg:items-end
        ">
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[55px]
            font-semibold
            leading-tight
          ">
            <span className="block">Supporting your path</span>
            <span className="block">to wellness</span>
          </h1>

          <p className="
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            lg:text-[22px]
            leading-relaxed
            text-gray-300
            max-w-xl
          ">
            Listener offers caring support to help you heal and grow, with
            guidance tailored for individuals and families in a safe, trusted,
            and compassionate way.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FooterSection;
