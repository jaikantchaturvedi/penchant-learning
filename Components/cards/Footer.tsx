import React from "react";

const FooterSection: React.FC = () => {
  return (
    <>
      {/* FOOTER */}
      <section className="w-full bg-[#0D0C21] text-white px-6 sm:px-10 md:px-16 lg:px-[70px] py-24 md:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT + MENU */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* ADDRESS + CONTACT */}
            <div className="text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">
                39, Pankaj Singhvi Marg, Everest Colony, Jaipur 302004
              </p>

              <div className="mt-4 space-y-2">

                {/* Email */}
                <p className="flex items-center gap-2 flex-wrap">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>

                  <a
                    href="mailto:penchantlearnings@gmail.com"
                    className="break-all hover:text-white"
                  >
                    penchantlearnings@gmail.com
                  </a>
                </p>

                {/* Phone 1 */}
                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.72 2.88a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.86-.45l2.88.72A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+919468643369">+91 94686 43369</a>
                </p>

                {/* Phone 2 */}
                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.72 2.88a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.86-.45l2.88.72A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+916378907469">+91 63789 07469</a>
                </p>
              </div>
            </div>

            {/* MENU */}
            {/* <div className="space-y-4 text-gray-300 text-sm sm:text-base">
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
            </div> */}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col text-left lg:text-right items-start lg:items-end">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold leading-tight">
              <span className="block">Supporting your path</span>
              <span className="block">to wellness</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed text-gray-300 max-w-xl">
              Listener offers caring support to help you heal and grow, with
              guidance tailored for individuals and families in a safe, trusted,
              and compassionate way.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING CALL & WHATSAPP BUTTONS */}
      <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3">

        {/* Call Button */}
        <a
          href="tel:+916378907469"
          className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Call Us"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.72 2.88a2 2 0 01-.45 1.86l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.86-.45l2.88.72A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
            />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916378907469"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="WhatsApp Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default FooterSection;
