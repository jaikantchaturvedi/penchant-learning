import { FiMail } from "react-icons/fi";

export default function NewsletterSignup() {
  return (
    <section className="w-full bg-[#fafafa] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-[#0A2A52] leading-[1.3]">
           Join us   <br /> for helpful career tips!
          </h2>
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col space-y-3">

          {/* INPUT + BUTTON */}
          <div className="flex items-center bg-white shadow-sm border border-gray-200 rounded-full h-[50px] w-full overflow-hidden">
            <div className="flex items-center px-3 text-gray-500">
              <FiMail className="w-4 h-4" />
            </div>

            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-2 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />

            <button className="bg-[#8B4436] text-white font-medium px-6 h-full text-sm rounded-full whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* CHECKBOX */}
          <label className="flex items-center space-x-2 text-gray-500 text-xs md:text-sm">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 rounded border-gray-300 focus:ring-0"
            />
            <span>
              I agree that my submitted data is being{" "}
              <span className="text-[#9A3F2E] font-medium">collected and stored.</span>
            </span>
          </label>
        </div>

      </div>
    </section>
  );
}
