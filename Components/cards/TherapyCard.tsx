import Image from "next/image";

interface TherapyCardProps {
  category: string;
  title: string;
  image: string;
  isFeatured?: boolean;
}

export default function TherapyCard({
  category,
  title,
  image,
  isFeatured = false,
}: TherapyCardProps) {
  return (
    <div
      className={`
        w-full cursor-pointer
      
      `}
    >
      
      {/* IMAGE */}
      <div
        className={`
          relative w-full overflow-hidden rounded-3xl
          ${isFeatured ? "aspect-[3/3]" : "aspect-[4/3]"}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* CATEGORY */}
      <p className="mt-4 text-xs tracking-widest font-semibold text-[#032e61] uppercase">
        {category}
      </p>

      {/* TITLE */}
      <h2 className="
        mt-2
        text-lg
        sm:text-xl
        md:text-[22px]
        lg:text-[25px]
        font-semibold
        leading-snug
        text-[#032e61]
      ">
        {title}
      </h2>

      {/* META */}
      <div className="mt-3 text-sm text-gray-400">
        Sep 18, 2025 • 2 Comments
      </div>
    </div>
  );
}
