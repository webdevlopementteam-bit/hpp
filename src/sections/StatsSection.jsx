"use client";

const stats = [
  {
    number: "12+",
    title: "Years  Experience",
  },
  {
    number: "11000+",
    title: "Successful Installations",
  },
  {
    number: "1000+",
    title: "Trusted Industrial Clients",
  },
  {
    number: "20+",
    title: "Advanced Product Variants",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Number */}
              <h2 className="text-[50px] md:text-[70px] font-extrabold leading-none tracking-tight text-[#4a4f5d]">
                {item.number}
              </h2>

              {/* Line */}
              <div className="mt-8 mb-2 h-[2px] w-36 bg-gray-200"></div>

              {/* Text */}
              <p className="max-w-[290px] text-[18px] md:text-[18px] font-medium text-[#222] leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}