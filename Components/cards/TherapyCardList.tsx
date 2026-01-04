import TherapyCard from "./TherapyCard";  

interface Therapy {
  category: string;
  title: string;
  image: string;
}

const therapyData: Therapy[] = [
  {
    category: "SELF-IMPROVEMENT",
    title: "Building resilience through cognitive behavioral therapy",
    image: "/therapy1.jpg",
  },
  {
    category: "MENTAL WELLNESS",
    title: "Unlocking self-awareness through psychological techniques",
    image: "/therapy2.jpg",
  },
  {
    category: "MENTAL WELLNESS",
    title: "Understanding how therapy fosters personal growth",
    image: "/therapy3.jpg",
  },
];

export default function TherapyCardList() {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16">
      
      {/* HEADER */}
      <div className="text-left mb-12 max-w-3xl">
        <h1 className="text-sm tracking-widest uppercase text-[#032e61]">
          Supporting your mental health path
        </h1>

        <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#032e61] leading-tight">
          We provide expert <br /> therapy for all
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10
      ">
        {therapyData.map((therapy, index) => (
          <TherapyCard
            key={index}
            category={therapy.category}
            title={therapy.title}
            image={therapy.image}
            isFeatured={index === 1} 
          />
        ))}
      </div>

    </section>
  );
}
