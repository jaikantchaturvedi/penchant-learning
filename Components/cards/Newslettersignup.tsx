import { FiMail } from "react-icons/fi";

export default function NewsletterSignup() {
  return (
    <section className="w-full bg-[#fafafa] py-12">
      <div className="max-w-7xl mx-auto px-6 flex gap-2 md:gap-6 items-center justify-between">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A2A52] leading-[1.3]">
           Join us for helpful career tips!
          </h2>
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col space-y-3">
          <a href="tel:+916378907469" style={{ backgroundColor: "#8c5a31" }} className="px-4 py-2 rounded-full text-white text-sm md:text-xl font-medium whitespace-nowrap mt-[20px] md:mt-[0px]" aria-label="Call Us">Consult Now</a>
        </div>

      </div>
    </section>
  );
}
