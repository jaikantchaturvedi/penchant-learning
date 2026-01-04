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
              <p>info@listener.com</p>
              <p>+1 416–555–0198</p>
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
