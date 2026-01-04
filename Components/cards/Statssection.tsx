export default function StatsSection() {
  const stats = [
     {
      value: "100+",
      text: "Students empowered and counselled",
    },
      {
      value: "15+",
      text: "Positive career enhancements",
    },
    {
      value: "2+",
      text: "Years supporting careers and personal growth",
    },
   
  
  
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F6F1] rounded-3xl p-6 shadow-sm flex flex-col justify-center min-h-[220px]"
            >
              <h2 className="text-7xl font-semibold text-[#0A2A4A] mb-5">
                {item.value}
              </h2>

              <p className="text-[#0A2A4A] text-base font-normal leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
